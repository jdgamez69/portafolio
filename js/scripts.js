document.addEventListener('DOMContentLoaded', () => {
  // Year in footer
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Improve focus outline for keyboard users
  function handleFirstTab(e) {
    if (e.key === 'Tab') {
      document.body.classList.add('user-is-tabbing');
      window.removeEventListener('keydown', handleFirstTab);
    }
  }
  window.addEventListener('keydown', handleFirstTab);
});


document.querySelectorAll('.marquee-track').forEach(track => {
  // Si no está aún duplicado, duplica el contenido (A -> A+B)
  if (!track.dataset.cloned) {
    track.innerHTML = track.innerHTML + track.innerHTML;
    track.dataset.cloned = 'true';
  }
});