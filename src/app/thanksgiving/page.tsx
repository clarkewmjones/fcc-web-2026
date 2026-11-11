import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";

export const revalidate = 3600;

const TITLE = "Thanksgiving Dinner — Saturday, November 21 | Faith Community Church";
const DESCRIPTION =
  "Everyone is invited! Join Faith Community Church for our Thanksgiving Dinner, Saturday, November 21, 2026 at 6pm at Five Oaks Community Center in Olivette, MO. Grateful! Joyful! Worshipful!";
const PAGE_URL = "https://www.fccstlouis.org/thanksgiving";
const FLYER = "/flyers/thanksgiving-dinner-2026.jpg";
const SHARE_IMAGE = "/flyers/thanksgiving-dinner-2026-share.jpg";
const LAST_DAY = "2026-11-21";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/thanksgiving" },
  openGraph: {
    type: "website",
    url: "/thanksgiving",
    title: "Everyone Is Invited: Thanksgiving Dinner — Saturday, Nov 21 at 6pm",
    description: DESCRIPTION,
    siteName: "Faith Community Church",
    images: [{ url: SHARE_IMAGE, width: 1200, height: 630, alt: "Thanksgiving Dinner, Saturday, November 21, 2026 6pm" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Everyone Is Invited: Thanksgiving Dinner — Saturday, Nov 21 at 6pm",
    description: DESCRIPTION,
    images: [SHARE_IMAGE],
  },
};

export default function ThanksgivingPage() {
  const today = new Date().toLocaleDateString("en-CA", { timeZone: "America/Chicago" });
  const passed = today > LAST_DAY;

  return (
    <main className="min-h-[60vh] bg-cream">
      <div className="bg-navy px-6 pt-13 pb-11">
        <div className="mx-auto max-w-[1100px]">
          <div className="mb-2.5 font-work text-[11px] font-bold tracking-[0.2em] text-gold">EVERYONE IS INVITED</div>
          <h1 className="font-montserrat text-[clamp(28px,4vw,48px)] font-extrabold tracking-[0.04em] text-white">
            THANKSGIVING DINNER
          </h1>
          <p className="mt-3 max-w-[560px] font-work text-base font-light text-white/65">
            Grateful! Joyful! Worshipful! A wonderful Family of God tradition. Bring your friends and family.
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-10 px-6 py-13 lg:grid-cols-[minmax(0,480px)_1fr]">
        <div className="order-2 lg:order-1">
          <Image
            src={FLYER}
            alt="Thanksgiving Dinner flyer. Everyone is invited to come for Thanksgiving Dinner, Saturday, November 21, 2026, 6pm, at Five Oaks Community Center, 1200 N. Warson Road, Olivette, MO 63132. Grateful! Joyful! Worshipful! Psalm 100. Hosted by Faith Community Church, 2969 N. Lindbergh Blvd, St. Ann, MO 63074, (314) 607-1424, www.FCCStLOUIS.org."
            width={1459}
            height={1868}
            priority
            sizes="(min-width: 1024px) 480px, 100vw"
            className="h-auto w-full border border-line shadow-lg"
          />
        </div>

        <div className="order-1 lg:order-2">
          {passed && (
            <p className="mb-6 border-l-4 border-gold bg-warm-gray px-4 py-3 font-work text-[15px] text-navy">
              This dinner has taken place. Thank you to everyone who joined us!
            </p>
          )}

          <div className="mb-2 font-work text-[11px] font-bold tracking-[0.2em] text-gold">WHEN</div>
          <div className="mb-7 font-montserrat text-[clamp(22px,3vw,30px)] leading-tight font-extrabold text-navy">
            Saturday, November 21, 2026
            <br />
            <span className="text-fcc-blue">6:00 PM</span>
          </div>

          <div className="mb-7 bg-navy px-8 py-8">
            <div className="mb-3 font-work text-[11px] font-bold tracking-[0.2em] text-gold">WHERE</div>
            <div className="mb-3 font-playfair text-[22px] font-bold text-white">Five Oaks Community Center</div>
            <div className="mb-6 font-work text-[15px] leading-[1.8] text-white/75">
              1200 N. Warson Road
              <br />
              Olivette, MO 63132
            </div>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=1200+N+Warson+Rd+Olivette+MO+63132"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold px-6 py-3 font-work text-[13px] font-bold tracking-[0.06em] text-white"
            >
              GET DIRECTIONS <span className="text-base">▶</span>
            </a>
          </div>

          <div className="mb-8">
            <h2 className="mb-4 font-montserrat text-lg font-extrabold tracking-[0.08em] text-navy">
              SHARE THE INVITATION
            </h2>
            <ShareButtons
              url={PAGE_URL}
              title="Thanksgiving Dinner — Saturday, November 21 at 6pm"
              text="You're invited to the Faith Community Church Thanksgiving Dinner, Saturday, November 21 at 6pm at Five Oaks Community Center in Olivette. Great food, great fellowship!"
              flyerHref={FLYER}
              flyerFilename="FCC-Thanksgiving-Dinner-2026.jpg"
            />
          </div>

          <div className="bg-warm-gray px-8 py-7">
            <div className="mb-2 font-work text-[11px] font-bold tracking-[0.2em] text-gold">QUESTIONS?</div>
            <div className="font-work text-[15px] leading-[1.9] text-ink">
              <strong className="text-navy">Faith Community Church</strong>
              <br />
              Call or text: (314) 607-1424
              <br />
              <a href="mailto:info@fccstlouis.org" className="text-fcc-blue">
                info@fccstlouis.org
              </a>
            </div>
          </div>

          <div className="mt-8">
            <Link href="/events" className="font-work text-[13px] font-semibold tracking-[0.08em] text-fcc-blue">
              ← ALL UPCOMING EVENTS
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
