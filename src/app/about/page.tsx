import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story | Faith Community Church",
  description: "Thirty years of bringing the love of Christ to the great city of St. Louis.",
};

const TIMELINE = [
  {
    year: "1996",
    title: "Launch Sunday",
    desc: "27 attended our first service at the Knights of Columbus Hall, St. Ann, MO. The Sunday School bus brought several children on the very first Sunday.",
  },
  {
    year: "2000",
    title: "Land Purchased",
    desc: "Two choice acres at 2969 N Lindbergh Blvd, St. Ann, MO were purchased and clearing began.",
  },
  {
    year: "2001",
    title: "Ground Breaking",
    desc: "Our new 12,000 sq. ft. building was constructed with volunteer labor.",
  },
  {
    year: "2003",
    title: "Our First Sunday in Our New Building",
    desc: "The congregation moved into the new sanctuary on Lindbergh Blvd — a home built by the hands of the people.",
  },
  {
    year: "2016",
    title: "20th Anniversary",
    desc: "Nearly 300 attended the anniversary celebrations — a testament to two decades of God's faithfulness.",
  },
  {
    year: "2020",
    title: "Livestreaming Begins",
    desc: "FCC launched online services, extending our reach beyond St. Louis to viewers everywhere.",
  },
  {
    year: "2026",
    title: "ONWARD — 30 Years",
    desc: "Celebrating three decades of God's faithfulness and pressing forward into our 31st year.",
  },
];

const LEGACY = [
  { gen: "Great-Grandfather", detail: "Exhorter · Church of God Holiness" },
  { gen: "Grandfather", detail: "Evangelist · Church of the Nazarene" },
  { gen: "Father", detail: "Founder · Crusaders Churches of America" },
  { gen: "Pastor Rick", detail: "Founding Pastor · Faith Community Church" },
];

