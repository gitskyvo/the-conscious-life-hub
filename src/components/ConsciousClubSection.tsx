import { Button } from "@/components/ui/button";
import { Gift, Calendar, Sparkles, UserCheck, ArrowRight } from "lucide-react";
import consciousClubCard from "@/assets/conscious-club-card.jpg";
import hexPattern from "@/assets/hex-pattern.png";

const perks = [
  {
    icon: Gift,
    title: "Earn Mindful Rewards",
    description: "Points on every in-store and online purchase, redeemable across any curated conscious brand.",
  },
  {
    icon: Sparkles,
    title: "Early Access Launches",
    description: "First access to limited-batch product drops, seasonal releases, and founder introductions.",
  },
  {
    icon: UserCheck,
    title: "Expert Consultations",
    description: "Complimentary 1-on-1 sessions with in-house skin specialists, clinical nutritionists, and wellness guides.",
  },
  {
    icon: Calendar,
    title: "Private Community Events",
    description: "Exclusive invites to Conscious Conversations, tastings, clean beauty workshops, and wellness retreats.",
  },
];

const ConsciousClubSection = () => {
  const scrollToEarlyAccess = () => {
    document.getElementById("early-access")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="conscious-club" className="py-16 md:py-20 bg-[#FAFBF8] relative overflow-hidden overflow-x-clip w-full">
      {/* Decorative hex watermark from PDF deck */}
      <div 
        className="hidden sm:block absolute -right-24 top-20 w-[600px] h-[600px] bg-no-repeat bg-contain opacity-25 pointer-events-none"
        style={{ backgroundImage: `url(${hexPattern})` }}
      />
      <div 
        className="hidden sm:block absolute -left-20 bottom-10 w-[400px] h-[400px] bg-no-repeat bg-contain opacity-15 pointer-events-none"
        style={{ backgroundImage: `url(${hexPattern})` }}
      />

      <div className="container px-4 sm:px-6 relative z-10 w-full max-w-full">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* Left Image: Membership Card Photo */}
            <div className="lg:col-span-6 w-full min-w-0">
              <div className="relative rounded-3xl overflow-hidden shadow-elevated border-2 border-forest/20 group bg-deep w-full">
                <img
                  src={consciousClubCard}
                  alt="Customer receiving Conscious Club Membership Card at The Conscious Life"
                  className="w-full h-[360px] sm:h-[440px] md:h-[520px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/85 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 sm:p-5 rounded-2xl bg-deep/95 backdrop-blur-md border border-lime/30 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-lime animate-pulse shrink-0" />
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-lime">
                      VIP PRIVILEGE
                    </span>
                  </div>
                  <h4 className="font-display text-base sm:text-lg font-bold">
                    Conscious Club Membership
                  </h4>
                  <p className="text-xs text-white/80 mt-1 font-sans leading-relaxed">
                    A personalized membership card unlocking tier benefits, experiential tastings, and priority consultations.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Narrative & Perks */}
            <div className="lg:col-span-6 space-y-6 w-full min-w-0">
              <div className="border-l-4 border-forest pl-3">
                <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-forest">
                  MEMBERSHIP & LOYALTY
                </span>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-deep leading-tight">
                Conscious Club.
                <span className="block text-forest mt-1">Loyalty that grows with you.</span>
              </h2>

              <p className="text-base sm:text-lg md:text-xl text-deep/80 leading-relaxed font-sans">
                Built for people who care about what they choose. Earn rewards, get early access to new brand launches, book expert consultations and join private events.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                {perks.map((perk) => (
                  <div
                    key={perk.title}
                    className="p-4 sm:p-5 rounded-2xl bg-white border border-forest/15 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-10 h-10 rounded-xl bg-sage flex items-center justify-center text-forest mb-3">
                      <perk.icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-display font-bold text-base text-deep mb-1">
                      {perk.title}
                    </h4>
                    <p className="text-xs text-deep/75 leading-relaxed font-sans">
                      {perk.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-4 w-full">
                <Button
                  onClick={scrollToEarlyAccess}
                  className="bg-forest hover:bg-forest/90 text-white font-semibold shadow-elevated border border-lime/30 group w-full sm:w-auto h-auto min-h-12 py-3.5 sm:py-4 px-5 sm:px-10 text-sm sm:text-base md:text-lg whitespace-normal sm:whitespace-nowrap text-center justify-center leading-snug rounded-xl transition-all hover:-translate-y-0.5"
                >
                  <span>Get Early Access to Conscious Club</span>
                  <ArrowRight className="w-5 h-5 ml-2 text-lime transition-transform group-hover:translate-x-1 shrink-0" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsciousClubSection;
