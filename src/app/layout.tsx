import type { Metadata } from "next";
import { EB_Garamond, Montserrat, Playfair_Display, Work_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["italic"],
  variable: "--font-eb-garamond",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-montserrat",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  title: "Faith Community Church | St. Louis, MO",
  description:
    "Faith Community Church — 30 years of Believe, Belong, Become in St. Louis, MO. Join us Sundays for worship, Sunday School, and evening praise.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${ebGaramond.variable} ${montserrat.variable} ${playfairDisplay.variable} ${workSans.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-cream text-ink">
        <Nav />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
