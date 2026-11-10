"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import type { Locale } from "@/lib/i18n";

type Props = { locale: Locale };

const copy = {
  en: {
    eyebrow: "PROJECT INQUIRY",
    title: "Let's discuss what you're building.",
    intro: "Share a few details and our team will receive your message by email.",
    name: "Your name", email: "Work email", company: "Company (optional)",
    service: "What can we help with?", choose: "Select an area",
    options: ["AI & Intelligent Systems", "Software & Digital Platforms", "Robotics & Automation", "System Integration", "Other / Not sure yet"],
    message: "Tell us about your project", placeholder: "Goals, current challenge, expected timeline, or technical requirements…",
    submit: "Send project inquiry", sending: "Sending…",
    success: "Your inquiry has been sent. Thank you for contacting PISIMAI TECHNOLOGY.",
    error: "We couldn't send your message right now. Please try again shortly.",
    privacy: "Your details will only be used to respond to this inquiry.",
    required: "Required fields", honeypot: "Leave this field empty",
  },
  zh: {
    eyebrow: "项目咨询",
    title: "让我们聊聊您的项目构想。",
    intro: "请填写以下信息，您的咨询将通过电子邮件发送给我们的团队。",
    name: "您的姓名", email: "工作邮箱", company: "公司（选填）",
    service: "您需要哪方面的帮助？", choose: "请选择领域",
    options: ["人工智能与智能系统", "软件与数字平台", "机器人与自动化", "系统集成", "其他 / 尚未确定"],
    message: "介绍您的项目", placeholder: "项目目标、当前挑战、预期时间或技术需求……",
    submit: "发送项目咨询", sending: "正在发送…",
    success: "咨询已发送。感谢您联系 PISIMAI TECHNOLOGY。",
    error: "暂时无法发送您的消息，请稍后重试。",
    privacy: "您的信息仅用于回复本次咨询。",
    required: "必填项", honeypot: "请将此字段留空",
  },
} as const;

export function ContactForm({ locale }: Props) {
  const t = copy[locale];
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          company: data.get("company"),
          service: data.get("service"),
          message: data.get("message"),
          website: data.get("website"),
          locale,
        }),
      });
      if (!response.ok) throw new Error("Inquiry submission failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact-form" className="contact-form-section" aria-labelledby="contact-form-title">
      <div className="contact-form-heading">
        <p className="section-kicker"><span className="kicker-dot" />{t.eyebrow}</p>
        <h2 id="contact-form-title">{t.title}</h2>
        <p>{t.intro}</p>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-form-grid">
          <label>{t.name}<input name="name" type="text" autoComplete="name" maxLength={100} required /></label>
          <label>{t.email}<input name="email" type="email" autoComplete="email" maxLength={254} required /></label>
          <label>{t.company}<input name="company" type="text" autoComplete="organization" maxLength={120} /></label>
          <label>{t.service}<select name="service" defaultValue="" required><option value="" disabled>{t.choose}</option>{t.options.map((option) => <option key={option} value={option}>{option}</option>)}</select></label>
          <label className="contact-form-message">{t.message}<textarea name="message" rows={5} minLength={10} maxLength={4000} placeholder={t.placeholder} required /></label>
        </div>
        <label className="contact-form-trap" aria-hidden="true">{t.honeypot}<input name="website" type="text" tabIndex={-1} autoComplete="off" /></label>
        <div className="contact-form-bottom">
          <p>{t.privacy}</p>
          <button className="button button-primary" type="submit" disabled={status === "sending"}>{status === "sending" ? t.sending : t.submit}<span aria-hidden="true">↗</span></button>
        </div>
        <p className={"contact-form-status " + status} role="status" aria-live="polite">
          {status === "success" ? t.success : status === "error" ? t.error : ""}
        </p>
      </form>
    </section>
  );
}
