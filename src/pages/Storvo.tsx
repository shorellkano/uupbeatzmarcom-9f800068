import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { ArrowRight, Store, Megaphone, Target, Zap, BarChart3, CheckCircle2 } from "lucide-react";

const WA = (msg: string) => `https://wa.me/2349097927111?text=${encodeURIComponent(msg)}`;

const services = [
  { icon: Megaphone, title: "Social Media Growth", desc: "Build an audience that trusts and buys from your store." },
  { icon: Target, title: "Paid Advertising", desc: "Meta and Google campaigns that drive traffic to your Storvo store." },
  { icon: Zap, title: "AI Automation", desc: "Automated follow-up so no enquiry goes cold." },
  { icon: BarChart3, title: "Analytics & Optimisation", desc: "Track what sells and double down on it." },
];

const steps = [
  "You build your store on Storvo",
  "We audit your store and brand presentation",
  "We launch campaigns that bring in buyers",
  "We optimise for repeat sales and growth",
];

const Storvo = () => (
  <Layout>
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-20" />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 0%, hsl(265 85% 62% / 0.10) 0%, transparent 60%)" }} />
      <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5">
            <Store className="text-primary" size={14} />
            <span className="text-label uppercase tracking-[0.2em] font-display font-semibold text-primary">Storvo Partnership</span>
          </div>
          <h1 className="text-[clamp(2rem,7vw,4.5rem)] font-display font-extrabold leading-[1.05] tracking-[-0.03em] mb-6">
            <span className="gradient-text block">BUILT YOUR STORE</span>
            <span className="gradient-text">WITH </span>
            <span className="gradient-text-primary">STORVO?</span>
          </h1>
          <p className="text-muted-foreground text-body-lg max-w-2xl mx-auto leading-relaxed mb-10">
            Storvo helps entrepreneurs create professional online stores quickly and easily. Through our partnership with Storvo, Upbeatz helps merchants build their brand, attract customers and grow sales.
          </p>
          <a href={WA("Hi Upbeatz Marcom, I have a Storvo store and I'd like help growing it.")} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2 group">
            Grow My Storvo Store
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </AnimatedSection>
      </div>
    </section>

    <div className="section-divider" />

    <section className="section-padding bg-mesh relative">
      <div className="container mx-auto max-w-4xl relative z-10">
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="glass-card p-10 text-center">
              <p className="text-muted-foreground text-label uppercase tracking-[0.2em] font-display font-semibold mb-4">Storvo</p>
              <p className="font-display font-bold text-xl text-foreground">Storvo builds the store.</p>
            </div>
            <div className="glass-card p-10 text-center glow-red border-primary/20">
              <p className="text-primary text-label uppercase tracking-[0.2em] font-display font-semibold mb-4">Upbeatz Marcom</p>
              <p className="font-display font-bold text-xl gradient-text-primary">Upbeatz Marcom helps businesses grow.</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <div className="section-divider" />

    <section className="section-padding relative">
      <div className="absolute inset-0 bg-radial-center" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-primary font-display font-semibold text-label uppercase mb-4 tracking-[0.2em]">What We Do For Merchants</p>
            <h2 className="text-display-md font-display font-bold text-foreground">Turn Your Store Into a Sales Engine</h2>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.06}>
              <div className="glass-card-hover p-7 h-full group cursor-default">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-primary/20">
                  <s.icon className="text-primary" size={22} />
                </div>
                <h3 className="font-display font-semibold text-sm mb-2 text-foreground">{s.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{s.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <div className="section-divider" />

    <section className="section-padding bg-mesh relative">
      <div className="container mx-auto max-w-3xl relative z-10">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-display-md font-display font-bold text-foreground">How It Works</h2>
          </div>
        </AnimatedSection>
        <div className="space-y-4">
          {steps.map((step, i) => (
            <AnimatedSection key={step} delay={i * 0.08}>
              <div className="glass-card-hover p-6 flex items-center gap-4">
                <div className="w-9 h-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <span className="text-primary font-display font-bold text-xs">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <p className="text-foreground/90 text-sm font-medium">{step}</p>
                <CheckCircle2 className="text-primary/40 ml-auto shrink-0" size={16} />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <div className="section-divider" />

    <section className="section-padding relative">
      <div className="absolute inset-0 bg-radial-dark" />
      <div className="container mx-auto max-w-3xl text-center relative z-10">
        <AnimatedSection>
          <div className="glass-card p-12 md:p-16 glow-red border-primary/15">
            <h2 className="text-display-md font-display font-bold mb-5 text-foreground">Ready to Grow Your Sales?</h2>
            <p className="text-muted-foreground mb-10 text-body-lg max-w-md mx-auto">
              Let's get real customers to your store.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={WA("Hi Upbeatz Marcom, I'd like to discuss the Storvo partnership.")} target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center gap-2 group">
                Start Your Project
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <Link to="/packages" className="btn-outline">View Packages</Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default Storvo;
