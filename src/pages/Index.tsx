import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import UniqueSection from "@/components/UniqueSection";
import WhyMattersSection from "@/components/WhyMattersSection";
import InsightsSection from "@/components/InsightsSection";
import EarlyAccessSection from "@/components/EarlyAccessSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <UniqueSection />
      <WhyMattersSection />
      <InsightsSection />
      <EarlyAccessSection />
      <Footer />
    </main>
  );
};

export default Index;