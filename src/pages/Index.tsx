import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Megaphone, PenTool, Zap, Target, Users, BarChart3,
  Globe, ShoppingCart, LayoutDashboard, Cpu, Building2, TrendingUp, Lightbulb,
  ArrowRight, CheckCircle2, ArrowUpRight, Sparkles
} from "lucide-react";

const WA = (msg: string) => `https://wa.me/2349097927111?text=${encodeURIComponent(msg)}`;
const START_PROJECT = WA("Hi Upbeatz Marcom, I'd like to start a project.");

const audiences = [
  {
    icon: Building2,
    title: "Small Businesses",
    desc: "Build your digital foundation.",
    items: ["Websites", "Branding", "Ecommerce", "Customer acquisition"],
  },
  {
    icon: TrendingUp,
    title: "Growing Businesses",
    desc: "Create systems that support growth.",
    items: ["Marketing strategy", "Automation", "CRM", "Lead generation"],
  },
  {
    icon: Lightbulb,
    title: "Organisations & Digital Ideas",
    desc: "Bring bigger ideas to life.",
    items: ["Apps", "Platforms", "Custom solutions"],
  },
];

const builds = [
  { icon: Globe, title: "Websites", desc: "Professional websites designed to build trust and generate enquiries." },
  { icon: ShoppingCart, title: "Ecommerce", desc: "Online stores that help businesses sell beyond social media." },
  { icon: LayoutDashboard, title: "Apps & Digital Platforms", desc: "Turn ideas into working digital products." },
  { icon: Cpu, title: "Business Systems", desc: "CRM, automation and internal platforms." },
];

const growth = [
  { icon: Megaphone, title: "Social Media Management", desc: "Consistent presence that builds audience and trust." },
  { icon: PenTool, title: "Content Strategy", desc: "Creative built to convert, not just to post." },
  { icon: Target, title: "Paid Advertising", desc: "Precision-targeted campaigns across Meta and Google." },
  { icon: Users, title: "Customer Acquisition Funnels", desc: "End-to-end pipelines from click to customer." },
  { icon: Zap, title: "AI Automation", desc: "Automated follow-up, support and workflows." },
  { icon: BarChart3, title: "Analytics", desc: "Data-driven optimisation and clear reporting." },
];

const systemSteps = [
  { n: "01", title: "Discover", desc: "Understand the business, audience and objectives." },
  { n: "02", title: "Build", desc: "Create the right digital foundation." },
  { n: "03", title: "Launch", desc: "Connect the business with the right audience." },
  { n: "04", title: "Scale", desc: "Use data, automation and optimisation to improve growth." },
];

