(function(){
  const lang = document.documentElement.lang === 'ru' ? 'ru' : 'he';
  const content = window.SiteContent ? window.SiteContent.getContent() : null;
  if(content){
    document.querySelectorAll('[data-content]').forEach(el => {
      const key = el.getAttribute('data-content');
      if(content[lang] && content[lang][key]) el.textContent = content[lang][key];
    });
    const metaDesc = document.querySelector('meta[name="description"]');
    if(metaDesc && content[lang].seoDescriptionHome && document.body.dataset.page === 'home'){
      metaDesc.setAttribute('content', content[lang].seoDescriptionHome);
      document.title = content[lang].seoTitleHome || document.title;
    }
    document.querySelectorAll('[data-phone]').forEach(a=>{
      a.textContent = content[lang].contactPhone;
      a.href = 'tel:' + content[lang].contactPhone.replace(/-/g,'');
    });
    document.querySelectorAll('[data-whatsapp]').forEach(a=>a.href = content[lang].whatsapp);
  }

  const menuBtn = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if(menuBtn && nav){
    menuBtn.addEventListener('click', ()=> nav.classList.toggle('open'));
  }

  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const msg = form.querySelector('.form-msg');
      if(msg){ msg.textContent = lang === 'he' ? 'הפרטים התקבלו בהצלחה. נחזור אליכם בהקדם.' : 'Данные получены. Мы свяжемся с вами в ближайшее время.'; }
      form.reset();
    });
  });
})();
