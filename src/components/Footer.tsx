import { Link } from "react-router-dom";
import { forwardRef } from "react";
import AnimatedSection from "./AnimatedSection";

const Footer = forwardRef<HTMLElement>((_, ref) => (
  <footer ref={ref} className="relative border-t border-border/10">
    <div className="absolute inset-0 bg-mesh opacity-50" />
    <div className="container mx-auto px-6 py-20 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
        <div className="md:col-span-5">
          <AnimatedSection>
            <h3 className="font-display font-bold text-xl mb-4 text-foreground">
              Upbeatz<span className="text-primary"> Marcom</span>
            </h3>
            <p className="text-muted-foreground text-body-md max-w-sm mb-8 leading-relaxed">
              We help businesses turn online attention into real customers through paid social campaigns and conversion-focused marketing systems.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground/40 text-xs">
              <div className="w-1.5 h-1.5 rounded-full bg-primary/50 animate-pulse" />
              Lagos, Nigeria · London, UK
            </div>
          </AnimatedSection>
        </div>

        <div className="md:col-span-3 md:col-start-7">
          <AnimatedSection delay={0.1}>
            <h4 className="font-display font-semibold text-label uppercase text-muted-foreground mb-5">Navigate</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Home", to: "/" },
                { label: "Campaign Packages", to: "/packages" },
                { label: "Campaign Process", to: "/process" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 hover:translate-x-1 inline-flex"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </AnimatedSection>
        </div>

        <div className="md:col-span-3">
          <AnimatedSection delay={0.2}>
            <h4 className="font-display font-semibold text-label uppercase text-muted-foreground mb-5">Connect</h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:hello@upbeatzmarcom.com" className="text-sm text-muted-foreground hover:text-primary transition-all duration-300">
                hello@upbeatzmarcom.com
              </a>
              <a href="https://www.instagram.com/upbeatzmarcom" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 hover:translate-x-1 inline-flex">
                Instagram
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <div className="section-divider mt-16 mb-8" />

      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground/40 text-xs">© 2025 Upbeatz Marcom. All rights reserved.</p>
        <p className="text-muted-foreground/40 text-xs tracking-wider uppercase">Marketing & Communication</p>
      </div>
    </div>
  </footer>
));

Footer.displayName = "Footer";

export default Footer;
