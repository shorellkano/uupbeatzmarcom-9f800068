import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/upbeatz-logo.png";

const Logo = ({ className = "h-9 md:h-10" }: { className?: string }) => {
  const [failed, setFailed] = useState(false);

  return (
    <Link to="/" className="inline-flex items-center group" aria-label="Upbeatz Marcom home">
      {failed ? (
        <span className="font-body font-semibold text-base md:text-lg tracking-wide uppercase">
          <span className="text-foreground">Upbeatz</span>
          <span className="text-primary ml-1 font-light italic lowercase">Marcom</span>
        </span>
      ) : (
        <span className="inline-flex items-center rounded-xl bg-white px-2.5 py-1.5 transition-all duration-500 group-hover:shadow-[0_0_30px_-8px_hsl(var(--primary)/0.5)]">
          <img
            src={logo}
            alt="Upbeatz Marcom logo"
            onError={() => setFailed(true)}
            className={`${className} w-auto`}
          />
        </span>
      )}
    </Link>
  );
};

export default Logo;
