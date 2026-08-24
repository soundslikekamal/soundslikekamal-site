import { PageShell } from "@/components/PageShell";
import { SubpageHeader } from "@/components/SubpageHeader";
import { DividerBar } from "@/components/Callout";
import { TwoColumnText } from "@/components/TwoColumnText";
import { SectionHeading } from "@/components/SectionHeading";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { SitemapFooter, HomeBreadcrumb } from "@/components/SitemapFooter";
import { getPortfolioItemsByService } from "@/lib/notion";

export const revalidate = 3600;

export default async function MusicCompositionPage() {
  const items = await getPortfolioItemsByService("Bespoke Music Composition");

  return (
    <PageShell>
      <SubpageHeader icon="🎵" title="Music Composition" />

      <DividerBar />
      <TwoColumnText
        left="I write bespoke music for all sorts of media, particularly for moving image."
        right="I can cover a range of styles, but if I can't nail what you're after, I can help put you in touch with someone who can."
      />
      <DividerBar />

      <SectionHeading>PORTFOLIO</SectionHeading>
      <PortfolioGrid items={items} />

      <SitemapFooter />
      <HomeBreadcrumb />
    </PageShell>
  );
}
