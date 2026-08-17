import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import Seo from "@/components/Seo";

export interface LegalSection {
  heading: string;
  paragraphs?: string[];
  items?: string[];
}

interface LegalPageProps {
  title: string;
  metaTitle: string;
  metaDescription: string;
  path: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
}

const LegalPage = ({ title, metaTitle, metaDescription, path, intro, updated, sections }: LegalPageProps) => (
  <Layout>
    <Seo title={metaTitle} description={metaDescription} path={path} />
    <section className="section-padding relative">
      <div className="absolute inset-0 bg-radial-center" />
      <div className="container mx-auto max-w-3xl relative z-10">
        <AnimatedSection className="mb-12">
          <p className="text-primary font-display font-semibold text-label uppercase mb-5 tracking-[0.25em]">Legal</p>
          <h1 className="text-display-sm font-display font-bold text-foreground mb-5">{title}</h1>
          <p className="text-muted-foreground leading-relaxed mb-3">{intro}</p>
          <p className="text-muted-foreground/50 text-xs">Last updated: {updated}</p>
        </AnimatedSection>

        <AnimatedSection className="glass-card p-8 md:p-10 space-y-8">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="font-display font-bold text-lg text-foreground mb-3">{s.heading}</h2>
              {s.paragraphs?.map((p) => (
                <p key={p} className="text-muted-foreground text-sm leading-relaxed mb-3">{p}</p>
              ))}
              {s.items && (
                <ul className="space-y-2 mt-2">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <p className="text-muted-foreground/50 text-xs leading-relaxed border-t border-border/20 pt-6">
            This document is provided as general information and is not legal advice. Please have it reviewed by a qualified
            legal professional before relying on it for your business.
          </p>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default LegalPage;