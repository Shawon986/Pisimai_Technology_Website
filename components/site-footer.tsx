import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { copy } from "@/lib/i18n";

export function SiteFooter({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <Link href={"/" + locale} aria-label="PISIMAI TECHNOLOGY home">
          <Image src="/brand/pisimai-horizontal-dark.svg" alt="PISIMAI TECHNOLOGY" width={235} height={50} />
        </Link>
        <p>{t.footerLine}</p>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} PISIMAI TECHNOLOGY. {t.copyright}</span>
        <span className="footer-status"><i /> Built for what comes next</span>
      </div>
    </footer>
  );
}
