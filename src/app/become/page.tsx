import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Become | Faith Community Church",
  description: "Growing in faith is a daily journey — in the Word, in prayer, and in how we love and serve those around us.",
};

const SECTIONS = [
  {
    label: "GROW IN GOD'S WORD",
    title: "Daily Bible Reading",
    color: "bg-navy",
    accentText: "text-gold",
    body: "Content coming soon — check back for daily scripture passages, reading plans, and devotionals to guide your walk with God.",
    note: "Daily Bible reading plans, scripture highlights, and Pastor Rick's weekly devotional thoughts will be posted here.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c9972a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
  {
    label: "TALK WITH GOD",
    title: "Daily Prayer",
    color: "bg-fcc-blue",
    accentText: "text-fcc-blue",
    body: "Content coming soon — prayer guides, intercession requests, and prompts to help you build a consistent and meaningful prayer life.",
    note: "Weekly prayer focus, a community prayer wall, and guided prayer resources will be available here.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f0c95e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
  },
  {
    label: "LIVE IT OUT",
    title: "Faith in Action",
    color: "bg-navy-dark",
    accentText: "text-gold",
    body: "Content coming soon — practical ways to serve your neighbors, engage your community, and put your faith into everyday action.",
    note: "Volunteer spotlights, outreach opportunities, and ways to serve in the church and community will be highlighted here.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c9972a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
];

export default function BecomePage() {
  return (
    <main className="min-h-[60vh] bg-cream">
      <div className="bg-navy px-6 pt-13 pb-11">
        <div className="mx-auto max-w-[800px]">
          <div className="mb-4 font-work text-[11px] font-semibold tracking-[0.2em] text-gold">DISCIPLESHIP</div>
          <h1 className="mb-4 font-garamond text-[clamp(36px,5vw,64px)] leading-[1.1] font-medium text-white italic">
            Become
          </h1>
          <p className="max-w-[560px] font-work text-[17px] leading-[1.7] font-light text-white/72">
            Growing in faith is a daily journey — in the Word, in prayer, and in how we love and serve those around
            us.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[800px] px-6 py-14">
        {SECTIONS.map((s, i) => (
          <div key={s.title}>
            <div className="mb-16">
              <div className="mb-6 flex items-center gap-4">
                <div className={`flex h-13 w-13 shrink-0 items-center justify-center ${s.color}`}>{s.icon}</div>
                <div>
                  <div className={`mb-1 font-work text-[10px] font-bold tracking-[0.2em] ${s.accentText}`}>
                    {s.label}
                  </div>
                  <h2 className="font-playfair text-[28px] font-bold text-navy">{s.title}</h2>
                </div>
              </div>
              <div className={`mb-7 border-l-[3px] pl-6 ${s.color.replace("bg-", "border-")}`}>
                <p className="font-work text-base leading-[1.9] text-muted">{s.body}</p>
              </div>
              <div className="border border-line bg-warm-gray px-7 py-6">
                <div className={`mb-2 font-work text-[11px] font-bold tracking-[0.15em] ${s.accentText}`}>
                  COMING SOON
                </div>
                <p className="font-work text-sm font-light text-muted">{s.note}</p>
              </div>
            </div>
            {i < SECTIONS.length - 1 && <div className="mb-16 border-t border-line" />}
          </div>
        ))}
      </div>
    </main>
  );
}
