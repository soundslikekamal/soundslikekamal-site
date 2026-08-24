export type ServiceTag =
  | "Technical Supervision"
  | "Creative Music Editing"
  | "Audio Restoration"
  | "Mixing"
  | "Sound Design"
  | "Production Music"
  | "Bespoke Music Composition"
  | "Creative Project Management";

export interface PortfolioItem {
  id: string;
  name: string;
  client: string;
  services: ServiceTag[];
  featured: boolean;
  info: string;
  date: string | null;
  credits: string;
  coverImage: string | null;
  cardColor: CardColor;
}

export type CardColor =
  | "purple"
  | "peach"
  | "yellow"
  | "pink"
  | "blue";

export interface EditingReleaseItem {
  id: string;
  title: string;
  catalogue: string;
  viewAlbumUrl: string;
  artwork: string | null;
}

export interface ServiceLink {
  label: string;
  href: string;
  icon: string;
}

export const SERVICES: ServiceLink[] = [
  { label: "MUSIC COMPOSITION", href: "/music-composition", icon: "🎵" },
  { label: "SOUND DESIGN", href: "/sound-design", icon: "❇️" },
  { label: "MIXING", href: "/mixing", icon: "🎚️" },
  { label: "CREATIVE MUSIC EDITING", href: "/creative-music-editing", icon: "🎧" },
  { label: "AUDIO RESTORATION", href: "/audio-restoration", icon: "💚" },
];

export const INFO_LINKS: ServiceLink[] = [
  { label: "ABOUT ME", href: "/about", icon: "👤" },
  { label: "GET IN TOUCH!", href: "/contact", icon: "❓" },
];
