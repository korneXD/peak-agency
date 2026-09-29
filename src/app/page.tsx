import { Hero } from "@/components/sections/hero";
import { PlatformMarquee } from "@/components/sections/platform-marquee";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { Results } from "@/components/sections/results";
import { Work } from "@/components/sections/work";
import { Founder } from "@/components/sections/founder";
import { Testimonials } from "@/components/sections/testimonials";
import { Cta } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <PlatformMarquee />
      <Services />
      <Process />
      <Results />
      <Work />
      <Founder />
      <Testimonials />
      <Cta />
    </>
  );
}
