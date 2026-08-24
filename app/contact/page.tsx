import { PageShell } from "@/components/PageShell";
import { SubpageHeader } from "@/components/SubpageHeader";
import { DividerBar } from "@/components/Callout";
import { SitemapFooter, HomeBreadcrumb } from "@/components/SitemapFooter";
import styles from "./page.module.css";

export const metadata = {
  title: "Get In Touch — Kamal Kamruddin",
};

const BOOKING_URL = "https://calendar.notion.so/meet/kamalkamruddin/mx1ln4pfo";

export default function ContactPage() {
  return (
    <PageShell>
      <SubpageHeader icon="❓" title="Get In Touch!" />
      <DividerBar />

      <div className={styles.columns}>
        <div>
          <div className={styles.blockHeading}>Message me ↗</div>
          <p className={styles.body}>
            by sending me an email{" "}
            <a href="mailto:kdk.fxwax@slmail.me">HERE</a> and leaving your
            contact details.
          </p>
        </div>

        <div>
          <div className={styles.or}>OR</div>
          <div className={`${styles.blockHeading} ${styles.accentHeading}`}>
            Book half an hour with me ↗
          </div>
          <p className={styles.body}>to chat about your project.</p>

          <div className={styles.bookingEmbed}>
            <iframe
              src={BOOKING_URL}
              title="Book a call with Kamal Kamruddin"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <SitemapFooter />
      <HomeBreadcrumb />
    </PageShell>
  );
}
