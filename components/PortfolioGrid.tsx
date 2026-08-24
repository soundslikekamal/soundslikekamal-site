import styles from "./PortfolioGrid.module.css";
import { PortfolioCard } from "./PortfolioCard";
import type { PortfolioItem } from "@/lib/types";

export function PortfolioGrid({
  items,
  dense = false,
}: {
  items: PortfolioItem[];
  dense?: boolean;
}) {
  return (
    <div className={`${styles.grid} ${dense ? styles.dense : ""}`}>
      {items.map((item) => (
        <PortfolioCard key={item.id} item={item} />
      ))}
    </div>
  );
}
