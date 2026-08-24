import styles from "./SectionHeading.module.css";

export function SectionHeading({ children }: { children: string }) {
  return <h2 className={styles.heading}>{children}</h2>;
}
