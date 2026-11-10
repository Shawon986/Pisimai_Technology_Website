import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { copy, isLocale } from "@/lib/i18n";

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
          <div className="hero-vignette" aria-hidden="true" />
          <div className="hero-copy">
            <p className="eyebrow"><span />{t.eyebrow}</p>
            <h1>{t.title}</h1>
            <p className="hero-description">{t.description}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#services">{t.primaryCta}<span aria-hidden="true">↗</span></a>
              <a className="button button-secondary" href="#contact">{t.secondaryCta}</a>
            </div>
            <div className="hero-bottomline">
              <p className="hero-scroll"><span />{t.scroll}</p>
              <p className="hero-note">{t.heroNote}</p>
            </div>
          </div>

          <div className="intelligence-stage">
            <div className="hero-scene" role="img" aria-label={locale === "zh" ? "精密钛金属与光学晶体构成的沉浸式智能工程装置" : "A cinematic 3D precision-engineered intelligence installation in titanium, glass and optical crystal"}>
              <div className="scene-backdrop" />
              <div className="scene-lightbeam scene-lightbeam-a" />
              <div className="scene-lightbeam scene-lightbeam-b" />
              <div className="scene-floor" />
              <div className="scene-floor-reflection" />
              <div className="installation-shadow" />
              <div className="installation">
                <div className="installation-ring ring-outer"><i /><i /><i /><i /></div>
                <div className="installation-ring ring-inner" />
                <div className="installation-bridge bridge-left" />
                <div className="installation-bridge bridge-right" />
                <div className="installation-spine" />
                <div className="crystal-housing">
                  <div className="crystal-side crystal-side-left" />
                  <div className="crystal-side crystal-side-right" />
                  <div className="crystal-face crystal-face-front" />
                  <div className="crystal-core" />
                  <div className="crystal-highlight" />
                </div>
                <div className="precision-collar collar-top" />
                <div className="precision-collar collar-bottom" />
                <div className="installation-base">
                  <span /><span /><span />
                </div>
                <div className="fiber-trail fiber-trail-a" />
                <div className="fiber-trail fiber-trail-b" />
                <div className="scene-spark spark-a" />
                <div className="scene-spark spark-b" />
                <div className="scene-spark spark-c" />
              </div>
              <div className="scene-readout readout-a"><span>01 / CORE</span><i />OPTICAL ENGINE</div>
              <div className="scene-readout readout-b">PST <i /> INTELLIGENCE SYSTEMS</div>
              <div className="scene-scan" />
            </div>
            <div className="stage-coordinate coordinate-bottom"><span>AI</span><i /> <span>SOFTWARE</span><i /> <span>INTEGRATION</span></div>
          </div>
          <div className="hero-index"><span>01</span><i />04</div>
          <div className="hero-side-label">{locale === "zh" ? "智能 · 工程 · 集成" : "INTELLIGENCE / ENGINEERING / INTEGRATION"}</div>
        </section>

        <section className="intro-section section-wrap" id="solutions">
          <div className="intro-aside"><p className="section-kicker">{t.introLabel}</p><span>{t.introTag}</span></div>
          <div className="intro-content">
            <h2>{t.introTitle}</h2>
            <p>{t.introText}</p>
            <div className="intro-rule"><span /><span /><span /></div>
          </div>
        </section>

        <section className="services-section section-wrap" id="services">
          <div className="section-heading">
            <div><p className="section-kicker">{t.servicesLabel}</p><h2>{t.servicesTitle}</h2></div>
            <p>{t.servicesText}</p>
          </div>
          <div className="service-grid">
            {t.services.map((service, index) => (
              <article className="service-card" key={service.number}>
                <div className="service-card-top"><span className="service-number">{service.number}</span><span className="service-index">{["AI","DEV","ROB","SYS"][index]}</span></div>
                <div className={`service-visual service-visual-${index + 1}`} aria-hidden="true">
                  <span /><span /><span /><span /><i />
                </div>
                <div className="service-card-copy"><h3>{service.title}</h3><p>{service.text}</p></div>
                <span className="service-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
          <p className="capability-note"><span />{t.capabilityNote}</p>
        </section>

        <section className="technology-band" id="technology">
          <div className="tech-band-inner">
            <span className="section-kicker">{locale === "zh" ? "PISIMAI / 科技" : "PISIMAI / TECHNOLOGY"}</span>
            <p>{locale === "zh" ? <>人工智能 <i /> 软件 <i /> 机器人 <i /> 系统集成</> : <>AI <i /> SOFTWARE <i /> ROBOTICS <i /> INTEGRATION</>}</p>
            <span className="tech-band-caption">{locale === "zh" ? "互联协同的技术生态" : "A connected technology ecosystem"}</span>
            <div className="tech-band-lines" aria-hidden="true"><span /><span /><span /><span /><span /></div>
          </div>
        </section>

        <section className="approach-section section-wrap">
          <div className="approach-heading">
            <p className="section-kicker">{t.approachLabel}</p>
            <h2>{t.approachTitle}</h2>
            <p>{t.approachText}</p>
          </div>
          <div className="principle-list">
            {t.principles.map((item) => (
              <article className="principle-item" key={item.number}>
                <span className="principle-number">{item.number}</span>
                <div><h3>{item.title}</h3><p>{item.text}</p></div>
                <span className="principle-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section section-wrap" id="about">
          <div className="about-visual" aria-hidden="true">
            <div className="signal-ribbon signal-ribbon-a" /><div className="signal-ribbon signal-ribbon-b" /><div className="signal-ribbon signal-ribbon-c" />
            <div className="signal-axis"><i /><i /><i /><i /></div>
            <div className="signal-bead signal-bead-a" /><div className="signal-bead signal-bead-b" />
            <span className="signal-caption">INTELLIGENCE IN MOTION</span>
          </div>
          <div className="about-copy">
            <p className="section-kicker">{t.aboutLabel}</p>
            <h2>{t.aboutTitle}</h2>
            <p>{t.aboutText}</p>
            <span className="about-signature">PISIMAI <i /> TECHNOLOGY</span>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-visual" aria-hidden="true">
          <div className="portal-halo" />
          <div className="portal-frame portal-frame-back" />
          <div className="portal-frame portal-frame-mid" />
          <div className="portal-frame portal-frame-front"><i /><i /><i /><i /></div>
          <div className="portal-core"><span /></div>
          <div className="portal-sweep" />
          <span className="portal-caption">CONNECT / CREATE / ADVANCE</span>
        </div>
          <div className="contact-copy">
            <p className="section-kicker">{t.contactLabel}</p>
            <h2>{t.contactTitle}</h2>
            <p>{t.contactText}</p>
            <span className="contact-footnote">{t.contactFootnote}</span>
          </div>
          <span className="contact-index">PST / 04</span>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
