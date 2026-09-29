import Image from "next/image";
import {
  CompassIcon,
  UsersThreeIcon,
  FilmSlateIcon,
  MegaphoneIcon,
  NewspaperClippingIcon,
} from "@phosphor-icons/react/dist/ssr";

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="max-w-2xl font-heading text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
          Minden, ami egy kampányhoz kell.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-4">
          <div className="relative col-span-1 overflow-hidden rounded-3xl sm:col-span-2">
            <div className="relative aspect-[16/11] w-full">
              <Image
                src="https://picsum.photos/seed/peak-strategy-desk/900/620"
                alt="Stratéga áttekinti a kampánytervet"
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-strong/80 via-espresso-strong/10 to-transparent" />
            </div>
            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1.5 p-6">
              <CompassIcon size={22} weight="bold" className="text-cream" />
              <h3 className="font-heading text-xl font-bold text-cream">
                Stratégia &amp; kutatás
              </h3>
              <p className="text-sm text-cream/80">Terv, mérhető célok.</p>
            </div>
          </div>

          <div className="col-span-1 rounded-3xl border border-border bg-card p-6 sm:col-span-2">
            <UsersThreeIcon size={22} weight="bold" className="text-accent" />
            <h3 className="mt-4 font-heading text-xl font-bold text-foreground">
              Kasztolás
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              Alkotók, akik tényleg illenek hozzád.
            </p>
          </div>

          <div className="col-span-1 rounded-3xl border border-border bg-card p-6">
            <FilmSlateIcon size={22} weight="bold" className="text-accent" />
            <h3 className="mt-4 font-heading text-lg font-bold text-foreground">
              Tartalomgyártás
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              Briftől a kész anyagig.
            </p>
          </div>

          <div className="col-span-1 rounded-3xl border border-border bg-card p-6">
            <MegaphoneIcon size={22} weight="bold" className="text-accent" />
            <h3 className="mt-4 font-heading text-lg font-bold text-foreground">
              Fizetett hirdetés
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              Büdzsé a bevált tartalom mögé.
            </p>
          </div>

          <div className="col-span-1 rounded-3xl border border-border bg-card p-6 sm:col-span-2">
            <NewspaperClippingIcon size={22} weight="bold" className="text-accent" />
            <h3 className="mt-4 font-heading text-lg font-bold text-foreground">
              PR &amp; sajtó
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              Megjelenés, hitelesség, valódi tények.
            </p>
          </div>

          <div className="relative col-span-1 overflow-hidden rounded-3xl bg-primary p-6 sm:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground/60">
              Teljesítménymérés
            </p>
            <div className="mt-3 flex flex-wrap items-end gap-x-10 gap-y-4">
              <span className="font-heading text-4xl font-bold text-primary-foreground md:text-5xl">
                Élő dashboard
              </span>
              <p className="max-w-sm text-sm leading-relaxed text-primary-foreground/75">
                Minden szám egy helyen, valós időben.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
