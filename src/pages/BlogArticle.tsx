import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, CalendarDays, Clock, User } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import Seo from "@/components/Seo";
import { formatDate, getPost, posts } from "@/data/blog";
import { trackWhatsApp } from "@/lib/analytics";

const WA = "https://wa.me/2349097927111?text=" + encodeURIComponent("Hi Upbeatz Marcom, I'd like help growing my business online.");

const BlogArticle = () => {
  const { slug } = useParams();
  const post = getPost(slug);

  if (!post) {
    return (
      <Layout>
        <Seo title="Article Not Found | Upbeatz Marcom" description="This article could not be found." path={`/blog/${slug ?? ""}`} />
        <section className="section-padding container mx-auto max-w-2xl text-center">
          <h1 className="text-display-sm font-display font-bold text-foreground mb-5">Article not found</h1>
          <Link to="/blog" className="btn-outline inline-flex items-center gap-2"><ArrowLeft size={16} /> Back to Insights</Link>
        </section>
      </Layout>
    );
  }

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <Layout>
      <Seo
        title={`${post.title} | Upbeatz Marcom`}
        description={post.summary}
        path={`/blog/${post.slug}`}
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.summary,
          datePublished: post.date,
          author: { "@type": "Organization", name: post.author },
          publisher: { "@type": "Organization", name: "Upbeatz Marcom" },
        }}
      />

      <article className="section-padding relative">
        <div className="absolute inset-0 bg-radial-center" />
        <div className="container mx-auto max-w-3xl relative z-10">
          <AnimatedSection>
            <Link to="/blog" className="text-muted-foreground text-sm inline-flex items-center gap-2 mb-8 hover:text-foreground transition-colors duration-300">
              <ArrowLeft size={15} /> All Insights
            </Link>
            <p className="text-primary text-[11px] uppercase tracking-[0.2em] font-display font-semibold mb-4">{post.category}</p>
            <h1 className="text-display-sm font-display font-bold text-foreground leading-tight mb-6">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-5 text-muted-foreground/70 text-xs mb-10">
              <span className="flex items-center gap-1.5"><User size={13} />{post.author}</span>
              <span className="flex items-center gap-1.5"><CalendarDays size={13} />{formatDate(post.date)}</span>
              <span className="flex items-center gap-1.5"><Clock size={13} />{post.readingTime}</span>
            </div>
            <img
              src={post.image}
              alt={post.imageAlt}
              width={1200}
              height={675}
              className="w-full aspect-video object-cover rounded-2xl border border-border/30 mb-12"
            />
          </AnimatedSection>

          <AnimatedSection className="space-y-6">
            {post.body.map((b, i) => {
              if (b.type === "h2") return <h2 key={i} className="font-display font-bold text-2xl text-foreground pt-4">{b.text}</h2>;
              if (b.type === "list")
                return (
                  <ul key={i} className="space-y-2.5">
                    {b.items?.map((it) => (
                      <li key={it} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                );
              return <p key={i} className="text-muted-foreground leading-relaxed text-body-md">{b.text}</p>;
            })}
          </AnimatedSection>

          <AnimatedSection className="mt-16">
            <div className="glass-card p-10 text-center glow-red border-primary/15">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">Need help growing your business online?</h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Tell us about your business and we'll map out the right growth strategy.
              </p>
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsApp("blog_article_cta", "Talk To Upbeatz")}
                className="btn-primary inline-flex items-center gap-2"
              >
                Talk To Upbeatz <ArrowRight size={16} />
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection className="mt-20">
            <h2 className="font-display font-bold text-xl text-foreground mb-6">Related articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {related.map((r) => (
                <Link key={r.slug} to={`/blog/${r.slug}`} className="glass-card-hover p-5 group">
                  <p className="text-primary text-[10px] uppercase tracking-[0.18em] font-display font-semibold mb-2">{r.category}</p>
                  <p className="font-display font-semibold text-foreground text-sm leading-snug group-hover:text-primary transition-colors duration-300">{r.title}</p>
                  <p className="text-muted-foreground/60 text-xs mt-3">{r.readingTime}</p>
                </Link>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </article>
    </Layout>
  );
};

export default BlogArticle;