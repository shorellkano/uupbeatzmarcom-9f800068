import { Link } from "react-router-dom";
import logo from "@/assets/upbeatz-logo.png.asset.json";

const Logo = ({ className = "h-9 md:h-10" }: { className?: string }) => (
  <Link to="/" className="inline-flex items-center group" aria-label="Upbeatz Marcom home">
    <span className="inline-flex items-center rounded-xl bg-white px-2.5 py-1.5 transition-all duration-500 group-hover:shadow-[0_0_30px_-8px_hsl(var(--primary)/0.5)]">
      <img src={logo.url} alt="Upbeatz Marcom logo" className={`${className} w-auto`} />
    </span>
  </Link>
);

export default Logo;
