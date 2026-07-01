// Floating particles background
const canvas = document.getElementById('particles-canvas');
const ctx = canvas.getContext('2d');

let particles = [];
const COLORS = ['#7C3AED', '#06B6D4', '#3B82F6'];

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function createParticle() {
  return {
    x: Math.random(),
    y: Math.random(),
    r: Math.random() * 2 + 0.5,
    o: Math.random() * 0.4 + 0.1,
    vx: (Math.random() - 0.5) * 0.0003,
    vy: (Math.random() - 0.5) * 0.0003,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
  };
}

function init() {
  resize();
  particles = Array.from({ length: 50 }, createParticle);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const W = canvas.width, H = canvas.height;

  particles.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;
    if (p.x < 0) p.x = 1;
    if (p.x > 1) p.x = 0;
    if (p.y < 0) p.y = 1;
    if (p.y > 1) p.y = 0;

    ctx.beginPath();
    ctx.arc(p.x * W, p.y * H, p.r, 0, Math.PI * 2);
    ctx.fillStyle = p.color + Math.round(p.o * 255).toString(16).padStart(2, '0');
    ctx.fill();
  });

  // Connection lines
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = (particles[i].x - particles[j].x) * W;
      const dy = (particles[i].y - particles[j].y) * H;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(124,58,237,${0.08 * (1 - dist / 120)})`;
        ctx.lineWidth = 0.5;
        ctx.moveTo(particles[i].x * W, particles[i].y * H);
        ctx.lineTo(particles[j].x * W, particles[j].y * H);
        ctx.stroke();
      }
    }
  }

  requestAnimationFrame(draw);
}

window.addEventListener('resize', resize);
init();
draw();