import { PageShell } from "@/components/PageShell";
import { SubpageHeader } from "@/components/SubpageHeader";
import { DividerBar } from "@/components/Callout";
import { TwoColumnText } from "@/components/TwoColumnText";
import { SectionHeading } from "@/components/SectionHeading";
import { ReleaseGrid } from "@/components/ReleaseGrid";
import { SitemapFooter, HomeBreadcrumb } from "@/components/SitemapFooter";
import { getEditingReleases } from "@/lib/notion";

export const revalidate = 3600;

export default async function CreativeMusicEditingPage() {
  const releases = await getEditingReleases();

  return (
    <PageShell>
      <SubpageHeader icon="🎧" title="Creative Music Editing" />

      <DividerBar />
      <TwoColumnText
        left="Releasing music for media? I can provide feedback and editing, (both musical and technical) to ensure your tracks and stems are the best they can be and are ready to be mastered and released."
        right="This includes the creation of alternative versions and cutdowns, and can also include stem mixing if required. You can be sure that I deliver all these services with the strictest attention to detail."
      />
      <DividerBar />

      <SectionHeading>PORTFOLIO</SectionHeading>
      <p style={{ fontSize: 13, color: "var(--color-text-muted)", marginTop: -8 }}>
        Albums I&rsquo;ve edited with{" "}
        <a href="https://northernhawkmedia.com" target="_blank" rel="noopener noreferrer">
          Northern Hawk Media
        </a>
        ...
      </p>
      <ReleaseGrid items={releases} />

      <SitemapFooter />
      <HomeBreadcrumb />
    </PageShell>
  );
}
