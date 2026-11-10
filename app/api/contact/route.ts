import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

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

function jsonResponse(body: { error?: string; ok?: boolean }, status = 200) {
  return NextResponse.json(body, {
    status,
    headers: { "Cache-Control": "no-store, max-age=0" }
  });
}

async function readLimitedBody(request: NextRequest, maxBytes: number): Promise<string> {
  const reader = request.body?.getReader();
  if (!reader) return "";

  const decoder = new TextDecoder();
  let totalBytes = 0;
  let result = "";

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      totalBytes += value.byteLength;
      if (totalBytes > maxBytes) {
        await reader.cancel();
        throw new Error("BODY_TOO_LARGE");
      }
      result += decoder.decode(value, { stream: true });
    }
    return result + decoder.decode();
  } finally {
    reader.releaseLock();
  }
}

export async function POST(request: NextRequest) {
  const contentLength = Number(request.headers.get("content-length") ?? "0");
  if (contentLength > 12000) {
    return jsonResponse({ error: "Request is too large" }, 413);
  }
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return jsonResponse({ error: "Unsupported content type" }, 415);
  }

  const origin = request.headers.get("origin");
  const fetchSite = request.headers.get("sec-fetch-site");
  if (!origin || origin !== request.nextUrl.origin || fetchSite === "cross-site") {
    return jsonResponse({ error: "Invalid origin" }, 403);
  }

  let payload: unknown;
  try {
    const rawBody = await readLimitedBody(request, 12000);
    payload = JSON.parse(rawBody);
  } catch (error) {
    if (error instanceof Error && error.message === "BODY_TOO_LARGE") {
      return jsonResponse({ error: "Request is too large" }, 413);
    }
    return jsonResponse({ error: "Invalid request" }, 400);
  }

  if (!payload || typeof payload !== "object") {
    return jsonResponse({ error: "Invalid request" }, 400);
  }

  const body = payload as Record<string, unknown>;
  // Quietly accept bot submissions without forwarding them.
  if (clean(body.website, 200)) return jsonResponse({ ok: true });

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
    return jsonResponse({ error: "Please check the required fields" }, 400);
  }

  const configuredFormValue = process.env.FORMSPREE_FORM_ID?.trim() ?? "";
  let formId = "";

  // Accept either the Form ID itself or the complete Formspree endpoint URL.
  // Only the official HTTPS Formspree host and /f/{id} endpoint are allowed.
  if (/^https:\/\//i.test(configuredFormValue)) {
    try {
      const endpoint = new URL(configuredFormValue);
      const endpointMatch = endpoint.pathname.match(/^\/f\/([a-zA-Z0-9_-]+)\/?$/);
      if (
        endpoint.protocol === "https:" &&
        endpoint.hostname === "formspree.io" &&
        !endpoint.port &&
        !endpoint.search &&
        !endpoint.hash &&
        endpointMatch
      ) {
        formId = endpointMatch[1];
      }
    } catch {
      // Invalid URL; handled by the configuration check below.
    }
  } else if (/^[a-zA-Z0-9_-]+$/.test(configuredFormValue)) {
    formId = configuredFormValue;
  }

  if (!formId) {
    console.error("[contact] Formspree configuration is missing or invalid");
    return jsonResponse({ error: "Contact service is not configured" }, 503);
  }

  try {
    const response = await fetch(`https://formspree.io/f/${formId}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        company: company || "Not provided",
        service,
        message,
        language: locale === "zh" ? "Simplified Chinese" : "English",
        _replyto: email,
        _subject: `New PISIMAI project inquiry — ${service}`,
      }),
      signal: AbortSignal.timeout(15000),
      cache: "no-store",
    });

    if (!response.ok) {
      console.error("[contact] Formspree rejected the inquiry", {
        status: response.status,
      });
      return jsonResponse({ error: "Email delivery failed" }, 502);
    }

    return jsonResponse({ ok: true });
  } catch (error) {
    console.error("[contact] Formspree request failed", {
      name: error instanceof Error ? error.name : "UnknownError",
    });
    return jsonResponse({ error: "Email delivery failed" }, 502);
  }
}
