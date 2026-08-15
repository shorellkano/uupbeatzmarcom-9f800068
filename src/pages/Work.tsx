import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const WA = (msg: string) => `https://wa.me/2349097927111?text=${encodeURIComponent(msg)}`;

const projects = [
  { name: "Storvo", url: "storvo.co", category: "Ecommerce Platform", desc: "An ecommerce platform helping entrepreneurs create online stores and sell beyond social media conversations.", accent: "265 85% 62%" },
  { name: "ZebraLink", url: "zebralinkcard.com", category: "Digital Business Card Web App", desc: "A digital networking platform helping professionals share their identity through QR and NFC technology.", accent: "45 93% 58%" },
  { name: "Upbeatz Hub", url: "", category: "Client Management Platform", desc: "An internal platform used to manage client projects, campaigns and reporting in one place.", accent: "347 77% 50%" },
  { name: "M&M Group", url: "mandmgroup.ng", category: "Corporate Website", desc: "A professional corporate website designed to showcase business services and build credibility.", accent: "32 60% 55%" },
  { name: "Rowe Park Pool", url: "roweparkpool.mandmgroup.ng", category: "Sports & Leisure Website", desc: "A digital platform showcasing swimming programmes, facilities, events and customer experiences.", accent: "205 90% 55%" },
  { name: "Relish Lounge", url: "relishlounge.com.ng", category: "Restaurant & Hospitality Website", desc: "A modern hospitality website designed to showcase the restaurant experience, menu and brand.", accent: "30 95% 55%" },
  { name: "Puretem Nigeria", url: "puretem.com.ng", category: "Corporate Services Website", desc: "A professional website built to communicate services and strengthen online presence.", accent: "48 95% 55%" },
  { name: "Felicitous Travels", url: "travelwithfelicitous.com.ng", category: "Travel Website", desc: "A travel platform designed to showcase destinations and make customer enquiries easier.", accent: "40 70% 55%" },
  { name: "Relief Care Support", url: "reliefcaresupport.com.ng", category: "Healthcare Services Website", desc: "A trusted service website designed to communicate care solutions and connect families with support.", accent: "225 80% 58%" },
  { name: "Safe Haven", url: "safehaven.host", category: "Hosting Platform Web App", desc: "A hosting platform designed around secure digital infrastructure and user ownership.", accent: "152 85% 50%" },
];

const Work = () => (
  <Layout>
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-20" />
      <div className="absolute inset-0 bg-radial-center" />
      <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
        <AnimatedSection>
          <p className="text-primary font-display font-semibold text-label uppercase mb-6 tracking-[0.25em]">Portfolio</p>
          <h1 className="text-[clamp(2rem,7vw,4.5rem)] font-display font-extrabold leading-[1.05] tracking-[-0.03em] mb-6">
            <span className="gradient-text">SELECTED </span>
            <span className="gradient-text-primary">WORK</span>
          </h1>
          <p className="text-muted-foreground text-body-lg max-w-2xl mx-auto leading-relaxed">
            Websites, ecommerce platforms and digital products we've built for businesses and ideas.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <div className="section-divider" />

    <section className="section-padding bg-mesh relative">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <AnimatedSection key={p.name} delay={(i % 3) * 0.08}>
              <div className="glass-card-hover p-7 h-full group relative overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{ background: `radial-gradient(circle at 20% 0%, hsl(${p.accent} / 0.12) 0%, transparent 60%)` }} />
                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h2 className="font-display font-bold text-lg text-foreground">{p.name}</h2>
                    {p.url && (
                      <a href={`https://${p.url}`} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${p.name}`}>
                        <ArrowUpRight className="text-primary transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" size={18} />
                      </a>
                    )}
                  </div>
                  <p className="text-primary text-xs uppercase tracking-wider font-display font-semibold mb-4">{p.category}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                  {p.url && <p className="text-muted-foreground/50 text-xs mt-5">{p.url}</p>}
                </div>
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
            <h2 className="text-display-md font-display font-bold mb-5 text-foreground">Have a Project in Mind?</h2>
            <p className="text-muted-foreground mb-10 text-body-lg max-w-md mx-auto">
              Tell us what you want to build and we'll map out the right approach.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={WA("Hi Upbeatz Marcom, I'd like to start a project.")} target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center gap-2 group">
                Start Your Project
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <Link to="/websites" className="btn-outline">Website Development</Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default Work;
