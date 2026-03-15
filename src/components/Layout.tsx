import Navbar from "./Navbar";
import Footer from "./Footer";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen bg-background relative">
    {/* Ambient background */}
    <div className="fixed inset-0 pointer-events-none z-0">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/[0.03] rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-accent/[0.02] rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
    </div>
    <Navbar />
    <main className="relative z-10 pt-16 md:pt-20">{children}</main>
    <Footer />
  </div>
);

export default Layout;
