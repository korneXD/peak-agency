const stats = [
  { value: "312", label: "Lezárt alkotói együttműködés" },
  { value: "48,6M", label: "Átlagos havi elérés" },
  { value: "6,2x", label: "Átlagos kampány-megtérülés" },
  { value: "94%", label: "Határidőre leadott kampány" },
];

export function Results() {
  return (
    <section className="border-y border-border bg-secondary py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4 lg:divide-x lg:divide-border">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col gap-2 ${i > 0 ? "lg:pl-8" : ""}`}
            >
              <span className="font-mono text-4xl font-bold text-foreground md:text-5xl">
                {stat.value}
              </span>
              <span className="max-w-[20ch] text-sm text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
