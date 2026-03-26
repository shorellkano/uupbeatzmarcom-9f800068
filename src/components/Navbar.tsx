import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/upbeatz-logo.jpg";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Packages", href: "/packages" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-background/70 backdrop-blur-2xl border-b border-border/20 shadow-[0_4px_30px_-10px_hsl(0_0%_0%/0.5)]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-6">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="font-display font-bold text-lg tracking-tight text-foreground transition-colors duration-300">
            Upbeatz<span className="text-primary transition-all duration-300 group-hover:drop-shadow-[0_0_8px_hsl(var(--primary)/0.5)]"> Marcom</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium transition-all duration-300 relative group ${
                location.pathname === link.href
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
              <span className={`absolute -bottom-1 left-0 h-px bg-primary transition-all duration-500 ${
                location.pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
              }`} />
            </Link>
          ))}
          <Link to="/packages" className="btn-primary !py-2.5 !px-6 !text-xs flex items-center gap-2">
            Get Customers
          </Link>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground p-2">
          <motion.div animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.3 }}>
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </motion.div>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden bg-background/95 backdrop-blur-2xl border-t border-border/20"
          >
            <div className="flex flex-col gap-1 p-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors border-b border-border/10"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                to="/packages"
                onClick={() => setIsOpen(false)}
                className="btn-primary text-center mt-4 !py-3"
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
