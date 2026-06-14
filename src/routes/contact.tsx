import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, MapPin, Clock, Mail, Instagram, MessageCircle, Send } from "lucide-react";
import { SITE } from "@/data/products";
import { SiteLayout } from "@/components/SiteLayout";
import { CircuitBackdrop } from "@/components/CircuitBackdrop";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "تماس با ما — الکتروسنتر" },
      { name: "description", content: "شماره تماس، آدرس، ساعات کاری و فرم ارتباط فروشگاه الکتروسنتر." },
      { property: "og:title", content: "تماس با الکتروسنتر" },
      { property: "og:description", content: "ما در خدمت شما هستیم — تماس بگیرید یا پیام بدهید" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", subject: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `نام: ${form.name}%0Aتلفن: ${form.phone}%0A%0A${encodeURIComponent(form.message)}`;
    const subject = encodeURIComponent(form.subject || "تماس از سایت الکتروسنتر");
    // No backend — open the user's email app
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
  };

  const ITEMS = [
    { icon: Phone, title: "تلفن فروشگاه", value: SITE.phone, href: `tel:${SITE.phoneRaw}` },
    { icon: MessageCircle, title: "موبایل / واتس‌اپ", value: SITE.mobile, href: `https://wa.me/${SITE.whatsapp}` },
    { icon: Mail, title: "ایمیل", value: SITE.email, href: `mailto:${SITE.email}`, ltr: true },
    { icon: Instagram, title: "اینستاگرام", value: `@${SITE.instagram}`, href: `https://instagram.com/${SITE.instagram}`, ltr: true },
    { icon: MapPin, title: "نشانی فروشگاه", value: SITE.address },
    { icon: Clock, title: "ساعات کاری", value: SITE.hours },
  ];

  return (
    <SiteLayout>
      <section className="relative overflow-hidden border-b border-border">
        <CircuitBackdrop className="opacity-50" />
        <div className="container relative mx-auto px-4 py-16 md:py-24">
          <div className="text-xs font-bold text-primary mb-3">در خدمت شما هستیم</div>
          <h1 className="text-4xl md:text-5xl font-black">تماس با ما</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground leading-7">
            برای استعلام قیمت، مشاوره فنی یا ثبت سفارش عمده، از راه‌های زیر با ما در ارتباط باشید. کارشناسان ما در ساعات کاری پاسخگوی شما هستند.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <div className="grid sm:grid-cols-2 gap-4">
            {ITEMS.map((it) => {
              const inner = (
                <div className="glow-card rounded-2xl p-5 h-full">
                  <div className="flex items-start gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-lg bg-background border border-border shrink-0">
                      <it.icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs text-muted-foreground">{it.title}</div>
                      <div className="mt-1 text-sm font-bold break-words" dir={it.ltr ? "ltr" : "rtl"} style={it.ltr ? { textAlign: "left" } : undefined}>
                        {it.value}
                      </div>
                    </div>
                  </div>
                </div>
              );
              return it.href ? (
                <a key={it.title} href={it.href} target={it.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="block">
                  {inner}
                </a>
              ) : (
                <div key={it.title}>{inner}</div>
              );
            })}
          </div>
        </div>

        <form onSubmit={onSubmit} className="glow-card rounded-2xl p-7 md:p-9">
          <h2 className="text-2xl font-black">ارسال پیام</h2>
          <p className="mt-1 text-sm text-muted-foreground">پس از تکمیل فرم، پیام در اپلیکیشن ایمیل شما باز می‌شود تا برایمان ارسال کنید.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Field label="نام و نام خانوادگی" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
            <Field label="شماره تماس" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} required type="tel" />
          </div>
          <Field label="موضوع" value={form.subject} onChange={(v) => setForm({ ...form, subject: v })} className="mt-4" />
          <div className="mt-4">
            <label className="block text-xs font-bold mb-2">پیام شما</label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm focus:border-primary focus:outline-none transition resize-none"
              placeholder="درخواست استعلام، سؤال فنی یا فهرست خرید خود را بنویسید..."
            />
          </div>
          <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground hover:opacity-90 transition" style={{ boxShadow: "var(--shadow-glow)" }}>
            <Send className="h-4 w-4" /> ارسال پیام
          </button>
        </form>
      </section>
    </SiteLayout>
  );
}

function Field({
  label, value, onChange, required, type = "text", className = "",
}: {
  label: string; value: string; onChange: (v: string) => void;
  required?: boolean; type?: string; className?: string;
}) {
  return (
    <div className={className}>
      <label className="block text-xs font-bold mb-2">{label}{required && <span className="text-primary mr-1">*</span>}</label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm focus:border-primary focus:outline-none transition"
      />
    </div>
  );
}