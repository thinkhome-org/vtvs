"use client";

import { useState } from "react";
import { site } from "@/content/site";

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
          </ul>
        </div>

        <div className="contact-card">
          <ul className="copy-list">
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
