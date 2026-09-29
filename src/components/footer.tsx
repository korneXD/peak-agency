import {
  InstagramLogoIcon,
  TiktokLogoIcon,
  YoutubeLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import { PeakLogo } from "@/components/logo";

const socials = [
  { label: "Instagram", href: "https://instagram.com", Icon: InstagramLogoIcon },
  { label: "TikTok", href: "https://tiktok.com", Icon: TiktokLogoIcon },
  { label: "YouTube", href: "https://youtube.com", Icon: YoutubeLogoIcon },
  { label: "LinkedIn", href: "https://linkedin.com", Icon: LinkedinLogoIcon },
];

export function Footer() {
  return (
    <footer>
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <span className="text-foreground">
          <PeakLogo />
        </span>

        <span className="flex flex-wrap items-center gap-x-4 gap-y-1">
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
    </footer>
  );
}
