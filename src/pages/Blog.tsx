import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import Seo from "@/components/Seo";
import { categories, formatDate, posts } from "@/data/blog";

const Blog = () => {
  const [active, setActive] = useState<string>("All");
  const filtered = active === "All" ? posts : posts.filter((p) => p.category === active);

  return (
    <Layout>
      <Seo
        title="Insights & Blog | Digital Marketing Strategies | Upbeatz Marcom"
        description="Practical digital marketing insights, strategies and resources to help businesses attract customers, improve visibility and grow online."
        path="/blog"
      />

      <section className="section-padding relative">
        <div className="absolute inset-0 bg-radial-center" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection className="text-center mb-14">
            <p className="text-primary font-display font-semibold text-label uppercase mb-5 tracking-[0.25em]">Insights</p>
            <h1 className="text-display-md font-display font-bold text-foreground mb-5">Insights That Help Businesses Grow</h1>
            <p className="text-muted-foreground text-body-lg max-w-2xl mx-auto">
              Practical digital marketing insights, strategies and resources to help businesses attract customers, improve visibility and grow online.
            </p>
          </AnimatedSection>

          <AnimatedSection className="flex flex-wrap justify-center gap-2.5 mb-12">
            {["All", ...categories].map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full border px-4 py-2 text-xs font-medium transition-all duration-300 ${
                  active === c
                    ? "border-primary/50 bg-primary/15 text-foreground"
                    : "border-border/40 text-muted-foreground hover:text-foreground hover:border-primary/30"
                }`}
              >
                {c}
              </button>
            ))}
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((p, i) => (
              <AnimatedSection key={p.slug} delay={i * 0.05}>
                <article className="glass-card-hover h-full flex flex-col overflow-hidden group">
                  <Link to={`/blog/${p.slug}`} className="block overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.imageAlt}
                      loading="lazy"
                      width={1200}
                      height={675}
                      className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </Link>
                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-primary text-[11px] uppercase tracking-[0.18em] font-display font-semibold mb-3">
                      {p.category}
                    </span>
                    <h2 className="font-display font-bold text-lg text-foreground leading-snug mb-3">
                      <Link to={`/blog/${p.slug}`} className="hover:text-primary transition-colors duration-300">{p.title}</Link>
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">{p.summary}</p>
                    <div className="flex items-center gap-4 text-muted-foreground/60 text-xs mb-5">
                      <span className="flex items-center gap-1.5"><CalendarDays size={13} />{formatDate(p.date)}</span>
                      <span className="flex items-center gap-1.5"><Clock size={13} />{p.readingTime}</span>
                    </div>
                    <Link to={`/blog/${p.slug}`} className="text-sm text-foreground inline-flex items-center gap-2 hover:text-primary transition-colors duration-300">
                      Read Article <ArrowRight size={15} />
                    </Link>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;