import Image from "next/image";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { HomeBreadcrumb, SitemapFooter } from "@/components/SitemapFooter";
import { TagPill } from "@/components/TagPill";
import { getPortfolioItemById, getPortfolioItems } from "@/lib/notion";
import styles from "./page.module.css";

export const revalidate = 3600;

export async function generateStaticParams() {
  const items = await getPortfolioItems();
  return items.map((item) => ({ id: item.id }));
}

export default async function PortfolioDetailPage({
  params,
}: PageProps<"/portfolio/[id]">) {
  const { id } = await params;
  const item = await getPortfolioItemById(id);

  if (!item) {
    notFound();
  }

  return (
    <PageShell>
      <HomeBreadcrumb />

      {item.coverImage && (
        <div className={styles.hero}>
          <Image
            src={item.coverImage}
            alt={item.name}
            fill
            className={styles.heroImg}
            sizes="(max-width: 900px) 100vw, 900px"
            priority
          />
        </div>
      )}

      <div className={styles.meta}>
        <h1 className={styles.title}>{item.name}</h1>
        <div className={styles.client}>{item.client}</div>
        {item.date && <div className={styles.date}>{item.date}</div>}
        {item.services.length > 0 && (
          <div className={styles.tags}>
            {item.services.map((s) => (
              <TagPill key={s} tag={s} />
            ))}
          </div>
        )}
      </div>

      {item.info && (
        <div className={styles.section}>
          <div className={styles.sectionLabel}>About this project</div>
          <p className={styles.body}>{item.info}</p>
        </div>
      )}

      {item.credits && (
        <div className={styles.section}>
          <div className={styles.sectionLabel}>Credits</div>
          <p className={styles.body}>{item.credits}</p>
        </div>
      )}

      <SitemapFooter />
      <HomeBreadcrumb />
    </PageShell>
  );
}
