"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NAV_LINKS } from "@/lib/nav";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-[100] border-b border-line bg-cream/97 backdrop-blur-sm">
      <div className="mx-auto flex h-17 max-w-[1100px] items-center justify-between px-6">
        <Link href="/" className="block leading-none" onClick={() => setOpen(false)}>
          <img
            src="/images/fcc-logo.png"
            alt="Faith Community Church — Believe. Belong. Become."
            className="h-11 w-auto object-contain object-left"
          />
        </Link>

        <nav className="hidden items-center md:flex">
          {NAV_LINKS.map((n) => {
            const active = pathname === n.href;
            return (
              <Link
                key={n.href}
                href={n.href}
                className={`whitespace-nowrap border-b-2 px-3.5 py-2 font-work text-xs font-semibold tracking-[0.06em] transition-colors ${
                  active
                    ? "border-fcc-blue text-fcc-blue"
                    : "border-transparent text-[#333] hover:text-fcc-blue"
                }`}
              >
                {n.label}
              </Link>
            );
          })}
          <Link
            href="/visit"
            className="ml-3 whitespace-nowrap bg-fcc-blue px-5 py-2.5 font-work text-xs font-bold tracking-[0.08em] text-white transition-colors hover:bg-fcc-blue-dark"
          >
            PLAN YOUR VISIT
          </Link>
        </nav>

        <button
          ref={toggleRef}
          onClick={() => setOpen((o) => !o)}
          className="p-2 text-navy md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <>
                <line x1="4" y1="4" x2="18" y2="18" />
                <line x1="18" y1="4" x2="4" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="19" y2="6" />
                <line x1="3" y1="11" x2="19" y2="11" />
                <line x1="3" y1="16" x2="19" y2="16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-cream px-6 pt-3 pb-5 md:hidden">
          {NAV_LINKS.map((n) => {
            const active = pathname === n.href;
            return (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className={`block border-b border-line py-3 font-work text-base font-medium ${
                  active ? "text-navy" : "text-ink"
                }`}
              >
                {n.label}
              </Link>
            );
          })}
          <Link
            href="/visit"
            onClick={() => setOpen(false)}
            className="mt-4 block w-full bg-navy py-3.5 text-center font-work text-sm font-semibold tracking-[0.04em] text-white"
          >
            Plan a Visit
          </Link>
        </div>
      )}
    </header>
  );
}
