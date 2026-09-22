(() => {
  const control = document.querySelector('[data-back-to-top]');
  if (!control) return;
  const article = document.querySelector('.reading-page');
  const update = () => {
    // Measure content before the control to avoid visibility changing its own threshold.
    const bottom = article.getBoundingClientRect().bottom + window.scrollY;
    control.hidden = bottom <= window.innerHeight;
  };
  update();
  window.addEventListener('resize', update, { passive: true });
  if ('ResizeObserver' in window) new ResizeObserver(update).observe(article);
  if (document.fonts) document.fonts.ready.then(update);
})();
