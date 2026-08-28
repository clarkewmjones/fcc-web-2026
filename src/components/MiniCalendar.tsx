"use client";

import { ALL_EVENTS, eventSlug, getUpcomingEvents, type ChurchEvent } from "@/lib/events";

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function goToEvent(event: ChurchEvent) {
  const el = document.getElementById(`event-${eventSlug(event.title)}`);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "center" });
  el.classList.add("event-card-flash");
  window.setTimeout(() => el.classList.remove("event-card-flash"), 1500);
}

export default function MiniCalendar({ year, month }: { year: number; month: number }) {
  const firstDay = new Date(year, month - 1, 1).getDay();
  const daysInMonth = new Date(year, month, 0).getDate();
  const cells: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);

  const monthEvents = ALL_EVENTS.filter((e) => e.year === year && e.month === month);
  const upcomingMonthEvents = getUpcomingEvents(monthEvents);

  const eventByDay = new Map<number, ChurchEvent>();
  upcomingMonthEvents.forEach((e) => {
    const end = e.dayEnd ?? e.day;
    for (let d = e.day; d <= end; d++) eventByDay.set(d, e);
  });

  return (
    <div className="border border-line bg-white p-6">
      <div className="mb-4 text-center font-montserrat text-base font-extrabold tracking-[0.08em] text-navy">
        {MONTH_NAMES[month - 1].toUpperCase()} {year}
      </div>
      <div className="mb-2 grid grid-cols-7 gap-0.5">
        {["SU", "MO", "TU", "WE", "TH", "FR", "SA"].map((d) => (
          <div key={d} className="pb-1.5 text-center font-work text-[10px] font-bold tracking-[0.1em] text-muted">
            {d}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-0.5">
        {cells.map((day, i) => {
          const event = day !== null ? eventByDay.get(day) : undefined;

          if (event) {
            return (
              <button
                key={i}
                type="button"
                onClick={() => goToEvent(event)}
                className="flex aspect-square items-center justify-center rounded-sm bg-navy font-work text-[13px] font-bold text-white transition-colors duration-150 hover:bg-fcc-blue active:bg-fcc-blue"
              >
                {day}
              </button>
            );
          }

          return (
            <div
              key={i}
              className={`flex aspect-square items-center justify-center rounded-sm font-work text-[13px] font-normal ${
                day ? "text-ink" : "text-transparent"
              }`}
            >
              {day ?? ""}
            </div>
          );
        })}
      </div>
      <div className="mt-3.5 flex flex-wrap gap-4">
        <div className="flex items-center gap-1.5">
          <div className="h-3 w-3 rounded-sm bg-navy" />
          <span className="font-work text-[11px] text-muted">Event · click to view</span>
        </div>
      </div>
    </div>
  );
}
