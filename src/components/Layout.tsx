import Navbar from "./Navbar";
import Footer from "./Footer";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-background relative noise">
      {/* Ambient layers */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute -top-[300px] left-1/2 -translate-x-1/2 w-[1000px] h-[800px] rounded-full animate-pulse-glow"
          style={{ background: "radial-gradient(ellipse, hsl(347 77% 50% / 0.06) 0%, transparent 70%)" }} />
        <div className="absolute top-1/3 -right-[200px] w-[500px] h-[500px] rounded-full animate-pulse-glow"
          style={{ background: "radial-gradient(circle, hsl(350 90% 68% / 0.04) 0%, transparent 70%)", animationDelay: "2.5s" }} />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] rounded-full animate-pulse-glow"
          style={{ background: "radial-gradient(ellipse, hsl(347 77% 50% / 0.03) 0%, transparent 70%)", animationDelay: "4s" }} />
        <div className="absolute inset-0 grid-overlay opacity-30" />
      </div>

      <Navbar />
      <main className="relative z-10 pt-20">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
