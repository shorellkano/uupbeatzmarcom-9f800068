import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Megaphone, PenTool, Zap, Target, Users, BarChart3,
  Star, TrendingUp, ArrowRight, CheckCircle2, ArrowUpRight
} from "lucide-react";

const services = [
  { icon: Megaphone, title: "Social Media Marketing", desc: "Strategic campaigns across all major platforms" },
  { icon: PenTool, title: "Content Strategy", desc: "High-converting creative content systems" },
  { icon: Zap, title: "Marketing Automation", desc: "Automated workflows that nurture leads" },
  { icon: Target, title: "Brand Strategy", desc: "Positioning that resonates with your audience" },
  { icon: Users, title: "Acquisition Funnels", desc: "End-to-end conversion pipelines" },
  { icon: BarChart3, title: "Targeted Advertising", desc: "Precision-targeted paid campaigns" },
  { icon: Star, title: "Review Generation", desc: "Build social proof that converts" },
  { icon: TrendingUp, title: "Marketing Analytics", desc: "Data-driven campaign optimization" },
];

const packages = [
  { name: "Local Visibility Starter", price: "₦25K–₦30K", desc: "Perfect for small businesses starting with paid ads" },
  { name: "Growth Campaign", price: "₦50K", desc: "Multi-platform campaigns with conversion tracking" },
  { name: "Scale Campaign", price: "₦80K–₦100K", desc: "Full-scale advertising with retargeting & analytics", featured: true },
];

const FloatingMetric = ({ label, value, delay, className }: { label: string; value: string; delay: number; className: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
    className={`metric-badge absolute ${className}`}
  >
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: delay * 2 }}
    >
      <p className="text-primary font-display font-extrabold text-lg leading-none">{value}</p>
      <p className="text-muted-foreground text-[10px] mt-1 uppercase tracking-wider">{label}</p>
    </motion.div>
  </motion.div>
);

