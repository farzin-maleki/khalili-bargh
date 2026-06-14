import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Download, Phone, MessageCircle, ImageIcon } from "lucide-react";
import { getProduct, relatedProducts, SITE, type Product } from "@/data/products";
import { SiteLayout } from "@/components/SiteLayout";
import { CategoryCard } from "@/components/CategoryCard";
import { CategoryIcon } from "@/components/CategoryIcon";
import { CircuitBackdrop } from "@/components/CircuitBackdrop";
import { toFa } from "@/lib/fa";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product: product as Product };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.product.shortTitle} — الکتروسنتر` },
          { name: "description", content: loaderData.product.tagline },
          { property: "og:title", content: loaderData.product.title },
          { property: "og:description", content: loaderData.product.tagline },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <SiteLayout>
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-2xl font-bold">محصول یافت نشد</h1>
        <Link to="/products" className="mt-6 inline-flex text-primary">بازگشت به محصولات</Link>
      </div>
    </SiteLayout>
  ),
  errorComponent: () => (
    <SiteLayout>
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-2xl font-bold">خطا در بارگذاری</h1>
      </div>
    </SiteLayout>
  ),
  component: ProductDetail,
});

function ProductDetail() {
  const { slug } = Route.useParams();
  const product = getProduct(slug)!;
  const related = relatedProducts(product.slug, 3);
  const waMsg = encodeURIComponent(`سلام، درباره محصول «${product.shortTitle}» نیاز به استعلام قیمت دارم.`);

  return (
    <SiteLayout>
      <section className="relative overflow-hidden border-b border-border">
        <CircuitBackdrop className="opacity-50" />
        <div className="container relative mx-auto px-4 py-10 md:py-14">
          <nav className="text-xs text-muted-foreground flex items-center gap-2">
            <Link to="/" className="hover:text-primary">خانه</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-primary">محصولات</Link>
            <span>/</span>
            <span className="text-foreground">{product.shortTitle}</span>
          </nav>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_1fr] items-start">
            {/* Gallery — placeholder. Drop real photos into /public/products/<slug>/ then push paths into product.images */}
            <div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border bg-card">
                {product.images.length > 0 ? (
                  <img src={product.images[0]} alt={product.shortTitle} className="h-full w-full object-cover" />
                ) : (
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} />
                    <CircuitBackdrop className="opacity-40" />
                    <div className="relative flex flex-col items-center gap-4 text-center px-6">
                      <div className="grid h-24 w-24 place-items-center rounded-2xl bg-background/70 border border-border filament-pulse">
                        <CategoryIcon name={product.icon} className="h-12 w-12" />
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <ImageIcon className="h-4 w-4" />
                        <span>تصاویر محصول به‌زودی اضافه می‌شود</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="mt-3 grid grid-cols-4 gap-3">
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className="aspect-square rounded-lg border border-border bg-card/60 grid place-items-center">
                    {product.images[i] ? (
                      <img src={product.images[i]} alt="" className="h-full w-full object-cover rounded-lg" />
                    ) : (
                      <ImageIcon className="h-4 w-4 text-muted-foreground/40" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="text-xs font-bold text-primary mb-3">دسته‌بندی محصول</div>
              <h1 className="text-3xl md:text-4xl font-black leading-tight">{product.title}</h1>
              <p className="mt-4 text-muted-foreground leading-8">{product.description}</p>

              {product.brands.length > 0 && (
                <div className="mt-7">
                  <div className="text-xs font-bold text-muted-foreground mb-2">برندهای موجود</div>
                  <div className="flex flex-wrap gap-2">
                    {product.brands.map((b) => (
                      <span key={b} className="text-xs font-bold px-3 py-1.5 rounded-full border border-border bg-secondary text-secondary-foreground">
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-8 flex flex-wrap gap-3">
                <a href={`tel:${SITE.mobileRaw}`} className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-bold text-primary-foreground" style={{ boxShadow: "var(--shadow-glow)" }}>
                  <Phone className="h-4 w-4" /> استعلام قیمت — {SITE.mobile}
                </a>
                <a href={`https://wa.me/${SITE.whatsapp}?text=${waMsg}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-bold hover:border-primary hover:text-primary transition">
                  <MessageCircle className="h-4 w-4" /> واتس‌اپ
                </a>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-bold hover:border-primary hover:text-primary transition">
                  ثبت سفارش
                </Link>
              </div>
              {/* Catalog file: drop PDF at the placeholder path in src/data/products.ts */}
              <a
                href={product.catalogFile}
                download
                className="mt-4 inline-flex items-center gap-2 text-sm text-primary hover:opacity-80"
              >
                <Download className="h-4 w-4" /> دانلود کاتالوگ / مشخصات فنی
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="container mx-auto px-4 py-14 md:py-20">
        <h2 className="text-2xl md:text-3xl font-black mb-6">مشخصات فنی</h2>
        <div className="overflow-hidden rounded-2xl border border-border">
          <table className="w-full text-sm">
            <tbody>
              {product.specs.map((s, i) => (
                <tr key={s.label} className={i % 2 === 0 ? "bg-card/50" : "bg-card/20"}>
                  <th scope="row" className="text-right p-4 font-bold text-muted-foreground w-1/3 align-top">{s.label}</th>
                  <td className="p-4">{s.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">* مشخصات بسته به برند و مدل ممکن است متفاوت باشد. برای جزئیات با کارشناسان ما تماس بگیرید.</p>
      </section>

      {/* Related */}
      <section className="container mx-auto px-4 pb-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-black">محصولات مرتبط</h2>
          <Link to="/products" className="text-sm font-bold text-primary inline-flex items-center gap-1.5">
            همه محصولات <ArrowLeft className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p, i) => (
            <CategoryCard key={p.slug} product={p} index={i} />
          ))}
        </div>
        <p className="mt-4 text-xs text-muted-foreground">{toFa(related.length)} محصول مرتبط</p>
      </section>
    </SiteLayout>
  );
}