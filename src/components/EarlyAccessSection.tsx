import { CheckCircle2, ArrowRight } from "lucide-react";
import HubspotAutoForm from "./HubspotForm";
import hexPattern from "@/assets/hex-pattern.png";

const criteria = [
  "Alignment with conscious living and clean-label standards",
  "Zero harmful toxins, fillers, or fake health claims",
  "Authentic brand storytelling and transparent sourcing",
  "Ready for curated offline customer discovery and scaling",
];

const EarlyAccessSection = () => {
  return (
    <section id="early-access" className="py-16 md:py-20 bg-[#FAFBF8] relative overflow-hidden">
      {/* Hex watermark */}
      <div 
        className="absolute -right-20 top-10 w-[550px] h-[550px] bg-no-repeat bg-contain opacity-25 pointer-events-none"
        style={{ backgroundImage: `url(${hexPattern})` }}
      />
      <div 
        className="absolute -left-20 bottom-10 w-[400px] h-[400px] bg-no-repeat bg-contain opacity-15 pointer-events-none"
        style={{ backgroundImage: `url(${hexPattern})` }}
      />

      <div className="container px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Content */}
            <div className="lg:sticky lg:top-28 space-y-6">
              <div className="border-l-4 border-forest pl-3">
                <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-forest">
                  LIMITED BRAND ONBOARDING
                </span>
              </div>

              <h2 className="font-display text-3xl md:text-5xl font-bold text-deep leading-tight">
                Early Access.
                <span className="block text-forest mt-1">Now Open.</span>
              </h2>

              <p className="text-lg text-deep/80 leading-relaxed font-sans">
                We are onboarding a curated cohort of conscious food, skincare, wellness, and sustainable lifestyle brands for our locations.
              </p>

              <div className="p-6 rounded-3xl bg-sage/60 border border-forest/20 space-y-4">
                <h3 className="font-display text-xl font-bold text-deep">
                  What our curation team looks for:
                </h3>
                <div className="space-y-3">
                  {criteria.map((item) => (
                    <div key={item} className="flex items-start gap-3 text-sm text-deep/85 font-sans">
                      <CheckCircle2 className="w-5 h-5 text-forest flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-forest/15 shadow-sm text-xs text-deep/75">
                <p>
                  <strong className="text-forest">Note:</strong> All submissions undergo review by our curation council to ensure customer trust and store synergy.
                </p>
              </div>
            </div>

            {/* Right Form Container with Scrollable Box */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-elevated border-2 border-forest/15 relative z-10 flex flex-col">
              <div className="mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-forest block mb-1">
                  APPLY FOR SHELF SPACE & DISCOVERY
                </span>
                <h3 className="font-display text-2xl font-bold text-deep">
                  Brand Application Form
                </h3>
                <p className="text-xs text-deep/70 font-sans mt-0.5">
                  Scroll inside the box below to complete all fields and submit your brand details.
                </p>
              </div>

              {/* Scrollable Form Box */}
              <div className="max-h-[500px] overflow-y-auto pr-2 rounded-2xl border border-forest/15 p-4 bg-[#FAFBF8] shadow-inner custom-scrollbar">
                <HubspotAutoForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarlyAccessSection;
