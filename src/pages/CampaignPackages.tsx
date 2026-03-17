import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  CheckCircle2, ArrowRight, ArrowUpRight, RefreshCw,
  MousePointerClick, MessageCircle, ShoppingCart,
  Eye, LogOut, Repeat, CreditCard
} from "lucide-react";

const packages = [
  {
    name: "Local Visibility Starter",
    price: "₦30,000",
    period: "Monthly Retainer",
    bestFor: ["Fashion sellers", "Wig vendors", "Small stores", "Home businesses"],
    includes: ["Campaign setup", "Facebook & Instagram ads", "Local targeting", "Product promotion", "Monthly report"],
    adBudget: "₦30,000 – ₦50,000/mo",
    cta: "Start This Campaign",
    featured: false,
  },
  {
    name: "Growth Campaign",
    price: "₦50,000",
    period: "Monthly Retainer",
    bestFor: ["Growing brands", "E-commerce stores", "Service businesses"],
    includes: ["Facebook & Instagram ads", "TikTok ads", "Product page optimization", "Conversion tracking", "Audience testing", "Performance report"],
    adBudget: "₦60,000 – ₦120,000/mo",
    cta: "Grow My Business",
    featured: false,
  },
  {
    name: "Scale Campaign",
    price: "₦100,000",
    period: "Monthly Retainer",
    bestFor: ["Scaling businesses", "Multi-product brands", "Agencies"],
    includes: ["Multi-platform ads", "Retargeting campaigns", "Lookalike audiences", "Advanced analytics", "Campaign optimization"],
    adBudget: "₦150,000 – ₦300,000/mo",
    cta: "Scale My Sales",
    featured: true,
  },
];

const campaignTypes = [
  { icon: MousePointerClick, name: "Traffic Campaign", goal: "Product page visits", desc: "Drive targeted traffic to your product pages and landing pages." },
  { icon: ShoppingCart, name: "Conversion Campaign", goal: "Direct purchases", desc: "Optimize for sales with conversion-focused ad strategies." },
  { icon: MessageCircle, name: "WhatsApp Lead Campaign", goal: "Customer inquiries", desc: "Generate direct customer conversations via WhatsApp." },
];

const retargetSteps = [
  { icon: Eye, label: "Visits product page", color: "text-foreground" },
  { icon: LogOut, label: "Leaves without buying", color: "text-muted-foreground" },
  { icon: Repeat, label: "Sees follow-up ad", color: "text-primary" },
  { icon: CreditCard, label: "Returns & purchases", color: "text-primary" },
];

