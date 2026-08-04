import Link from "next/link";
import { NAV_LINKS } from "@/lib/nav";

export default function Footer() {
  return (
    <footer className="bg-navy-dark px-6 pt-14 pb-8 text-white/60">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1.6fr_1.6fr]">
          <div>
            <img
              src="/images/fcc-logo-white.png"
              alt="Faith Community Church"
              className="mb-3 h-13 w-auto object-contain"
            />
            <div className="mb-4 font-playfair text-sm text-gold italic">
              &quot;Bringing Joy to Life!&quot; for 30 years!
            </div>
            <div className="text-[13px] leading-[1.8]">
              Making loving disciples of Jesus.
              <br />
              Everyone is loved here.
              <br />
              <br />
              Everyone needs to be saved.
              <br />
              Everyone can be saved.
              <br />
              Everyone can know they are saved.
              <br />
              Everyone can be saved completely.
            </div>
          </div>

          <div>
            <div className="mb-4 font-work text-xs font-semibold tracking-[0.15em] text-white/40 uppercase">
              Services
            </div>
            <div className="font-work text-sm leading-[2] text-white/75">
              Sun · 10:15 AM — Adult Bible Study
              <br />
              Sun · 11:00 AM — Worship &amp; Sunday School
              <br />
              Sun · 6:00 PM — Praise &amp; Preaching
              <br />
              Wed · 7:00 PM — The Glad Hour
            </div>
          </div>

          <div className="lg:pl-10">
            <div className="mb-4 font-work text-xs font-semibold tracking-[0.15em] text-white/40 uppercase">
              Find Us
            </div>
            <div className="font-work text-sm leading-[1.9] text-white/75">
              2969 N Lindbergh Blvd.
              <br />
              St. Ann, MO 63074
              <br />
              <br />
              Pastor Rick Jones
              <br />
              Cell/Text (314) 607-1424
              <br />
              info@fccstlouis.org
              <br />
              <br />
              www.crusadersusa.org
              <br />
              www.reachingforth.blogspot.com
              <br />
              <br />
              fccstlouismo@gmail.com
            </div>
            <div className="mt-4 flex gap-2.5">
              <a
                href="https://www.instagram.com/fcc.stl/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#E1306C] px-3 py-1.5 font-work text-[11px] font-bold tracking-[0.06em] text-white"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="#fff" strokeWidth="2" />
                  <circle cx="12" cy="12" r="5" stroke="#fff" strokeWidth="2" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="#fff" />
                </svg>
                INSTAGRAM
              </a>
              <a
                href="https://www.facebook.com/FCCStLouis"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#1877F2] px-3 py-1.5 font-work text-[11px] font-bold tracking-[0.06em] text-white"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="#fff">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                FACEBOOK
              </a>
            </div>
          </div>

          <div>
            <div className="mb-4 font-work text-xs font-semibold tracking-[0.15em] text-white/40 uppercase">
              Explore
            </div>
            {NAV_LINKS.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="block py-1 font-work text-sm text-white/65 transition-colors hover:text-white"
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
          <div className="text-xs">© 2026 Faith Community Church · St. Louis, MO</div>
          <div className="text-xs text-gold">Onward · 1996–2026</div>
        </div>
      </div>
    </footer>
  );
}
