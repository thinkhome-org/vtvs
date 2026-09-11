import type { Metadata } from "next";
import { ContactFooter } from "@/components/site/ContactFooter";
import { Header } from "@/components/site/Header";
import { PriceList } from "@/components/site/PriceList";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Orientační ceník — Daně - VTVS s.r.o.",
  description: site.pricing.lead,
};

export default function PricingPage() {
  return (
    <>
      <Header />
      <main id="obsah">
        <PriceList />
      </main>
      <ContactFooter />
    </>
  );
}