const CampaignPackages = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="section-padding bg-radial-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-15" />
        <div className="container mx-auto max-w-3xl text-center relative z-10">
          <AnimatedSection>
            <p className="text-primary font-display font-semibold text-label uppercase mb-6 tracking-[0.25em]">Campaign Packages</p>
            <h1 className="text-display-lg font-display font-extrabold mb-6 gradient-text">
              Choose Your Growth Plan
            </h1>
            <p className="text-muted-foreground text-body-lg max-w-lg mx-auto">
              Transparent pricing. Real results. Pick the campaign that fits your business.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="section-divider" />

      {/* Packages */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-radial-center" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {packages.map((pkg, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className={`glass-card p-8 h-full flex flex-col relative card-lift ${
                  pkg.featured ? "glow-red border-primary/20 md:scale-105 z-10 overflow-visible pt-12" : "overflow-hidden"
                }`}>
                  {pkg.featured && (
                    <>
                      <div className="absolute inset-0 overflow-hidden rounded-[inherit]"
                        style={{ background: "radial-gradient(circle at 50% 0%, hsl(347 77% 50% / 0.1) 0%, transparent 50%)" }} />
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full bg-primary text-primary-foreground text-label font-display font-bold tracking-[0.15em] uppercase z-20 shadow-[0_4px_15px_-3px_hsl(var(--primary)/0.4)]">
                        Premium
                      </div>
                    </>
                  )}

                  <div className="relative z-10">
                    <p className="text-muted-foreground text-label font-medium uppercase tracking-[0.15em] mb-2 mt-2">{pkg.period}</p>
                    <h3 className="font-display font-bold text-xl mb-3 text-foreground">{pkg.name}</h3>
                    <p className="gradient-text-primary font-display font-extrabold text-3xl mb-8">{pkg.price}</p>

                    <div className="mb-5">
                      <p className="text-label font-semibold text-muted-foreground uppercase mb-3">Best For</p>
                      <div className="flex flex-wrap gap-2">
                        {pkg.bestFor.map((b) => (
                          <span key={b} className="px-2.5 py-1 rounded-lg bg-secondary/60 text-foreground/80 text-xs border border-border/20">{b}</span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-8 flex-1">
                      <p className="text-label font-semibold text-muted-foreground uppercase mb-3">Includes</p>
                      <ul className="space-y-2.5">
                        {pkg.includes.map((item) => (
                          <li key={item} className="flex items-center gap-2.5 text-sm text-foreground/80">
                            <CheckCircle2 className="text-primary shrink-0" size={14} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-8 p-4 rounded-xl bg-secondary/30 border border-border/15">
                      <p className="text-label text-muted-foreground uppercase">Recommended ad budget</p>
                      <p className="text-sm font-display font-bold text-foreground mt-1">{pkg.adBudget}</p>
                    </div>

                    <button className={`w-full py-4 rounded-xl font-display font-bold text-sm transition-all duration-500 flex items-center justify-center gap-2 group ${
                      pkg.featured
                        ? "btn-primary !w-full"
                        : "btn-outline !w-full"
                    }`}>
                      {pkg.cta}
                      <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Campaign Types */}
      <section className="section-padding bg-mesh relative">
        <div className="container mx-auto max-w-5xl relative z-10">
          <AnimatedSection>
            <div className="text-center mb-20">
              <p className="text-primary font-display font-semibold text-label uppercase mb-4 tracking-[0.2em]">Campaign Types</p>
              <h2 className="text-display-md font-display font-bold text-foreground">Three Ways We Drive Results</h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {campaignTypes.map((ct, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="glass-card-hover p-8 h-full text-center group cursor-default relative overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{ background: "radial-gradient(circle at 50% 0%, hsl(347 77% 50% / 0.06) 0%, transparent 60%)" }} />
                  <div className="relative z-10">
                    <div className="w-14 h-14 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-primary/20 group-hover:shadow-[0_0_25px_-5px_hsl(var(--primary)/0.3)]">
                      <ct.icon className="text-primary transition-transform duration-500 group-hover:scale-110" size={26} />
                    </div>
                    <h3 className="font-display font-bold text-lg mb-2 text-foreground">{ct.name}</h3>
                    <p className="text-primary text-sm font-display font-semibold mb-3">Goal: {ct.goal}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{ct.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Retargeting */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-radial-center" />
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <RefreshCw className="text-primary" size={24} />
                </div>
                <h2 className="text-display-md font-display font-bold mb-6 text-foreground leading-tight">
                  Most Customers Don't Buy The First Time
                </h2>
                <p className="text-muted-foreground text-body-md leading-relaxed mb-8">
                  Upbeatz retargets visitors who viewed your products but didn't purchase. We show them follow-up ads that bring them back — dramatically improving your conversion rate.
                </p>
                {/* Retargeting flow */}
                <div className="space-y-3">
                  {retargetSteps.map((step, i) => (
                    <AnimatedSection key={i} delay={0.4 + i * 0.12}>
                      <div className="flex items-center gap-4 group">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-500 ${
                          i >= 2 ? "bg-primary/10 border border-primary/20" : "bg-secondary/60 border border-border/20"
                        }`}>
                          <step.icon className={`${step.color} transition-transform duration-300 group-hover:scale-110`} size={18} />
                        </div>
                        <div className="flex-1 glass-card px-4 py-3 !rounded-lg">
                          <p className={`text-sm font-medium ${step.color}`}>{step.label}</p>
                        </div>
                        {i < retargetSteps.length - 1 && (
                          <div className="absolute left-[19px] mt-12 w-px h-3 bg-border/30" />
                        )}
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="glass-card p-8 border-primary/15 glow-red-subtle relative overflow-hidden">
                <div className="absolute inset-0"
                  style={{ background: "radial-gradient(circle at 50% 30%, hsl(347 77% 50% / 0.05) 0%, transparent 60%)" }} />
                <div className="relative z-10">
                  <p className="text-label text-muted-foreground uppercase tracking-[0.15em] mb-4">Example Retargeting Ad</p>
                  <div className="bg-secondary/30 rounded-xl p-8 text-center border border-border/15">
                    <p className="text-foreground font-display font-bold text-xl mb-3">Still interested in this dress?</p>
                    <p className="text-muted-foreground text-sm mb-6">Order today and get free delivery.</p>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-block px-6 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-display font-bold cursor-pointer shadow-[0_0_20px_-5px_hsl(var(--primary)/0.3)]"
                    >
                      Shop Now
                    </motion.div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
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
                  Start Your Campaign Today
                </h2>
                <p className="text-muted-foreground mb-10 text-body-lg max-w-md mx-auto">
                  Choose a package or book a call to discuss your goals.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a href="#" className="btn-primary flex items-center gap-2 group">
                    Book Strategy Call
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                  <Link to="/packages" className="btn-outline">
                    Choose Campaign Package
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default CampaignPackages;
