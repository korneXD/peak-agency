# PEAK Agency

Magyar nyelvű marketing oldal a PEAK Agency influencer marketing ügynökségnek. Next.js (App Router) és Tailwind CSS v4 alapon, shadcn/ui + Base UI komponensrendszerrel.

## Stack

- Next.js 16 + React 19 + TypeScript
- Tailwind CSS v4 (CSS-first téma a `src/app/globals.css`-ben)
- shadcn/ui (`style: base-nova`, Base UI primitívek) a form- és UI-komponensekhez: `Button`, `Input`, `Textarea`, `Select`, `Label`, `Card`, `Badge`, `Separator`
- `motion` az animációkhoz, `next-themes` a világos/sötét módhoz
- `@phosphor-icons/react` az összes ikonhoz és platform-logóhoz

## Fejlesztés

```bash
npm run dev
```

Nyisd meg: [http://localhost:3000](http://localhost:3000).

Új shadcn komponens hozzáadása:

```bash
npx shadcn@latest add <komponens>
```

## Márka

A színpaletta (krém, espresso barna, tan) a `peaklogo.webp` márkafotóból lett kiolvasva. A fejléc/lábléc logó tipográfiával (Space Grotesk) készült, nem a fotóból, így minden méretben éles marad. A `src/app/icon.tsx` és `apple-icon.tsx` vektoralapú, generált favicon.

A `src/assets/szabina.webp` az alapító fotója, a "Szia, Szabina vagyok." szekcióban jelenik meg.

## Tartalom

A case study fotók és a hero kép egyelőre Picsum placeholder-fotók (`https://picsum.photos`), konkrét kép-ID alapján kiválasztva. Cseréld le őket valódi kampányfotókra a `src/components/sections/*.tsx` fájlokban (`imageId` / `seed` mezők).

Az űrlap (`src/components/sections/contact-form.tsx`) kliens oldalon validál, majd egy előre kitöltött `mailto:` linket nyit meg (`hello@peak-agency.hu`) — nincs mögötte backend. Éles indítás előtt:

- Cseréld le a placeholder email címet, telefonszámot és a `peak-agency.hu` domaint, ha még nem regisztrált
- Kösd össze az űrlapot egy valódi backenddel vagy form-szolgáltatással (pl. Resend, Formspree)
- Cseréld le a Picsum képeket valódi kampányfotókra
