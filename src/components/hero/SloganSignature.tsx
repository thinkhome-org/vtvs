import { site } from "@/content/site";

export function SloganSignature({ className = "" }: { className?: string }) {
  return (
    <p className={`slogan ${className}`} translate="no">
      {site.slogan}
    </p>
  );
}
