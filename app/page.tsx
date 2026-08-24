import { PageShell } from "@/components/PageShell";
import { KKLogo, Wordmark } from "@/components/Wordmark";
import { Callout } from "@/components/Callout";
import { ServicesInfoPanel } from "@/components/ServicesInfoPanel";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { SitemapFooter } from "@/components/SitemapFooter";
import { getFeaturedPortfolioItems } from "@/lib/notion";
import styles from "./page.module.css";

export const revalidate = 3600; // ISR: revalidate hourly

export default async function Home() {
  const featured = await getFeaturedPortfolioItems();

  return (
    <PageShell>
      <KKLogo />
      <Wordmark />

      <Callout>
        <span className={styles.tagline}>CREATIVE MUSIC &amp; SOUND SERVICES</span>
      </Callout>

      <ServicesInfoPanel />

      <div className={styles.portfolioCallout}>
        <div className={styles.portfolioHeading}>FEATURED PORTFOLIO</div>
        <PortfolioGrid items={featured} />
      </div>

      <SitemapFooter />
    </PageShell>
  );
}
