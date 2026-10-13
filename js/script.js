document.addEventListener('DOMContentLoaded', () => {
  const btnModo = document.getElementById('btn-modo');
  const iconoModo = document.getElementById('icono-modo');
  const textoModo = document.getElementById('texto-modo');
  const logoNavbar = document.getElementById('logo-navbar');
  const htmlElement = document.documentElement;

  if (btnModo) {
    btnModo.addEventListener('click', () => {
      const temaActual = htmlElement.getAttribute('data-bs-theme');
      
      if (temaActual === 'dark') {
        // --- CAMBIAR A MODO CLARO ---
        htmlElement.setAttribute('data-bs-theme', 'light');
        
        // Cambiar ícono y texto del botón
        if (iconoModo) iconoModo.className = 'bi bi-moon-fill';
        if (textoModo) textoModo.textContent = 'Oscuro';
        
        // Cambiar el logo del navbar al ícono oscuro
        if (logoNavbar) logoNavbar.src = 'imagenes/icono.png';

      } else {
        // --- CAMBIAR A MODO OSCURO ---
        htmlElement.setAttribute('data-bs-theme', 'dark');
        
        // Cambiar ícono y texto del botón
        if (iconoModo) iconoModo.className = 'bi bi-sun-fill';
        if (textoModo) textoModo.textContent = 'Claro';
        
        // Cambiar el logo del navbar al ícono blanco
        if (logoNavbar) logoNavbar.src = 'imagenes/icono-blanco.svg';
      }
    });
  }
});