import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import AnimatedSection from "@/components/AnimatedSection";
import PartnerMarquee from "@/components/PartnerMarquee";
import { trackWhatsApp } from "@/lib/analytics";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Megaphone, PenTool, Target, Search, Sparkles, Globe, ShoppingCart, LayoutDashboard,
  Building2, TrendingUp, Award, ArrowRight, ArrowUpRight, CheckCircle2, BarChart3, Bot, ShieldCheck
} from "lucide-react";
import { posts } from "@/data/blog";

const aiSearchCards = [
  { icon: Search, title: "Google Search Visibility", desc: "Helping businesses improve how they appear when customers actively search for their products and services." },
  { icon: Sparkles, title: "AI Search Visibility", desc: "Helping businesses become better understood by AI assistants and future search platforms." },
  { icon: ShieldCheck, title: "Digital Authority", desc: "Building the trust signals, content and online presence that influence customer decisions." },
];

const insightSlugs = [
  "how-ai-search-will-change-how-customers-find-businesses",
  "google-seo-vs-ai-search-what-business-owners-need-to-know",
  "why-your-website-may-not-be-ready-for-ai",
];
const insights = insightSlugs
  .map((s) => posts.find((p) => p.slug === s))
  .filter((p): p is (typeof posts)[number] => Boolean(p));

const WA = (msg: string) => `https://wa.me/2349097927111?text=${encodeURIComponent(msg)}`;
const GROW = WA("Hi Upbeatz Marcom, I'd like to grow my business online.");

const audiences = [
  {
    icon: Building2,
    title: "Small Businesses",
    desc: "Build your digital presence and attract your first customers.",
    items: ["Social media growth", "Content creation", "Branding", "Digital presence"],
  },
  {
    icon: TrendingUp,
    title: "Growing Businesses",
    desc: "Create marketing systems that support consistent growth.",
    items: ["Content strategy", "Advertising", "Customer acquisition", "Analytics"],
  },
  {
    icon: Award,
    title: "Established Brands",
    desc: "Improve visibility, engagement and customer reach.",
    items: ["Campaign strategy", "Digital optimisation", "Growth support"],
  },
];

const contentPlan = [
  "30 social media posts",
  "30 story publications",
  "10 flexible content reserve ideas",
  "Monthly content strategy and calendar",
  "Captions, hooks, CTAs and hashtags",
  "Branded graphics",
  "Carousels",
  "Reels",
  "Edited videos",
  "Story concepts",
  "Platform-specific content adaptation",
];

const adsItems = [
  "Campaign strategy", "Audience research", "Meta Ads (Facebook & Instagram)", "TikTok Ads",
  "LinkedIn Ads", "Google Ads", "Landing page optimisation", "Conversion tracking", "Performance reporting",
];

const seoItems = ["Keyword research", "Website optimisation", "Content strategy", "Technical improvements", "Local SEO"];
const aeoItems = ["Structured content", "Brand authority", "Helpful answers", "AI search visibility"];

const solutions = [
  { icon: Globe, title: "Websites", desc: "Professional websites designed to build credibility and convert visitors into enquiries.", to: "/websites" },
  { icon: ShoppingCart, title: "Ecommerce", desc: "Online stores designed to help businesses sell beyond social media.", to: "/storvo" },
  { icon: LayoutDashboard, title: "Digital Platforms", desc: "Custom apps, tools and digital solutions built around business needs.", to: "/work" },
];

const steps = [
  { n: "01", title: "Understand", desc: "Understand your business, audience and objectives." },
  { n: "02", title: "Strategise", desc: "Develop the right marketing and growth strategy." },
  { n: "03", title: "Execute", desc: "Create content, launch campaigns and attract customers." },
  { n: "04", title: "Optimise", desc: "Use data and insights to improve performance." },
];

const workPreview = [
  { name: "ZebraLink", category: "Digital Business Card Web App", accent: "45 93% 58%" },
  { name: "Storvo", category: "Digital Store Platform", accent: "265 85% 62%" },
  { name: "Upbeatz Hub", category: "Client Management Platform", accent: "347 77% 50%" },
  { name: "Client Websites", category: "Corporate, hospitality, education and service websites", accent: "205 90% 55%" },
];

const FloatingMetric = ({ label, value, delay, className }: { label: string; value: string; delay: number; className: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
    className={`metric-badge absolute ${className}`}
  >
    <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: delay * 2 }}>
      <p className="text-primary font-display font-extrabold text-lg leading-none">{value}</p>
      <p className="text-muted-foreground text-[10px] mt-1 uppercase tracking-wider">{label}</p>
    </motion.div>
  </motion.div>
);

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
    <CheckCircle2 size={15} className="text-primary mt-0.5 shrink-0" />
    <span>{children}</span>
  </li>
);

