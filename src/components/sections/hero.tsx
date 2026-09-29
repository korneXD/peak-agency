"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRightIcon, TrendUpIcon } from "@phosphor-icons/react/dist/ssr";
import { Badge } from "@/components/ui/badge";

const CTA_LABEL = "Indítsunk kampányt";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-[80dvh] items-center overflow-hidden border-b border-border pb-16"
    >
      <div className="pointer-events-none absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full bg-accent/20" />
      <div className="pointer-events-none absolute -bottom-16 left-[-10%] -z-10 h-64 w-64 rounded-full bg-secondary" />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-8">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start gap-6"
        >
          <Badge
            variant="outline"
            className="h-auto rounded-full border-border bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground"
          >
            Influencer marketing &amp; PR ügynökség
          </Badge>

          <h1 className="font-heading text-5xl font-bold leading-[0.98] tracking-tight text-foreground md:text-6xl lg:text-7xl">
            TARTALOM,
            <br />
            AMI <span className="text-accent">SZÁMÍT.</span>
          </h1>

          <p className="max-w-[38ch] text-base leading-relaxed text-muted-foreground md:text-lg">
            Kampányokat tervezünk, kasztolunk és mérünk. Valódi eredményért.
          </p>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-transform active:scale-95 hover:opacity-90"
            >
              {CTA_LABEL}
              <ArrowRightIcon size={16} weight="bold" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-accent"
            >
              Nézd meg a munkáinkat
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-secondary">
            <Image
              src="https://picsum.photos/id/823/900/1125"
              alt="Tartalomgyártó kamerával, PEAK Agency kampányhoz készít anyagot"
              fill
              priority
              sizes="(min-width: 1024px) 42vw, 90vw"
              className="object-cover"
            />
          </div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -bottom-6 -left-6 flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 shadow-xl"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 text-accent">
              <TrendUpIcon size={20} weight="bold" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-heading text-xl font-bold text-foreground">
                6,2x
              </span>
              <span className="text-xs text-muted-foreground">
                átlagos kampány-megtérülés
              </span>
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
