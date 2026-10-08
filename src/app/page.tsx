import Hero from "@/components/Hero";
import FacilityCards from "@/components/FacilityCards";
import PalliativeSection from "@/components/PalliativeSection";
import CTASection from "@/components/CTASection";
   import AboutTrust from "@/components/AboutTrust";
   import Services from "@/components/Servicesoverview"
  
import FacilitySection from "@/components/FacilitySection";
import ProcessSection from "@/components/ProcessSection";
import DonationBanner from "@/components/DonationBanner";

import TestimonialsSection from "@/components/TestimonialsSection";
export default function HomePage() {
  return (
    <>
      <Hero />
       <AboutTrust />
      <Services />
      <FacilitySection />
      <ProcessSection />
      <TestimonialsSection />
      
<DonationBanner />
      {/* <PalliativeSection /> */}
      <CTASection />
    </>
  );
}