const Index = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <Layout>
      <Seo
        title={"Upbeatz Marcom | Digital Marketing Agency Helping Businesses Grow Online"}
        description={"Upbeatz Marcom helps businesses grow through social media management, content strategy, paid advertising, SEO, AI-powered marketing and customer acquisition strategies."}
        path="/"
      />

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
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}>
            <p className="text-primary font-display font-semibold text-label uppercase mb-8 tracking-[0.25em]">
              Digital Marketing &amp; Growth Agency
            </p>
            <h1 className="text-[clamp(1.75rem,6.5vw,7rem)] font-display font-extrabold mb-8 leading-[1.0] tracking-[-0.03em]">
              <span className="gradient-text block">HELPING BUSINESSES ATTRACT</span>
              <span className="gradient-text-primary">CUSTOMERS </span>
              <span className="gradient-text">AND GROW ONLINE.</span>
            </h1>
            <p className="text-muted-foreground text-body-lg max-w-2xl mx-auto mb-12 leading-relaxed">
              Upbeatz Marcom helps businesses build stronger brands, create valuable content, reach the right audience and grow through social media, advertising, AI and practical digital marketing strategies.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={GROW} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsApp("home_hero", "Grow Your Business")} className="btn-primary flex items-center gap-2.5 group">
                Grow Your Business
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <Link to="/work" className="btn-outline flex items-center gap-2">View Our Work</Link>
            </div>
          </motion.div>

          <div className="hidden lg:block">
            <FloatingMetric label="Content Placements / Month" value="60" delay={1} className="top-0 -left-10" />
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
          <AnimatedSection className="text-center mb-16">
            <p className="text-primary font-display font-semibold text-label uppercase mb-5 tracking-[0.25em]">Who We Help</p>
            <h2 className="text-display-md font-display font-bold text-foreground">Growth support at every stage</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {audiences.map((a, i) => (
              <AnimatedSection key={a.title} delay={i * 0.1}>
                <div className="glass-card-hover p-8 h-full group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-500">
                    <a.icon className="text-primary" size={22} />
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">{a.title}</h3>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{a.desc}</p>
                  <ul className="space-y-2.5">{a.items.map((it) => <Bullet key={it}>{it}</Bullet>)}</ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Core Growth Services */}
      <section id="services" className="section-padding relative scroll-mt-24">
        <div className="absolute inset-0 bg-radial-center" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection className="text-center mb-16">
            <p className="text-primary font-display font-semibold text-label uppercase mb-5 tracking-[0.25em]">Core Growth Services</p>
            <h2 className="text-display-md font-display font-bold text-foreground mb-5">What we do for your business</h2>
            <p className="text-muted-foreground text-body-lg max-w-2xl mx-auto">
              Three growth engines that get your business noticed, trusted and chosen.
            </p>
          </AnimatedSection>

          {/* Service 1 */}
          <AnimatedSection>
            <div className="glass-card p-8 md:p-12 mb-6 relative overflow-hidden">
              <div className="absolute inset-0 opacity-60" style={{ background: "radial-gradient(circle at 15% 0%, hsl(347 77% 50% / 0.08) 0%, transparent 55%)" }} />
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <Megaphone className="text-primary" size={20} />
                    </div>
                    <span className="text-primary text-xs uppercase tracking-[0.2em] font-display font-semibold">Service 01</span>
                  </div>
                  <p className="text-muted-foreground text-xs uppercase tracking-[0.2em] mb-3">Social Media Growth &amp; Content Strategy</p>
                  <h3 className="text-display-sm font-display font-bold text-foreground mb-5 leading-tight">Build a brand people notice and trust</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    We help businesses manage their social media presence through strategic content creation that keeps them visible, builds trust and attracts customers.
                  </p>
                  <div className="glass-card p-5 mb-5 border-primary/15">
                    <p className="text-foreground/90 text-sm leading-relaxed">
                      We don't create random posts. We create content around your brand, audience and business goals using your real business assets to create content that feels authentic and recognisable.
                    </p>
                  </div>
                  <div className="glass-card p-5 flex items-start gap-3 border-primary/15">
                    <Bot className="text-primary shrink-0 mt-0.5" size={18} />
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      We use AI-powered tools to improve research, planning, workflows and marketing efficiency, helping businesses work smarter.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="glass-card p-7 h-full border-primary/10">
                    <div className="flex items-center gap-2 mb-5">
                      <PenTool className="text-primary" size={16} />
                      <h4 className="font-display font-semibold text-foreground text-sm uppercase tracking-wider">Monthly Social Media Content Plan</h4>
                    </div>
                    <ul className="space-y-2.5 mb-6">{contentPlan.map((c) => <Bullet key={c}>{c}</Bullet>)}</ul>
                    <div className="rounded-xl border border-primary/25 bg-primary/5 p-5">
                      <p className="text-primary font-display font-extrabold text-2xl leading-none mb-2">60</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        committed content placements every month, supported by strategy, creative production and flexible ideas to keep your brand relevant.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Service 2 */}
          <AnimatedSection delay={0.05}>
            <div className="glass-card p-8 md:p-12 mb-6 relative overflow-hidden">
              <div className="absolute inset-0 opacity-60" style={{ background: "radial-gradient(circle at 85% 0%, hsl(350 90% 68% / 0.07) 0%, transparent 55%)" }} />
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <Target className="text-primary" size={20} />
                    </div>
                    <span className="text-primary text-xs uppercase tracking-[0.2em] font-display font-semibold">Service 02</span>
                  </div>
                  <p className="text-muted-foreground text-xs uppercase tracking-[0.2em] mb-3">Paid Advertising &amp; Campaign Growth</p>
                  <h3 className="text-display-sm font-display font-bold text-foreground mb-5 leading-tight">Turn marketing budget into business opportunities</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    We create targeted advertising campaigns designed to put your business in front of the right audience and generate measurable results.
                  </p>
                  <div className="glass-card p-5 border-primary/15">
                    <p className="text-foreground/90 text-sm leading-relaxed">
                      We don't just boost posts. We create campaigns designed around your business goals.
                    </p>
                  </div>
                </div>
                <div className="glass-card p-7 border-primary/10">
                  <div className="flex items-center gap-2 mb-5">
                    <BarChart3 className="text-primary" size={16} />
                    <h4 className="font-display font-semibold text-foreground text-sm uppercase tracking-wider">What's included</h4>
                  </div>
                  <ul className="space-y-2.5">{adsItems.map((c) => <Bullet key={c}>{c}</Bullet>)}</ul>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Service 3 */}
          <AnimatedSection delay={0.1}>
            <div className="glass-card p-8 md:p-12 relative overflow-hidden">
              <div className="absolute inset-0 opacity-60" style={{ background: "radial-gradient(circle at 50% 0%, hsl(347 77% 50% / 0.07) 0%, transparent 55%)" }} />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Search className="text-primary" size={20} />
                  </div>
                  <span className="text-primary text-xs uppercase tracking-[0.2em] font-display font-semibold">Service 03</span>
                </div>
                <p className="text-muted-foreground text-xs uppercase tracking-[0.2em] mb-3">Search Engine Optimisation (SEO) &amp; Answer Engine Optimisation (AEO)</p>
                <h3 className="text-display-sm font-display font-bold text-foreground mb-5 leading-tight">Be found on Google and the future of search</h3>
                <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">
                  We help businesses improve their visibility on search engines and AI-powered platforms so customers can discover them when searching for solutions.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                  <div className="glass-card p-7 border-primary/10">
                    <h4 className="font-display font-bold text-foreground mb-2">Search Engine Optimisation (SEO)</h4>
                    <p className="text-muted-foreground text-sm mb-5">Improve Google visibility through:</p>
                    <ul className="space-y-2.5">{seoItems.map((c) => <Bullet key={c}>{c}</Bullet>)}</ul>
                  </div>
                  <div className="glass-card p-7 border-primary/10">
                    <h4 className="font-display font-bold text-foreground mb-2">Answer Engine Optimisation (AEO)</h4>
                    <p className="text-muted-foreground text-sm mb-5">Prepare for AI-powered search experiences through:</p>
                    <ul className="space-y-2.5">{aeoItems.map((c) => <Bullet key={c}>{c}</Bullet>)}</ul>
                  </div>
                </div>
                <div className="glass-card p-5 flex items-start gap-3 border-primary/15">
                  <Sparkles className="text-primary shrink-0 mt-0.5" size={18} />
                  <p className="text-foreground/90 text-sm leading-relaxed">
                    Search is changing. Businesses need to be visible not only on Google, but also where customers ask AI-powered platforms for answers.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="section-divider" />

      {/* AI Growth Engine */}
      <section id="ai-growth" className="section-padding relative scroll-mt-24 overflow-hidden">
        <div className="absolute inset-0 bg-radial-center" />
        <div className="absolute inset-0 grid-overlay opacity-20" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection className="text-center mb-16">
            <p className="text-primary font-display font-semibold text-label uppercase mb-5 tracking-[0.25em]">Upbeatz AI Growth Engine</p>
            <h2 className="text-display-md font-display font-bold text-foreground mb-6">The Future Of Search Is Changing</h2>
            <p className="text-muted-foreground text-body-lg max-w-2xl mx-auto leading-relaxed mb-4">
              Customers are no longer only searching Google. They are asking AI assistants for recommendations,
              comparisons and solutions. Businesses that are understood by AI will have a competitive advantage.
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Upbeatz helps businesses optimise their digital presence for search engines and AI-powered discovery.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
            {aiSearchCards.map((c, i) => (
              <AnimatedSection key={c.title} delay={i * 0.1}>
                <article className="glass-card-hover p-8 h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                    <c.icon className="text-primary" size={22} />
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-3">{c.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
                </article>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="text-center">
            <Link to="/ai-growth-engine" className="btn-primary inline-flex items-center gap-2">
              Explore AI Growth Engine
              <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <div className="section-divider" />

      {/* Digital Solutions */}
      <section className="section-padding bg-mesh relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection className="text-center mb-16">
            <p className="text-primary font-display font-semibold text-label uppercase mb-5 tracking-[0.25em]">Supporting Services</p>
            <h2 className="text-display-md font-display font-bold text-foreground mb-5">Digital solutions that support growth</h2>
            <p className="text-muted-foreground text-body-lg max-w-2xl mx-auto">
              Beyond marketing, we help businesses create the digital foundations they need to grow.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {solutions.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.1}>
                <Link to={s.to} className="glass-card-hover p-8 h-full group block">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                    <s.icon className="text-primary" size={22} />
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-3 flex items-center gap-2">
                    {s.title}
                    <ArrowUpRight size={16} className="text-primary transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Growth System */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-radial-dark" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection className="text-center mb-16">
            <p className="text-primary font-display font-semibold text-label uppercase mb-5 tracking-[0.25em]">How We Work</p>
            <h2 className="text-display-md font-display font-bold text-foreground">The Upbeatz Growth System</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s, i) => (
              <AnimatedSection key={s.n} delay={i * 0.08}>
                <div className="glass-card-hover p-8 h-full relative overflow-hidden">
                  <span className="absolute -top-3 right-4 font-display font-extrabold text-6xl text-primary/10">{s.n}</span>
                  <p className="text-primary font-display font-bold text-sm tracking-[0.2em] mb-4">{s.n}</p>
                  <h3 className="font-display font-bold text-lg text-foreground mb-3">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Selected Work */}
      <section id="work" className="scroll-mt-24 section-padding bg-mesh relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection className="text-center mb-16">
            <p className="text-primary font-display font-semibold text-label uppercase mb-5 tracking-[0.25em]">Portfolio</p>
            <h2 className="text-display-md font-display font-bold text-foreground mb-5">Selected Work</h2>
            <p className="text-muted-foreground text-body-lg max-w-2xl mx-auto">
              Examples of digital projects, platforms and websites we have helped create.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
            {workPreview.map((p, i) => (
              <AnimatedSection key={p.name} delay={(i % 2) * 0.08}>
                <div className="glass-card-hover p-8 h-full group relative overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{ background: `radial-gradient(circle at 20% 0%, hsl(${p.accent} / 0.12) 0%, transparent 60%)` }} />
                  <div className="relative z-10">
                    <h3 className="font-display font-bold text-xl text-foreground mb-2">{p.name}</h3>
                    <p className="text-primary text-xs uppercase tracking-wider font-display font-semibold">{p.category}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="text-center">
            <Link to="/work" className="btn-outline inline-flex items-center gap-2">
              View All Work
              <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <div className="section-divider" />

      {/* Growth Ecosystem */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-radial-center" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection className="text-center mb-16">
            <p className="text-primary font-display font-semibold text-label uppercase mb-5 tracking-[0.25em]">Partners</p>
            <h2 className="text-display-md font-display font-bold text-foreground mb-5">Our Growth Ecosystem</h2>
            <p className="text-muted-foreground text-body-lg max-w-2xl mx-auto">
              We collaborate with innovative technology partners that help businesses create, automate and scale.
            </p>
          </AnimatedSection>
        </div>
        <AnimatedSection><PartnerMarquee /></AnimatedSection>
      </section>

      <div className="section-divider" />

      {/* Final CTA */}
      <section id="contact" className="section-padding relative scroll-mt-24">
        <div className="absolute inset-0 bg-radial-dark" />
        <div className="container mx-auto max-w-3xl text-center relative z-10">
          <AnimatedSection>
            <div className="glass-card p-12 md:p-16 glow-red border-primary/15">
              <h2 className="text-display-md font-display font-bold mb-5 text-foreground">Ready to Grow Your Business?</h2>
              <p className="text-muted-foreground mb-10 text-body-lg max-w-md mx-auto">
                Tell us about your business and we'll map out the right growth strategy.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href={GROW} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsApp("home_final_cta", "Grow Your Business")} className="btn-primary flex items-center gap-2 group">
                  Grow Your Business
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <Link to="/contact" className="btn-outline">Contact Us</Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
