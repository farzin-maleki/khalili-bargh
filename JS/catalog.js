/* Catalogue editing guide
 * This is the only file to edit when adding categories or products.
 * Existing records match the shop's supplied 12 product GROUPS and brand list.
 * Exact model names, product photos and specifications can be added when supplied.
 * Add a category: { id: "lighting", title: "...", background: "public/Images/background/lighting.jpg" }
 * Add a product to products below, using a permanent, unique id. Never reuse an old id.
 * Example (do not uncomment until real information is ready):
 * { id: "101", slug: "example-lamp", categoryId: "lighting", kind: "product",
 *   title: "...", tagline: "...", description: "...", brands: ["..."],
 *   images: [{ src: "public/Images/products/example/front.jpg", alt: "..." }],
 *   specs: [{ label: "...", value: "..." }], featured: true }
 * Link: pages/product.html?id=101 (optional &title=... is cosmetic; data always comes from id).
 * Brands have permanent IDs in CATALOG.brands; product.brands stores their Persian titles.
 * Brand listing: pages/products.html?category=switch-socket&brand=deland
 * Model: pages/product.html?id=deland-crystal&brand=deland
 * Add a new brand to CATALOG.brands, and its title to the group's/product's brands array.
 * kind: "collection" is a category/brand profile with a gallery and shared PDF catalogues.
 * sourceMessageIds record the source export messages; reference screenshots are not product photos.
 * Empty images/specs/brands are supported. Backgrounds are category decoration, not product photos.
 * PDFs live in public/documents/<brand-id>/. Add records to documents below:
 * { id: "unique-id", brandId: "deland", categoryIds: ["switch-socket"],
 *   title: "کاتالوگ دلند", src: "public/documents/deland/catalogue.pdf", sizeBytes: 123456 }
 * Brand catalogues appear for matching categories and products automatically.
 * For a model-only PDF, also set productIds: ["deland-crystal"].
 * Keep this as a normal script: pages also work when opened directly from disk.
 */
