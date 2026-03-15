import Navbar from "./Navbar";
import Footer from "./Footer";
import { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Layout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background relative noise">
      {/* Ambient layers */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Top glow */}
        <div className="absolute -top-[300px] left-1/2 -translate-x-1/2 w-[1000px] h-[800px] rounded-full animate-pulse-glow"
          style={{ background: "radial-gradient(ellipse, hsl(347 77% 50% / 0.06) 0%, transparent 70%)" }} />
        {/* Right accent */}
        <div className="absolute top-1/3 -right-[200px] w-[500px] h-[500px] rounded-full animate-pulse-glow"
          style={{ background: "radial-gradient(circle, hsl(350 90% 68% / 0.04) 0%, transparent 70%)", animationDelay: "2.5s" }} />
        {/* Bottom glow */}
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] rounded-full animate-pulse-glow"
          style={{ background: "radial-gradient(ellipse, hsl(347 77% 50% / 0.03) 0%, transparent 70%)", animationDelay: "4s" }} />
        {/* Grid overlay */}
        <div className="absolute inset-0 grid-overlay opacity-30" />
      </div>

      <Navbar />

      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 pt-20"
        >
          {children}
        </motion.main>
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Layout;
