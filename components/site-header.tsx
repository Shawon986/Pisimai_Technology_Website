import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import type { Locale } from "@/lib/i18n";
import { copy } from "@/lib/i18n";

export function SiteHeader({ locale, currentPath }: { locale: Locale; currentPath?: string }) {
  const t = copy[locale];
  const otherLocale = locale === "en" ? "zh" : "en";
  const activePath = (currentPath ?? "").replace(/^\/+|\/+$/g, "");
  const items = [
    ["home", "/" + locale], ["services", "/" + locale + "/services"], ["solutions", "/" + locale + "/solutions"],
    ["technology", "/" + locale + "/technology"], ["about", "/" + locale + "/about"], ["contact", "/" + locale + "/contact"]
  ] as const;

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href={"/" + locale} aria-label="PISIMAI TECHNOLOGY home">
          <span className="brand-logo-wrap footer-brand-logo-wrap"><BrandLogo /></span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {items.map(([key, href]) => {
            const isActive = key === "home" ? activePath === "" : activePath === key || activePath.startsWith(key + "/");
            return <Link key={key} href={href} aria-current={isActive ? "page" : undefined}>{t.nav[key]}</Link>;
          })}
        </nav>
        <div className="header-actions">
          <Link className="language-switch" href={"/" + otherLocale + (currentPath ? "/" + currentPath : "")} hrefLang={otherLocale}>{t.language}</Link>
          <Link className="header-contact" href={"/" + locale + "/contact"}>{t.nav.contact}<span aria-hidden="true"><svg className="ui-arrow-icon" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M4 12 12 4M5 4h7v7" /></svg></span></Link>
        </div>
      </div>
      <nav className="mobile-nav" aria-label="Mobile navigation">
        {items.map(([key, href]) => {
          const isActive = key === "home" ? activePath === "" : activePath === key || activePath.startsWith(key + "/");
          return <Link key={key} href={href} scroll aria-current={isActive ? "page" : undefined}>{t.nav[key]}</Link>;
        })}
      </nav>
    </header>
  );
}
