import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border/30 bg-card/30">
    <div className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <h3 className="font-display font-bold text-xl mb-4 text-foreground">
            Upbeatz<span className="text-primary"> Marcom</span>
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-md mb-6">
            We help businesses turn online attention into real customers through paid social campaigns, customer acquisition systems, and conversion-focused marketing strategies.
          </p>
          <p className="text-muted-foreground/60 text-xs">Lagos, Nigeria · London, UK</p>
        </div>

        <div>
          <h4 className="font-display font-semibold text-sm mb-4 text-foreground">Pages</h4>
          <div className="flex flex-col gap-3">
            <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link>
            <Link to="/packages" className="text-sm text-muted-foreground hover:text-primary transition-colors">Campaign Packages</Link>
            <Link to="/process" className="text-sm text-muted-foreground hover:text-primary transition-colors">Campaign Process</Link>
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold text-sm mb-4 text-foreground">Connect</h4>
          <div className="flex flex-col gap-3">
            <a href="mailto:hello@upbeatzmarcom.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">hello@upbeatzmarcom.com</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Instagram</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">LinkedIn</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Twitter / X</a>
          </div>
        </div>
      </div>

      <div className="border-t border-border/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground/50 text-xs">© 2025 Upbeatz Marcom. All rights reserved.</p>
        <p className="text-muted-foreground/50 text-xs">Marketing & Communication</p>
      </div>
    </div>
  </footer>
);

export default Footer;
