import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight, ArrowUpRight, Globe, ShoppingCart, LayoutDashboard, Cpu,
  Building2, TrendingUp, Lightbulb, Target, MousePointerClick, Rocket,
  Megaphone, CheckCircle2, MessageCircle, XCircle, Sparkles
} from "lucide-react";

const WA = (msg: string) => `https://wa.me/2348027244825?text=${encodeURIComponent(msg)}`;

const problems = [
  "No professional website",
  "Customers cannot easily understand their services",
  "Competitors look more credible online",
  "Social media is doing all the selling",
  "Customers struggle to contact or enquire",
];

const buildCards = [
  { icon: Globe, title: "Business Websites", desc: "Professional websites for companies, service providers and organisations.", items: ["Corporate websites", "Service websites", "Landing pages"] },
  { icon: ShoppingCart, title: "Ecommerce Websites", desc: "Online stores designed to help businesses sell products beyond social media.", items: ["Product catalogues", "Online ordering", "Payment integration"] },
  { icon: LayoutDashboard, title: "Web Applications", desc: "Digital products and platforms built around business ideas.", items: ["Customer portals", "Dashboards", "Digital tools"] },
  { icon: Cpu, title: "Custom Digital Solutions", desc: "Technology solutions designed around specific business needs.", items: ["CRM systems", "Automation", "Internal business platforms"] },
];

const audiences = [
  { icon: Building2, title: "Small Businesses", desc: "Build credibility and attract customers online.", examples: "Restaurants, schools, professionals, local businesses." },
  { icon: TrendingUp, title: "Growing Businesses", desc: "Create systems that support growth.", examples: "Ecommerce brands, service companies, organisations." },
  { icon: Lightbulb, title: "Ideas & Digital Products", desc: "Turn concepts into working platforms.", examples: "Apps, marketplaces, SaaS products." },
];

const projects = [
  { name: "ZebraLink", url: "zebralinkcard.com", category: "Digital Business Card Web App", desc: "A digital networking platform helping professionals and businesses share their identity through QR and NFC technology.", accent: "45 93% 58%" },
  { name: "M&M Group", url: "mandmgroup.ng", category: "Corporate Website", desc: "A professional corporate website designed to showcase business services and build credibility.", accent: "32 60% 55%" },
  { name: "Rowe Park Pool", url: "roweparkpool.mandmgroup.ng", category: "Sports & Leisure Website", desc: "A digital platform showcasing swimming programmes, facilities, events and customer experiences.", accent: "205 90% 55%" },
  { name: "Relish Lounge", url: "relishlounge.com.ng", category: "Restaurant & Hospitality Website", desc: "A modern hospitality website designed to showcase the restaurant experience, menu and brand.", accent: "30 95% 55%" },
  { name: "Puretem Nigeria", url: "puretem.com.ng", category: "Corporate Services Website", desc: "A professional website built to communicate services and strengthen online presence.", accent: "48 95% 55%" },
  { name: "Felicitous Travels", url: "travelwithfelicitous.com.ng", category: "Travel Website", desc: "A travel platform designed to showcase destinations and make customer enquiries easier.", accent: "40 70% 55%" },
  { name: "Relief Care Support", url: "reliefcaresupport.com.ng", category: "Healthcare Services Website", desc: "A trusted service website designed to communicate care solutions and connect families with support.", accent: "225 80% 58%" },
  { name: "Safe Haven", url: "safehaven.host", category: "Hosting Platform Web App", desc: "A hosting platform designed around secure digital infrastructure and user ownership.", accent: "152 85% 50%" },
  { name: "Storvo", url: "storvo.co", category: "Ecommerce Platform", desc: "An ecommerce platform helping entrepreneurs create online stores and sell beyond social media conversations.", accent: "265 85% 62%" },
];

const whyCards = [
  { icon: Target, title: "Strategy First", desc: "We understand your business goals before designing." },
  { icon: MousePointerClick, title: "Conversion Focused", desc: "Your website is designed to generate enquiries and opportunities." },
  { icon: Rocket, title: "Built for Growth", desc: "Your website can evolve as your business grows." },
  { icon: Megaphone, title: "Marketing Experience", desc: "Unlike traditional developers, we understand how websites connect with customer acquisition." },
];

