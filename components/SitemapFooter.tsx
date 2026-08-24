import Link from "next/link";
import styles from "./SitemapFooter.module.css";
import { INFO_LINKS, SERVICES } from "@/lib/types";

export function SitemapFooter() {
  const year = new Date().getFullYear();
  return (
    <details className={styles.footer}>
      <summary className={styles.summary}>
        © Kamal Kamruddin {year}
      </summary>
      <div className={styles.content}>
        <div>
          <div className={styles.colHeading}>SERVICES</div>
          <div className={styles.linkList}>
            {SERVICES.map((s) => (
              <Link key={s.href} href={s.href}>
                {s.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className={styles.colHeading}>INFO</div>
          <div className={styles.linkList}>
            {INFO_LINKS.map((s) => (
              <Link key={s.href} href={s.href}>
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </details>
  );
}

export function HomeBreadcrumb() {
  return (
    <div className={styles.breadcrumb}>
      <Link href="/">← HOME</Link>
    </div>
  );
}
