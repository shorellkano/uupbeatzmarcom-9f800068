import { ReactNode, useRef, forwardRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  parallax?: boolean;
}

const AnimatedSection = forwardRef<HTMLDivElement, AnimatedSectionProps>(
  ({ children, className = "", delay = 0, parallax = false }, _ref) => {
    const internalRef = useRef(null);
    const isInView = useInView(internalRef, { once: true, margin: "-100px" });
    const { scrollYProgress } = useScroll({
      target: internalRef,
      offset: ["start end", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

    return (
      <motion.div
        ref={internalRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{
          duration: 0.9,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={parallax ? { y } : undefined}
        className={className}
      >
        {children}
      </motion.div>
    );
  }
);

AnimatedSection.displayName = "AnimatedSection";

export default AnimatedSection;
