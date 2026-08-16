import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import storvoAsset from "@/assets/storvo.png.asset.json";
import zebraAsset from "@/assets/zebralink.png.asset.json";
import safehavenAsset from "@/assets/safehaven.jpg.asset.json";

const WA = (msg: string) => `https://wa.me/2349097927111?text=${encodeURIComponent(msg)}`;

type Project = {
  name: string; url?: string; category: string; desc: string; accent: string; logo?: string; light?: boolean;
};

const digitalProducts: Project[] = [
  { name: "ZebraLink", url: "zebralinkcard.com", category: "Digital Business Card Web App", desc: "A digital networking platform helping professionals share their identity through QR and NFC technology.", accent: "45 93% 58%", logo: zebraAsset.url, light: true },
  { name: "Storvo", url: "storvo.co", category: "Digital Store Platform", desc: "A platform helping entrepreneurs create online stores and sell beyond social media conversations.", accent: "265 85% 62%", logo: storvoAsset.url, light: true },
  { name: "Safe Haven", url: "safehaven.host", category: "Hosting Platform", desc: "A hosting platform for AI-built apps, websites and digital creations, built around secure infrastructure and user ownership.", accent: "152 85% 50%", logo: safehavenAsset.url },
  { name: "Upbeatz Hub", category: "Client Management Platform", desc: "An internal platform used to manage client projects, campaigns and reporting in one place.", accent: "347 77% 50%" },
];

const clientProjects: Project[] = [
  { name: "M&M Group", url: "mandmgroup.ng", category: "Corporate Website", desc: "A professional corporate website designed to showcase business services and build credibility.", accent: "32 60% 55%" },
  { name: "Rowe Park Swimming Pool", url: "roweparkpool.mandmgroup.ng", category: "Sports & Leisure Website", desc: "A digital platform showcasing swimming programmes, facilities, events and customer experiences.", accent: "205 90% 55%" },
  { name: "Felicitous Travels", url: "travelwithfelicitous.com.ng", category: "Travel Website", desc: "A travel platform designed to showcase destinations and make customer enquiries easier.", accent: "40 70% 55%" },
  { name: "Puretem Nigeria", url: "puretem.com.ng", category: "Corporate Services Website", desc: "A professional website built to communicate services and strengthen online presence.", accent: "48 95% 55%" },
  { name: "Relief Care Support", url: "reliefcaresupport.com.ng", category: "Care Services Website", desc: "A trusted service website designed to communicate care solutions and connect families with support.", accent: "225 80% 58%" },
  { name: "Lydia Spring School", category: "Education Website", desc: "An education website designed to present school programmes, values and admissions clearly to parents.", accent: "280 70% 60%" },
  { name: "Relish Lounge", url: "relishlounge.com.ng", category: "Hospitality Website", desc: "A modern hospitality website designed to showcase the restaurant experience, menu and brand.", accent: "30 95% 55%" },
];

const ProjectCard = ({ p }: { p: Project }) => (
  <div className="glass-card-hover h-full group relative overflow-hidden flex flex-col">
    <div className="relative h-36 flex items-center justify-center overflow-hidden border-b border-border/20"
      style={{ background: `linear-gradient(135deg, hsl(${p.accent} / 0.18) 0%, hsl(0 0% 6%) 70%)` }}>
      <div className="absolute inset-0 grid-overlay opacity-30" />
      {p.logo ? (
        <div className={`relative z-10 rounded-xl px-4 py-2 ${p.light ? "bg-white/90" : "bg-black/40"}`}>
          <img src={p.logo} alt={`${p.name} logo`} loading="lazy" className="max-h-12 w-auto object-contain" />
        </div>
      ) : (
        <span className="relative z-10 font-display font-extrabold text-2xl tracking-tight" style={{ color: `hsl(${p.accent})` }}>
          {p.name}
        </span>
      )}
    </div>
    <div className="p-7 flex flex-col flex-1">
      <h3 className="font-display font-bold text-lg text-foreground mb-1.5">{p.name}</h3>
      <p className="text-primary text-xs uppercase tracking-wider font-display font-semibold mb-4">{p.category}</p>
      <p className="text-muted-foreground text-sm leading-relaxed mb-6">{p.desc}</p>
      <div className="mt-auto">
        {p.url ? (
          <a href={`https://${p.url}`} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
            View Project
            <ArrowUpRight size={15} className="text-primary transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        ) : (
          <span className="text-muted-foreground/50 text-xs uppercase tracking-wider">Internal project</span>
        )}
      </div>
    </div>
  </div>
);

const Section = ({ label, title, subtitle, items }: { label: string; title: string; subtitle: string; items: Project[] }) => (
  <section className="section-padding bg-mesh relative">
    <div className="container mx-auto max-w-6xl relative z-10">
      <AnimatedSection className="mb-12">
        <p className="text-primary font-display font-semibold text-label uppercase mb-4 tracking-[0.25em]">{label}</p>
        <h2 className="text-display-sm font-display font-bold text-foreground mb-3">{title}</h2>
        <p className="text-muted-foreground max-w-2xl">{subtitle}</p>
      </AnimatedSection>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((p, i) => (
          <AnimatedSection key={p.name} delay={(i % 3) * 0.08}>
            <ProjectCard p={p} />
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

const Work = () => (
  <Layout>
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-20" />
      <div className="absolute inset-0 bg-radial-center" />
      <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
        <AnimatedSection>
          <p className="text-primary font-display font-semibold text-label uppercase mb-6 tracking-[0.25em]">Portfolio</p>
          <h1 className="text-[clamp(2rem,7vw,4.5rem)] font-display font-extrabold leading-[1.05] tracking-[-0.03em] mb-6">
            <span className="gradient-text">OUR </span>
            <span className="gradient-text-primary">WORK</span>
          </h1>
          <p className="text-muted-foreground text-body-lg max-w-2xl mx-auto leading-relaxed">
            We help businesses improve their digital presence, attract customers and build stronger brands.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <div className="section-divider" />

    <Section
      label="Digital Products"
      title="Platforms we've helped build"
      subtitle="Digital products designed to solve real business problems and scale."
      items={digitalProducts}
    />

    <div className="section-divider" />

    <Section
      label="Client Projects"
      title="Websites built for growing brands"
      subtitle="Corporate, hospitality, education and service websites designed to build credibility and convert visitors."
      items={clientProjects}
    />

    <div className="section-divider" />

    <section className="section-padding relative">
      <div className="absolute inset-0 bg-radial-dark" />
      <div className="container mx-auto max-w-3xl text-center relative z-10">
        <AnimatedSection>
          <div className="glass-card p-12 md:p-16 glow-red border-primary/15">
            <h2 className="text-display-md font-display font-bold mb-5 text-foreground">Have a Project in Mind?</h2>
            <p className="text-muted-foreground mb-10 text-body-lg max-w-md mx-auto">
              Tell us what you want to achieve and we'll map out the right approach.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={WA("Hi Upbeatz Marcom, I'd like to grow my business online.")} target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center gap-2 group">
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

export default Work;
