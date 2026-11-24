import { Wheat, Sparkles, HeartPulse, Compass, CheckCircle2 } from "lucide-react";
import verticalFood from "@/assets/vertical-food.jpg";
import verticalSkincare from "@/assets/vertical-skincare.jpg";
import hexPattern from "@/assets/hex-pattern.png";

const verticals = [
  {
    icon: Wheat,
    name: "Food & Beverages",
    tagline: "Real food. Real impact.",
    description: "Clean pantry essentials, cold-pressed oils, organic snacks, superfoods, and artisanal nutrition.",
    features: ["Cold-pressed & raw", "Zero refined sugars", "Traceable origin"],
  },
  {
    icon: Sparkles,
    name: "Skincare & Personal Care",
    tagline: "Clean. Safe. Effective.",
    description: "Toxin-free, plant-powered routines, conscious beauty rituals, and cruelty-free transparency.",
    features: ["Toxin-free certified", "Plant-based actives", "Dermat-tested"],
  },
  {
    icon: HeartPulse,
    name: "Wellness & Supplements",
    tagline: "Mind. Body. Balance.",
    description: "Ayurvedic nutrition, daily adaptogens, functional herbs, and gut health essentials.",
    features: ["Traditional wisdom", "Clean formulations", "Daily bio-balance"],
  },
  {
    icon: Compass,
    name: "Lifestyle & Electronics",
    tagline: "Thoughtful living, every day.",
    description: "Sustainable home care, eco-friendly lifestyle tools, and mindful everyday essentials.",
    features: ["Low ecological footprint", "Non-toxic home care", "Circular design"],
  },
];

const FourVerticalsSection = () => {
  return (
    <section id="verticals" className="py-16 md:py-20 bg-white relative overflow-hidden">
      {/* Background Hexagonal Pattern */}
      <div 
        className="absolute left-1/2 -translate-x-1/2 top-10 w-[700px] h-[700px] bg-no-repeat bg-contain opacity-15 pointer-events-none select-none"
        style={{ backgroundImage: `url(${hexPattern})` }}
      />

      <div className="container px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="border-l-4 border-forest pl-3 inline-block mb-3">
            <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-forest">
              CURATED CATEGORIES
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-deep mb-4">
            Four Curated Verticals
          </h2>
          <p className="text-lg md:text-xl text-deep/75 max-w-2xl mx-auto font-sans leading-relaxed">
            Everything for a better tomorrow. Under one roof.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {verticals.map((v, i) => (
            <div
              key={v.name}
              className="group p-8 rounded-3xl bg-sage/40 hover:bg-sage/80 border border-forest/15 hover:border-forest/30 shadow-sm hover:shadow-elevated transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-forest text-lime flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform">
                  <v.icon className="w-6 h-6" />
                </div>

                <h3 className="font-display text-xl font-bold text-deep mb-2">
                  {v.name}
                </h3>
                <p className="text-sm font-semibold text-forest mb-3 font-sans">
                  {v.tagline}
                </p>
                <p className="text-sm text-deep/75 leading-relaxed font-sans mb-6">
                  {v.description}
                </p>
              </div>

              <div className="pt-4 border-t border-forest/10 space-y-2">
                {v.features.map((feat) => (
                  <div key={feat} className="flex items-center gap-2 text-xs text-deep/80">
                    <CheckCircle2 className="w-3.5 h-3.5 text-forest flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Visual Showcase Banner */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center bg-forest rounded-3xl p-6 sm:p-10 text-white overflow-hidden shadow-elevated relative">
          <div 
            className="absolute -right-20 -bottom-20 w-80 h-80 bg-no-repeat bg-contain opacity-10 pointer-events-none"
            style={{ backgroundImage: `url(${hexPattern})` }}
          />

          <div className="space-y-4 relative z-10">
            <span className="inline-block px-3.5 py-1 rounded-full bg-white/10 text-lime text-xs font-semibold tracking-wider uppercase border border-white/15">
              IN-STORE TRIAL & SAMPLING
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold leading-tight">
              From Tasting Spoon to Vanity Mirror.
            </h3>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed font-sans">
              No guesswork. Customers sample honey, taste seed crackers, test clean face oils on skin, and consult in-store experts before deciding.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {["Test & Sample", "Ingredient Transparency", "Expert Zones", "Zero Fake Claims"].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-white/10 text-xs text-lime border border-white/15">
                  ✓ {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 relative z-10">
            <div className="rounded-2xl overflow-hidden shadow-md aspect-square bg-white/5 border border-white/20">
              <img
                src={verticalFood}
                alt="Food and beverage tasting at The Conscious Life"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md aspect-square bg-white/5 border border-white/20">
              <img
                src={verticalSkincare}
                alt="Skincare and personal care discovery at The Conscious Life"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FourVerticalsSection;
