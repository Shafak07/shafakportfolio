// Minimal JS: mobile nav + year + auto theme fallback
document.addEventListener('DOMContentLoaded', function () {
  const y = new Date().getFullYear();
  document.getElementById('year').textContent = y;

  const toggle = document.getElementById('mobileToggle');
  const navLinks = document.querySelector('.nav-links');
  toggle && toggle.addEventListener('click', () => {
    if (navLinks.style.display === 'flex') {
      navLinks.style.display = '';
    } else {
      navLinks.style.display = 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.right = '16px';
      navLinks.style.top = '62px';
      navLinks.style.background = 'var(--card)';
      navLinks.style.padding = '12px';
      navLinks.style.borderRadius = '10px';
      navLinks.style.boxShadow = 'var(--shadow)';
    }
  });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (window.innerWidth < 820) navLinks.style.display = '';
      }
    });
  });
});
// Floating tilt + flip fix (cleaned up)
const bizCard = document.getElementById('bizCard');
if (bizCard) {
  let isFlipped = false;

  // Subtle tilt effect when hovering (disabled when flipped)
  bizCard.addEventListener('mousemove', e => {
    if (isFlipped) return;
    const rect = bizCard.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * 10;
    const rotateY = ((x / rect.width) - 0.5) * -10;
    bizCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  bizCard.addEventListener('mouseleave', () => {
    if (isFlipped) return;
    bizCard.style.transform = 'rotateX(0deg) rotateY(0deg)';
  });

  // Flip on click
  bizCard.addEventListener('click', () => {
    isFlipped = !isFlipped;
    bizCard.classList.toggle('flipped', isFlipped);
    // Reset inline transform so flip works properly
    if (isFlipped) bizCard.style.transform = '';
  });
}
