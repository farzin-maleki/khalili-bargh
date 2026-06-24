import { Link } from "@tanstack/react-router";
import { Instagram, Phone, MapPin, Clock, Mail } from "lucide-react";
import { SITE, PRODUCTS } from "@/data/products";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 border-t border-border bg-card/40">
      <div className="filament-line absolute inset-x-0 top-0 h-px" />
      <div className="container mx-auto grid gap-10 px-4 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-background border border-border">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2 4 14h7l-1 8 9-12h-7z" />
              </svg>
            </span>
            <span className="font-black text-lg">{SITE.name}</span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground">
            {SITE.tagline}. عرضه عمده و خرده تجهیزات با اصالت کالا و گارانتی معتبر.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold mb-4">دسته‌بندی‌ها</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {PRODUCTS.slice(0, 6).map((p) => (
              <li key={p.slug}>
                <Link to="/products/$slug" params={{ slug: p.slug }} className="hover:text-primary transition">
                  {p.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold mb-4">تماس</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 text-primary shrink-0" /><span>{SITE.phone}</span></li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 text-primary shrink-0" /><span dir="ltr">{SITE.email}</span></li>
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" /><span>{SITE.address}</span></li>
            <li className="flex gap-2"><Clock className="h-4 w-4 mt-0.5 text-primary shrink-0" /><span>{SITE.hours}</span></li>
            <li>
              <a href={`https://instagram.com/${SITE.instagram}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-primary transition">
                <Instagram className="h-4 w-4 text-primary" />{SITE.instagram}@
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-5 text-xs text-muted-foreground flex flex-wrap items-center justify-between gap-2">
          <span>© ۱۴۰۴ {SITE.name}. تمامی حقوق محفوظ است.</span>
          <span>طراحی شده با عشق به حرفهٔ برق</span>
        </div>
      </div>
    </footer>
  );
}