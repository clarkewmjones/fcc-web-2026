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
