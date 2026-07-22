
const revealItems = document.querySelectorAll(
  '.feature-card, .overview-copy, .overview-visual, .download-card'
);

revealItems.forEach((item) => item.classList.add('reveal'));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

revealItems.forEach((item) => observer.observe(item));

const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
  nav.style.background =
    window.scrollY > 24
      ? 'rgba(13, 13, 18, .9)'
      : 'rgba(20, 20, 27, .74)';
});
