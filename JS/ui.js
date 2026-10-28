/* Progressive loading feedback. Content stays usable if JavaScript is unavailable. */
(() => {
  "use strict";
  const root = document.documentElement;
  root.classList.add("is-page-loading");
  const finishPage = () => root.classList.remove("is-page-loading");
  const pageTimeout = setTimeout(finishPage, 6000);
  window.addEventListener("pageshow", finishPage);

  function setup() {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const imageTimers = new WeakMap();
    const containerFor = (image) =>
      image.closest(".card-media, .gallery-main, .gallery-thumbs button");
    function finishImage(image) {
      clearTimeout(imageTimers.get(image));
      image.classList.remove("is-image-loading");
      const container = containerFor(image);
      if (container) {
        container.classList.remove("is-media-loading");
        container.removeAttribute("aria-busy");
      }
    }
    function watchImage(image) {
      if (!(image instanceof HTMLImageElement)) return;
      if (!containerFor(image)) return;
      finishImage(image);
      if (image.complete) return;
      image.classList.add("is-image-loading");
      const container = containerFor(image);
      container.classList.add("is-media-loading");
      container.setAttribute("aria-busy", "true");
      // A stalled connection must never leave a permanent overlay on content.
      imageTimers.set(
        image,
        setTimeout(() => finishImage(image), 8000),
      );
    }
    document.addEventListener(
      "load",
      (event) => {
        if (event.target instanceof HTMLImageElement) finishImage(event.target);
      },
      true,
    );
    document.addEventListener(
      "error",
      (event) => {
        if (event.target instanceof HTMLImageElement) finishImage(event.target);
      },
      true,
    );

    const revealObserver =
      "IntersectionObserver" in window
        ? new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.remove("reveal-pending");
                entry.target.classList.add("reveal-visible");
                revealObserver.unobserve(entry.target);
              });
            },
            { rootMargin: "0px 0px 60px 0px", threshold: 0 },
          )
        : null;
    function scan(node) {
      if (!(node instanceof Element)) return;
      if (node.matches("img")) watchImage(node);
      node.querySelectorAll("img").forEach(watchImage);
      const sections = node.matches("main > section")
        ? [node]
        : node.querySelectorAll("main > section");
      sections.forEach((section) => {
        if (
          !revealObserver ||
          reducedMotion.matches ||
          section.dataset.revealReady
        )
          return;
        section.dataset.revealReady = "true";
        if (section.getBoundingClientRect().top < window.innerHeight) return;
        section.classList.add("reveal-pending");
        revealObserver.observe(section);
      });
    }
    scan(document.body);
    new MutationObserver((records) => {
      records.forEach((record) => {
        if (record.type === "attributes") watchImage(record.target);
        else record.addedNodes.forEach(scan);
      });
    }).observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["src", "srcset"],
    });
    const showSections = () => {
      if (!reducedMotion.matches) return;
      revealObserver?.disconnect();
      document
        .querySelectorAll(".reveal-pending")
        .forEach((section) => section.classList.remove("reveal-pending"));
    };
    reducedMotion.addEventListener?.("change", showSections);
    clearTimeout(pageTimeout);
    requestAnimationFrame(() => {
      finishPage();
      root.classList.add("page-ready");
    });
  }
  if (document.readyState === "loading")
    document.addEventListener("DOMContentLoaded", setup, { once: true });
  else setup();
})();
