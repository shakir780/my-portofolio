"use client";

import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/container";
import { ThemeToggle } from "@/components/theme-toggle";
import { ease, useIntroDone } from "@/components/motion";
import { navLinks, site } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const introDone = useIntroDone();
  const { scrollY } = useScroll();

  // Hide while scrolling down, reveal as soon as the reader scrolls back up.
  useMotionValueEvent(scrollY, "change", (y) => {
    const previous = scrollY.getPrevious() ?? 0;
    setHidden(y > previous && y > 160);
  });

  return (
    <motion.header
      className="sticky top-0 z-50 border-b border-border/60 bg-bg/80 backdrop-blur-md"
      initial={{ y: "-100%" }}
      animate={{ y: !introDone || (hidden && !open) ? "-100%" : "0%" }}
      transition={{ duration: 0.45, ease }}
    >
      <Container className="flex h-16 items-center justify-between">
        <a href="/" className="font-semibold tracking-tight" onClick={() => setOpen(false)}>
          {site.name}
        </a>

        <nav className="flex items-center gap-1">
          <ul className="hidden items-center gap-1 sm:flex" onMouseLeave={() => setHovered(null)}>
            {navLinks.map((link) => (
              <li key={link.href} className="relative">
                {hovered === link.href && (
                  <motion.span
                    layoutId="nav-hover"
                    className="absolute inset-0 rounded-full bg-surface"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <a
                  href={link.href}
                  onMouseEnter={() => setHovered(link.href)}
                  className="relative rounded-full px-3 py-2 text-sm text-muted transition-colors hover:text-fg"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex size-9 items-center justify-center rounded-full text-muted hover:bg-surface hover:text-fg sm:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? "close" : "open"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {open ? <X className="size-4" /> : <Menu className="size-4" />}
              </motion.span>
            </AnimatePresence>
          </button>
        </nav>
      </Container>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="menu"
            className="overflow-hidden sm:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease }}
          >
            <Container className="pb-4">
              <motion.ul
                className="flex flex-col border-t border-border pt-2"
                initial="hidden"
                animate="show"
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05, delayChildren: 0.08 } } }}
              >
                {navLinks.map((link) => (
                  <motion.li
                    key={link.href}
                    variants={{ hidden: { opacity: 0, x: -12 }, show: { opacity: 1, x: 0 } }}
                    transition={{ duration: 0.3, ease }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block py-3 text-muted transition-colors hover:text-fg"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
