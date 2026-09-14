/* Catalogue editing guide
 * This is the only file to edit when adding categories or products.
 * Existing records match the shop's supplied 12 product GROUPS and brand list.
 * Exact model names, product photos and specifications can be added when supplied.
 * Add a category: { id: "lighting", title: "...", background: "public/backgrounds/lighting.jpg" }
 * Add a product to products below, using a permanent, unique id. Never reuse an old id.
 * Example (do not uncomment until real information is ready):
 * { id: "101", slug: "example-lamp", categoryId: "lighting", kind: "product",
 *   title: "...", tagline: "...", description: "...", brands: ["..."],
 *   images: [{ src: "public/products/example/front.jpg", alt: "..." }],
 *   specs: [{ label: "...", value: "..." }], featured: true }
 * Link: product.html?id=101 (optional &title=... is cosmetic; data always comes from id).
 * Brands have permanent IDs in CATALOG.brands; product.brands stores their Persian titles.
 * Brand listing: products.html?category=switch-socket&brand=deland
 * Model: product.html?id=deland-crystal&brand=deland
 * Add a new brand to CATALOG.brands, and its title to the group's/product's brands array.
 * Empty images/specs/brands are supported. Backgrounds are category decoration, not product photos.
 * Keep this as a normal script: pages also work when opened directly from disk.
 */
