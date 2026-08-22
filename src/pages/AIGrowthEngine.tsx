import { useState } from "react";
import { Link } from "react-router-dom";
import { z } from "zod";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { toast } from "sonner";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import AnimatedSection from "@/components/AnimatedSection";
import { trackLead, trackWhatsApp, trackCta } from "@/lib/analytics";
import {
  Search, Sparkles, ShieldCheck, Globe, ArrowRight, CheckCircle2,
  Stethoscope, Briefcase, Plane, Store, MessageSquare, LineChart,
} from "lucide-react";

const WA = (msg: string) => `https://wa.me/2349097927111?text=${encodeURIComponent(msg)}`;
const TALK = WA("Hi Upbeatz Marcom, I'd like to speak with your growth team about AI search visibility.");

const eraPoints = [
  "Discover businesses they have never heard of",
  "Compare services and providers side by side",
  "Research options before making contact",
  "Ask for recommendations in plain language",
];

const services = [
  {
    icon: Search,
    title: "AI Visibility Audit",
    desc: "Understand how your business is currently represented online and how AI platforms may interpret your brand.",
  },
  {
    icon: Sparkles,
    title: "Answer Engine Optimisation (AEO)",
    desc: "Optimise your content and digital presence so search engines and AI platforms can better understand your expertise.",
  },
  {
    icon: ShieldCheck,
    title: "Digital Authority Building",
    desc: "Strengthen reviews, online mentions, content and trust signals that influence discovery.",
  },
  {
    icon: Globe,
    title: "AI-Ready Website Strategy",
    desc: "Ensure your website communicates clearly with search engines and AI systems.",
  },
];

const industries = [
  { icon: Stethoscope, title: "Healthcare & Care Providers", desc: "For care companies, clinics and health services." },
  { icon: Briefcase, title: "Professional Services", desc: "For consultants, agencies and experts." },
  { icon: Plane, title: "Hospitality & Travel", desc: "For hotels, restaurants and travel businesses." },
  { icon: Store, title: "Local Businesses", desc: "For businesses competing for local customers." },
];

const capabilities = [
  "Digital Marketing", "SEO", "Answer Engine Optimisation", "Paid Advertising",
  "Website Strategy", "AI Automation", "Content Strategy",
];

const industryOptions = [
  "Healthcare & Care", "Professional Services", "Hospitality & Travel",
  "Retail & Ecommerce", "Education", "Technology", "Other",
];

const schema = z.object({
  business: z.string().trim().min(2, { message: "Please enter your business name" }).max(120),
  website: z.string().trim().min(3, { message: "Enter your website or social profile" }).max(200),
  industry: z.string().trim().min(1, { message: "Select your industry" }),
  country: z.string().trim().min(2, { message: "Enter your country" }).max(80),
  email: z.string().trim().email({ message: "Enter a valid email address" }).max(255),
  phone: z.string().trim().min(7, { message: "Enter a valid phone or WhatsApp number" }).max(30),
  goal: z.string().trim().min(10, { message: "Tell us your main business goal" }).max(1000),
});

type FormValues = z.infer<typeof schema>;

const initial: FormValues = { business: "", website: "", industry: "", country: "", email: "", phone: "", goal: "" };

const inputClass =
  "w-full rounded-xl bg-secondary/50 border border-border/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all duration-300 focus:border-primary/50 focus:bg-secondary/70";

const Field = ({
  id, label, error, children,
}: { id: string; label: string; error?: string; children: React.ReactNode }) => (
  <div>
    <label htmlFor={id} className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">{label}</label>
    {children}
    {error && <p className="text-destructive text-xs mt-1.5">{error}</p>}
  </div>
);

