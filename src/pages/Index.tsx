import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Megaphone, PenTool, Zap, Target, Users, BarChart3,
  Star, TrendingUp, ArrowRight, CheckCircle2
} from "lucide-react";

const services = [
  { icon: Megaphone, title: "Social Media Marketing", desc: "Strategic campaigns across all major platforms" },
  { icon: PenTool, title: "Content Strategy", desc: "High-converting creative content systems" },
  { icon: Zap, title: "Marketing Automation", desc: "Automated workflows that nurture leads" },
  { icon: Target, title: "Brand Strategy", desc: "Positioning that resonates with your audience" },
  { icon: Users, title: "Customer Acquisition Funnels", desc: "End-to-end conversion pipelines" },
  { icon: BarChart3, title: "Targeted Advertising", desc: "Precision-targeted paid campaigns" },
  { icon: Star, title: "Review Generation", desc: "Build social proof that converts" },
  { icon: TrendingUp, title: "Marketing Analytics", desc: "Data-driven campaign optimization" },
];

const packages = [
  { name: "Local Visibility Starter", price: "₦25K – ₦30K/mo", desc: "Perfect for small businesses starting with paid ads" },
  { name: "Growth Campaign", price: "₦50K/mo", desc: "Multi-platform campaigns with conversion tracking" },
  { name: "Scale Campaign", price: "₦80K – ₦100K/mo", desc: "Full-scale advertising with retargeting & analytics", featured: true },
];

const processSteps = [
  "Product Selection",
  "Creative Production",
  "Targeting Setup",
  "Campaign Launch",
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center section-padding overflow-hidden">
        <div className="absolute inset-0 bg-radial-dark" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.04] blur-[100px] animate-pulse-glow" />
        
        <div className="container mx-auto relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-primary font-display font-semibold text-sm tracking-[0.2em] uppercase mb-6">
              Upbeatz Marcom
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-extrabold leading-[1.05] mb-6 gradient-text">
              TURN ATTENTION<br />INTO <span className="gradient-text-primary">CUSTOMERS</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Upbeatz Marcom helps businesses grow through paid social campaigns, customer acquisition systems, and marketing strategies designed to turn visibility into sales.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/packages"
                className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-display font-bold text-sm tracking-wide transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.5)] hover:scale-105 flex items-center gap-2"
              >
                Get More Customers <ArrowRight size={18} />
              </Link>
              <Link
                to="/packages"
                className="px-8 py-4 rounded-lg border border-border/50 text-foreground font-display font-semibold text-sm tracking-wide transition-all duration-300 hover:border-primary/40 hover:bg-primary/5"
              >
                View Campaign Packages
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem */}
      <section className="section-padding bg-radial-center">
        <div className="container mx-auto max-w-3xl text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-foreground">
              Most businesses post online but struggle to turn attention into revenue.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Posting content alone does not create predictable customer growth. Businesses need structured campaigns, precision targeting, and conversion systems that turn clicks into customers.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Solution */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-foreground">
                We Build Campaigns That <span className="gradient-text-primary">Bring Customers</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                Upbeatz builds marketing systems that deliver measurable business growth.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {["Increase visibility across platforms", "Attract the right audience with precision targeting", "Generate qualified inquiries consistently", "Convert visitors into paying buyers"].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="glass-card p-6 flex items-start gap-4">
                  <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={20} />
                  <p className="text-foreground text-sm font-medium">{item}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-radial-center">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-primary font-display font-semibold text-sm tracking-[0.15em] uppercase mb-3">What We Do</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Our Core Services</h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((svc, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="glass-card-hover p-6 group cursor-default h-full">
                  <svc.icon className="text-primary mb-4 transition-transform duration-300 group-hover:scale-110" size={28} />
                  <h3 className="font-display font-semibold text-sm mb-2 text-foreground">{svc.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{svc.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Package Preview */}
      <section className="section-padding">
        <div className="container mx-auto max-w-5xl">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-primary font-display font-semibold text-sm tracking-[0.15em] uppercase mb-3">Pricing</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Campaign Packages</h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className={`glass-card p-8 text-center h-full flex flex-col ${pkg.featured ? "glow-red border-primary/30 scale-[1.02]" : ""}`}>
                  {pkg.featured && (
                    <span className="text-[10px] font-display font-bold tracking-[0.2em] uppercase text-primary mb-4">Most Popular</span>
                  )}
                  <h3 className="font-display font-bold text-lg mb-2 text-foreground">{pkg.name}</h3>
                  <p className="text-primary font-display font-bold text-2xl mb-3">{pkg.price}</p>
                  <p className="text-muted-foreground text-sm mb-6 flex-1">{pkg.desc}</p>
                  <Link
                    to="/packages"
                    className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 ${
                      pkg.featured
                        ? "bg-primary text-primary-foreground hover:shadow-[0_0_20px_-3px_hsl(var(--primary)/0.5)]"
                        : "border border-border/50 text-foreground hover:border-primary/40"
                    }`}
                  >
                    Learn More
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.3}>
            <div className="text-center mt-10">
              <Link to="/packages" className="text-primary font-display font-semibold text-sm hover:underline inline-flex items-center gap-2">
                View Full Campaign Packages <ArrowRight size={16} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Process Preview */}
      <section className="section-padding bg-radial-center">
        <div className="container mx-auto max-w-3xl text-center">
          <AnimatedSection>
            <p className="text-primary font-display font-semibold text-sm tracking-[0.15em] uppercase mb-3">Our System</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-foreground">The Upbeatz Campaign System</h2>
          </AnimatedSection>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {processSteps.map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-display font-bold text-xs">
                    {i + 1}
                  </div>
                  <span className="text-foreground text-sm font-medium whitespace-nowrap">{step}</span>
                  {i < processSteps.length - 1 && <ArrowRight className="text-muted-foreground hidden sm:block" size={16} />}
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.4}>
            <Link to="/process" className="inline-flex items-center gap-2 mt-10 text-primary font-display font-semibold text-sm hover:underline">
              See Our Campaign Process <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="section-padding">
        <div className="container mx-auto max-w-3xl text-center">
          <AnimatedSection>
            <div className="glass-card p-12 md:p-16 glow-red border-primary/20">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-foreground">
                Ready to Grow Your Business?
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Let's build a campaign that brings you customers.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#"
                  className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-display font-bold text-sm tracking-wide transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.5)] hover:scale-105"
                >
                  Book a Strategy Call
                </a>
                <a
                  href="mailto:hello@upbeatzmarcom.com"
                  className="px-8 py-4 rounded-lg border border-border/50 text-foreground font-display font-semibold text-sm transition-all duration-300 hover:border-primary/40"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
