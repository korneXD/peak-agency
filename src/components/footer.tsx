import {
  InstagramLogoIcon,
  TiktokLogoIcon,
  YoutubeLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import { PeakLogo } from "@/components/logo";
import { Separator } from "@/components/ui/separator";

const columns = [
  {
    title: "Ügynökség",
    links: [
      { label: "Szolgáltatások", href: "#services" },
      { label: "Munkáink", href: "#work" },
      { label: "Folyamat", href: "#process" },
      { label: "Rólunk", href: "#founder" },
    ],
  },
  {
    title: "Kapcsolat",
    links: [
      { label: "hello@peak-agency.hu", href: "mailto:hello@peak-agency.hu" },
      { label: "+36 30 210 4477", href: "tel:+36302104477" },
    ],
  },
];

const socials = [
  { label: "Instagram", href: "https://instagram.com", Icon: InstagramLogoIcon },
  { label: "TikTok", href: "https://tiktok.com", Icon: TiktokLogoIcon },
  { label: "YouTube", href: "https://youtube.com", Icon: YoutubeLogoIcon },
  { label: "LinkedIn", href: "https://linkedin.com", Icon: LinkedinLogoIcon },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <span className="text-foreground">
              <PeakLogo />
            </span>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Influencer marketing és PR, valódi eredményekkel.
            </p>
            <div className="flex gap-3 pt-2">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent hover:text-foreground"
                >
                  <Icon size={16} weight="light" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {col.title}
              </span>
              {col.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>

        <Separator className="mt-14" />
        <div className="flex flex-col gap-2 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {new Date().getFullYear()} PEAK Agency. Minden jog fenntartva.</span>
          <span>Budapest, Magyarország</span>
        </div>
      </div>
    </footer>
  );
}
