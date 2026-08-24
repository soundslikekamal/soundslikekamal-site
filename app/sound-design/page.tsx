import { PageShell } from "@/components/PageShell";
import { SubpageHeader } from "@/components/SubpageHeader";
import { DividerBar } from "@/components/Callout";
import { TwoColumnText } from "@/components/TwoColumnText";
import { SectionHeading } from "@/components/SectionHeading";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { MuseumList } from "@/components/MuseumList";
import { SitemapFooter, HomeBreadcrumb } from "@/components/SitemapFooter";
import { getPortfolioItemsByService } from "@/lib/notion";
import styles from "./page.module.css";

export const revalidate = 3600;

export default async function SoundDesignPage() {
  const items = await getPortfolioItemsByService("Sound Design");

  return (
    <PageShell>
      <SubpageHeader icon="❇️" title="Sound Design" />

      <DividerBar />
      <TwoColumnText
        left="I can create bespoke sound design for whatever your project needs."
        right="Whether it's the sound of mixing a very specific cocktail recipe, a soundscape for a historical museum installation, or something else entirely."
      />
      <DividerBar />

      <div className={styles.columns}>
        <div>
          <SectionHeading>FOR MOVING IMAGE</SectionHeading>
          <PortfolioGrid items={items} />
        </div>
        <div>
          <SectionHeading>FOR MUSEUMS</SectionHeading>
          <MuseumList />
        </div>
      </div>

      <SitemapFooter />
      <HomeBreadcrumb />
    </PageShell>
  );
}
