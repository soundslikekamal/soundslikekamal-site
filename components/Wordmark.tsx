import Image from "next/image";
import styles from "./Wordmark.module.css";

/** Small "KK" logo mark, top of homepage — original double-exposure artwork. */
export function KKLogo() {
  return (
    <Image
      src="/kk-logo.png"
      alt="KK"
      width={312}
      height={308}
      className={styles.logo}
      priority
    />
  );
}

/**
 * "KAMAL / KAMRUDDIN" hero wordmark — original overlapping, outlined
 * double-exposure artwork.
 */
export function Wordmark() {
  return (
    <Image
      src="/kamal-wordmark.png"
      alt="Kamal Kamruddin"
      width={2045}
      height={514}
      className={styles.wordmark}
      priority
    />
  );
}
