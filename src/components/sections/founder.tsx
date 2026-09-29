import Image from "next/image";
import founderPhoto from "@/assets/szabina.webp";

export function Founder() {
  return (
    <section id="founder" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="relative mx-auto w-full max-w-xs">
            <div className="absolute inset-0 -rotate-3 rounded-[2.5rem] bg-accent/25" />
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] border-4 border-card">
              <Image
                src={founderPhoto}
                alt="Szabina, a PEAK Agency alapítója"
                placeholder="blur"
                sizes="(min-width: 1024px) 30vw, 80vw"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <span className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
              Szabina · Alapító
            </span>
            <h2 className="font-heading text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
              Szia, Szabina vagyok.
            </h2>
            <p className="max-w-lg text-base leading-relaxed text-muted-foreground">
              Elegem lett abból, hogy a márkák és az alkotók egymás mellett
              beszélnek. Minden kampányt átláthatóan, tisztelettel kasztolok.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