window.SHOP = {
  name: "کالای برق خلیلی",
  phone: "01142277443",
  whatsapp: "989373240136",
  email: "khalilielectric1@gmail.com"
};
window.CATALOG = {
  "categories": [
    {
      "id": "wire-cable",
      "title": "انواع سیم و کابل",
      "background": "public/backgrounds/wire-cable.jpg"
    },
    {
      "id": "switch-socket",
      "title": "کلید و پریز",
      "background": "public/backgrounds/switch-socket.jpg"
    },
    {
      "id": "lighting",
      "title": "روشنایی، چراغ و پنل",
      "background": "public/backgrounds/lighting.jpg"
    },
    {
      "id": "intercom",
      "title": "آیفون تصویری و صوتی",
      "background": "public/backgrounds/intercom.jpg"
    },
    {
      "id": "surge-protector",
      "title": "محافظ و چندراهی",
      "background": "public/backgrounds/surge-protector.jpg"
    },
    {
      "id": "fuse",
      "title": "فیوز و جعبه فیوز",
      "background": "public/backgrounds/fuse.jpg"
    },
    {
      "id": "fan",
      "title": "هواکش و پنکه",
      "background": "public/backgrounds/fan.jpg"
    },
    {
      "id": "pvc-pipe",
      "title": "لوله برق و زانوی نسوز PVC",
      "background": "public/backgrounds/pvc-pipe.jpg"
    },
    {
      "id": "garden-light",
      "title": "حباب و چراغ باغچه‌ای",
      "background": "public/backgrounds/garden-light.jpg"
    },
    {
      "id": "camera-network",
      "title": "تجهیزات دوربین و شبکه",
      "background": "public/backgrounds/camera-network.jpg"
    },
    {
      "id": "sensor-timer",
      "title": "سنسور سقفی و تایمر راه‌پله",
      "background": "public/backgrounds/sensor-timer.jpg"
    },
    {
      "id": "duct-tape",
      "title": "داکت و چسب",
      "background": "public/backgrounds/duct-tape.jpg"
    }
  ],
  "products": [
    {
      "id": "1",
      "slug": "wire-cable",
      "categoryId": "wire-cable",
      "kind": "group",
      "title": "انواع سیم و کابل",
      "tagline": "سیم‌های افشان، مفتولی و کابل‌های قدرت با اصالت کارخانه",
      "description": "انواع سیم و کابل برای سیم‌کشی ساختمانی، روشنایی، تابلوهای برق و مصارف صنعتی. کلیه محصولات دارای شناسنامه و استاندارد ملی ایران بوده و در مقاطع و طول‌های مختلف موجود می‌باشد.",
      "brands": [
        "سمنان",
        "افشارنژاد",
        "برتر",
        "آمل"
      ],
      "images": [],
      "specs": [],
      "featured": true
    },
    {
      "id": "2",
      "slug": "switch-socket",
      "categoryId": "switch-socket",
      "kind": "group",
      "title": "کلید و پریز توکار و روکار",
      "tagline": "طراحی مدرن، کیفیت ماندگار",
      "description": "مجموعه‌ای کامل از کلید و پریز ساختمانی در طرح‌ها و رنگ‌های متنوع، مناسب پروژه‌های مسکونی، اداری و تجاری.",
      "brands": [
        "دلند",
        "ایران الکتریک",
        "پارت"
      ],
      "images": [],
      "specs": [],
      "featured": true
    },
    {
      "id": "3",
      "slug": "lighting",
      "categoryId": "lighting",
      "kind": "group",
      "title": "روشنایی، چراغ و پنل LED",
      "tagline": "از لامپ ساده تا پنل ۶۰×۶۰ سقفی",
      "description": "انواع محصولات روشنایی، چراغ و پنل از برندهای پارس شهاب، ZFR، پارس شعاع توس، سهند آوا و پارس استار، به‌همراه پنل ۶۰×۶۰ پارس اروند. برای انتخاب مدل، توان و رنگ نور مناسب با فروشگاه تماس بگیرید.",
      "brands": [
        "پارس شهاب",
        "ZFR",
        "پارس شعاع توس",
        "سهند آوا",
        "پارس استار",
        "پارس اروند"
      ],
      "images": [],
      "specs": [],
      "featured": true
    },
    {
      "id": "4",
      "slug": "intercom",
      "categoryId": "intercom",
      "kind": "group",
      "title": "آیفون تصویری و صوتی ساختمانی",
      "tagline": "ارتباط امن و واضح برای ورودی ساختمان",
      "description": "ست‌های کامل آیفون تصویری و صوتی شامل پنل ورودی، گوشی داخلی و منبع تغذیه برای ساختمان‌های مسکونی و اداری.",
      "brands": [
        "تابا",
        "سیماران",
        "الکتروپیک"
      ],
      "images": [],
      "specs": [],
      "featured": true
    },
    {
      "id": "5",
      "slug": "surge-protector",
      "categoryId": "surge-protector",
      "kind": "group",
      "title": "محافظ ولتاژ و چندراهی برق",
      "tagline": "حفاظت تجهیزات در برابر نوسانات برق",
      "description": "محافظ ولتاژ یخچال، تلویزیون و کامپیوتر به همراه انواع چندراهی برق با کلید و فیوز.",
      "brands": [
        "پارت",
        "کیان",
        "شیل ایران",
        "تواتر",
        "پارس اروند",
        "بهداد"
      ],
      "images": [],
      "specs": [],
      "featured": true
    },
    {
      "id": "6",
      "slug": "fuse",
      "categoryId": "fuse",
      "kind": "group",
      "title": "فیوز و جعبه فیوز",
      "tagline": "ایمنی مدارهای برق ساختمان",
      "description": "فیوزهای مینیاتوری تک‌فاز و سه‌فاز، محافظ جان، کلید اتوماتیک و جعبه فیوز ساختمانی و صنعتی.",
      "brands": [
        "دنا",
        "پارس اروند",
        "شیل ایران",
        "دریا"
      ],
      "images": [],
      "specs": [],
      "featured": true
    },
    {
      "id": "7",
      "slug": "fan",
      "categoryId": "fan",
      "kind": "group",
      "title": "هواکش خانگی و صنعتی، پنکه",
      "tagline": "تهویه سالم برای هر فضا",
      "description": "انواع هواکش و پنکه از برندهای دمنده و خزر فن، به‌همراه پنکه‌های پارس خزر و کولاک. برای انتخاب مدل متناسب با فضای موردنظر با فروشگاه تماس بگیرید.",
      "brands": [
        "دمنده",
        "پارس خزر",
        "خزر فن",
        "کولاک"
      ],
      "images": [],
      "specs": [],
      "featured": false
    },
    {
      "id": "8",
      "slug": "pvc-pipe",
      "categoryId": "pvc-pipe",
      "kind": "group",
      "title": "انواع لوله برق نسوز و زانو معمولی و عصایی نسوز PVC",
      "tagline": "بستر امن سیم‌کشی توکار",
      "description": "انواع لوله برق نسوز و زانوهای معمولی و عصایی نسوز PVC برای مسیرهای سیم‌کشی ساختمان. برای اطلاع از اندازه‌ها و مدل‌های موجود با فروشگاه در ارتباط باشید.",
      "brands": [],
      "images": [],
      "specs": [],
      "featured": false
    },
    {
      "id": "9",
      "slug": "garden-light",
      "categoryId": "garden-light",
      "kind": "group",
      "title": "انواع حباب و چراغ باغچه‌ای دیواری و ایستاده",
      "tagline": "نورپردازی فضای باز با مقاومت بالا",
      "description": "انواع حباب و چراغ باغچه‌ای، دیواری و ایستاده از برندهای دوستان و سوپیتا. برای انتخاب مدل مناسب محوطه، باغچه و ورودی ساختمان با فروشگاه مشورت کنید.",
      "brands": [
        "دوستان",
        "سوپیتا"
      ],
      "images": [],
      "specs": [],
      "featured": false
    },
    {
      "id": "10",
      "slug": "camera-network",
      "categoryId": "camera-network",
      "kind": "group",
      "title": "تجهیزات دوربین مداربسته و شبکه",
      "tagline": "دیده‌بانی و زیرساخت ارتباطی پایدار",
      "description": "دوربین مداربسته AHD و IP، دستگاه ضبط DVR و NVR، سوییچ شبکه، پچ‌پنل و کابل شبکه.",
      "brands": [],
      "images": [],
      "specs": [],
      "featured": false
    },
    {
      "id": "11",
      "slug": "sensor-timer",
      "categoryId": "sensor-timer",
      "kind": "group",
      "title": "سنسور حرکتی سقفی و تایمر راه‌پله",
      "tagline": "هوشمندسازی ساده مصرف انرژی",
      "description": "سنسورهای حرکتی سقفی و دیواری و تایمر راه‌پله برای کنترل خودکار روشنایی راهرو و پارکینگ.",
      "brands": [],
      "images": [],
      "specs": [],
      "featured": false
    },
    {
      "id": "12",
      "slug": "duct-tape",
      "categoryId": "duct-tape",
      "kind": "group",
      "title": "انواع داکت معمولی و چسب",
      "tagline": "سیم‌کشی مرتب و ایمن",
      "description": "انواع داکت معمولی و چسب از برندهای دانوب و سوپیتا برای نظم‌دهی و تکمیل سیم‌کشی. مشخصات و مدل‌های موجود را از فروشگاه بپرسید.",
      "brands": [
        "دانوب",
        "سوپیتا"
      ],
      "images": [],
      "specs": [],
      "featured": false
    },
    {
      "id": "deland-crystal",
      "slug": "deland-crystal-pearl-gold",
      "categoryId": "switch-socket",
      "kind": "product",
      "title": "کلید و پریز دلند مدل کریستال",
      "tagline": "قاب صدفی، مکانیزم طلایی؛ طراحی خاص و مدرن",
      "description": "کلید و پریز دلند مدل کریستال با قاب صدفی و مکانیزم طلایی. جنس بدنه و مکانیزم پلی‌کربنات است؛ این مدل با کیفیت ساخت بالا و طراحی خاص و مدرن عرضه می‌شود.",
      "brands": [
        "دلند"
      ],
      "images": [
        {
          "src": "public/products/switch-socket/deland/crystal-pearl-gold.jpg",
          "alt": "مجموعه کلید و پریز دلند مدل کریستال با قاب صدفی و مکانیزم طلایی"
        }
      ],
      "specs": [
        {
          "label": "برند",
          "value": "دلند"
        },
        {
          "label": "مدل",
          "value": "کریستال"
        },
        {
          "label": "رنگ قاب",
          "value": "صدفی"
        },
        {
          "label": "رنگ مکانیزم",
          "value": "طلایی"
        },
        {
          "label": "جنس بدنه و مکانیزم",
          "value": "پلی‌کربنات"
        },
        {
          "label": "کیفیت ساخت",
          "value": "بالا"
        },
        {
          "label": "طراحی",
          "value": "خاص و مدرن"
        }
      ],
      "featured": false
    }
  ],
  "brands": [
    {
      "id": "semnan",
      "title": "سمنان"
    },
    {
      "id": "afsharnejad",
      "title": "افشارنژاد"
    },
    {
      "id": "bartar",
      "title": "برتر"
    },
    {
      "id": "amol",
      "title": "آمل"
    },
    {
      "id": "deland",
      "title": "دلند"
    },
    {
      "id": "iran-electric",
      "title": "ایران الکتریک"
    },
    {
      "id": "part",
      "title": "پارت"
    },
    {
      "id": "pars-shahab",
      "title": "پارس شهاب"
    },
    {
      "id": "zfr",
      "title": "ZFR"
    },
    {
      "id": "pars-shoa-toos",
      "title": "پارس شعاع توس"
    },
    {
      "id": "sahand-ava",
      "title": "سهند آوا"
    },
    {
      "id": "pars-star",
      "title": "پارس استار"
    },
    {
      "id": "pars-arvand",
      "title": "پارس اروند"
    },
    {
      "id": "taba",
      "title": "تابا"
    },
    {
      "id": "simaran",
      "title": "سیماران"
    },
    {
      "id": "electropeyk",
      "title": "الکتروپیک"
    },
    {
      "id": "kian",
      "title": "کیان"
    },
    {
      "id": "shil-iran",
      "title": "شیل ایران"
    },
    {
      "id": "tavator",
      "title": "تواتر"
    },
    {
      "id": "behdad",
      "title": "بهداد"
    },
    {
      "id": "dena",
      "title": "دنا"
    },
    {
      "id": "darya",
      "title": "دریا"
    },
    {
      "id": "damandeh",
      "title": "دمنده"
    },
    {
      "id": "pars-khazar",
      "title": "پارس خزر"
    },
    {
      "id": "khazar-fan",
      "title": "خزر فن"
    },
    {
      "id": "koolak",
      "title": "کولاک"
    },
    {
      "id": "doostan",
      "title": "دوستان"
    },
    {
      "id": "soupita",
      "title": "سوپیتا"
    },
    {
      "id": "danub",
      "title": "دانوب"
    }
  ]
};
