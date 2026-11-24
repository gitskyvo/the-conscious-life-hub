import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyMattersSection from "@/components/WhyMattersSection";
import FourVerticalsSection from "@/components/FourVerticalsSection";
import UniqueSection from "@/components/UniqueSection";
import PartnershipModelSection from "@/components/PartnershipModelSection";
import InsightsSection from "@/components/InsightsSection";
import ConsciousClubSection from "@/components/ConsciousClubSection";
import ComingToYourCitySection from "@/components/ComingToYourCitySection";
import EarlyAccessSection from "@/components/EarlyAccessSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-[#FAFBF8] text-deep font-sans selection:bg-lime selection:text-deep">
      <Navbar />
      <HeroSection />
      <WhyMattersSection />
      <FourVerticalsSection />
      <UniqueSection />
      {/* <PartnershipModelSection /> */}
      <InsightsSection />
      <ConsciousClubSection />
      <ComingToYourCitySection />
      <EarlyAccessSection />
      <Footer />
    </main>
  );
};

export default Index;
