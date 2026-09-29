import {
  MagnifyingGlassIcon,
  UserCircleCheckIcon,
  VideoCameraIcon,
  ChartLineUpIcon,
} from "@phosphor-icons/react/dist/ssr";

const steps = [
  {
    Icon: MagnifyingGlassIcon,
    title: "Feltérképezés",
    body: "Piac, közönség, korábbi kampányok.",
  },
  {
    Icon: UserCircleCheckIcon,
    title: "Kasztolás",
    body: "A brief alapján, a te jóváhagyásoddal.",
  },
  {
    Icon: VideoCameraIcon,
    title: "Gyártás",
    body: "Forgatás, majd végső csiszolás.",
  },
  {
    Icon: ChartLineUpIcon,
    title: "Optimalizálás",
    body: "Ami működik, arra megy a büdzsé.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="max-w-xl font-heading text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
          Így épül fel egy kampány.
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ Icon, title, body }, i) => (
            <div key={title} className="relative flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary text-accent">
                  <Icon size={20} weight="bold" />
                </span>
                {i < steps.length - 1 && (
                  <span className="hidden h-px flex-1 bg-border lg:block" />
                )}
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