const Index = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <Layout>
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full animate-pulse-glow"
            style={{ background: "radial-gradient(ellipse, hsl(347 77% 50% / 0.08) 0%, transparent 60%)" }} />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px]"
          >
            <div className="absolute top-0 left-1/2 w-32 h-32 rounded-full"
              style={{ background: "radial-gradient(circle, hsl(350 90% 68% / 0.06) 0%, transparent 70%)" }} />
            <div className="absolute bottom-0 right-0 w-24 h-24 rounded-full"
              style={{ background: "radial-gradient(circle, hsl(347 77% 50% / 0.04) 0%, transparent 70%)" }} />
          </motion.div>
          <div className="absolute inset-0 grid-overlay opacity-20" />
        </div>

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="container mx-auto relative z-10 text-center max-w-5xl px-6 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-primary font-display font-semibold text-label uppercase mb-8 tracking-[0.25em]">
              Marketing & Communication
            </p>
            <h1 className="text-display-xl font-display font-extrabold mb-8 break-words">
              <span className="gradient-text">TURN ATTENTION</span>
              <br />
              <span className="gradient-text">INTO </span>
              <span className="gradient-text-primary">CUSTOMERS</span>
            </h1>
            <p className="text-muted-foreground text-body-lg max-w-2xl mx-auto mb-12 leading-relaxed">
              Upbeatz Marcom helps businesses grow through paid social campaigns, customer acquisition systems, and marketing strategies designed to turn visibility into sales.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/packages" className="btn-primary flex items-center gap-2.5 group">
                Get More Customers
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link to="/packages" className="btn-outline flex items-center gap-2">
                View Campaign Packages
              </Link>
            </div>
          </motion.div>

          {/* Floating metrics */}
          <div className="hidden lg:block">
            <FloatingMetric label="Avg. ROAS" value="4.2×" delay={1} className="top-0 -left-10" />
            <FloatingMetric label="Leads Generated" value="12K+" delay={1.3} className="top-16 -right-8" />
            <FloatingMetric label="Campaign CTR" value="3.8%" delay={1.6} className="bottom-20 -left-4" />
          </div>
        </motion.div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40" style={{ background: "linear-gradient(to top, hsl(0 0% 2%) 0%, transparent 100%)" }} />
      </section>

      <div className="section-divider" />

      {/* Problem */}
      <section className="section-padding bg-mesh relative">
        <div className="container mx-auto max-w-3xl text-center relative z-10">
          <AnimatedSection>
            <p className="text-primary font-display font-semibold text-label uppercase mb-6 tracking-[0.2em]">The Problem</p>
            <h2 className="text-display-md font-display font-bold mb-8 text-foreground leading-tight">
              Most businesses post online but struggle to turn attention into revenue.
            </h2>
            <p className="text-muted-foreground text-body-lg leading-relaxed max-w-xl mx-auto">
              Posting content alone does not create predictable customer growth. Businesses need structured campaigns, precision targeting, and conversion systems that turn clicks into customers.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="section-divider" />

      {/* Solution */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-radial-center" />
        <div className="container mx-auto max-w-4xl relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-primary font-display font-semibold text-label uppercase mb-4 tracking-[0.2em]">The Solution</p>
              <h2 className="text-display-md font-display font-bold text-foreground">
                We Build Campaigns That <span className="gradient-text-primary">Bring Customers</span>
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              "Increase visibility across platforms",
              "Attract the right audience with precision targeting",
              "Generate qualified inquiries consistently",
              "Convert visitors into paying buyers",
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="glass-card-hover p-6 flex items-start gap-4 group cursor-default">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 transition-all duration-500 group-hover:bg-primary/20 group-hover:scale-110">
                    <CheckCircle2 className="text-primary" size={16} />
                  </div>
                  <p className="text-foreground/90 text-sm font-medium leading-relaxed">{item}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Services */}
      <section className="section-padding bg-mesh relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <div className="text-center mb-20">
              <p className="text-primary font-display font-semibold text-label uppercase mb-4 tracking-[0.2em]">What We Do</p>
              <h2 className="text-display-md font-display font-bold text-foreground">Our Core Services</h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((svc, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="glass-card-hover p-7 group cursor-default h-full relative overflow-hidden">
                  {/* Hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{ background: "radial-gradient(circle at 50% 0%, hsl(347 77% 50% / 0.06) 0%, transparent 60%)" }} />
                  <div className="relative z-10">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.3)]">
                      <svc.icon className="text-primary transition-transform duration-500 group-hover:scale-110" size={22} />
                    </div>
                    <h3 className="font-display font-semibold text-sm mb-2 text-foreground">{svc.title}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">{svc.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Package Preview */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-radial-center" />
        <div className="container mx-auto max-w-5xl relative z-10">
          <AnimatedSection>
            <div className="text-center mb-20">
              <p className="text-primary font-display font-semibold text-label uppercase mb-4 tracking-[0.2em]">Pricing</p>
              <h2 className="text-display-md font-display font-bold text-foreground">Campaign Packages</h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {packages.map((pkg, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className={`glass-card p-8 text-center h-full flex flex-col card-lift relative overflow-hidden ${
                  pkg.featured ? "glow-red border-primary/20 md:scale-[1.05] z-10" : ""
                }`}>
                  {pkg.featured && (
                    <>
                      <div className="absolute inset-0"
                        style={{ background: "radial-gradient(circle at 50% 0%, hsl(347 77% 50% / 0.08) 0%, transparent 50%)" }} />
                      <span className="relative z-10 text-label font-display font-bold uppercase text-primary mb-5 tracking-[0.2em]">Most Popular</span>
                    </>
                  )}
                  <div className="relative z-10">
                    <h3 className="font-display font-bold text-lg mb-3 text-foreground">{pkg.name}</h3>
                    <p className="gradient-text-primary font-display font-extrabold text-3xl mb-4">{pkg.price}<span className="text-muted-foreground text-xs font-normal">/mo</span></p>
                    <p className="text-muted-foreground text-sm mb-8">{pkg.desc}</p>
                    <Link
                      to="/packages"
                      className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-500 ${
                        pkg.featured
                          ? "btn-primary !inline-flex"
                          : "btn-outline !inline-flex"
                      }`}
                    >
                      Learn More <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.3}>
            <div className="text-center mt-12">
              <Link to="/packages" className="text-primary font-display font-semibold text-sm hover:underline inline-flex items-center gap-2 group">
                View Full Campaign Packages
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="section-divider" />

      {/* Process Preview */}
      <section className="section-padding bg-mesh relative">
        <div className="container mx-auto max-w-3xl text-center relative z-10">
          <AnimatedSection>
            <p className="text-primary font-display font-semibold text-label uppercase mb-4 tracking-[0.2em]">Our System</p>
            <h2 className="text-display-md font-display font-bold mb-16 text-foreground">The Upbeatz Campaign System</h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Product Selection", "Creative Production", "Targeting Setup", "Campaign Launch"].map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="glass-card-hover p-5 text-center group cursor-default">
                  <div className="w-10 h-10 mx-auto rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-3 transition-all duration-500 group-hover:bg-primary/20 group-hover:shadow-[0_0_15px_-3px_hsl(var(--primary)/0.3)]">
                    <span className="text-primary font-display font-bold text-xs">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <p className="text-foreground text-xs font-display font-semibold">{step}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.4}>
            <Link to="/process" className="inline-flex items-center gap-2 mt-12 text-primary font-display font-semibold text-sm hover:underline group">
              See Our Campaign Process
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <div className="section-divider" />

      {/* CTA */}
      <section id="contact" className="section-padding relative">
        <div className="absolute inset-0 bg-radial-dark" />
        <div className="container mx-auto max-w-3xl text-center relative z-10">
          <AnimatedSection>
            <div className="glass-card p-12 md:p-20 glow-red border-primary/15 relative overflow-hidden">
              <div className="absolute inset-0"
                style={{ background: "radial-gradient(ellipse at 50% 0%, hsl(347 77% 50% / 0.08) 0%, transparent 60%)" }} />
              <div className="relative z-10">
                <h2 className="text-display-md font-display font-bold mb-5 text-foreground">
                  Ready to Grow Your Business?
                </h2>
                <p className="text-muted-foreground mb-10 text-body-lg max-w-md mx-auto">
                  Let's build a campaign that brings you customers.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a href="#" className="btn-primary flex items-center gap-2 group">
                    Book a Strategy Call
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                  <a href="mailto:hello@upbeatzmarcom.com" className="btn-outline">
                    Contact Us
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

export default Index;
