import Navbar from "@/components/Navbar/Navbar";
import HeroSection from "@/components/Hero/HeroSection";
import ClientsMarquee from "@/components/Clients/ClientsMarquee";
import CapabilitiesSection from "@/components/Capabilities/CapabilitiesSection";
import MetricsSection from "@/components/Metrics/MetricsSection";
import WhyPartnerSection from "@/components/WhyPartner/WhyPartnerSection";
import IndustriesSection from "@/components/Industries/IndustriesSection";
import CaseStudiesSection from "@/components/CaseStudies/CaseStudiesSection";
import ContactSection from "@/components/Contact/ContactSection";
import Footer from "@/components/Footer/Footer";
import { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata/metadata.page";
import { siteJsonLd } from "@/lib/metadata/jsonld.site";

export const metadata: Metadata = pageMetadata;

export default function HomePage() {
  return (
    <>
      {/* Single comprehensive JSON-LD graph — covers Organization, Services,
          LocalBusiness, Case Studies (ItemList), FAQ, and Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
      />

      <Navbar />
      <main>
        <HeroSection />
        <ClientsMarquee />
        <CapabilitiesSection />
        <MetricsSection />
        <WhyPartnerSection />
        <IndustriesSection />
        <CaseStudiesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
