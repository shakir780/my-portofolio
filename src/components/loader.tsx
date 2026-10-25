"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, animate, motion, useReducedMotion } from "motion/react";
import { IntroContext, ease } from "@/components/motion";
import { site } from "@/lib/site";

// Curtain easing: slow start, fast middle, soft landing.
const curtain = [0.76, 0, 0.24, 1] as const;

/**
 * Full-screen intro shown on every full page load (first visit or refresh).
 * It lives in the root layout, so client-side navigation between pages doesn't replay it.
 */
export function IntroGate({ children }: { children: React.ReactNode }) {
  const reduceMotion = useReducedMotion();
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(true);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const controls = animate(0, 100, {
      duration: reduceMotion ? 0.6 : 1.7,
      delay: reduceMotion ? 0 : 0.35,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (value) => setCount(Math.round(value)),
      onComplete: () => {
        setTimeout(() => setVisible(false), 250);
        // Start the page's own entrance while the curtain is still lifting.
        setTimeout(() => setDone(true), reduceMotion ? 250 : 550);
      },
    });
    return () => controls.stop();
  }, [reduceMotion]);

  // Keep the page from scrolling underneath the loader.
  useEffect(() => {
    if (!visible) return;
    const { style } = document.documentElement;
    const previous = style.overflow;
    style.overflow = "hidden";
    return () => {
      style.overflow = previous;
    };
  }, [visible]);

  const letters = Array.from(site.name);

  return (
    <IntroContext.Provider value={done}>
      {children}

      <AnimatePresence>
        {visible && (
          <>
            {/* Accent layer trails the main panel for a two-tone wipe. */}
            <motion.div
              key="loader-accent"
              aria-hidden="true"
              className="loader-failsafe fixed inset-0 z-99 bg-accent"
              exit={{ y: "-100%", transition: { duration: 0.9, delay: 0.12, ease: curtain } }}
            />
            <motion.div
              key="loader"
              role="status"
              aria-label={`Loading ${site.name}'s portfolio`}
              className="loader-failsafe fixed inset-0 z-100 flex flex-col bg-fg text-bg"
              exit={{ y: "-100%", transition: { duration: 0.9, ease: curtain } }}
            >
              <motion.div
                className="flex flex-1 flex-col items-center justify-center px-4"
                exit={{ opacity: 0, y: -40, transition: { duration: 0.5, ease } }}
              >
                <p className="flex text-5xl font-semibold tracking-tighter sm:text-7xl lg:text-8xl" aria-hidden="true">
                  {letters.map((letter, i) => (
                    <span key={i} className="inline-block overflow-hidden pb-[0.1em]">
                      <motion.span
                        className="inline-block"
                        initial={{ y: "110%" }}
                        animate={{ y: "0%" }}
                        transition={{ duration: 0.8, delay: 0.1 + i * 0.035, ease }}
                      >
                        {letter === " " ? " " : letter}
                      </motion.span>
                    </span>
                  ))}
                </p>
                <motion.p
                  className="mt-4 font-mono text-xs tracking-[0.3em] uppercase opacity-60"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 0.6, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.55, ease }}
                >
                  {site.role}
                </motion.p>
              </motion.div>

              <div className="flex items-end justify-between px-4 pb-6 font-mono text-xs sm:px-8 sm:pb-8">
                <span className="opacity-60">Portfolio · {new Date().getFullYear()}</span>
                <span className="text-3xl font-medium tabular-nums sm:text-5xl">
                  {String(count).padStart(3, "0")}
                </span>
              </div>

              <div className="h-1 w-full bg-bg/10">
                <div className="h-full origin-left bg-accent" style={{ transform: `scaleX(${count / 100})` }} />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </IntroContext.Provider>
  );
}
