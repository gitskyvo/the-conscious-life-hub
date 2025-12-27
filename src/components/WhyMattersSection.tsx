import { TrendingUp, Eye, Sparkles, Rocket } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Premium Shelf Space",
    description: "Get prime visibility with dedicated shelf space and in-store branding that elevates your brand presence.",
  },
  {
    icon: Eye,
    title: "High-Intent Customers",
    description: "Direct access to health-conscious consumers who are actively seeking products aligned with their values.",
  },
  {
    icon: Sparkles,
    title: "Sampling & Engagement",
    description: "Let customers experience your products firsthand through curated sampling and interactive discovery.",
  },
  {
    icon: Rocket,
    title: "Go-To-Market Platform",
    description: "A structured platform for offline expansion—no more navigating the complexities of traditional retail alone.",
  },
];

const WhyMattersSection = () => {
  return (
    <section id="why-matters" className="py-24 md:py-32 bg-secondary/30">
      <div className="container px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-sm font-medium text-accent uppercase tracking-widest mb-4">
            For Emerging Brands
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Breaking Into Retail
            <span className="text-primary italic block">Shouldn't Be Hard</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            High costs, low visibility, and limited discovery often slow growth for emerging brands. 
            The Conscious Life changes that—offering a platform designed for your success.
          </p>
        </div>

        {/* Benefits */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="relative group"
              >
                <div className="h-full p-6 rounded-2xl bg-background border border-border/50 shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-all duration-300">
                  {/* Number badge */}
                  <div className="absolute -top-3 -left-1 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-lg text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Business Model Note */}
        <div className="max-w-2xl mx-auto mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-full bg-background border border-border/50 shadow-soft">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Our model:</span> Monthly participation + per-sale revenue—ensuring aligned growth for both brand and platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMattersSection;