import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { NetworkBackground } from "@/components/network-background";
import { ExhibitionSection } from "@/components/exhibition-section";
import { CapabilityShowcase } from "@/components/capability-showcase";
import { copy, isLocale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    title: locale === "zh" ? "智能科技与工程创新 | PISIMAI TECHNOLOGY" : "Intelligent Systems & Engineering | PISIMAI TECHNOLOGY",
    description: copy[locale].description,
    alternates: {
      canonical: locale === "zh" ? "/zh" : "/en",
      languages: { en: "/en", "zh-CN": "/zh", "x-default": "/en" }
    },
    openGraph: {
      type: "website",
      locale: locale === "zh" ? "zh_CN" : "en_US",
      url: locale === "zh" ? "/zh" : "/en",
      title: locale === "zh" ? "PISIMAI TECHNOLOGY｜智能科技与工程创新" : "PISIMAI TECHNOLOGY | Intelligent Systems & Engineering",
      description: copy[locale].description
    }
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
          <NetworkBackground />

          <div className="hero-copy">
            <p className="eyebrow"><span />{t.eyebrow}</p>
            <h1 className="hero-title-hierarchy">
              {locale === "zh" ? (
                <><span className="hero-title-line hero-title-line-one">以工程创新，</span><span className="hero-title-line hero-title-line-two">开启智能科技</span><span className="hero-title-line hero-title-line-three">新篇章。</span></>
              ) : (
                <><span className="hero-title-line hero-title-line-one">Engineering</span><span className="hero-title-line hero-title-line-two">the next era of</span><span className="hero-title-line hero-title-line-three">intelligent technology.</span></>
              )}
            </h1>
            <p className="hero-description">{t.description}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#services">{t.primaryCta}<span aria-hidden="true"><svg className="ui-arrow-icon" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M4 12 12 4M5 4h7v7" />
                </svg></span></a>
              <Link className="button button-secondary" href={"/" + locale + "/contact#contact-form"}>{t.secondaryCta}</Link>
            </div>
            <div className="hero-expertise" aria-label={locale === "zh" ? "核心技术领域" : "Core technology disciplines"}>
              {(locale === "zh" ? ["人工智能", "软件平台", "机器人", "系统集成"] : ["AI & INTELLIGENCE", "SOFTWARE", "ROBOTICS", "SYSTEMS INTEGRATION"]).map((item) => <span key={item}>{item}</span>)}
            </div>
            <div className="hero-bottomline">
              <p className="hero-scroll"><span />{t.scroll}</p>
              <p className="hero-note">{t.heroNote}</p>
            </div>
          </div>

          <div className="tech-hero-visual" role="img" aria-label={locale === "zh" ? "人工智能、软件、自动化与系统集成的互联技术架构示意" : "An interconnected technology architecture showing AI, software, automation and system integration"}>
            <div className="visual-topline"><span>PISIMAI / INTELLIGENT ENGINEERING LAB</span><span><i /> {locale === "zh" ? "系统在线" : "LIVE SYSTEMS"}</span></div>
            <div className="digital-twin-stage" aria-hidden="true">
              <svg className="digital-twin-svg" viewBox="0 0 900 650" role="presentation">
                <defs>
                  <linearGradient id="dt-floor" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#163c5c"/><stop offset=".55" stopColor="#0b2139"/><stop offset="1" stopColor="#071426"/></linearGradient>
                  <linearGradient id="dt-metal" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#9bc8d8"/><stop offset=".22" stopColor="#315d79"/><stop offset=".62" stopColor="#142d48"/><stop offset="1" stopColor="#08172b"/></linearGradient>
                  <linearGradient id="dt-arm" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#a4e8f3"/><stop offset=".18" stopColor="#4b94b5"/><stop offset=".52" stopColor="#1d4c70"/><stop offset="1" stopColor="#0a1a31"/></linearGradient>
                  <linearGradient id="dt-glass" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#1b6686" stopOpacity=".75"/><stop offset="1" stopColor="#0a1b32" stopOpacity=".94"/></linearGradient>
                  <linearGradient id="dt-belt" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#274e69"/><stop offset=".45" stopColor="#102a43"/><stop offset="1" stopColor="#071628"/></linearGradient>
                  <linearGradient id="dt-chrome" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#d4f8ff"/><stop offset=".2" stopColor="#568eaa"/><stop offset=".48" stopColor="#173b59"/><stop offset=".72" stopColor="#78b6c9"/><stop offset="1" stopColor="#0a1b30"/></linearGradient>
                  <linearGradient id="dt-hydraulic" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#d9fbff"/><stop offset=".35" stopColor="#4a91ad"/><stop offset=".55" stopColor="#142d45"/><stop offset="1" stopColor="#a8e9f1"/></linearGradient>
                  <radialGradient id="dt-bearing"><stop stopColor="#baf8ff"/><stop offset=".35" stopColor="#397b9a"/><stop offset=".72" stopColor="#102a43"/><stop offset="1" stopColor="#061426"/></radialGradient>
                  <pattern id="dt-panel-brush" width="8" height="8" patternUnits="userSpaceOnUse"><path d="M0 1H8M0 5H8" stroke="#b5eff7" strokeOpacity=".12" strokeWidth=".7"/></pattern>
                  <pattern id="dt-grid" width="28" height="28" patternUnits="userSpaceOnUse"><path d="M28 0H0V28" fill="none" stroke="#5da3c6" strokeOpacity=".13" strokeWidth="1"/></pattern>
                </defs>
                <g className="dt-atmosphere">
                  <path d="M110 150L445 48 790 166" fill="none" stroke="#39b8df" strokeOpacity=".16" strokeDasharray="3 10"/>
                  <path d="M125 190L445 91 772 198" fill="none" stroke="#7c83f2" strokeOpacity=".13" strokeDasharray="2 12"/>
                  <circle cx="450" cy="290" r="240" fill="none" stroke="#49c8e8" strokeOpacity=".09" strokeDasharray="2 12"/>
                </g>
                <g className="dt-platform">
                  <path d="M92 431L451 238 824 433 463 626Z" fill="url(#dt-floor)" stroke="#4c9abb" strokeOpacity=".65" strokeWidth="2"/>
                  <path d="M92 431L463 626V646L92 450Z" fill="#08172b" stroke="#245878" strokeWidth="1.2"/>
                  <path d="M463 626L824 433V452L463 646Z" fill="#0b2036" stroke="#2e6b88" strokeWidth="1.2"/>
                  <path d="M92 431L451 238 824 433 463 626Z" fill="url(#dt-grid)" opacity=".8"/>
                  <path d="M126 430L451 256 790 433" fill="none" stroke="#44c4e8" strokeOpacity=".34" strokeWidth="2" strokeDasharray="7 8"/>
                  <path d="M157 449L463 610 756 453" fill="none" stroke="#7b8ff0" strokeOpacity=".22" strokeWidth="1.5" strokeDasharray="4 10"/>
                  <path d="M108 432L463 619 808 435" fill="none" stroke="#71e1ef" strokeOpacity=".42" strokeWidth="2"/>
                  <path d="M138 438L160 450M780 440L802 428" stroke="#a4f2ff" strokeWidth="3"/>
                </g>
                <g className="dt-server-rack">
                  <path d="M662 247L733 209 793 241 721 281Z" fill="#1d4b69" stroke="#62b9d4" strokeOpacity=".8"/>
                  <path d="M662 247V386L721 419V281Z" fill="#0d2944" stroke="#397b9a"/>
                  <path d="M721 281V419L793 378V241Z" fill="#102f4d" stroke="#4d9ab7"/>
                  <path d="M673 266L710 287V315L673 294Z" fill="#07182c" stroke="#4b93ad"/>
                  <path d="M673 307L710 328V356L673 335Z" fill="#07182c" stroke="#4b93ad"/>
                  <path d="M673 348L710 369V396L673 375Z" fill="#07182c" stroke="#4b93ad"/>
                  <g fill="#5fe4ee"><circle cx="681" cy="281" r="2.6"/><circle cx="681" cy="322" r="2.6"/><circle cx="681" cy="363" r="2.6"/></g>
                  <g stroke="#5bbad9" strokeWidth="2"><path d="M690 282L702 289M690 323L702 330M690 364L702 371"/></g>
                  <path d="M738 277L777 255M738 318L777 296M738 359L777 337" stroke="#77d9e8" strokeOpacity=".5" strokeWidth="2"/>
                  <path d="M739 286L769 270M739 327L769 311M739 368L769 352" stroke="#7e8fff" strokeOpacity=".5" strokeWidth="2"/>
                  <path d="M730 251L730 411M739 246L739 406" stroke="#8bdced" strokeOpacity=".2" strokeWidth="1"/>
                  <path d="M667 255L716 282M667 395L716 422" stroke="#a8eaf4" strokeOpacity=".28" strokeWidth="1.2"/>
                  <g fill="#68e8ee" opacity=".9"><circle cx="777" cy="259" r="2"/><circle cx="777" cy="300" r="2"/><circle cx="777" cy="341" r="2"/></g>
                  <path d="M746 273L781 254V374L746 394Z" fill="url(#dt-panel-brush)" opacity=".42"/>
                  <path d="M727 398L780 369" stroke="#b5f5ff" strokeOpacity=".4" strokeWidth="1.2"/>                  <path d="M722 285L722 415" stroke="#8bdced" strokeOpacity=".4"/>
                </g>
                <g className="dt-conveyor">
                  <path d="M170 408L367 303 506 377 307 485Z" fill="#07172a" stroke="#4d91ad" strokeWidth="2"/>
                  <path d="M170 392L367 287 506 361 307 469Z" fill="url(#dt-belt)" stroke="#70c9df" strokeOpacity=".8" strokeWidth="1.5"/>
                  <path d="M170 392L307 469L506 361" fill="none" stroke="#8ce9f1" strokeOpacity=".55" strokeWidth="2"/>
                  <path d="M183 393L307 459L492 361" fill="none" stroke="#4f8da9" strokeWidth="5" strokeDasharray="4 8" className="dt-belt-motion"/>
                  <g fill="#183d59" stroke="#70b5ce" strokeOpacity=".55">
                    <path d="M183 403L191 407V429L183 425Z"/><path d="M210 417L218 421V443L210 439Z"/><path d="M239 432L247 436V458L239 454Z"/><path d="M268 447L276 451V473L268 469Z"/>
                    <path d="M299 451L307 455V477L299 473Z"/><path d="M333 432L341 436V458L333 454Z"/><path d="M368 413L376 417V439L368 435Z"/><path d="M403 394L411 398V420L403 416Z"/><path d="M438 375L446 379V401L438 397Z"/>
                  </g>
                  <g className="dt-conveyor-detail" fill="none" strokeLinecap="round">
                    <path d="M177 389L307 459L500 356" stroke="#b5efff" strokeOpacity=".42" strokeWidth="2.5"/>
                    <path d="M179 397L307 466L498 364" stroke="#071321" strokeWidth="5"/>
                    <path d="M181 398L307 466L497 365" stroke="#7bd8e8" strokeOpacity=".8" strokeWidth="1.2" strokeDasharray="2 7" className="dt-roller-lights"/>
                    <path d="M188 382L196 386M218 366L226 370M249 349L257 353M280 333L288 337M311 317L319 321M342 300L350 304" stroke="#c2f6ff" strokeOpacity=".45" strokeWidth="2"/>
                    <path d="M171 391L307 468L508 360" stroke="#a2e8f4" strokeOpacity=".22" strokeWidth="1"/>
                  </g>
                  <g className="dt-parcel">
                    <path d="M272 352L319 327 365 352 318 378Z" fill="#d5a66c" stroke="#ffe0aa" strokeWidth="1.4"/>
                    <path d="M272 352V392L318 418V378Z" fill="#956b49" stroke="#d8ae7d"/>
                    <path d="M318 378L365 352V392L318 418Z" fill="#b78352" stroke="#f0c18a"/>
                    <path d="M309 333L309 372M327 338L327 367" stroke="#fff0cf" strokeOpacity=".7" strokeWidth="3"/>
                    <path d="M288 359L302 367V380L288 372Z" fill="#17334c" stroke="#8fd7e3" strokeWidth="1"/>
                  </g>
                  <g className="dt-parcel dt-parcel-two">
                    <path d="M378 365L405 350 433 365 405 381Z" fill="#8fb7c7" stroke="#d1f4f7"/>
                    <path d="M378 365V389L405 405V381Z" fill="#426c83" stroke="#91c7d5"/>
                    <path d="M405 381L433 365V389L405 405Z" fill="#31556f" stroke="#80b5ca"/>
                  </g>
                </g>
                <g className="dt-vision">
                  <path d="M180 255L180 334" stroke="#426f8d" strokeWidth="10"/>
                  <path d="M161 334L199 334L209 344L151 344Z" fill="#173b59" stroke="#65b5d0"/>
                  <path d="M163 249L196 231L218 243L184 262Z" fill="#2a5a78" stroke="#8ad8e8"/>
                  <path d="M163 249V274L184 286V262Z" fill="#102b46" stroke="#4c93b2"/>
                  <path d="M184 262L218 243V269L184 286Z" fill="#153b59" stroke="#70c1d8"/>
                  <path d="M190 254L204 246L213 251L199 259Z" fill="#081c30" stroke="#75d9ec"/>
                  <circle cx="201" cy="253" r="4" fill="#9af4ff"/>
                  <path d="M200 263L315 339" stroke="#55e0f0" strokeWidth="2" strokeOpacity=".25" strokeDasharray="5 5"/>
                  <path d="M200 263L315 339" stroke="#70eafa" strokeWidth="1.2" className="dt-scan-beam"/>
                  <path d="M315 339L343 324L371 339L343 354Z" fill="none" stroke="#63e6ef" strokeWidth="1.5" strokeDasharray="4 4" className="dt-detection-box"/>
                  <path d="M179 225L179 210L198 199" fill="none" stroke="#5ed8e9" strokeWidth="1.5"/>
                  <circle cx="198" cy="199" r="3" fill="#8df6ff"/>
                </g>
                <g className="dt-robot-arm dt-industrial-robot">
                  {/* Six-axis industrial manipulator: fixed pedestal, cast links, servo joints and tool flange. */}
                  <ellipse cx="566" cy="516" rx="106" ry="16" fill="#041322" opacity=".78"/>
                  <path d="M474 487L499 470H632L659 487L641 507H493Z" fill="#0a1d30" stroke="#6caec5" strokeWidth="2"/>
                  <path d="M493 487L509 478H625L641 487L627 499H507Z" fill="#244d66" stroke="#9bdce8" strokeWidth="1.5"/>
                  <path d="M511 499L511 467L532 451H603L624 467V499Z" fill="#102d45" stroke="#83c9d9" strokeWidth="2"/>
                  <path d="M526 489V468L540 458H594L609 468V489Z" fill="#173d57" stroke="#5f9db8" strokeWidth="1.4"/>
                  <path d="M535 480H600M541 472H594" stroke="#c4f4f7" strokeOpacity=".38" strokeWidth="1.4"/>
                  <rect x="555" y="466" width="23" height="11" rx="2" fill="#07182a" stroke="#6ed5e5"/>
                  <circle cx="566" cy="471.5" r="2.6" fill="#69eee0" className="dt-machine-led"/>
                  {/* Shoulder housing and rotating upper link */}
                  <circle cx="566" cy="424" r="37" fill="#07192b" stroke="#a8e5ee" strokeWidth="3"/>
                  <circle cx="566" cy="424" r="29" fill="#173f59" stroke="#5eabc4" strokeWidth="2"/>
                  <circle cx="566" cy="424" r="20" fill="#0a2035" stroke="#8ed7e5" strokeWidth="2"/>
                  <circle cx="566" cy="424" r="10" fill="#34718b" stroke="#c4f4f7" strokeWidth="2"/>
                  <circle cx="566" cy="424" r="3.5" fill="#e4ffff"/>
                  <g className="dt-industrial-shoulder-link">
                    <animateTransform attributeName="transform" type="rotate" values="0 566 424;0 566 424;-24 566 424;-24 566 424;0 566 424;0 566 424" keyTimes="0;0.18;0.4;0.68;0.9;1" dur="7s" repeatCount="indefinite" calcMode="spline" keySplines=".42 0 .58 1;.42 0 .58 1;.42 0 .58 1;.42 0 .58 1;.42 0 .58 1"/>
                    <path d="M539 401L477 322L454 305L429 327L442 356L522 441L548 439L565 421Z" fill="#071a2c" stroke="#b9edf3" strokeWidth="3" strokeLinejoin="round"/>
                    <path d="M532 405L476 337L450 319L442 331L457 354L516 426L540 429Z" fill="url(#dt-arm)" stroke="#72bbcf" strokeWidth="1.8" strokeLinejoin="round"/>
                    <path d="M521 408L470 349L458 340L451 348L467 366L512 419Z" fill="#12334d" stroke="#5e9db7" strokeWidth="1.3"/>
                    <path d="M535 408L478 330L456 313" fill="none" stroke="#efffff" strokeOpacity=".78" strokeWidth="2.3" strokeLinecap="round"/>
                    <path d="M455 322L476 306L489 318L468 337Z" fill="#315f78" stroke="#9bdeea" strokeWidth="1.5"/>
                    <path d="M465 317L476 309L482 315L471 324Z" fill="#081a2b" stroke="#72c1d5"/>
                    <path d="M450 352L464 365M462 341L477 355" stroke="#f0c47d" strokeWidth="2" strokeDasharray="3 4"/>
                    <path d="M497 379L514 365L528 383L511 398Z" fill="#102d45" stroke="#6eb4ca" strokeWidth="1.5"/>
                    <path d="M501 382L513 372L520 382L509 391Z" fill="#8bcbd9" opacity=".65"/>
                    <circle cx="477" cy="330" r="29" fill="#07182a" stroke="#b4edf3" strokeWidth="3"/>
                    <circle cx="477" cy="330" r="21" fill="#24546d" stroke="#70c3d6" strokeWidth="2"/>
                    <circle cx="477" cy="330" r="12" fill="#0b2034" stroke="#a3e7ef" strokeWidth="2"/>
                    <circle cx="477" cy="330" r="4" fill="#d8fcff"/>
                    <g className="dt-industrial-forearm">
                      <animateTransform attributeName="transform" type="rotate" values="0 477 330;0 477 330;28 477 330;28 477 330;0 477 330;0 477 330" keyTimes="0;0.18;0.4;0.68;0.9;1" dur="7s" repeatCount="indefinite" calcMode="spline" keySplines=".42 0 .58 1;.42 0 .58 1;.42 0 .58 1;.42 0 .58 1;.42 0 .58 1"/>
                      <path d="M456 308L513 242L536 224L561 245L548 271L491 350L467 353L450 332Z" fill="#071a2c" stroke="#b7edf3" strokeWidth="3" strokeLinejoin="round"/>
                      <path d="M465 310L516 250L539 235L549 246L532 267L488 334L466 338Z" fill="url(#dt-arm)" stroke="#70b8ce" strokeWidth="1.8" strokeLinejoin="round"/>
                      <path d="M476 313L519 263L532 254L540 261L523 282L486 330Z" fill="#12334d" stroke="#5f9eb8" strokeWidth="1.2"/>
                      <path d="M471 316L520 254L538 237" fill="none" stroke="#f0ffff" strokeOpacity=".78" strokeWidth="2.2" strokeLinecap="round"/>
                      <path d="M516 250L530 231L545 243L531 263Z" fill="#315e78" stroke="#a6e6ef" strokeWidth="1.5"/>
                      <path d="M520 249L531 236L538 243L528 256Z" fill="#071a2b" stroke="#75c3d5"/>
                      <path d="M493 327L507 337M502 315L517 325" stroke="#f0c47d" strokeWidth="2" strokeDasharray="3 4"/>
                      <path d="M510 280L526 265L539 278L523 295Z" fill="#102d45" stroke="#75b8ce" strokeWidth="1.5"/>
                      <path d="M516 281L526 272L533 279L523 289Z" fill="#8bcbd9" opacity=".6"/>
                      <circle cx="536" cy="245" r="25" fill="#07182a" stroke="#b5edf3" strokeWidth="3"/>
                      <circle cx="536" cy="245" r="17" fill="#24566f" stroke="#77c8d9" strokeWidth="2"/>
                      <circle cx="536" cy="245" r="8" fill="#0a2035" stroke="#b5edf3" strokeWidth="2"/>
                      <circle cx="536" cy="245" r="3" fill="#e1ffff"/>
                      <g className="dt-industrial-wrist">
                        <animateTransform attributeName="transform" type="rotate" values="0 536 245;0 536 245;-18 536 245;-18 536 245;0 536 245;0 536 245" keyTimes="0;0.18;0.4;0.68;0.9;1" dur="7s" repeatCount="indefinite" calcMode="spline" keySplines=".42 0 .58 1;.42 0 .58 1;.42 0 .58 1;.42 0 .58 1;.42 0 .58 1"/>
                        <path d="M521 226L542 218L560 228L559 251L541 261L524 251Z" fill="#0a2035" stroke="#b9edf3" strokeWidth="2.4" strokeLinejoin="round"/>
                        <path d="M527 229L543 224L553 231L552 247L540 254L529 247Z" fill="url(#dt-arm)" stroke="#70b8ce" strokeWidth="1.4"/>
                        <path d="M536 224L540 214L552 218L548 230Z" fill="#315f78" stroke="#a3e5ef" strokeWidth="1.3"/>
                        <path d="M539 255L551 257L557 271L547 279L535 267Z" fill="#173c56" stroke="#a9eaf2" strokeWidth="2"/>
                        <circle cx="547" cy="267" r="8" fill="#092036" stroke="#c0eff4" strokeWidth="2"/>
                        {/* Parallel gripper with two machined fingers */}
                        <path d="M543 272L558 275L560 289L551 293L540 285Z" fill="#2d617b" stroke="#bcecf3" strokeWidth="1.5"/>
                        <path d="M542 284L550 287L541 310L532 307Z" fill="#79b9ca" stroke="#e1fbff" strokeWidth="1.5" strokeLinejoin="round"/>
                        <path d="M556 285L564 283L572 305L563 309Z" fill="#79b9ca" stroke="#e1fbff" strokeWidth="1.5" strokeLinejoin="round"/>
                        <path d="M532 307L542 310L537 318L528 315Z" fill="#d3e9e9" stroke="#f5ffff" strokeWidth="1.2"/>
                        <path d="M563 309L572 305L578 313L568 318Z" fill="#d3e9e9" stroke="#f5ffff" strokeWidth="1.2"/>
                        <path d="M540 290L546 292M557 290L563 288" stroke="#f1c47d" strokeWidth="1.4"/>
                        <path d="M539 277L562 281" stroke="#d9fbff" strokeOpacity=".7" strokeWidth="1.2"/>
                      </g>
                    </g>
                  </g>
                  {/* Hydraulic assist cylinder and routed service cable */}
                  <path d="M548 435L512 390L493 370" fill="none" stroke="#182f43" strokeWidth="12" strokeLinecap="round"/>
                  <path d="M548 435L512 390L493 370" fill="none" stroke="#91c8d5" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M548 435L512 390L493 370" fill="none" stroke="#071727" strokeWidth="1.2" strokeDasharray="3 4"/>
                  <path d="M549 433L513 388" fill="none" stroke="#e7c17d" strokeWidth="1.8" strokeDasharray="3 5"/>
                  <path d="M566 387C550 357 548 326 481 300C459 290 450 278 466 260" fill="none" stroke="#071727" strokeWidth="8" strokeLinecap="round"/>
                  <path d="M566 387C550 357 548 326 481 300C459 290 450 278 466 260" fill="none" stroke="#6cb7cb" strokeWidth="2.2" strokeLinecap="round"/>
                  {/* Base bolts and safety markings */}
                  {[-1,1].map((side) => <g key={side}>{[0,1,2].map((n) => <circle key={n} cx={566 + side * (48 + n * 18)} cy={489} r="2.5" fill="#c5e9ed" opacity=".7"/>)}</g>)}
                  <path d="M484 487L494 480M638 480L649 487" stroke="#f0c27a" strokeWidth="3" strokeDasharray="5 4"/>
                  <circle cx="566" cy="424" r="44" fill="none" stroke="#5bd9e8" strokeOpacity=".18" strokeWidth="1.2" strokeDasharray="4 7"/>
                  <text x="566" y="539" fill="#79b5cc" fontSize="8" textAnchor="middle" letterSpacing="1.6">INDUSTRIAL ARM / UNIT 01</text>
                </g>
                <g className="dt-network-links" fill="none" strokeWidth="2">
                  <path d="M215 242L339 172L495 200L692 245" stroke="#58d9eb" strokeOpacity=".58" strokeDasharray="5 8" className="dt-data-path"/>
                  <path d="M340 172L365 283L528 397" stroke="#7e8eff" strokeOpacity=".55" strokeDasharray="4 8" className="dt-data-path dt-data-path-two"/>
                  <path d="M692 245L745 188L790 203" stroke="#5ee1e9" strokeOpacity=".55" strokeDasharray="4 7" className="dt-data-path"/>
                  <circle cx="340" cy="172" r="5" fill="#a1f5ff" stroke="none"/><circle cx="495" cy="200" r="5" fill="#a1f5ff" stroke="none"/>
                  <circle cx="745" cy="188" r="4" fill="#a1f5ff" stroke="none"/>
                </g>
                <g className="dt-cloud-node">
                  <path d="M305 112Q305 92 327 92Q338 63 369 77Q390 78 394 101Q416 104 411 126Q407 142 389 142H329Q304 140 305 112Z" fill="url(#dt-glass)" stroke="#6bd9ed" strokeWidth="1.5"/>
                  <path d="M339 111L356 126L380 96" fill="none" stroke="#8ef5f5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <text x="359" y="158" fill="#8fc9df" fontSize="9" textAnchor="middle" letterSpacing="2">CLOUD / AI</text>
                </g>
                <g className="dt-control-panel">
                  <path d="M570 104L735 104L735 201L570 201Z" fill="#07192c" fillOpacity=".92" stroke="#4387a9" strokeWidth="1.5"/>
                  <path d="M570 104L735 104L735 122L570 122Z" fill="#16405d"/>
                  <circle cx="584" cy="113" r="3" fill="#69e4e9"/><circle cx="596" cy="113" r="3" fill="#7b8fff"/><circle cx="608" cy="113" r="3" fill="#75c4d7"/>
                  <text x="620" y="116" fill="#c3eefa" fontSize="7" letterSpacing="1.4">CONTROL / LIVE</text>
                  <path d="M586 182V148M601 182V160M616 182V139M631 182V153M646 182V132M661 182V145M676 182V157" stroke="#49c9e5" strokeWidth="5" strokeLinecap="round" opacity=".75"/>
                  <path d="M582 189H719" stroke="#35647f"/>
                  <path d="M687 143L701 134L713 139L722 128" fill="none" stroke="#9a91ff" strokeWidth="2"/>
                  <circle cx="722" cy="128" r="3" fill="#b4aaff"/>
                </g>
                <g className="dt-labels" fontFamily="monospace" fontSize="9" letterSpacing="1.3">
                  <text x="114" y="184" fill="#79b5cc">01 / MACHINE VISION</text>
                  <text x="610" y="224" fill="#79b5cc">02 / EDGE COMPUTE</text>
                  <text x="468" y="526" fill="#79b5cc">03 / ROBOTIC CONTROL</text>
                  <text x="210" y="510" fill="#79b5cc">04 / MOTION SYSTEM</text>
                </g>
                <g className="dt-status-points">
                  <circle cx="117" cy="197" r="3" fill="#5fe5e8"/><circle cx="612" cy="237" r="3" fill="#5fe5e8"/>
                  <circle cx="469" cy="539" r="3" fill="#a59aff"/><circle cx="211" cy="523" r="3" fill="#a59aff"/>
                </g>
              <g className="dt-factory-enclosure" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M126 414V220L445 48L790 226V420" stroke="#76b9d2" strokeOpacity=".28" strokeWidth="7"/>
                  <path d="M140 408V229L445 67L775 235V414" stroke="#b4e8f2" strokeOpacity=".24" strokeWidth="2"/>
                  <path d="M140 229L775 235M445 67V238" stroke="#70b9d2" strokeOpacity=".25" strokeDasharray="3 8"/>
                  <path d="M146 238L146 397M765 244L765 400" stroke="#67c4dc" strokeOpacity=".22" strokeWidth="5"/>
                  <path d="M153 248L153 394M758 252L758 397" stroke="#b2e7f2" strokeOpacity=".18" strokeWidth="1"/>
                  <path d="M132 219L445 52L783 224" stroke="#8de6f2" strokeOpacity=".35" strokeWidth="2"/>
                  <path d="M126 414L140 421M790 420L775 428" stroke="#8de6f2" strokeOpacity=".5" strokeWidth="3"/>
                </g>
                <g className="dt-machine-cell">
                  <path d="M93 356L151 325L209 356L151 389Z" fill="#102d46" stroke="#4d8cab"/>
                  <path d="M93 356V405L151 438V389Z" fill="#0a1c30" stroke="#376b88"/>
                  <path d="M151 389L209 356V405L151 438Z" fill="#153a55" stroke="#4d8cab"/>
                  <path d="M105 360L151 385L195 360" fill="none" stroke="#8be5ef" strokeOpacity=".55" strokeWidth="2"/>
                  <path d="M108 399L151 423L194 399" fill="none" stroke="#3e83a0" strokeWidth="2"/>
                  <rect x="119" y="369" width="19" height="12" rx="2" fill="#06182a" stroke="#6ac6dc"/>
                  <circle cx="128" cy="375" r="2.4" fill="#5fe4d2" className="dt-machine-led"/>
                  <path d="M98 350L151 320L204 350" fill="none" stroke="#8acfe0" strokeOpacity=".6" strokeWidth="2"/>
                  <path d="M98 406L151 436L204 406" fill="none" stroke="#5b9db7" strokeOpacity=".55" strokeWidth="2"/>
                </g>
                <g className="dt-gantry">
                  <path d="M250 245L250 187L574 187L574 250" fill="none" stroke="#315e79" strokeWidth="13"/>
                  <path d="M250 187L574 187" stroke="#9bdce8" strokeOpacity=".55" strokeWidth="3"/>
                  <path d="M260 180L565 180" stroke="#b7edf5" strokeOpacity=".22" strokeWidth="1"/>
                  <path d="M272 191V203M552 191V203" stroke="#79c5d8" strokeWidth="4"/>
                  <path d="M258 195L258 407M566 195L566 251" stroke="#07182b" strokeWidth="8"/>
                  <path d="M258 195L258 407M566 195L566 251" stroke="#6ca9c2" strokeOpacity=".5" strokeWidth="2"/>
                  <path d="M250 245L574 245" stroke="#091b2e" strokeWidth="3" opacity=".8"/>
                  <path d="M268 174L284 187M548 174L564 187" stroke="#9ce9f2" strokeOpacity=".38" strokeWidth="2"/>
                  <g className="dt-gantry-carriage">
                    <path d="M391 174L432 174L445 187L432 205L391 205L378 190Z" fill="#24516d" stroke="#9be4ed" strokeWidth="1.5"/>
                    <path d="M391 180H432L438 188H385Z" fill="#8bdce8" fillOpacity=".3"/>
                    <path d="M402 205V221M422 205V221" stroke="#91ddea" strokeWidth="3"/>
                    <path d="M399 203L399 217L425 217L425 203" fill="#102c44" stroke="#6bbbd2" strokeWidth="1.2"/>
                    <circle cx="412" cy="188" r="10" fill="none" stroke="#d4fbff" strokeOpacity=".48" strokeWidth="1"/>
                    <path d="M407 190H417M412 185V195" stroke="#f0fdff" strokeOpacity=".75" strokeWidth="1"/>
                    <rect x="400" y="218" width="24" height="4" rx="2" fill="#4ee2ef" className="dt-carriage-laser"/>
                    <circle cx="412" cy="188" r="5" fill="#b8f7fa" stroke="#2b6b89" strokeWidth="2"/>
                  </g>
                </g>
                <g className="dt-safety-lights">
                  <path d="M116 286L116 309M116 286L128 279" stroke="#5c9bb6" strokeWidth="3"/>
                  <rect x="108" y="270" width="17" height="21" rx="4" fill="#153c58" stroke="#78c9dc"/>
                  <circle cx="116.5" cy="276" r="3.3" fill="#64f0c5" className="dt-beacon-green"/>
                  <circle cx="116.5" cy="285" r="2.5" fill="#e4b76c"/>
                  <path d="M760 302V326" stroke="#5c9bb6" strokeWidth="3"/>
                  <rect x="752" y="282" width="17" height="22" rx="4" fill="#153c58" stroke="#78c9dc"/>
                  <circle cx="760.5" cy="289" r="3.3" fill="#64f0c5" className="dt-beacon-green"/>
                  <circle cx="760.5" cy="298" r="2.5" fill="#e4b76c"/>
                </g>
                <g className="dt-wrist-indicator" fill="none" stroke="#a8f2f5">
                  <circle cx="665" cy="341" r="17" strokeOpacity=".72" strokeWidth="1.2"/>
                  <circle cx="665" cy="341" r="12" stroke="#58d9ec" strokeWidth="2" strokeDasharray="5 4"/>
                  <path d="M665 321V328M665 354V361M645 341H652M678 341H685" strokeWidth="2"/>
                </g>
                <g className="dt-sensor-array">
                  <path d="M180 296L180 318M170 318H190" stroke="#83d8e7" strokeWidth="2"/>
                  <circle cx="180" cy="292" r="8" fill="#123a56" stroke="#80d7e8"/>
                  <circle cx="180" cy="292" r="3" fill="#bafaff" className="dt-sensor-pulse"/>
                  <path d="M180 301L180 328" stroke="#63dff0" strokeOpacity=".5" strokeDasharray="2 4"/>
                  <path d="M180 328L220 350" stroke="#63dff0" strokeOpacity=".2" strokeDasharray="3 5"/>
                </g>
                <g className="dt-floor-markings" fill="none" stroke="#66bad4" strokeOpacity=".35">
                  <path d="M232 483L310 525L388 484M236 493L310 532L388 493" strokeWidth="1.5" strokeDasharray="5 7"/>
                  <path d="M590 453L650 421L710 452L650 486Z" strokeDasharray="4 6"/>
                  <path d="M600 453L650 480L700 453" stroke="#b1eaf0" strokeOpacity=".25"/>
                  <path d="M461 572L500 551M478 581L517 560M495 590L534 569" strokeWidth="2"/>
                </g>
                <g className="dt-lidar-sweep" fill="none">
                  <path d="M180 292L340 365L470 431" stroke="#65efff" strokeOpacity=".35" strokeWidth="1.5" strokeDasharray="4 7"/>
                  <path d="M180 292L340 365L470 431" stroke="#a5f7ff" strokeWidth="2" strokeDasharray="18 170" className="dt-lidar-pulse"/>
                  <path d="M152 420L330 514L510 418" stroke="#63dff0" strokeOpacity=".14" strokeWidth="1.2" strokeDasharray="3 8"/>
                  <ellipse cx="340" cy="365" rx="34" ry="15" stroke="#65efff" strokeOpacity=".45" strokeDasharray="3 5" className="dt-work-zone"/>
                </g>
                <g className="dt-status-beams" fill="none">
                  <path d="M151 286L151 420M160 286L160 420" stroke="#55dce9" strokeOpacity=".18" strokeWidth="2" strokeDasharray="4 7"/>
                  <path d="M735 285L735 407" stroke="#8c8cff" strokeOpacity=".22" strokeWidth="2" strokeDasharray="3 7"/>
                  <path d="M246 267L246 405" stroke="#5de0ed" strokeOpacity=".13" strokeWidth="1"/>
                  <path d="M246 267L574 267" stroke="#5de0ed" strokeOpacity=".13" strokeWidth="1" strokeDasharray="3 8"/>
                </g>
                <g className="dt-particle-stream" fill="#a9f8ff">
                  <circle cx="273" cy="202" r="2.5"/><circle cx="298" cy="188" r="1.8"/><circle cx="323" cy="174" r="2"/>
                  <circle cx="349" cy="161" r="2.4"/><circle cx="374" cy="174" r="1.8"/><circle cx="399" cy="189" r="2"/>
                </g>
                <g className="dt-micro-labels" fontFamily="monospace" fontSize="7" letterSpacing="1.1">
                  <text x="95" y="462" fill="#6ca7c2">CELL / A-04</text>
                  <text x="684" y="472" fill="#6ca7c2">SAFETY ZONE</text>
                  <text x="337" y="224" fill="#83c9dc">PRECISION GANTRY</text>
                </g>
              
              
                <g className="dt-precision-markers" fill="none" strokeLinecap="round">
                  <path d="M450 230V246M442 238H458M795 410V426M787 418H803M96 414V430M88 422H104" stroke="#9cefff" strokeOpacity=".6" strokeWidth="1.5"/>
                  <circle cx="450" cy="238" r="5" stroke="#76e9f7" strokeOpacity=".75"/>
                  <circle cx="450" cy="238" r="11" stroke="#76e9f7" strokeOpacity=".25" strokeDasharray="2 4"/>
                </g>
                <g className="dt-native-motion" fill="none" strokeLinecap="round" aria-hidden="true">
                  <path d="M208 260L352 178L500 204L690 250" stroke="#75f2ff" strokeOpacity=".36" strokeWidth="2" strokeDasharray="3 9"/>
                  <circle r="5" fill="#c6fbff" stroke="#4ce2f3" strokeWidth="2">
                    <animateMotion dur="2.8s" repeatCount="indefinite" path="M208 260L352 178L500 204L690 250"/>
                  </circle>
                  <circle r="3.5" fill="#a8a4ff" stroke="#d2ceff" strokeWidth="1.5">
                    <animateMotion dur="3.6s" begin="-1.1s" repeatCount="indefinite" path="M352 178L365 283L528 397"/>
                  </circle>
                  <circle r="3.5" fill="#8fffe1" stroke="#c9fff1" strokeWidth="1.5">
                    <animateMotion dur="3.1s" begin="-2s" repeatCount="indefinite" path="M690 250L745 188L790 203"/>
                  </circle>
                  <path d="M190 258L322 344" stroke="#8bf7ff" strokeWidth="3" strokeOpacity=".85" strokeDasharray="15 90">
                    <animate attributeName="stroke-dashoffset" values="105;0" dur="1.6s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values=".15;1;.15" dur="2.1s" repeatCount="indefinite"/>
                  </path>
                  <path d="M250 187H574" stroke="#9ff7ff" strokeWidth="2.5" strokeDasharray="28 296" strokeOpacity=".95">
                    <animate attributeName="stroke-dashoffset" values="324;0" dur="2.2s" repeatCount="indefinite"/>
                  </path>
                  <circle cx="532" cy="397" r="22" stroke="#72edff" strokeWidth="2" strokeOpacity=".8">
                    <animate attributeName="r" values="18;31;18" dur="2.4s" repeatCount="indefinite"/>
                    <animate attributeName="stroke-opacity" values=".8;.08;.8" dur="2.4s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="589" cy="382" r="17" stroke="#a6a1ff" strokeWidth="1.8" strokeOpacity=".75">
                    <animate attributeName="r" values="13;25;13" dur="2.8s" begin="-.8s" repeatCount="indefinite"/>
                    <animate attributeName="stroke-opacity" values=".75;.08;.75" dur="2.8s" begin="-.8s" repeatCount="indefinite"/>
                  </circle>
                  <path d="M150 418L150 280" stroke="#69e7ff" strokeWidth="2" strokeDasharray="5 8" strokeOpacity=".8">
                    <animate attributeName="stroke-dashoffset" values="26;0" dur=".9s" repeatCount="indefinite"/>
                  </path>
                  <circle cx="180" cy="292" r="10" fill="none" stroke="#75f5ff" strokeWidth="1.5">
                    <animate attributeName="r" values="7;18;7" dur="2s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values=".9;0;.9" dur="2s" repeatCount="indefinite"/>
                  </circle>
                </g>
              </svg>
              <div className="dt-hud dt-hud-left"><span>VISION ENGINE</span><b><i /> OBJECT LOCKED</b><small>CONFIDENCE / 98.6%</small></div>
              <div className="dt-hud dt-hud-right"><span>ORCHESTRATION</span><b><i /> 04 SYSTEMS LINKED</b><small>AI · EDGE · MOTION · CLOUD</small></div>
              <div className="dt-readout"><span>LIVE TELEMETRY</span><b>18.4 <small>ms</small></b><i /><b>99.98<small>%</small></b><span>SYNC</span></div>
            </div>
            <div className="visual-bottomline"><span>FROM INTELLIGENCE TO REAL-WORLD ACTION</span><span> DIGITAL TWIN / 001</span></div>
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
              <Link
                href={"/" + locale + "/services/" + ["ai-intelligent-systems", "software-digital-platforms", "robotics-automation", "system-integration"][index]}
                className="service-card service-card-link"
                key={service.number}
                aria-label={(locale === "zh" ? "了解更多：" : "Explore: ") + service.title}
              >
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
                      <div className="svc-software-window">
                        <div className="svc-software-top"><span className="svc-software-brand"><i /> PISIMAI / WORKSPACE</span><span className="svc-software-dots"><i /><i /><i /></span></div>
                        <div className="svc-software-sidebar"><b /><i /><i /><i /><i /><i /></div>
                        <div className="svc-software-main">
                          <div className="svc-software-heading"><b>Overview</b><span>Last 30 days⌄</span></div>
                          <div className="svc-software-metrics"><i><b>24.8k</b><small>VISITORS</small><em /></i><i><b>86.4%</b><small>UPTIME</small><em /></i><i><b>1.28s</b><small>RESPONSE</small><em /></i></div>
                          <div className="svc-software-chart"><span>PERFORMANCE</span><div>{[24,42,34,62,48,76,58,88,66,96,73,82].map((height,index)=><i key={index} style={{height:height+"%"}} />)}</div></div>
                          <div className="svc-software-activity"><i /><span /><span /><span /><b>LIVE SYNC</b></div>
                        </div>
                        <div className="svc-software-cursor" />
                      </div>
                      <span className="svc-software-glow" />
                    </div>
                  )}
                  {index === 2 && (
                    <div className="service-art service-art-robotics">
                      <div className="svc-robot-head">
                        <div className="svc-robot-cranium" />
                        <div className="svc-robot-brow" />
                        <div className="svc-robot-eye svc-robot-eye-left"><i /></div><div className="svc-robot-eye svc-robot-eye-right"><i /></div>
                        <div className="svc-robot-nose" />
                        <div className="svc-robot-cheek svc-robot-cheek-left" /><div className="svc-robot-cheek svc-robot-cheek-right" />
                        <div className="svc-robot-jaw"><i /><i /><i /><i /><i /></div>
                        <div className="svc-robot-ear svc-robot-ear-left"><i /></div><div className="svc-robot-ear svc-robot-ear-right"><i /></div>
                        <div className="svc-robot-neck" />
                        <span className="svc-robot-scan" />
                      </div>
                      <span className="svc-robot-status">UNIT 01 / ACTIVE</span>
                    </div>
                  )}
                  {index === 3 && (
                    <div className="service-art service-art-integration">
                      <div className="svc-integration-path svc-integration-path-top" /><div className="svc-integration-path svc-integration-path-right" /><div className="svc-integration-path svc-integration-path-bottom" /><div className="svc-integration-path svc-integration-path-left" />
                      <div className="svc-integration-endpoint svc-integration-cloud"><i /><b>CLOUD / API</b></div>
                      <div className="svc-integration-endpoint svc-integration-app"><i /><b>APPLICATION</b></div>
                      <div className="svc-integration-endpoint svc-integration-device"><i /><b>DEVICES</b></div>
                      <div className="svc-integration-endpoint svc-integration-data"><i /><b>DATABASE</b></div>
                      <div className="svc-integration-switch"><div className="svc-integration-switch-top"><i /><i /><i /><span>CORE SWITCH</span></div><div className="svc-integration-ports"><i /><i /><i /><i /><i /><i /></div><small>CONNECTED</small></div>
                      <span className="svc-integration-packet svc-integration-packet-a" /><span className="svc-integration-packet svc-integration-packet-b" /><span className="svc-integration-packet svc-integration-packet-c" /><span className="svc-integration-packet svc-integration-packet-d" />
                    </div>
                  )}
                </div>
                <div className="service-card-copy"><h3>{service.title}</h3><p>{service.text}</p></div>
                <span className="service-view-button" aria-hidden="true">{locale === "zh" ? "查看" : "View"}</span>
              </Link>
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

        <CapabilityShowcase locale={locale} />

        <ExhibitionSection locale={locale} />

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
              <span className="network-pulse pulse-one" /><span className="network-pulse pulse-two" /><span className="network-pulse pulse-three" />
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
              <span className="blueprint-packet packet-one" /><span className="blueprint-packet packet-two" /><span className="blueprint-packet packet-three" />
              <div className="blueprint-node blueprint-node-a"><i /><span>IDEA</span></div>
              <div className="blueprint-node blueprint-node-b"><i /><span>ENGINEERING</span></div>
              <div className="blueprint-node blueprint-node-c"><i /><span>OUTCOME</span></div>
              <div className="blueprint-center"><span>LET&apos;S BUILD</span><b><svg className="ui-arrow-icon" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M4 12 12 4M5 4h7v7" /></svg></b></div>
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
