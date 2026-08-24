import styles from "./TagPill.module.css";
import type { ServiceTag } from "@/lib/types";

const TAG_COLOR_VARS: Record<ServiceTag, { bg: string; text: string }> = {
  "Technical Supervision": { bg: "var(--tag-orange-bg)", text: "var(--tag-orange-text)" },
  "Creative Music Editing": { bg: "var(--tag-orange-bg)", text: "var(--tag-orange-text)" },
  "Audio Restoration": { bg: "var(--tag-red-bg)", text: "var(--tag-red-text)" },
  Mixing: { bg: "var(--tag-yellow-bg)", text: "var(--tag-yellow-text)" },
  "Sound Design": { bg: "var(--tag-blue-bg)", text: "var(--tag-blue-text)" },
  "Production Music": { bg: "var(--tag-pink-bg)", text: "var(--tag-pink-text)" },
  "Bespoke Music Composition": { bg: "var(--tag-purple-bg)", text: "var(--tag-purple-text)" },
  "Creative Project Management": { bg: "var(--tag-green-bg)", text: "var(--tag-green-text)" },
};

export function TagPill({ tag }: { tag: ServiceTag }) {
  const colors = TAG_COLOR_VARS[tag];
  return (
    <span
      className={styles.pill}
      style={{ backgroundColor: colors.bg, color: colors.text }}
    >
      {tag}
    </span>
  );
}
