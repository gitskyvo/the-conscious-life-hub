import { MapPin, ArrowRight } from "lucide-react";
import storefrontNagpur from "@/assets/storefront-nagpur.jpg";
import hexPattern from "@/assets/hex-pattern.png";
import { Button } from "@/components/ui/button";

const cityList = [
  {
    name: "Nagpur",
    highlight: true,
    tag: "Flagship",
  },
  {
    name: "Raipur",
    highlight: false,
    tag: "Upcoming",
  },
  {
    name: "Indore",
    highlight: false,
    tag: "Upcoming",
  },
];

const ComingToYourCitySection = () => {
  const scrollToEarlyAccess = () => {
    document.getElementById("early-access")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="locations" className="py-20 md:py-24 bg-white relative overflow-hidden">
      {/* Decorative hex watermark from PDF deck */}
      <div 
        className="absolute left-10 top-1/3 w-[500px] h-[500px] bg-no-repeat bg-contain opacity-15 pointer-events-none"
        style={{ backgroundImage: `url(${hexPattern})` }}
      />

      <div className="container px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header matching exact prompt */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="border-l-4 border-forest pl-3 inline-block mb-3">
              <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-forest">
                EXPANSION
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-deep mb-4">
              Coming to your city.
            </h2>
            <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-sage border border-forest/20 text-forest font-display font-bold text-lg md:text-xl mb-4">
              <MapPin className="w-5 h-5 text-forest" />
              <span>Nagpur · Raipur · Indore</span>
            </div>
            <p className="text-base md:text-lg text-deep/75 max-w-xl mx-auto font-sans leading-relaxed">
              Be among the first to walk in. Join the waitlist and we’ll invite you to the launch.
            </p>
          </div>

          {/* 3 City Cards matching the PDF Deck Card Style */}
          {/* <div className="grid md:grid-cols-3 gap-6 mb-12">
            {cityList.map((city) => (
              <div
                key={city.name}
                className={`p-6 rounded-3xl border transition-all duration-300 flex items-center justify-between ${
                  city.highlight
                    ? "bg-forest text-white border-lime/40 shadow-elevated"
                    : "bg-sage/50 text-deep border-forest/15 hover:bg-sage/80"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-2xl flex items-center justify-center ${
                      city.highlight ? "bg-white/15 text-lime" : "bg-white text-forest border border-forest/15"
                    }`}
                  >
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className={`font-display text-2xl font-bold ${city.highlight ? "text-white" : "text-deep"}`}>
                      {city.name}
                    </h3>
                  </div>
                </div>

                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    city.highlight ? "bg-white/15 text-lime border border-white/20" : "bg-white text-forest border border-forest/15"
                  }`}
                >
                  {city.tag}
                </span>
              </div>
            ))}
          </div> */}

          {/* Storefront Photo Showcase & Waitlist CTA */}
          <div className="rounded-3xl overflow-hidden border border-forest/20 shadow-elevated bg-deep relative group">
            <div className="relative h-[380px] md:h-[460px] w-full">
              <img
                src={storefrontNagpur}
                alt="The Conscious Life Experience Center"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep/90 via-deep/30 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 p-6 rounded-2xl bg-white/95 backdrop-blur-md border border-forest/20 shadow-lg text-deep">
                <div>
                  {/* <span className="text-xs font-bold uppercase tracking-wider text-forest block mb-1">
                    EXPERIENCE CENTER
                  </span> */}
                  <h4 className="font-display font-bold text-xl text-deep">
                    The Conscious Life Experience Center
                  </h4>
                  <p className="text-xs text-deep/70 font-sans mt-0.5">
                    Taste it, try it, and know what’s inside before you choose.
                  </p>
                </div>

                <Button
                  size="lg"
                  onClick={scrollToEarlyAccess}
                  className="bg-forest hover:bg-forest/90 text-white font-semibold shadow-md border border-lime/30 group flex-shrink-0"
                >
                  Join the Waitlist
                  <ArrowRight className="w-4 h-4 ml-2 text-lime transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingToYourCitySection;
