import Image from "next/image";
import styles from "./PortfolioCard.module.css";
import { TagPill } from "./TagPill";
import type { CardColor, PortfolioItem } from "@/lib/types";

const CARD_BG: Record<CardColor, string> = {
  purple: "var(--card-purple)",
  peach: "var(--card-peach)",
  yellow: "var(--card-yellow)",
  pink: "var(--card-pink)",
  blue: "var(--card-blue)",
};

export function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <div
      className={styles.card}
      style={{ backgroundColor: CARD_BG[item.cardColor] }}
    >
      <div className={styles.imageWrap}>
        {item.coverImage && (
          <Image
            src={item.coverImage}
            alt={item.name}
            fill
            className={styles.image}
            sizes="(max-width: 640px) 100vw, 450px"
          />
        )}
      </div>
      <div className={styles.body}>
        <div className={styles.title}>{item.name}</div>
        <div className={styles.client}>{item.client}</div>
        {item.services.length > 0 && (
          <div className={styles.tags}>
            {item.services.map((s) => (
              <TagPill key={s} tag={s} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
