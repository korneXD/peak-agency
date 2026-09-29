import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const quotes = [
  {
    quote:
      "A PEAK olyan alkotókat talált nekünk, akik tényleg használják a terméket. Egy negyedév alatt megduplázódott a konverziónk influencer tartalomból.",
    name: "Kovács Panna",
    role: "Marketing vezető, Northfield Skincare",
    seed: "peak-avatar-panna",
  },
  {
    quote:
      "A riportolás volt eddig a legnagyobb fejfájásunk. Most alkotónként, valós időben látjuk a szerzési költséget.",
    name: "Németh Bence",
    role: "Growth Lead, Rally Athletics",
    seed: "peak-avatar-bence",
  },
  {
    quote:
      "Úgy kezelnek minden kampányt, mintha a saját márkájuk lenne. Ez meglátszik a végeredményen is.",
    name: "Tóth Villő",
    role: "CMO, Verdant Beverages",
    seed: "peak-avatar-villo",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="border-y border-border bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="max-w-xl font-heading text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
          Ezt mondják, mikor megjönnek az eredmények.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {quotes.map((item) => (
            <Card
              key={item.name}
              className="justify-between gap-6 rounded-3xl border-border ring-0 [--card-spacing:--spacing(6)]"
            >
              <CardContent className="flex flex-1 flex-col justify-between gap-6">
                <blockquote className="text-[0.95rem] leading-relaxed text-foreground">
                  &bdquo;{item.quote}&rdquo;
                </blockquote>
                <figcaption className="flex items-center gap-3">
                  <span className="relative h-10 w-10 overflow-hidden rounded-full">
                    <Image
                      src={`https://picsum.photos/seed/${item.seed}/80/80`}
                      alt={item.name}
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </span>
                  <span className="flex flex-col leading-tight">
                    <span className="text-sm font-medium text-foreground">
                      {item.name}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {item.role}
                    </span>
                  </span>
                </figcaption>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
