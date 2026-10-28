document.addEventListener('DOMContentLoaded', () => {

  /* ============ MODAL PDF ============ */
  const modal      = document.getElementById('pdfModal');
  const pdfFrame   = document.getElementById('pdfFrame');
  const modalTitle = document.getElementById('modalTitle');

  function openPdf(url, title = 'Documento PDF') {
    pdfFrame.src = url + '#toolbar=1&navpanes=0&view=FitH';
    modalTitle.textContent = title;
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closePdf() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    pdfFrame.src = '';
    document.body.style.overflow = '';
  }

  // Botones que abren PDFs
  document.querySelectorAll('.btn-pdf').forEach(btn => {
    btn.addEventListener('click', () => {
      const url = btn.dataset.pdf;
      const title = btn.textContent.trim();
      openPdf(url, title);
    });
  });

  // Cerrar modal
  document.querySelectorAll('[data-close-modal]').forEach(el => {
    el.addEventListener('click', closePdf);
  });

  // Cerrar con Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('active')) closePdf();
  });

  /* ============ ANIMACIÓN DE BARRAS DE SKILLS ============ */
  const bars = document.querySelectorAll('.fill');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const w = entry.target.style.width;
        entry.target.style.width = '0';
        setTimeout(() => entry.target.style.width = w, 100);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  bars.forEach(bar => observer.observe(bar));

  /* ==========================================================
     🔧 EDITA AQUÍ TUS DATOS PERSONALES FÁCILMENTE
     ========================================================== */
  const DATOS = {
    nombre:    'Tu Nombre',
    cargo:     'Tu Cargo Profesional',
    email:     'tucorreo@email.com',
    telefono:  '+00 000 000 000',
    ubicacion: 'Tu Ciudad, País',
    linkedin:  'https://linkedin.com/in/tu-perfil',
    github:    'https://github.com/tu-usuario',
    perfil:    'Desarrollador apasionado con experiencia en la creación de aplicaciones web modernas. Enfocado en escribir código limpio, buenas prácticas y en ofrecer soluciones efectivas que aporten valor al negocio.'
  };

  // Aplica los datos al DOM automáticamente
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('nombre', DATOS.nombre);
  set('cargo', DATOS.cargo);
  set('email', DATOS.email);
  set('telefono', DATOS.telefono);
  set('ubicacion', DATOS.ubicacion);
  set('perfil', DATOS.perfil);

  const lnkIn = document.getElementById('linkedin');
  if (lnkIn) { lnkIn.href = DATOS.linkedin; lnkIn.textContent = DATOS.linkedin.replace('https://', ''); }

  const lnkGh = document.getElementById('github');
  if (lnkGh) { lnkGh.href = DATOS.github; lnkGh.textContent = DATOS.github.replace('https://', ''); }

});
