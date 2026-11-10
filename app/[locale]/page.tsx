import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { copy, isLocale, locales } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    title: locale === "zh" ? "智能科技与工程创新" : "Intelligent Technology & Engineering",
    description: copy[locale].description,
    alternates: { languages: { en: "/en", "zh-CN": "/zh" } }
  };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale;
  const t = copy[locale];

  return (
    <>
      <SiteHeader locale={locale} />
      <main>
        <section className="hero-section" id="home">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-copy">
            <p className="eyebrow"><span />{t.eyebrow}</p>
            <h1>{t.title}</h1>
            <p className="hero-description">{t.description}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#services">{t.primaryCta}<span aria-hidden="true">↗</span></a>
              <a className="button button-secondary" href="#contact">{t.secondaryCta}</a>
            </div>
            <p className="hero-scroll"><span />{t.scroll}</p>
          </div>
          <div className="intelligence-art" role="img" aria-label={locale === "zh" ? "抽象智能核心与轨道结构视觉" : "Abstract intelligence core with orbital structures"}>
            <div className="art-halo art-halo-one" />
            <div className="art-halo art-halo-two" />
            <div className="art-orbit orbit-one"><i /></div>
            <div className="art-orbit orbit-two"><i /></div>
            <div className="art-orbit orbit-three"><i /></div>
            <div className="art-core"><div className="core-inner" /><span /></div>
            <div className="art-node node-one" /><div className="art-node node-two" /><div className="art-node node-three" />
            <div className="art-label label-one">INTELLIGENCE / 01</div>
            <div className="art-label label-two">SYSTEMS CONNECTED</div>
          </div>
          <div className="hero-index"><span>01</span><i />04</div>
        </section>

        <section className="intro-section section-wrap" id="solutions">
          <div className="section-kicker">{t.introLabel}</div>
          <div className="intro-content"><h2>{t.introTitle}</h2><p>{t.introText}</p></div>
        </section>

        <section className="services-section section-wrap" id="services">
          <div className="section-heading">
            <div><p className="section-kicker">{t.servicesLabel}</p><h2>{t.servicesTitle}</h2></div>
            <p>{t.servicesText}</p>
          </div>
          <div className="service-grid">
            {t.services.map((service) => (
              <article className="service-card" key={service.number}>
                <span className="service-number">{service.number}</span>
                <div className="service-mark" aria-hidden="true"><span /><span /><span /></div>
                <h3>{service.title}</h3><p>{service.text}</p>
                <span className="service-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </section>

        <section className="technology-band" id="technology">
          <div className="tech-band-inner">
            <span className="section-kicker">PISIMAI / TECHNOLOGY</span>
            <p>AI <i /> SOFTWARE <i /> ROBOTICS <i /> INTEGRATION</p>
            <span className="tech-band-caption">A connected technology ecosystem</span>
          </div>
        </section>

        <section className="about-section section-wrap" id="about">
          <div className="about-orbit" aria-hidden="true"><div /><span /></div>
          <div className="about-copy">
            <p className="section-kicker">{t.aboutLabel}</p><h2>{t.aboutTitle}</h2><p>{t.aboutText}</p>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div><p className="section-kicker">{t.contactLabel}</p><h2>{t.contactTitle}</h2><p>{t.contactText}</p></div>
          <a className="button button-primary" href="mailto:contact@pisimai.com">{t.contactCta}<span aria-hidden="true">↗</span></a>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
