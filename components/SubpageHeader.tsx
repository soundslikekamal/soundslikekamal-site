import styles from "./SubpageHeader.module.css";
import { HomeBreadcrumb } from "./SitemapFooter";

export function SubpageHeader({
  icon,
  title,
}: {
  icon: string;
  title: string;
}) {
  return (
    <div className={styles.wrap}>
      <div className={styles.icon} aria-hidden="true">
        {icon}
      </div>
      <h1 className={styles.title}>{title}</h1>
      <HomeBreadcrumb />
    </div>
  );
}
