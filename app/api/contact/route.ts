import { NextRequest, NextResponse } from "next/server";

const recipient = "shawonh986@pisimai.com";
const allowedServices = new Set([
  "AI & Intelligent Systems",
  "Software & Digital Platforms",
  "Robotics & Automation",
  "System Integration",
  "Other / Not sure yet",
  "人工智能与智能系统",
  "软件与数字平台",
  "机器人与自动化",
  "系统集成",
  "其他 / 尚未确定",
]);

function clean(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[character] ?? character);
}

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (origin && origin !== request.nextUrl.origin) {
    return NextResponse.json({ error: "Invalid origin" }, { status: 403 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  if (!apiKey || !from) {
    return NextResponse.json({ error: "Email service is not configured" }, { status: 503 });
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  if (!payload || typeof payload !== "object") {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const body = payload as Record<string, unknown>;
  // Quietly accept bot submissions without sending an email.
  if (clean(body.website, 200)) return NextResponse.json({ ok: true });

  const name = clean(body.name, 100);
  const email = clean(body.email, 254);
  const company = clean(body.company, 120);
  const service = clean(body.service, 80);
  const message = clean(body.message, 4000);
  const locale = body.locale === "zh" ? "zh" : "en";

  if (
    name.length < 2 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    !allowedServices.has(service) ||
    message.length < 10
  ) {
    return NextResponse.json({ error: "Please check the required fields" }, { status: 400 });
  }

  const subject = `New PISIMAI project inquiry — ${service}`;
  const text = [
    "New project inquiry received from the PISIMAI TECHNOLOGY website.",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company || "Not provided"}`,
    `Area: ${service}`,
    `Language: ${locale === "zh" ? "Simplified Chinese" : "English"}`,
    "",
    "Project details:",
    message,
  ].join("\n");
  const html = `<h2>New project inquiry</h2><p><strong>Name:</strong> ${escapeHtml(name)}</p><p><strong>Email:</strong> ${escapeHtml(email)}</p><p><strong>Company:</strong> ${escapeHtml(company || "Not provided")}</p><p><strong>Area:</strong> ${escapeHtml(service)}</p><p><strong>Language:</strong> ${locale === "zh" ? "Simplified Chinese" : "English"}</p><h3>Project details</h3><p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>`;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [recipient],
        reply_to: email,
        subject,
        text,
        html,
      }),
      signal: AbortSignal.timeout(10000),
      cache: "no-store",
    });

    if (!response.ok) {
      return NextResponse.json({ error: "Email delivery failed" }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Email delivery failed" }, { status: 502 });
  }
}
