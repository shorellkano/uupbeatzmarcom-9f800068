import { Link } from "react-router-dom";
import { forwardRef } from "react";
import AnimatedSection from "./AnimatedSection";
import { Instagram } from "lucide-react";
import Logo from "./Logo";


const Footer = forwardRef<HTMLElement>((_, ref) => (
  <footer ref={ref} className="relative border-t border-border/10">
    <div className="absolute inset-0 bg-mesh opacity-50" />
    <div className="container mx-auto px-6 py-20 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
        <div className="md:col-span-5">
          <AnimatedSection>
            <div className="mb-6"><Logo className="h-10" /></div>
            <p className="text-muted-foreground text-body-md max-w-sm mb-8 leading-relaxed">
              Upbeatz Marcom is a digital marketing agency helping businesses grow through social media, content strategy, advertising, AI-powered marketing and practical digital solutions.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground/40 text-xs">
              <div className="w-1.5 h-1.5 rounded-full bg-primary/50 animate-pulse" />
              1 Modupe Johnson Crescent, Surulere, Lagos · 43 Ajayi Road, Ogba, Lagos
            </div>
          </AnimatedSection>
        </div>

        <div className="md:col-span-3 md:col-start-7">
          <AnimatedSection delay={0.1}>
            <h4 className="font-display font-semibold text-label uppercase text-muted-foreground mb-5">Navigate</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Home", to: "/" },
                { label: "Our Work", to: "/work" },
                { label: "Websites", to: "/websites" },
                { label: "Insights", to: "/blog" },
                { label: "Campaign Packages", to: "/packages" },
                { label: "Storvo Partnership", to: "/storvo" },
                { label: "Contact", to: "/contact" },
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
              <a href="https://wa.me/2349097927111" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-all duration-300">
                WhatsApp: +234 909 792 7111
              </a>
              <a href="tel:+2347071042782" className="text-sm text-muted-foreground hover:text-primary transition-all duration-300">
                +234 707 104 2782
              </a>
              <a href="https://www.instagram.com/upbeatzmarcom" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-2">
                <Instagram size={16} />
                @upbeatzmarcom
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <div className="section-divider mt-16 mb-8" />

      <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 md:gap-6 mb-6">
        {[
          { label: "Privacy Policy", to: "/privacy-policy" },
          { label: "Terms & Conditions", to: "/terms-and-conditions" },
          { label: "Cookie Policy", to: "/cookie-policy" },
        ].map((l) => (
          <Link key={l.to} to={l.to} className="text-xs text-muted-foreground hover:text-primary transition-colors duration-300">
            {l.label}
          </Link>
        ))}
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground/40 text-xs">© 2026 Upbeatz Marcom. All rights reserved.</p>
        <p className="text-muted-foreground/40 text-xs tracking-wider uppercase">Marketing & Communication</p>
      </div>
    </div>
  </footer>
));

Footer.displayName = "Footer";

export default Footer;
