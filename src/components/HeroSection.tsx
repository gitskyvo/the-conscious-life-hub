import { useState, useRef } from "react";
import heroStore from "@/assets/hero-store.jpg";
import { Button } from "@/components/ui/button";
import { ArrowDown, Play, Loader2 } from "lucide-react";
import logo from "@/assets/TCL_Final_Logo.png"
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

const HeroSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const loadTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleOpenVideo = () => {
    setIsVideoLoading(true);
    setIsVideoOpen(true);
  };

  const handleOpenChange = (open: boolean) => {
    setIsVideoOpen(open);
    if (open) {
      setIsVideoLoading(true);
    } else {
      if (loadTimerRef.current) {
        clearTimeout(loadTimerRef.current);
      }
    }
  };

  const handleIframeLoad = () => {
    if (loadTimerRef.current) clearTimeout(loadTimerRef.current);
    loadTimerRef.current = setTimeout(() => {
      setIsVideoLoading(false);
    }, 700);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Clean without black overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroStore}
          alt="The Conscious Life premium retail experience"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 py-24 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="animate-fade-up opacity-0 mb-6">
            <img
              src={logo}
              alt="The Conscious Life"
              className="mx-auto drop-shadow-md w-[25rem]"
            />
          </div>

          {/* Tagline */}
          <h1 className="animate-fade-up opacity-0 delay-100 font-display text-3xl md:text-5xl lg:text-6xl text-white font-bold leading-tight mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]">
            India’s first experiential retail destination <span className="text-lime">for conscious living.</span>
          </h1>

          <p className="animate-fade-up opacity-0 delay-200 bg-[#1E6B3A] rounded-sm p-1 text-lg md:text-2xl text-white max-w-2xl mx-auto mb-10 leading-relaxed font-sans font-normal drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)]">
            Taste it, try it, and know what’s inside before you choose.
          </p>

          {/* CTAs */}
          <div className="animate-fade-up opacity-0 delay-400 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="xl"
              onClick={() => scrollToSection("early-access")}
              className="bg-forest hover:bg-forest/90 text-white font-semibold shadow-elevated border border-lime/30 hover:border-lime transition-all"
            >
              Apply for Early Access
            </Button>
            <Button
              size="xl"
              onClick={handleOpenVideo}
              className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 backdrop-blur-sm group font-semibold transition-all"
            >
              <Play className="w-5 h-5 fill-current text-lime transition-transform group-hover:scale-110" />
              Watch the Experience
            </Button>
          </div>
        </div>
      </div>

      {/* Video Popup Dialog */}
      <Dialog open={isVideoOpen} onOpenChange={handleOpenChange}>
        <DialogContent className="w-[95vw] sm:w-[90vw] md:w-[85vw] max-w-4xl p-0 bg-black text-white border-white/10 rounded-2xl overflow-hidden shadow-2xl focus:outline-none [&>button]:z-20 [&>button]:text-white [&>button]:bg-black/70 [&>button]:p-2 [&>button]:rounded-full [&>button]:hover:bg-black [&>button]:transition-all">
          <DialogTitle className="sr-only">
            The Conscious Life Experience Video
          </DialogTitle>
          <div className="relative w-full aspect-video bg-black flex items-center justify-center overflow-hidden">
            {/* Spinning Loader while video loads */}
            {isVideoLoading && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-black">
                <Loader2 className="w-10 h-10 animate-spin text-primary" />
                <p className="text-xs sm:text-sm font-medium text-white/70 tracking-wide uppercase">
                  Loading Video...
                </p>
              </div>
            )}

            {isVideoOpen && (
              <iframe
                src="https://www.youtube.com/embed/B6rBWwcdYUo?autoplay=1&mute=0&rel=0&playsinline=1"
                title="The Conscious Life Experience"
                className={`w-full h-full border-0 transition-opacity duration-300 ${
                  isVideoLoading ? "opacity-0" : "opacity-100"
                }`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                onLoad={handleIframeLoad}
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default HeroSection;