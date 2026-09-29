import {
  InstagramLogoIcon,
  TiktokLogoIcon,
  YoutubeLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import { PeakLogo } from "@/components/logo";
import { Separator } from "@/components/ui/separator";
import { NewsletterForm } from "@/components/newsletter-form";

const socials = [
  { label: "Instagram", href: "https://instagram.com", Icon: InstagramLogoIcon },
  { label: "TikTok", href: "https://tiktok.com", Icon: TiktokLogoIcon },
  { label: "YouTube", href: "https://youtube.com", Icon: YoutubeLogoIcon },
  { label: "LinkedIn", href: "https://linkedin.com", Icon: LinkedinLogoIcon },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-foreground">
            <PeakLogo />
          </span>
          <NewsletterForm />
        </div>

        <Separator className="mt-8" />

        <div className="flex flex-col gap-3 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span className="flex flex-wrap gap-x-4 gap-y-1">
            <span>&copy; {new Date().getFullYear()} PEAK Agency</span>
            <span>hello@peak-agency.hu · Budapest</span>
          </span>
          <div className="flex gap-3">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Icon size={16} weight="light" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
