import {
  InstagramLogoIcon,
  TiktokLogoIcon,
  YoutubeLogoIcon,
  PinterestLogoIcon,
  SnapchatLogoIcon,
  TwitchLogoIcon,
  FacebookLogoIcon,
} from "@phosphor-icons/react/dist/ssr";

const platforms = [
  { label: "Instagram", Icon: InstagramLogoIcon },
  { label: "TikTok", Icon: TiktokLogoIcon },
  { label: "YouTube", Icon: YoutubeLogoIcon },
  { label: "Pinterest", Icon: PinterestLogoIcon },
  { label: "Snapchat", Icon: SnapchatLogoIcon },
  { label: "Twitch", Icon: TwitchLogoIcon },
  { label: "Facebook", Icon: FacebookLogoIcon },
];

function Track() {
  return (
    <div className="flex shrink-0 items-center gap-16 pr-16">
      {platforms.map(({ label, Icon }) => (
        <span
          key={label}
          className="flex items-center gap-2.5 text-muted-foreground"
        >
          <Icon size={22} weight="light" />
          <span className="text-sm font-medium">{label}</span>
        </span>
      ))}
    </div>
  );
}

export function PlatformMarquee() {
  return (
    <section className="border-b border-border bg-secondary py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          Minden nagyobb platformon ott vagyunk
        </p>
      </div>
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee motion-reduce:animate-none">
          <Track />
          <Track />
        </div>
      </div>
    </section>
  );
}
