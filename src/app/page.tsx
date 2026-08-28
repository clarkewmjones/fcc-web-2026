import Link from "next/link";
import { getUpcomingEvents } from "@/lib/events";

// Recheck periodically so events drop off automatically once they've passed.
export const revalidate = 3600;

const MONTH_ABBR = ["", "JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

const TICKER_ITEMS = [
  "⭐ AUG 30 — ROUND UP SUNDAY · Get out your western wear!",
  "⭐ SEPT 6 — LABOR DAY WEEKEND · 30th Anniversary Jubilee Month Begins",
  "⭐ SEPT 13 — GRANDPARENTS SUNDAY · Special Gift & Presentation",
  "⭐ SEPT 16–20 — ONWARD 30th Anniversary Week · Special Guests: Evangelist Nathan Kline · Bishop Marsh Jones · The Singing Jewetts",
  "⭐ EVERY SUNDAY — Adult Bible Study 10:15 AM · Worship & Sunday School 11:00 AM · Praise & Preaching 6:00 PM",
  "⭐ EVERY WEDNESDAY — The Glad Hour · 7:00 PM · 2969 N Lindbergh Blvd · St. Ann, MO",
].join("          ✦          ");

const SERVICE_TIMES = [
  { label: "SUNDAY WORSHIP", time: "11:00 AM" },
  { label: "SUNDAY SCHOOL", time: "11:00 AM" },
  { label: "ADULT BIBLE CLASS", time: "10:15 AM" },
  { label: "SUNDAY PRAISE", time: "6:00 PM" },
];

const GLAD_CARDS = [
  {
    word: "Believe",
    sub: "START your JOURNEY",
    img: "/images/believe-praying-hands.png",
    href: "/believe",
  },
  {
    word: "Belong",
    sub: "FIND your COMMUNITY",
    img: "/images/belong-easter-crowd.jpg",
    href: "/connect",
  },
  {
    word: "Become",
    sub: "GET INVOLVED",
    img: "/images/become-hand-hearts.jpg",
    href: "/become",
  },
];

export default function HomePage() {
  const upcomingEvents = getUpcomingEvents().slice(0, 4);
  return (
    <main>
      {/* Scrolling announcement ticker */}
      <div className="overflow-hidden border-b-2 border-gold bg-fcc-blue py-2.5 whitespace-nowrap">
        <div className="ticker-track font-work text-[13px] font-semibold tracking-[0.06em] text-white">
          {TICKER_ITEMS}
        </div>
      </div>

      {/* Hero */}
      <section className="relative flex min-h-[80vh] items-end justify-center overflow-hidden bg-black">
        <img
          src="/images/hero-congregation.jpg"
          alt="Faith Community Church congregation gathered in worship"
          className="absolute inset-0 h-full w-full object-cover object-center brightness-125 contrast-105"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 w-full px-6 pb-12 text-center">
          <img
            src="/images/onward-30-year-logo.png"
            alt="ONWARD! 30 Years — Faith Community Church"
            className="mx-auto inline-block w-[90%] max-w-[1000px] drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
          />
        </div>
      </section>

      {/* Service times strip */}
      <section className="bg-fcc-blue px-6 py-3.5">
        <div className="mx-auto flex max-w-[1100px] flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-0">
            {SERVICE_TIMES.map((s) => (
              <div key={s.label} className="flex items-center gap-2 pr-7">
                <div className="h-[7px] w-[7px] shrink-0 rounded-full bg-white" />
                <span className="font-work text-[13px] font-bold tracking-[0.06em] text-white">
                  {s.label} <span className="font-normal">{s.time}</span>
                </span>
              </div>
            ))}
          </div>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=2969+N+Lindbergh+Blvd+St+Ann+MO+63074"
            target="_blank"
            rel="noopener noreferrer"
            className="font-work text-[13px] font-bold tracking-[0.1em] text-white hover:underline"
          >
            GET DIRECTIONS →
          </a>
        </div>
      </section>

      {/* WE ARE GLAD you ARE HERE */}
      <section className="relative overflow-hidden bg-[#b8960c] px-6 pt-16 pb-18">
        <img src="/images/bokeh-gold.jpg" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
        <div className="relative z-10 mx-auto max-w-[1000px]">
          <h2 className="mb-10 text-center font-work text-[clamp(24px,4vw,38px)] leading-[1.1] font-extrabold tracking-[0.04em] text-[#1a1a1a]">
            WE ARE GLAD{" "}
            <em className="font-garamond text-[clamp(39px,6.5vw,62px)] leading-[0.75] font-medium text-fcc-blue not-italic italic">
              you
            </em>{" "}
            ARE HERE!
          </h2>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {GLAD_CARDS.map((card) => (
              <Link key={card.word} href={card.href} className="group block text-left">
                <div className="relative h-55 overflow-hidden bg-[#555]">
                  <img
                    src={card.img}
                    alt={card.word}
                    className="h-full w-full scale-[1.12] object-cover transition-transform duration-350 group-hover:scale-[1.18]"
                  />
                  <div className="absolute inset-0 flex items-end px-4.5 py-3">
                    <span className="font-garamond text-5xl leading-none font-medium text-white italic drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
                      {card.word}
                    </span>
                  </div>
                </div>
                <div className="bg-white px-4.5 py-3.5">
                  <span className="font-work text-xs font-bold tracking-[0.1em] text-[#1a1a1a]">
                    {card.sub.includes("your") ? (
                      <>
                        {card.sub.split("your")[0]}
                        <em className="font-playfair text-sm font-semibold not-italic italic">your</em>
                        {card.sub.split("your")[1]}
                      </>
                    ) : (
                      card.sub
                    )}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="border-t border-line bg-white px-6 py-16">
        <div className="mx-auto max-w-[1100px]">
          <div className="mb-9 flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="font-montserrat text-[clamp(22px,3vw,32px)] font-extrabold tracking-[0.02em] text-navy">
              UPCOMING EVENTS
            </h2>
            <Link href="/events" className="font-work text-[13px] font-semibold tracking-[0.04em] text-fcc-blue">
              VIEW FULL CALENDAR →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {upcomingEvents.map((event) => (
              <div
                key={event.title}
                className="group flex flex-col border-2 border-line bg-white transition-all duration-200 hover:-translate-y-1 hover:border-fcc-blue hover:bg-navy hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]"
              >
                <div className="flex items-center gap-3 bg-navy px-5 py-4 transition-colors duration-200 group-hover:bg-fcc-blue">
                  <div className="min-w-11 text-center">
                    <div className="font-work text-[10px] font-bold tracking-[0.2em] text-white/60">
                      {MONTH_ABBR[event.month]}
                    </div>
                    <div className="font-montserrat text-[28px] leading-none font-extrabold text-white">
                      {event.dayEnd ? `${event.day}–${event.dayEnd}` : event.day}
                    </div>
                  </div>
                  <span className="bg-black/25 px-2 py-0.5 font-work text-[9px] font-bold tracking-[0.15em] text-gold">
                    {event.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-2 px-5 pt-5 pb-6">
                  <h3 className="font-montserrat text-[15px] leading-[1.3] font-bold text-navy transition-colors duration-200 group-hover:text-white">
                    {event.title}
                  </h3>
                  <p className="flex-1 text-[13px] leading-[1.65] text-muted transition-colors duration-200 group-hover:text-white/70">
                    {event.desc}
                  </p>
                  <div className="mt-1 font-work text-[11px] font-semibold tracking-[0.05em] text-fcc-blue transition-colors duration-200 group-hover:text-gold">
                    📅 {event.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 30-year milestone */}
      <section className="bg-cream px-6 py-18 text-center">
        <div className="mx-auto max-w-[820px]">
          <div className="mb-[-12px] font-playfair text-[80px] leading-none text-line">30</div>
          <div className="mb-4 font-work text-xs tracking-[0.2em] text-gold uppercase">Years of Faith · 1996 – 2026</div>
          <h2 className="mb-5 font-montserrat text-[clamp(20px,3.5vw,34px)] leading-[1.2] font-bold text-navy">
            All the Bible for All the People.
          </h2>
          <p className="mb-9 text-base leading-[1.8] text-muted">
            Since 1996, Faith Community Church has welcomed seekers, strengthened believers, and cared for those in
            need.
            <br />
            <br />
            From our first gathering of 27 people to a thriving community that has welcomed hundreds, we have
            experienced God&apos;s great faithfulness, witnessed Christ&apos;s transforming truth, and experienced
            the Holy Spirit&apos;s power to change hearts and lives. As we celebrate 30 years we are not only
            praising God for what He has done—we are pressing <em>ONWARD</em> with faith in the future.
          </p>
          <Link
            href="/about"
            className="inline-block bg-navy px-8 py-3.5 font-work text-sm font-semibold tracking-[0.04em] text-white transition-colors hover:bg-navy-dark"
          >
            Our Story
          </Link>
        </div>
      </section>

      {/* Watch & Listen */}
      <section className="bg-navy px-6 py-16">
        <div className="mx-auto flex max-w-[1100px] flex-wrap items-center justify-between gap-10">
          <div className="flex-1 basis-80">
            <div className="mb-3 font-work text-[11px] font-bold tracking-[0.2em] text-gold">MESSAGES &amp; MEDIA</div>
            <h2 className="mb-4 font-montserrat text-[clamp(24px,3vw,36px)] font-extrabold tracking-[0.03em] text-white">
              WATCH &amp; LISTEN
            </h2>
            <p className="mb-7 max-w-[420px] font-work text-[15px] leading-[1.7] font-light text-white/65">
              Missed a Sunday? Catch up on recent sermons, special services, and anniversary messages on our YouTube
              channel — available anytime, anywhere.
            </p>
            <a
              href="https://www.youtube.com/@FCCSTLLIVE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#FF0000] px-6 py-3.5 font-work text-[13px] font-bold tracking-[0.06em] text-white transition-opacity hover:opacity-85"
            >
              <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
                <path
                  d="M19.582 2.186A2.506 2.506 0 0 0 17.824.418C16.254 0 10 0 10 0S3.746 0 2.176.418A2.506 2.506 0 0 0 .418 2.186C0 3.763 0 7 0 7s0 3.237.418 4.814a2.506 2.506 0 0 0 1.758 1.768C3.746 14 10 14 10 14s6.254 0 7.824-.418a2.506 2.506 0 0 0 1.758-1.768C20 10.237 20 7 20 7s0-3.237-.418-4.814z"
                  fill="#fff"
                />
                <path d="M8 10l5.196-3L8 4v6z" fill="#FF0000" />
              </svg>
              WATCH ON YOUTUBE
            </a>
          </div>

          <div className="max-w-[480px] flex-1 basis-85">
            <a
              href="https://www.youtube.com/@FCCSTLLIVE"
              target="_blank"
              rel="noopener noreferrer"
              className="relative block"
            >
              <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-[#111]">
                <div className="text-center">
                  <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-[#FF0000]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M8 5v14l11-7L8 5z" fill="#fff" />
                    </svg>
                  </div>
                  <div className="font-work text-sm font-semibold text-white">@FCCSTLLIVE</div>
                  <div className="mt-1 font-work text-xs text-white/50">Faith Community Church St. Louis</div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
