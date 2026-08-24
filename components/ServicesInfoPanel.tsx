import Link from "next/link";
import styles from "./ServicesInfoPanel.module.css";
import { INFO_LINKS, SERVICES } from "@/lib/types";

export function ServicesInfoPanel() {
  return (
    <div className={styles.row}>
      <div className={`${styles.panel} ${styles.services}`}>
        <div className={styles.heading}>SERVICES</div>
        <div className={styles.linkList}>
          {SERVICES.map((s) => (
            <div key={s.href} className={styles.linkRow}>
              <span aria-hidden="true">{s.icon}</span>
              <Link href={s.href}>{s.label}</Link>
            </div>
          ))}
        </div>
      </div>
      <div className={`${styles.panel} ${styles.info}`}>
        <div className={styles.heading}>INFO</div>
        <div className={styles.linkList}>
          {INFO_LINKS.map((s) => (
            <div key={s.href} className={styles.linkRow}>
              <span aria-hidden="true">{s.icon}</span>
              <Link href={s.href}>{s.label}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
