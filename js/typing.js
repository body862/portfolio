// Typing animation
const texts = [
  'Flutter Developer',
  'Mobile App Developer',
  'UI/UX Designer',
  'Clean Architecture Fan',
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const el = document.getElementById('typing-text');

function type() {
  const full = texts[textIndex];
  if (!isDeleting) {
    charIndex++;
    el.textContent = full.substring(0, charIndex);
    if (charIndex === full.length) {
      setTimeout(() => { isDeleting = true; }, 1500);
      setTimeout(type, 1600);
      return;
    }
  } else {
    charIndex--;
    el.textContent = full.substring(0, charIndex);
    if (charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
    }
  }
  setTimeout(type, isDeleting ? 50 : 80);
}

type();