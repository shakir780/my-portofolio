"use client";

import { createContext, useContext } from "react";
import { MotionConfig, motion, useScroll, useSpring, type Variants } from "motion/react";

// One easing curve and timing for the whole site, so every animation feels related.
export const ease = [0.22, 1, 0.36, 1] as const;

// False while the loading screen covers the page; on-load animations wait for it.
export const IntroContext = createContext(true);
export const useIntroDone = () => useContext(IntroContext);

type RevealTag = "div" | "li" | "article" | "section" | "figure" | "header";
type StaggerTag = "div" | "ul" | "ol" | "dl";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export function MotionProvider({ children }: { children: React.ReactNode }) {
  // "user" turns off transform animations for people who prefer reduced motion.
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

/** Fades and lifts its children in the first time they scroll into view. */
export function Reveal({
  as = "div",
  delay = 0,
  y = 24,
  className,
  children,
}: {
  as?: RevealTag;
  delay?: number;
  y?: number;
  className?: string;
  children: React.ReactNode;
}) {
  const Component = motion[as] as typeof motion.div;
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </Component>
  );
}

/** Reveals its StaggerItem children one after another. */
export function Stagger({
  as = "div",
  stagger = 0.08,
  delay = 0,
  onMount = false,
  className,
  children,
}: {
  as?: StaggerTag;
  stagger?: number;
  delay?: number;
  /** Animate on page load instead of when scrolled into view (for above-the-fold content). */
  onMount?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  const introDone = useIntroDone();
  const Component = motion[as] as typeof motion.div;
  const trigger = onMount
    ? { animate: introDone ? "show" : "hidden" }
    : { whileInView: "show", viewport: { once: true, margin: "0px 0px -80px 0px" } };

  return (
    <Component
      className={className}
      initial="hidden"
      {...trigger}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
    >
      {children}
    </Component>
  );
}

export function StaggerItem({
  as = "div",
  className,
  children,
}: {
  as?: RevealTag;
  className?: string;
  children: React.ReactNode;
}) {
  const Component = motion[as] as typeof motion.div;
  return (
    <Component className={className} variants={itemVariants}>
      {children}
    </Component>
  );
}

/** A line of text that slides up from behind a mask, for large headings. */
export function MaskedLine({
  delay = 0,
  className = "",
  children,
}: {
  delay?: number;
  className?: string;
  children: React.ReactNode;
}) {
  const introDone = useIntroDone();
  return (
    <span className={`block overflow-hidden pb-[0.08em] ${className}`}>
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        animate={{ y: introDone ? "0%" : "110%" }}
        transition={{ duration: 0.9, delay, ease }}
      >
        {children}
      </motion.span>
    </span>
  );
}

/** Opens an image like a window, from a soft inset to full size. */
export function ClipReveal({
  delay = 0,
  className,
  children,
}: {
  delay?: number;
  className?: string;
  children: React.ReactNode;
}) {
  const introDone = useIntroDone();
  const hidden = { clipPath: "inset(12% 12% 12% 12% round 16px)", opacity: 0, scale: 1.04 };
  return (
    <motion.div
      className={className}
      initial={hidden}
      animate={introDone ? { clipPath: "inset(0% 0% 0% 0% round 16px)", opacity: 1, scale: 1 } : hidden}
      transition={{ duration: 1.1, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

/** Thin accent bar across the top of the page showing how far you've read. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-60 h-0.5 origin-left bg-accent"
      style={{ scaleX }}
    />
  );
}
