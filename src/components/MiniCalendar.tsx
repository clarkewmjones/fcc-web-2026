import { ALL_EVENTS } from "@/lib/events";

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export default function MiniCalendar({ year, month }: { year: number; month: number }) {
  const firstDay = new Date(year, month - 1, 1).getDay();
  const daysInMonth = new Date(year, month, 0).getDate();
  const cells: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);

  const eventDays = new Set<number>();
  const highlightDays = new Set<number>();
  ALL_EVENTS.filter((e) => e.month === month).forEach((e) => {
    const end = e.dayEnd ?? e.day;
    for (let d = e.day; d <= end; d++) {
      eventDays.add(d);
      if (e.highlight) highlightDays.add(d);
    }
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
          const hasEvent = day !== null && eventDays.has(day);
          const isHighlight = day !== null && highlightDays.has(day);
          return (
            <div
              key={i}
              className={`flex aspect-square items-center justify-center rounded-sm font-work text-[13px] ${
                hasEvent ? "font-bold" : "font-normal"
              } ${
                isHighlight
                  ? "bg-fcc-blue text-white"
                  : hasEvent
                    ? "bg-[#e8f0fc] text-fcc-blue"
                    : day
                      ? "text-ink"
                      : "text-transparent"
              }`}
            >
              {day ?? ""}
            </div>
          );
        })}
      </div>
      <div className="mt-3.5 flex flex-wrap gap-4">
        <div className="flex items-center gap-1.5">
          <div className="h-3 w-3 rounded-sm bg-fcc-blue" />
          <span className="font-work text-[11px] text-muted">Featured</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="h-3 w-3 rounded-sm border border-fcc-blue bg-[#e8f0fc]" />
          <span className="font-work text-[11px] text-muted">Event</span>
        </div>
      </div>
    </div>
  );
}