const work = [
  { name: "Storvo", category: "Ecommerce Platform", accent: "265 85% 62%" },
  { name: "ZebraLink", category: "Digital Business Card Web App", accent: "45 93% 58%" },
  { name: "Upbeatz Hub", category: "Client Management Platform", accent: "347 77% 50%" },
  { name: "Client Websites", category: "Corporate, hospitality and service websites", accent: "205 90% 55%" },
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
              Digital Growth &amp; Technology Partner
            </p>
            <h1 className="text-[clamp(1.75rem,6.5vw,7rem)] font-display font-extrabold mb-8 leading-[1.0] tracking-[-0.03em]">
              <span className="gradient-text block">BUILD DIGITAL EXPERIENCES.</span>
              <span className="gradient-text">GROW </span>
              <span className="gradient-text-primary">REAL BUSINESSES.</span>
            </h1>
            <p className="text-muted-foreground text-body-lg max-w-2xl mx-auto mb-12 leading-relaxed">
              Upbeatz Marcom helps businesses create powerful digital solutions, attract customers and scale online through technology, AI and performance marketing.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={START_PROJECT} target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center gap-2.5 group">
                Start Your Project
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <Link to="/work" className="btn-outline flex items-center gap-2">
                Explore Our Work
              </Link>
            </div>
          </motion.div>

          <div className="hidden lg:block">
            <FloatingMetric label="Projects Delivered" value="20+" delay={1} className="top-0 -left-10" />
            <FloatingMetric label="Avg. ROAS" value="4.2×" delay={1.3} className="top-16 -right-8" />
            <FloatingMetric label="Leads Generated" value="12K+" delay={1.6} className="bottom-20 -left-4" />
          </div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-40" style={{ background: "linear-gradient(to top, hsl(0 0% 2%) 0%, transparent 100%)" }} />
      </section>

      <div className="section-divider" />

      {/* Who We Help */}
      <section className="section-padding bg-mesh relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-primary font-display font-semibold text-label uppercase mb-4 tracking-[0.2em]">Who We Help</p>
              <h2 className="text-display-md font-display font-bold text-foreground">
                Built For Every Stage of <span className="gradient-text-primary">Growth</span>
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {audiences.map((a, i) => (
              <AnimatedSection key={a.title} delay={i * 0.08}>
                <div className="glass-card-hover p-8 h-full group relative overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{ background: "radial-gradient(circle at 50% 0%, hsl(347 77% 50% / 0.06) 0%, transparent 60%)" }} />
                  <div className="relative z-10">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-primary/20">
                      <a.icon className="text-primary" size={22} />
                    </div>
                    <h3 className="font-display font-bold text-lg mb-2 text-foreground">{a.title}</h3>
                    <p className="text-muted-foreground text-sm mb-6">{a.desc}</p>
                    <ul className="space-y-2.5">
                      {a.items.map((item) => (
                        <li key={item} className="flex items-center gap-2.5 text-sm text-foreground/85">
                          <CheckCircle2 className="text-primary shrink-0" size={14} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* What We Build */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-radial-center" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-primary font-display font-semibold text-label uppercase mb-4 tracking-[0.2em]">Technology</p>
              <h2 className="text-display-md font-display font-bold text-foreground">What We Build</h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {builds.map((b, i) => (
              <AnimatedSection key={b.title} delay={i * 0.06}>
                <div className="glass-card-hover p-7 h-full group cursor-default relative overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{ background: "radial-gradient(circle at 50% 0%, hsl(347 77% 50% / 0.06) 0%, transparent 60%)" }} />
                  <div className="relative z-10">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.3)]">
                      <b.icon className="text-primary transition-transform duration-500 group-hover:scale-110" size={22} />
                    </div>
                    <h3 className="font-display font-semibold text-sm mb-2 text-foreground uppercase tracking-wide">{b.title}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.3}>
            <div className="text-center mt-12">
              <Link to="/websites" className="text-primary font-display font-semibold text-sm hover:underline inline-flex items-center gap-2 group">
                Explore Website &amp; Platform Development
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="section-divider" />

      {/* Growth Marketing */}
      <section className="section-padding bg-mesh relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <p className="text-primary font-display font-semibold text-label uppercase mb-4 tracking-[0.2em]">Growth Marketing</p>
              <h2 className="text-display-md font-display font-bold text-foreground mb-6">
                Technology Alone Doesn't Bring <span className="gradient-text-primary">Customers</span>
              </h2>
              <p className="text-muted-foreground text-body-lg leading-relaxed">
                A website or platform is only the foundation. We pair what we build with customer acquisition systems that keep enquiries and sales coming in.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {growth.map((g, i) => (
              <AnimatedSection key={g.title} delay={i * 0.05}>
                <div className="glass-card-hover p-7 h-full group cursor-default">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-primary/20">
                    <g.icon className="text-primary" size={22} />
                  </div>
                  <h3 className="font-display font-semibold text-sm mb-2 text-foreground">{g.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{g.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.3}>
            <div className="text-center mt-12">
              <Link to="/packages" className="text-primary font-display font-semibold text-sm hover:underline inline-flex items-center gap-2 group">
                View Campaign Packages
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="section-divider" />

      {/* Growth System */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-radial-center" />
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <AnimatedSection>
            <p className="text-primary font-display font-semibold text-label uppercase mb-4 tracking-[0.2em]">Our System</p>
            <h2 className="text-display-md font-display font-bold mb-16 text-foreground">The Upbeatz Growth System</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {systemSteps.map((step, i) => (
              <AnimatedSection key={step.n} delay={i * 0.1}>
                <div className="glass-card-hover p-6 text-center group cursor-default h-full">
                  <div className="w-10 h-10 mx-auto rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 transition-all duration-500 group-hover:bg-primary/20 group-hover:shadow-[0_0_15px_-3px_hsl(var(--primary)/0.3)]">
                    <span className="text-primary font-display font-bold text-xs">{step.n}</span>
                  </div>
                  <p className="text-foreground text-sm font-display font-semibold uppercase tracking-wide mb-2">{step.title}</p>
                  <p className="text-muted-foreground text-xs leading-relaxed">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.4}>
            <Link to="/process" className="inline-flex items-center gap-2 mt-12 text-primary font-display font-semibold text-sm hover:underline group">
              See How We Work
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <div className="section-divider" />

      {/* Selected Work */}
      <section className="section-padding bg-mesh relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-primary font-display font-semibold text-label uppercase mb-4 tracking-[0.2em]">Portfolio</p>
              <h2 className="text-display-md font-display font-bold text-foreground">Selected Work</h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {work.map((p, i) => (
              <AnimatedSection key={p.name} delay={i * 0.08}>
                <Link to="/work" className="glass-card-hover p-8 h-full group block relative overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{ background: `radial-gradient(circle at 20% 0%, hsl(${p.accent} / 0.12) 0%, transparent 60%)` }} />
                  <div className="relative z-10 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display font-bold text-xl mb-2 text-foreground">{p.name}</h3>
                      <p className="text-muted-foreground text-sm">{p.category}</p>
                    </div>
                    <ArrowUpRight className="text-primary shrink-0 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" size={20} />
                  </div>
                  <div className="relative z-10 mt-6 h-1 rounded-full" style={{ background: `linear-gradient(90deg, hsl(${p.accent} / 0.6), transparent)` }} />
                </Link>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.3}>
            <div className="text-center mt-12">
              <Link to="/work" className="btn-outline inline-flex items-center gap-2">
                View All Work
                <ArrowRight size={14} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="section-divider" />

      {/* Storvo Partnership */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-radial-center" />
        <div className="container mx-auto max-w-4xl relative z-10">
          <AnimatedSection>
            <div className="glass-card p-10 md:p-16 border-primary/15 relative overflow-hidden">
              <div className="absolute inset-0"
                style={{ background: "radial-gradient(ellipse at 100% 0%, hsl(265 85% 62% / 0.10) 0%, transparent 60%)" }} />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5">
                  <Sparkles className="text-primary" size={14} />
                  <span className="text-label uppercase tracking-[0.2em] font-display font-semibold text-primary">Partnership</span>
                </div>
                <h2 className="text-display-md font-display font-bold mb-6 text-foreground">
                  Built Your Store With <span className="gradient-text-primary">Storvo</span>?
                </h2>
                <p className="text-muted-foreground text-body-lg leading-relaxed mb-8 max-w-2xl">
                  Storvo helps entrepreneurs create professional online stores quickly and easily. Through our partnership with Storvo, Upbeatz helps merchants build their brand, attract customers and grow sales.
                </p>
                <div className="glass-card p-6 mb-8 max-w-md">
                  <p className="text-foreground font-display font-semibold text-sm mb-1">Storvo builds the store.</p>
                  <p className="text-primary font-display font-semibold text-sm">Upbeatz Marcom helps businesses grow.</p>
                </div>
                <Link to="/storvo" className="btn-primary inline-flex items-center gap-2 group">
                  Explore Storvo Partnership
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="section-divider" />

      {/* Final CTA */}
      <section id="contact" className="section-padding relative">
        <div className="absolute inset-0 bg-radial-dark" />
        <div className="container mx-auto max-w-3xl text-center relative z-10">
          <AnimatedSection>
            <div className="glass-card p-12 md:p-20 glow-red border-primary/15 relative overflow-hidden">
              <div className="absolute inset-0"
                style={{ background: "radial-gradient(ellipse at 50% 0%, hsl(347 77% 50% / 0.08) 0%, transparent 60%)" }} />
              <div className="relative z-10">
                <h2 className="text-display-md font-display font-bold mb-5 text-foreground">
                  Ready to Build Something Bigger?
                </h2>
                <p className="text-muted-foreground mb-10 text-body-lg max-w-xl mx-auto">
                  Whether you need a website, digital platform or complete growth strategy, Upbeatz Marcom helps turn ideas into scalable digital solutions.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a href={START_PROJECT} target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center gap-2 group">
                    Start Your Project
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
