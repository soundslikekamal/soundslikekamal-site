import styles from "./Wordmark.module.css";

/** Small "KK" logo mark, top of homepage — recreated as inline SVG. */
export function KKLogo() {
  return (
    <svg
      viewBox="0 0 100 100"
      className={styles.logo}
      aria-hidden="true"
      fill="none"
      stroke="var(--color-text)"
      strokeWidth="6"
      strokeLinecap="square"
    >
      {/* Left K */}
      <line x1="10" y1="15" x2="10" y2="85" />
      <line x1="10" y1="50" x2="38" y2="15" />
      <line x1="10" y1="50" x2="38" y2="85" />
      {/* Right K, mirrored/overlapping */}
      <line x1="55" y1="15" x2="55" y2="85" />
      <line x1="55" y1="50" x2="83" y2="15" />
      <line x1="55" y1="50" x2="83" y2="85" />
    </svg>
  );
}

/**
 * "KAMAL / KAMRUDDIN" hero wordmark — replicates the live site's overlapping,
 * outlined double-exposure effect: two lines of bold outlined type, left-aligned,
 * stacked with negative margin so "KAMAL" overlaps the top of "KAMRUDDIN".
 */
export function Wordmark() {
  return (
    <div className={styles.wordmark} aria-label="Kamal Kamruddin">
      <div className={`${styles.line} ${styles.lineTop}`} aria-hidden="true">
        KAMAL
      </div>
      <div className={`${styles.line} ${styles.lineBottom}`} aria-hidden="true">
        KAMRUDDIN
      </div>
    </div>
  );
}
