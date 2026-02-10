(function(){
  const modal = document.querySelector('[data-modal]');
  if(!modal) return;

  const modalImg = modal.querySelector('img');
  const closeBtn = modal.querySelector('[data-close]');
  const titleEl = modal.querySelector('[data-title]');

  function openModal(src, alt){
    modal.classList.add('open');
    modalImg.src = src;
    modalImg.alt = alt || '';
    if(titleEl) titleEl.textContent = alt || 'תמונה';
    document.body.style.overflow = 'hidden';
  }

  function closeModal(){
    modal.classList.remove('open');
    modalImg.src = '';
    document.body.style.overflow = '';
  }

  document.querySelectorAll('[data-thumb]').forEach(el=>{
    el.addEventListener('click', ()=>{
      const img = el.querySelector('img');
      openModal(img.getAttribute('src'), img.getAttribute('alt'));
    });
  });

  closeBtn && closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e)=>{
    if(e.target === modal) closeModal();
  });
  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });
})();
