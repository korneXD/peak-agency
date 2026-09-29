"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ListIcon, XIcon, ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import { PeakLogo } from "@/components/logo";

const links = [
  { href: "#services", label: "Szolgáltatások" },
  { href: "#work", label: "Munkáink" },
  { href: "#process", label: "Folyamat" },
  { href: "#founder", label: "Rólunk" },
  { href: "#testimonials", label: "Vélemények" },
];

const CTA_LABEL = "Indítsunk kampányt";

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between rounded-[2rem] border border-white/60 bg-white/45 px-4 shadow-[0_8px_30px_-8px_rgba(43,30,18,0.18),inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-xl backdrop-saturate-150 sm:px-6">
          <Link href="#top" className="text-foreground" onClick={() => setOpen(false)}>
            <PeakLogo />
          </Link>

          <button
            type="button"
            aria-label={open ? "Menü bezárása" : "Menü megnyitása"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 items-center gap-2 rounded-full border border-white/70 bg-white/70 px-4 text-sm font-medium text-foreground transition-transform active:scale-95"
          >
            {open ? "Bezár" : "Menü"}
            {open ? <XIcon size={16} /> : <ListIcon size={16} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-4 top-24 bottom-4 z-40 overflow-y-auto rounded-[2rem] border border-white/60 bg-background/95 shadow-xl backdrop-blur-xl sm:inset-x-6 lg:inset-x-8"
          >
            <div className="mx-auto flex h-full max-w-7xl flex-col justify-between px-6 pb-8 pt-8 sm:px-10">
              <nav className="flex flex-col gap-1">
                {links.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                    className="group flex items-center justify-between border-b border-border py-5 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
                  >
                    {link.label}
                    <ArrowUpRightIcon
                      size={28}
                      weight="bold"
                      className="text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
                    />
                  </motion.a>
                ))}
              </nav>

              <div className="flex flex-col gap-4 pt-8 sm:flex-row sm:items-center sm:justify-between">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-4 text-base font-medium text-primary-foreground transition-transform active:scale-95"
                >
                  {CTA_LABEL}
                </a>
                <span className="text-sm text-muted-foreground">
                  hello@peak-agency.hu · Budapest
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
