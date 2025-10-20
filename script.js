// Minimal JS: mobile nav + year + auto theme fallback
document.addEventListener('DOMContentLoaded', function () {
  // Year
  const y = new Date().getFullYear();
  document.getElementById('year').textContent = y;

  // Mobile nav toggle
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
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      const target = document.querySelector(a.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth',block:'start'});
        // close mobile nav
        if (window.innerWidth < 820) navLinks.style.display = '';
      }
    });
  });
});
