import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Store, 
  TrendingUp, 
  Users, 
  Heart, 
  CheckCircle2, 
  MapPin, 
  ArrowRight,
  ShieldCheck,
  Building2,
  Check
} from "lucide-react";
import "./Franchise.css";
import retailershop from "@/assets/retailershop.jpg";
import hexPattern from "@/assets/hex-pattern.png";

const Franchise = () => {
  const navigate = useNavigate();

  // Scroll to top on mount unless hash is present
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  const handleApplyClick = () => {
    // Redirect to homepage brand application form
    navigate("/#early-access");
  };

  return (
    <div className="min-h-screen bg-[#FAFBF8] font-sans text-deep selection:bg-lime selection:text-deep">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 px-6 overflow-hidden bg-[#FAFBF8]">
        {/* Hexagonal watermark element */}
        <div 
          className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-no-repeat bg-contain opacity-20 pointer-events-none select-none"
          style={{ backgroundImage: `url(${hexPattern})` }}
        />
        <div 
          className="absolute -left-24 bottom-0 w-[450px] h-[450px] bg-no-repeat bg-contain opacity-15 pointer-events-none select-none"
          style={{ backgroundImage: `url(${hexPattern})` }}
        />

        <div className="container max-w-[1400px] mx-auto text-center relative z-10">
          <div className="border-l-4 border-forest pl-3 inline-block mb-4">
            <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-forest">
              Partner With Us
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-deep mb-6 leading-tight tracking-tight max-w-5xl mx-auto">
            Partner With The Conscious Life
          </h1>

          <p className="text-lg md:text-2xl text-deep/75 max-w-3xl mx-auto leading-relaxed font-sans mb-8">
            Build a purpose led premium retail business in one of the fastest growing lifestyle categories.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-forest hover:bg-forest/90 text-white font-semibold text-base md:text-lg px-8 py-6 rounded-full shadow-elevated border border-lime/30 transition-all hover:-translate-y-0.5 group"
              onClick={handleApplyClick}
            >
              Apply for Franchise
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Brand Introduction */}
      <section className="py-16 md:py-20 px-6 bg-white relative overflow-hidden border-y border-forest/10">
        <div 
          className="absolute right-10 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-no-repeat bg-contain opacity-15 pointer-events-none select-none"
          style={{ backgroundImage: `url(${hexPattern})` }}
        />

        <div className="container max-w-[1400px] mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="border-l-4 border-forest pl-3 inline-block mb-4">
              <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-forest">
                ABOUT THE BRAND
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-display font-bold text-deep mb-8 leading-tight">
              A Curated Conscious Retail Destination
            </h2>

            <div className="p-8 md:p-12 rounded-3xl bg-sage/40 border border-forest/15 shadow-sm text-left md:text-center space-y-6">
              <p className="text-lg md:text-xl text-deep/80 leading-relaxed font-sans">
                The Conscious Life is a curated retail destination bringing together conscious food, skincare, wellness, and sustainable lifestyle brands under one thoughtfully designed space. We are building experience driven stores that combine mindful products with community engagement.
              </p>
              <div className="pt-6 border-t border-forest/15">
                <p className="text-lg md:text-xl font-display font-bold text-forest">
                  If you believe conscious consumption is the future, this is your opportunity to lead that movement in your city.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why The Conscious Life */}
      <section className="py-16 md:py-20 px-6 bg-[#FAFBF8] relative overflow-hidden">
        <div 
          className="absolute -left-20 top-1/3 w-[500px] h-[500px] bg-no-repeat bg-contain opacity-15 pointer-events-none select-none"
          style={{ backgroundImage: `url(${hexPattern})` }}
        />

        <div className="container max-w-[1400px] mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">
          <div>
            <div className="border-l-4 border-forest pl-3 inline-block mb-4">
              <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-forest">
                MARKET OPPORTUNITY
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-display font-bold text-deep mb-6 leading-tight">
              Why The Conscious Life?
            </h2>

            <p className="text-base md:text-lg text-deep/75 font-sans mb-6 leading-relaxed">
              Consumers today actively look for clean ingredients, ethical sourcing, transparency, and wellness focused products. However, most cities still lack a single premium destination that curates all conscious brands under one roof.
            </p>

            <div className="p-5 rounded-2xl bg-forest/10 border-l-4 border-forest mb-6">
              <p className="text-xl md:text-2xl font-display font-bold text-forest">
                The Conscious Life fills that gap.
              </p>
            </div>

            <p className="text-base md:text-lg text-deep/75 font-sans mb-6 leading-relaxed">
              We combine curated retail, experiential engagement, and community building to create strong brand loyalty and repeat customers. Our focus is not just selling products, but building a conscious ecosystem.
            </p>

            <div className="p-6 rounded-2xl bg-sage/60 border border-forest/15">
              <p className="text-base md:text-lg font-display font-semibold text-deep leading-snug">
                When you partner with us, you are not just opening a store. You are building a category defining lifestyle space.
              </p>
            </div>
          </div>

          <div className="relative aspect-square md:aspect-auto md:h-[580px] bg-sage/50 rounded-3xl overflow-hidden shadow-elevated border-2 border-forest/15 group">
            <img 
              src={retailershop}
              alt="The Conscious Life Experience Store" 
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep/70 via-transparent to-transparent flex items-end p-8">
              <div className="text-white">
                <span className="inline-block px-3 py-1 rounded-full bg-forest text-lime text-xs font-semibold uppercase tracking-wider mb-2 border border-lime/30">
                  Experiential Space
                </span>
                <p className="font-display font-bold text-xl md:text-2xl text-white">
                  Designed for Discovery & Community
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Our Model Different */}
      <section className="py-16 md:py-20 px-6 bg-white relative overflow-hidden border-y border-forest/10">
        <div 
          className="absolute -right-24 top-1/4 w-[550px] h-[550px] bg-no-repeat bg-contain opacity-20 pointer-events-none select-none"
          style={{ backgroundImage: `url(${hexPattern})` }}
        />

        <div className="container max-w-[1400px] mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="border-l-4 border-forest pl-3 inline-block mb-3">
              <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-forest">
                CORE ADVANTAGES
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-deep mb-4 leading-tight">
              What Makes Our Model Different
            </h2>
            <p className="text-lg text-deep/75 font-sans leading-relaxed">
              A purposeful ecosystem designed for lasting engagement and strong partner returns.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Store,
                title: "Curated Brand Portfolio",
                description: "Every brand featured aligns with conscious values, premium quality standards, and ingredient transparency."
              },
              {
                icon: TrendingUp,
                title: "Experience Driven Retail",
                description: "Workshops, tastings, skincare consultations, brand showcases, and community events increase engagement and footfall."
              },
              {
                icon: Users,
                title: "Premium Customer Base",
                description: "We attract aware, quality focused consumers who prioritise long term wellness and mindful choices."
              },
              {
                icon: Heart,
                title: "Community Centric Growth",
                description: "Our stores are designed to become local hubs for conscious conversations and lifestyle learning."
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="group p-8 rounded-3xl bg-sage/40 hover:bg-sage/75 border border-forest/15 hover:border-forest/30 shadow-sm hover:shadow-elevated transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="h-14 w-14 rounded-2xl bg-forest text-lime flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform">
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-deep mb-3 leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-deep/75 font-sans text-sm md:text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Franchise Opportunity & Ideal Partner Profile */}
      <section className="py-16 md:py-20 px-6 bg-[#FAFBF8] relative overflow-hidden">
        <div 
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-no-repeat bg-contain opacity-20 pointer-events-none select-none"
          style={{ backgroundImage: `url(${hexPattern})` }}
        />

        <div className="container max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-12 md:gap-16 items-stretch relative z-10">
          
          {/* Opportunity */}
          <div className="flex flex-col">
            <div className="border-l-4 border-forest pl-3 inline-block mb-4">
              <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-forest">
                PARTNERSHIP SCOPE
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-deep mb-8 leading-tight">
              Franchise Opportunity
            </h2>

            <div className="bg-forest text-white rounded-3xl p-8 md:p-12 shadow-elevated border-2 border-lime/40 flex-1 flex flex-col justify-between relative overflow-hidden">
              

              <div className="relative z-10">
                <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-lime text-xs font-semibold uppercase tracking-wider mb-6 border border-lime/20">
                  Scalable Model
                </span>
                <p className="text-2xl md:text-3xl leading-snug text-white font-display font-bold mb-6">
                  We offer a structured and scalable experiential retail format.
                </p>
                <p className="text-white/85 text-base md:text-lg leading-relaxed font-sans">
                  Join a network that prioritizes quality, sustainability, and community impact above all else.
                </p>
              </div>

              <div className="pt-8 mt-8 border-t border-white/20 relative z-10 flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-lime animate-pulse"></span>
                <span className="text-sm font-semibold text-lime">
                  Proven framework with complete operational onboarding
                </span>
              </div>
            </div>
          </div>

          {/* Ideal Partner */}
          <div className="flex flex-col">
            <div className="border-l-4 border-forest pl-3 inline-block mb-4">
              <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-forest">
                WHO WE ARE LOOKING FOR
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-deep mb-8 leading-tight">
              Ideal Partner Profile
            </h2>

            <div className="space-y-5 flex-1 flex flex-col justify-center">
              {[
                "Entrepreneurs passionate about wellness, sustainability, or premium retail",
                "Individuals with strong local presence and business understanding",
                "Hands on operators willing to build community along with commerce"
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="flex gap-5 p-6 rounded-3xl border border-forest/15 bg-white hover:bg-sage/40 transition-all duration-300 items-center shadow-sm hover:shadow-md"
                >
                  <div className="w-12 h-12 rounded-2xl bg-forest text-lime flex items-center justify-center shrink-0 shadow-sm">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-deep text-lg md:text-xl leading-snug">
                      {item}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Location Requirements */}
      <section className="py-16 md:py-20 px-6 bg-deep text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-no-repeat bg-cover opacity-10 pointer-events-none select-none"
          style={{ backgroundImage: `url(${hexPattern})`, backgroundPosition: 'center' }}
        />

        <div className="container max-w-[1400px] mx-auto text-center relative z-10">
          <div className="w-16 h-16 rounded-2xl bg-forest text-lime flex items-center justify-center mx-auto mb-6 shadow-elevated border border-lime/30">
            <MapPin className="w-8 h-8" />
          </div>

          <div className="inline-block mb-3">
            <span className="px-4 py-1.5 rounded-full bg-forest text-lime text-xs font-semibold tracking-wider uppercase border border-lime/20">
              PRIME FOOTFALL
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Location Requirement
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
            {[
              "High street locations",
              "Premium residential neighbourhoods",
              "Lifestyle focused commercial hubs"
            ].map((req, i) => (
              <div 
                key={i} 
                className="bg-white/5 border border-white/10 hover:border-lime/40 p-8 rounded-3xl backdrop-blur-sm flex items-center justify-center text-center h-44 shadow-sm hover:bg-white/10 transition-all duration-300 group"
              >
                <h3 className="text-xl md:text-2xl font-display font-bold text-lime group-hover:scale-105 transition-transform">
                  {req}
                </h3>
              </div>
            ))}
          </div>
          
          <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto font-sans leading-relaxed">
            Final format recommendation will be based on city and market assessment.
          </p>
        </div>
      </section>

      {/* What You Receive As A Partner */}
      <section className="py-16 md:py-20 px-6 bg-white relative overflow-hidden border-b border-forest/10">
        <div 
          className="absolute -left-20 top-1/4 w-[500px] h-[500px] bg-no-repeat bg-contain opacity-15 pointer-events-none select-none"
          style={{ backgroundImage: `url(${hexPattern})` }}
        />

        <div className="container max-w-[1400px] mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="border-l-4 border-forest pl-3 inline-block mb-3">
              <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-forest">
                COMPREHENSIVE SUPPORT
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-deep mb-4 leading-tight">
              What You Receive As A Partner
            </h2>
            <p className="text-lg text-deep/75 font-sans leading-relaxed">
              End-to-end operational enablement so you can focus on building local customer relationships.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Store Setup Support",
                items: [
                  "Location evaluation guidance",
                  "Store layout and space planning support",
                  "Initial merchandising and brand onboarding assistance"
                ]
              },
              {
                step: "02",
                title: "Operational Framework",
                items: [
                  "Standard operating process guidelines",
                  "Staff training direction",
                  "Inventory planning structure",
                  "Customer experience playbook"
                ]
              },
              {
                step: "03",
                title: "Marketing & Launch Support",
                items: [
                  "Launch communication templates",
                  "Digital marketing direction",
                  "Event activation framework",
                  "Community building strategy"
                ]
              },
              {
                step: "04",
                title: "Ongoing Growth Support",
                items: [
                  "Periodic business review discussions",
                  "New brand introduction guidance",
                  "Seasonal merchandising suggestions",
                  "Campaign planning inputs"
                ]
              }
            ].map((section, index) => (
              <div 
                key={index} 
                className="group p-8 rounded-3xl bg-sage/40 hover:bg-sage/75 border border-forest/15 hover:border-forest/30 shadow-sm hover:shadow-elevated transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-forest text-lime flex items-center justify-center font-display font-bold text-lg mb-6 shadow-sm group-hover:scale-105 transition-transform">
                    {section.step}
                  </div>
                  <h3 className="text-xl font-display font-bold text-deep mb-5 leading-snug">
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.items.map((item, i) => (
                      <li key={i} className="text-deep/75 text-sm md:text-base flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-forest shrink-0 mt-2"></span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Overview */}
      <section className="py-16 md:py-20 px-6 bg-[#FAFBF8] relative overflow-hidden">
        <div 
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-no-repeat bg-contain opacity-20 pointer-events-none select-none"
          style={{ backgroundImage: `url(${hexPattern})` }}
        />

        <div className="container max-w-[1400px] mx-auto text-center max-w-4xl relative z-10">
          <div className="border-l-4 border-forest pl-3 inline-block mb-3">
            <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-forest">
              TRANSPARENT FINANCIALS
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-deep mb-8 leading-tight">
            Investment Overview
          </h2>
          
          <div className="bg-sage/50 rounded-3xl p-8 md:p-12 shadow-elevated border border-forest/20">
            <p className="text-xl md:text-2xl text-deep mb-4 font-display font-bold leading-snug">
              Investment depends on store size, city, and final store design.
            </p>
            <p className="text-base md:text-lg text-deep/75 mb-8 font-sans leading-relaxed max-w-2xl mx-auto">
              A detailed cost structure and business projection will be shared after the discovery discussion.
            </p>
            <div className="border-t border-forest/20 pt-8 mt-2 rounded-2xl bg-white/70 p-6 border border-forest/10">
              <p className="text-lg md:text-xl font-display font-bold text-forest">
                Our model focuses on premium margins, repeat customer cycles, and experience led revenue growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 px-6 text-center bg-white relative overflow-hidden border-t border-forest/10">
        <div 
          className="absolute left-10 bottom-0 w-[400px] h-[400px] bg-no-repeat bg-contain opacity-15 pointer-events-none select-none"
          style={{ backgroundImage: `url(${hexPattern})` }}
        />
        <div 
          className="absolute right-10 top-0 w-[400px] h-[400px] bg-no-repeat bg-contain opacity-15 pointer-events-none select-none"
          style={{ backgroundImage: `url(${hexPattern})` }}
        />

        <div className="container max-w-[1400px] mx-auto relative z-10">
          <div className="border-l-4 border-forest pl-3 inline-block mb-4">
            <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-forest">
              TAKE THE NEXT STEP
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-deep mb-6 leading-tight max-w-4xl mx-auto">
            Ready to Start Your Journey?
          </h2>

          <p className="text-lg md:text-2xl text-deep/75 max-w-2xl mx-auto mb-10 font-sans leading-relaxed">
            Join us in redefining the future of retail. Apply now to become a franchise partner.
          </p>

          <Button 
            size="lg" 
            className="text-lg px-10 py-7 rounded-full shadow-elevated hover:shadow-2xl bg-forest hover:bg-forest/90 text-white font-semibold border border-lime/30 transition-all hover:-translate-y-1 group"
            onClick={handleApplyClick}
          >
            Apply Now
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          {/* Footer CTA Line */}
          <div className="mt-16 pt-12 border-t border-forest/15 max-w-xl mx-auto">
            <p className="text-sm font-medium text-deep/60 mb-2">Questions? Reach us at</p>
            <a 
              href="mailto:info@theconsciouslife.in" 
              className="text-lg md:text-xl font-display font-semibold text-forest hover:text-forest/80 underline decoration-forest/30 underline-offset-4 transition-colors"
            >
              info@theconsciouslife.in
            </a>
            <div className="mt-8 p-6 rounded-2xl bg-sage/40 border border-forest/15 shadow-2xs">
              <p className="text-lg md:text-xl font-display font-semibold text-deep">
                “Let us create the future of conscious retail together.”
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Franchise;
