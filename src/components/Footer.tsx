import { Mail, MapPin, Linkedin, Instagram, ArrowUpRight, Sparkles, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import hexPattern from "@/assets/hex-pattern.png";
import { Button } from "@/components/ui/button";
import footerLogo from "@/assets/TCL_Final_Logo.png"

const Footer = () => {
  const currentYear = 2026;

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-deep text-white relative overflow-hidden border-t border-forest/30">
      {/* Decorative hex watermark from PDF deck */}
      {/* <div 
        className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-no-repeat bg-contain opacity-10 pointer-events-none select-none"
        style={{ backgroundImage: `url(${hexPattern})` }}
      />
      <div 
        className="absolute -left-20 top-0 w-[400px] h-[400px] bg-no-repeat bg-contain opacity-5 pointer-events-none select-none"
        style={{ backgroundImage: `url(${hexPattern})` }}
      /> */}

      <div className="container px-6 relative z-10 pt-16 pb-12">
        <div className="max-w-6xl mx-auto">
          {/* Top CTA Strip */}
          <div className="rounded-3xl bg-forest/40 border border-forest/40 p-8 sm:p-10 mb-16 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-sm">
            <div className="space-y-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-lime text-xs font-bold uppercase tracking-wider mb-1">
                <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
                Now Onboarding Brands & Franchise Partners
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                Ready to redefine offline conscious retail?
              </h3>
              <p className="text-white/75 text-sm font-sans max-w-xl">
                Experience prime shelf space, high-intent footfall, zero dead-inventory loss, and live shopper telemetry.
              </p>
            </div>

            <Button
              size="lg"
              onClick={() => scrollToSection("early-access")}
              className="bg-lime hover:bg-lime/90 text-deep font-bold px-8 shadow-elevated transition-transform hover:-translate-y-0.5 flex-shrink-0"
            >
              Apply for Early Access
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Main Footer Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
            {/* Col 1: Brand Info */}
            <div className="lg:col-span-5 space-y-4">
              <Link to="/" onClick={() => window.scrollTo(0, 0)} className="inline-block">
                <img
                  src={footerLogo}
                  alt="The Conscious Life"
                  className="h-16 w-auto mb-3"
                />
              </Link>
              <p className="text-white/80 text-sm font-sans leading-relaxed max-w-sm">
                India’s first experiential retail destination for conscious living. Taste it, try it, and know what’s inside before you choose.
              </p>
              <div className="text-xs uppercase tracking-widest text-lime font-semibold font-sans pt-1">
                People · Products · A Better Tomorrow
              </div>

              {/* Social badges */}
              <div className="flex items-center gap-3 pt-3">
                <a
                  href="https://www.linkedin.com/company/theconsciouslife/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-lime hover:border-lime/40 hover:bg-white/10 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/theconsciouslifetcl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-lime hover:border-lime/40 hover:bg-white/10 transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Col 2: Navigation */}
            <div className="lg:col-span-3 space-y-3">
              <div className="border-l-2 border-lime pl-2.5 mb-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-white">
                  EXPLORE TCL
                </h4>
              </div>
              <ul className="space-y-2.5 text-sm text-white/75 font-sans">
                <li>
                  <button onClick={() => scrollToSection("why-matters")} className="hover:text-lime transition-colors">
                    Why TCL (Why We Exist)
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("verticals")} className="hover:text-lime transition-colors">
                    Four Curated Verticals
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("unique")} className="hover:text-lime transition-colors">
                    What Makes TCL Different
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("partnership-model")} className="hover:text-lime transition-colors">
                    Three Sides Model
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("insights")} className="hover:text-lime transition-colors">
                    Retail with a Brain (Tech & AI)
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("conscious-club")} className="hover:text-lime transition-colors">
                    Conscious Club Membership
                  </button>
                </li>
                <li>
                  <Link to="/franchise" className="hover:text-lime transition-colors text-lime font-medium">
                    Partner With Us (Franchise)
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Verticals */}
            <div className="lg:col-span-2 space-y-3">
              <div className="border-l-2 border-forest pl-2.5 mb-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-white">
                  VERTICALS
                </h4>
              </div>
              <ul className="space-y-2.5 text-sm text-white/75 font-sans">
                <li>Food & Beverages</li>
                <li>Skincare & Personal Care</li>
                <li>Wellness & Supplements</li>
                <li>Lifestyle & Electronics</li>
                <li className="pt-2 text-xs text-lime">
                  ✓ 100% Vetted Curation
                </li>
              </ul>
            </div>

            {/* Col 4: Contact & Locations */}
            <div className="lg:col-span-2 space-y-3">
              <div className="border-l-2 border-forest pl-2.5 mb-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-white">
                  CONNECT
                </h4>
              </div>
              <div className="space-y-3 text-sm text-white/75 font-sans">
                <a
                  href="mailto:info@theconsciouslife.in"
                  className="flex items-center gap-2 text-white/90 hover:text-lime transition-colors group"
                >
                  <Mail className="w-4 h-4 text-lime" />
                  <span className="truncate">info@theconsciouslife.in</span>
                </a>
                <div className="flex items-start gap-2 pt-1 text-white/75">
                  <MapPin className="w-4 h-4 text-lime flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-medium block">Cities</span>
                    <span className="text-xs text-white/60">Nagpur · Raipur · Indore</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/50 font-sans">
            <p>© {currentYear} The Conscious Life. All rights reserved.</p>

            <div className="flex items-center gap-6">
              <Link to="/franchise" className="hover:text-lime transition-colors">
                Franchise Opportunities
              </Link>
              <a href="#" className="hover:text-lime transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-lime transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
