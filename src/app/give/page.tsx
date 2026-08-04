import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Give | Faith Community Church",
  description: "Your generosity makes this community possible. Every gift funds ministries, serves St. Louis, and spreads joy.",
};

const WAYS_TO_GIVE = [
  {
    method: "Give Online",
    icon: "💻",
    desc: "Quick, secure, one-time or recurring giving through our online portal.",
    cta: "Give Now",
    url: "https://secure.myvanco.com/L-ZJ3C",
  },
  {
    method: "Give by Text",
    icon: "📱",
    desc: "Text GIVE to (314) 555-0190. Setup takes 2 minutes — then it's one text every time.",
    cta: "Learn More",
  },
  {
    method: "Give in Person",
    icon: "🏛️",
    desc: "Drop a check or cash in the offering during any weekend service.",
    cta: "Find a Service",
  },
  {
    method: "Legacy Giving",
    icon: "📜",
    desc: "Make a lasting impact by including FCC in your estate or financial plan.",
    cta: "Contact Us",
  },
];

export default function GivePage() {
  return (
    <main className="mx-auto max-w-[900px] px-6 py-16">
      <div className="mx-auto mb-16 max-w-[560px] text-center">
        <div className="mb-3 font-work text-xs tracking-[0.2em] text-gold uppercase">Generosity</div>
        <h1 className="mb-4 font-playfair text-[clamp(32px,5vw,52px)] leading-[1.1] font-bold text-navy">Give</h1>
        <p className="text-base leading-[1.8] text-muted">
          Your generosity makes this community possible. Every gift — large or small — funds ministries, serves St.
          Louis, and spreads joy.
        </p>
      </div>

      <div className="mb-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {WAYS_TO_GIVE.map((g) =>
          g.url ? (
            <div key={g.method} className="border border-line bg-white px-7 py-8 text-center">
              <div className="mb-4 text-4xl">{g.icon}</div>
              <h3 className="mb-2.5 font-playfair text-xl font-bold text-navy">{g.method}</h3>
              <p className="mb-5 text-sm leading-[1.75] text-muted">{g.desc}</p>
              <a
                href={g.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-navy px-6 py-2.5 text-center font-work text-[13px] font-semibold tracking-[0.04em] text-white"
              >
                {g.cta}
              </a>
            </div>
          ) : (
            <div key={g.method} className="border border-line bg-white px-7 py-8 text-center">
              <div className="mb-4 text-4xl">{g.icon}</div>
              <h3 className="mb-2.5 font-playfair text-xl font-bold text-navy">{g.method}</h3>
              <p className="mb-5 text-sm leading-[1.75] text-muted">{g.desc}</p>
              <button className="w-full bg-navy px-6 py-2.5 font-work text-[13px] font-semibold tracking-[0.04em] text-white transition-colors hover:bg-navy-dark">
                {g.cta}
              </button>
            </div>
          ),
        )}
      </div>

      <div className="bg-navy px-12 py-10 text-center">
        <div className="mb-3 font-playfair text-[22px] text-gold-light italic">
          &quot;Each of you should give what you have decided in your heart to give, not reluctantly or under
          compulsion, for God loves a cheerful giver.&quot;
        </div>
        <div className="text-[13px] text-white/50">2 Corinthians 9:7</div>
      </div>
    </main>
  );
}
