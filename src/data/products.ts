// All product/category content lives in this single file.
// To add real photos / catalog PDFs later: drop files into /public/products/<slug>/
// and update the `images` array and `catalogFile` field below.

export type Product = {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  brands: string[];
  // Replace with real photo paths like "/products/wire-cable/1.jpg"
  images: string[];
  // Replace with real PDF path like "/products/wire-cable/catalog.pdf"
  catalogFile: string;
  // Placeholder specs — edit freely.
  specs: { label: string; value: string }[];
  // Lucide icon name (rendered in components/CategoryIcon)
  icon:
    | "Cable"
    | "ToggleRight"
    | "Lightbulb"
    | "Phone"
    | "Shield"
    | "Zap"
    | "Fan"
    | "PipetteIcon"
    | "Lamp"
    | "Camera"
    | "Radar"
    | "Cylinder";
};

export const PRODUCTS: Product[] = [
  {
    slug: "wire-cable",
    shortTitle: "سیم و کابل",
    title: "سیم و کابل ساختمانی و صنعتی",
    tagline: "سیم‌های افشان، مفتولی و کابل‌های قدرت با اصالت کارخانه",
    description:
      "انواع سیم و کابل برای سیم‌کشی ساختمانی، روشنایی، تابلوهای برق و مصارف صنعتی. کلیه محصولات دارای شناسنامه و استاندارد ملی ایران بوده و در مقاطع و طول‌های مختلف موجود می‌باشد. مشاوره فنی جهت انتخاب مقطع مناسب توسط کارشناسان ما ارائه می‌شود.",
    brands: ["سمنان", "افشارنژاد", "برتر", "آمل"],
    images: [],
    catalogFile: "/products/wire-cable/catalog.pdf",
    specs: [
      { label: "جنس هادی", value: "مس خالص ۹۹.۹٪" },
      { label: "نوع عایق", value: "PVC استاندارد" },
      { label: "مقاطع موجود", value: "۰.۵ تا ۲۴۰ میلی‌متر مربع" },
      { label: "ولتاژ کار", value: "۴۵۰/۷۵۰ ولت" },
      { label: "استاندارد", value: "ISIRI 607" },
    ],
    icon: "Cable",
  },
  {
    slug: "switch-socket",
    shortTitle: "کلید و پریز",
    title: "کلید و پریز توکار و روکار",
    tagline: "طراحی مدرن، کیفیت ماندگار",
    description:
      "مجموعه‌ای کامل از کلید و پریز ساختمانی در طرح‌ها و رنگ‌های متنوع، مناسب برای پروژه‌های مسکونی، اداری و تجاری. شامل کلید تک‌پل، دوپل، تبدیل، پریز برق، پریز شبکه، آنتن و پریز محافظ‌دار.",
    brands: ["دلند", "ایران الکتریک", "پارت"],
    images: [],
    catalogFile: "/products/switch-socket/catalog.pdf",
    specs: [
      { label: "نوع نصب", value: "توکار و روکار" },
      { label: "جریان نامی", value: "۱۶ آمپر" },
      { label: "ولتاژ", value: "۲۵۰ ولت" },
      { label: "رنگ‌بندی", value: "سفید، کرم، طلایی، مشکی" },
    ],
    icon: "ToggleRight",
  },
  {
    slug: "lighting",
    shortTitle: "روشنایی، چراغ و پنل",
    title: "روشنایی، چراغ و پنل LED",
    tagline: "از لامپ ساده تا پنل ۶۰×۶۰ سقفی",
    description:
      "انواع لامپ‌های LED، چراغ‌های سقفی، پنل‌های توکار و روکار ۶۰×۶۰، چراغ‌های خطی و چراغ‌های صنعتی. مناسب برای دفاتر اداری، مغازه، منزل و فضاهای صنعتی با مصرف انرژی پایین و عمر طولانی.",
    brands: [
      "پارس شهاب",
      "ZFR",
      "پارس شعاع توس",
      "سهند آوا",
      "پارس استار",
      "پارس اروند",
    ],
    images: [],
    catalogFile: "/products/lighting/catalog.pdf",
    specs: [
      { label: "توان", value: "۳ تا ۱۰۰ وات" },
      { label: "رنگ نور", value: "آفتابی، مهتابی، طبیعی" },
      { label: "بدنه", value: "آلومینیوم با پراکنده‌کننده اپال" },
      { label: "گارانتی", value: "تا ۱۸ ماه تعویض" },
    ],
    icon: "Lightbulb",
  },
  {
    slug: "intercom",
    shortTitle: "آیفون تصویری و صوتی",
    title: "آیفون تصویری و صوتی ساختمانی",
    tagline: "ارتباط امن و واضح برای ورودی ساختمان",
    description:
      "ست‌های کامل آیفون تصویری و صوتی برای ساختمان‌های مسکونی و اداری، شامل پنل ورودی، گوشی داخلی و منبع تغذیه. قابلیت اتصال به چند واحد، حافظه تصویری و قفل برقی.",
    brands: ["تابا", "سیماران", "الکتروپیک"],
    images: [],
    catalogFile: "/products/intercom/catalog.pdf",
    specs: [
      { label: "سایز نمایشگر", value: "۴.۳ تا ۷ اینچ" },
      { label: "تعداد واحد", value: "۱ تا ۱۰۰ واحد" },
      { label: "حافظه تصویر", value: "دارد" },
      { label: "قفل برقی", value: "پشتیبانی می‌شود" },
    ],
    icon: "Phone",
  },
  {
    slug: "surge-protector",
    shortTitle: "محافظ و چندراهی",
    title: "محافظ ولتاژ و چندراهی برق",
    tagline: "حفاظت تجهیزات گران‌قیمت در برابر نوسانات برق",
    description:
      "محافظ‌های ولتاژ یخچال، تلویزیون، کامپیوتر و لوازم صوتی تصویری به همراه انواع چندراهی برق با کلید و فیوز. تأمین ایمنی شبکه برق منزل و محل کار.",
    brands: ["پارت", "کیان", "شیل ایران", "تواتر", "پارس اروند", "بهداد"],
    images: [],
    catalogFile: "/products/surge-protector/catalog.pdf",
    specs: [
      { label: "ولتاژ کار", value: "۱۸۰ تا ۲۵۰ ولت" },
      { label: "تأخیر زمانی", value: "۳ یا ۵ دقیقه" },
      { label: "تعداد خروجی", value: "۲ تا ۸ پریز" },
      { label: "گارانتی", value: "۱۲ تا ۲۴ ماه" },
    ],
    icon: "Shield",
  },
  {
    slug: "fuse",
    shortTitle: "فیوز و جعبه فیوز",
    title: "فیوز مینیاتوری و جعبه تقسیم",
    tagline: "ایمنی مدارهای برق ساختمان",
    description:
      "فیوزهای مینیاتوری تک‌فاز و سه‌فاز، فیوز محافظ جان، کلید اتوماتیک و انواع جعبه فیوز توکار و روکار جهت تابلوهای برق ساختمانی و صنعتی.",
    brands: ["دنا", "پارس اروند", "شیل ایران", "دریا"],
    images: [],
    catalogFile: "/products/fuse/catalog.pdf",
    specs: [
      { label: "جریان نامی", value: "۶ تا ۶۳ آمپر" },
      { label: "تعداد پل", value: "تک، دو و سه پل" },
      { label: "نوع منحنی", value: "C و D" },
      { label: "قدرت قطع", value: "۶ کیلوآمپر" },
    ],
    icon: "Zap",
  },
  {
    slug: "fan",
    shortTitle: "هواکش و پنکه",
    title: "هواکش خانگی و صنعتی، پنکه",
    tagline: "تهویه سالم برای هر فضا",
    description:
      "انواع هواکش حمام و آشپزخانه، هواکش صنعتی، پنکه رومیزی، ایستاده و سقفی. کم‌صدا، کم‌مصرف و با عمر مفید بالا.",
    brands: ["دمنده", "پارس خزر", "خزر فن", "کولاک"],
    images: [],
    catalogFile: "/products/fan/catalog.pdf",
    specs: [
      { label: "قطر پروانه", value: "۱۰ تا ۴۰ سانتی‌متر" },
      { label: "دبی هوا", value: "۲۰۰ تا ۲۵۰۰ متر مکعب بر ساعت" },
      { label: "سطح صدا", value: "از ۳۲ دسی‌بل" },
    ],
    icon: "Fan",
  },
  {
    slug: "pvc-pipe",
    shortTitle: "لوله برق و زانوی نسوز PVC",
    title: "لوله و زانوی نسوز PVC برق",
    tagline: "بستر امن سیم‌کشی توکار",
    description:
      "انواع لوله خرطومی فنردار و لوله صلب PVC نسوز، به همراه زانو، بوشن و قوطی‌های تقسیم. مناسب سیم‌کشی توکار ساختمان مطابق با مقررات ملی ساختمان.",
    brands: [],
    images: [],
    catalogFile: "/products/pvc-pipe/catalog.pdf",
    specs: [
      { label: "سایز", value: '۱۳، ۱۶، ۲۱ و ۲۹ میلی‌متر' },
      { label: "جنس", value: "PVC ضد حریق" },
      { label: "رنگ", value: "سفید و طوسی" },
    ],
    icon: "PipetteIcon",
  },
  {
    slug: "garden-light",
    shortTitle: "حباب و چراغ باغچه‌ای",
    title: "چراغ باغچه‌ای، دیواری و ایستاده",
    tagline: "نورپردازی فضای باز با مقاومت بالا",
    description:
      "چراغ‌های ضد آب باغچه‌ای، دیواری و ایستاده با IP بالا، مناسب نورپردازی محوطه، پارکینگ، پاسیو و فضای سبز. شامل حباب‌های متنوع تزئینی.",
    brands: ["دوستان", "سوپیتا"],
    images: [],
    catalogFile: "/products/garden-light/catalog.pdf",
    specs: [
      { label: "درجه حفاظت", value: "IP44 تا IP65" },
      { label: "ارتفاع", value: "۳۰ سانتی تا ۲ متر" },
      { label: "نوع لامپ", value: "LED یا E27" },
    ],
    icon: "Lamp",
  },
  {
    slug: "camera-network",
    shortTitle: "تجهیزات دوربین و شبکه",
    title: "تجهیزات دوربین مداربسته و شبکه",
    tagline: "دیده‌بانی و زیرساخت ارتباطی پایدار",
    description:
      "انواع دوربین مداربسته AHD و IP، دستگاه ضبط DVR و NVR، سوییچ شبکه، پچ‌پنل، کابل شبکه و کانکتور. مناسب پروژه‌های مسکونی، فروشگاهی و اداری.",
    brands: [],
    images: [],
    catalogFile: "/products/camera-network/catalog.pdf",
    specs: [
      { label: "رزولوشن دوربین", value: "۲ تا ۸ مگاپیکسل" },
      { label: "دید در شب", value: "تا ۴۰ متر" },
      { label: "کابل شبکه", value: "Cat6 و Cat6 SFTP" },
    ],
    icon: "Camera",
  },
  {
    slug: "sensor-timer",
    shortTitle: "سنسور سقفی و تایمر راه‌پله",
    title: "سنسور حرکتی سقفی و تایمر راه‌پله",
    tagline: "هوشمندسازی ساده مصرف انرژی",
    description:
      "سنسورهای حرکتی سقفی و دیواری، تایمر راه‌پله دیجیتال و آنالوگ جهت کنترل خودکار روشنایی راه‌پله، پارکینگ و راهرو. کاهش مصرف برق و افزایش راحتی.",
    brands: [],
    images: [],
    catalogFile: "/products/sensor-timer/catalog.pdf",
    specs: [
      { label: "زاویه دید", value: "۳۶۰ درجه" },
      { label: "شعاع تشخیص", value: "تا ۶ متر" },
      { label: "تأخیر زمانی", value: "۱۰ ثانیه تا ۱۰ دقیقه" },
    ],
    icon: "Radar",
  },
  {
    slug: "duct-tape",
    shortTitle: "داکت و چسب",
    title: "داکت کابل و چسب برق",
    tagline: "سیم‌کشی مرتب و ایمن",
    description:
      "انواع داکت روکار در سایزهای مختلف برای جمع‌آوری زیبای سیم‌ها، به همراه چسب برق صنعتی PVC در رنگ‌های متنوع.",
    brands: ["دانوب", "سوپیتا"],
    images: [],
    catalogFile: "/products/duct-tape/catalog.pdf",
    specs: [
      { label: "عرض داکت", value: "۲۰ تا ۱۰۰ میلی‌متر" },
      { label: "طول هر شاخه", value: "۲ متر" },
      { label: "رنگ چسب", value: "مشکی، سفید، قرمز، آبی، زرد" },
    ],
    icon: "Cylinder",
  },
];

