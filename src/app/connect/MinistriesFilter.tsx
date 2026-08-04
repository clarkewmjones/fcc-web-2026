"use client";

import { useState } from "react";

type Category = "all" | "kids" | "youth" | "adults" | "serve";

const MINISTRIES: {
  category: Exclude<Category, "all">;
  name: string;
  age: string;
  desc: string;
  day: string;
  logo?: string;
  logoHeight?: number;
  list?: string[];
}[] = [
  {
    category: "kids",
    name: "FaithQuest Kids",
    age: "Birth – 5th Grade",
    desc: "FaithQuest is a safe, fun, and faith-building environment where children discover exciting Bible stories, sing joyful songs, make new friends, and experience the love of God. Whether they come with their families or ride one of our church buses, children love the adventure of FaithQuest Kids at FCC!",
    day: "11am Every Sunday Morning",
    logo: "/images/logo-faithquest.png",
  },
  {
    category: "youth",
    name: "G1 — God First!",
    age: "6th – 12th Grade",
    desc: "G1 is short for God First! When teens lock in on the miracle of God's grace and discover the great purpose and plan He has for them, they live lives with meaning and fulfillment. Our teens are not the church of tomorrow — they are the church of today.",
    day: "Friday Evenings and Sunday Mornings",
    logo: "/images/logo-g1.png",
  },
  {
    category: "adults",
    name: "Volunteer Opportunities",
    age: "Adults",
    desc: "FCC is a volunteer-led ministry. There are opportunities for:",
    list: [
      "Ushers",
      "Sound, Video & Digital Ministry",
      "Parking Lot Greeters",
      "Bus Ministry",
      "Sunday School & VBS",
      "Music",
      "Building Maintenance",
      "Yard & Grounds Keeping",
    ],
    day: "Various days and times",
  },
  {
    category: "adults",
    name: "Men of Faith",
    age: "Men",
    desc: 'Men of Faith have as our motto "No Man Left Behind." Just as the US armed forces are dedicated to help one another, Men of Faith are committed to encourage, strengthen, and pray for one another. We have monthly Fellowship Breakfasts and Volunteer projects throughout the year. Men young and old are encouraged to enlist.',
    day: "Monthly Fellowship Breakfasts & Volunteer Projects",
    logo: "/images/logo-men-of-faith.png",
    logoHeight: 129,
  },
  {
    category: "adults",
    name: "Women's Ministry",
    age: "Women",
    desc: "A community where women are equipped and encouraged to live fully into their calling and identity.",
    day: "As Announced",
  },
  {
    category: "serve",
    name: "Outreach",
    age: "Evangelism & Outreach",
    desc: 'Someone has rightly said, "A great commitment to the GREAT COMMANDMENT and the GREAT COMMISSION will build a great church." At FCC witnessing is one of our greatest joys.',
    day: "Ongoing",
    logo: "/images/logo-outreach.png",
  },
];

const TABS: { key: Category; label: string }[] = [
  { key: "all", label: "All Ministries" },
  { key: "kids", label: "Kids" },
  { key: "youth", label: "Youth" },
  { key: "adults", label: "Adults" },
  { key: "serve", label: "Serve" },
];

export default function MinistriesFilter() {
  const [active, setActive] = useState<Category>("all");
  const shown = active === "all" ? MINISTRIES : MINISTRIES.filter((m) => m.category === active);

  return (
    <main className="mx-auto max-w-[1100px] px-6 py-16">
      <div className="mb-12 max-w-[600px]">
        <div className="mb-3 font-work text-xs tracking-[0.2em] text-gold uppercase">Get Connected</div>
        <h1 className="font-garamond text-[clamp(36px,5vw,60px)] leading-[1.1] text-navy">Ministries</h1>
        <p className="mt-4 text-base leading-[1.75] text-muted">
          There&apos;s a place for everyone here — whatever your age, season, or story.
        </p>
      </div>

      <div className="mb-10 flex flex-wrap gap-1">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActive(tab.key)}
            className={`border px-5 py-2.5 font-work text-[13px] font-medium tracking-[0.03em] capitalize transition-colors ${
              active === tab.key ? "border-navy bg-navy text-white" : "border-line bg-white text-muted"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((m) => (
          <div key={m.name} className="border border-t-[3px] border-line border-t-gold bg-white px-7 pt-7 pb-6">
            <div className="mb-2 font-work text-[11px] font-semibold tracking-[0.15em] text-gold uppercase">
              {m.age}
            </div>
            {m.logo ? (
              <img
                src={m.logo}
                alt={m.name}
                style={{ height: m.logoHeight ?? 43 }}
                className="mb-3 w-auto object-contain"
              />
            ) : (
              <h3 className="mb-2.5 font-playfair text-xl font-bold text-navy">{m.name}</h3>
            )}
            <p className={`text-sm leading-[1.75] text-muted ${m.list ? "mb-2" : "mb-4"}`}>{m.desc}</p>
            {m.list && (
              <ul className="mb-4 list-none p-0">
                {m.list.map((item) => (
                  <li key={item} className="relative pl-4 text-sm leading-[1.8] text-muted">
                    <span className="absolute left-0 text-gold">–</span>
                    {item}
                  </li>
                ))}
              </ul>
            )}
            <div className="font-work text-xs font-semibold tracking-[0.05em] text-navy">📅 {m.day}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
