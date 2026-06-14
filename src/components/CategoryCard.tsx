import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import type { Product } from "@/data/products";
import { CategoryIcon } from "./CategoryIcon";
import { toFa } from "@/lib/fa";

export function CategoryCard({ product, index = 0 }: { product: Product; index?: number }) {
  return (
    <Link
      to="/products/$slug"
      params={{ slug: product.slug }}
      className="glow-card group rounded-2xl p-6 flex flex-col gap-4 rise-in"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="flex items-start justify-between">
        <div className="grid h-14 w-14 place-items-center rounded-xl bg-background/70 border border-border">
          <CategoryIcon name={product.icon} className="h-7 w-7" />
        </div>
        <span className="text-xs text-muted-foreground tabular-nums">
          {toFa(String(index + 1).padStart(2, "0"))}
        </span>
      </div>
      <div>
        <h3 className="text-lg font-bold leading-tight">{product.shortTitle}</h3>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2 leading-6">{product.tagline}</p>
      </div>
      {product.brands.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
          {product.brands.slice(0, 3).map((b) => (
            <span key={b} className="text-[11px] px-2 py-1 rounded-md bg-secondary text-secondary-foreground">{b}</span>
          ))}
          {product.brands.length > 3 && (
            <span className="text-[11px] px-2 py-1 text-muted-foreground">+{toFa(product.brands.length - 3)}</span>
          )}
        </div>
      )}
      <div className="flex items-center gap-1.5 text-sm text-primary font-bold pt-1">
        مشاهده محصول
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
      </div>
    </Link>
  );
}