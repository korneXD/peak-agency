"use client";

import { useId, useRef, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CheckCircleIcon } from "@phosphor-icons/react/dist/ssr";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  color: string;
  size: number;
};

const CONFETTI_COLORS = ["#8a6a45", "#c1a179", "#2b1e12", "#efe4cd"];

export function NewsletterForm() {
  const inputId = useId();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  function fireConfetti() {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles: Particle[] = Array.from({ length: 48 }, () => ({
      x: canvas.width / 2,
      y: canvas.height / 2,
      vx: (Math.random() - 0.5) * 11,
      vy: (Math.random() - 1.9) * 8,
      life: 100,
      color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
      size: Math.random() * 4 + 2,
    }));

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = false;
      for (const p of particles) {
        if (p.life <= 0) continue;
        alive = true;
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.45;
        p.life -= 2;
        ctx.globalAlpha = Math.max(0, p.life / 100);
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      if (alive) requestAnimationFrame(tick);
      else ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
    tick();
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email) return;
    setStatus("loading");
    window.setTimeout(() => {
      const subject = encodeURIComponent("Feliratkozás a hírlevélre");
      const body = encodeURIComponent(`Iratkoztass fel erre a címre: ${email}`);
      window.location.href = `mailto:hello@peak-agency.hu?subject=${subject}&body=${body}`;
      setStatus("success");
      setEmail("");
      fireConfetti();
    }, 700);
  }

  return (
    <div className="relative mx-auto w-full max-w-md">
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute left-1/2 top-1/2 z-10 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2"
      />
      <AnimatePresence mode="wait" initial={false}>
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex h-14 items-center justify-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-6 text-base font-medium text-foreground"
          >
            <CheckCircleIcon size={20} weight="bold" className="text-accent" />
            Megnyílt az emailkliensed, küldd el!
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
            onSubmit={handleSubmit}
            className="relative flex h-14 w-full items-center"
          >
            <label htmlFor={inputId} className="sr-only">
              Email cím
            </label>
            <input
              id={inputId}
              type="email"
              required
              value={email}
              disabled={status === "loading"}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@cimed.hu"
              className="h-full w-full rounded-full border border-border bg-card pl-6 pr-[140px] text-base text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="absolute right-1.5 flex h-11 min-w-[124px] items-center justify-center rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground transition-transform active:scale-95 disabled:opacity-70"
            >
              {status === "loading" ? "Küldés…" : "Feliratkozom"}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
