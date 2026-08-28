import type { Metadata } from "next";
import Link from "next/link";
import MiniCalendar from "@/components/MiniCalendar";
import { getUpcomingEvents } from "@/lib/events";

export const metadata: Metadata = {
  title: "Events & Calendar | Faith Community Church",
  description: "Stay connected to what's happening at FCC. All are welcome.",
};

// Recheck periodically so events drop off the list automatically once they've passed.
export const revalidate = 3600;

const MONTH_NAMES = ["", "JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

export default function EventsPage() {
  const upcomingEvents = getUpcomingEvents();
  return (
    <main className="min-h-[60vh] bg-cream">
      <div className="bg-navy px-6 pt-13 pb-11">
        <div className="mx-auto max-w-[1100px]">
          <div className="mb-2.5 font-work text-[11px] font-bold tracking-[0.2em] text-gold">
            FAITH COMMUNITY CHURCH
          </div>
          <h1 className="font-montserrat text-[clamp(28px,4vw,48px)] font-extrabold tracking-[0.04em] text-white">
            EVENTS &amp; CALENDAR
          </h1>
          <p className="mt-3 max-w-[540px] font-work text-base font-light text-white/65">
            Stay connected to what&apos;s happening at FCC. All are welcome.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1100px] px-6 py-13">
        <h2 className="mb-6 font-montserrat text-lg font-extrabold tracking-[0.08em] text-navy">
          AUGUST — SEPTEMBER 2026
        </h2>
        <div className="mb-15 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <MiniCalendar year={2026} month={8} />
          <MiniCalendar year={2026} month={9} />
        </div>

        <h2 className="mb-6 font-montserrat text-lg font-extrabold tracking-[0.08em] text-navy">
          ALL UPCOMING EVENTS
        </h2>
        <div className="flex flex-col gap-4">
          {upcomingEvents.map((event) => (
            <div
              key={event.title}
              className={`flex overflow-hidden bg-white ${
                event.highlight ? "border-2 border-fcc-blue" : "border border-line"
              }`}
            >
              <div
                className={`flex min-w-20 flex-col items-center justify-center px-6 py-5 ${
                  event.highlight ? "bg-fcc-blue" : "bg-navy"
                }`}
              >
                <div className="font-work text-[10px] font-bold tracking-[0.2em] text-white/60">
                  {MONTH_NAMES[event.month]}
                </div>
                <div className="font-montserrat text-[30px] leading-none font-extrabold text-white">{event.day}</div>
                {event.dayEnd && (
                  <div className="mt-0.5 font-work text-[10px] text-white/60">–{event.dayEnd}</div>
                )}
              </div>
              <div className="flex-1 px-6 py-5">
                <div className="mb-2 flex flex-wrap items-center gap-2.5">
                  <span className="bg-navy px-2 py-0.5 font-work text-[9px] font-bold tracking-[0.15em] text-gold">
                    {event.tag}
                  </span>
                  <span className="font-work text-xs text-muted">{event.time}</span>
                </div>
                <div className="mb-1.5 font-montserrat text-base font-bold tracking-[0.02em] text-navy">
                  {event.title}
                </div>
                <div className="font-work text-sm leading-[1.6] font-light whitespace-pre-line text-muted">
                  {event.desc}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="border border-line px-7 py-3 font-work text-[13px] font-semibold tracking-[0.08em] text-navy"
          >
            ← BACK TO HOME
          </Link>
        </div>
      </div>
    </main>
  );
}