const AIGrowthEngine = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  const [form, setForm] = useState<FormValues>(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const set = (k: keyof FormValues, v: string) => setForm((f) => ({ ...f, [k]: v }));

  // Front-end only for now. Phase 2 replaces this handler with an API call
  // (AI visibility scoring / Fihan integration) while keeping the same payload.
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      parsed.error.issues.forEach((i) => { next[String(i.path[0])] = i.message; });
      setErrors(next);
      toast.error("Please check the highlighted fields.");
      return;
    }
    setErrors({});
    const d = parsed.data;
    const msg =
      `Hi Upbeatz Marcom, I'd like an AI Visibility Assessment.\n\n` +
      `Business: ${d.business}\nWebsite: ${d.website}\nIndustry: ${d.industry}\nCountry: ${d.country}\n` +
      `Email: ${d.email}\nPhone/WhatsApp: ${d.phone}\n\nMain business goal:\n${d.goal}`;
    trackLead("ai_visibility_assessment", { industry: d.industry, country: d.country });
    trackWhatsApp("ai_growth_engine_form", "Request My Assessment");
    window.open(WA(msg), "_blank", "noopener,noreferrer");
    toast.success("Opening WhatsApp with your assessment request.");
  };

  return (
    <Layout>
      <Seo
        title="Upbeatz AI Growth Engine | AI Search Visibility For Businesses"
        description="Upbeatz helps businesses become more discoverable across Google and AI search platforms through SEO, Answer Engine Optimisation and digital growth strategies."
        path="/ai-growth-engine"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Upbeatz AI Growth Engine",
          serviceType: "AI search visibility, SEO and Answer Engine Optimisation",
          provider: { "@type": "Organization", name: "Upbeatz Marcom", url: "https://uupbeatzmarcom.lovable.app" },
          areaServed: ["Nigeria", "United Kingdom"],
          description:
            "AI visibility audits, Answer Engine Optimisation, digital authority building and AI-ready website strategy for businesses.",
        }}
      />

      {/* Hero */}
      <section ref={heroRef} className="relative overflow-hidden pt-32 pb-24 md:pt-44 md:pb-32">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full animate-pulse-glow"
            style={{ background: "radial-gradient(ellipse, hsl(347 77% 50% / 0.09) 0%, transparent 60%)" }} />
          <div className="absolute inset-0 grid-overlay opacity-25" />
        </div>
        <motion.div style={{ y: heroY }} className="container mx-auto px-6 max-w-5xl text-center relative z-10">
          <AnimatedSection>
            <p className="text-primary font-display font-semibold text-label uppercase mb-6 tracking-[0.25em]">
              Upbeatz AI Growth Engine
            </p>
            <h1 className="text-[clamp(1.6rem,5.4vw,4.75rem)] font-display font-extrabold leading-[1.06] tracking-[-0.03em] mb-7">
              <span className="gradient-text">BECOME THE BUSINESS </span>
              <span className="gradient-text-primary">AI RECOMMENDS.</span>
            </h1>
            <p className="text-muted-foreground text-body-lg max-w-2xl mx-auto leading-relaxed mb-10">
              Search is evolving. Customers are increasingly using AI assistants to discover businesses,
              compare solutions and make decisions. Upbeatz helps businesses build the digital authority
              needed to be discovered in this new era.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#assessment"
                onClick={() => trackCta("Request Your AI Visibility Assessment", "ai_hero")}
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                Request Your AI Visibility Assessment
                <ArrowRight size={16} />
              </a>
              <a
                href={TALK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsApp("ai_hero", "Speak With Our Growth Team")}
                className="btn-outline inline-flex items-center justify-center gap-2"
              >
                Speak With Our Growth Team
                <MessageSquare size={16} />
              </a>
            </div>
          </AnimatedSection>
        </motion.div>
      </section>

      <div className="section-divider" />

      {/* Why AI visibility matters */}
      <section className="section-padding bg-mesh relative">
        <div className="container mx-auto max-w-6xl relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <AnimatedSection>
            <p className="text-primary font-display font-semibold text-label uppercase mb-5 tracking-[0.25em]">Why It Matters</p>
            <h2 className="text-display-md font-display font-bold text-foreground mb-6">Search Has Entered A New Era</h2>
            <p className="text-muted-foreground text-body-lg leading-relaxed mb-5">
              For years, businesses competed for Google rankings. That competition has not disappeared —
              but it is no longer the whole picture.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The businesses that provide clear information, genuine authority and strong trust signals
              will be the ones surfaced, quoted and recommended.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="glass-card p-8 md:p-10">
              <h3 className="font-display font-bold text-lg text-foreground mb-6">
                Customers now use AI assistants to:
              </h3>
              <ul className="space-y-4">
                {eraPoints.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 size={17} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-sm leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="section-divider" />

      {/* What is the AI Growth Engine */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-radial-dark" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection className="text-center mb-16">
            <p className="text-primary font-display font-semibold text-label uppercase mb-5 tracking-[0.25em]">The Engine</p>
            <h2 className="text-display-md font-display font-bold text-foreground mb-5">
              What Is Upbeatz AI Growth Engine?
            </h2>
            <p className="text-muted-foreground text-body-lg max-w-2xl mx-auto">
              Four connected workstreams that make your business easier to find, easier to understand
              and easier to trust — across Google and AI-powered discovery.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.map((s, i) => (
              <AnimatedSection key={s.title} delay={(i % 2) * 0.08}>
                <article className="glass-card-hover p-8 h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                    <s.icon className="text-primary" size={22} />
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-3">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Who this is for */}
      <section className="section-padding bg-mesh relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection className="text-center mb-16">
            <p className="text-primary font-display font-semibold text-label uppercase mb-5 tracking-[0.25em]">Who It's For</p>
            <h2 className="text-display-md font-display font-bold text-foreground">
              Built for businesses customers search for
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {industries.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.08}>
                <article className="glass-card-hover p-8 h-full">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                    <s.icon className="text-primary" size={20} />
                  </div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-3">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Assessment form */}
      <section id="assessment" className="section-padding relative scroll-mt-24">
        <div className="absolute inset-0 bg-radial-center" />
        <div className="container mx-auto max-w-3xl relative z-10">
          <AnimatedSection className="text-center mb-12">
            <p className="text-primary font-display font-semibold text-label uppercase mb-5 tracking-[0.25em]">Assessment</p>
            <h2 className="text-display-md font-display font-bold text-foreground mb-5">
              Find Out How AI Understands Your Business
            </h2>
            <p className="text-muted-foreground text-body-lg max-w-xl mx-auto">
              Request your AI Visibility Assessment and discover opportunities to improve your online presence.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <form onSubmit={onSubmit} noValidate className="glass-card p-8 md:p-10 space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Field id="business" label="Business Name" error={errors.business}>
                  <input id="business" className={inputClass} value={form.business}
                    onChange={(e) => set("business", e.target.value)} placeholder="Your business name" />
                </Field>
                <Field id="website" label="Website URL" error={errors.website}>
                  <input id="website" className={inputClass} value={form.website}
                    onChange={(e) => set("website", e.target.value)} placeholder="https://yourbusiness.com" />
                </Field>
                <Field id="industry" label="Industry" error={errors.industry}>
                  <select id="industry" className={inputClass} value={form.industry}
                    onChange={(e) => set("industry", e.target.value)}>
                    <option value="">Select industry</option>
                    {industryOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                </Field>
                <Field id="country" label="Country" error={errors.country}>
                  <input id="country" className={inputClass} value={form.country}
                    onChange={(e) => set("country", e.target.value)} placeholder="Nigeria, United Kingdom…" />
                </Field>
                <Field id="email" label="Email Address" error={errors.email}>
                  <input id="email" type="email" className={inputClass} value={form.email}
                    onChange={(e) => set("email", e.target.value)} placeholder="you@business.com" />
                </Field>
                <Field id="phone" label="Phone / WhatsApp" error={errors.phone}>
                  <input id="phone" className={inputClass} value={form.phone}
                    onChange={(e) => set("phone", e.target.value)} placeholder="+234 …" />
                </Field>
              </div>
              <Field id="goal" label="Main Business Goal" error={errors.goal}>
                <textarea id="goal" rows={4} className={`${inputClass} resize-none`} value={form.goal}
                  onChange={(e) => set("goal", e.target.value)}
                  placeholder="What would you like more of — enquiries, bookings, sales, visibility?" />
              </Field>
              <button type="submit" className="btn-primary w-full inline-flex items-center justify-center gap-2">
                Request My Assessment
                <ArrowRight size={16} />
              </button>
              <p className="text-muted-foreground/70 text-xs text-center">
                We respond within one business day. Your details are only used to prepare your assessment.
              </p>
            </form>
          </AnimatedSection>
        </div>
      </section>

      <div className="section-divider" />

      {/* Why Upbeatz */}
      <section className="section-padding bg-mesh relative">
        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <AnimatedSection>
            <p className="text-primary font-display font-semibold text-label uppercase mb-5 tracking-[0.25em]">Why Upbeatz</p>
            <h2 className="text-display-md font-display font-bold text-foreground mb-6">
              More Than Marketing. A Growth Partner For The AI Era.
            </h2>
            <p className="text-muted-foreground text-body-lg max-w-2xl mx-auto mb-12">
              Upbeatz combines marketing strategy, websites, SEO, advertising and AI-powered thinking to
              help businesses attract customers and grow.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="flex flex-wrap justify-center gap-3 mb-12">
            {capabilities.map((c) => (
              <span key={c} className="glass-card px-5 py-2.5 text-sm text-foreground/90 rounded-full">
                {c}
              </span>
            ))}
          </AnimatedSection>
          <AnimatedSection delay={0.15} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/work" className="btn-outline inline-flex items-center justify-center gap-2">
              See Our Work
              <LineChart size={16} />
            </Link>
            <a
              href={TALK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsApp("ai_why_upbeatz", "Speak With Our Growth Team")}
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              Speak With Our Growth Team
              <ArrowRight size={16} />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default AIGrowthEngine;
