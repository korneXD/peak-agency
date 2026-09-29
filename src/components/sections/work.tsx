import Image from "next/image";
import post1 from "@/assets/1.webp";
import post2 from "@/assets/2.webp";
import post3 from "@/assets/3.webp";

const posts = [
  { image: post1, alt: "PEAK Agency kampány, PR csomagok és brand együttműködések" },
  { image: post2, alt: "PEAK Agency kampány, influencer toborzás" },
  { image: post3, alt: "PEAK Agency kampány, márka és alkotó együttműködés" },
];

export function Work() {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="max-w-xl font-heading text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
          Néhány kampányunk.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.alt}
              className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl"
            >
              <Image
                src={post.image}
                alt={post.alt}
                placeholder="blur"
                fill
                sizes="(min-width: 640px) 30vw, 90vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
