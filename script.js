/* Shared page behaviour. Product content lives in catalog.js. No libraries or build step. */
(() => {
  "use strict";
  const { categories, products, brands } = window.CATALOG;
  const shop = window.SHOP;
  const $ = (selector) => document.querySelector(selector);
  const escape = (value) =>
    String(value ?? "").replace(
      /[&<>"']/g,
      (character) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[character],
    );
  const fa = (number) => Number(number).toLocaleString("fa-IR");
  const normalize = (value) =>
    String(value)
      .toLowerCase()
      .replace(/ي/g, "ی")
      .replace(/ك/g, "ک")
      .replace(/[\u064B-\u065F\u200c]/g, "")
      .trim();
  const categoryFor = (product) =>
    categories.find((category) => category.id === product.categoryId);
  const findProduct = (id) =>
    products.find(
      (product) => String(product.id) === id || product.slug === id,
    );
  const findBrand = (value) =>
    brands.find(
      (brand) =>
        brand.id === value || normalize(brand.title) === normalize(value),
    );
  const brandForProduct = (product) => findBrand(product.brands?.[0]);
  const brandsForCategory = (categoryId) =>
    brands.filter((brand) =>
      products.some(
        (product) =>
          (!categoryId || product.categoryId === categoryId) &&
          product.brands?.includes(brand.title),
      ),
    );
  const catalogueUrl = (categoryId, brandId = "") => {
    const params = new URLSearchParams({ category: categoryId });
    if (brandId) params.set("brand", brandId);
    return "products.html?" + params;
  };
  const brandLinks = (product) =>
    (product.brands || [])
      .map((title) => {
        const brand = findBrand(title);
        return brand
          ? `<a href="${escape(catalogueUrl(product.categoryId, brand.id))}">${escape(title)} ←</a>`
          : `<span>${escape(title)}</span>`;
      })
      .join("");
  const productUrl = (product) => {
    const params = new URLSearchParams({
      id: product.id,
      title: product.title,
    });
    const brand = brandForProduct(product);
    if (product.kind !== "group" && brand) params.set("brand", brand.id);
    return "product.html?" + params;
  };
  // Accept only local image assets, even when catalogue content is later imported.
  const imagePath = (path) =>
    /^(?:public|images|assets)\/[a-zA-Z0-9_./% -]+\.(?:jpg|jpeg|png|webp|avif|gif|svg)$/i.test(
      path || "",
    ) && !path.includes("..")
      ? path
      : "";
  const photoList = (product) =>
    (product.images || [])
      .map((image) =>
        typeof image === "string" ? { src: image, alt: product.title } : image,
      )
      .filter((image) => imagePath(image.src));
  const setBackground = (element, path) => {
    if (element && imagePath(path))
      element.style.setProperty("--page-image", 'url("' + path + '")');
  };

  function card(product) {
    const category = categoryFor(product);
    const photo = photoList(product)[0];
    const source = photo?.src || imagePath(category?.background);
    return `<a class="product-card" href="${escape(productUrl(product))}">
      <div class="card-media ${photo ? "product-photo" : ""}">${source ? `<img src="${escape(source)}" alt="${photo ? escape(photo.alt || product.title) : ""}" loading="lazy" width="640" height="400">` : ""}
      <span class="card-kind">${product.kind === "group" ? "گروه کالا" : "محصول"}</span></div>
      <div class="card-content"><small>${escape(category?.title || "")}</small>
      <h3>${escape(product.title)}</h3><p>${escape(product.tagline)}</p>
      <span class="card-bottom">مشاهده جزئیات <span aria-hidden="true">←</span></span></div></a>`;
  }

  // Image failures leave a deliberate placeholder instead of a broken-image icon.
  document.addEventListener(
    "error",
    (event) => {
      if (event.target instanceof HTMLImageElement) {
        event.target.hidden = true;
        event.target.parentElement.classList.add("image-unavailable");
      }
    },
    true,
  );

  const nav = $(".main-nav");
  const menu = $(".menu-button");
  if (nav && menu) {
    nav.id = "mainNavigation";
    nav.setAttribute("aria-label", "ناوبری اصلی");
    menu.setAttribute("aria-controls", nav.id);
    function closeMenu() {
      nav.classList.remove("open");
      menu.setAttribute("aria-expanded", "false");
    }
    menu.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menu.setAttribute("aria-expanded", String(open));
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && nav.classList.contains("open")) {
        closeMenu();
        menu.focus();
      }
    });
    document.addEventListener("click", (event) => {
      if (!nav.contains(event.target) && !menu.contains(event.target))
        closeMenu();
    });
    nav
      .querySelectorAll("a")
      .forEach((link) => link.addEventListener("click", closeMenu));
    nav.querySelector(".active")?.setAttribute("aria-current", "page");
  }
  const header = $(".site-header");
  const onScroll = () =>
    header?.classList.toggle("scrolled", window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const page = document.body.dataset.page;
  setBackground($(".inner-hero"), `public/backgrounds/${page}.jpg`);
  document
    .querySelectorAll("[data-category-count]")
    .forEach((element) => (element.textContent = fa(categories.length)));
  document
    .querySelectorAll("[data-brand-count]")
    .forEach(
      (element) =>
        (element.textContent = fa(
          new Set(products.flatMap((product) => product.brands || [])).size,
        )),
    );

  const grid = $("#productsGrid");
  if (grid && page === "home") {
    const featured = products.filter((product) => product.featured);
    grid.innerHTML = (featured.length ? featured : products)
      .slice(0, 6)
      .map(card)
      .join("");
  }
  if (grid && page === "products") {
    const search = $("#searchInput");
    const filters = $("#filters");
    const sort = $("#sortProducts");
    const brandFilter = $("#brandFilter");
    const context = $("#catalogContext");
    const count = $("#productCount");
    const empty = $("#emptyState");
    const pagination = $("#pagination");
    const pageSize = 9;
    let state;
    function readState() {
      const params = new URLSearchParams(window.location.search);
      state = {
        query: params.get("q") || "",
        brand: findBrand(params.get("brand"))?.id || params.get("brand") || "",
        category: categories.some(
          (category) => category.id === params.get("category"),
        )
          ? params.get("category")
          : "",
        sort: params.get("sort") === "title" ? "title" : "default",
        page: Math.max(1, Number.parseInt(params.get("page"), 10) || 1),
      };
      search.value = state.query;
      sort.value = state.sort;
    }
    function saveState() {
      const params = new URLSearchParams();
      if (state.query) params.set("q", state.query);
      if (state.category) params.set("category", state.category);
      if (state.brand) params.set("brand", state.brand);
      if (state.sort !== "default") params.set("sort", state.sort);
      if (state.page > 1) params.set("page", state.page);
      // URL state also works on normal static hosting; disk-only viewers may deny history changes.
      try {
        history.replaceState(
          null,
          "",
          location.pathname + (params.size ? "?" + params : ""),
        );
      } catch {}
    }
    function render() {
      let matches = products.filter(
        (product) =>
          (!state.category || product.categoryId === state.category) &&
          (!state.brand ||
            (product.kind !== "group" &&
              product.brands?.includes(findBrand(state.brand)?.title))) &&
          normalize(
            [
              product.title,
              product.tagline,
              categoryFor(product)?.title,
              ...(product.brands || []),
            ].join(" "),
          ).includes(normalize(state.query)),
      );
      if (state.sort === "title")
        matches.sort((a, b) => a.title.localeCompare(b.title, "fa"));
      const totalPages = Math.max(1, Math.ceil(matches.length / pageSize));
      state.page = Math.min(state.page, totalPages);
      grid.innerHTML = matches
        .slice((state.page - 1) * pageSize, state.page * pageSize)
        .map(card)
        .join("");
      count.textContent = fa(matches.length) + " مورد";
      const selectedBrand = findBrand(state.brand);
      const selectedCategory = categories.find(
        (category) => category.id === state.category,
      );
      const availableBrands = brandsForCategory(state.category);
      brandFilter.innerHTML =
        '<option value="">همه برندها</option>' +
        availableBrands
          .map(
            (brand) =>
              `<option value="${escape(brand.id)}">${escape(brand.title)}</option>`,
          )
          .join("");
      if (
        state.brand &&
        !availableBrands.some((brand) => brand.id === state.brand)
      ) {
        const invalidOption = document.createElement("option");
        invalidOption.value = state.brand;
        invalidOption.textContent = "برند نامعتبر برای این دسته";
        brandFilter.append(invalidOption);
      }
      brandFilter.value = state.brand;
      context.textContent = state.brand
        ? (selectedCategory?.title || "همه دسته‌ها") +
          " / " +
          (selectedBrand?.title || "برند نامعتبر") +
          " — مدل‌های ثبت‌شده"
        : selectedCategory?.title || "همه گروه‌ها و محصولات";
      document.title =
        (selectedBrand
          ? [selectedCategory?.title, selectedBrand.title]
              .filter(Boolean)
              .join(" — ")
          : "محصولات") +
        " | " +
        shop.name;
      empty.hidden = matches.length > 0;
      filters.innerHTML = [{ id: "", title: "همه دسته‌ها" }, ...categories]
        .map(
          (category) =>
            `<button type="button" class="filter ${state.category === category.id ? "selected" : ""}"
          aria-pressed="${state.category === category.id}" data-category="${escape(category.id)}">${escape(category.title)}</button>`,
        )
        .join("");
      pagination.hidden = totalPages <= 1;
      pagination.innerHTML = `<button class="button ghost" data-page="${state.page - 1}" ${state.page === 1 ? "disabled" : ""}>قبلی</button>
        <span>صفحه ${fa(state.page)} از ${fa(totalPages)}</span>
        <button class="button ghost" data-page="${state.page + 1}" ${state.page === totalPages ? "disabled" : ""}>بعدی</button>`;
    }
    function update() {
      render();
      saveState();
    }
    search.addEventListener("input", () => {
      state.query = search.value;
      state.page = 1;
      update();
    });
    brandFilter.addEventListener("change", () => {
      state.brand = brandFilter.value;
      state.page = 1;
      update();
    });
    sort.addEventListener("change", () => {
      state.sort = sort.value;
      state.page = 1;
      update();
    });
    filters.addEventListener("click", (event) => {
      const button = event.target.closest("[data-category]");
      if (!button) return;
      state.category = button.dataset.category;
      if (
        !brandsForCategory(state.category).some(
          (brand) => brand.id === state.brand,
        )
      )
        state.brand = "";
      state.page = 1;
      update();
      [...filters.querySelectorAll("button")]
        .find((item) => item.dataset.category === state.category)
        ?.focus();
    });
    $("#resetFilters").addEventListener("click", () => {
      state = { query: "", category: "", brand: "", sort: "default", page: 1 };
      search.value = "";
      sort.value = "default";
      update();
      search.focus();
    });
    pagination.addEventListener("click", (event) => {
      const button = event.target.closest("[data-page]");
      if (!button || button.disabled) return;
      state.page = Number(button.dataset.page);
      update();
      grid.scrollIntoView({ block: "start" });
      grid.focus({ preventScroll: true });
    });
    window.addEventListener("popstate", () => {
      readState();
      render();
    });
    readState();
    render();
  }

  if (page === "product") {
    // The URL selects a trusted catalogue record. A supplied title never replaces its content.
    const params = new URLSearchParams(window.location.search);
    const product = findProduct(params.get("id"));
    const root = $("#productContent");
    const requestedBrand = params.get("brand");
    const selectedBrand = findBrand(requestedBrand);
    const invalidBrand =
      requestedBrand &&
      (!selectedBrand || !product?.brands?.includes(selectedBrand.title));
    const invalidCategory =
      params.has("category") && params.get("category") !== product?.categoryId;
    if (!product || invalidBrand || invalidCategory) {
      document.title = "محصول یافت نشد | " + shop.name;
      root.innerHTML = `<section class="container not-found"><p class="eyebrow plain">کاتالوگ محصولات</p>
        <h1>محصول پیدا نشد</h1><p>لینک این محصول معتبر نیست یا اطلاعات آن تغییر کرده است.</p>
        <a class="button primary" href="products.html">بازگشت به محصولات ←</a></section>`;
      return;
    }
    // Older group URLs can also select a brand: product.html?id=2&brand=deland.
    if (product.kind === "group" && selectedBrand) {
      window.location.replace(
        catalogueUrl(product.categoryId, selectedBrand.id),
      );
      return;
    }
    const category = categoryFor(product);
    const modelBrand = selectedBrand || brandForProduct(product);
    const photos = photoList(product);
    document.title = product.title + " | " + shop.name;
    $('meta[name="description"]').content =
      product.tagline || product.description;
    const inquiry = encodeURIComponent(
      "سلام، درباره «" +
        product.title +
        "» نیاز به راهنمایی و استعلام قیمت دارم.",
    );
    root.innerHTML = `<section class="detail-banner inner-hero"><div class="container">
      <nav class="breadcrumbs" aria-label="مسیر صفحه"><a href="index.html">خانه</a><span>/</span>
      <a href="products.html">محصولات</a><span>/</span><a href="${escape(catalogueUrl(product.categoryId))}">${escape(category?.title)}</a>
      ${product.kind !== "group" && modelBrand ? `<span>/</span><a href="${escape(catalogueUrl(product.categoryId, modelBrand.id))}">${escape(modelBrand.title)}</a><span>/</span><span aria-current="page">${escape(product.title)}</span>` : ""}</nav>
      <p class="eyebrow plain">${product.kind === "group" ? "معرفی گروه کالا" : "معرفی محصول"}</p><h1>${escape(product.title)}</h1>
      <p>${escape(product.tagline)}</p></div></section>
      <section class="container product-detail"><div class="gallery">
        ${
          photos.length
            ? `<div class="gallery-main"><img id="mainPhoto" src="${escape(photos[0].src)}" alt="${escape(photos[0].alt || product.title)}"></div>
        ${
          photos.length > 1
            ? `<div class="gallery-thumbs" aria-label="تصاویر محصول">${photos
                .map(
                  (photo, index) =>
                    `<button type="button" data-photo="${index}" aria-pressed="${index === 0}" aria-label="تصویر ${fa(index + 1)}">
          <img src="${escape(photo.src)}" alt="" loading="lazy"></button>`,
                )
                .join("")}</div>`
            : ""
        }`
            : `<div class="gallery-placeholder"><span aria-hidden="true">ϟ</span><p>تصاویر محصول به‌زودی اضافه می‌شود</p></div>`
        }
        <p class="gallery-caption">${product.kind === "group" ? "تصویر پس‌زمینه برای معرفی گروه کالا است." : "برای تأیید مدل و موجودی با فروشگاه تماس بگیرید."}</p>
      </div><div class="detail-copy"><p class="eyebrow plain">انتخاب آگاهانه، خرید مطمئن</p>
        <h2>درباره ${escape(product.kind === "group" ? category?.title : product.title)}</h2><p>${escape(product.description)}</p>
        ${product.brands?.length ? `<h3>${product.kind === "group" ? "انتخاب برند و مشاهده مدل‌ها" : "برند محصول"}</h3><div class="brand-tags">${brandLinks(product)}</div>` : ""}
        <div class="inquiry-panel"><h3>برای انتخاب مدل مناسب راهنمایی می‌خواهید؟</h3><p>مشخصات، قیمت و موجودی مدل موردنظر را از فروشگاه بپرسید.</p>
        <div class="modal-actions"><a class="button primary" href="tel:${shop.phone}">تماس با فروشگاه</a>
        <a class="button ghost" href="https://wa.me/${shop.whatsapp}?text=${inquiry}" target="_blank" rel="noreferrer">استعلام در واتس‌اپ ↗</a>
        <a class="text-link" href="contact.html?${escape(new URLSearchParams({ product: product.id }).toString())}">فرم درخواست ←</a></div></div>
      </div></section>
      <section class="container specifications"><h2>مشخصات فنی</h2>
      ${
        product.specs?.length
          ? `<dl class="spec-list">${product.specs
              .map(
                (spec) =>
                  `<div><dt>${escape(spec.label)}</dt><dd>${escape(spec.value)}</dd></div>`,
              )
              .join("")}</dl>`
          : `<p class="muted">مشخصات دقیق پس از انتخاب برند و مدل اعلام می‌شود. برای اطلاعات بیشتر با فروشگاه در تماس باشید.</p>`
      }
      </section><section class="container related-section"><div class="section-heading"><h2>بیشتر ببینید</h2>
      <a class="text-link" href="products.html">همه محصولات ←</a></div><div class="products-grid" id="relatedProducts"></div></section>`;
    setBackground($(".detail-banner"), category?.background);
    setBackground($(".gallery-placeholder"), category?.background);
    const related = [
      ...products.filter(
        (item) =>
          item.id !== product.id && item.categoryId === product.categoryId,
      ),
      ...products.filter(
        (item) =>
          item.id !== product.id && item.categoryId !== product.categoryId,
      ),
    ].slice(0, 3);
    $("#relatedProducts").innerHTML = related.map(card).join("");
    $(".gallery-thumbs")?.addEventListener("click", (event) => {
      const button = event.target.closest("[data-photo]");
      if (!button) return;
      const photo = photos[Number(button.dataset.photo)];
      const mainPhoto = $("#mainPhoto");
      mainPhoto.hidden = false;
      mainPhoto.parentElement.classList.remove("image-unavailable");
      mainPhoto.src = photo.src;
      mainPhoto.alt = photo.alt || product.title;
      document
        .querySelectorAll("[data-photo]")
        .forEach((item) =>
          item.setAttribute("aria-pressed", String(item === button)),
        );
    });
  }

  const form = $("#contactForm");
  if (form) {
    const product = findProduct(
      new URLSearchParams(location.search).get("product"),
    );
    if (product) form.elements.subject.value = "استعلام " + product.title;
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const params = new URLSearchParams({
        subject: data.get("subject") || "درخواست از سایت " + shop.name,
        body:
          "نام: " +
          data.get("name") +
          "\nتلفن: " +
          data.get("phone") +
          "\n\n" +
          data.get("message"),
      });
      window.location.href =
        "mailto:" + shop.email + "?" + params.toString().replace(/\+/g, "%20");
      $("#formStatus").textContent =
        "برای تکمیل ارسال، پیام را در برنامه ایمیل خود تأیید کنید.";
    });
  }
})();
