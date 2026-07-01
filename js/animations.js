// Scroll reveal animations
const revealEls = document.querySelectorAll(
  '.stat-card, .timeline-card, .project-card, .cert-card, .edu-card, .about-text, .about-stats, .contact-card'
);

revealEls.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
    }
  });
}, { threshold: 0.1 });

revealEls.forEach(el => revealObserver.observe(el));