const pricing = [
  { name: "Starter Website", price: "From \u20A6250,000", desc: "For businesses creating their first professional online presence.", features: ["Professional design", "Mobile responsive", "Essential business pages", "Contact forms", "WhatsApp integration"] },
  { name: "Growth Website", price: "From \u20A6500,000", desc: "For businesses wanting stronger customer acquisition.", features: ["Custom design", "More pages", "Lead capture", "Analytics integration", "Marketing integrations"], featured: true },
  { name: "Custom Digital Solutions", price: "Custom Quote", desc: "For ambitious platforms built around your business model.", features: ["Web applications", "Ecommerce platforms", "CRM systems", "Business platforms"] },
];

const addOns = [
  "Social media management",
  "Content strategy",
  "Paid advertising",
  "Customer acquisition campaigns",
  "AI automation",
];

const HeroVisual = () => (
  <div className="relative w-full max-w-3xl mx-auto mt-16 md:mt-20" aria-hidden="true">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="glass-card glow-red-subtle p-4 md:p-6"
    >
      <div className="flex items-center gap-2 mb-4">
        <span className="w-2.5 h-2.5 rounded-full bg-primary/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
        <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/20" />
        <div className="ml-3 h-5 flex-1 rounded-md bg-foreground/[0.04] border border-border/30" />
      </div>
      <div className="grid grid-cols-3 gap-3 md:gap-4">
        <div className="col-span-2 space-y-3">
          <div className="h-20 md:h-28 rounded-xl border border-border/30"
            style={{ background: "linear-gradient(135deg, hsl(347 77% 50% / 0.18), transparent 70%)" }} />
          <div className="grid grid-cols-3 gap-2 md:gap-3">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
                className="h-10 md:h-14 rounded-lg bg-foreground/[0.04] border border-border/30"
              />
            ))}
          </div>
          <div className="h-2 rounded-full bg-foreground/10 w-3/4" />
          <div className="h-2 rounded-full bg-foreground/[0.06] w-1/2" />
        </div>
        <div className="space-y-3">
          <div className="h-16 md:h-20 rounded-xl border border-primary/25"
            style={{ background: "linear-gradient(160deg, hsl(350 90% 68% / 0.14), transparent)" }} />
          <div className="h-10 md:h-12 rounded-lg bg-foreground/[0.04] border border-border/30" />
          <div className="h-16 md:h-24 rounded-xl bg-foreground/[0.03] border border-border/30" />
        </div>
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="hidden sm:block absolute -bottom-10 -right-2 md:-right-10 w-24 md:w-32"
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="glass-card p-2 md:p-3 !rounded-3xl"
      >
        <div className="h-32 md:h-44 rounded-2xl border border-border/30 p-2 space-y-2"
          style={{ background: "linear-gradient(180deg, hsl(347 77% 50% / 0.12), transparent 60%)" }}>
          <div className="h-3 w-8 rounded-full bg-primary/50" />
          <div className="h-2 w-full rounded-full bg-foreground/10" />
          <div className="h-2 w-2/3 rounded-full bg-foreground/[0.07]" />
          <div className="h-10 md:h-16 rounded-lg bg-foreground/[0.05] border border-border/30" />
          <div className="h-4 rounded-md bg-primary/40" />
        </div>
      </motion.div>
    </motion.div>
  </div>
);

