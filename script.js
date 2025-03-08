// js/script.js
document.addEventListener('DOMContentLoaded', () => {
  // Example: Smooth scrolling for internal links
  const links = document.querySelectorAll('nav ul li a');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
});