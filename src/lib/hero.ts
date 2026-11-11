// To change the homepage hero:
//  - Graphic hero: drop the graphic into src/assets/hero/, then update image, alt, href. Delete `video`.
//  - Video hero: put the compressed MP4 in public/videos/, set `video` below; `image` is the still shown
//    while loading and for visitors with "reduce motion" turned on.
import type { StaticImageData } from "next/image";
import image from "@/assets/hero/2026-10-12-come-be-refreshed-poster.jpg";

type Hero = {
  image: StaticImageData;
  alt: string;
  href: string;
  video?: { src: string; headline: string; subline: string; ctaLabel: string };
};

// Optional banner shown above the hero until the end of `until` (YYYY-MM-DD, Central time), then it
// disappears on its own. To retire it early or reuse the slot, edit/delete BANNER.
import bannerImage from "@/assets/hero/2026-11-11-honoring-veterans.jpg";

export const BANNER: { image: StaticImageData; alt: string; until: string } | null = {
  image: bannerImage,
  alt: "Honoring American Veterans — 11th day of the 11th month, with heartfelt gratitude. Faith Community Church, St. Ann, MO, www.fccstlouis.org",
  until: "2026-11-12",
};

function isActive(until: string) {
  const today = new Date().toLocaleDateString("en-CA", { timeZone: "America/Chicago" });
  return today <= until;
}

export function getActiveBanner() {
  return BANNER && isActive(BANNER.until) ? BANNER : null;
}

// Slim promo strip shown above the hero until the end of `until`, linking to a details page.
export const PROMO: {
  until: string;
  href: string;
  thumb: string;
  thumbSize: [number, number];
  eyebrow: string;
  title: string;
  detail: string;
  cta: string;
} | null = {
  until: "2026-11-21",
  href: "/thanksgiving",
  thumb: "/flyers/thanksgiving-dinner-2026.jpg",
  thumbSize: [1459, 1868],
  eyebrow: "Everyone is invited",
  title: "Thanksgiving Dinner",
  detail: "Saturday, Nov 21 · 6pm · Five Oaks Community Center, Olivette",
  cta: "View & share the invitation",
};

export function getActivePromo() {
  return PROMO && isActive(PROMO.until) ? PROMO : null;
}

export const HERO: Hero = {
  image,
  alt: "Come. Be Refreshed. — a forest stream at Faith Community Church",
  href: "/visit",
  video: {
    src: "/videos/2026-10-12-come-be-refreshed.mp4",
    headline: "Come. Be Refreshed.",
    subline: "Sundays 11:00 AM & 6:00 PM\n2969 N Lindbergh Blvd, St. Ann, MO 63074",
    ctaLabel: "Plan Your Visit",
  },
};
