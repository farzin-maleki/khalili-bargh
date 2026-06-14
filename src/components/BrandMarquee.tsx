import { ALL_BRANDS } from "@/data/products";

export function BrandMarquee() {
  const list = [...ALL_BRANDS, ...ALL_BRANDS];
  return (
    <div className="relative overflow-hidden border-y border-border bg-card/30 py-6">
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="marquee-track flex gap-8 whitespace-nowrap" style={{ width: "max-content" }}>
        {list.map((b, i) => (
          <span key={`${b}-${i}`} className="text-sm md:text-base font-bold text-muted-foreground/80 hover:text-primary transition px-4">
            {b}
          </span>
        ))}
      </div>
    </div>
  );
}