"use client";

import { FormEvent, useId, useState } from "react";

const INTEREST_OPTIONS = [
  "I Would Like a Call / Visit",
  "I Have a Special Prayer Request",
  "Sign Up for Sunday School Bus Rides",
  "I Would Like to Be Involved",
];

type Errors = Partial<Record<"name" | "email" | "message", string>>;

export default function ContactForm({
  heading,
  subheading,
  showInterests = false,
}: {
  heading: string;
  subheading?: string;
  showInterests?: boolean;
}) {
  const formId = useId();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const toggleInterest = (item: string) =>
    setInterests((prev) => (prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]));

  const validate = (): Errors => {
    const next: Errors = {};
    if (!name.trim()) next.name = "Please enter your name.";
    if (!email.trim()) next.email = "Please enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Please enter a valid email address.";
    if (!message.trim()) next.message = "Please enter a message.";
    return next;
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSubmitted(true);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setInterests([]);
    }
  };

  if (submitted) {
    return (
      <div className="border border-line bg-white px-7 py-9">
        <h3 className="mb-2 font-playfair text-xl font-bold text-navy">Thank you!</h3>
        <p className="font-work text-sm text-muted">
          Your message has been received. Someone from our team will be in touch soon.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-5 font-work text-[13px] font-semibold text-fcc-blue hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <h3 className="mb-2 font-playfair text-xl font-bold text-navy">{heading}</h3>
      {subheading && <p className="mb-6 font-work text-sm text-muted">{subheading}</p>}

      <div className="mb-3.5">
        <label htmlFor={`${formId}-name`} className="mb-1.5 block font-work text-xs font-semibold tracking-[0.05em] text-muted uppercase">
          Your Name
        </label>
        <input
          id={`${formId}-name`}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? `${formId}-name-error` : undefined}
          className={`w-full border bg-white px-3.5 py-2.5 font-work text-sm text-ink outline-none focus:border-fcc-blue ${
            errors.name ? "border-red-500" : "border-line"
          }`}
        />
        {errors.name && (
          <p id={`${formId}-name-error`} className="mt-1 text-xs text-red-600">
            {errors.name}
          </p>
        )}
      </div>

      <div className="mb-3.5">
        <label htmlFor={`${formId}-email`} className="mb-1.5 block font-work text-xs font-semibold tracking-[0.05em] text-muted uppercase">
          Email Address
        </label>
        <input
          id={`${formId}-email`}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? `${formId}-email-error` : undefined}
          className={`w-full border bg-white px-3.5 py-2.5 font-work text-sm text-ink outline-none focus:border-fcc-blue ${
            errors.email ? "border-red-500" : "border-line"
          }`}
        />
        {errors.email && (
          <p id={`${formId}-email-error`} className="mt-1 text-xs text-red-600">
            {errors.email}
          </p>
        )}
      </div>

      <div className="mb-3.5">
        <label htmlFor={`${formId}-phone`} className="mb-1.5 block font-work text-xs font-semibold tracking-[0.05em] text-muted uppercase">
          Phone (optional)
        </label>
        <input
          id={`${formId}-phone`}
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full border border-line bg-white px-3.5 py-2.5 font-work text-sm text-ink outline-none focus:border-fcc-blue"
        />
      </div>

      {showInterests && (
        <div className="mb-5">
          <span className="mb-3 block font-work text-xs font-semibold tracking-[0.05em] text-muted uppercase">
            Area of Interest
          </span>
          <div role="group" aria-label="Area of interest">
            {INTEREST_OPTIONS.map((item) => {
              const checked = interests.includes(item);
              return (
                <button
                  type="button"
                  key={item}
                  onClick={() => toggleInterest(item)}
                  aria-pressed={checked}
                  className={`mb-2 flex w-full items-center gap-3 border px-4 py-3 text-left transition-colors ${
                    checked ? "border-fcc-blue bg-[#e8f0fc]" : "border-line bg-white"
                  }`}
                >
                  <span
                    className={`flex h-4.5 w-4.5 shrink-0 items-center justify-center border-2 ${
                      checked ? "border-fcc-blue bg-fcc-blue" : "border-line bg-white"
                    }`}
                  >
                    {checked && (
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4L3.5 6.5L9 1" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </span>
                  <span
                    className={`font-work text-[13px] font-semibold tracking-[0.04em] ${
                      checked ? "text-fcc-blue" : "text-navy"
                    }`}
                  >
                    {item.toUpperCase()}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      <div className="mb-5">
        <label htmlFor={`${formId}-message`} className="mb-1.5 block font-work text-xs font-semibold tracking-[0.05em] text-muted uppercase">
          Message
        </label>
        <textarea
          id={`${formId}-message`}
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? `${formId}-message-error` : undefined}
          className={`w-full resize-y border bg-white px-3.5 py-2.5 font-work text-sm text-ink outline-none focus:border-fcc-blue ${
            errors.message ? "border-red-500" : "border-line"
          }`}
        />
        {errors.message && (
          <p id={`${formId}-message-error`} className="mt-1 text-xs text-red-600">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-navy py-3.5 font-work text-sm font-semibold tracking-[0.04em] text-white transition-colors hover:bg-navy-dark"
      >
        Send Message
      </button>
    </form>
  );
}
