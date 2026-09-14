/* Apply the saved theme before CSS loads, then wire up the header control.
 * Light is the default. localStorage is optional (some private/file viewers deny it).
 */
(() => {
  "use strict";
  const storageKey = "khalili-theme";
  const root = document.documentElement;
  let theme = "light";
  try {
    const saved = localStorage.getItem(storageKey);
    if (saved === "dark" || saved === "light") theme = saved;
  } catch {}

  function apply(value) {
    theme = value === "dark" ? "dark" : "light";
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
    document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
      const nextLabel = theme === "dark" ? "حالت روشن" : "حالت تاریک";
      button.setAttribute("aria-pressed", String(theme === "dark"));
      button.setAttribute("aria-label", "فعال کردن " + nextLabel);
      button.title = "فعال کردن " + nextLabel;
      const label = button.querySelector("[data-theme-label]");
      if (label) label.textContent = nextLabel;
    });
  }

  apply(theme);
  function setup() {
    document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
      button.hidden = false;
      button.addEventListener("click", () => {
        apply(theme === "dark" ? "light" : "dark");
        try { localStorage.setItem(storageKey, theme); } catch {}
      });
    });
    apply(theme);
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setup, { once: true });
  } else {
    setup();
  }

  // Keep other open pages in sync with a changed or cleared preference.
  window.addEventListener("storage", (event) => {
    if (event.key === storageKey || event.key === null) apply(event.newValue);
  });
})();
