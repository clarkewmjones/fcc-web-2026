import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Plan Your Visit | Faith Community Church",
  description: "We'd love to meet you. Here's everything you need to know before your first Sunday at Faith Community Church.",
};

const SERVICES = [
  {
    time: "10:15 AM",
    name: "Adult Bible Study",
    desc: "In-depth Bible study for adults. All are welcome.",
    day: "Sunday",
  },
  {
    time: "11:00 AM",
    name: "Worship & Sunday School",
    desc: "Our main worship service with praise, prayer, and preaching. Sunday School runs concurrently for children.",
    day: "Sunday",
  },
  {
    time: "6:00 PM",
    name: "Praise & Preaching",
    desc: "An evening of worship and the Word.",
    day: "Sunday",
  },
  {
    time: "7:00 PM",
    name: "The Glad Hour",
    desc: "Midweek service for prayer, praise, and encouragement in the Word.",
    day: "Wednesday",
  },
];

const EXPECTATIONS = [
  { icon: "🤝", title: "A Warm Welcome", desc: "Greeters will meet you at the door. You'll never feel like a stranger here." },
  { icon: "🎵", title: "Praise & Worship", desc: "Contemporary and traditional gospel music led by our worship team." },
  { icon: "📖", title: "Biblical Teaching", desc: "Clear, practical preaching from the whole Bible — All the Bible for All the People." },
  { icon: "👨‍👩‍👧", title: "Family Friendly", desc: "Kids are welcome in worship. Sunday School runs concurrently for children." },
];

const FAQS = [
  {
    q: "What Should I Expect?",
    a: "A small town vibe in the city, where the person next to you isn't a stranger but a friend — even if it's your first time. Services run around 75 minutes.",
  },
  { q: "What Do I Wear?", a: "Come as you are — seriously. You'll see everything from jeans to business casual." },
  {
    q: "What About My Kids?",
    a: "FCC loves children. We have classes preschool through high school. From our very first Sunday we have run Sunday School buses and vans to bring children and their families to FCC. Sunday School begins at 11:00 AM.",
  },
  {
    q: "Do I need to bring anything?",
    a: "Just yourself! Bibles are available, and we encourage you to download the YouVersion Bible app if you have a smartphone.",
  },
  {
    q: "Will I be asked to give money?",
    a: "An offering is received during the service, but as a first-time guest you are our guest — no obligation.",
  },
  {
    q: "Where do I park?",
    a: "Free parking is available in the lot directly adjacent to the church at 2969 N Lindbergh Blvd, St. Ann.",
  },
];

export default function VisitPage() {
  return (
    <main className="min-h-[60vh] bg-cream">
      <div className="bg-navy px-6 pt-13 pb-11">
        <div className="mx-auto max-w-[1100px]">
          <div className="mb-2.5 font-work text-[11px] font-bold tracking-[0.2em] text-gold">FIRST TIME HERE?</div>
          <h1 className="font-montserrat text-[clamp(28px,4vw,48px)] font-extrabold tracking-[0.04em] text-white">
            PLAN YOUR VISIT
          </h1>
          <p className="mt-3 max-w-[560px] font-work text-base font-light text-white/65">
            We&apos;d love to meet you. Here&apos;s everything you need to know before your first Sunday at Faith
            Community Church.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1100px] px-6 py-13">
        <div className="mb-15">
          <h2 className="mb-6 font-montserrat text-lg font-extrabold tracking-[0.08em] text-navy">
            WEEKEND SERVICES
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s) => (
              <div
                key={s.name}
                className={`border border-line bg-white px-5 py-6 ${
                  s.day === "Wednesday" ? "border-t-[3px] border-t-gold" : "border-t-[3px] border-t-fcc-blue"
                }`}
              >
                <div className="mb-1 font-work text-[10px] font-bold tracking-[0.2em] text-muted">
                  {s.day.toUpperCase()}
                </div>
                <div
                  className={`mb-1.5 font-montserrat text-[22px] font-extrabold ${
                    s.day === "Wednesday" ? "text-gold" : "text-fcc-blue"
                  }`}
                >
                  {s.time}
                </div>
                <div className="mb-2 font-work text-[13px] font-bold tracking-[0.04em] text-navy">{s.name}</div>
                <div className="font-work text-[13px] leading-[1.6] text-muted">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-15 grid grid-cols-1 gap-10 sm:grid-cols-2">
          <div className="bg-navy px-8 py-9">
            <div className="mb-4 font-work text-[11px] font-bold tracking-[0.2em] text-gold">LOCATION</div>
            <div className="mb-4 font-playfair text-[22px] font-bold text-white">Faith Community Church</div>
            <div className="mb-7 font-work text-[15px] leading-[1.8] text-white/75">
              2969 N Lindbergh Blvd
              <br />
              St. Ann, MO 63074
            </div>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=2969+N+Lindbergh+Blvd+St+Ann+MO+63074"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold px-6 py-3 font-work text-[13px] font-bold tracking-[0.06em] text-white"
            >
              GET DIRECTIONS <span className="text-base">▶</span>
            </a>
          </div>

          <div className="bg-warm-gray px-8 py-9">
            <div className="mb-4 font-work text-[11px] font-bold tracking-[0.2em] text-gold">CONTACT US</div>
            <div className="font-work text-[15px] leading-[2] text-ink">
              <strong className="text-navy">Pastor Rick Jones</strong>
              <br />
              Cell/Text: (314) 607-1424
              <br />
              <a href="mailto:info@fccstlouis.org" className="text-fcc-blue">
                info@fccstlouis.org
              </a>
              <br />
              <a href="https://www.fccstlouis.org" className="text-fcc-blue">
                www.fccstlouis.org
              </a>
            </div>
            <Link
              href="/contact"
              className="mt-6 inline-block bg-navy px-6 py-3 font-work text-[13px] font-bold tracking-[0.06em] text-white"
            >
              SEND A MESSAGE →
            </Link>
          </div>
        </div>

        <div className="mb-15">
          <h2 className="mb-6 font-montserrat text-lg font-extrabold tracking-[0.08em] text-navy">
            WHAT TO EXPECT
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {EXPECTATIONS.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="shrink-0 text-[28px] leading-none">{item.icon}</div>
                <div>
                  <div className="mb-1.5 font-work text-sm font-bold text-navy">{item.title}</div>
                  <div className="font-work text-[13px] leading-[1.65] text-muted">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-6 font-montserrat text-lg font-extrabold tracking-[0.08em] text-navy">
            COMMON QUESTIONS
          </h2>
          <div className="flex flex-col border border-line">
            {FAQS.map((faq, i) => (
              <div
                key={faq.q}
                className={`bg-white px-6 py-5 ${i < FAQS.length - 1 ? "border-b border-line" : ""}`}
              >
                <div className="mb-1.5 font-work text-sm font-bold text-navy">{faq.q}</div>
                <div className="font-work text-[13px] leading-[1.7] text-muted">{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
