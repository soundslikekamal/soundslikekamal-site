import { PageShell } from "@/components/PageShell";
import { SubpageHeader } from "@/components/SubpageHeader";
import { DividerBar } from "@/components/Callout";
import { TwoColumnText } from "@/components/TwoColumnText";
import { SectionHeading } from "@/components/SectionHeading";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { SitemapFooter, HomeBreadcrumb } from "@/components/SitemapFooter";
import { getPortfolioItemsByService } from "@/lib/notion";

export const revalidate = 3600;

export default async function AudioRestorationPage() {
  const items = await getPortfolioItemsByService("Audio Restoration");

  return (
    <PageShell>
      <SubpageHeader icon="💚" title="Audio Restoration" />

      <DividerBar />
      <TwoColumnText
        left="Issues with your audio?"
        right="I can clean up mouth noises, remove clicks and pops, reduce unwanted background sounds, erase crackle and hum, improve voice clarity and generally smooth out what needs smoothing."
      />
      <DividerBar />

      <SectionHeading>EXAMPLES</SectionHeading>
      <PortfolioGrid items={items} />

      <SitemapFooter />
      <HomeBreadcrumb />
    </PageShell>
  );
}
