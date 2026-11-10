import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { copy } from "@/lib/i18n";

export function SiteHeader({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const otherLocale = locale === "en" ? "zh" : "en";
  const items = [
    ["home", "#home"], ["services", "#services"], ["solutions", "#solutions"],
    ["technology", "#technology"], ["about", "#about"], ["contact", "#contact"]
  ] as const;

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href={"/" + locale} aria-label="PISIMAI TECHNOLOGY home">
          <span className="brand-logo-wrap"><Image src="/brand/pisimai-horizontal-dark.svg" alt="PISIMAI TECHNOLOGY" width={270} height={58} priority className="brand-logo" /><span className="logo-signal" aria-hidden="true" /><span className="logo-node" aria-hidden="true" /></span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {items.map(([key, href]) => <a key={key} href={href}>{t.nav[key]}</a>)}
        </nav>
        <div className="header-actions">
          <Link className="language-switch" href={"/" + otherLocale} hrefLang={otherLocale}>{t.language}</Link>
          <a className="header-contact" href="#contact">{t.nav.contact}<span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <nav className="mobile-nav" aria-label="Mobile navigation">
        {items.map(([key, href]) => <a key={key} href={href}>{t.nav[key]}</a>)}
      </nav>
    </header>
  );
}
