import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { SITE } from "@/data/products";

const LINKS = [
  { to: "/", label: "خانه" },
  { to: "/products", label: "محصولات" },
  { to: "/about", label: "درباره ما" },
  { to: "/contact", label: "تماس با ما" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-background/75 border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="filament-line absolute inset-x-0 top-0 h-px opacity-70" />
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="group flex items-center gap-2.5">
          <span className="relative grid h-9 w-9 place-items-center rounded-lg bg-card border border-border">
            <span className="absolute inset-0 rounded-lg opacity-60 group-hover:opacity-100 transition" style={{ boxShadow: "var(--shadow-glow)" }} />
            <svg viewBox="0 0 24 24" className="relative h-5 w-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 2 4 14h7l-1 8 9-12h-7z" />
            </svg>
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-black text-base text-foreground">{SITE.name}</span>
            <span className="text-[10px] text-muted-foreground mt-1">برق و روشنایی</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="relative px-4 py-2 text-sm rounded-md text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "!text-primary" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <a
          href={`tel:${SITE.mobileRaw}`}
          className="hidden md:inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-bold text-primary-foreground hover:opacity-90 transition"
        >
          {SITE.mobile}
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden grid h-10 w-10 place-items-center rounded-md border border-border"
          aria-label="منو"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur">
          <div className="container mx-auto flex flex-col px-4 py-3">
            {LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="py-3 text-sm border-b border-border last:border-b-0"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <a href={`tel:${SITE.mobileRaw}`} className="mt-3 inline-flex justify-center rounded-md bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground">
              تماس: {SITE.mobile}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}