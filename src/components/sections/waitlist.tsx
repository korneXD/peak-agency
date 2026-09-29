import { NewsletterForm } from "@/components/newsletter-form";

export function Waitlist() {
  return (
    <section className="border-t border-border bg-secondary py-20 md:py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
          Maradj képben.
        </h2>
        <p className="max-w-md text-base text-muted-foreground">
          Új kampányok, esetek, insightok. Néha, nem túl gyakran.
        </p>
        <NewsletterForm />
      </div>
    </section>
  );
}
