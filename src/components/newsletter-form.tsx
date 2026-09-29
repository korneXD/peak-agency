"use client";

import { useRef, useState, type FormEvent } from "react";
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
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  function fireConfetti() {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles: Particle[] = Array.from({ length: 36 }, () => ({
      x: canvas.width / 2,
      y: canvas.height / 2,
      vx: (Math.random() - 0.5) * 9,
      vy: (Math.random() - 1.8) * 7,
      life: 100,
      color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
      size: Math.random() * 3 + 2,
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
        p.life -= 2.2;
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
      fireConfetti();
    }, 500);
  }

  return (
    <div className="relative w-full max-w-sm">
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute left-1/2 top-1/2 z-10 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2"
      />
      <AnimatePresence mode="wait" initial={false}>
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex h-12 items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-5 text-sm font-medium text-foreground"
          >
            <CheckCircleIcon size={18} weight="bold" className="text-accent" />
            Megnyílt az emailkliensed, küldd el!
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
            onSubmit={handleSubmit}
            className="relative flex h-12 w-full items-center"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email cím
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              disabled={status === "loading"}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@cimed.hu"
              className="h-full w-full rounded-full border border-border bg-card pl-5 pr-[126px] text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="absolute right-1 flex h-10 min-w-[112px] items-center justify-center rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground transition-transform active:scale-95 disabled:opacity-70"
            >
              {status === "loading" ? "Küldés…" : "Feliratkozom"}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
