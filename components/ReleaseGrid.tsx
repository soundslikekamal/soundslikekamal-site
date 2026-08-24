import Image from "next/image";
import Link from "next/link";
import styles from "./ReleaseGrid.module.css";
import type { EditingReleaseItem } from "@/lib/types";

export function ReleaseGrid({ items }: { items: EditingReleaseItem[] }) {
  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <Link
          key={item.id}
          href={item.viewAlbumUrl || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.item}
        >
          <div className={styles.cover}>
            {item.artwork && (
              <Image
                src={item.artwork}
                alt={item.title}
                fill
                className={styles.image}
                sizes="200px"
              />
            )}
          </div>
          <div className={styles.title}>{item.title}</div>
          <div className={styles.catalogue}>{item.catalogue}</div>
        </Link>
      ))}
    </div>
  );
}
