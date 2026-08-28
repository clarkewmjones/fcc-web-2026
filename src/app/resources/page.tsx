import type { Metadata } from "next";
import { getRecentPosts } from "@/lib/reachingforth";

export const metadata: Metadata = {
  title: "Resources | Faith Community Church",
  description: "Weekly bulletins, Pastor Rick's articles, and ministry reading for the whole family.",
};

const BULLETINS = [
  { date: "August 23, 2026", title: "Sunday Morning Bulletin", pdf: "/bulletins/2026-08-23-fccstl.pdf" },
  { date: "August 16, 2026", title: "Sunday Morning Bulletin", pdf: "/bulletins/2026-08-16-fccstl.pdf" },
  { date: "August 9, 2026", title: "Sunday Morning Bulletin", pdf: "/bulletins/2026-08-09-fccstl.pdf" },
  { date: "July 26, 2026", title: "Sunday Morning Bulletin", pdf: "/bulletins/2026-07-26-fccstl.pdf" },
  { date: "July 19, 2026", title: "Sunday Morning Bulletin", pdf: "/bulletins/2026-07-19-fccstl.pdf" },
  { date: "July 12, 2026", title: "Sunday Morning Bulletin", pdf: "/bulletins/2026-07-12-fccstl.pdf" },
  { date: "July 5, 2026", title: "Sunday Morning Bulletin", pdf: "/bulletins/2026-07-05-fccstl.pdf" },
];

export default async function ResourcesPage() {
  const posts = await getRecentPosts();
  return (
    <main className="min-h-[60vh] bg-cream">
      <div className="bg-navy px-6 pt-13 pb-11">
        <div className="mx-auto max-w-[1100px]">
          <div className="mb-2.5 font-work text-[11px] font-bold tracking-[0.2em] text-gold">
            FAITH COMMUNITY CHURCH
          </div>
          <h1 className="font-montserrat text-[clamp(28px,4vw,48px)] font-extrabold tracking-[0.04em] text-white">
            RESOURCES
          </h1>
          <p className="mt-3 max-w-[540px] font-work text-base font-light text-white/65">
            Weekly bulletins, Pastor Rick&apos;s articles, and ministry reading for the whole family.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1100px] px-6 py-13">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
          <div>
            <h2 className="mb-2 font-montserrat text-lg font-extrabold tracking-[0.08em] text-navy">
              WEEKLY BULLETINS
            </h2>
            <p className="mb-7 font-work text-sm leading-[1.6] text-muted">
              Download the current Sunday bulletin for the order of service, scripture readings, and announcements.
            </p>
            <div className="flex flex-col gap-3">
              {BULLETINS.map((b) => (
                <div key={b.pdf} className="flex items-center gap-4 border border-line bg-white px-5 py-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-navy">
                    <svg width="18" height="22" viewBox="0 0 18 22" fill="none">
                      <path
                        d="M11 1H3C1.9 1 1 1.9 1 3v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V7l-6-6z"
                        stroke="#fff"
                        strokeWidth="1.5"
                        fill="none"
                      />
                      <path d="M11 1v6h6" stroke="#fff" strokeWidth="1.5" fill="none" />
                      <path d="M5 13h8M5 17h5" stroke="#c9972a" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="font-work text-[13px] font-semibold text-navy">{b.title}</div>
                    <div className="mt-0.5 font-work text-xs text-muted">{b.date}</div>
                  </div>
                  <a
                    href={b.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-work text-[11px] font-bold tracking-[0.08em] whitespace-nowrap text-fcc-blue"
                  >
                    PDF ↓
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-2 flex flex-wrap items-baseline justify-between gap-3">
              <h2 className="font-montserrat text-lg font-extrabold tracking-[0.08em] text-navy">PASTOR&apos;S BLOG</h2>
              <a
                href="https://www.reachingforth.blogspot.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-work text-xs font-semibold tracking-[0.04em] whitespace-nowrap text-fcc-blue"
              >
                VIEW ALL →
              </a>
            </div>
            <p className="mb-7 font-work text-sm leading-[1.6] text-muted">
              Reflections, teaching, and encouragement from Pastor Rick Jones at <em>Reaching Forth</em>.
            </p>
            <div className="flex flex-col border border-line">
              {posts.map((p, i) => (
                <a
                  key={p.url}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block bg-white px-6 py-5 transition-colors hover:bg-warm-gray ${
                    i < posts.length - 1 ? "border-b border-line" : ""
                  }`}
                >
                  <div className="mb-1.5 font-work text-[10px] font-bold tracking-[0.15em] text-gold">{p.date}</div>
                  <div className="mb-1.5 font-playfair text-base leading-[1.3] font-semibold text-navy">{p.title}</div>
                  <div className="font-work text-[13px] leading-[1.6] text-muted">{p.excerpt}</div>
                </a>
              ))}
            </div>

            <div className="mt-8 border-l-4 border-gold bg-warm-gray px-6 py-5">
              <div className="mb-1.5 font-work text-[11px] font-bold tracking-[0.15em] text-navy">
                CRUSADERS USA MINISTRY
              </div>
              <p className="mb-3 font-work text-[13px] leading-[1.6] text-muted">
                Additional ministry resources and outreach materials from our Crusaders USA network.
              </p>
              <a
                href="https://www.crusadersusa.org"
                target="_blank"
                rel="noopener noreferrer"
                className="font-work text-xs font-semibold tracking-[0.06em] text-fcc-blue"
              >
                VISIT CRUSADERSUSA.ORG →
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
