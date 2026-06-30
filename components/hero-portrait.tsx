import Image from "next/image";
import { site } from "@/lib/site-content";

export function HeroPortrait() {
  return (
    <div className="hero-visual reveal reveal-2">
      <div className="hero-mark" aria-hidden="true" />
      <figure className="hero-headshot" aria-hidden="true" />
      <div className="hero-portrait">
        <Image
          src={site.heroPortrait}
          alt={`Portrait of ${site.name}`}
          fill
          className="object-contain object-bottom"
          sizes="360px"
          priority
        />
      </div>
    </div>
  );
}
