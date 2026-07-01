// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile menu toggle
const toggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  toggle.querySelector('i').className =
    navLinks.classList.contains('open') ? 'fas fa-times' : 'fas fa-bars';
});

// Close menu on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    toggle.querySelector('i').className = 'fas fa-bars';
  });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Scroll to top button
const scrollBtn = document.createElement('button');
scrollBtn.id = 'scroll-top';
scrollBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
scrollBtn.style.cssText = `
  position: fixed; bottom: 32px; right: 32px;
  width: 48px; height: 48px; border-radius: 50%;
  background: linear-gradient(135deg, #7C3AED, #06B6D4);
  border: none; color: #fff; font-size: 18px;
  cursor: pointer; z-index: 999;
  box-shadow: 0 4px 20px rgba(124,58,237,0.4);
  opacity: 0; transition: opacity 0.3s ease, transform 0.3s ease;
  display: flex; align-items: center; justify-content: center;
`;
document.body.appendChild(scrollBtn);

window.addEventListener('scroll', () => {
  scrollBtn.style.opacity = window.scrollY > 400 ? '1' : '0';
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});