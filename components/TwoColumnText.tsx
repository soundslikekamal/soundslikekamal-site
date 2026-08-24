import type { ReactNode } from "react";
import styles from "./TwoColumnText.module.css";

export function TwoColumnText({
  left,
  right,
}: {
  left: ReactNode;
  right: ReactNode;
}) {
  return (
    <div className={styles.row}>
      <div>{left}</div>
      <div>{right}</div>
    </div>
  );
}
