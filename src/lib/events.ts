export type ChurchEvent = {
  year: number;
  month: number;
  day: number;
  dayEnd: number | null;
  title: string;
  desc: string;
  time: string;
  tag: string;
};

// Stable, URL/DOM-safe id for an event, used to link a calendar day to its card in the list.
export function eventSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const ALL_EVENTS: ChurchEvent[] = [
  {
    year: 2026,
    month: 8,
    day: 2,
    dayEnd: null,
    title: "ONWARD Sunday — 30th Anniversary Vision",
    desc: "We will launch our 30th Anniversary Campaign. To the glory of God we have reached this ministry milestone. Join us for special messages, volunteer opportunities, and intercessory prayer.",
    time: "Sunday · All Services",
    tag: "ONWARD",
  },
  {
    year: 2026,
    month: 8,
    day: 8,
    dayEnd: null,
    title: "Men's Ministry Breakfast Fellowship",
    desc: "Men young and older are welcome to this delicious time of great food and prayer at the Parsonage.",
    time: "Saturday · 8:00 AM",
    tag: "MEN'S MINISTRY",
  },
  {
    year: 2026,
    month: 8,
    day: 16,
    dayEnd: null,
    title: "Back to School Sunday",
    desc: "School supplies and a special Pastoral prayer for all students and teachers as they return to the classroom.",
    time: "Sunday · 11:00 AM",
    tag: "BACK TO SCHOOL",
  },
  {
    year: 2026,
    month: 8,
    day: 30,
    dayEnd: null,
    title: "Round Up Sunday",
    desc: "Get out your western wear and we are going to round up all the strays!",
    time: "Sunday · 11:00 AM",
    tag: "ROUND UP",
  },
  {
    year: 2026,
    month: 9,
    day: 6,
    dayEnd: null,
    title: "Labor Day Weekend — 30th Anniversary Jubilee Begins",
    desc: "The beginning of our 30th Anniversary Jubilee month. Join us as we celebrate God's faithfulness over three decades of ministry.",
    time: "Sunday · All Services",
    tag: "30 YEARS",
  },
  {
    year: 2026,
    month: 9,
    day: 13,
    dayEnd: null,
    title: "Grandparents Sunday",
    desc: "We have a special gift and presentation for all the Grandparents attending. Honor the pillars of faith in our families and community.",
    time: "Sunday · 11:00 AM",
    tag: "SPECIAL",
  },
  {
    year: 2026,
    month: 9,
    day: 16,
    dayEnd: 20,
    title: "ONWARD — 30th Anniversary Week",
    desc: "Special Guests: Evangelist Nathan Kline · Bishop Marsh Jones · The Singing Jewetts\n\nWed 9/16 · 7:00 PM — REMEMBERING: 30 Years of God's Faithfulness\nThu 9/17 · 7:00 PM — RENEWING: A fresh commitment to witnessing\nFri 9/18 · 7:00 PM — REKINDLING: A Night of Homecoming\nSat 9/19 · 6:00 PM — REACHING: Touching our Community\nSun 9/20 · 11:00 AM — CELEBRATING: God's great faithfulness\nSun 9/20 · 6:00 PM — ONWARD! The way forward into our 31st year",
    time: "Sept 16–20 · Wed–Sun",
    tag: "30 YEARS",
  },
];

// Returns events that haven't finished yet, so the events page
// automatically drops past events without needing a manual edit.
export function getUpcomingEvents(events: ChurchEvent[] = ALL_EVENTS): ChurchEvent[] {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return events.filter((event) => {
    const endDay = event.dayEnd ?? event.day;
    const eventEnd = new Date(event.year, event.month - 1, endDay);
    eventEnd.setHours(23, 59, 59, 999);
    return eventEnd >= today;
  });
}
