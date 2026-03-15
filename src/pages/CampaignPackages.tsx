import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight, RefreshCw, MousePointerClick, MessageCircle, ShoppingCart } from "lucide-react";

const packages = [
  {
    name: "Local Visibility Starter",
    price: "₦25,000 – ₦30,000",
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
    price: "₦80,000 – ₦100,000",
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

const CampaignPackages = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="section-padding bg-radial-dark">
        <div className="container mx-auto max-w-3xl text-center">
          <AnimatedSection>
            <p className="text-primary font-display font-semibold text-sm tracking-[0.2em] uppercase mb-4">Campaign Packages</p>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold mb-4 gradient-text">
              Choose Your Growth Plan
            </h1>
            <p className="text-muted-foreground text-lg">
              Transparent pricing. Real results. Pick the campaign that fits your business.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Packages */}
      <section className="section-padding">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {packages.map((pkg, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className={`glass-card p-8 h-full flex flex-col relative ${pkg.featured ? "glow-red border-primary/30 md:scale-105 z-10" : ""}`}>
                  {pkg.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-[10px] font-display font-bold tracking-[0.15em] uppercase">
                      Premium
                    </div>
                  )}
                  <p className="text-muted-foreground text-xs font-medium uppercase tracking-wider mb-1">{pkg.period}</p>
                  <h3 className="font-display font-bold text-xl mb-2 text-foreground">{pkg.name}</h3>
                  <p className="text-primary font-display font-extrabold text-3xl mb-6">{pkg.price}</p>

                  <div className="mb-4">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Best For</p>
                    <div className="flex flex-wrap gap-2">
                      {pkg.bestFor.map((b) => (
                        <span key={b} className="px-2 py-1 rounded-md bg-secondary text-foreground text-xs">{b}</span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6 flex-1">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Includes</p>
                    <ul className="space-y-2">
                      {pkg.includes.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                          <CheckCircle2 className="text-primary shrink-0" size={14} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6 p-3 rounded-lg bg-secondary/50">
                    <p className="text-xs text-muted-foreground">Recommended ad budget</p>
                    <p className="text-sm font-display font-bold text-foreground">{pkg.adBudget}</p>
                  </div>

                  <button className={`w-full py-3.5 rounded-lg font-display font-bold text-sm transition-all duration-300 ${
                    pkg.featured
                      ? "bg-primary text-primary-foreground hover:shadow-[0_0_25px_-5px_hsl(var(--primary)/0.5)] hover:scale-[1.02]"
                      : "border border-border/50 text-foreground hover:border-primary/40 hover:bg-primary/5"
                  }`}>
                    {pkg.cta}
                  </button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Types */}
      <section className="section-padding bg-radial-center">
        <div className="container mx-auto max-w-5xl">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-primary font-display font-semibold text-sm tracking-[0.15em] uppercase mb-3">Campaign Types</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Three Ways We Drive Results</h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {campaignTypes.map((ct, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="glass-card-hover p-8 h-full text-center">
                  <ct.icon className="text-primary mx-auto mb-4" size={32} />
                  <h3 className="font-display font-bold text-lg mb-1 text-foreground">{ct.name}</h3>
                  <p className="text-primary text-sm font-semibold mb-3">Goal: {ct.goal}</p>
                  <p className="text-muted-foreground text-sm">{ct.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Retargeting */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div>
                <RefreshCw className="text-primary mb-4" size={32} />
                <h2 className="text-3xl font-display font-bold mb-4 text-foreground">
                  Most Customers Don't Buy The First Time
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Upbeatz retargets visitors who viewed your products but didn't purchase. We show them follow-up ads that bring them back to complete their order — dramatically improving your conversion rate.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="glass-card p-8 border-primary/20">
                <p className="text-muted-foreground text-xs uppercase tracking-wider mb-3">Example Retargeting Ad</p>
                <div className="bg-secondary/50 rounded-lg p-6 text-center">
                  <p className="text-foreground font-display font-bold text-lg mb-2">Still interested in this dress?</p>
                  <p className="text-muted-foreground text-sm mb-4">Order today and get free delivery.</p>
                  <div className="inline-block px-5 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold">
                    Shop Now
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl text-center">
          <AnimatedSection>
            <div className="glass-card p-12 md:p-16 glow-red border-primary/20">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-foreground">
                Start Your Campaign Today
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Choose a package or book a call to discuss your goals.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#" className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-display font-bold text-sm transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.5)] hover:scale-105">
                  Book Strategy Call
                </a>
                <Link to="/packages" className="px-8 py-4 rounded-lg border border-border/50 text-foreground font-display font-semibold text-sm transition-all duration-300 hover:border-primary/40">
                  Choose Campaign Package
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default CampaignPackages;
