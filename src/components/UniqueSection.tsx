import { ShieldCheck, UserCheck, Cpu, BookOpen, Check } from "lucide-react";
import hexPattern from "@/assets/hex-pattern.png";

const differentiators = [
  {
    icon: ShieldCheck,
    title: "Curation Seal",
    description: "Every brand is vetted before it reaches the shelf. If it’s on a TCL shelf, it has earned its place through strict ingredient and quality audits.",
    badge: "100% Vetted",
  },
  {
    icon: UserCheck,
    title: "Expert Zones",
    description: "Talk to people who know. Get personalized guidance on skincare, clinical nutrition, and functional wellness that fits your lifestyle.",
    badge: "1-on-1 Consults",
  },
  {
    icon: Cpu,
    title: "AI-Powered Discovery",
    description: "Smart tools like the AI Skin Advisor and discovery kiosks help you understand ingredients, compare products, and choose with confidence.",
    badge: "Smart Tech",
  },
  {
    icon: BookOpen,
    title: "Real Brand Stories",
    description: "Meet the founders and discover why each product exists. Beyond marketing labels, experience genuine mission-driven craftsmanship.",
    badge: "Founder Led",
  },
];

const experiencePillars = [
  "Test, taste and sample",
  "Ingredient transparency",
  "Brand storytelling corners",
  "Expert consultation zones",
  "Workshops and events",
  "Conscious Club membership",
];

const UniqueSection = () => {
  return (
    <section id="unique" className="py-16 md:py-20 bg-white relative overflow-hidden">
      {/* Hexagonal watermark element */}
      <div 
        className="absolute -right-24 top-1/4 w-[550px] h-[550px] bg-no-repeat bg-contain opacity-20 pointer-events-none select-none"
        style={{ backgroundImage: `url(${hexPattern})` }}
      />
      <div 
        className="absolute -left-20 bottom-0 w-[400px] h-[400px] bg-no-repeat bg-contain opacity-15 pointer-events-none select-none"
        style={{ backgroundImage: `url(${hexPattern})` }}
      />

      <div className="container px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="border-l-4 border-forest pl-3 inline-block mb-3">
            <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-forest">
              THE TCL ADVANTAGE
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-deep mb-4">
            What Makes TCL Different
          </h2>
          <p className="text-lg md:text-xl text-deep/75 font-sans leading-relaxed">
            Not another store. A new kind of retail.
          </p>
        </div>

        {/* 4 Differentiators Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {differentiators.map((diff, index) => (
            <div
              key={diff.title}
              className="group relative p-8 rounded-3xl bg-sage/40 hover:bg-sage/75 border border-forest/15 hover:border-forest/30 shadow-sm hover:shadow-elevated transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-forest text-lime flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <diff.icon className="w-7 h-7" />
                </div>
                <span className="px-3 py-1 rounded-full bg-white text-forest text-xs font-semibold border border-forest/15 shadow-2xs">
                  {diff.badge}
                </span>
              </div>

              <h3 className="font-display text-2xl font-bold text-deep mb-3">
                {diff.title}
              </h3>
              <p className="text-deep/75 font-sans text-base leading-relaxed">
                {diff.description}
              </p>
            </div>
          ))}
        </div>

        {/* In-store experience callouts bar matching deck slide 3 */}
        <div className="max-w-5xl mx-auto p-8 rounded-3xl bg-deep text-white shadow-elevated border border-forest/30 relative overflow-hidden">
          <div className="text-center mb-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-forest text-lime text-xs md:text-sm font-semibold tracking-wider uppercase border border-lime/20 mb-3">
              Why onboard at TCL?
            </span>
            <h4 className="text-xl md:text-2xl font-display font-bold">
              The 6 Pillars of In-Store Discovery
            </h4>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {experiencePillars.map((pillar) => (
              <div key={pillar} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="w-5 h-5 rounded-full bg-lime text-deep flex items-center justify-center flex-shrink-0 text-xs font-bold">
                  ✓
                </div>
                <span className="text-xs sm:text-sm text-white/90 font-medium font-sans">
                  {pillar}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniqueSection;
