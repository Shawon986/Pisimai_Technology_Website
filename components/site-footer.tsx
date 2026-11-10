import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { copy } from "@/lib/i18n";

export function SiteFooter({ locale, currentPath }: { locale: Locale; currentPath?: string }) {
  const t = copy[locale];
  const navItems = [
    ["home", "/" + locale],
    ["solutions", "/" + locale + "/solutions"],
    ["services", "/" + locale + "/services"],
    ["technology", "/" + locale + "/technology"],
    ["about", "/" + locale + "/about"],
    ["contact", "/" + locale + "/contact"]
  ] as const;

  return (
    <footer className="site-footer">
      <div className="footer-glow" aria-hidden="true" />
      <div className="footer-topline">
        <span>PISIMAI / TECHNOLOGY</span>
        <span>{locale === "zh" ? "智能 · 工程 · 集成" : "INTELLIGENCE · ENGINEERING · INTEGRATION"}</span>
      </div>
      <div className="footer-main">
        <div className="footer-brand-block">
          <Link href={"/" + locale} aria-label="PISIMAI TECHNOLOGY home">
            <span className="brand-logo-wrap footer-brand-logo-wrap"><Image src="/brand/pisimai-horizontal-dark.svg" alt="PISIMAI TECHNOLOGY" width={270} height={58} /></span>
          </Link>
          <p>{t.footerLine}</p>
          <span className="footer-brand-caption">{locale === "zh" ? "面向未来的技术合作伙伴" : "A technology partner for what comes next."}</span>
        </div>
        <div className="footer-links-block">
          <span className="footer-column-label">{locale === "zh" ? "快速导航" : "EXPLORE"}</span>
          <nav className="footer-nav" aria-label={locale === "zh" ? "页脚导航" : "Footer navigation"}>
            {navItems.map(([key, href]) => <Link key={key} href={href}>{t.nav[key]}</Link>)}
          </nav>
        </div>
        <div className="footer-connect-block">
          <span className="footer-column-label">{locale === "zh" ? "开启交流" : "LET'S CONNECT"}</span>
          <h2>{locale === "zh" ? "让我们探讨下一步。" : "Let's explore what's possible."}</h2>
          <Link className="footer-contact-link" href={"/" + locale + "/contact"}>
            {t.nav.contact}<span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} PISIMAI TECHNOLOGY. {t.copyright}</span>
        <div className="footer-bottom-right">
          <Link href={"/" + (locale === "en" ? "zh" : "en") + (currentPath ? "/" + currentPath : "")}>{t.language}</Link>
          <span className="footer-status"><i /> {locale === "zh" ? "面向未来而构建" : "BUILT FOR WHAT COMES NEXT"}</span>
        </div>
      </div>
    </footer>
  );
}
