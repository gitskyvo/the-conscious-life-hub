import { Leaf, Heart, BookOpen, Store } from "lucide-react";

const features = [
  {
    icon: Store,
    title: "Curated Offline Experience",
    description:
      "A destination for health-conscious consumers across food & beverages, skincare, wellness, and sustainable living.",
  },
  {
    icon: Heart,
    title: "Try Before You Buy",
    description:
      "Customers experience, sample, and truly understand products before purchasing—building genuine connection.",
  },
  {
    icon: BookOpen,
    title: "Brand Storytelling",
    description:
      "Strong focus on discovery and education. We showcase the story, values, and mission behind every brand.",
  },
  {
    icon: Leaf,
    title: "Conscious Living Hub",
    description:
      "The go-to destination for conscious living—something currently missing in offline retail.",
  },
];

const UniqueSection = () => {
  return (
    <section id="unique" className="py-24 md:py-32 bg-background">
      <div className="container px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <img src="https://setmycart.blob.core.windows.net/smcstage//12-27-2025/678db332160d47b4ad3aa6811d91aac2/WhatsApp_Image_2025-12-27_at_12.21.44_PM-removebg-preview.png" alt="" className="w-8 h-8" />
            <span className="text-sm font-medium text-primary uppercase tracking-widest">
              What Makes Us Unique
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            More Than a Store—
            <span className="text-primary italic">An Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We're reimagining offline retail for the conscious consumer. 
            Every visit is an opportunity to discover, learn, and connect with brands that share your values.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-8 rounded-2xl bg-gradient-card border border-border/50 shadow-soft hover:shadow-elevated transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl md:text-2xl text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UniqueSection;