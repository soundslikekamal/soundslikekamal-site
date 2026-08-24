import Image from "next/image";
import { PageShell } from "@/components/PageShell";
import { SubpageHeader } from "@/components/SubpageHeader";
import { DividerBar } from "@/components/Callout";
import { SitemapFooter, HomeBreadcrumb } from "@/components/SitemapFooter";
import styles from "./page.module.css";

export const metadata = {
  title: "About Me — Kamal Kamruddin",
};

const TAGLINE_LINES = [
  "bespoke music maker,",
  "sound design creator,",
  "collaborator,",
  "facilitator,",
  "easy on the fader.",
];

export default function AboutPage() {
  return (
    <PageShell>
      <SubpageHeader icon="👤" title="About Me" />
      <DividerBar />

      <div className={styles.columns}>
        <div>
          <div className={styles.portrait}>
            <Image
              src="/kamal-portrait.jpg"
              alt="Kamal Kamruddin"
              fill
              className={styles.portraitImg}
              sizes="280px"
            />
          </div>
          <p className={styles.tagline}>
            {TAGLINE_LINES.map((line, i) => (
              <span
                key={line}
                className={styles.taglineLine}
                style={{ marginLeft: `${i * 1.1}em` }}
              >
                {line}
              </span>
            ))}
          </p>
        </div>

        <div className={styles.bio}>
          <p className={styles.bioIntro}>
            I am a music and sound maker and creative project manager based in
            London.
          </p>
          <p>
            I have been professionally creating music and sound design for
            moving image for 16 years and counting.
          </p>
          <p>I started making music because I wanted to play guitar like Jimi Hendrix.</p>
          <p>
            And as a young CD 💿 collector, I tried to absorb as many
            different types of music as I could, clearly influenced by my
            dad&rsquo;s &ldquo;I like anything with a beat&rdquo; approach to
            music appreciation.
          </p>
          <p>
            The ensuing exploration of adding context through audio has since
            taken me to some pretty unexpected places — writing the theme
            music for a reality TV series, mixing a big-band album, recording
            a WWII tank, and re-versioning a Tom Jones classic for a TV ad
            featuring singing houses.
          </p>
          <p>The dream is alive.</p>

          <div className={styles.ctaBox}>
            I love to collaborate, so if you do too,{" "}
            <a href="/contact">give me a shout</a>! 👍
          </div>
        </div>
      </div>

      <SitemapFooter />
      <HomeBreadcrumb />
    </PageShell>
  );
}
