import { BarChart3, Users, TrendingUp, Lightbulb } from "lucide-react";

const insights = [
  {
    icon: Users,
    label: "Shopper Behavior",
    description: "Real-time visibility into who's browsing, sampling, and engaging with your products.",
  },
  {
    icon: BarChart3,
    label: "Conversion Tracking",
    description: "Know exactly who sampled your product and who converted to purchase.",
  },
  {
    icon: TrendingUp,
    label: "Consumer Preferences",
    description: "Data-led understanding of engagement patterns and repeat interest.",
  },
  {
    icon: Lightbulb,
    label: "Smart Decisions",
    description: "Optimize positioning, pricing, packaging, and expansion strategy.",
  },
];

const InsightsSection = () => {
  return (
    <section id="insights" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <div>
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-widest mb-4">
              Technology-Enabled
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Powered by AI & 
              <span className="text-primary italic"> Real-Time Insights</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Beyond physical retail, our technology platform delivers insights that traditional retail rarely offers. 
              Make data-driven decisions about your brand's growth.
            </p>

            <div className="space-y-4">
              {insights.map((insight) => (
                <div
                  key={insight.label}
                  className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <insight.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">{insight.label}</h3>
                    <p className="text-sm text-muted-foreground">{insight.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Central circle */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm border border-primary/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="font-display text-5xl md:text-6xl text-primary mb-2">AI</div>
                  <p className="text-sm text-muted-foreground font-medium">Powered Insights</p>
                </div>
              </div>

              {/* Orbiting elements */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-background shadow-elevated flex items-center justify-center animate-float">
                <BarChart3 className="w-7 h-7 text-primary" />
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-16 h-16 rounded-full bg-background shadow-elevated flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                <Users className="w-7 h-7 text-accent" />
              </div>
              <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-background shadow-elevated flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
                <TrendingUp className="w-7 h-7 text-primary" />
              </div>
              <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-background shadow-elevated flex items-center justify-center animate-float" style={{ animationDelay: '3s' }}>
                <Lightbulb className="w-7 h-7 text-accent" />
              </div>

              {/* Decorative rings */}
              <div className="absolute inset-4 rounded-full border border-primary/10" />
              <div className="absolute inset-0 rounded-full border border-primary/5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;