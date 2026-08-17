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
      const header = 88; // fixed navbar height + breathing room
      const timers: number[] = [];
      // Wait for the target route to mount (and for any library scroll reset
      // that runs on navigation) before positioning the section.
      const attempt = (tries = 0) => {
        const el = document.getElementById(id);
        if (!el) {
          if (tries < 30) timers.push(window.setTimeout(() => attempt(tries + 1), 50));
          return;
        }
        const top = el.getBoundingClientRect().top + window.scrollY - header;
        window.scrollTo({ top, behavior: "smooth" });
      };
      timers.push(window.setTimeout(() => attempt(), 80));
      // Second pass corrects for late-loading images/animated sections.
      timers.push(window.setTimeout(() => attempt(), 450));
      return () => timers.forEach(clearTimeout);
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