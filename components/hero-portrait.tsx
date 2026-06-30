import Image from "next/image";
import { site } from "@/lib/site-content";

export function HeroPortrait() {
  const hasHeadshot = Boolean(site.headshot);

  return (
    <div className="hero-visual reveal reveal-2">
      <div className="hero-mark" aria-hidden="true" />
      <div className="hero-headshot" aria-hidden={!hasHeadshot}>
        {hasHeadshot ? (
          <div className="hero-headshot-inner">
            <Image
              src={site.headshot}
              alt={`Portrait of ${site.name}`}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 58vw, 360px"
              priority
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}
