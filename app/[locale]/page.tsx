import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { copy, isLocale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    title: locale === "zh" ? "智能科技与工程创新" : "PISIMAI TECHNOLOGY | Intelligent Systems & Engineering",
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
        <section className="hero-section tech-hero" id="home">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-atmosphere" aria-hidden="true"><i /><i /><i /></div>
          <div className="hero-lightfield" aria-hidden="true"><i /><i /><i /></div>
          <div className="hero-particle-field" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
          <div className="hero-floor" aria-hidden="true" />
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

          <div className="tech-hero-visual" role="img" aria-label={locale === "zh" ? "人工智能、软件、自动化与系统集成的互联技术架构示意" : "An interconnected technology architecture showing AI, software, automation and system integration"}>
            <div className="visual-topline"><span> PISIMAI / SYSTEMS LAB</span><span><i /> {locale === "zh" ? "系统在线" : "SYSTEMS ONLINE"}</span></div>
            <div className="architecture-grid" aria-hidden="true" />
            <div className="architecture-orbit orbit-a" aria-hidden="true" />
            <div className="architecture-orbit orbit-b" aria-hidden="true" />
            <div className="architecture-connectors" aria-hidden="true"><i /><i /><i /><i /><i /><i /></div>
            <div className="architecture-core">
              <div className="core-bracket bracket-a" /><div className="core-bracket bracket-b" />
              <div className="core-symbol"><span /><span /><span /><span /></div>
              <strong>INTELLIGENCE</strong><small>CORE / 01</small>
            </div>
            <div className="architecture-module module-ai"><span className="module-icon ai-icon">AI</span><div><b>AI SYSTEMS</b><small>Models · APIs · Agents</small></div><i className="module-status" /></div>
            <div className="architecture-module module-software"><span className="module-icon software-icon"><i /><i /><i /></span><div><b>SOFTWARE</b><small>Web · Platforms · Apps</small></div><i className="module-status" /></div>
            <div className="architecture-module module-robotics"><span className="module-icon robotics-icon"><i /><i /></span><div><b>ROBOTICS</b><small>Control · Automation</small></div><i className="module-status" /></div>
            <div className="architecture-module module-integration"><span className="module-icon integration-icon"><i /><i /><i /><i /></span><div><b>INTEGRATION</b><small>Devices · Data · Systems</small></div><i className="module-status" /></div>
            <div className="architecture-data data-a"><span>01</span><i /> INPUT STREAM</div>
            <div className="architecture-data data-b"><span>04</span><i /> CONNECTED LAYERS</div>
            <div className="visual-bottomline"><span>ENGINEERED TO WORK TOGETHER</span><span> PST — 001</span></div>
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
                  {index === 0 && (
                    <div className="service-art service-art-ai">
                      <div className="ai-orbit ai-orbit-one" /><div className="ai-orbit ai-orbit-two" />
                      <div className="ai-core"><i /><i /><i /></div>
                      <span className="ai-node ai-node-one" /><span className="ai-node ai-node-two" /><span className="ai-node ai-node-three" /><span className="ai-node ai-node-four" />
                      <b className="ai-link ai-link-one" /><b className="ai-link ai-link-two" /><b className="ai-link ai-link-three" />
                    </div>
                  )}
                  {index === 1 && (
                    <div className="service-art service-art-software">
                      <div className="software-window">
                        <div className="software-bar"><i /><i /><i /><span>APP / INTERFACE</span></div>
                        <div className="software-sidebar"><i /><i /><i /><i /></div>
                        <div className="software-content"><b /><b /><b /><span /><span /><em /></div>
                        <div className="software-cursor" />
                      </div>
                      <div className="software-bracket software-bracket-one" /><div className="software-bracket software-bracket-two" />
                    </div>
                  )}
                  {index === 2 && (
                    <div className="service-art service-art-robotics">
                      <div className="robot-base" /><div className="robot-joint robot-joint-one" /><div className="robot-arm robot-arm-one" /><div className="robot-joint robot-joint-two" /><div className="robot-arm robot-arm-two" /><div className="robot-joint robot-joint-three" /><div className="robot-tool" /><span className="robot-spark robot-spark-one" /><span className="robot-spark robot-spark-two" />
                    </div>
                  )}
                  {index === 3 && (
                    <div className="service-art service-art-integration">
                      <div className="integration-hub"><i /><i /><i /><i /></div>
                      <div className="integration-node integration-node-one"><i /></div><div className="integration-node integration-node-two"><i /></div><div className="integration-node integration-node-three"><i /></div><div className="integration-node integration-node-four"><i /></div>
                      <b className="integration-line integration-line-one" /><b className="integration-line integration-line-two" /><b className="integration-line integration-line-three" /><b className="integration-line integration-line-four" />
                      <span className="integration-packet integration-packet-one" /><span className="integration-packet integration-packet-two" />
                    </div>
                  )}
                </div>
                <div className="service-card-copy"><h3>{service.title}</h3><p>{service.text}</p></div>
                <a className="service-arrow" href={"/" + locale + "/services/" + ["ai-intelligent-systems", "software-digital-platforms", "robotics-automation", "system-integration"][index]} aria-label={(locale === "zh" ? "了解更多：" : "Explore: ") + service.title}>↗</a>
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
          <div className="about-copy">
            <p className="section-kicker">{t.aboutLabel}</p>
            <h2>{t.aboutTitle}</h2>
            <p>{t.aboutText}</p>
            <span className="about-signature">PISIMAI <i /> TECHNOLOGY</span>
          </div>
          <div className="about-visual tech-about-visual" aria-hidden="true">
            <div className="about-visual-header"><span>CONNECTED TECHNOLOGY STACK</span><span>FIG. 02</span></div>
            <div className="about-network">
              <div className="network-line line-one" /><div className="network-line line-two" /><div className="network-line line-three" /><div className="network-line line-four" />
              <div className="network-node node-center"><span>CORE</span><small>PISIMAI</small></div>
              <div className="network-node node-top"><span>AI</span><small>INTELLIGENCE</small></div>
              <div className="network-node node-left"><span>DEV</span><small>SOFTWARE</small></div>
              <div className="network-node node-right"><span>SYS</span><small>SYSTEMS</small></div>
              <div className="network-node node-bottom"><span>IO</span><small>INTEGRATION</small></div>
            </div>
            <div className="about-visual-footer"><span>MODULAR ARCHITECTURE</span><span>BUILT TO WORK TOGETHER</span></div>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-visual tech-contact-visual" aria-hidden="true">
            <div className="contact-visual-top"><span>PROJECT INTERFACE</span><span>READY / 04</span></div>
            <div className="contact-blueprint">
              <div className="blueprint-track track-one" /><div className="blueprint-track track-two" /><div className="blueprint-track track-three" />
              <div className="blueprint-node blueprint-node-a"><i /><span>IDEA</span></div>
              <div className="blueprint-node blueprint-node-b"><i /><span>ENGINEERING</span></div>
              <div className="blueprint-node blueprint-node-c"><i /><span>OUTCOME</span></div>
              <div className="blueprint-center"><span>LET&apos;S BUILD</span><b>↗</b></div>
            </div>
            <div className="contact-visual-bottom"><span>FROM CHALLENGE TO POSSIBILITY</span><span>PST / 04</span></div>
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
