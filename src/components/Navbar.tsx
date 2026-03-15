import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Campaign Packages", href: "/packages" },
  { label: "Campaign Process", href: "/process" },
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 glass-card border-0 border-b border-border/30"
    >
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-display font-bold text-xl tracking-tight text-foreground">
            Upbeatz<span className="text-primary"> Marcom</span>
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium transition-colors duration-300 ${
                location.pathname === link.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/packages"
            className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold transition-all duration-300 hover:shadow-[0_0_20px_-3px_hsl(var(--primary)/0.5)] hover:scale-105"
          >
            Get Customers
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-card/95 backdrop-blur-xl border-t border-border/30"
          >
            <div className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/packages"
                onClick={() => setIsOpen(false)}
                className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold text-center"
              >
                Get Customers
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
