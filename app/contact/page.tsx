import { PageShell } from "@/components/PageShell";
import { SubpageHeader } from "@/components/SubpageHeader";
import { DividerBar } from "@/components/Callout";
import { SitemapFooter, HomeBreadcrumb } from "@/components/SitemapFooter";
import styles from "./page.module.css";

export const metadata = {
  title: "Get In Touch — Kamal Kamruddin",
};

// TODO: replace with Kamal's real scheduling link (Cal.com / Calendly / Google
// Calendar appointment schedule) once provided.
const BOOKING_URL = "#";

export default function ContactPage() {
  return (
    <PageShell>
      <SubpageHeader icon="❓" title="Get In Touch!" />
      <DividerBar />

      <div className={styles.columns}>
        <div>
          <div className={styles.blockHeading}>Message me ↗</div>
          <p className={styles.body}>
            by sending me an email at{" "}
            <a href="mailto:kdk.fxwax@slmail.me">kdk.fxwax@slmail.me</a> and
            leaving your contact details.
          </p>
        </div>

        <div>
          <div className={styles.or}>OR</div>
          <div className={`${styles.blockHeading} ${styles.accentHeading}`}>
            Book half an hour with me ↗
          </div>
          <p className={styles.body}>to chat about your project.</p>

          <div className={styles.bookingWidget}>
            Scheduling widget coming soon.
            <br />
            <a className={styles.bookingCta} href={BOOKING_URL}>
              Book a call
            </a>
          </div>
        </div>
      </div>

      <SitemapFooter />
      <HomeBreadcrumb />
    </PageShell>
  );
}
