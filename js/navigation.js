document.getElementById('menu-toggle').addEventListener('click', function() {
  const nav = document.getElementById('site-navigation');
  const isExpanded = this.getAttribute('aria-expanded') === 'true';
  
  nav.classList.toggle('toggled');
  this.setAttribute('aria-expanded', !isExpanded);
});