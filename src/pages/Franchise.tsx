import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Store, TrendingUp, Users, Heart, CheckCircle2, MapPin, ArrowRight } from "lucide-react";
import "./Franchise.css";

const Franchise = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleApplyClick = () => {
    // Redirect to Google Form URL
    window.location.href = "https://forms.google.com/your-form-url"; 
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background"></div>
        <div className="container max-w-[1400px] mx-auto text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
            Partner With Us
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium mb-6 leading-tight tracking-tight">
            Partner With The Conscious Life
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Build a purpose led premium retail business in one of the fastest growing lifestyle categories.
          </p>
        </div>
      </section>

      {/* Brand Introduction */}
      <section className="py-16 md:py-24 px-6 bg-secondary/30">
        <div className="container max-w-[1400px] mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-display text-foreground">
              A Curated Conscious Retail Destination
            </h2>
            <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
              <p>
                The Conscious Life is a curated retail destination bringing together conscious food, skincare, wellness, and sustainable lifestyle brands under one thoughtfully designed space. We are building experience driven stores that combine mindful products with community engagement.
              </p>
              <p className="font-medium text-foreground">
                If you believe conscious consumption is the future, this is your opportunity to lead that movement in your city.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why The Conscious Life */}
      <section className="py-16 md:py-24 px-6">
        <div className="container max-w-[1400px] mx-auto grid md:grid-cols-2 gap-12 md:gap-24 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-display mb-6">Why The Conscious Life?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Consumers today actively look for clean ingredients, ethical sourcing, transparency, and wellness focused products. However, most cities still lack a single premium destination that curates all conscious brands under one roof.
            </p>
            <p className="text-xl font-display text-primary mb-6">
              The Conscious Life fills that gap.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              We combine curated retail, experiential engagement, and community building to create strong brand loyalty and repeat customers. Our focus is not just selling products, but building a conscious ecosystem.
            </p>
            <p className="text-lg font-medium text-foreground">
              When you partner with us, you are not just opening a store. You are building a category defining lifestyle space.
            </p>
          </div>
          <div className="relative aspect-square md:aspect-auto md:h-[600px] bg-muted rounded-2xl overflow-hidden shadow-lg">
             <img 
               src="/src/assets/retailershop.webp" 
               alt="Conscious Lifestyle" 
               className="object-cover w-full h-full opacity-90 transition-transform duration-700 hover:scale-105"
             />
          </div>
        </div>
      </section>

      {/* What Makes Our Model Different */}
      <section className="py-16 md:py-24 px-6 bg-secondary/30">
        <div className="container max-w-[1400px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display mb-4">What Makes Our Model Different</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Store className="w-6 h-6 text-primary" />,
                title: "Curated Brand Portfolio",
                description: "Every brand featured aligns with conscious values, premium quality standards, and ingredient transparency."
              },
              {
                icon: <TrendingUp className="w-6 h-6 text-primary" />,
                title: "Experience Driven Retail",
                description: "Workshops, tastings, skincare consultations, brand showcases, and community events increase engagement and footfall."
              },
              {
                icon: <Users className="w-6 h-6 text-primary" />,
                title: "Premium Customer Base",
                description: "We attract aware, quality focused consumers who prioritise long term wellness and mindful choices."
              },
              {
                icon: <Heart className="w-6 h-6 text-primary" />,
                title: "Community Centric Growth",
                description: "Our stores are designed to become local hubs for conscious conversations and lifestyle learning."
              }
            ].map((feature, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-medium">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Franchise Opportunity & Ideal Partner */}
      <section className="py-16 md:py-24 px-6">
        <div className="container max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16">
          
          {/* Opportunity */}
          <div>
            <h2 className="text-3xl md:text-4xl font-display mb-8">Franchise Opportunity</h2>
            <Card className="bg-primary/5 border-none h-full">
              <CardContent className="pt-8 h-full flex flex-col justify-center">
                <p className="text-xl leading-relaxed text-foreground font-medium mb-6">
                  We offer a structured and scalable experiential retail format.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Join a network that prioritizes quality, sustainability, and community impact above all else.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Ideal Partner */}
          <div>
            <h2 className="text-3xl md:text-4xl font-display mb-8">Ideal Partner Profile</h2>
            <div className="space-y-6">
              <div className="grid gap-4">
                {[
                  "Entrepreneurs passionate about wellness, sustainability, or premium retail",
                  "Individuals with strong local presence and business understanding",
                  "Hands on operators willing to build community along with commerce"
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-5 rounded-lg border border-border/50 bg-card hover:bg-secondary/50 transition-colors items-center">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground text-lg">{item}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Location Requirements */}
      <section className="py-16 md:py-24 px-6 bg-neutral-900 text-white">
        <div className="container max-w-[1400px] mx-auto text-center">
          <MapPin className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-display mb-6">Location Requirement</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-left mb-12">
            {[
              "High street locations",
              "Premium residential neighbourhoods",
              "Lifestyle focused commercial hubs"
            ].map((req, i) => (
              <div key={i} className="bg-white/10 p-8 rounded-xl backdrop-blur-sm flex items-center justify-center text-center h-40">
                <h3 className="text-2xl font-semibold text-primary/90">{req}</h3>
              </div>
            ))}
          </div>
          
          <p className="text-lg text-white/70 max-w-2xl mx-auto italic">
            Final format recommendation will be based on city and market assessment.
          </p>
        </div>
      </section>

      {/* What You Receive */}
      <section className="py-16 md:py-24 px-6">
        <div className="container max-w-[1400px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-display mb-16 text-center">What You Receive As A Partner</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              <div key={index} className="group relative pt-8 border-t hover:border-primary transition-colors duration-300">
                 <span className="absolute top-0 left-0 -translate-y-1/2 bg-background pr-2 text-2xl font-display text-muted-foreground group-hover:text-primary transition-colors">
                   {section.step}
                 </span>
                 <h3 className="text-xl font-medium mb-4">{section.title}</h3>
                 <ul className="space-y-2">
                   {section.items.map((item, i) => (
                     <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                       <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0"></span>
                       <span>{item}</span>
                     </li>
                   ))}
                 </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Overview */}
      <section className="py-16 md:py-24 px-6 bg-secondary/30">
        <div className="container max-w-[1400px] mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-display mb-8">Investment Overview</h2>
          <div className="bg-background rounded-2xl p-8 md:p-12 shadow-sm border border-border/50">
            <p className="text-lg text-foreground mb-6 font-medium">
              Investment depends on store size, city, and final store design.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              A detailed cost structure and business projection will be shared after the discovery discussion.
            </p>
            <div className="border-t pt-8">
               <p className="text-lg font-medium text-primary">
                 Our model focuses on premium margins, repeat customer cycles, and experience led revenue growth.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 text-center">
        <div className="container max-w-[1400px] mx-auto">
          <h2 className="text-3xl md:text-5xl font-display mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Join us in redefining the future of retail. Apply now to become a franchise partner.
          </p>
          <Button 
            size="lg" 
            className="text-lg px-10 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
            onClick={handleApplyClick}
          >
            Apply Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>

          {/* Footer CTA Line */}
          <div className="mt-16 pt-16 border-t max-w-xl mx-auto">
             <p className="text-sm text-muted-foreground mb-2">Questions? Reach us at</p>
             <a href="mailto:info@theconsciouslife.in" className="text-lg font-medium text-foreground hover:text-primary transition-colors">
               info@theconsciouslife.in
             </a>
             <p className="mt-8 text-xl font-display text-primary/80 italic">
               “Let us create the future of conscious retail together.”
             </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Franchise;
