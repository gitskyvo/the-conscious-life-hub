import { Sparkles, BarChart2, Smartphone, Cpu, CheckCircle2 } from "lucide-react";
import analyticsDashboard from "@/assets/analytics-dashboard.jpg";
import aiSkinAdvisor from "@/assets/ai-skin-advisor.jpg";
import hexPattern from "@/assets/hex-pattern.png";

const features = [
  {
    icon: Sparkles,
    title: "Personalised Recommendations",
    description: "Suggestions that fit your unique skin type, dietary preferences, and personal wellness goals.",
  },
  {
    icon: BarChart2,
    title: "Real-Time Insights",
    description: "Shelves stay relevant to what people actually want, powered by live offline demand forecasting.",
  },
  {
    icon: Smartphone,
    title: "Online + In-Store, Connected",
    description: "One seamless experience across both. Browse offline, reorder online, and retain all discovery data.",
  },
];

const InsightsSection = () => {
  return (
    <section id="insights" className="py-16 md:py-20 bg-white relative overflow-hidden">
      {/* Decorative hex watermark from PDF deck */}
      <div 
        className="absolute -right-20 top-10 w-[550px] h-[550px] bg-no-repeat bg-contain opacity-20 pointer-events-none"
        style={{ backgroundImage: `url(${hexPattern})` }}
      />
      <div 
        className="absolute -left-20 bottom-10 w-[450px] h-[450px] bg-no-repeat bg-contain opacity-15 pointer-events-none"
        style={{ backgroundImage: `url(${hexPattern})` }}
      />

      <div className="container px-6 relative z-10">
        {/* Top Story Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto mb-14">
          {/* Left Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="border-l-4 border-forest pl-3">
              <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-forest">
                TECHNOLOGY-ENABLED
              </span>
            </div>

            <h2 className="font-display text-3xl md:text-5xl font-bold text-deep leading-tight">
              Retail with a brain.
            </h2>

            <p className="text-lg md:text-xl text-deep/80 leading-relaxed font-sans">
              Behind the calm, beautiful store is a smart platform. It learns what people love and what’s worth stocking, so every visit feels more personal than the last.
            </p>

            <div className="space-y-4 pt-2">
              {features.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-sage/50 border border-forest/15 hover:border-forest/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-forest text-lime flex items-center justify-center flex-shrink-0 shadow-sm">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-deep mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-deep/75 leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual: AI Skin Advisor Kiosk Image (replacing old AI circle) */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-elevated border border-forest/20 group bg-deep">
              <img
                src={aiSkinAdvisor}
                alt="AI Skin Advisor Kiosk in The Conscious Life clean beauty zone"
                className="w-full h-[520px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep/90 via-deep/20 to-transparent" />

              {/* In-store kiosk badge */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-forest/20 shadow-lg">
                <div className="flex items-center gap-3 mb-1">
                  <span className="w-3 h-3 rounded-full bg-lime border-2 border-forest animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-forest">
                    Interactive In-Store Kiosk
                  </span>
                </div>
                <h4 className="text-base font-display font-bold text-deep">
                  AI Skin Advisor & Discovery Terminals
                </h4>
                <p className="text-xs text-deep/75 mt-1 font-sans">
                  Customers scan their skin profile, discover active ingredients, and get tailored non-toxic recommendations on the spot.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Real-Time Analytics Dashboard Showcase (Brand Owner & Platform Intelligence) */}
        {/* <div className="max-w-6xl mx-auto rounded-3xl bg-sage/60 border border-forest/20 p-6 sm:p-10 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-forest block mb-1">
                FOR BRAND PARTNERS & MERCHANDISERS
              </span>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-deep">
                Live In-Store Analytics Dashboard
              </h3>
              <p className="text-sm text-deep/75 font-sans mt-1">
                Real-time visibility into shelf performance, shopper conversion, and demand forecasting.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forest text-white text-xs font-semibold shadow-sm">
              <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
              Live Telemetry & AI Replenishment
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-forest/20 shadow-elevated bg-white">
            <img
              src={analyticsDashboard}
              alt="The Conscious Life Analytics Dashboard showing live revenue, top products and inventory intelligence"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="grid sm:grid-cols-3 gap-4 mt-6 text-xs text-deep/80 font-medium">
            <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-forest/10">
              <CheckCircle2 className="w-4 h-4 text-forest flex-shrink-0" />
              <span>Full visibility into repeat trial & conversion rates</span>
            </div>
            <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-forest/10">
              <CheckCircle2 className="w-4 h-4 text-forest flex-shrink-0" />
              <span>Automated stock replenishment alerts</span>
            </div>
            <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-forest/10">
              <CheckCircle2 className="w-4 h-4 text-forest flex-shrink-0" />
              <span>Direct customer feedback & product reviews</span>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default InsightsSection;
