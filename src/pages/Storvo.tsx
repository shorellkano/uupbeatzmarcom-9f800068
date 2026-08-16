import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Palette, PenTool, Megaphone, Target, TrendingUp } from "lucide-react";
import storvoAsset from "@/assets/storvo.png.asset.json";

const WA = (msg: string) => `https://wa.me/2349097927111?text=${encodeURIComponent(msg)}`;

const support = [
  { icon: Palette, title: "Branding", desc: "A clear, credible brand identity customers remember." },
  { icon: PenTool, title: "Content Marketing", desc: "Product content, creative and storytelling that sells." },
  { icon: Megaphone, title: "Social Media Management", desc: "Consistent presence that builds audience and trust." },
  { icon: Target, title: "Advertising", desc: "Targeted campaigns that drive traffic and orders." },
  { icon: TrendingUp, title: "Growth Strategy", desc: "Data-led optimisation that turns visits into sales." },
];

const Storvo = () => (
  <Layout>
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-20" />
      <div className="absolute inset-0 bg-radial-center" />
      <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
        <AnimatedSection>
          <div className="inline-flex rounded-2xl bg-white px-6 py-3 mb-8">
            <img src={storvoAsset.url} alt="Storvo logo" className="h-8 w-auto object-contain" />
          </div>
          <p className="text-primary font-display font-semibold text-label uppercase mb-6 tracking-[0.25em]">Partnership</p>
          <h1 className="text-[clamp(2rem,7vw,4.5rem)] font-display font-extrabold leading-[1.05] tracking-[-0.03em] mb-6">
            <span className="gradient-text">STORVO </span>
            <span className="gradient-text-primary">× UPBEATZ MARCOM</span>
          </h1>
          <p className="text-muted-foreground text-body-lg max-w-2xl mx-auto leading-relaxed">
            Storvo builds the store. Upbeatz Marcom helps businesses grow.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <div className="section-divider" />

    <section className="section-padding bg-mesh relative">
      <div className="container mx-auto max-w-4xl relative z-10">
        <AnimatedSection>
          <div className="glass-card p-8 md:p-12 border-primary/15">
            <h2 className="text-display-sm font-display font-bold text-foreground mb-5">About Storvo</h2>
            <p className="text-muted-foreground text-body-lg leading-relaxed mb-8">
              Storvo helps businesses create professional online stores quickly and easily, giving entrepreneurs a simple way to showcase products, accept orders and sell beyond social media conversations.
            </p>
            <a href="https://storvo.co" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
              Visit Storvo
              <ArrowUpRight size={16} className="text-primary" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <div className="section-divider" />

    <section className="section-padding relative">
      <div className="absolute inset-0 bg-radial-dark" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <AnimatedSection className="text-center mb-16">
          <p className="text-primary font-display font-semibold text-label uppercase mb-5 tracking-[0.25em]">How We Support Store Owners</p>
          <h2 className="text-display-md font-display font-bold text-foreground">Where Upbeatz Marcom comes in</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {support.map((s, i) => (
            <AnimatedSection key={s.title} delay={(i % 3) * 0.08}>
              <div className="glass-card-hover p-8 h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                  <s.icon className="text-primary" size={22} />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <div className="section-divider" />

    <section className="section-padding relative">
      <div className="container mx-auto max-w-3xl text-center relative z-10">
        <AnimatedSection>
          <div className="glass-card p-12 md:p-16 glow-red border-primary/15">
            <h2 className="text-display-md font-display font-bold mb-5 text-foreground">Selling Online? Let's Grow It.</h2>
            <p className="text-muted-foreground mb-10 text-body-lg max-w-md mx-auto">
              Launch your store with Storvo and let Upbeatz Marcom bring the customers.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={WA("Hi Upbeatz Marcom, I want to grow my Storvo store.")} target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center gap-2 group">
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

export default Storvo;
