import { PageShell } from "@/components/PageShell";
import { SubpageHeader } from "@/components/SubpageHeader";
import { DividerBar } from "@/components/Callout";
import { TwoColumnText } from "@/components/TwoColumnText";
import { SectionHeading } from "@/components/SectionHeading";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { SitemapFooter, HomeBreadcrumb } from "@/components/SitemapFooter";
import { getPortfolioItemsByService } from "@/lib/notion";

export const revalidate = 3600;

export default async function MixingPage() {
  const items = await getPortfolioItemsByService("Mixing");

  return (
    <PageShell>
      <SubpageHeader icon="🎚️" title="Mixing" />

      <DividerBar />
      <TwoColumnText
        left="Already have all your audio elements but need them to be assembled, honed and polished? Or simply want your existing mix to sound better?"
        right="Whether you need a light-touch stem mix, a full-scale song mix, or even a broadcast mix for an advert, you're in the right place."
      />
      <DividerBar />

      <SectionHeading>PORTFOLIO</SectionHeading>
      <PortfolioGrid items={items} />

      <SitemapFooter />
      <HomeBreadcrumb />
    </PageShell>
  );
}
