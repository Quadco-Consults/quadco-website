import Image from "next/image";
import { PARTNERS } from "@/data/partners";
import { cn } from "@/lib/utils";

function PartnerTrack({
  reverse = false,
  className,
}: {
  reverse?: boolean;
  className?: string;
}) {
  const items = [...PARTNERS, ...PARTNERS];

  return (
    <div
      className={cn("flex whitespace-nowrap", className)}
      aria-hidden="true"
    >
      <div
        className={cn(
          "flex shrink-0 items-center gap-16",
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        )}
      >
        {items.map((partner, i) => (
          <div
            key={`${partner.name}-${i}`}
            className="inline-flex items-center justify-center opacity-70 transition-opacity duration-300 hover:opacity-100"
          >
            <Image
              src={partner.logo}
              alt={partner.name}
              width={120}
              height={60}
              className="h-12 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function PartnersMarquee() {
  return (
    <section
      className="overflow-hidden border-y border-border bg-muted/30 py-16"
      aria-label="Trusted partners"
    >
      <p className="mb-10 text-center text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">
        Trusted by Industry Leaders
      </p>

      {/* Row 1 */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-muted/30 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-muted/30 to-transparent" />
        <PartnerTrack />
      </div>

      {/* Row 2 (reversed) */}
      <div className="relative mt-8">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-muted/30 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-muted/30 to-transparent" />
        <PartnerTrack reverse />
      </div>
    </section>
  );
}

export default PartnersMarquee;