const BELIEFS = [
  {
    title: "Everyone needs to be saved.",
    desc: "All have sinned and fall short of the glory of God. We believe every person needs the saving grace of Jesus Christ.",
  },
  {
    title: "Everyone can be saved.",
    desc: "Whoever calls on the name of the Lord shall be saved. The invitation is open to all.",
  },
  {
    title: "Everyone can know they are saved.",
    desc: "The Spirit himself bears witness with our spirit that we are children of God.",
  },
  {
    title: "Everyone can be saved completely.",
    desc: "He is able to save to the uttermost those who draw near to God through him.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-[60vh] bg-cream">
      <div className="bg-navy px-6 pt-13 pb-11">
        <div className="mx-auto max-w-[1100px]">
          <div className="mb-2.5 font-work text-[11px] font-bold tracking-[0.2em] text-gold">
            FAITH COMMUNITY CHURCH · ST. LOUIS
          </div>
          <h1 className="font-montserrat text-[clamp(28px,4vw,48px)] font-extrabold tracking-[0.04em] text-white">
            OUR STORY
          </h1>
          <p className="mt-3 max-w-[560px] font-work text-base font-light text-white/65">
            Thirty years of bringing the love of Christ to the great city of St. Louis.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1100px] px-6 py-14">
        <div className="mb-16 grid grid-cols-1 items-start gap-14 lg:grid-cols-2">
          <div>
            <div className="mb-4 font-work text-[11px] font-bold tracking-[0.2em] text-gold">
              SEPTEMBER 15, 1996
            </div>
            <h2 className="mb-5 font-garamond text-3xl leading-[1.2] text-navy">
              From 27 People to a Thriving Community
            </h2>
            <p className="mb-4 text-[15px] leading-[1.9] text-muted">
              Faith Community Church began on Sunday, September 15, 1996, with a passion to share the love of Christ
              with people in America&apos;s great cities.
            </p>
            <p className="mb-4 text-[15px] leading-[1.9] text-muted">
              That first Sunday, chairs were arranged and a platform was set up in the Knights of Columbus Hall in
              St. Ann. Then a church bus went into the community to bring children to Sunday school. Twenty-seven
              people from the St. Louis area attended that first service — and a new church family was born.
            </p>
            <p className="mb-4 text-[15px] leading-[1.9] text-muted">
              After meeting in three different locations, Faith Community Church moved to its present two-acre
              campus on Lindbergh Boulevard, just two miles south of Interstate 70. Today, our 250-seat sanctuary is
              a place where people of all ages come together to worship, grow in faith, build lasting friendships,
              and serve the community.
            </p>
            <p className="text-[15px] leading-[1.9] text-muted">
              From 27 people gathered in a rented hall to the thriving church family we are today, our story is a
              testimony to God&apos;s faithfulness. Yet we believe our greatest days are still ahead — and there is
              a place for you in the story.
            </p>
            <div className="mt-7 overflow-hidden">
              <img
                src="/images/bus-kids.jpg"
                alt="Children arriving on the FCC Sunday School bus"
                className="max-h-80 w-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col">
            {TIMELINE.map((t, i, arr) => (
              <div key={t.year} className="flex gap-5" style={{ paddingBottom: i < arr.length - 1 ? 28 : 0 }}>
                <div className="flex shrink-0 flex-col items-center">
                  <div
                    className={`mt-1 h-3.5 w-3.5 shrink-0 rounded-full ${
                      i === arr.length - 1 ? "bg-fcc-blue" : "bg-gold"
                    }`}
                  />
                  {i < arr.length - 1 && <div className="mt-1.5 w-0.5 flex-1 bg-line" />}
                </div>
                <div style={{ paddingBottom: i < arr.length - 1 ? 8 : 0 }}>
                  <div className="mb-1 font-montserrat text-xs font-extrabold tracking-[0.1em] text-gold">
                    {t.year}
                  </div>
                  <div className="mb-1 font-work text-[15px] font-bold text-navy">{t.title}</div>
                  <div className="font-work text-[13px] leading-[1.65] text-muted">{t.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-14 border-t border-line pt-14">
          <h2 className="mb-8 font-montserrat text-lg font-extrabold tracking-[0.08em] text-navy">
            PASTOR &amp; FAMILY
          </h2>
          <div className="border border-line bg-white px-8 py-9">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
              <div>
                <div className="mb-1 font-playfair text-2xl font-bold text-navy">Pastor Rick Jones</div>
                <div className="mb-5 font-work text-[13px] font-semibold tracking-[0.06em] text-gold">
                  FOUNDING PASTOR
                </div>
                <p className="mb-4 text-sm leading-[1.85] text-muted">
                  Pastor Rick Jones is a fourth-generation minister of the Gospel. His great-grandfather was an
                  exhorter in the Church of God (Holiness); his grandfather served as an evangelist in the Church of
                  the Nazarene; and his father founded Crusaders Churches of America.
                </p>
                <p className="text-sm leading-[1.85] text-muted">
                  Pastor Rick and his wife, Vickie, have devoted their lives to serving others. Vickie recently
                  retired after a career teaching elementary school in the public schools, and their daughter,
                  Tressa, teaches high school history.
                </p>
              </div>
              <div className="border-l-[3px] border-gold pl-7">
                <div className="mb-4 font-work text-[11px] font-bold tracking-[0.15em] text-muted">
                  A MINISTRY LEGACY
                </div>
                {LEGACY.map((g) => (
                  <div key={g.gen} className="mb-4">
                    <div className="font-work text-[13px] font-bold text-navy">{g.gen}</div>
                    <div className="font-work text-[13px] text-muted">{g.detail}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-line pt-14">
          <h2 className="mb-8 font-montserrat text-lg font-extrabold tracking-[0.08em] text-navy">
            WHAT WE BELIEVE
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BELIEFS.map((b) => (
              <div key={b.title} className="border border-t-[3px] border-line border-t-gold bg-white p-5">
                <div className="mb-2.5 font-playfair text-base leading-[1.3] font-bold text-navy">{b.title}</div>
                <div className="font-work text-[13px] leading-[1.7] text-muted">{b.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
