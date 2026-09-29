import { ContactForm } from "@/components/sections/contact-form";

export function Cta() {
  return (
    <section id="contact" className="relative overflow-hidden bg-espresso-strong py-24 md:py-32">
      <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-tan/20" />
      <div className="pointer-events-none absolute -bottom-24 -right-10 h-80 w-80 rounded-full bg-tan/15" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="flex flex-col gap-5">
          <h2 className="font-heading text-3xl font-bold leading-tight tracking-tight text-cream md:text-4xl">
            Építsünk egy kampányt, amiről érdemes beszélni.
          </h2>
          <p className="max-w-md text-base leading-relaxed text-cream/75">
            Két munkanapon belül válaszolunk.
          </p>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
