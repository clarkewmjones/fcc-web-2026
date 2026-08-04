import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Faith Community Church",
  description: "Get in touch with Faith Community Church in St. Louis, MO.",
};

const SERVICE_TIMES = [
  { label: "Adult Bible Class", day: "Sunday", time: "10:15 AM" },
  { label: "Worship", day: "Sunday", time: "11:00 AM" },
  { label: "Sunday School (PreK–High School)", day: "Sunday", time: "11:00 AM" },
  { label: "Evening Praise", day: "Sunday", time: "6:00 PM" },
];

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-[1100px] px-6 py-16">
      <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-2 lg:gap-18">
        <div>
          <div className="mb-3 font-work text-xs tracking-[0.2em] text-gold uppercase">Get In Touch</div>
          <h1 className="mb-8 font-playfair text-[clamp(32px,4vw,48px)] leading-[1.1] font-bold text-navy">
            Contact Us
          </h1>

          <div className="mb-10 flex flex-col gap-5">
            <div className="border-l-4 border-fcc-blue bg-warm-gray px-6 py-5">
              <div className="mb-1.5 font-work text-[11px] font-bold tracking-[0.15em] text-muted">CELL / TEXT</div>
              <a href="tel:3146071424" className="font-montserrat text-[22px] font-bold tracking-[0.02em] text-navy">
                (314) 607-1424
              </a>
            </div>
            <div className="border-l-4 border-gold bg-warm-gray px-6 py-5">
              <div className="mb-1.5 font-work text-[11px] font-bold tracking-[0.15em] text-muted">
                EMAIL OUR PASTOR
              </div>
              <a href="mailto:PastorRickFCC@gmail.com" className="font-work text-base font-semibold text-fcc-blue">
                PastorRickFCC@gmail.com
              </a>
            </div>
            <div className="border-l-4 border-navy bg-warm-gray px-6 py-5">
              <div className="mb-2.5 font-work text-[11px] font-bold tracking-[0.15em] text-muted">GENERAL EMAIL</div>
              <a
                href="mailto:fccstlouismo@gmail.com"
                className="mb-3.5 block font-work text-[15px] font-semibold text-fcc-blue"
              >
                fccstlouismo@gmail.com
              </a>
              <div className="mb-2.5 font-work text-[11px] font-bold tracking-[0.15em] text-muted">FOLLOW US</div>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/fcc.stl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[#E1306C] px-3.5 py-2 font-work text-xs font-bold tracking-[0.06em] text-white"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
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
                  className="inline-flex items-center gap-1.5 bg-[#1877F2] px-3.5 py-2 font-work text-xs font-bold tracking-[0.06em] text-white"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  FACEBOOK
                </a>
              </div>
            </div>
          </div>

          <div className="border-t-2 border-line pt-8">
            <ContactForm heading="Or Fill Out the Contact Form Below" subheading="Say Hello — we'd love to hear from you." showInterests />
          </div>
        </div>

        <div>
          <div className="mb-6 bg-warm-gray px-7 py-8">
            <h2 className="mb-5 font-playfair text-[22px] font-bold text-navy">Weekend Services</h2>
            {SERVICE_TIMES.map((s) => (
              <div key={s.label} className="flex items-center justify-between gap-3 border-b border-line py-3">
                <div>
                  <span className="font-work text-[15px] font-semibold text-navy">{s.label}</span>
                  <div className="font-work text-xs text-muted">{s.day}</div>
                </div>
                <span className="shrink-0 font-playfair text-lg font-semibold text-gold">{s.time}</span>
              </div>
            ))}
          </div>

          <div className="mb-6 bg-navy px-7 py-7">
            <div className="mb-3 font-work text-xs tracking-[0.15em] text-white/40 uppercase">Find Us</div>
            <div className="mb-4 text-base leading-[1.9] text-white">
              2969 N Lindbergh Blvd.
              <br />
              St. Ann, MO 63074
            </div>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=2969+N+Lindbergh+Blvd+St+Ann+MO+63074"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold px-5 py-2.5 font-work text-[13px] font-semibold tracking-[0.04em] text-white"
            >
              Get Directions <span className="text-xl leading-none font-black text-navy">▶</span>
            </a>
          </div>

          <div className="border border-line px-7 py-7">
            <ContactForm heading="Say Hello" />
          </div>
        </div>
      </div>
    </main>
  );
}
