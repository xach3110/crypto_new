export function initScrollReveal(options?: IntersectionObserverInit) {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    ...options,
  });

  // На всякий случай дождёмся DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', observeAll);
  } else {
    observeAll();
  }

  function observeAll() {
    document
      .querySelectorAll<HTMLElement>('.reveal')
      .forEach(el => observer.observe(el));
  }
}