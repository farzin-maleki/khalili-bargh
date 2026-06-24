import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ShieldCheck, BadgeCheck, Truck, HeadphonesIcon, Zap } from "lucide-react";
import { PRODUCTS, SITE } from "@/data/products";
import { SiteLayout } from "@/components/SiteLayout";
import { CircuitBackdrop } from "@/components/CircuitBackdrop";
import { PhotoBackdrop } from "@/components/PhotoBackdrop";
import heroBg from "@/assets/bg-lighting-wall.jpg.asset.json";
import ctaBg from "@/assets/bg-sunburst.jpg.asset.json";
import { CategoryCard } from "@/components/CategoryCard";
import { BrandMarquee } from "@/components/BrandMarquee";
import { toFa } from "@/lib/fa";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "الکتروسنتر — تجهیزات برق و روشنایی ساختمانی" },
      { name: "description", content: "تأمین‌کننده تخصصی سیم و کابل، روشنایی، کلید و پریز، آیفون تصویری و تجهیزات برق ساختمانی با اصالت و گارانتی." },
      { property: "og:title", content: "الکتروسنتر" },
      { property: "og:description", content: "از روشنایی تا سیم‌کشی، همه چیز برای برق ساختمان شما" },
    ],
  }),
  component: HomePage,
});

const TRUST = [
  { icon: BadgeCheck, title: "اصالت کالا", text: "تأمین مستقیم از تولیدکنندگان معتبر داخلی" },
  { icon: ShieldCheck, title: "ضمانت کیفیت", text: "گارانتی تعویض و خدمات پس از فروش" },
  { icon: Truck, title: "ارسال سریع", text: "ارسال به سراسر کشور با بسته‌بندی استاندارد" },
  { icon: HeadphonesIcon, title: "مشاوره تخصصی", text: "همراهی کارشناسان فنی تا انتخاب صحیح" },
];

function HomePage() {
  const featured = PRODUCTS.slice(0, 6);
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} />
        <PhotoBackdrop src={heroBg.url} intensity={0.28} position="center" />
        <CircuitBackdrop />
        <div className="container relative mx-auto px-4 pt-20 pb-24 md:pt-28 md:pb-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur px-3 py-1.5 text-xs">
              <span className="relative grid h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-60" />
                <span className="absolute inset-0 rounded-full bg-primary" />
              </span>
              <span className="text-muted-foreground">جریان در مدار — همراه برق ساختمان شما</span>
            </div>
            <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-black leading-[1.15] tracking-normal">
              <span className="block">از <span className="text-primary">روشنایی</span> تا سیم‌کشی،</span>
              <span className="block mt-2">
                همه چیز برای
                <span className="relative inline-block mr-3">
                  <span className="relative z-10">برق ساختمان</span>
                  <span className="absolute inset-x-0 -bottom-2 h-2 filament-line rounded-full opacity-80" />
                </span>
              </span>
            </h1>
            <p className="mt-7 max-w-xl text-base md:text-lg text-muted-foreground leading-8">
              {SITE.tagline}؛ تأمین تجهیزات برق و روشنایی برای الکتریسین‌ها، پیمانکاران و سازندگان با اصالت کارخانه و قیمت همکار.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/products" className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground hover:opacity-90 transition" style={{ boxShadow: "var(--shadow-glow)" }}>
                مشاهده محصولات <ArrowLeft className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/50 backdrop-blur px-6 py-3.5 text-sm font-bold hover:border-primary hover:text-primary transition">
                تماس با ما
              </Link>
            </div>

            <dl className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              {[
                ["۱۲", "گروه کالا"],
                ["۳۰+", "برند معتبر"],
                ["۲۰ سال", "تجربه بازار"],
              ].map(([n, l]) => (
                <div key={l} className="border-r border-border pr-4 first:border-r-0">
                  <dt className="text-2xl md:text-3xl font-black text-primary">{toFa(n)}</dt>
                  <dd className="mt-1 text-xs text-muted-foreground">{l}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-border bg-card/30">
        <div className="container mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {TRUST.map((t) => (
            <div key={t.title} className="flex items-start gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-background border border-border shrink-0">
                <t.icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
              </div>
              <div>
                <div className="text-sm font-bold">{t.title}</div>
                <div className="text-xs text-muted-foreground mt-1 leading-5">{t.text}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED */}
      <section className="container mx-auto px-4 py-20 md:py-28">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-10">
          <div>
            <div className="text-xs font-bold text-primary mb-3">دسته‌بندی منتخب</div>
            <h2 className="text-3xl md:text-4xl font-black">آنچه برای پروژه‌تان نیاز دارید</h2>
            <p className="mt-3 text-muted-foreground max-w-xl">پرتقاضاترین گروه‌های کالایی فروشگاه ما. برای دیدن همه ۱۲ گروه، صفحه محصولات را ببینید.</p>
          </div>
          <Link to="/products" className="text-sm font-bold text-primary hover:opacity-80 inline-flex items-center gap-1.5">
            مشاهده همه <ArrowLeft className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <CategoryCard key={p.slug} product={p} index={i} />
          ))}
        </div>
      </section>

      <BrandMarquee />

      {/* CTA STRIP */}
      <section className="container mx-auto px-4 py-20 md:py-28">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 md:p-16">
          <PhotoBackdrop src={ctaBg.url} intensity={0.32} />
          <CircuitBackdrop className="opacity-50" />
          <div className="relative grid gap-8 md:grid-cols-[1fr_auto] items-center">
            <div>
              <Zap className="h-8 w-8 text-primary mb-4 filament-pulse" />
              <h3 className="text-3xl md:text-4xl font-black leading-tight">آمادهٔ شروع پروژه‌تان هستیم</h3>
              <p className="mt-3 text-muted-foreground max-w-xl leading-7">
                لیست خرید پروژه یا فروشگاه‌تان را برای ما بفرستید تا با قیمت همکار و ارسال سریع، تأمین کنیم.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:flex-nowrap">
              <a href={`tel:${SITE.mobileRaw}`} className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground" style={{ boxShadow: "var(--shadow-glow)" }}>
                {SITE.mobile}
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center rounded-lg border border-border bg-background/60 px-6 py-3.5 text-sm font-bold hover:border-primary hover:text-primary transition">
                ارسال پیام
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