export const ALL_BRANDS = Array.from(
  new Set(PRODUCTS.flatMap((p) => p.brands)),
).sort((a, b) => a.localeCompare(b, "fa"));

export function getProduct(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function relatedProducts(slug: string, n = 3) {
  const idx = PRODUCTS.findIndex((p) => p.slug === slug);
  if (idx === -1) return PRODUCTS.slice(0, n);
  const out: Product[] = [];
  for (let i = 1; out.length < n; i++) {
    out.push(PRODUCTS[(idx + i) % PRODUCTS.length]);
  }
  return out;
}

// EDIT THESE — visible site-wide contact details
export const SITE = {
  name: "الکتروسنتر",
  tagline: "تأمین‌کننده تخصصی تجهیزات برق و روشنایی ساختمان",
  phone: "۰۲۱-۳۳۹۹۸۸۷۷",
  phoneRaw: "02133998877",
  mobile: "۰۹۱۲-۱۲۳-۴۵۶۷",
  mobileRaw: "09121234567",
  whatsapp: "989121234567",
  email: "info@electrocenter.ir",
  instagram: "electrocenter.ir",
  address: "تهران، خیابان لاله‌زار جنوبی، پاساژ نور، طبقه همکف، پلاک ۱۲",
  hours: "شنبه تا پنجشنبه — ۹:۰۰ تا ۲۰:۰۰",
};