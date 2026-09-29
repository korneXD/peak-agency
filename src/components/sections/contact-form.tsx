"use client";

import { useState, type FormEvent } from "react";
import { CheckCircleIcon } from "@phosphor-icons/react/dist/ssr";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const budgets = [
  "1 millió Ft alatt",
  "1-5 millió Ft",
  "5-15 millió Ft",
  "15 millió Ft felett",
];

const fieldClass =
  "h-11 rounded-xl border-cream/25 bg-transparent px-4 text-cream placeholder:text-cream/55 focus-visible:border-cream focus-visible:ring-cream/30";

type Errors = Partial<Record<"name" | "email" | "brand" | "message", string>>;

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [budget, setBudget] = useState(budgets[0]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const brand = String(form.get("brand") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    const nextErrors: Errors = {};
    if (!name) nextErrors.name = "Add meg a neved.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      nextErrors.email = "Adj meg egy érvényes email címet.";
    if (!brand) nextErrors.brand = "Add meg a márkád vagy céged nevét.";
    if (!message) nextErrors.message = "Mesélj pár szót a kampányról.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const subject = encodeURIComponent(`Új kampány megkeresés: ${brand}`);
    const body = encodeURIComponent(
      `Név: ${name}\nEmail: ${email}\nMárka: ${brand}\nHavi keret: ${budget}\n\n${message}`,
    );
    window.location.href = `mailto:hello@peak-agency.hu?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-3xl border border-cream/20 bg-cream/5 px-6 py-12 text-center">
        <CheckCircleIcon size={32} weight="light" className="text-cream" />
        <p className="text-cream">
          Az emailkliensednek most már meg kellett nyílnia. Ha mégsem, írj
          nekünk közvetlenül a hello@peak-agency.hu címre.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="name" className="text-cream/80">
            Teljes név
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Szabó Dávid"
            className={fieldClass}
          />
          {errors.name && (
            <span className="text-xs text-rose-300">{errors.name}</span>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="email" className="text-cream/80">
            Munkahelyi email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="david@marka.hu"
            className={fieldClass}
          />
          {errors.email && (
            <span className="text-xs text-rose-300">{errors.email}</span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="brand" className="text-cream/80">
            Márka / Cég
          </Label>
          <Input
            id="brand"
            name="brand"
            type="text"
            placeholder="Northfield Skincare"
            className={fieldClass}
          />
          {errors.brand && (
            <span className="text-xs text-rose-300">{errors.brand}</span>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="budget" className="text-cream/80">
            Havi keret
          </Label>
          <Select
            name="budget"
            value={budget}
            onValueChange={(value) => value && setBudget(value)}
          >
            <SelectTrigger id="budget" className={`${fieldClass} w-full`}>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {budgets.map((b) => (
                <SelectItem key={b} value={b}>
                  {b}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="message" className="text-cream/80">
          Mesélj a kampányról
        </Label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Mit indítasz, és kiről szóljon a sztori?"
          className={`${fieldClass} h-auto py-3`}
        />
        {errors.message && (
          <span className="text-xs text-rose-300">{errors.message}</span>
        )}
      </div>

      <Button
        type="submit"
        size="lg"
        className="mt-2 h-auto self-start rounded-full bg-cream px-7 py-3.5 text-sm text-espresso-strong hover:bg-cream/90"
      >
        Indítsunk kampányt
      </Button>
    </form>
  );
}
