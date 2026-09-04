import type { Metadata } from "next";
import { Newsreader } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const satoshi = localFont({
  src: "../fonts/Satoshi-Variable.woff2",
  variable: "--font-sans",
  weight: "300 900",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin", "latin-ext"],
  axes: ["opsz"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Daně - VTVS s.r.o. — účetnictví a daně od roku 1997",
  description:
    "O účetnictví, daně, mzdy a související povinnosti našich klientů se staráme již od roku 1997. Osobně, srozumitelně a s odborným zázemím daňového poradce.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs" className={`${satoshi.variable} ${newsreader.variable}`}>
      <body>
        <a className="skip-link" href="#obsah">
          Přeskočit na obsah
        </a>
        {children}
      </body>
    </html>
  );
}
