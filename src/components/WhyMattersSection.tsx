import { TrendingUp, Eye, Sparkles, Rocket, ArrowRight } from "lucide-react";
import whyTclGranola from "@/assets/why-tcl-granola.jpg";
import hexPattern from "@/assets/hex-pattern.png";

const stats = [
  {
    value: "$160B",
    label: "India's health and wellness market in 2025, with clean-label food, natural skincare and supplements leading demand.",
  },
  {
    value: "~8%",
    label: "of order value now goes to customer acquisition for many D2C brands, with marketplace fees on top.",
  },
  {
    value: "40–50%",
    label: "of Indian retail is non-e-commerce. Trust, trial and scale are still built offline.",
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Premium Shelf Space",
    description: "Dedicated prime placement and in-store storytelling that elevates your brand presence above the digital noise.",
  },
  {
    icon: Eye,
    title: "High-Intent Customers",
    description: "Direct footfall of health-conscious consumers actively seeking products aligned with clean living values.",
  },
  {
    icon: Sparkles,
    title: "Sampling & Trial Touchpoints",
    description: "Let customers taste, try, and truly experience products firsthand before purchasing to build real loyalty.",
  },
  {
    icon: Rocket,
    title: "Go-To-Market Platform",
    description: "A structured turnkey format for offline expansion without traditional distributor friction or inventory risk.",
  },
];

const WhyMattersSection = () => {
  return (
    <section id="why-matters" className="py-16 md:py-20 bg-[#FAFBF8] relative overflow-hidden">
      {/* Hexagonal brand watermark element from brand deck */}
      <div 
        className="absolute -right-20 top-20 w-[500px] h-[500px] bg-no-repeat bg-contain opacity-25 pointer-events-none select-none"
        style={{ backgroundImage: `url(${hexPattern})` }}
      />
      <div 
        className="absolute -left-20 bottom-10 w-[420px] h-[420px] bg-no-repeat bg-contain opacity-20 pointer-events-none select-none"
        style={{ backgroundImage: `url(${hexPattern})` }}
      />

      <div className="container px-6 relative z-10">
        {/* Top Story Section */}
        <div className="max-w-6xl mx-auto mb-14">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="border-l-4 border-forest pl-3">
                <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-forest">
                  WHY WE EXIST
                </span>
              </div>

              <h2 className="font-display text-3xl md:text-5xl lg:text-5xl text-deep font-bold leading-tight">
                Clean-label is everywhere online.
                <span className="block text-forest mt-1">Trust isn’t.</span>
              </h2>

              <p className="text-lg md:text-xl text-deep/80 leading-relaxed font-sans">
                Great products are scattered across websites and marketplaces. You can’t taste the granola or test the serum, and it’s hard to tell what’s genuinely clean and what’s just good marketing.
              </p>

              <div className="p-5 rounded-2xl bg-sage/60 border border-forest/15">
                <p className="text-base md:text-lg font-medium text-forest leading-relaxed">
                  Trust is built in person. So we built a place for it.
                </p>
              </div>

              {/* Stat Cards from Deck */}
              <div className="grid sm:grid-cols-3 gap-4 pt-4">
                {stats.map((stat, i) => (
                  <div 
                    key={i} 
                    className="p-5 rounded-2xl bg-white border border-forest/10 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="text-3xl lg:text-4xl font-display font-bold text-forest mb-2">
                      {stat.value}
                    </div>
                    <p className="text-xs md:text-sm text-deep/75 leading-relaxed font-sans">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image Container */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-elevated border border-forest/15 bg-white group">
                <img
                  src={whyTclGranola}
                  alt="Customer tasting healthy granola at The Conscious Life"
                  className="w-full h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/80 via-transparent to-transparent" />
                
                {/* Floating pill badge on image matching brand deck */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-sage/95 backdrop-blur-md border border-forest/20 shadow-lg">
                  <p className="text-xs md:text-sm font-semibold text-deep text-center leading-snug">
                    No premium, experience-first offline destination exists for conscious brands and consumers. <span className="text-forest underline decoration-lime underline-offset-2">TCL is built for it.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid for Brands */}
        <div className="max-w-6xl mx-auto">
          <div className="border-l-4 border-lime pl-3 mb-8">
            <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-deep">
              DESIGNED FOR DISCOVERY & BRAND SCALE
            </span>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-deep mt-1">
              What TCL Solves for Emerging Brands
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={benefit.title} className="relative group">
                <div className="h-full p-6 rounded-2xl bg-white border border-forest/15 shadow-sm hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 flex flex-col">
                  {/* Number badge */}
                  <div className="w-8 h-8 rounded-full bg-forest text-lime flex items-center justify-center text-xs font-bold mb-5 shadow-sm">
                    0{index + 1}
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-sage flex items-center justify-center mb-5 text-forest group-hover:bg-forest group-hover:text-lime transition-colors">
                    <benefit.icon className="w-6 h-6" />
                  </div>

                  {/* Content */}
                  <h4 className="font-display font-bold text-lg text-deep mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-sm text-deep/70 leading-relaxed font-sans">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Model Note */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-sage border border-forest/20 text-deep text-sm font-medium">
              <span className="w-2.5 h-2.5 rounded-full bg-lime animate-pulse" />
              <span>Aligned Growth: Monthly participation + per-sale revenue. No dead inventory risk.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMattersSection;