window.SHOP = {
  name: "کالای برق خلیلی",
  phone: "01142277443",
  whatsapp: "989373240136",
  email: "khalilielectric1@gmail.com",
};
window.CATALOG = {
  "categories": [
    {
      "id": "wire-cable",
      "title": "انواع سیم و کابل",
      "background": "public/Images/background/wire-cable.webp"
    },
    {
      "id": "switch-socket",
      "title": "کلید و پریز",
      "background": "public/Images/background/switch-socket.webp"
    },
    {
      "id": "lighting",
      "title": "روشنایی، چراغ و پنل",
      "background": "public/Images/background/lighting.webp"
    },
    {
      "id": "intercom",
      "title": "آیفون تصویری و صوتی",
      "background": "public/Images/background/intercom.webp"
    },
    {
      "id": "surge-protector",
      "title": "محافظ و چندراهی",
      "background": "public/Images/background/surge-protector.webp"
    },
    {
      "id": "fuse",
      "title": "فیوز و جعبه فیوز",
      "background": "public/Images/background/fuse.webp"
    },
    {
      "id": "fan",
      "title": "هواکش و پنکه",
      "background": "public/Images/background/fan.webp"
    },
    {
      "id": "pvc-pipe",
      "title": "لوله برق و زانوی نسوز PVC",
      "background": "public/Images/background/pvc-pipe.webp"
    },
    {
      "id": "garden-light",
      "title": "حباب و چراغ باغچه‌ای",
      "background": "public/Images/background/garden-light.webp"
    },
    {
      "id": "camera-network",
      "title": "تجهیزات دوربین و شبکه",
      "background": "public/Images/background/camera-network.webp"
    },
    {
      "id": "sensor-timer",
      "title": "سنسور سقفی و تایمر راه‌پله",
      "background": "public/Images/background/sensor-timer.webp"
    },
    {
      "id": "duct-tape",
      "title": "داکت و چسب",
      "background": "public/Images/background/duct-tape.webp"
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
      "images": [
        {
          "src": "public/Images/background/wire-cable.webp"
        }
      ],
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
        "پارت",
        "آسیا الکتریک"
      ],
      "images": [
        {
          "src": "public/Images/background/switch-socket.webp"
        }
      ],
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
      "images": [
        {
          "src": "public/Images/background/lighting.webp"
        }
      ],
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
      "images": [
        {
          "src": "public/Images/background/intercom.webp"
        }
      ],
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
      "images": [
        {
          "src": "public/Images/background/surge-protector.webp"
        }
      ],
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
        "دریا",
        "برق سارو",
        "پارس استار"
      ],
      "images": [
        {
          "src": "public/Images/background/fuse.webp"
        }
      ],
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
      "images": [
        {
          "src": "public/Images/background/fan.webp"
        }
      ],
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
      "images": [
        {
          "src": "public/Images/products/pvc-pipe/general/client-397.png",
          "alt": "لوله و زانوی برق PVC"
        },
        {
          "src": "public/Images/products/pvc-pipe/general/client-398.jpg",
          "alt": "لوله و زانوی برق PVC"
        },
        {
          "src": "public/Images/products/pvc-pipe/general/client-399.jpg",
          "alt": "لوله و زانوی برق PVC"
        },
        {
          "src": "public/Images/products/pvc-pipe/general/client-400.jpg",
          "alt": "لوله و زانوی برق PVC"
        },
        {
          "src": "public/Images/products/pvc-pipe/general/client-401.jpg",
          "alt": "لوله و زانوی برق PVC"
        },
        {
          "src": "public/Images/products/pvc-pipe/general/client-402.jpg",
          "alt": "لوله و زانوی برق PVC"
        },
        {
          "src": "public/Images/products/pvc-pipe/general/client-403.jpg",
          "alt": "لوله و زانوی برق PVC"
        },
        {
          "src": "public/Images/products/pvc-pipe/general/client-404.jpg",
          "alt": "لوله و زانوی برق PVC"
        }
      ],
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
      "images": [
        {
          "src": "public/Images/background/garden-light.webp"
        }
      ],
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
      "images": [
        {
          "src": "public/Images/background/camera-network.webp"
        }
      ],
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
      "brands": [
        "برق سارو",
        "شیوا"
      ],
      "images": [
        {
          "src": "public/Images/background/sensor-timer.webp"
        }
      ],
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
      "images": [
        {
          "src": "public/Images/background/duct-tape.webp"
        }
      ],
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
          "src": "public/Images/products/switch-socket/deland/crystal-pearl-gold.jpg",
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
    },
    {
      "id": "wire-cable-semnan-collection",
      "slug": "wire-cable-semnan-collection",
      "categoryId": "wire-cable",
      "kind": "collection",
      "title": "انواع سیم و کابل سمنان",
      "tagline": "گالری محصولات و استعلام قیمت",
      "description": "تصاویر ارسالی محصولات سمنان در این صفحه گردآوری شده است. برای مشخصات مدل موردنظر، موجودی و استعلام قیمت با فروشگاه تماس بگیرید.",
      "brands": [
        "سمنان"
      ],
      "images": [
        {
          "src": "public/Images/products/wire-cable/semnan/client-164.jpg",
          "alt": "انواع سیم و کابل سمنان"
        },
        {
          "src": "public/Images/products/wire-cable/semnan/client-165.jpg",
          "alt": "انواع سیم و کابل سمنان"
        },
        {
          "src": "public/Images/products/wire-cable/semnan/client-166.jpg",
          "alt": "انواع سیم و کابل سمنان"
        },
        {
          "src": "public/Images/products/wire-cable/semnan/client-167.jpg",
          "alt": "انواع سیم و کابل سمنان"
        },
        {
          "src": "public/Images/products/wire-cable/semnan/client-168.jpg",
          "alt": "انواع سیم و کابل سمنان"
        },
        {
          "src": "public/Images/products/wire-cable/semnan/client-169.jpg",
          "alt": "انواع سیم و کابل سمنان"
        },
        {
          "src": "public/Images/products/wire-cable/semnan/client-170.jpg",
          "alt": "انواع سیم و کابل سمنان"
        },
        {
          "src": "public/Images/products/wire-cable/semnan/client-175.jpg",
          "alt": "انواع سیم و کابل سمنان"
        }
      ],
      "specs": [],
      "featured": false,
      "sourceMessageIds": [
        164,
        165,
        166,
        167,
        168,
        169,
        170,
        175,
        294
      ]
    },
    {
      "id": "wire-cable-afsharnejad-collection",
      "slug": "wire-cable-afsharnejad-collection",
      "categoryId": "wire-cable",
      "kind": "collection",
      "title": "انواع سیم و کابل افشارنژاد",
      "tagline": "معرفی برند و استعلام مدل‌های موجود",
      "description": "برای آشنایی با مدل‌های موجود افشارنژاد و دریافت اطلاعات فنی و قیمت، با فروشگاه تماس بگیرید. تصاویر و کاتالوگ این مجموعه به‌زودی تکمیل می‌شود.",
      "brands": [
        "افشارنژاد"
      ],
      "images": [],
      "specs": [],
      "featured": false,
      "sourceMessageIds": []
    },
    {
      "id": "wire-cable-bartar-collection",
      "slug": "wire-cable-bartar-collection",
      "categoryId": "wire-cable",
      "kind": "collection",
      "title": "انواع سیم و کابل برتر",
      "tagline": "گالری محصولات و استعلام قیمت",
      "description": "تصاویر ارسالی محصولات برتر در این صفحه گردآوری شده است. برای مشخصات مدل موردنظر، موجودی و استعلام قیمت با فروشگاه تماس بگیرید.",
      "brands": [
        "برتر"
      ],
      "images": [
        {
          "src": "public/Images/products/wire-cable/bartar/client-218.jpg",
          "alt": "انواع سیم و کابل برتر"
        },
        {
          "src": "public/Images/products/wire-cable/bartar/client-226.jpg",
          "alt": "انواع سیم و کابل برتر"
        }
      ],
      "specs": [],
      "featured": false,
      "sourceMessageIds": [
        218,
        226,
        222,
        295
      ]
    },
    {
      "id": "wire-cable-amol-collection",
      "slug": "wire-cable-amol-collection",
      "categoryId": "wire-cable",
      "kind": "collection",
      "title": "انواع سیم و کابل آمل",
      "tagline": "معرفی برند و استعلام مدل‌های موجود",
      "description": "برای آشنایی با مدل‌های موجود آمل و دریافت اطلاعات فنی و قیمت، با فروشگاه تماس بگیرید. تصاویر و کاتالوگ این مجموعه به‌زودی تکمیل می‌شود.",
      "brands": [
        "آمل"
      ],
      "images": [
        {
          "src": "public/Images/products/wire-cable/amol/client-237.png",
          "alt": "نشان آمل",
          "role": "brand-logo"
        }
      ],
      "specs": [],
      "featured": false,
      "sourceMessageIds": [
        237
      ]
    },
    {
      "id": "switch-socket-deland-collection",
      "slug": "switch-socket-deland-collection",
      "categoryId": "switch-socket",
      "kind": "collection",
      "title": "کلید و پریز دلند",
      "tagline": "تصاویر برند و کاتالوگ محصولات",
      "description": "کاتالوگ دلند را در همین صفحه مشاهده یا دانلود کنید. برای انتخاب مدل، تأیید موجودی و استعلام قیمت با فروشگاه تماس بگیرید.",
      "brands": [
        "دلند"
      ],
      "images": [
        {
          "src": "public/Images/products/switch-socket/deland/client-247.jpg",
          "alt": "کلید و پریز دلند"
        },
        {
          "src": "public/Images/products/switch-socket/deland/client-248.jpg",
          "alt": "کلید و پریز دلند"
        },
        {
          "src": "public/Images/products/switch-socket/deland/client-249.jpg",
          "alt": "کلید و پریز دلند"
        },
        {
          "src": "public/Images/products/switch-socket/deland/client-250.jpg",
          "alt": "کلید و پریز دلند"
        },
        {
          "src": "public/Images/products/switch-socket/deland/client-251.jpg",
          "alt": "کلید و پریز دلند"
        },
        {
          "src": "public/Images/products/switch-socket/deland/client-252.jpg",
          "alt": "کلید و پریز دلند"
        },
        {
          "src": "public/Images/products/switch-socket/deland/client-253.jpg",
          "alt": "کلید و پریز دلند"
        },
        {
          "src": "public/Images/products/switch-socket/deland/client-254.jpg",
          "alt": "کلید و پریز دلند"
        },
        {
          "src": "public/Images/products/switch-socket/deland/client-255.jpg",
          "alt": "کلید و پریز دلند"
        },
        {
          "src": "public/Images/products/switch-socket/deland/client-256.jpg",
          "alt": "کلید و پریز دلند"
        },
        {
          "src": "public/Images/products/switch-socket/deland/client-258.jpg",
          "alt": "کلید و پریز دلند"
        },
        {
          "src": "public/Images/products/switch-socket/deland/client-259.jpg",
          "alt": "کلید و پریز دلند"
        }
      ],
      "specs": [],
      "featured": false,
      "sourceMessageIds": [
        247,
        248,
        249,
        250,
        251,
        252,
        253,
        254,
        255,
        256,
        257,
        258,
        259,
        297
      ]
    },
    {
      "id": "switch-socket-iran-electric-collection",
      "slug": "switch-socket-iran-electric-collection",
      "categoryId": "switch-socket",
      "kind": "collection",
      "title": "کلید و پریز ایران الکتریک",
      "tagline": "تصاویر برند و کاتالوگ محصولات",
      "description": "کاتالوگ ایران الکتریک را در همین صفحه مشاهده یا دانلود کنید. برای انتخاب مدل، تأیید موجودی و استعلام قیمت با فروشگاه تماس بگیرید.",
      "brands": [
        "ایران الکتریک"
      ],
      "images": [
        {
          "src": "public/Images/products/switch-socket/iran-electric/client-280.jpg",
          "alt": "کلید و پریز ایران الکتریک"
        },
        {
          "src": "public/Images/products/switch-socket/iran-electric/client-281.jpg",
          "alt": "کلید و پریز ایران الکتریک"
        },
        {
          "src": "public/Images/products/switch-socket/iran-electric/client-282.jpg",
          "alt": "کلید و پریز ایران الکتریک"
        },
        {
          "src": "public/Images/products/switch-socket/iran-electric/client-283.jpg",
          "alt": "کلید و پریز ایران الکتریک"
        },
        {
          "src": "public/Images/products/switch-socket/iran-electric/client-284.jpg",
          "alt": "کلید و پریز ایران الکتریک"
        }
      ],
      "specs": [],
      "featured": false,
      "sourceMessageIds": [
        280,
        281,
        282,
        283,
        284,
        296
      ]
    },
    {
      "id": "switch-socket-part-collection",
      "slug": "switch-socket-part-collection",
      "categoryId": "switch-socket",
      "kind": "collection",
      "title": "کلید و پریز پارت",
      "tagline": "تصاویر برند و کاتالوگ محصولات",
      "description": "کاتالوگ پارت را در همین صفحه مشاهده یا دانلود کنید. برای انتخاب مدل، تأیید موجودی و استعلام قیمت با فروشگاه تماس بگیرید.",
      "brands": [
        "پارت"
      ],
      "images": [
        {
          "src": "public/Images/products/switch-socket/part/client-274.jpg",
          "alt": "کلید و پریز پارت"
        },
        {
          "src": "public/Images/products/switch-socket/part/client-275.jpg",
          "alt": "کلید و پریز پارت"
        },
        {
          "src": "public/Images/products/switch-socket/part/client-276.jpg",
          "alt": "کلید و پریز پارت"
        },
        {
          "src": "public/Images/products/switch-socket/part/client-277.jpg",
          "alt": "کلید و پریز پارت"
        }
      ],
      "specs": [],
      "featured": false,
      "sourceMessageIds": [
        274,
        275,
        276,
        277,
        278,
        298,
        299
      ]
    },
    {
      "id": "switch-socket-asia-electric-collection",
      "slug": "switch-socket-asia-electric-collection",
      "categoryId": "switch-socket",
      "kind": "collection",
      "title": "کلید و پریز آسیا الکتریک",
      "tagline": "گالری محصولات و استعلام قیمت",
      "description": "تصاویر ارسالی محصولات آسیا الکتریک در این صفحه گردآوری شده است. برای مشخصات مدل موردنظر، موجودی و استعلام قیمت با فروشگاه تماس بگیرید.",
      "brands": [
        "آسیا الکتریک"
      ],
      "images": [
        {
          "src": "public/Images/products/switch-socket/asia-electric/client-261.jpg",
          "alt": "کلید و پریز آسیا الکتریک"
        },
        {
          "src": "public/Images/products/switch-socket/asia-electric/client-262.jpg",
          "alt": "کلید و پریز آسیا الکتریک"
        },
        {
          "src": "public/Images/products/switch-socket/asia-electric/client-263.jpg",
          "alt": "کلید و پریز آسیا الکتریک"
        },
        {
          "src": "public/Images/products/switch-socket/asia-electric/client-264.jpg",
          "alt": "کلید و پریز آسیا الکتریک"
        },
        {
          "src": "public/Images/products/switch-socket/asia-electric/client-265.jpg",
          "alt": "کلید و پریز آسیا الکتریک"
        },
        {
          "src": "public/Images/products/switch-socket/asia-electric/client-266.jpg",
          "alt": "کلید و پریز آسیا الکتریک"
        }
      ],
      "specs": [],
      "featured": false,
      "sourceMessageIds": [
        261,
        262,
        263,
        264,
        265,
        266
      ]
    },
    {
      "id": "lighting-pars-shahab-collection",
      "slug": "lighting-pars-shahab-collection",
      "categoryId": "lighting",
      "kind": "collection",
      "title": "روشنایی، چراغ و پنل پارس شهاب",
      "tagline": "تصاویر برند و کاتالوگ محصولات",
      "description": "کاتالوگ پارس شهاب را در همین صفحه مشاهده یا دانلود کنید. برای انتخاب مدل، تأیید موجودی و استعلام قیمت با فروشگاه تماس بگیرید.",
      "brands": [
        "پارس شهاب"
      ],
      "images": [
        {
          "src": "public/Images/products/lighting/pars-shahab/client-288.jpg",
          "alt": "نشان پارس شهاب",
          "role": "brand-logo"
        }
      ],
      "specs": [],
      "featured": false,
      "sourceMessageIds": [
        288
      ]
    },
    {
      "id": "lighting-zfr-collection",
      "slug": "lighting-zfr-collection",
      "categoryId": "lighting",
      "kind": "collection",
      "title": "روشنایی، چراغ و پنل ZFR",
      "tagline": "تصاویر برند و کاتالوگ محصولات",
      "description": "کاتالوگ ZFR را در همین صفحه مشاهده یا دانلود کنید. برای انتخاب مدل، تأیید موجودی و استعلام قیمت با فروشگاه تماس بگیرید.",
      "brands": [
        "ZFR"
      ],
      "images": [
        {
          "src": "public/Images/products/lighting/zfr/client-300.jpg",
          "alt": "روشنایی، چراغ و پنل ZFR"
        },
        {
          "src": "public/Images/products/lighting/zfr/client-301.jpg",
          "alt": "روشنایی، چراغ و پنل ZFR"
        },
        {
          "src": "public/Images/products/lighting/zfr/client-302.jpg",
          "alt": "روشنایی، چراغ و پنل ZFR"
        },
        {
          "src": "public/Images/products/lighting/zfr/client-303.jpg",
          "alt": "روشنایی، چراغ و پنل ZFR"
        },
        {
          "src": "public/Images/products/lighting/zfr/client-304.jpg",
          "alt": "روشنایی، چراغ و پنل ZFR"
        },
        {
          "src": "public/Images/products/lighting/zfr/client-305.jpg",
          "alt": "روشنایی، چراغ و پنل ZFR"
        },
        {
          "src": "public/Images/products/lighting/zfr/client-306.jpg",
          "alt": "روشنایی، چراغ و پنل ZFR"
        }
      ],
      "specs": [],
      "featured": false,
      "sourceMessageIds": [
        300,
        301,
        302,
        303,
        304,
        305,
        306,
        290,
        291
      ]
    },
    {
      "id": "lighting-pars-shoa-toos-collection",
      "slug": "lighting-pars-shoa-toos-collection",
      "categoryId": "lighting",
      "kind": "collection",
      "title": "روشنایی، چراغ و پنل پارس شعاع توس",
      "tagline": "معرفی برند و استعلام مدل‌های موجود",
      "description": "برای آشنایی با مدل‌های موجود پارس شعاع توس و دریافت اطلاعات فنی و قیمت، با فروشگاه تماس بگیرید. تصاویر و کاتالوگ این مجموعه به‌زودی تکمیل می‌شود.",
      "brands": [
        "پارس شعاع توس"
      ],
      "images": [
        {
          "src": "public/Images/products/lighting/pars-shoa-toos/client-310.jpg",
          "alt": "نشان پارس شعاع توس",
          "role": "brand-logo"
        }
      ],
      "specs": [],
      "featured": false,
      "sourceMessageIds": [
        308,
        310
      ]
    },
    {
      "id": "lighting-sahand-ava-collection",
      "slug": "lighting-sahand-ava-collection",
      "categoryId": "lighting",
      "kind": "collection",
      "title": "روشنایی، چراغ و پنل سهند آوا",
      "tagline": "معرفی برند و استعلام مدل‌های موجود",
      "description": "برای آشنایی با مدل‌های موجود سهند آوا و دریافت اطلاعات فنی و قیمت، با فروشگاه تماس بگیرید. تصاویر و کاتالوگ این مجموعه به‌زودی تکمیل می‌شود.",
      "brands": [
        "سهند آوا"
      ],
      "images": [],
      "specs": [],
      "featured": false,
      "sourceMessageIds": []
    },
    {
      "id": "lighting-pars-star-collection",
      "slug": "lighting-pars-star-collection",
      "categoryId": "lighting",
      "kind": "collection",
      "title": "روشنایی، چراغ و پنل پارس استار",
      "tagline": "گالری محصولات و استعلام قیمت",
      "description": "تصاویر ارسالی محصولات پارس استار در این صفحه گردآوری شده است. برای مشخصات مدل موردنظر، موجودی و استعلام قیمت با فروشگاه تماس بگیرید.",
      "brands": [
        "پارس استار"
      ],
      "images": [
        {
          "src": "public/Images/products/lighting/pars-star/client-312.jpg",
          "alt": "روشنایی، چراغ و پنل پارس استار"
        },
        {
          "src": "public/Images/products/lighting/pars-star/client-313.jpg",
          "alt": "روشنایی، چراغ و پنل پارس استار"
        }
      ],
      "specs": [],
      "featured": false,
      "sourceMessageIds": [
        312,
        313,
        311
      ]
    },
    {
      "id": "lighting-pars-arvand-collection",
      "slug": "lighting-pars-arvand-collection",
      "categoryId": "lighting",
      "kind": "collection",
      "title": "روشنایی، چراغ و پنل پارس اروند",
      "tagline": "تصاویر برند و کاتالوگ محصولات",
      "description": "کاتالوگ پارس اروند را در همین صفحه مشاهده یا دانلود کنید. برای انتخاب مدل، تأیید موجودی و استعلام قیمت با فروشگاه تماس بگیرید.",
      "brands": [
        "پارس اروند"
      ],
      "images": [
        {
          "src": "public/Images/products/lighting/pars-arvand/client-316.jpg",
          "alt": "نشان پارس اروند",
          "role": "brand-logo"
        }
      ],
      "specs": [],
      "featured": false,
      "sourceMessageIds": [
        316
      ]
    },
    {
      "id": "intercom-taba-collection",
      "slug": "intercom-taba-collection",
      "categoryId": "intercom",
      "kind": "collection",
      "title": "آیفون تصویری و صوتی تابا",
      "tagline": "تصاویر برند و کاتالوگ محصولات",
      "description": "کاتالوگ تابا را در همین صفحه مشاهده یا دانلود کنید. برای انتخاب مدل، تأیید موجودی و استعلام قیمت با فروشگاه تماس بگیرید.",
      "brands": [
        "تابا"
      ],
      "images": [
        {
          "src": "public/Images/products/intercom/taba/client-319.jpg",
          "alt": "نشان تابا",
          "role": "brand-logo"
        }
      ],
      "specs": [],
      "featured": false,
      "sourceMessageIds": [
        319,
        320
      ]
    },
    {
      "id": "intercom-simaran-collection",
      "slug": "intercom-simaran-collection",
      "categoryId": "intercom",
      "kind": "collection",
      "title": "آیفون تصویری و صوتی سیماران",
      "tagline": "تصاویر برند و کاتالوگ محصولات",
      "description": "کاتالوگ سیماران را در همین صفحه مشاهده یا دانلود کنید. برای انتخاب مدل، تأیید موجودی و استعلام قیمت با فروشگاه تماس بگیرید.",
      "brands": [
        "سیماران"
      ],
      "images": [
        {
          "src": "public/Images/products/intercom/simaran/client-323.jpg",
          "alt": "نشان سیماران",
          "role": "brand-logo"
        }
      ],
      "specs": [],
      "featured": false,
      "sourceMessageIds": [
        323
      ]
    },
    {
      "id": "intercom-electropeyk-collection",
      "slug": "intercom-electropeyk-collection",
      "categoryId": "intercom",
      "kind": "collection",
      "title": "آیفون تصویری و صوتی الکتروپیک",
      "tagline": "تصاویر برند و کاتالوگ محصولات",
      "description": "کاتالوگ الکتروپیک را در همین صفحه مشاهده یا دانلود کنید. برای انتخاب مدل، تأیید موجودی و استعلام قیمت با فروشگاه تماس بگیرید.",
      "brands": [
        "الکتروپیک"
      ],
      "images": [
        {
          "src": "public/Images/products/intercom/electropeyk/client-329.jpg",
          "alt": "نشان الکتروپیک",
          "role": "brand-logo"
        }
      ],
      "specs": [],
      "featured": false,
      "sourceMessageIds": [
        329
      ]
    },
    {
      "id": "surge-protector-part-collection",
      "slug": "surge-protector-part-collection",
      "categoryId": "surge-protector",
      "kind": "collection",
      "title": "محافظ و چندراهی پارت",
      "tagline": "تصاویر برند و کاتالوگ محصولات",
      "description": "کاتالوگ پارت را در همین صفحه مشاهده یا دانلود کنید. برای انتخاب مدل، تأیید موجودی و استعلام قیمت با فروشگاه تماس بگیرید.",
      "brands": [
        "پارت"
      ],
      "images": [
        {
          "src": "public/Images/products/switch-socket/part/client-299.jpg",
          "alt": "نشان پارت",
          "role": "brand-logo"
        }
      ],
      "specs": [],
      "featured": false,
      "sourceMessageIds": []
    },
    {
      "id": "surge-protector-kian-collection",
      "slug": "surge-protector-kian-collection",
      "categoryId": "surge-protector",
      "kind": "collection",
      "title": "محافظ و چندراهی کیان",
      "tagline": "معرفی برند و استعلام مدل‌های موجود",
      "description": "برای آشنایی با مدل‌های موجود کیان و دریافت اطلاعات فنی و قیمت، با فروشگاه تماس بگیرید. تصاویر و کاتالوگ این مجموعه به‌زودی تکمیل می‌شود.",
      "brands": [
        "کیان"
      ],
      "images": [],
      "specs": [],
      "featured": false,
      "sourceMessageIds": []
    },
    {
      "id": "surge-protector-shil-iran-collection",
      "slug": "surge-protector-shil-iran-collection",
      "categoryId": "surge-protector",
      "kind": "collection",
      "title": "محافظ و چندراهی شیل ایران",
      "tagline": "معرفی برند و استعلام مدل‌های موجود",
      "description": "برای آشنایی با مدل‌های موجود شیل ایران و دریافت اطلاعات فنی و قیمت، با فروشگاه تماس بگیرید. تصاویر و کاتالوگ این مجموعه به‌زودی تکمیل می‌شود.",
      "brands": [
        "شیل ایران"
      ],
      "images": [
        {
          "src": "public/Images/products/fuse/shil-iran/client-336.png",
          "alt": "نشان شیل ایران",
          "role": "brand-logo"
        }
      ],
      "specs": [],
      "featured": false,
      "sourceMessageIds": []
    },
    {
      "id": "surge-protector-tavator-collection",
      "slug": "surge-protector-tavator-collection",
      "categoryId": "surge-protector",
      "kind": "collection",
      "title": "محافظ و چندراهی تواتر",
      "tagline": "گالری محصولات و استعلام قیمت",
      "description": "تصاویر ارسالی محصولات تواتر در این صفحه گردآوری شده است. برای مشخصات مدل موردنظر، موجودی و استعلام قیمت با فروشگاه تماس بگیرید.",
      "brands": [
        "تواتر"
      ],
      "images": [
        {
          "src": "public/Images/products/surge-protector/tavator/client-353.jpg",
          "alt": "محافظ و چندراهی تواتر"
        },
        {
          "src": "public/Images/products/surge-protector/tavator/client-354.jpg",
          "alt": "محافظ و چندراهی تواتر"
        }
      ],
      "specs": [],
      "featured": false,
      "sourceMessageIds": [
        353,
        354
      ]
    },
    {
      "id": "surge-protector-pars-arvand-collection",
      "slug": "surge-protector-pars-arvand-collection",
      "categoryId": "surge-protector",
      "kind": "collection",
      "title": "محافظ و چندراهی پارس اروند",
      "tagline": "تصاویر برند و کاتالوگ محصولات",
      "description": "کاتالوگ پارس اروند را در همین صفحه مشاهده یا دانلود کنید. برای انتخاب مدل، تأیید موجودی و استعلام قیمت با فروشگاه تماس بگیرید.",
      "brands": [
        "پارس اروند"
      ],
      "images": [
        {
          "src": "public/Images/products/lighting/pars-arvand/client-316.jpg",
          "alt": "نشان پارس اروند",
          "role": "brand-logo"
        }
      ],
      "specs": [],
      "featured": false,
      "sourceMessageIds": []
    },
    {
      "id": "surge-protector-behdad-collection",
      "slug": "surge-protector-behdad-collection",
      "categoryId": "surge-protector",
      "kind": "collection",
      "title": "محافظ و چندراهی بهداد",
      "tagline": "تصاویر برند و کاتالوگ محصولات",
      "description": "کاتالوگ بهداد را در همین صفحه مشاهده یا دانلود کنید. برای انتخاب مدل، تأیید موجودی و استعلام قیمت با فروشگاه تماس بگیرید.",
      "brands": [
        "بهداد"
      ],
      "images": [
        {
          "src": "public/Images/products/surge-protector/behdad/client-348.jpg",
          "alt": "نشان بهداد",
          "role": "brand-logo"
        }
      ],
      "specs": [],
      "featured": false,
      "sourceMessageIds": [
        348
      ]
    },
    {
      "id": "fuse-dena-collection",
      "slug": "fuse-dena-collection",
      "categoryId": "fuse",
      "kind": "collection",
      "title": "فیوز و جعبه فیوز دنا",
      "tagline": "تصاویر برند و کاتالوگ محصولات",
      "description": "کاتالوگ دنا را در همین صفحه مشاهده یا دانلود کنید. برای انتخاب مدل، تأیید موجودی و استعلام قیمت با فروشگاه تماس بگیرید.",
      "brands": [
        "دنا"
      ],
      "images": [
        {
          "src": "public/Images/products/fuse/dena/client-357.jpg",
          "alt": "نشان دنا",
          "role": "brand-logo"
        }
      ],
      "specs": [],
      "featured": false,
      "sourceMessageIds": [
        357
      ]
    },
    {
      "id": "fuse-pars-arvand-collection",
      "slug": "fuse-pars-arvand-collection",
      "categoryId": "fuse",
      "kind": "collection",
      "title": "فیوز و جعبه فیوز پارس اروند",
      "tagline": "تصاویر برند و کاتالوگ محصولات",
      "description": "کاتالوگ پارس اروند را در همین صفحه مشاهده یا دانلود کنید. برای انتخاب مدل، تأیید موجودی و استعلام قیمت با فروشگاه تماس بگیرید.",
      "brands": [
        "پارس اروند"
      ],
      "images": [
        {
          "src": "public/Images/products/lighting/pars-arvand/client-316.jpg",
          "alt": "نشان پارس اروند",
          "role": "brand-logo"
        }
      ],
      "specs": [],
      "featured": false,
      "sourceMessageIds": []
    },
    {
      "id": "fuse-shil-iran-collection",
      "slug": "fuse-shil-iran-collection",
      "categoryId": "fuse",
      "kind": "collection",
      "title": "فیوز و جعبه فیوز شیل ایران",
      "tagline": "گالری محصولات و استعلام قیمت",
      "description": "تصاویر ارسالی محصولات شیل ایران در این صفحه گردآوری شده است. برای مشخصات مدل موردنظر، موجودی و استعلام قیمت با فروشگاه تماس بگیرید.",
      "brands": [
        "شیل ایران"
      ],
      "images": [
        {
          "src": "public/Images/products/fuse/shil-iran/client-334.jpg",
          "alt": "فیوز و جعبه فیوز شیل ایران"
        },
        {
          "src": "public/Images/products/fuse/shil-iran/client-335.jpg",
          "alt": "فیوز و جعبه فیوز شیل ایران"
        },
        {
          "src": "public/Images/products/fuse/shil-iran/client-337.jpg",
          "alt": "فیوز و جعبه فیوز شیل ایران"
        },
        {
          "src": "public/Images/products/fuse/shil-iran/client-338.jpg",
          "alt": "فیوز و جعبه فیوز شیل ایران"
        },
        {
          "src": "public/Images/products/fuse/shil-iran/client-339.jpg",
          "alt": "فیوز و جعبه فیوز شیل ایران"
        },
        {
          "src": "public/Images/products/fuse/shil-iran/client-340.jpg",
          "alt": "فیوز و جعبه فیوز شیل ایران"
        },
        {
          "src": "public/Images/products/fuse/shil-iran/client-341.jpg",
          "alt": "فیوز و جعبه فیوز شیل ایران"
        },
        {
          "src": "public/Images/products/fuse/shil-iran/client-342.jpg",
          "alt": "فیوز و جعبه فیوز شیل ایران"
        },
        {
          "src": "public/Images/products/fuse/shil-iran/client-343.jpg",
          "alt": "فیوز و جعبه فیوز شیل ایران"
        },
        {
          "src": "public/Images/products/fuse/shil-iran/client-344.jpg",
          "alt": "فیوز و جعبه فیوز شیل ایران"
        }
      ],
      "specs": [],
      "featured": false,
      "sourceMessageIds": [
        334,
        335,
        337,
        338,
        339,
        340,
        341,
        342,
        343,
        344,
        336,
        345
      ]
    },
    {
      "id": "fuse-darya-collection",
      "slug": "fuse-darya-collection",
      "categoryId": "fuse",
      "kind": "collection",
      "title": "فیوز و جعبه فیوز دریا",
      "tagline": "گالری محصولات و استعلام قیمت",
      "description": "تصاویر ارسالی محصولات دریا در این صفحه گردآوری شده است. برای مشخصات مدل موردنظر، موجودی و استعلام قیمت با فروشگاه تماس بگیرید.",
      "brands": [
        "دریا"
      ],
      "images": [
        {
          "src": "public/Images/products/fuse/darya/client-363.png",
          "alt": "فیوز و جعبه فیوز دریا"
        },
        {
          "src": "public/Images/products/fuse/darya/client-364.png",
          "alt": "فیوز و جعبه فیوز دریا"
        },
        {
          "src": "public/Images/products/fuse/darya/client-365.png",
          "alt": "فیوز و جعبه فیوز دریا"
        },
        {
          "src": "public/Images/products/fuse/darya/client-366.png",
          "alt": "فیوز و جعبه فیوز دریا"
        },
        {
          "src": "public/Images/products/fuse/darya/client-367.png",
          "alt": "فیوز و جعبه فیوز دریا"
        },
        {
          "src": "public/Images/products/fuse/darya/client-368.png",
          "alt": "فیوز و جعبه فیوز دریا"
        },
        {
          "src": "public/Images/products/fuse/darya/client-369.png",
          "alt": "فیوز و جعبه فیوز دریا"
        },
        {
          "src": "public/Images/products/fuse/darya/client-370.jpg",
          "alt": "فیوز و جعبه فیوز دریا"
        },
        {
          "src": "public/Images/products/fuse/darya/client-371.jpg",
          "alt": "فیوز و جعبه فیوز دریا"
        },
        {
          "src": "public/Images/products/fuse/darya/client-372.png",
          "alt": "فیوز و جعبه فیوز دریا"
        },
        {
          "src": "public/Images/products/fuse/darya/client-373.png",
          "alt": "فیوز و جعبه فیوز دریا"
        },
        {
          "src": "public/Images/products/fuse/darya/client-374.jpg",
          "alt": "فیوز و جعبه فیوز دریا"
        },
        {
          "src": "public/Images/products/fuse/darya/client-375.png",
          "alt": "فیوز و جعبه فیوز دریا"
        },
        {
          "src": "public/Images/products/fuse/darya/client-376.png",
          "alt": "فیوز و جعبه فیوز دریا"
        },
        {
          "src": "public/Images/products/fuse/darya/client-377.png",
          "alt": "فیوز و جعبه فیوز دریا"
        },
        {
          "src": "public/Images/products/fuse/darya/client-378.jpg",
          "alt": "فیوز و جعبه فیوز دریا"
        },
        {
          "src": "public/Images/products/fuse/darya/client-379.jpg",
          "alt": "فیوز و جعبه فیوز دریا"
        },
        {
          "src": "public/Images/products/fuse/darya/client-380.jpg",
          "alt": "فیوز و جعبه فیوز دریا"
        },
        {
          "src": "public/Images/products/fuse/darya/client-381.jpg",
          "alt": "فیوز و جعبه فیوز دریا"
        },
        {
          "src": "public/Images/products/fuse/darya/client-382.jpg",
          "alt": "فیوز و جعبه فیوز دریا"
        },
        {
          "src": "public/Images/products/fuse/darya/client-383.jpg",
          "alt": "فیوز و جعبه فیوز دریا"
        },
        {
          "src": "public/Images/products/fuse/darya/client-384.jpg",
          "alt": "فیوز و جعبه فیوز دریا"
        },
        {
          "src": "public/Images/products/fuse/darya/client-385.jpg",
          "alt": "فیوز و جعبه فیوز دریا"
        }
      ],
      "specs": [],
      "featured": false,
      "sourceMessageIds": [
        363,
        364,
        365,
        366,
        367,
        368,
        369,
        370,
        371,
        372,
        373,
        374,
        375,
        376,
        377,
        378,
        379,
        380,
        381,
        382,
        383,
        384,
        385
      ]
    },
    {
      "id": "fuse-pars-star-collection",
      "slug": "fuse-pars-star-collection",
      "categoryId": "fuse",
      "kind": "collection",
      "title": "فیوز و جعبه فیوز پارس استار",
      "tagline": "گالری محصولات و استعلام قیمت",
      "description": "تصویر ارسالی جعبه فیوز پارس استار. برای انتخاب مدل، مشخصات، موجودی و استعلام قیمت با فروشگاه تماس بگیرید.",
      "brands": [
        "پارس استار"
      ],
      "images": [
        {
          "src": "public/Images/products/fuse/pars-star/client-351.jpg",
          "alt": "جعبه فیوز پارس استار"
        }
      ],
      "specs": [],
      "featured": false,
      "sourceMessageIds": [
        351
      ]
    },
    {
      "id": "fuse-bargh-saro-collection",
      "slug": "fuse-bargh-saro-collection",
      "categoryId": "fuse",
      "kind": "collection",
      "title": "فیوز و جعبه فیوز برق سارو",
      "tagline": "تصاویر برند و کاتالوگ محصولات",
      "description": "کاتالوگ برق سارو را در همین صفحه مشاهده یا دانلود کنید. برای انتخاب مدل، تأیید موجودی و استعلام قیمت با فروشگاه تماس بگیرید.",
      "brands": [
        "برق سارو"
      ],
      "images": [],
      "specs": [],
      "featured": false,
      "sourceMessageIds": []
    },
    {
      "id": "fan-damandeh-collection",
      "slug": "fan-damandeh-collection",
      "categoryId": "fan",
      "kind": "collection",
      "title": "هواکش و پنکه دمنده",
      "tagline": "تصاویر برند و کاتالوگ محصولات",
      "description": "کاتالوگ دمنده را در همین صفحه مشاهده یا دانلود کنید. برای انتخاب مدل، تأیید موجودی و استعلام قیمت با فروشگاه تماس بگیرید.",
      "brands": [
        "دمنده"
      ],
      "images": [
        {
          "src": "public/Images/products/fan/damandeh/client-386.jpg",
          "alt": "نشان دمنده",
          "role": "brand-logo"
        }
      ],
      "specs": [],
      "featured": false,
      "sourceMessageIds": [
        386
      ]
    },
    {
      "id": "fan-pars-khazar-collection",
      "slug": "fan-pars-khazar-collection",
      "categoryId": "fan",
      "kind": "collection",
      "title": "هواکش و پنکه پارس خزر",
      "tagline": "معرفی برند و استعلام مدل‌های موجود",
      "description": "برای آشنایی با مدل‌های موجود پارس خزر و دریافت اطلاعات فنی و قیمت، با فروشگاه تماس بگیرید. تصاویر و کاتالوگ این مجموعه به‌زودی تکمیل می‌شود.",
      "brands": [
        "پارس خزر"
      ],
      "images": [
        {
          "src": "public/Images/products/fan/pars-khazar/client-392.jpg",
          "alt": "نشان پارس خزر",
          "role": "brand-logo"
        }
      ],
      "specs": [],
      "featured": false,
      "sourceMessageIds": [
        392
      ]
    },
    {
      "id": "fan-khazar-fan-collection",
      "slug": "fan-khazar-fan-collection",
      "categoryId": "fan",
      "kind": "collection",
      "title": "هواکش و پنکه خزر فن",
      "tagline": "گالری محصولات و استعلام قیمت",
      "description": "تصاویر ارسالی محصولات خزر فن در این صفحه گردآوری شده است. برای مشخصات مدل موردنظر، موجودی و استعلام قیمت با فروشگاه تماس بگیرید.",
      "brands": [
        "خزر فن"
      ],
      "images": [
        {
          "src": "public/Images/products/fan/khazar-fan/client-396.png",
          "alt": "هواکش و پنکه خزر فن"
        }
      ],
      "specs": [],
      "featured": false,
      "sourceMessageIds": [
        396,
        394
      ]
    },
    {
      "id": "fan-koolak-collection",
      "slug": "fan-koolak-collection",
      "categoryId": "fan",
      "kind": "collection",
      "title": "هواکش و پنکه کولاک",
      "tagline": "معرفی برند و استعلام مدل‌های موجود",
      "description": "برای آشنایی با مدل‌های موجود کولاک و دریافت اطلاعات فنی و قیمت، با فروشگاه تماس بگیرید. تصاویر و کاتالوگ این مجموعه به‌زودی تکمیل می‌شود.",
      "brands": [
        "کولاک"
      ],
      "images": [],
      "specs": [],
      "featured": false,
      "sourceMessageIds": []
    },
    {
      "id": "garden-light-doostan-collection",
      "slug": "garden-light-doostan-collection",
      "categoryId": "garden-light",
      "kind": "collection",
      "title": "حباب و چراغ باغچه‌ای دوستان",
      "tagline": "تصاویر برند و کاتالوگ محصولات",
      "description": "کاتالوگ دوستان را در همین صفحه مشاهده یا دانلود کنید. برای انتخاب مدل، تأیید موجودی و استعلام قیمت با فروشگاه تماس بگیرید.",
      "brands": [
        "دوستان"
      ],
      "images": [],
      "specs": [],
      "featured": false,
      "sourceMessageIds": []
    },
    {
      "id": "garden-light-soupita-collection",
      "slug": "garden-light-soupita-collection",
      "categoryId": "garden-light",
      "kind": "collection",
      "title": "حباب و چراغ باغچه‌ای سوپیتا",
      "tagline": "تصاویر برند و کاتالوگ محصولات",
      "description": "کاتالوگ سوپیتا را در همین صفحه مشاهده یا دانلود کنید. برای انتخاب مدل، تأیید موجودی و استعلام قیمت با فروشگاه تماس بگیرید.",
      "brands": [
        "سوپیتا"
      ],
      "images": [],
      "specs": [],
      "featured": false,
      "sourceMessageIds": []
    },
    {
      "id": "sensor-timer-bargh-saro-collection",
      "slug": "sensor-timer-bargh-saro-collection",
      "categoryId": "sensor-timer",
      "kind": "collection",
      "title": "سنسور سقفی و تایمر راه‌پله برق سارو",
      "tagline": "تصاویر برند و کاتالوگ محصولات",
      "description": "کاتالوگ برق سارو را در همین صفحه مشاهده یا دانلود کنید. برای انتخاب مدل، تأیید موجودی و استعلام قیمت با فروشگاه تماس بگیرید.",
      "brands": [
        "برق سارو"
      ],
      "images": [],
      "specs": [],
      "featured": false,
      "sourceMessageIds": []
    },
    {
      "id": "sensor-timer-shiva-collection",
      "slug": "sensor-timer-shiva-collection",
      "categoryId": "sensor-timer",
      "kind": "collection",
      "title": "سنسور سقفی و تایمر راه‌پله شیوا",
      "tagline": "معرفی برند و استعلام مدل‌های موجود",
      "description": "برای آشنایی با مدل‌های موجود شیوا و دریافت اطلاعات فنی و قیمت، با فروشگاه تماس بگیرید. تصاویر و کاتالوگ این مجموعه به‌زودی تکمیل می‌شود.",
      "brands": [
        "شیوا"
      ],
      "images": [],
      "specs": [],
      "featured": false,
      "sourceMessageIds": []
    },
    {
      "id": "duct-tape-danub-collection",
      "slug": "duct-tape-danub-collection",
      "categoryId": "duct-tape",
      "kind": "collection",
      "title": "داکت و چسب دانوب",
      "tagline": "گالری محصولات و استعلام قیمت",
      "description": "تصاویر ارسالی محصولات دانوب در این صفحه گردآوری شده است. برای مشخصات مدل موردنظر، موجودی و استعلام قیمت با فروشگاه تماس بگیرید.",
      "brands": [
        "دانوب"
      ],
      "images": [
        {
          "src": "public/Images/products/duct-tape/danub/client-408.jpg",
          "alt": "داکت و چسب دانوب"
        },
        {
          "src": "public/Images/products/duct-tape/danub/client-409.jpg",
          "alt": "داکت و چسب دانوب"
        },
        {
          "src": "public/Images/products/duct-tape/danub/client-411.jpg",
          "alt": "داکت و چسب دانوب"
        },
        {
          "src": "public/Images/products/duct-tape/danub/client-412.jpg",
          "alt": "داکت و چسب دانوب"
        }
      ],
      "specs": [],
      "featured": false,
      "sourceMessageIds": [
        408,
        409,
        411,
        412
      ]
    },
    {
      "id": "duct-tape-soupita-collection",
      "slug": "duct-tape-soupita-collection",
      "categoryId": "duct-tape",
      "kind": "collection",
      "title": "داکت و چسب سوپیتا",
      "tagline": "تصاویر برند و کاتالوگ محصولات",
      "description": "کاتالوگ سوپیتا را در همین صفحه مشاهده یا دانلود کنید. برای انتخاب مدل، تأیید موجودی و استعلام قیمت با فروشگاه تماس بگیرید.",
      "brands": [
        "سوپیتا"
      ],
      "images": [],
      "specs": [],
      "featured": false,
      "sourceMessageIds": []
    },
    {
      "id": "asia-crystal-261",
      "slug": "asia-crystal-261",
      "categoryId": "switch-socket",
      "kind": "product",
      "title": "کلید و پریز آسیا الکتریک کریستال؛ قاب نقره‌ای، مکانیزم نقره‌ای",
      "tagline": "مدل: کریستال؛ رنگ قاب: نقره‌ای",
      "description": "کلید و پریز آسیا الکتریک مدل کریستال با قاب نقره‌ای و مکانیزم نقره‌ای. طبق توضیحات ارسالی، بدنه و مکانیزم از پلی‌کربنات ساخته شده است. برای انتخاب مکانیزم و استعلام قیمت تماس بگیرید.",
      "brands": [
        "آسیا الکتریک"
      ],
      "images": [
        {
          "src": "public/Images/products/switch-socket/asia-electric/client-261.jpg",
          "alt": "کلید و پریز آسیا الکتریک کریستال؛ قاب نقره‌ای، مکانیزم نقره‌ای"
        }
      ],
      "specs": [
        {
          "label": "مدل",
          "value": "کریستال"
        },
        {
          "label": "رنگ قاب",
          "value": "نقره‌ای"
        },
        {
          "label": "رنگ مکانیزم",
          "value": "نقره‌ای"
        },
        {
          "label": "جنس بدنه و مکانیزم",
          "value": "پلی‌کربنات"
        }
      ],
      "featured": false,
      "sourceMessageIds": [
        261
      ]
    },
    {
      "id": "asia-crystal-262",
      "slug": "asia-crystal-262",
      "categoryId": "switch-socket",
      "kind": "product",
      "title": "کلید و پریز آسیا الکتریک کریستال؛ قاب مشکی، مکانیزم نقره‌ای",
      "tagline": "مدل: کریستال؛ رنگ قاب: مشکی",
      "description": "کلید و پریز آسیا الکتریک مدل کریستال با قاب مشکی و مکانیزم نقره‌ای. طبق توضیحات ارسالی، بدنه و مکانیزم از پلی‌کربنات ساخته شده است. برای انتخاب مکانیزم و استعلام قیمت تماس بگیرید.",
      "brands": [
        "آسیا الکتریک"
      ],
      "images": [
        {
          "src": "public/Images/products/switch-socket/asia-electric/client-262.jpg",
          "alt": "کلید و پریز آسیا الکتریک کریستال؛ قاب مشکی، مکانیزم نقره‌ای"
        }
      ],
      "specs": [
        {
          "label": "مدل",
          "value": "کریستال"
        },
        {
          "label": "رنگ قاب",
          "value": "مشکی"
        },
        {
          "label": "رنگ مکانیزم",
          "value": "نقره‌ای"
        },
        {
          "label": "جنس بدنه و مکانیزم",
          "value": "پلی‌کربنات"
        }
      ],
      "featured": false,
      "sourceMessageIds": [
        262
      ]
    },
    {
      "id": "asia-crystal-263",
      "slug": "asia-crystal-263",
      "categoryId": "switch-socket",
      "kind": "product",
      "title": "کلید و پریز آسیا الکتریک کریستال؛ قاب بژ، مکانیزم طلایی",
      "tagline": "مدل: کریستال؛ رنگ قاب: بژ",
      "description": "کلید و پریز آسیا الکتریک مدل کریستال با قاب بژ و مکانیزم طلایی. طبق توضیحات ارسالی، بدنه و مکانیزم از پلی‌کربنات ساخته شده است. برای انتخاب مکانیزم و استعلام قیمت تماس بگیرید.",
      "brands": [
        "آسیا الکتریک"
      ],
      "images": [
        {
          "src": "public/Images/products/switch-socket/asia-electric/client-263.jpg",
          "alt": "کلید و پریز آسیا الکتریک کریستال؛ قاب بژ، مکانیزم طلایی"
        }
      ],
      "specs": [
        {
          "label": "مدل",
          "value": "کریستال"
        },
        {
          "label": "رنگ قاب",
          "value": "بژ"
        },
        {
          "label": "رنگ مکانیزم",
          "value": "طلایی"
        },
        {
          "label": "جنس بدنه و مکانیزم",
          "value": "پلی‌کربنات"
        }
      ],
      "featured": false,
      "sourceMessageIds": [
        263
      ]
    },
    {
      "id": "asia-crystal-264",
      "slug": "asia-crystal-264",
      "categoryId": "switch-socket",
      "kind": "product",
      "title": "کلید و پریز آسیا الکتریک کریستال؛ قاب صدفی، مکانیزم طلایی",
      "tagline": "مدل: کریستال؛ رنگ قاب: صدفی",
      "description": "کلید و پریز آسیا الکتریک مدل کریستال با قاب صدفی و مکانیزم طلایی. طبق توضیحات ارسالی، بدنه و مکانیزم از پلی‌کربنات ساخته شده است. برای انتخاب مکانیزم و استعلام قیمت تماس بگیرید.",
      "brands": [
        "آسیا الکتریک"
      ],
      "images": [
        {
          "src": "public/Images/products/switch-socket/asia-electric/client-264.jpg",
          "alt": "کلید و پریز آسیا الکتریک کریستال؛ قاب صدفی، مکانیزم طلایی"
        }
      ],
      "specs": [
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
        }
      ],
      "featured": false,
      "sourceMessageIds": [
        264
      ]
    },
    {
      "id": "asia-crystal-265",
      "slug": "asia-crystal-265",
      "categoryId": "switch-socket",
      "kind": "product",
      "title": "کلید و پریز آسیا الکتریک کریستال؛ قاب مشکی، مکانیزم طلایی",
      "tagline": "مدل: کریستال؛ رنگ قاب: مشکی",
      "description": "کلید و پریز آسیا الکتریک مدل کریستال با قاب مشکی و مکانیزم طلایی. طبق توضیحات ارسالی، بدنه و مکانیزم از پلی‌کربنات ساخته شده است. برای انتخاب مکانیزم و استعلام قیمت تماس بگیرید.",
      "brands": [
        "آسیا الکتریک"
      ],
      "images": [
        {
          "src": "public/Images/products/switch-socket/asia-electric/client-265.jpg",
          "alt": "کلید و پریز آسیا الکتریک کریستال؛ قاب مشکی، مکانیزم طلایی"
        }
      ],
      "specs": [
        {
          "label": "مدل",
          "value": "کریستال"
        },
        {
          "label": "رنگ قاب",
          "value": "مشکی"
        },
        {
          "label": "رنگ مکانیزم",
          "value": "طلایی"
        },
        {
          "label": "جنس بدنه و مکانیزم",
          "value": "پلی‌کربنات"
        }
      ],
      "featured": false,
      "sourceMessageIds": [
        265
      ]
    },
    {
      "id": "asia-crystal-266",
      "slug": "asia-crystal-266",
      "categoryId": "switch-socket",
      "kind": "product",
      "title": "کلید و پریز آسیا الکتریک کریستال؛ قاب سفید، مکانیزم طلایی",
      "tagline": "مدل: کریستال؛ رنگ قاب: سفید",
      "description": "کلید و پریز آسیا الکتریک مدل کریستال با قاب سفید و مکانیزم طلایی. طبق توضیحات ارسالی، بدنه و مکانیزم از پلی‌کربنات ساخته شده است. برای انتخاب مکانیزم و استعلام قیمت تماس بگیرید.",
      "brands": [
        "آسیا الکتریک"
      ],
      "images": [
        {
          "src": "public/Images/products/switch-socket/asia-electric/client-266.jpg",
          "alt": "کلید و پریز آسیا الکتریک کریستال؛ قاب سفید، مکانیزم طلایی"
        }
      ],
      "specs": [
        {
          "label": "مدل",
          "value": "کریستال"
        },
        {
          "label": "رنگ قاب",
          "value": "سفید"
        },
        {
          "label": "رنگ مکانیزم",
          "value": "طلایی"
        },
        {
          "label": "جنس بدنه و مکانیزم",
          "value": "پلی‌کربنات"
        }
      ],
      "featured": false,
      "sourceMessageIds": [
        266
      ]
    },
    {
      "id": "part-tabesh",
      "slug": "part-tabesh",
      "categoryId": "switch-socket",
      "kind": "product",
      "title": "کلید و پریز پارت الکتریک مدل تابش",
      "tagline": "مدل: تابش",
      "description": "کلید و پریز پارت الکتریک مدل تابش؛ تصاویر ارسالی را در گالری ببینید. برای تأیید مدل، مشخصات فنی، موجودی و استعلام قیمت با فروشگاه تماس بگیرید.",
      "brands": [
        "پارت"
      ],
      "images": [
        {
          "src": "public/Images/products/switch-socket/part/client-275.jpg",
          "alt": "کلید و پریز پارت الکتریک مدل تابش"
        }
      ],
      "specs": [
        {
          "label": "مدل",
          "value": "تابش"
        }
      ],
      "featured": false,
      "sourceMessageIds": [
        275
      ]
    },
    {
      "id": "part-mechanisms",
      "slug": "part-mechanisms",
      "categoryId": "switch-socket",
      "kind": "product",
      "title": "مکانیزم کلید و پریز پارت الکتریک",
      "tagline": "تصاویر محصول؛ برای موجودی و قیمت تماس بگیرید",
      "description": "مکانیزم کلید و پریز پارت الکتریک؛ تصاویر ارسالی را در گالری ببینید. برای تأیید مدل، مشخصات فنی، موجودی و استعلام قیمت با فروشگاه تماس بگیرید.",
      "brands": [
        "پارت"
      ],
      "images": [
        {
          "src": "public/Images/products/switch-socket/part/client-276.jpg",
          "alt": "مکانیزم کلید و پریز پارت الکتریک"
        }
      ],
      "specs": [],
      "featured": false,
      "sourceMessageIds": [
        276
      ]
    },
    {
      "id": "iran-electric-aras",
      "slug": "iran-electric-aras",
      "categoryId": "switch-socket",
      "kind": "product",
      "title": "کلید و پریز ایران الکتریک مدل ارس",
      "tagline": "مدل: ارس",
      "description": "کلید و پریز ایران الکتریک مدل ارس؛ تصاویر ارسالی را در گالری ببینید. برای تأیید مدل، مشخصات فنی، موجودی و استعلام قیمت با فروشگاه تماس بگیرید.",
      "brands": [
        "ایران الکتریک"
      ],
      "images": [
        {
          "src": "public/Images/products/switch-socket/iran-electric/client-282.jpg",
          "alt": "کلید و پریز ایران الکتریک مدل ارس"
        },
        {
          "src": "public/Images/products/switch-socket/iran-electric/client-283.jpg",
          "alt": "کلید و پریز ایران الکتریک مدل ارس"
        }
      ],
      "specs": [
        {
          "label": "مدل",
          "value": "ارس"
        }
      ],
      "featured": false,
      "sourceMessageIds": [
        282,
        283
      ]
    },
    {
      "id": "iran-electric-iran",
      "slug": "iran-electric-iran",
      "categoryId": "switch-socket",
      "kind": "product",
      "title": "کلید و پریز ایران الکتریک مدل ایران",
      "tagline": "مدل: ایران",
      "description": "کلید و پریز ایران الکتریک مدل ایران؛ تصاویر ارسالی را در گالری ببینید. برای تأیید مدل، مشخصات فنی، موجودی و استعلام قیمت با فروشگاه تماس بگیرید.",
      "brands": [
        "ایران الکتریک"
      ],
      "images": [
        {
          "src": "public/Images/products/switch-socket/iran-electric/client-284.jpg",
          "alt": "کلید و پریز ایران الکتریک مدل ایران"
        }
      ],
      "specs": [
        {
          "label": "مدل",
          "value": "ایران"
        }
      ],
      "featured": false,
      "sourceMessageIds": [
        284
      ]
    },
    {
      "id": "zfr-floodlights",
      "slug": "zfr-floodlights",
      "categoryId": "lighting",
      "kind": "product",
      "title": "پروژکتور LED برند ZFR",
      "tagline": "تصاویر محصول؛ برای موجودی و قیمت تماس بگیرید",
      "description": "پروژکتور LED برند ZFR؛ تصاویر ارسالی را در گالری ببینید. برای تأیید مدل، مشخصات فنی، موجودی و استعلام قیمت با فروشگاه تماس بگیرید.",
      "brands": [
        "ZFR"
      ],
      "images": [
        {
          "src": "public/Images/products/lighting/zfr/client-301.jpg",
          "alt": "پروژکتور LED برند ZFR"
        },
        {
          "src": "public/Images/products/lighting/zfr/client-302.jpg",
          "alt": "پروژکتور LED برند ZFR"
        }
      ],
      "specs": [],
      "featured": false,
      "sourceMessageIds": [
        301,
        302
      ]
    },
    {
      "id": "zfr-halogen-lamps",
      "slug": "zfr-halogen-lamps",
      "categoryId": "lighting",
      "kind": "product",
      "title": "لامپ هالوژنی ZFR",
      "tagline": "تصاویر محصول؛ برای موجودی و قیمت تماس بگیرید",
      "description": "لامپ هالوژنی ZFR؛ تصاویر ارسالی را در گالری ببینید. برای تأیید مدل، مشخصات فنی، موجودی و استعلام قیمت با فروشگاه تماس بگیرید.",
      "brands": [
        "ZFR"
      ],
      "images": [
        {
          "src": "public/Images/products/lighting/zfr/client-303.jpg",
          "alt": "لامپ هالوژنی ZFR"
        },
        {
          "src": "public/Images/products/lighting/zfr/client-305.jpg",
          "alt": "لامپ هالوژنی ZFR"
        }
      ],
      "specs": [],
      "featured": false,
      "sourceMessageIds": [
        303,
        305
      ]
    },
    {
      "id": "zfr-lamp-holders",
      "slug": "zfr-lamp-holders",
      "categoryId": "lighting",
      "kind": "product",
      "title": "سوکت لامپ هالوژنی و سوزنی",
      "tagline": "تصاویر محصول؛ برای موجودی و قیمت تماس بگیرید",
      "description": "سوکت لامپ هالوژنی و سوزنی؛ تصاویر ارسالی را در گالری ببینید. برای تأیید مدل، مشخصات فنی، موجودی و استعلام قیمت با فروشگاه تماس بگیرید.",
      "brands": [
        "ZFR"
      ],
      "images": [
        {
          "src": "public/Images/products/lighting/zfr/client-304.jpg",
          "alt": "سوکت لامپ هالوژنی و سوزنی"
        },
        {
          "src": "public/Images/products/lighting/zfr/client-306.jpg",
          "alt": "سوکت لامپ هالوژنی و سوزنی"
        }
      ],
      "specs": [],
      "featured": false,
      "sourceMessageIds": [
        304,
        306
      ]
    },
    {
      "id": "pars-star-lamp",
      "slug": "pars-star-lamp",
      "categoryId": "lighting",
      "kind": "product",
      "title": "لامپ LED پارس استار",
      "tagline": "تصاویر محصول؛ برای موجودی و قیمت تماس بگیرید",
      "description": "لامپ LED پارس استار؛ تصاویر ارسالی را در گالری ببینید. برای تأیید مدل، مشخصات فنی، موجودی و استعلام قیمت با فروشگاه تماس بگیرید.",
      "brands": [
        "پارس استار"
      ],
      "images": [
        {
          "src": "public/Images/products/lighting/pars-star/client-312.jpg",
          "alt": "لامپ LED پارس استار"
        },
        {
          "src": "public/Images/products/lighting/pars-star/client-313.jpg",
          "alt": "لامپ LED پارس استار"
        }
      ],
      "specs": [],
      "featured": false,
      "sourceMessageIds": [
        312,
        313
      ]
    },
    {
      "id": "shil-mccb",
      "slug": "shil-mccb",
      "categoryId": "fuse",
      "kind": "product",
      "title": "کلید اتوماتیک شیل ایران",
      "tagline": "تصاویر محصول؛ برای موجودی و قیمت تماس بگیرید",
      "description": "کلید اتوماتیک شیل ایران؛ تصاویر ارسالی را در گالری ببینید. برای تأیید مدل، مشخصات فنی، موجودی و استعلام قیمت با فروشگاه تماس بگیرید.",
      "brands": [
        "شیل ایران"
      ],
      "images": [
        {
          "src": "public/Images/products/fuse/shil-iran/client-334.jpg",
          "alt": "کلید اتوماتیک شیل ایران"
        }
      ],
      "specs": [],
      "featured": false,
      "sourceMessageIds": [
        334
      ]
    },
    {
      "id": "shil-rccb",
      "slug": "shil-rccb",
      "categoryId": "fuse",
      "kind": "product",
      "title": "محافظ جان شیل ایران",
      "tagline": "تصاویر محصول؛ برای موجودی و قیمت تماس بگیرید",
      "description": "محافظ جان شیل ایران؛ تصاویر ارسالی را در گالری ببینید. برای تأیید مدل، مشخصات فنی، موجودی و استعلام قیمت با فروشگاه تماس بگیرید.",
      "brands": [
        "شیل ایران"
      ],
      "images": [
        {
          "src": "public/Images/products/fuse/shil-iran/client-335.jpg",
          "alt": "محافظ جان شیل ایران"
        }
      ],
      "specs": [],
      "featured": false,
      "sourceMessageIds": [
        335
      ]
    },
    {
      "id": "shil-mcb",
      "slug": "shil-mcb",
      "categoryId": "fuse",
      "kind": "product",
      "title": "کلید مینیاتوری شیل ایران",
      "tagline": "تصاویر محصول؛ برای موجودی و قیمت تماس بگیرید",
      "description": "کلید مینیاتوری شیل ایران؛ تصاویر ارسالی را در گالری ببینید. برای تأیید مدل، مشخصات فنی، موجودی و استعلام قیمت با فروشگاه تماس بگیرید.",
      "brands": [
        "شیل ایران"
      ],
      "images": [
        {
          "src": "public/Images/products/fuse/shil-iran/client-339.jpg",
          "alt": "کلید مینیاتوری شیل ایران"
        },
        {
          "src": "public/Images/products/fuse/shil-iran/client-344.jpg",
          "alt": "کلید مینیاتوری شیل ایران"
        }
      ],
      "specs": [],
      "featured": false,
      "sourceMessageIds": [
        339,
        344
      ]
    },
    {
      "id": "shil-neutral-mcb",
      "slug": "shil-neutral-mcb",
      "categoryId": "fuse",
      "kind": "product",
      "title": "کلید مینیاتوری فاز و نول شیل ایران",
      "tagline": "تصاویر محصول؛ برای موجودی و قیمت تماس بگیرید",
      "description": "کلید مینیاتوری فاز و نول شیل ایران؛ تصاویر ارسالی را در گالری ببینید. برای تأیید مدل، مشخصات فنی، موجودی و استعلام قیمت با فروشگاه تماس بگیرید.",
      "brands": [
        "شیل ایران"
      ],
      "images": [
        {
          "src": "public/Images/products/fuse/shil-iran/client-343.jpg",
          "alt": "کلید مینیاتوری فاز و نول شیل ایران"
        }
      ],
      "specs": [],
      "featured": false,
      "sourceMessageIds": [
        343
      ]
    },
    {
      "id": "shil-indicators",
      "slug": "shil-indicators",
      "categoryId": "fuse",
      "kind": "product",
      "title": "چراغ سیگنال شیل ایران",
      "tagline": "تصاویر محصول؛ برای موجودی و قیمت تماس بگیرید",
      "description": "چراغ سیگنال شیل ایران؛ تصاویر ارسالی را در گالری ببینید. برای تأیید مدل، مشخصات فنی، موجودی و استعلام قیمت با فروشگاه تماس بگیرید.",
      "brands": [
        "شیل ایران"
      ],
      "images": [
        {
          "src": "public/Images/products/fuse/shil-iran/client-340.jpg",
          "alt": "چراغ سیگنال شیل ایران"
        }
      ],
      "specs": [],
      "featured": false,
      "sourceMessageIds": [
        340
      ]
    },
    {
      "id": "shil-pushbutton",
      "slug": "shil-pushbutton",
      "categoryId": "fuse",
      "kind": "product",
      "title": "شستی استارت و استاپ شیل ایران",
      "tagline": "تصاویر محصول؛ برای موجودی و قیمت تماس بگیرید",
      "description": "شستی استارت و استاپ شیل ایران؛ تصاویر ارسالی را در گالری ببینید. برای تأیید مدل، مشخصات فنی، موجودی و استعلام قیمت با فروشگاه تماس بگیرید.",
      "brands": [
        "شیل ایران"
      ],
      "images": [
        {
          "src": "public/Images/products/fuse/shil-iran/client-341.jpg",
          "alt": "شستی استارت و استاپ شیل ایران"
        }
      ],
      "specs": [],
      "featured": false,
      "sourceMessageIds": [
        341
      ]
    },
    {
      "id": "shil-contactor",
      "slug": "shil-contactor",
      "categoryId": "fuse",
      "kind": "product",
      "title": "کنتاکتور شیل ایران",
      "tagline": "تصاویر محصول؛ برای موجودی و قیمت تماس بگیرید",
      "description": "کنتاکتور شیل ایران؛ تصاویر ارسالی را در گالری ببینید. برای تأیید مدل، مشخصات فنی، موجودی و استعلام قیمت با فروشگاه تماس بگیرید.",
      "brands": [
        "شیل ایران"
      ],
      "images": [
        {
          "src": "public/Images/products/fuse/shil-iran/client-342.jpg",
          "alt": "کنتاکتور شیل ایران"
        }
      ],
      "specs": [],
      "featured": false,
      "sourceMessageIds": [
        342
      ]
    },
    {
      "id": "pars-star-fuse-box",
      "slug": "pars-star-fuse-box",
      "categoryId": "fuse",
      "kind": "product",
      "title": "جعبه فیوز پارس استار",
      "tagline": "تصاویر محصول؛ برای موجودی و قیمت تماس بگیرید",
      "description": "جعبه فیوز پارس استار؛ برای تأیید مدل، موجودی و استعلام قیمت با فروشگاه تماس بگیرید.",
      "brands": [
        "پارس استار"
      ],
      "images": [
        {
          "src": "public/Images/products/fuse/pars-star/client-351.jpg",
          "alt": "جعبه فیوز پارس استار"
        }
      ],
      "specs": [],
      "featured": false,
      "sourceMessageIds": [
        351
      ]
    },
    {
      "id": "tavator-protectors",
      "slug": "tavator-protectors",
      "categoryId": "surge-protector",
      "kind": "product",
      "title": "محافظ و تجهیزات حفاظت ولتاژ تواتر مواج",
      "tagline": "تصاویر محصول؛ برای موجودی و قیمت تماس بگیرید",
      "description": "محافظ و تجهیزات حفاظت ولتاژ تواتر مواج؛ تصاویر ارسالی را در گالری ببینید. برای تأیید مدل، مشخصات فنی، موجودی و استعلام قیمت با فروشگاه تماس بگیرید.",
      "brands": [
        "تواتر"
      ],
      "images": [
        {
          "src": "public/Images/products/surge-protector/tavator/client-353.jpg",
          "alt": "محافظ و تجهیزات حفاظت ولتاژ تواتر مواج"
        },
        {
          "src": "public/Images/products/surge-protector/tavator/client-354.jpg",
          "alt": "محافظ و تجهیزات حفاظت ولتاژ تواتر مواج"
        }
      ],
      "specs": [],
      "featured": false,
      "sourceMessageIds": [
        353,
        354
      ]
    },
    {
      "id": "darya-rcbo",
      "slug": "darya-rcbo",
      "categoryId": "fuse",
      "kind": "product",
      "title": "محافظ جان ترکیبی RCBO دریا",
      "tagline": "نوع: RCBO",
      "description": "محافظ جان ترکیبی RCBO دریا؛ تصاویر ارسالی را در گالری ببینید. برای تأیید مدل، مشخصات فنی، موجودی و استعلام قیمت با فروشگاه تماس بگیرید.",
      "brands": [
        "دریا"
      ],
      "images": [
        {
          "src": "public/Images/products/fuse/darya/client-363.png",
          "alt": "محافظ جان ترکیبی RCBO دریا"
        },
        {
          "src": "public/Images/products/fuse/darya/client-364.png",
          "alt": "محافظ جان ترکیبی RCBO دریا"
        },
        {
          "src": "public/Images/products/fuse/darya/client-365.png",
          "alt": "محافظ جان ترکیبی RCBO دریا"
        }
      ],
      "specs": [
        {
          "label": "نوع",
          "value": "RCBO"
        }
      ],
      "featured": false,
      "sourceMessageIds": [
        363,
        364,
        365
      ]
    },
    {
      "id": "darya-rccb",
      "slug": "darya-rccb",
      "categoryId": "fuse",
      "kind": "product",
      "title": "محافظ جان RCCB دریا",
      "tagline": "نوع: RCCB",
      "description": "محافظ جان RCCB دریا؛ تصاویر ارسالی را در گالری ببینید. برای تأیید مدل، مشخصات فنی، موجودی و استعلام قیمت با فروشگاه تماس بگیرید.",
      "brands": [
        "دریا"
      ],
      "images": [
        {
          "src": "public/Images/products/fuse/darya/client-366.png",
          "alt": "محافظ جان RCCB دریا"
        },
        {
          "src": "public/Images/products/fuse/darya/client-367.png",
          "alt": "محافظ جان RCCB دریا"
        },
        {
          "src": "public/Images/products/fuse/darya/client-368.png",
          "alt": "محافظ جان RCCB دریا"
        }
      ],
      "specs": [
        {
          "label": "نوع",
          "value": "RCCB"
        }
      ],
      "featured": false,
      "sourceMessageIds": [
        366,
        367,
        368
      ]
    },
    {
      "id": "darya-dc-mcb",
      "slug": "darya-dc-mcb",
      "categoryId": "fuse",
      "kind": "product",
      "title": "کلید مینیاتوری DC دریا",
      "tagline": "نوع جریان: DC",
      "description": "کلید مینیاتوری DC دریا؛ تصاویر ارسالی را در گالری ببینید. برای تأیید مدل، مشخصات فنی، موجودی و استعلام قیمت با فروشگاه تماس بگیرید.",
      "brands": [
        "دریا"
      ],
      "images": [
        {
          "src": "public/Images/products/fuse/darya/client-369.png",
          "alt": "کلید مینیاتوری DC دریا"
        },
        {
          "src": "public/Images/products/fuse/darya/client-370.jpg",
          "alt": "کلید مینیاتوری DC دریا"
        },
        {
          "src": "public/Images/products/fuse/darya/client-371.jpg",
          "alt": "کلید مینیاتوری DC دریا"
        }
      ],
      "specs": [
        {
          "label": "نوع جریان",
          "value": "DC"
        }
      ],
      "featured": false,
      "sourceMessageIds": [
        369,
        370,
        371
      ]
    },
    {
      "id": "darya-ac-mcb",
      "slug": "darya-ac-mcb",
      "categoryId": "fuse",
      "kind": "product",
      "title": "کلید مینیاتوری AC دریا",
      "tagline": "نوع جریان: AC",
      "description": "کلید مینیاتوری AC دریا؛ تصاویر ارسالی را در گالری ببینید. برای تأیید مدل، مشخصات فنی، موجودی و استعلام قیمت با فروشگاه تماس بگیرید.",
      "brands": [
        "دریا"
      ],
      "images": [
        {
          "src": "public/Images/products/fuse/darya/client-372.png",
          "alt": "کلید مینیاتوری AC دریا"
        },
        {
          "src": "public/Images/products/fuse/darya/client-373.png",
          "alt": "کلید مینیاتوری AC دریا"
        }
      ],
      "specs": [
        {
          "label": "نوع جریان",
          "value": "AC"
        }
      ],
      "featured": false,
      "sourceMessageIds": [
        372,
        373
      ]
    },
    {
      "id": "darya-aux-contact",
      "slug": "darya-aux-contact",
      "categoryId": "fuse",
      "kind": "product",
      "title": "کنتاکت کمکی دریا",
      "tagline": "تصاویر محصول؛ برای موجودی و قیمت تماس بگیرید",
      "description": "کنتاکت کمکی دریا؛ تصاویر ارسالی را در گالری ببینید. برای تأیید مدل، مشخصات فنی، موجودی و استعلام قیمت با فروشگاه تماس بگیرید.",
      "brands": [
        "دریا"
      ],
      "images": [
        {
          "src": "public/Images/products/fuse/darya/client-374.jpg",
          "alt": "کنتاکت کمکی دریا"
        }
      ],
      "specs": [],
      "featured": false,
      "sourceMessageIds": [
        374
      ]
    },
    {
      "id": "darya-disconnector",
      "slug": "darya-disconnector",
      "categoryId": "fuse",
      "kind": "product",
      "title": "سکسیونر و پایه فیوز دریا",
      "tagline": "تصاویر محصول؛ برای موجودی و قیمت تماس بگیرید",
      "description": "سکسیونر و پایه فیوز دریا؛ تصاویر ارسالی را در گالری ببینید. برای تأیید مدل، مشخصات فنی، موجودی و استعلام قیمت با فروشگاه تماس بگیرید.",
      "brands": [
        "دریا"
      ],
      "images": [
        {
          "src": "public/Images/products/fuse/darya/client-375.png",
          "alt": "سکسیونر و پایه فیوز دریا"
        },
        {
          "src": "public/Images/products/fuse/darya/client-376.png",
          "alt": "سکسیونر و پایه فیوز دریا"
        },
        {
          "src": "public/Images/products/fuse/darya/client-377.png",
          "alt": "سکسیونر و پایه فیوز دریا"
        }
      ],
      "specs": [],
      "featured": false,
      "sourceMessageIds": [
        375,
        376,
        377
      ]
    },
    {
      "id": "darya-high-breaking-mcb",
      "slug": "darya-high-breaking-mcb",
      "categoryId": "fuse",
      "kind": "product",
      "title": "کلید مینیاتوری با قدرت قطع بالا دریا",
      "tagline": "تصاویر محصول؛ برای موجودی و قیمت تماس بگیرید",
      "description": "کلید مینیاتوری با قدرت قطع بالا دریا؛ تصاویر ارسالی را در گالری ببینید. برای تأیید مدل، مشخصات فنی، موجودی و استعلام قیمت با فروشگاه تماس بگیرید.",
      "brands": [
        "دریا"
      ],
      "images": [
        {
          "src": "public/Images/products/fuse/darya/client-378.jpg",
          "alt": "کلید مینیاتوری با قدرت قطع بالا دریا"
        }
      ],
      "specs": [],
      "featured": false,
      "sourceMessageIds": [
        378
      ]
    },
    {
      "id": "darya-blade-fuse",
      "slug": "darya-blade-fuse",
      "categoryId": "fuse",
      "kind": "product",
      "title": "فیوز کاردی دریا",
      "tagline": "تصاویر محصول؛ برای موجودی و قیمت تماس بگیرید",
      "description": "فیوز کاردی دریا؛ تصاویر ارسالی را در گالری ببینید. برای تأیید مدل، مشخصات فنی، موجودی و استعلام قیمت با فروشگاه تماس بگیرید.",
      "brands": [
        "دریا"
      ],
      "images": [
        {
          "src": "public/Images/products/fuse/darya/client-379.jpg",
          "alt": "فیوز کاردی دریا"
        }
      ],
      "specs": [],
      "featured": false,
      "sourceMessageIds": [
        379
      ]
    },
    {
      "id": "khazar-fan-ventilator",
      "slug": "khazar-fan-ventilator",
      "categoryId": "fan",
      "kind": "product",
      "title": "هواکش خزر فن",
      "tagline": "تصاویر محصول؛ برای موجودی و قیمت تماس بگیرید",
      "description": "هواکش خزر فن؛ تصاویر ارسالی را در گالری ببینید. برای تأیید مدل، مشخصات فنی، موجودی و استعلام قیمت با فروشگاه تماس بگیرید.",
      "brands": [
        "خزر فن"
      ],
      "images": [
        {
          "src": "public/Images/products/fan/khazar-fan/client-396.png",
          "alt": "هواکش خزر فن"
        }
      ],
      "specs": [],
      "featured": false,
      "sourceMessageIds": [
        396
      ]
    },
    {
      "id": "pvc-electrical-pipes",
      "slug": "pvc-electrical-pipes",
      "categoryId": "pvc-pipe",
      "kind": "product",
      "title": "لوله برق PVC",
      "tagline": "جنس: PVC",
      "description": "لوله برق PVC؛ تصاویر ارسالی را در گالری ببینید. برای تأیید مدل، مشخصات فنی، موجودی و استعلام قیمت با فروشگاه تماس بگیرید.",
      "brands": [],
      "images": [
        {
          "src": "public/Images/products/pvc-pipe/general/client-397.png",
          "alt": "لوله برق PVC"
        },
        {
          "src": "public/Images/products/pvc-pipe/general/client-404.jpg",
          "alt": "لوله برق PVC"
        }
      ],
      "specs": [
        {
          "label": "جنس",
          "value": "PVC"
        }
      ],
      "featured": false,
      "sourceMessageIds": [
        397,
        404
      ]
    },
    {
      "id": "pvc-standard-elbows",
      "slug": "pvc-standard-elbows",
      "categoryId": "pvc-pipe",
      "kind": "product",
      "title": "زانوی معمولی لوله برق",
      "tagline": "تصاویر محصول؛ برای موجودی و قیمت تماس بگیرید",
      "description": "زانوی معمولی لوله برق؛ تصاویر ارسالی را در گالری ببینید. برای تأیید مدل، مشخصات فنی، موجودی و استعلام قیمت با فروشگاه تماس بگیرید.",
      "brands": [],
      "images": [
        {
          "src": "public/Images/products/pvc-pipe/general/client-398.jpg",
          "alt": "زانوی معمولی لوله برق"
        },
        {
          "src": "public/Images/products/pvc-pipe/general/client-400.jpg",
          "alt": "زانوی معمولی لوله برق"
        }
      ],
      "specs": [],
      "featured": false,
      "sourceMessageIds": [
        398,
        400
      ]
    },
    {
      "id": "pvc-long-elbows",
      "slug": "pvc-long-elbows",
      "categoryId": "pvc-pipe",
      "kind": "product",
      "title": "زانوی عصایی لوله برق",
      "tagline": "تصاویر محصول؛ برای موجودی و قیمت تماس بگیرید",
      "description": "زانوی عصایی لوله برق؛ تصاویر ارسالی را در گالری ببینید. برای تأیید مدل، مشخصات فنی، موجودی و استعلام قیمت با فروشگاه تماس بگیرید.",
      "brands": [],
      "images": [
        {
          "src": "public/Images/products/pvc-pipe/general/client-399.jpg",
          "alt": "زانوی عصایی لوله برق"
        },
        {
          "src": "public/Images/products/pvc-pipe/general/client-401.jpg",
          "alt": "زانوی عصایی لوله برق"
        },
        {
          "src": "public/Images/products/pvc-pipe/general/client-402.jpg",
          "alt": "زانوی عصایی لوله برق"
        },
        {
          "src": "public/Images/products/pvc-pipe/general/client-403.jpg",
          "alt": "زانوی عصایی لوله برق"
        }
      ],
      "specs": [],
      "featured": false,
      "sourceMessageIds": [
        399,
        401,
        402,
        403
      ]
    },
    {
      "id": "danub-duct-accessories",
      "slug": "danub-duct-accessories",
      "categoryId": "duct-tape",
      "kind": "product",
      "title": "داکت و تجهیزات سیم‌کشی دانوب",
      "tagline": "تصاویر محصول؛ برای موجودی و قیمت تماس بگیرید",
      "description": "داکت و تجهیزات سیم‌کشی دانوب؛ تصاویر ارسالی را در گالری ببینید. برای تأیید مدل، مشخصات فنی، موجودی و استعلام قیمت با فروشگاه تماس بگیرید.",
      "brands": [
        "دانوب"
      ],
      "images": [
        {
          "src": "public/Images/products/duct-tape/danub/client-408.jpg",
          "alt": "داکت و تجهیزات سیم‌کشی دانوب"
        },
        {
          "src": "public/Images/products/duct-tape/danub/client-409.jpg",
          "alt": "داکت و تجهیزات سیم‌کشی دانوب"
        },
        {
          "src": "public/Images/products/duct-tape/danub/client-411.jpg",
          "alt": "داکت و تجهیزات سیم‌کشی دانوب"
        },
        {
          "src": "public/Images/products/duct-tape/danub/client-412.jpg",
          "alt": "داکت و تجهیزات سیم‌کشی دانوب"
        }
      ],
      "specs": [],
      "featured": false,
      "sourceMessageIds": [
        408,
        409,
        411,
        412
      ]
    },
    {
      "id": "building-fuse-box",
      "slug": "building-fuse-box",
      "categoryId": "fuse",
      "kind": "product",
      "title": "جعبه فیوز ساختمانی",
      "tagline": "تصویر جعبه فیوز؛ برای مشخصات و موجودی تماس بگیرید.",
      "description": "جعبه فیوز ساختمانی با درپوش تیره. برند و مدل این تصویر در فایل ارسالی مشخص نشده است؛ برای تأیید مشخصات با فروشگاه تماس بگیرید.",
      "brands": [],
      "images": [
        {
          "src": "public/Images/products/fuse/general/client-350.jpg",
          "alt": "جعبه فیوز ساختمانی با درپوش تیره"
        }
      ],
      "specs": [],
      "featured": false,
      "sourceMessageIds": [
        350
      ]
    }
  ],
  "documents": [
    {
      "id": "iran-electric-iran-electric-catalogue",
      "brandId": "iran-electric",
      "categoryIds": [
        "switch-socket"
      ],
      "title": "کاتالوگ ایران الکتریک",
      "src": "public/documents/iran-electric/iran-electric-catalogue.pdf",
      "sizeBytes": 2388042
    },
    {
      "id": "deland-deland-catalogue",
      "brandId": "deland",
      "categoryIds": [
        "switch-socket"
      ],
      "title": "کاتالوگ دلند",
      "src": "public/documents/deland/deland-catalogue.pdf",
      "sizeBytes": 11607787
    },
    {
      "id": "deland-deland-mechanisms",
      "brandId": "deland",
      "categoryIds": [
        "switch-socket"
      ],
      "title": "مکانیزم‌های دلند پلاس",
      "src": "public/documents/deland/deland-mechanisms.pdf",
      "sizeBytes": 18700726
    },
    {
      "id": "deland-deland-plus-catalogue",
      "brandId": "deland",
      "categoryIds": [
        "switch-socket"
      ],
      "title": "کاتالوگ دلند پلاس",
      "src": "public/documents/deland/deland-plus-catalogue.pdf",
      "sizeBytes": 28303528
    },
    {
      "id": "part-part-catalogue",
      "brandId": "part",
      "categoryIds": [
        "switch-socket",
        "surge-protector"
      ],
      "title": "کاتالوگ پارت الکتریک",
      "src": "public/documents/part/part-catalogue.pdf",
      "sizeBytes": 605397
    },
    {
      "id": "pars-shahab-led-intelligent-catalogue",
      "brandId": "pars-shahab",
      "categoryIds": [
        "lighting"
      ],
      "title": "کاتالوگ LED و روشنایی هوشمند پارس شهاب",
      "src": "public/documents/pars-shahab/led-intelligent-catalogue.pdf",
      "sizeBytes": 12266202
    },
    {
      "id": "zfr-zfr-catalogue",
      "brandId": "zfr",
      "categoryIds": [
        "lighting"
      ],
      "title": "کاتالوگ روشنایی ZFR",
      "src": "public/documents/zfr/zfr-catalogue.pdf",
      "sizeBytes": 3970173
    },
    {
      "id": "pars-arvand-pars-arvand-catalogue",
      "brandId": "pars-arvand",
      "categoryIds": [
        "lighting",
        "fuse",
        "surge-protector"
      ],
      "title": "کاتالوگ پارس اروند",
      "src": "public/documents/pars-arvand/pars-arvand-catalogue.pdf",
      "sizeBytes": 9620075
    },
    {
      "id": "taba-taba-catalogue",
      "brandId": "taba",
      "categoryIds": [
        "intercom"
      ],
      "title": "کاتالوگ تابا الکترونیک",
      "src": "public/documents/taba/taba-catalogue.pdf",
      "sizeBytes": 1462521
    },
    {
      "id": "simaran-video-intercom-comparison",
      "brandId": "simaran",
      "categoryIds": [
        "intercom"
      ],
      "title": "مقایسه سیستم‌های دربازکن تصویری سیماران",
      "src": "public/documents/simaran/video-intercom-comparison.pdf",
      "sizeBytes": 68795177
    },
    {
      "id": "simaran-hd-intercom",
      "brandId": "simaran",
      "categoryIds": [
        "intercom"
      ],
      "title": "کاتالوگ سیستم دربازکن HD سیماران",
      "src": "public/documents/simaran/hd-intercom.pdf",
      "sizeBytes": 4544200
    },
    {
      "id": "simaran-ip-intercom",
      "brandId": "simaran",
      "categoryIds": [
        "intercom"
      ],
      "title": "کاتالوگ سیستم دربازکن IP سیماران",
      "src": "public/documents/simaran/ip-intercom.pdf",
      "sizeBytes": 5845753
    },
    {
      "id": "electropeyk-intercom-products",
      "brandId": "electropeyk",
      "categoryIds": [
        "intercom"
      ],
      "title": "محصولات دربازکن الکتروپیک",
      "src": "public/documents/electropeyk/intercom-products.pdf",
      "sizeBytes": 1908178
    },
    {
      "id": "electropeyk-intercom-comparison",
      "brandId": "electropeyk",
      "categoryIds": [
        "intercom"
      ],
      "title": "مقایسه محصولات الکتروپیک",
      "src": "public/documents/electropeyk/intercom-comparison.pdf",
      "sizeBytes": 2019624
    },
    {
      "id": "behdad-behdad-catalogue",
      "brandId": "behdad",
      "categoryIds": [
        "surge-protector"
      ],
      "title": "کاتالوگ بهداد الکتریک",
      "src": "public/documents/behdad/behdad-catalogue.pdf",
      "sizeBytes": 77665956
    },
    {
      "id": "dena-dena-catalogue",
      "brandId": "dena",
      "categoryIds": [
        "fuse"
      ],
      "title": "کاتالوگ دنا الکتریک ایرانیان",
      "src": "public/documents/dena/dena-catalogue.pdf",
      "sizeBytes": 9348546
    },
    {
      "id": "bargh-saro-bargh-saro-catalogue",
      "brandId": "bargh-saro",
      "categoryIds": [
        "fuse",
        "sensor-timer"
      ],
      "title": "کاتالوگ برق سارو",
      "src": "public/documents/bargh-saro/bargh-saro-catalogue.pdf",
      "sizeBytes": 2673566
    },
    {
      "id": "damandeh-home-appliance-parts",
      "brandId": "damandeh",
      "categoryIds": [
        "fan"
      ],
      "title": "قطعات لوازم خانگی دمنده",
      "src": "public/documents/damandeh/home-appliance-parts.pdf",
      "sizeBytes": 1571203
    },
    {
      "id": "damandeh-residential-products",
      "brandId": "damandeh",
      "categoryIds": [
        "fan"
      ],
      "title": "محصولات خانگی دمنده",
      "src": "public/documents/damandeh/residential-products.pdf",
      "sizeBytes": 2370224
    },
    {
      "id": "damandeh-industrial-products",
      "brandId": "damandeh",
      "categoryIds": [
        "fan"
      ],
      "title": "محصولات صنعتی دمنده",
      "src": "public/documents/damandeh/industrial-products.pdf",
      "sizeBytes": 5805727
    },
    {
      "id": "damandeh-hvac-centrifugal",
      "brandId": "damandeh",
      "categoryIds": [
        "fan"
      ],
      "title": "سانتریفیوژ تأسیساتی دمنده",
      "src": "public/documents/damandeh/hvac-centrifugal.pdf",
      "sizeBytes": 4897949
    },
    {
      "id": "damandeh-hvac-axial",
      "brandId": "damandeh",
      "categoryIds": [
        "fan"
      ],
      "title": "آکسیال تأسیساتی دمنده",
      "src": "public/documents/damandeh/hvac-axial.pdf",
      "sizeBytes": 11345664
    },
    {
      "id": "soupita-soupita-catalogue",
      "brandId": "soupita",
      "categoryIds": [
        "garden-light",
        "duct-tape"
      ],
      "title": "کاتالوگ سوپیتا",
      "src": "public/documents/soupita/soupita-catalogue.pdf",
      "sizeBytes": 3152296
    },
    {
      "id": "doostan-lighting-catalogue",
      "brandId": "doostan",
      "categoryIds": [
        "garden-light"
      ],
      "title": "کاتالوگ محصولات روشنایی دوستان",
      "src": "public/documents/doostan/lighting-catalogue.pdf",
      "sizeBytes": 2095321
    }
  ],
  "brands": [
    {
      "id": "bargh-saro",
      "title": "برق سارو"
    },
    {
      "id": "semnan",
      "title": "سمنان",
      "logo": "public/Images/products/wire-cable/semnan/client-294.jpg"
    },
    {
      "id": "afsharnejad",
      "title": "افشارنژاد"
    },
    {
      "id": "bartar",
      "title": "برتر",
      "logo": "public/Images/products/wire-cable/bartar/client-295.jpg"
    },
    {
      "id": "amol",
      "title": "آمل",
      "logo": "public/Images/products/wire-cable/amol/client-237.png"
    },
    {
      "id": "deland",
      "title": "دلند",
      "logo": "public/Images/products/switch-socket/deland/client-297.jpg"
    },
    {
      "id": "iran-electric",
      "title": "ایران الکتریک",
      "logo": "public/Images/products/switch-socket/iran-electric/client-296.jpg"
    },
    {
      "id": "part",
      "title": "پارت",
      "logo": "public/Images/products/switch-socket/part/client-299.jpg"
    },
    {
      "id": "pars-shahab",
      "title": "پارس شهاب",
      "logo": "public/Images/products/lighting/pars-shahab/client-288.jpg"
    },
    {
      "id": "zfr",
      "title": "ZFR",
      "logo": "public/Images/products/lighting/zfr/client-291.jpg"
    },
    {
      "id": "pars-shoa-toos",
      "title": "پارس شعاع توس",
      "logo": "public/Images/products/lighting/pars-shoa-toos/client-310.jpg"
    },
    {
      "id": "sahand-ava",
      "title": "سهند آوا"
    },
    {
      "id": "pars-star",
      "title": "پارس استار",
      "logo": "public/Images/products/lighting/pars-star/client-311.jpg"
    },
    {
      "id": "pars-arvand",
      "title": "پارس اروند",
      "logo": "public/Images/products/lighting/pars-arvand/client-316.jpg"
    },
    {
      "id": "taba",
      "title": "تابا",
      "logo": "public/Images/products/intercom/taba/client-319.jpg"
    },
    {
      "id": "simaran",
      "title": "سیماران",
      "logo": "public/Images/products/intercom/simaran/client-323.jpg"
    },
    {
      "id": "electropeyk",
      "title": "الکتروپیک",
      "logo": "public/Images/products/intercom/electropeyk/client-329.jpg"
    },
    {
      "id": "kian",
      "title": "کیان"
    },
    {
      "id": "shil-iran",
      "title": "شیل ایران",
      "logo": "public/Images/products/fuse/shil-iran/client-336.png"
    },
    {
      "id": "tavator",
      "title": "تواتر"
    },
    {
      "id": "behdad",
      "title": "بهداد",
      "logo": "public/Images/products/surge-protector/behdad/client-348.jpg"
    },
    {
      "id": "dena",
      "title": "دنا",
      "logo": "public/Images/products/fuse/dena/client-357.jpg"
    },
    {
      "id": "darya",
      "title": "دریا"
    },
    {
      "id": "damandeh",
      "title": "دمنده",
      "logo": "public/Images/products/fan/damandeh/client-386.jpg"
    },
    {
      "id": "pars-khazar",
      "title": "پارس خزر",
      "logo": "public/Images/products/fan/pars-khazar/client-392.jpg"
    },
    {
      "id": "khazar-fan",
      "title": "خزر فن",
      "logo": "public/Images/products/fan/khazar-fan/client-394.jpg"
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
    },
    {
      "id": "asia-electric",
      "title": "آسیا الکتریک"
    },
    {
      "id": "shiva",
      "title": "شیوا"
    }
  ]
};
