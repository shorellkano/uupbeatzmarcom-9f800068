import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { Package, Video, Target, Rocket, TrendingUp, RefreshCw, ArrowRight } from "lucide-react";

const stages = [
  {
    icon: Package,
    num: "01",
    title: "Product Selection",
    desc: "We identify the best product to advertise based on your business data.",
    details: ["Best selling items", "Highest margin products", "High demand products"],
  },
  {
    icon: Video,
    num: "02",
    title: "Creative Development",
    desc: "Our team produces scroll-stopping creative assets for your campaigns.",
    details: ["Product ad designs", "Short video creatives", "Product highlight visuals"],
  },
  {
    icon: Target,
    num: "03",
    title: "Audience Targeting",
    desc: "We build precision audiences to reach the people most likely to buy.",
    details: ["Demographics & interests", "Location targeting", "Custom & lookalike audiences"],
    examples: [
      { label: "Fashion Sellers", targeting: "Women · Age 18–40 · Lagos · Fashion & Beauty" },
      { label: "Real Estate", targeting: "Location · Income level · Property interest groups" },
    ],
  },
  {
    icon: Rocket,
    num: "04",
    title: "Campaign Launch",
    desc: "Ads go live, directing customers to your product pages or WhatsApp.",
    details: ["Storvo product pages", "WhatsApp conversations", "Landing pages"],
  },
  {
    icon: TrendingUp,
    num: "05",
    title: "Optimization",
    desc: "Winning campaigns are scaled. Creatives, audiences, and targeting are continuously optimized.",
    details: ["A/B testing creatives", "Budget reallocation", "Performance monitoring"],
  },
  {
    icon: RefreshCw,
    num: "06",
    title: "Retargeting",
    desc: "Visitors who showed interest but didn't purchase are retargeted with follow-up ads, dramatically improving conversion.",
    details: ["Cart abandonment ads", "Product view retargeting", "Lookalike expansion"],
  },
];

const CampaignProcess = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="section-padding bg-radial-dark">
        <div className="container mx-auto max-w-3xl text-center">
          <AnimatedSection>
            <p className="text-primary font-display font-semibold text-sm tracking-[0.2em] uppercase mb-4">Our Process</p>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold mb-4 gradient-text">
              How Our Campaign System Works
            </h1>
            <p className="text-muted-foreground text-lg">
              A proven 6-stage system designed to turn your ad spend into paying customers.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Stages */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent hidden md:block" />

            <div className="space-y-12 md:space-y-16">
              {stages.map((stage, i) => (
                <AnimatedSection key={i} delay={i * 0.08}>
                  <div className="flex gap-6 md:gap-10">
                    {/* Number circle */}
                    <div className="shrink-0 relative z-10">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                        <stage.icon className="text-primary" size={24} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="glass-card p-6 md:p-8 flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-primary font-display font-extrabold text-sm">{stage.num}</span>
                        <h3 className="font-display font-bold text-xl text-foreground">{stage.title}</h3>
                      </div>
                      <p className="text-muted-foreground mb-4">{stage.desc}</p>
                      <ul className="space-y-2 mb-4">
                        {stage.details.map((d) => (
                          <li key={d} className="flex items-center gap-2 text-sm text-foreground/80">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            {d}
                          </li>
                        ))}
                      </ul>
                      {stage.examples && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                          {stage.examples.map((ex) => (
                            <div key={ex.label} className="p-3 rounded-lg bg-secondary/50">
                              <p className="text-xs font-semibold text-primary mb-1">{ex.label}</p>
                              <p className="text-xs text-muted-foreground">{ex.targeting}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl text-center">
          <AnimatedSection>
            <div className="glass-card p-12 md:p-16 glow-red border-primary/20">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-foreground">
                Ready to Launch Your Campaign?
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Choose a campaign package and let's start bringing you customers.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/packages"
                  className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-display font-bold text-sm tracking-wide transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.5)] hover:scale-105 flex items-center gap-2"
                >
                  View Packages <ArrowRight size={18} />
                </Link>
                <a href="#" className="px-8 py-4 rounded-lg border border-border/50 text-foreground font-display font-semibold text-sm transition-all duration-300 hover:border-primary/40">
                  Book a Strategy Call
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default CampaignProcess;
