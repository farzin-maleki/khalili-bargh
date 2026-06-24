import { createFileRoute } from "@tanstack/react-router";
import { PRODUCTS } from "@/data/products";
import { SiteLayout } from "@/components/SiteLayout";
import { CategoryCard } from "@/components/CategoryCard";
import { CircuitBackdrop } from "@/components/CircuitBackdrop";
import { PhotoBackdrop } from "@/components/PhotoBackdrop";
import productsBg from "@/assets/bg-stone-wall.jpg.asset.json";
import { toFa } from "@/lib/fa";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "محصولات — الکتروسنتر" },
      { name: "description", content: "۱۲ گروه کالای برق و روشنایی ساختمان از معتبرترین برندهای داخلی." },
      { property: "og:title", content: "محصولات الکتروسنتر" },
      { property: "og:description", content: "سیم و کابل، روشنایی، کلید و پریز، آیفون تصویری، فیوز و..." },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden border-b border-border">
        <PhotoBackdrop src={productsBg.url} intensity={0.32} />
        <CircuitBackdrop className="opacity-60" />
        <div className="container relative mx-auto px-4 py-16 md:py-24">
          <div className="text-xs font-bold text-primary mb-3">کاتالوگ کامل</div>
          <h1 className="text-4xl md:text-5xl font-black">محصولات</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground leading-7">
            مجموعهٔ {toFa(PRODUCTS.length)} گروه کالای تخصصی برق و روشنایی ساختمان. روی هر کارت بزنید تا برندها، مشخصات فنی و کاتالوگ آن را ببینید.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p, i) => (
            <CategoryCard key={p.slug} product={p} index={i} />
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}