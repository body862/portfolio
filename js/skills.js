// Animated skill circles
const svgDefs = `
<svg style="position:absolute;width:0;height:0">
  <defs>
    <linearGradient id="skillGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#7C3AED"/>
      <stop offset="100%" style="stop-color:#06B6D4"/>
    </linearGradient>
  </defs>
</svg>`;
document.body.insertAdjacentHTML('afterbegin', svgDefs);

const CIRCUMFERENCE = 2 * Math.PI * 50;

function animateSkills() {
  document.querySelectorAll('.skill-item').forEach((item, i) => {
    const percent = parseInt(item.dataset.percent);
    const circle = item.querySelector('.progress');
    const pctEl = item.querySelector('.skill-pct');
    const offset = CIRCUMFERENCE - (percent / 100) * CIRCUMFERENCE;

    setTimeout(() => {
      circle.style.strokeDashoffset = offset;

      let current = 0;
      const step = percent / 60;
      const timer = setInterval(() => {
        current = Math.min(current + step, percent);
        pctEl.textContent = Math.round(current) + '%';
        if (current >= percent) clearInterval(timer);
      }, 1000 / 60);
    }, i * 100);
  });
}

// Trigger when skills section is visible
const skillsSection = document.getElementById('skills');
let skillsAnimated = false;

const skillsObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting && !skillsAnimated) {
    skillsAnimated = true;
    animateSkills();
  }
}, { threshold: 0.2 });

skillsObserver.observe(skillsSection);