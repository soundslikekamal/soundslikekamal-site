import styles from "./Callout.module.css";
import type { ReactNode } from "react";

export function Callout({ children }: { children: ReactNode }) {
  return <div className={styles.callout}>{children}</div>;
}

/** Empty full-width gray divider bar, used between intro text blocks on subpages. */
export function DividerBar() {
  return <div className={styles.spacer} aria-hidden="true" />;
}
