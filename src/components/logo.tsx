import { clsx } from "clsx";

export function PeakLogo({
  className,
  markClassName,
}: {
  className?: string;
  markClassName?: string;
}) {
  return (
    <span
      className={clsx(
        "inline-flex flex-col items-start leading-none select-none",
        className,
      )}
    >
      <span
        className={clsx(
          "font-heading text-[1.6rem] font-bold tracking-[-0.02em]",
          markClassName,
        )}
      >
        PEAK
      </span>
      <span className="mt-0.5 text-[0.56rem] font-semibold tracking-[0.38em] text-muted-foreground">
        AGENCY
      </span>
    </span>
  );
}

export function PeakMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect width="48" height="48" rx="12" fill="currentColor" />
      <path
        d="M13 32L20.5 18.5L25 26L28.5 20L35 32H13Z"
        fill="var(--color-cream)"
      />
    </svg>
  );
}
