import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Users, Building2, Wrench } from "lucide-react";
import { SITE } from "@/data/products";
import { SiteLayout } from "@/components/SiteLayout";
import { CircuitBackdrop } from "@/components/CircuitBackdrop";
import { PhotoBackdrop } from "@/components/PhotoBackdrop";
import aboutBg from "@/assets/bg-sconces.jpg.asset.json";
import { toFa } from "@/lib/fa";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "درباره ما — الکتروسنتر" },
      { name: "description", content: "بیش از دو دهه تجربه در عرضه تجهیزات برق و روشنایی به الکتریسین‌ها و پیمانکاران." },
      { property: "og:title", content: "درباره الکتروسنتر" },
      { property: "og:description", content: "تأمین حرفه‌ای تجهیزات برق ساختمان با اصالت کالا" },
    ],
  }),
  component: AboutPage,
});

const STATS = [
  { icon: Award, n: "۲۰+", l: "سال تجربه در بازار" },
  { icon: Users, n: "۵۰۰۰+", l: "مشتری حرفه‌ای" },
  { icon: Building2, n: "۱۲", l: "گروه کالایی" },
  { icon: Wrench, n: "۳۰+", l: "برند معتبر" },
];

const VALUES = [
  { title: "اصالت کالا", text: "تأمین مستقیم از تولیدکنندگان معتبر، بدون واسطه‌های نامطمئن." },
  { title: "تخصص فنی", text: "تیم ما خود از دل بازار برق آمده — مشاوره ما تجربی و کاربردی است." },
  { title: "قیمت همکار", text: "برای پیمانکاران و الکتریسین‌ها، تخفیف‌های ویژه پروژه‌ای فراهم می‌کنیم." },
  { title: "تعهد به زمان", text: "ارسال در سریع‌ترین زمان ممکن، چون می‌دانیم کار کارگاهی منتظر نمی‌ماند." },
];

function AboutPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden border-b border-border">
        <PhotoBackdrop src={aboutBg.url} intensity={0.3} />
        <CircuitBackdrop className="opacity-50" />
        <div className="container relative mx-auto px-4 py-16 md:py-24">
          <div className="text-xs font-bold text-primary mb-3">داستان ما</div>
          <h1 className="text-4xl md:text-5xl font-black max-w-3xl leading-tight">
            بیش از دو دهه در کنار حرفه‌ای‌های برق ساختمان
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground leading-8">
            {SITE.name} از سال‌ها پیش با هدف تأمین تخصصی تجهیزات برق و روشنایی ساختمان فعالیت خود را آغاز کرد. امروز افتخار ما همکاری پیوسته با الکتریسین‌ها، پیمانکاران و سازندگانی است که کیفیت و اصالت کالا برایشان معنا دارد.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((s) => (
            <div key={s.l} className="rounded-2xl border border-border bg-card/50 p-6 text-center">
              <s.icon className="h-6 w-6 text-primary mx-auto mb-3" strokeWidth={1.75} />
              <div className="text-3xl md:text-4xl font-black text-primary">{toFa(s.n)}</div>
              <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 pb-20">
        <h2 className="text-3xl font-black mb-2">ارزش‌های ما</h2>
        <p className="text-muted-foreground mb-8">آنچه ما را در بازار شلوغ برق متمایز نگه داشته است.</p>
        <div className="grid gap-5 md:grid-cols-2">
          {VALUES.map((v, i) => (
            <div key={v.title} className="glow-card rounded-2xl p-7">
              <div className="text-xs font-bold text-primary mb-2 tabular-nums">۰{toFa(i + 1)}</div>
              <h3 className="text-xl font-bold">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-7">{v.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-border bg-card/40 p-8 md:p-10">
          <h3 className="text-2xl font-black">ماموریت ما</h3>
          <p className="mt-4 text-muted-foreground leading-8 max-w-3xl">
            ما باور داریم تأمین تجهیزات برق نباید مانع پیشرفت پروژه شما باشد. ماموریت ما این است که با عرضه گستردهٔ کالاهای اصل، قیمت‌گذاری منصفانه و مشاوره فنی صادقانه، تجربه‌ای حرفه‌ای و قابل اعتماد در اختیار همکاران بازار قرار دهیم.
          </p>
          <Link to="/contact" className="mt-7 inline-flex items-center rounded-lg bg-primary px-6 py-3 text-sm font-bold text-primary-foreground" style={{ boxShadow: "var(--shadow-glow)" }}>
            با ما در ارتباط باشید
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}