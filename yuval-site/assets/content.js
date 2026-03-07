(function(){
  const STORAGE_KEY = 'yuval_site_content_v1';
  const defaultContent = {
    he: {
      brand: 'יובל ויינזוף - פנסיה ביטוח ופיננסים',
      heroTitle: 'בדקו תוך דקה אם הפנסיה והביטוחים שלכם מסודרים',
      heroSubtitle: 'בדיקה מקצועית של הפנסיה, הביטוחים והחסכונות כדי להבין כמה כסף באמת יהיה לכם בעתיד ואיפה אפשר לשפר.',
      ctaPrimary: 'בדיקת תיק פנסיוני',
      ctaSecondary: 'שליחת התיק לבדיקה',
      aboutShort: 'עם יותר מ־18 שנות ניסיון בעולם הפנסיה, הביטוח והפיננסים, יובל מלווה לקוחות בקבלת החלטות כלכליות שקולות, ברורות ואחראיות.',
      servicesTitle: 'שירותים מרכזיים',
      leadMagnetTitle: '5 טעויות בפנסיה ובביטוחים שעולות לאנשים מאות אלפי שקלים',
      faqTitle: 'שאלות נפוצות',
      contactEmail: 'info@yuval-finance.co.il',
      contactPhone: '052-4520222',
      whatsapp: 'https://wa.me/972524520222',
      seoTitleHome: 'יובל ויינזוף | פנסיה ביטוח ופיננסים',
      seoDescriptionHome: 'בדיקת פנסיה, ביטוחים וחסכונות עם יובל ויינזוף – ייעוץ מקצועי, שקיפות מלאה וליווי פיננסי ארוך טווח.'
    },
    ru: {
      brand: 'Юваль Вайнзоф — Пенсия, страхование и финансы',
      heroTitle: 'Проверьте за минуту, в порядке ли ваша пенсия и страховки',
      heroSubtitle: 'Профессиональная проверка пенсии, страхования и накоплений, чтобы понять ваш финансовый будущий результат и где можно улучшить.',
      ctaPrimary: 'Проверка пенсионного портфеля',
      ctaSecondary: 'Отправить документы на проверку',
      aboutShort: 'Более 18 лет опыта в страховании и финансах: Юваль помогает клиентам принимать понятные и выгодные решения на долгий срок.',
      servicesTitle: 'Основные услуги',
      leadMagnetTitle: '5 ошибок в пенсии и страховании, которые стоят сотни тысяч шекелей',
      faqTitle: 'Частые вопросы',
      contactEmail: 'info@yuval-finance.co.il',
      contactPhone: '052-4520222',
      whatsapp: 'https://wa.me/972524520222',
      seoTitleHome: 'Юваль Вайнзоф | Пенсия, страхование и финансы',
      seoDescriptionHome: 'Проверка пенсии, страховок и накоплений в Израиле с Ювалем Вайнзофом. Прозрачность и долгосрочное финансовое сопровождение.'
    }
  };

  function getContent(){
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if(!raw) return structuredClone(defaultContent);
      return Object.assign(structuredClone(defaultContent), JSON.parse(raw));
    } catch(e){
      return structuredClone(defaultContent);
    }
  }

  function saveContent(content){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
  }

  window.SiteContent = { STORAGE_KEY, defaultContent, getContent, saveContent };
})();
