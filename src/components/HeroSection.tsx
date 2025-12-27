import heroStore from "@/assets/hero-store.jpg";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroStore}
          alt="The Conscious Life premium retail experience"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="animate-fade-up opacity-0 mb-8">
            <img
              src="https://setmycart.blob.core.windows.net/smcstage//12-27-2025/d1b3dcbdb0184affb67e4789c4a58907/WhatsApp_Image_2025-12-27_at_12.21.45_PM-removebg-preview.png"
              alt="The Conscious Life"
              className="h-20 md:h-28 mx-auto"
            />
          </div>

          {/* Tagline */}
          <h1 className="animate-fade-up opacity-0 delay-200 font-display text-3xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
            Where Conscious Brands
            <span className="block text-primary italic"> Find Their Tribe</span>
          </h1>

          <p className="animate-fade-up opacity-0 delay-300 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            A premium discovery destination where customers don't just shop—they experience brands. 
            From sampling to storytelling, we help conscious brands build trust and lasting loyalty.
          </p>

          {/* CTAs */}
          <div className="animate-fade-up opacity-0 delay-400 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="hero"
              size="xl"
              onClick={() => scrollToSection("early-access")}
            >
              Apply for Early Access
            </Button>
            <Button
              variant="outline"
              size="xl"
              onClick={() => scrollToSection("unique")}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;