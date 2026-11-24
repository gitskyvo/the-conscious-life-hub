import { Store, Building2, Sparkles, CheckCircle2 } from "lucide-react";
import hexPattern from "@/assets/hex-pattern.png";

const partners = [
  {
    role: "Brands",
    highlight: false,
    bring: "Product on production credit, and pay to be discovered.",
    get: "Plug-and-play offline reach, real trial feedback, and high-fidelity customer data.",
    badge: "Direct Reach",
  },
  {
    role: "You, the franchise partner",
    highlight: true,
    bring: "Interiors and day-to-day store operations.",
    get: "Day-one shelf-rental income plus a share of every sale. Zero inventory risk.",
    badge: "Immediate Cash Flow",
  },
  {
    role: "The Conscious Life",
    highlight: false,
    bring: "Technology, data, curation, membership and brand partnerships.",
    get: "A share of every transaction, royalties and platform fees.",
    badge: "Platform Engine",
  },
];

const PartnershipModelSection = () => {
  return (
    <section id="partnership-model" className="py-16 md:py-20 bg-[#FAFBF8] relative overflow-hidden">
      {/* Hex pattern watermark */}
      <div 
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-no-repeat bg-contain opacity-20 pointer-events-none"
        style={{ backgroundImage: `url(${hexPattern})` }}
      />

      <div className="container px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="border-l-4 border-forest pl-3 inline-block mb-3">
            <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-forest">
              SUSTAINABLE BUSINESS MODEL
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-deep mb-4">
            Three Sides. One Transaction.
          </h2>
          <p className="text-lg md:text-xl text-deep/75 font-sans leading-relaxed">
            A balanced ecosystem where brands grow, store partners earn securely, and consumers get authentic curation.
          </p>
        </div>

        {/* 3 Column Cards matching PDF Slide 2 */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12 items-stretch">
          {partners.map((p) => (
            <div
              key={p.role}
              className={`p-8 rounded-3xl flex flex-col justify-between transition-all duration-300 ${
                p.highlight
                  ? "bg-forest text-white shadow-elevated md:-translate-y-2 border-2 border-lime/40"
                  : "bg-white text-deep border border-forest/15 shadow-sm hover:shadow-md"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className={`font-display text-2xl font-bold ${p.highlight ? "text-white" : "text-deep"}`}>
                    {p.role}
                  </h3>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      p.highlight ? "bg-white/15 text-lime border border-white/20" : "bg-sage text-forest"
                    }`}
                  >
                    {p.badge}
                  </span>
                </div>

                <div className="space-y-6">
                  <div className={`p-4 rounded-2xl ${p.highlight ? "bg-white/10 border border-white/15" : "bg-sage/50 border border-forest/10"}`}>
                    <span className={`block text-xs font-bold uppercase tracking-wider mb-1 ${p.highlight ? "text-lime" : "text-forest"}`}>
                      BRING
                    </span>
                    <p className={`text-sm leading-relaxed font-sans ${p.highlight ? "text-white/90" : "text-deep/80"}`}>
                      {p.bring}
                    </p>
                  </div>

                  <div className={`p-4 rounded-2xl ${p.highlight ? "bg-white/10 border border-white/15" : "bg-sage/50 border border-forest/10"}`}>
                    <span className={`block text-xs font-bold uppercase tracking-wider mb-1 ${p.highlight ? "text-lime" : "text-forest"}`}>
                      GET
                    </span>
                    <p className={`text-sm leading-relaxed font-sans ${p.highlight ? "text-white/90" : "text-deep/80"}`}>
                      {p.get}
                    </p>
                  </div>
                </div>
              </div>

              <div className={`pt-6 mt-6 border-t ${p.highlight ? "border-white/15 text-white/80" : "border-forest/10 text-deep/70"} text-xs flex items-center gap-2`}>
                <CheckCircle2 className={`w-4 h-4 ${p.highlight ? "text-lime" : "text-forest"}`} />
                <span>Transparent revenue alignment</span>
              </div>
            </div>
          ))}
        </div>

        {/* Transaction Split Visual Bar matching Deck Slide 2 */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-white border border-forest/15 shadow-sm">
          <p className="text-sm font-bold text-deep uppercase tracking-wider mb-4 text-center sm:text-left">
            How each transaction is shared (illustrative base case)
          </p>

          <div className="w-full h-12 rounded-xl overflow-hidden flex shadow-inner text-xs sm:text-sm font-bold">
            {/* Brand 55% */}
            <div className="w-[55%] bg-forest text-white flex items-center justify-center px-2">
              Brand – 55%
            </div>
            {/* Franchise 30% */}
            <div className="w-[30%] bg-lime text-deep flex items-center justify-center px-2">
              Franchise – 30%
            </div>
            {/* TCL 15% */}
            <div className="w-[15%] bg-deep text-white flex items-center justify-center px-2">
              TCL – 15%
            </div>
          </div>

          <div className="flex flex-wrap justify-between items-center text-xs text-deep/70 pt-3 gap-2">
            <span>✓ Production & inventory covered</span>
            <span>✓ Guaranteed zero dead-inventory loss</span>
            <span>✓ Direct live analytics payout</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipModelSection;
