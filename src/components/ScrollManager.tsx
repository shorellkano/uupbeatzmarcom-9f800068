import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "@/lib/analytics";

/**
 * Handles route + hash scrolling with an offset for the fixed header,
 * and reports a page_view on every route change.
 */
const ScrollManager = () => {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      // Wait for the target route to mount before measuring.
      const attempt = (tries = 0) => {
        const el = document.getElementById(id);
        if (el) {
          const header = 88; // fixed navbar height + breathing room
          const top = el.getBoundingClientRect().top + window.scrollY - header;
          window.scrollTo({ top, behavior: "smooth" });
        } else if (tries < 20) {
          requestAnimationFrame(() => attempt(tries + 1));
        }
      };
      attempt();
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [pathname, hash, key]);

  useEffect(() => {
    trackPageView(pathname + hash);
  }, [pathname, hash]);

  return null;
};

export default ScrollManager;