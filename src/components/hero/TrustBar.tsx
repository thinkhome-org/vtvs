import { site } from "@/content/site";

export function TrustBar({ className = "" }: { className?: string }) {
  return (
    <div className={`trust-bar ${className}`}>
      {site.trust.map((item, i) => (
        <span key={item}>
          {i > 0 && <span className="trust-sep" aria-hidden="true">·</span>}
          <span>{item}</span>
        </span>
      ))}
    </div>
  );
}
