"use client";

import { useState } from "react";

type Props = {
  url: string;
  title: string;
  text: string;
  flyerHref: string;
  flyerFilename: string;
};

const btn =
  "inline-flex items-center justify-center gap-2 px-6 py-3 font-work text-[13px] font-bold tracking-[0.06em] uppercase transition-colors";

export default function ShareButtons({ url, title, text, flyerHref, flyerFilename }: Props) {
  const [status, setStatus] = useState("");

  async function share() {
    try {
      if (navigator.share) {
        await navigator.share({ title, text, url });
        return;
      }
      await navigator.clipboard.writeText(url);
      setStatus("Link copied! Paste it into a text, email, or post.");
    } catch (err) {
      if ((err as Error).name === "AbortError") return;
      setStatus(`Copy this link to share: ${url}`);
    }
  }

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        <button type="button" onClick={share} className={`${btn} bg-fcc-blue text-white hover:bg-fcc-blue-dark`}>
          Share this invitation
        </button>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`${btn} bg-navy text-white hover:bg-navy-dark`}
        >
          Share on Facebook
        </a>
        <a href={flyerHref} download={flyerFilename} className={`${btn} border-2 border-navy text-navy hover:bg-navy hover:text-white`}>
          Download flyer
        </a>
      </div>
      <p role="status" aria-live="polite" className="mt-3 min-h-5 font-work text-[13px] text-muted">
        {status}
      </p>
    </div>
  );
}
