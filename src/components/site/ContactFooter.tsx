"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/content/site";

const topics = site.contact.form.topics;
const fields = site.contact.form.fields;

type FormState = {
  topic: (typeof topics)[number] | "";
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
};

const emptyForm: FormState = {
  topic: "",
  name: "",
  company: "",
  email: "",
  phone: "",
  message: "",
};

export function ContactFooter() {
  const { heading, email, office, seat, ico, dic, court } = site.contact;

  return (
    <footer id="kontakt" className="contact-footer" aria-labelledby="contact-heading">
      <div className="contact-split">
        <div className="contact-card">
          <h2 id="contact-heading" className="contact-heading">
            {heading}
          </h2>
          <ul className="copy-list">
            {site.people.map((person) => (
              <li key={person.tel}>
                <CopyRow
                  label={`${person.name}, ${person.display}`}
                  value={person.display}
                  href={`tel:${person.tel}`}
                />
              </li>
            ))}
            <li>
              <CopyRow label={email} value={email} href={`mailto:${email}`} />
            </li>
            <li>
              <CopyRow label={`${office.label}: ${office.display}`} value={office.display} />
            </li>
            <li>
              <CopyRow label={`${seat.label}: ${seat.display}`} value={seat.display} />
            </li>
            <li>
              <CopyRow label={`IČ ${ico}`} value={ico} />
            </li>
            <li>
              <CopyRow label={`DIČ ${dic}`} value={dic} />
            </li>
          </ul>
          <p className="contact-court">{court}</p>
        </div>

        <LetterForm />
      </div>

      <p className="colophon">
        <span>
          Copyright © {site.name}, IČ {ico}
        </span>
        <span className="colophon-slogan">{site.slogan}</span>
      </p>
    </footer>
  );
}

function LetterForm() {
  const { form, email } = site.contact;
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormState>(emptyForm);

  const total = form.steps.length;
  const canNext =
    step === 0
      ? data.topic !== ""
      : step === 1
        ? data.name.trim() !== "" && data.email.trim() !== ""
        : data.message.trim() !== "";

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setData((prev) => ({ ...prev, [key]: value }));
  }

  function submit(event: FormEvent) {
    event.preventDefault();
    if (!canNext) return;

    const lines = [
      `Předmět: ${data.topic}`,
      `Jméno: ${data.name}`,
      data.company ? `Firma: ${data.company}` : "",
      `E-mail: ${data.email}`,
      data.phone ? `Telefon: ${data.phone}` : "",
      "",
      data.message,
    ].filter((line) => line !== "");

    const href = `mailto:${email}?subject=${encodeURIComponent(String(data.topic))}&body=${encodeURIComponent(lines.join("\n"))}`;
    window.location.href = href;
  }

  return (
    <form className="letter-form" onSubmit={submit} noValidate>
      <p className="letter-progress">
        {step + 1} / {total}
      </p>
      <h3 className="letter-step">{form.steps[step]}</h3>

      {step === 0 ? (
        <div className="letter-topics" role="group" aria-label={form.steps[0]}>
          {topics.map((topic) => (
            <button
              key={topic}
              type="button"
              className={data.topic === topic ? "letter-topic is-on" : "letter-topic"}
              aria-pressed={data.topic === topic}
              onClick={() => update("topic", topic)}
            >
              {topic}
            </button>
          ))}
        </div>
      ) : null}

      {step === 1 ? (
        <div className="letter-fields">
          <label className="letter-field">
            <span>{fields.name}</span>
            <input
              type="text"
              name="name"
              autoComplete="name"
              value={data.name}
              onChange={(e) => update("name", e.target.value)}
              required
            />
          </label>
          <label className="letter-field">
            <span>{fields.company}</span>
            <input
              type="text"
              name="company"
              autoComplete="organization"
              value={data.company}
              onChange={(e) => update("company", e.target.value)}
            />
          </label>
          <label className="letter-field">
            <span>{fields.email}</span>
            <input
              type="email"
              name="email"
              autoComplete="email"
              value={data.email}
              onChange={(e) => update("email", e.target.value)}
              required
            />
          </label>
          <label className="letter-field">
            <span>{fields.phone}</span>
            <input
              type="tel"
              name="phone"
              autoComplete="tel"
              value={data.phone}
              onChange={(e) => update("phone", e.target.value)}
            />
          </label>
        </div>
      ) : null}

      {step === 2 ? (
        <label className="letter-field">
          <span>{fields.message}</span>
          <textarea
            name="message"
            rows={6}
            value={data.message}
            onChange={(e) => update("message", e.target.value)}
            required
          />
        </label>
      ) : null}

      <div className="letter-nav">
        {step > 0 ? (
          <button type="button" className="letter-back" onClick={() => setStep((s) => s - 1)}>
            {form.back}
          </button>
        ) : (
          <span />
        )}
        {step < total - 1 ? (
          <button
            type="button"
            className="hero-btn letter-next"
            disabled={!canNext}
            onClick={() => setStep((s) => s + 1)}
          >
            {form.next}
          </button>
        ) : (
          <button type="submit" className="hero-btn letter-next" disabled={!canNext}>
            {form.send}
          </button>
        )}
      </div>
    </form>
  );
}

function CopyRow({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const field = document.createElement("textarea");
      field.value = value;
      document.body.appendChild(field);
      field.select();
      document.execCommand("copy");
      field.remove();
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <div className="copy-row">
      {href ? (
        <a className="ink-link" href={href}>
          {label}
        </a>
      ) : (
        <span>{label}</span>
      )}
      <button
        type="button"
        className="copy-btn"
        onClick={copy}
        aria-label={copied ? site.contact.form.copied : `Kopírovat ${value}`}
      >
        {copied ? site.contact.form.copied : <CopyIcon />}
      </button>
    </div>
  );
}

function CopyIcon() {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
      <rect x="5" y="1" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="1.25" />
      <rect x="1" y="5" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  );
}
