import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Whoever Believes | Faith Community Church",
  description: "For God so loved the world, that he gave his only begotten Son. John 3:16.",
};

const PARAGRAPHS = [
  "There is nothing more important than knowing that we are right with God.",
  "God loves us and wants the best for us. He made us for relationship with Him. Sadly our sins, our disobedience separates us from Him. The Bible says, “All have sinned and come short of the glory of God.” (Romans 3:23)",
  "Sin not only separates us from God for now, but for eternity. “The wages of sin is death.” (Romans 6:23a). “The soul that sins will die.” (Ezekiel 18:20). “But your iniquities have separated you from your God; your sins have hidden His face from you, so that He will not hear.” (Isaiah 59:2)",
  "As God draws us He opens our eyes to the reality of our sin and to the consequences of that sin. We are then ready to receive the great news of the Gospel. “The gift of God is eternal life through Jesus Christ our Lord.” (Romans 6:23)",
  "Jesus said, “there is joy before the angels of God over one sinner who repents.” (Luke 15:10) Repentance is a change of heart and mind. Turning from our way to God’s way is the first step to peace with God.",
  "Those who repent, confess their sins to God. The Bible says, “If we confess our sins, he is faithful and just to forgive us our sins and to cleanse us from all unrighteousness.” (1 John 1:9)",
  "Sincere repentance and heart-felt confession bring the gift of saving faith. “For by grace you have been saved through faith. And this is not your own doing; it is the gift of God.” (Eph. 2:8)",
  "But salvation is not only about the forgiveness of sins that are past, it is about a change of heart. John tells us, “God is love, and whoever abides in love abides in God, and God abides in him… We love because he first loved us.” (1 John 4:14ff)",
  "To assure us that we are right with God He gives us His Holy Spirit. “The love of God is poured in our hearts by the Holy Ghost who is given us.” (Romans 5:3)",
];

const WE_BELIEVE = [
  "Everyone needs to be saved.",
  "Everyone can be saved.",
  "Everyone can know they are saved.",
  "Everyone can be saved completely.",
];

const STATEMENT_OF_FAITH = [
  "…In one God—the Father, Son and Holy Spirit.",
  "…That the Old and New Testament Scriptures are inspired by God, are inerrant in the autographs, and are the sole authority for matters of faith and the Christian life. Whatever is taught therein, nor may be proved thereby, should not be required to be believed by any Christian as necessary to salvation.",
  "…That all are born with a fallen nature, and inclined to evil.",
  "…That the finally impenitent are hopelessly and eternally lost.",
  "…That the atonement through Jesus Christ is for the whole human race; and that whosoever repents and believes on the Lord Jesus Christ is justified, regenerated, sanctified, and saved from the dominion of sin.",
  "…That the very God of peace sanctifies wholly, so that the whole spirit, and soul, and body, may be preserved blameless unto the coming of our Lord and Savior, Jesus Christ. The spirit is fully renewed in the image of God, purified of the stain of inherited depravity, and perfected in love.",
  "…That the Holy Spirit bears witness to sonship, and every stage of grace in the life of the penitent believer.",
  "…That our Lord will return, the dead will be raised, and the final judgment will take place.",
];

export default function BelievePage() {
  return (
    <main className="min-h-[60vh] bg-cream">
      <div className="bg-navy px-6 pt-13 pb-11">
        <div className="mx-auto max-w-[800px]">
          <div className="mb-2.5 font-work text-[11px] font-bold tracking-[0.2em] text-gold">
            FAITH COMMUNITY CHURCH
          </div>
          <h1 className="font-garamond text-[clamp(36px,5vw,64px)] leading-[1.1] text-white">Whoever Believes</h1>
          <p className="mt-3 font-work text-[15px] font-light text-white/60">John 3:16</p>
        </div>
      </div>

      <div className="mx-auto max-w-[800px] px-6 py-14">
        <div className="mb-14">
          <blockquote className="mb-8 border-l-4 border-gold pl-7 font-garamond text-[22px] leading-[1.85] text-navy italic">
            &quot;For God so loved the world, that he gave his only begotten Son, that whoever believes in him should
            not perish but have eternal life.&quot;
            <cite className="mt-2.5 block font-work text-[13px] font-semibold tracking-[0.08em] text-gold not-italic">
              JOHN 3:16
            </cite>
          </blockquote>

          {PARAGRAPHS.map((para, i) => (
            <p key={i} className="mb-5 font-work text-base leading-[1.9] text-muted">
              {para}
            </p>
          ))}

          <div className="my-8 border-l-4 border-fcc-blue bg-warm-gray px-7 py-7">
            <div className="mb-3.5 font-work text-[11px] font-bold tracking-[0.15em] text-fcc-blue">
              A PRAYER FOR SALVATION
            </div>
            <p className="font-garamond text-[19px] leading-[1.85] text-navy italic">
              &quot;God, thank you for the sacrifice of our Savior Jesus. I pray that you would forgive me of my
              sins. Change my heart and fill me with your loving Spirit. I want to know you and to live for you and
              with you forever. In Jesus&apos; name. Amen.&quot;
            </p>
          </div>

          <p className="font-work text-base leading-[1.9] text-muted">
            If you have prayed that prayer we hope you will get in touch with us soon. We have a Bible and helpful
            materials to encourage you in your new life with Christ.
          </p>
        </div>

        <div className="mb-12 bg-navy px-10 py-10">
          <div className="mb-6 font-work text-[11px] font-bold tracking-[0.2em] text-gold">WE BELIEVE</div>
          <div className="flex flex-col">
            {WE_BELIEVE.map((stmt, i) => (
              <div
                key={stmt}
                className={`flex items-baseline gap-4 py-4.5 ${
                  i < WE_BELIEVE.length - 1 ? "border-b border-white/10" : ""
                }`}
              >
                <div className="min-w-6 shrink-0 font-montserrat text-[13px] font-extrabold text-gold">{i + 1}</div>
                <div className="font-garamond text-[22px] leading-[1.3] text-white">{stmt}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12 border border-line px-9 py-9">
          <h3 className="mb-7 font-playfair text-[26px] font-bold tracking-[0.04em] text-navy">
            FCC Statement of Faith
          </h3>
          {STATEMENT_OF_FAITH.map((item, i) => (
            <div key={i} className="mb-4.5 flex items-start gap-4">
              <span className="mt-0.5 shrink-0 text-lg leading-none font-bold text-gold">✓</span>
              <p className="font-work text-base leading-[1.85] text-muted">{item}</p>
            </div>
          ))}
        </div>

        <div className="py-5 text-center">
          <p className="mb-6 font-work text-base text-muted">
            Ready to take your next step? We would love to talk with you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-fcc-blue px-8 py-3.5 font-work text-[13px] font-bold tracking-[0.08em] text-white"
            >
              CONTACT US →
            </Link>
            <Link
              href="/visit"
              className="border border-navy px-8 py-3.5 font-work text-[13px] font-bold tracking-[0.08em] text-navy"
            >
              PLAN YOUR VISIT
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
