import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { copy } from "@/lib/i18n";

export function SiteHeader({ locale, currentPath }: { locale: Locale; currentPath?: string }) {
  const t = copy[locale];
  const otherLocale = locale === "en" ? "zh" : "en";
  const items = [
    ["home", "/" + locale], ["services", "/" + locale + "/services"], ["solutions", "/" + locale + "/solutions"],
    ["technology", "/" + locale + "/technology"], ["about", "/" + locale + "/about"], ["contact", "/" + locale + "/contact"]
  ] as const;

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href={"/" + locale} aria-label="PISIMAI TECHNOLOGY home">
          <span className="brand-logo-wrap"><Image src="/brand/pisimai-horizontal-dark.svg" alt="PISIMAI TECHNOLOGY" width={270} height={58} priority className="brand-logo" /></span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {items.map(([key, href]) => <Link key={key} href={href}>{t.nav[key]}</Link>)}
        </nav>
        <div className="header-actions">
          <Link className="language-switch" href={"/" + otherLocale + (currentPath ? "/" + currentPath : "")} hrefLang={otherLocale}>{t.language}</Link>
          <Link className="header-contact" href={"/" + locale + "/contact"}>{t.nav.contact}<span aria-hidden="true">↗</span></Link>
        </div>
      </div>
      <nav className="mobile-nav" aria-label="Mobile navigation">
        {items.map(([key, href]) => <Link key={key} href={href} scroll>{t.nav[key]}</Link>)}
      </nav>
    </header>
  );
}
