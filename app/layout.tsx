import type { Metadata } from "next";
import { JetBrains_Mono, Archivo } from "next/font/google";
import "./globals.css";

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

const display = Archivo({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["800", "900"],
});

export const metadata: Metadata = {
  title: "Kamal Kamruddin — Creative Music & Sound Services",
  description:
    "Kamal Kamruddin is a London-based composer and sound designer. Music composition, sound design, mixing, creative music editing, and audio restoration for moving image.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${mono.variable} ${display.variable}`}>
      <body>{children}</body>
    </html>
  );
}
