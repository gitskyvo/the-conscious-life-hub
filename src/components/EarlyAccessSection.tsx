import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { CheckCircle2, ArrowRight } from "lucide-react";

const EarlyAccessSection = () => {
  const [formData, setFormData] = useState({
    brandName: "",
    contactName: "",
    email: "",
    website: "",
    category: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest. We'll review your application and get back to you soon.",
    });
    setFormData({
      brandName: "",
      contactName: "",
      email: "",
      website: "",
      category: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="early-access" className="py-24 md:py-32 bg-secondary/30">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left Content */}
            <div className="lg:sticky lg:top-24">
              <span className="inline-block text-sm font-medium text-accent uppercase tracking-widest mb-4">
                Limited Opportunity
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
                Early Access
                <span className="text-primary italic block">Now Open</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We're onboarding a limited number of brands for our early phase. 
                All applications go through a curation process to ensure alignment with our values and quality benchmarks.
              </p>

              {/* What we look for */}
              <div className="space-y-4">
                <h3 className="font-display text-xl text-foreground mb-4">What we look for:</h3>
                {[
                  "Alignment with conscious living values",
                  "Quality products with authentic stories",
                  "Commitment to sustainability",
                  "Brands ready for offline growth",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Form */}
            <div className="bg-background rounded-3xl p-8 md:p-10 shadow-elevated border border-border/50">
              <h3 className="font-display text-2xl text-foreground mb-2">Apply Now</h3>
              <p className="text-muted-foreground mb-8">Tell us about your brand</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="brandName" className="block text-sm font-medium text-foreground mb-2">
                      Brand Name *
                    </label>
                    <Input
                      id="brandName"
                      name="brandName"
                      value={formData.brandName}
                      onChange={handleChange}
                      required
                      placeholder="Your brand name"
                      className="bg-secondary/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="contactName" className="block text-sm font-medium text-foreground mb-2">
                      Contact Name *
                    </label>
                    <Input
                      id="contactName"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="bg-secondary/50"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@brand.com"
                      className="bg-secondary/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="website" className="block text-sm font-medium text-foreground mb-2">
                      Website
                    </label>
                    <Input
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="www.yourbrand.com"
                      className="bg-secondary/50"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-foreground mb-2">
                    Product Category *
                  </label>
                  <Input
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    placeholder="e.g., Skincare, Food & Beverages, Wellness"
                    className="bg-secondary/50"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Tell us about your brand
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="What makes your brand unique? What are your goals for offline retail?"
                    rows={4}
                    className="bg-secondary/50 resize-none"
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full group">
                  Submit Application
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarlyAccessSection;