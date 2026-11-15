(() => {
  const config = window.CLEANING_CONFIG || {};
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  // Four-language interface: English (default), Russian, Armenian and Mexican Spanish.
  const translations = {
    en: {
      'Главная':'Home','О нас':'About','Услуги':'Services','Прайс':'Pricing','Отзывы':'Reviews','Контакты':'Contact','Заказать уборку':'Book a cleaning','ПРОФЕССИОНАЛЬНЫЙ КЛИНИНГ':'PROFESSIONAL CLEANING','Чистота. Комфорт. Забота о вас.':'Cleanliness. Comfort. Care for you.','Профессиональная уборка для вашего дома, офиса и бизнеса. Внимание к деталям — на каждом этапе.':'Professional cleaning for your home, office and business. Attention to detail at every step.','Узнать о нас':'About us','Забота о качестве':'Committed to quality','Каждая деталь имеет значение':'Every detail matters','ЛИСТАЙТЕ ВНИЗ':'SCROLL DOWN','Опытная команда':'Experienced team','Аккуратный подход':'Careful approach','Удобное время':'Convenient scheduling','Согласуем ваш график':'We work around your schedule','Понятные условия':'Clear terms','Стоимость до начала работ':'Price agreed in advance','Ереван и рядом':'Yerevan & nearby','Уточняйте район выезда':'Ask about service areas','О КОМПАНИИ':'ABOUT THE COMPANY','Больше, чем просто уборка':'More than just cleaning','Мы создаём чистое и комфортное пространство, в котором приятно жить и работать.':'We create clean, comfortable spaces where people love to live and work.','Cleaning Services — клининговый сервис для дома и бизнеса. Мы уделяем внимание пожеланиям клиента, подбираем подходящий формат уборки и заранее согласуем объём работ.':'Cleaning Services is a cleaning service for homes and businesses. We listen to your needs, recommend the right cleaning option and agree on the scope of work in advance.','Внимание к деталям':'Attention to detail','Аккуратная работа':'Careful work','Согласование до начала':'Agreed before we start','Удобная заявка онлайн':'Easy online booking','Обсудить уборку':'Discuss your cleaning','ЧТО МЫ ПРЕДЛАГАЕМ':'WHAT WE OFFER','Наши услуги':'Our services','Выберите нужный формат — мы поможем уточнить детали и рассчитать стоимость.':'Choose the service you need — we’ll help confirm the details and estimate the cost.','Квартиры и дома':'Homes & apartments','Поддерживающая уборка жилых помещений и забота о чистоте каждый день.':'Regular cleaning to keep your living space fresh every day.','Офисы и помещения':'Offices & commercial spaces','Чистое рабочее пространство для сотрудников, клиентов и партнёров.':'A clean workspace for employees, clients and partners.','Генеральная уборка':'Deep cleaning','Более детальная очистка поверхностей и труднодоступных зон.':'Detailed cleaning of surfaces and hard-to-reach areas.','Химчистка мебели':'Upholstery cleaning','Уход за мягкой мебелью, креслами и текстильными поверхностями.':'Care for sofas, armchairs and fabric surfaces.','Уборка после ремонта':'Post-construction cleaning','Удаление строительной пыли и подготовка помещения к использованию.':'Removing construction dust and preparing your space for use.','Мытьё окон':'Window cleaning','Очистка окон и стеклянных поверхностей от загрязнений и разводов.':'Cleaning windows and glass surfaces without streaks.','Заказать услугу':'Book this service','ПРОЗРАЧНЫЕ УСЛОВИЯ':'CLEAR, UPFRONT PRICING','Популярные форматы':'Popular packages','Стоимость ориентировочная. Точная цена зависит от площади, состояния помещения и объёма работ.':'Prices are estimates. The final cost depends on the area, condition and scope of work.','НА КАЖДЫЙ ДЕНЬ':'FOR EVERYDAY FRESHNESS','Поддерживающая':'Regular cleaning','Для регулярной чистоты':'For everyday cleanliness','от':'from','Пыль и поверхности':'Dusting and surfaces','Полы и санузел':'Floors and bathroom','Кухонные поверхности':'Kitchen surfaces','Выбрать формат':'Choose package','ГЛУБОКАЯ ЧИСТОТА':'A DEEPER CLEAN','ЧАСТО ВЫБИРАЮТ':'POPULAR CHOICE','Комплексная уборка':'Full-space cleaning','Детальная очистка зон':'Detailed cleaning of key areas','Труднодоступные места':'Hard-to-reach areas','НОВОЕ ПРОСТРАНСТВО':'A FRESH START','Подготовка к заселению':'Ready for move-in','Удаление строительной пыли':'Construction dust removal','Очистка поверхностей':'Surface cleaning','Мытьё окон по согласованию':'Window cleaning by request','* Цены приведены как пример оформления и должны быть подтверждены владельцем сервиса перед публикацией.':'* Prices are examples for layout purposes and must be confirmed by the service owner before publication.','МНЕНИЕ КЛИЕНТОВ':'CUSTOMER FEEDBACK','Нам важно ваше доверие':'Your trust matters','Здесь можно разместить реальные отзывы клиентов после получения их разрешения.':'Real customer reviews can be added here with their permission.','СДЕЛАЙТЕ ПЕРВЫЙ ШАГ':'TAKE THE FIRST STEP','Готовы к чистоте?':'Ready for a cleaner space?','Расскажите, какая уборка вам нужна. Мы поможем подобрать подходящий формат.':'Tell us what kind of cleaning you need. We’ll help find the right option.','Ереван, Армения · Район и время выезда согласуются отдельно':'Yerevan, Armenia · Service area and time by arrangement','Оставить заявку':'Request a quote','Заполните форму — подготовим сообщение для отправки в WhatsApp.':'Fill out the form and we’ll prepare a message for WhatsApp.','Заполнить заявку':'Fill out the form','Чистота начинается с нас.':'A cleaner space starts with us.','Навигация':'Navigation','О компании':'About the company','Связаться':'Get in touch','Мы на связи':'We’re here to help','Ответим на вопросы и поможем выбрать услугу.':'We’ll answer your questions and help you choose a service.','Написать нам →':'Message us →','Все права защищены.':'All rights reserved.','Наверх ↑':'Back to top ↑','ЗАЯВКА НА УБОРКУ':'CLEANING REQUEST','Расскажите, что нужно убрать':'Tell us what needs cleaning','Ваше имя':'Your name','Номер телефона':'Phone number','Услуга':'Service','Выберите услугу':'Choose a service','Комментарий':'Message','Площадь, район, желаемая дата и время':'Property size, area, preferred date and time','Подготовить заявку':'Prepare request','Форма подготовит текст заявки и откроет WhatsApp. Для отправки нужно указать действующий номер WhatsApp в файле config.js.':'The form prepares your request and opens WhatsApp. Add your active WhatsApp number in config.js to enable sending.','Закрыть окно':'Close window','Открылся WhatsApp с подготовленной заявкой. Нажмите «Отправить» в WhatsApp.':'WhatsApp opened with your request. Tap Send in WhatsApp.','Текст заявки скопирован. В config.js пока не указан номер WhatsApp компании.':'Your request was copied. The company WhatsApp number is not set in config.js yet.'
    },
    ru: {},
    hy: {
      'Главная':'Գլխավոր','О нас':'Մեր մասին','Услуги':'Ծառայություններ','Прайс':'Գներ','Отзывы':'Կարծիքներ','Контакты':'Կապ','Заказать уборку':'Պատվիրել մաքրում','ПРОФЕССИОНАЛЬНЫЙ КЛИНИНГ':'ՄԱՍՆԱԳԻՏԱԿԱՆ ՄԱՔՐՈՒՄ','Чистота. Комфорт. Забота о вас.':'Մաքրություն։ Հարմարավետություն։ Հոգատարություն։','Профессиональная уборка для вашего дома, офиса и бизнеса. Внимание к деталям — на каждом этапе.':'Մասնագիտական մաքրում ձեր տան, գրասենյակի և բիզնեսի համար։ Ուշադրություն յուրաքանչյուր մանրուքի։','Узнать о нас':'Մեր մասին','Забота о качестве':'Որակի նկատմամբ հոգատարություն','Каждая деталь имеет значение':'Յուրաքանչյուր մանրուք կարևոր է','О КОМПАНИИ':'ԸՆԿԵՐՈՒԹՅԱՆ ՄԱՍԻՆ','Больше, чем просто уборка':'Ավելին, քան պարզապես մաքրություն','Наши услуги':'Մեր ծառայությունները','Квартиры и дома':'Բնակարաններ և տներ','Офисы и помещения':'Գրասենյակներ և տարածքներ','Генеральная уборка':'Հիմնարար մաքրում','Химчистка мебели':'Կահույքի քիմմաքրում','Уборка после ремонта':'Վերանորոգումից հետո մաքրում','Мытьё окон':'Պատուհանների մաքրում','Заказать услугу':'Պատվիրել ծառայությունը','Популярные форматы':'Հանրաճանաչ փաթեթներ','Готовы к чистоте?':'Պատրա՞ստ եք մաքրության։','Оставить заявку':'Թողնել հայտ','Заполнить заявку':'Լրացնել հայտը','Навигация':'Նավիգացիա','Связаться':'Կապվել','Мы на связи':'Մենք կապի մեջ ենք','Ваше имя':'Ձեր անունը','Номер телефона':'Հեռախոսահամար','Услуга':'Ծառայություն','Комментарий':'Մեկնաբանություն','Подготовить заявку':'Պատրաստել հայտը','Выберите услугу':'Ընտրեք ծառայությունը','Закрыть окно':'Փակել պատուհանը'
    },
    'es-MX': {
      'Главная':'Inicio','О нас':'Nosotros','Услуги':'Servicios','Прайс':'Precios','Отзывы':'Opiniones','Контакты':'Contacto','Заказать уборку':'Reservar limpieza','ПРОФЕССИОНАЛЬНЫЙ КЛИНИНГ':'LIMPIEZA PROFESIONAL','Чистота. Комфорт. Забота о вас.':'Limpieza. Comodidad. Cuidamos de ti.','Профессиональная уборка для вашего дома, офиса и бизнеса. Внимание к деталям — на каждом этапе.':'Limpieza profesional para tu hogar, oficina o negocio. Cuidamos cada detalle.','Узнать о нас':'Conócenos','Забота о качестве':'Compromiso con la calidad','Каждая деталь имеет значение':'Cada detalle cuenta','О КОМПАНИИ':'SOBRE LA EMPRESA','Больше, чем просто уборка':'Mucho más que limpiar','Наши услуги':'Nuestros servicios','Квартиры и дома':'Casas y departamentos','Офисы и помещения':'Oficinas y locales','Генеральная уборка':'Limpieza profunda','Химчистка мебели':'Limpieza de tapicería','Уборка после ремонта':'Limpieza después de obra','Мытьё окон':'Limpieza de ventanas','Заказать услугу':'Contratar servicio','Популярные форматы':'Paquetes populares','Готовы к чистоте?':'¿Listo para disfrutar de la limpieza?','Оставить заявку':'Solicitar información','Заполнить заявку':'Llenar solicitud','Навигация':'Navegación','Связаться':'Contáctanos','Мы на связи':'Estamos para ayudarte','Ваше имя':'Tu nombre','Номер телефона':'Teléfono','Услуга':'Servicio','Комментарий':'Comentarios','Подготовить заявку':'Preparar solicitud','Выберите услугу':'Elige un servicio','Закрыть окно':'Cerrar ventana'
    }
  };
  // English is the default; Russian uses the original source wording.
  translations.ru = Object.fromEntries(Object.keys(translations.en).map(key => [key, key]));
  const languageSelect = document.querySelector('#language-select');
  const originalTextNodes = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    const value = node.nodeValue.trim();
    if (value) originalTextNodes.push({ node, original: value, leading: node.nodeValue.match(/^\s*/)?.[0] || '', trailing: node.nodeValue.match(/\s*$/)?.[0] || '' });
  }
  const applyLanguage = language => {
    const dictionary = translations[language] || translations.en;
    originalTextNodes.forEach(({node, original, leading, trailing}) => {
      if (node.isConnected) node.nodeValue = leading + (dictionary[original] || translations.en[original] || original) + trailing;
    });
    document.documentElement.lang = language === 'es-MX' ? 'es-MX' : language;
    languageSelect.value = language;
    localStorage.setItem('cleaning-services-language', language);
  };
  const savedLanguage = localStorage.getItem('cleaning-services-language') || 'en';
  applyLanguage(savedLanguage);
  languageSelect.addEventListener('change', () => applyLanguage(languageSelect.value));


  // Контактные данные берутся из config.js, чтобы их можно было изменить в одном месте.
  if (config.phoneDisplay) $$('[data-phone]').forEach(el => el.textContent = config.phoneDisplay);
  if (config.phoneLink) $$('[data-phone-link]').forEach(el => el.href = `tel:${config.phoneLink.replace(/[^+\d]/g, '')}`);
  $('#year').textContent = new Date().getFullYear();

  const menuButton = $('.menu-toggle');
  const nav = $('.nav');
  const closeMenu = () => {
    nav.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Открыть меню');
  };
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Закрыть меню' : 'Открыть меню');
  });
  $$('.nav a').forEach(link => link.addEventListener('click', () => {
    closeMenu();
    $$('.nav a').forEach(item => item.classList.toggle('active', item === link));
  }));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });

  const dialog = $('#booking-dialog');
  const serviceSelect = $('#service-select');
  const status = $('#form-status');
  $$('.open-booking').forEach(button => button.addEventListener('click', () => {
    const service = button.dataset.service;
    if (service) serviceSelect.value = service;
    status.textContent = '';
    if (typeof dialog.showModal === 'function') dialog.showModal();
    else dialog.setAttribute('open', '');
  }));
  $('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });

  $('#booking-form').addEventListener('submit', event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = Object.fromEntries(new FormData(form).entries());
    const message = [
      'Здравствуйте! Хочу заказать уборку в Cleaning Services.',
      `Имя: ${data.name}`,
      `Телефон: ${data.phone}`,
      `Услуга: ${data.service}`,
      data.message ? `Комментарий: ${data.message}` : ''
    ].filter(Boolean).join('\n');

    const number = String(config.whatsappNumber || '').replace(/\D/g, '');
    if (number.length >= 8) {
      const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank', 'noopener,noreferrer');
      status.textContent = 'Открылся WhatsApp с подготовленной заявкой. Нажмите «Отправить» в WhatsApp.';
    } else {
      // Не теряем заявку: копируем её текст, пока владелец не настроил номер WhatsApp.
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(message).then(() => {
          status.textContent = 'Текст заявки скопирован. В config.js пока не указан номер WhatsApp компании.';
        }).catch(() => { status.textContent = message; });
      } else {
        status.textContent = 'Добавьте реальный номер WhatsApp в config.js. Текст заявки: ' + message;
      }
    }
  });

  const reviews = [
    { name: 'Анна (пример отзыва)', role: 'Демонстрационный текст', avatar: 'А', text: '«Понравилось, что заранее обсудили все детали и объём уборки. Всё прошло спокойно и аккуратно.»' },
    { name: 'Давид (пример отзыва)', role: 'Демонстрационный текст', avatar: 'Д', text: '«Удобно, когда можно заранее согласовать время и список необходимых работ. Буду рад воспользоваться сервисом снова.»' },
    { name: 'Мария (пример отзыва)', role: 'Демонстрационный текст', avatar: 'М', text: '«Чистота и порядок помогают чувствовать себя дома комфортнее. Спасибо за внимательный подход!»' }
  ];
  let reviewIndex = 0;
  const renderReview = index => {
    reviewIndex = (index + reviews.length) % reviews.length;
    const review = reviews[reviewIndex];
    $('#review-name').textContent = review.name;
    $('#review-role').textContent = review.role;
    $('#review-avatar').textContent = review.avatar;
    $('#review-text').textContent = review.text;
    $$('#review-dots button').forEach((dot, i) => {
      dot.classList.toggle('selected', i === reviewIndex);
      dot.setAttribute('aria-pressed', String(i === reviewIndex));
    });
  };
  $('#prev-review').addEventListener('click', () => renderReview(reviewIndex - 1));
  $('#next-review').addEventListener('click', () => renderReview(reviewIndex + 1));
  $$('#review-dots button').forEach((dot, i) => dot.addEventListener('click', () => renderReview(i)));

  const topButton = $('#to-top');
  const updateTopButton = () => topButton.classList.toggle('visible', window.scrollY > 550);
  window.addEventListener('scroll', updateTopButton, { passive: true });
  updateTopButton();
  topButton.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // Плавная прокрутка по якорям, если пользователь не отключил анимации в системе.
  $$('a[href^="#"]').forEach(link => link.addEventListener('click', event => {
    const target = $(link.getAttribute('href'));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    history.replaceState(null, '', link.getAttribute('href'));
  }));
})();
