import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
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

const ProcessLine = ({ index }: { index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="absolute left-[31px] md:left-[39px] top-[64px] bottom-0 w-px"
      initial={{ scaleY: 0 }}
      animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
      transition={{ duration: 1.2, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      style={{
        transformOrigin: "top",
        background: "linear-gradient(to bottom, hsl(347 77% 50% / 0.4) 0%, hsl(347 77% 50% / 0.05) 100%)",
      }}
    />
  );
};

const CampaignProcess = () => {
  return (
    <Layout>
      <Seo
        title={"Our Campaign Process | Upbeatz Marcom"}
        description={"See how Upbeatz Marcom plans, launches and optimises marketing campaigns that turn attention into real business enquiries."}
        path="/process"
      />

      {/* Header */}
      <section className="section-padding bg-radial-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-15" />
        <div className="container mx-auto max-w-3xl text-center relative z-10">
          <AnimatedSection>
            <p className="text-primary font-display font-semibold text-label uppercase mb-6 tracking-[0.25em]">Our Process</p>
            <h1 className="text-display-lg font-display font-extrabold mb-6 gradient-text">
              How Our Campaign System Works
            </h1>
            <p className="text-muted-foreground text-body-lg max-w-lg mx-auto">
              A proven 6-stage system designed to turn your ad spend into paying customers.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="section-divider" />

      {/* Stages */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-mesh" />
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="relative">
            <div className="space-y-0">
              {stages.map((stage, i) => (
                <div key={i} className="relative pb-12 md:pb-16 last:pb-0">
                  {/* Animated connecting line */}
                  {i < stages.length - 1 && <ProcessLine index={i} />}

                  <AnimatedSection delay={i * 0.08}>
                    <div className="flex gap-6 md:gap-10">
                      {/* Icon circle */}
                      <div className="shrink-0 relative z-10">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center cursor-default group transition-all duration-500 hover:bg-primary/15 hover:shadow-[0_0_30px_-8px_hsl(var(--primary)/0.3)]"
                        >
                          <stage.icon className="text-primary transition-transform duration-500 group-hover:scale-110" size={28} />
                        </motion.div>
                      </div>

                      {/* Content card */}
                      <div className="glass-card-hover p-7 md:p-9 flex-1 group">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-primary font-display font-extrabold text-label tracking-wider">{stage.num}</span>
                          <h3 className="font-display font-bold text-xl md:text-2xl text-foreground">{stage.title}</h3>
                        </div>
                        <p className="text-muted-foreground text-body-md mb-5 leading-relaxed">{stage.desc}</p>
                        <ul className="space-y-2.5">
                          {stage.details.map((d) => (
                            <li key={d} className="flex items-center gap-3 text-sm text-foreground/80">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 transition-all duration-300 group-hover:shadow-[0_0_6px_hsl(var(--primary)/0.5)]" />
                              {d}
                            </li>
                          ))}
                        </ul>
                        {stage.examples && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                            {stage.examples.map((ex) => (
                              <div key={ex.label} className="p-4 rounded-xl bg-secondary/30 border border-border/15 transition-all duration-500 hover:border-primary/20">
                                <p className="text-label font-semibold text-primary mb-1.5 uppercase tracking-wider">{ex.label}</p>
                                <p className="text-xs text-muted-foreground leading-relaxed">{ex.targeting}</p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </AnimatedSection>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* CTA */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-radial-dark" />
        <div className="container mx-auto max-w-3xl text-center relative z-10">
          <AnimatedSection>
            <div className="glass-card p-12 md:p-20 glow-red border-primary/15 relative overflow-hidden">
              <div className="absolute inset-0"
                style={{ background: "radial-gradient(ellipse at 50% 0%, hsl(347 77% 50% / 0.08) 0%, transparent 60%)" }} />
              <div className="relative z-10">
                <h2 className="text-display-md font-display font-bold mb-5 text-foreground">
                  Ready to Launch Your Campaign?
                </h2>
                <p className="text-muted-foreground mb-10 text-body-lg max-w-md mx-auto">
                  Choose a campaign package and let's start bringing you customers.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link to="/packages" className="btn-primary flex items-center gap-2 group">
                    View Packages
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  <a href="#" className="btn-outline">
                    Book a Strategy Call
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default CampaignProcess;