const Websites = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <Layout>
      <section ref={heroRef} className="relative min-h-[92vh] flex items-center overflow-hidden pb-24">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full animate-pulse-glow"
            style={{ background: "radial-gradient(ellipse, hsl(347 77% 50% / 0.09) 0%, transparent 60%)" }} />
          <div className="absolute inset-0 grid-overlay opacity-20" />
        </div>

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="container mx-auto relative z-10 text-center max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-primary font-display font-semibold text-xs md:text-sm uppercase mb-6 tracking-[0.25em]">
              Digital Presence Solutions
            </p>
            <h1 className="text-[clamp(2rem,6.5vw,5.5rem)] font-display font-extrabold mb-6 leading-[1.02] tracking-[-0.03em]">
              <span className="gradient-text">YOUR BUSINESS DESERVES A </span>
              <span className="gradient-text-primary">WEBSITE THAT WORKS.</span>
            </h1>
            <p className="text-foreground/80 text-base md:text-xl max-w-2xl mx-auto mb-5 leading-relaxed">
              Build a professional online presence that helps customers discover, trust and engage with your business.
            </p>
            <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
              Upbeatz Marcom designs modern websites, ecommerce platforms and digital solutions that help businesses look credible and grow online.
            </p>

            <div className="inline-flex items-center gap-2 glass-card px-5 py-2.5 mb-9 !rounded-full">
              <Sparkles size={14} className="text-primary" />
              <span className="text-xs md:text-sm font-display font-semibold tracking-wide">
                Professional Websites From &#8358;250,000
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
              <a
                href={WA("Hi Upbeatz Marcom, I'd like to get a website for my business.")}
                target="_blank" rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center gap-2.5 group"
              >
                Get Your Website
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a href="#work" className="btn-outline flex items-center justify-center gap-2">
                View Our Work
              </a>
            </div>
          </motion.div>

          <HeroVisual />
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none" style={{ background: "linear-gradient(to top, hsl(0 0% 2%) 0%, transparent 100%)" }} />
      </section>

      <div className="section-divider" />

      <section className="section-padding bg-mesh relative">
        <div className="container mx-auto max-w-3xl relative z-10">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="text-primary font-display font-semibold text-xs uppercase mb-5 tracking-[0.2em]">The Reality</p>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 leading-tight">
                Your Business May Be <span className="gradient-text-primary">Losing Customers Online</span>
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                Many businesses are doing great work but their online presence does not reflect their value.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-3">
            {problems.map((p, i) => (
              <AnimatedSection key={p} delay={i * 0.06}>
                <div className="glass-card-hover flex items-start gap-3 p-4 md:p-5">
                  <XCircle size={18} className="text-primary shrink-0 mt-0.5" />
                  <p className="text-foreground/85 text-sm md:text-base">{p}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.2}>
            <p className="text-center mt-12 text-xl md:text-2xl font-display font-bold gradient-text">
              We help businesses fix that.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="section-divider" />

      <section className="section-padding relative">
        <div className="absolute inset-0 bg-radial-center" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <div className="text-center mb-14">
              <p className="text-primary font-display font-semibold text-xs uppercase mb-4 tracking-[0.2em]">Capabilities</p>
              <h2 className="text-3xl md:text-5xl font-display font-bold">What We Build</h2>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
            {buildCards.map((c, i) => (
              <AnimatedSection key={c.title} delay={i * 0.08}>
                <div className="glass-card-hover card-lift h-full p-6 md:p-8">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 border border-primary/25"
                    style={{ background: "linear-gradient(135deg, hsl(347 77% 50% / 0.15), transparent)" }}>
                    <c.icon size={20} className="text-primary" />
                  </div>
                  <h3 className="text-lg md:text-xl font-display font-bold mb-3 uppercase tracking-tight">{c.title}</h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-5">{c.desc}</p>
                  <ul className="space-y-2">
                    {c.items.map((it) => (
                      <li key={it} className="flex items-center gap-2 text-sm text-foreground/80">
                        <CheckCircle2 size={14} className="text-primary shrink-0" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <section className="section-padding bg-radial-dark relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-14 leading-tight">
              We Build For <span className="gradient-text-primary">Different Types of Businesses</span>
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {audiences.map((a, i) => (
              <AnimatedSection key={a.title} delay={i * 0.1}>
                <div className="glass-card-hover card-lift h-full p-7 md:p-8">
                  <a.icon size={24} className="text-primary mb-5" />
                  <h3 className="text-lg md:text-xl font-display font-bold mb-3 uppercase tracking-tight">{a.title}</h3>
                  <p className="text-foreground/80 text-sm md:text-base mb-4">{a.desc}</p>
                  <p className="text-muted-foreground text-xs md:text-sm border-t border-border/30 pt-4">{a.examples}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <section id="work" className="section-padding relative scroll-mt-24">
        <div className="absolute inset-0 bg-radial-center" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <div className="text-center mb-14">
              <p className="text-primary font-display font-semibold text-xs uppercase mb-4 tracking-[0.2em]">Selected Work</p>
              <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight">
                Websites &amp; Digital Products <span className="gradient-text-primary">We Have Built</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {projects.map((p, i) => (
              <AnimatedSection key={p.url} delay={(i % 3) * 0.08}>
                <a
                  href={`https://${p.url}`}
                  target="_blank" rel="noopener noreferrer"
                  className="glass-card-hover card-lift h-full flex flex-col overflow-hidden group"
                >
                  <div className="relative h-36 md:h-40 overflow-hidden border-b border-border/30"
                    style={{ background: `linear-gradient(140deg, hsl(${p.accent} / 0.22) 0%, hsl(0 0% 6%) 65%)` }}>
                    <div className="absolute inset-0 grid-overlay opacity-40" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-display font-extrabold text-2xl md:text-3xl tracking-tight text-foreground/90 px-4 text-center">
                        {p.name}
                      </span>
                    </div>
                    <div className="absolute top-3 left-3 flex gap-1.5 opacity-60">
                      <span className="w-2 h-2 rounded-full bg-foreground/40" />
                      <span className="w-2 h-2 rounded-full bg-foreground/25" />
                      <span className="w-2 h-2 rounded-full bg-foreground/15" />
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-primary text-[11px] uppercase tracking-[0.15em] font-semibold mb-2">{p.category}</p>
                    <h3 className="font-display font-bold text-lg mb-2">{p.name}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">{p.desc}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                      {p.url}
                      <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <section className="section-padding bg-mesh relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-14">
              Why Businesses Choose <span className="gradient-text-primary">Upbeatz</span>
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyCards.map((c, i) => (
              <AnimatedSection key={c.title} delay={i * 0.08}>
                <div className="glass-card-hover h-full p-6 md:p-7">
                  <c.icon size={22} className="text-primary mb-4" />
                  <h3 className="font-display font-bold text-base md:text-lg mb-2 uppercase tracking-tight">{c.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <section className="section-padding relative">
        <div className="absolute inset-0 bg-radial-center" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <div className="text-center mb-14">
              <p className="text-primary font-display font-semibold text-xs uppercase mb-4 tracking-[0.2em]">Investment</p>
              <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight">
                Professional Websites Without The <span className="gradient-text-primary">Agency Price Tag</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-5 md:gap-6 items-stretch">
            {pricing.map((p, i) => (
              <AnimatedSection key={p.name} delay={i * 0.1}>
                <div className={`glass-card-hover h-full p-7 md:p-8 flex flex-col ${p.featured ? "border-primary/30 glow-red-subtle" : ""}`}>
                  {p.featured && (
                    <span className="self-start text-[10px] uppercase tracking-[0.2em] font-bold text-primary mb-4">Most Popular</span>
                  )}
                  <h3 className="font-display font-bold text-lg uppercase tracking-tight mb-2">{p.name}</h3>
                  <p className="font-display font-extrabold text-2xl md:text-3xl gradient-text-primary mb-3">{p.price}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{p.desc}</p>
                  <ul className="space-y-2.5 mb-8 flex-1">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-foreground/85">
                        <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={WA(`Hi Upbeatz Marcom, I'm interested in the ${p.name} option for my business website.`)}
                    target="_blank" rel="noopener noreferrer"
                    className={`${p.featured ? "btn-primary" : "btn-outline"} w-full flex items-center justify-center gap-2 group`}
                  >
                    {p.price === "Custom Quote" ? "Request a Quote" : "Start This Package"}
                    <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <section className="section-padding bg-radial-dark relative">
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-5">Need More Than A Website?</h2>
            <p className="text-muted-foreground text-base md:text-lg mb-10 max-w-2xl mx-auto">
              A website is the foundation. We can also help businesses grow through:
            </p>
          </AnimatedSection>
          <div className="flex flex-wrap justify-center gap-3">
            {addOns.map((a, i) => (
              <AnimatedSection key={a} delay={i * 0.06}>
                <span className="glass-card-hover inline-block px-5 py-3 text-sm text-foreground/85 !rounded-full">
                  {a}
                </span>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding relative">
        <div className="container mx-auto max-w-4xl relative z-10">
          <AnimatedSection>
            <div className="glass-card glow-red text-center p-9 md:p-16 relative overflow-hidden">
              <div className="absolute inset-0 grid-overlay opacity-20" />
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full"
                style={{ background: "radial-gradient(ellipse, hsl(347 77% 50% / 0.14) 0%, transparent 70%)" }} />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-display font-extrabold mb-6 leading-tight">
                  Ready To Build Your <span className="gradient-text-primary">Digital Presence?</span>
                </h2>
                <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                  Whether you need a professional website, ecommerce platform or custom digital solution, Upbeatz Marcom helps turn ideas into reality.
                </p>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
                  <a
                    href={WA("Hi Upbeatz Marcom, I'd like to start a website project.")}
                    target="_blank" rel="noopener noreferrer"
                    className="btn-primary flex items-center justify-center gap-2 group"
                  >
                    Start Your Project
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                  <Link to="/#contact" className="btn-outline flex items-center justify-center gap-2">
                    Contact Us
                  </Link>
                </div>
                <a
                  href={WA("Hi Upbeatz Marcom, I have an enquiry about building a website.")}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-7 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <MessageCircle size={15} />
                  Or send a quick WhatsApp enquiry
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Websites;
