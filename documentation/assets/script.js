(function () {
  const links = document.querySelectorAll('.sidebar-nav .nav-link:not(.coming-soon)');
  const sections = Array.from(document.querySelectorAll('.view-section'));

  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      window.scrollTo({ top: target.offsetTop - 24, behavior: 'smooth' });
      history.replaceState(null, '', href);
    });
  });

  if ('IntersectionObserver' in window && sections.length) {
    const setActive = (id) => {
      links.forEach((l) => {
        l.classList.toggle('active', l.getAttribute('href') === '#' + id);
      });
    };
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
  }
})();
