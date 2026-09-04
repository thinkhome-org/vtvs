import { site } from "@/content/site";

export function PhoneRow({ className = "" }: { className?: string }) {
  return (
    <ul className={`phone-row ${className}`}>
      {site.people.map((p) => (
        <li key={p.tel}>
          <a href={`tel:${p.tel}`} className="ink-link">
            {p.name}, {p.display}
          </a>
        </li>
      ))}
    </ul>
  );
}
