/* ============================================
   INTERNATIONALIZATION (i18n)
   ============================================ */

const translations = {
  en: {
    // Nav
    nav_about: 'About',
    nav_experience: 'Experience',
    nav_projects: 'Projects',
    nav_skills: 'Skills',
    nav_contact: 'Contact',
    nav_cta: "Let's Talk",

    // Hero
    hero_badge: 'Available for work',
    hero_title_1: 'Maicol',
    hero_title_2: 'Fariño',
    page_title: 'Maicol Fariño — Software Engineer | Full Stack | Portfolio',
    meta_description: 'Maicol Fariño — Software Engineer with 9+ years of experience across the full stack. From frontend and mobile to backend architecture and DevOps. Built scalable solutions for European traffic systems, AI integrations, and enterprise platforms.',
    hero_subtitle: 'Software Engineer · Full Stack · Mobile & Web',
    hero_tagline: "Let's build something great together",
    hero_desc: "I'm a versatile Software Engineer who understands every layer of the stack — from frontend interfaces and mobile apps to backend architecture and DevOps pipelines. I design clean, testable systems that solve real-world problems.",
    hero_cta_primary: 'View Projects',
    hero_cta_secondary: 'Get in Touch',
    hero_stat_years: 'Years Experience',
    hero_stat_projects: 'Projects Delivered',
    hero_stat_eu: 'Countries Reached',
    hero_scroll: 'Scroll to explore',

    // About
    about_eyebrow: 'About Me',
    about_title_1: 'Engineering ',
    about_title_2: 'end-to-end',
    about_title_3: ' solutions',
    about_p1_combined: "I'm a Software Engineer who has worked across the entire software lifecycle — from pixel-perfect <strong>frontend interfaces</strong> and <strong>mobile applications</strong> to robust <strong>backend architectures</strong> and <strong>cloud infrastructure</strong>. Currently I'm contributing to European mobility and traffic projects, but my experience spans AI integrations, e-commerce platforms, real-time systems, and enterprise dashboards.",
    about_p2_combined: "I believe great software is built at the intersection of <strong>clean code</strong>, <strong>user experience</strong>, and <strong>solid architecture</strong>. Whether it's designing agentic workflows with LLMs, building microservices with NestJS, or crafting responsive UIs with React — every line I write is kept <strong>testable, scalable, and maintainable</strong>.",
    badge_gis: 'Full Stack',
    badge_ai: 'AI & LLMs',
    badge_traffic: 'Mobile & Web',
    badge_fullstack: 'Clean Architecture',
    about_languages_title: 'Languages',
    lang_es_label: 'Spanish',
    lang_native: 'Native',
    lang_en_label: 'English',
    lang_b2: 'B2 Intermediate',

    // Experience
    exp_eyebrow: 'Experience',
    exp_title_1: "Where I've made an ",
    exp_title_2: 'impact',
    exp_role_1: 'Senior Software Engineer — Full Stack R&D',
    exp_period_1: '2025 — Present',
    exp_company_1: 'Etra I+D · Valencia',
    exp_desc_1: "Leading R&D across the entire technology stack for world-class European traffic and mobility projects. Architecting scalable systems that process real-time data — from desktop analytics platforms and web scraping pipelines to mobile applications and responsive web dashboards used by traffic operators across Europe. Working with Angular, SASS, Docker, and hexagonal architecture in agile Scrum teams.",
    exp_role_2: 'Senior Frontend Developer — Angular',
    exp_period_2: 'Oct 2024 — Mar 2025',
    exp_company_2: 'Domain Logic SL · Madrid',
    exp_desc_2: 'Part of a team of 4 senior developers building mission-critical frontend systems for national security projects. Improved code practices through reviews and testing, promoted agile Scrum workflows, and delivered high-performance Angular applications with SASS following DDD and hexagonal architecture principles.',
    exp_role_3: 'Senior Frontend Developer',
    exp_period_3: 'Apr 2022 — Apr 2023',
    exp_company_3: 'Overgroup SAS · Remote',
    exp_desc_3: 'Led frontend development for enterprise web applications using React and Next.js. Managed a team of three developers with Jira and Scrum methodology, optimizing workflows and continuously improving development practices for pixel-perfect interfaces delivered with SASS and Figma.',
    exp_role_4: 'UI/UX Designer & Senior FullStack Developer',
    exp_period_4: 'Apr 2021 — Aug 2022',
    exp_company_4: '4to Ángulo · Remote',
    exp_desc_4: 'Responsible for frontend development and UI/UX design using React, creating interactive interfaces and Odoo integrations for business management. Implemented Docker containers for dev and production, used Kubernetes to orchestrate microservices deployments, and established a code review policy that significantly improved internal quality processes.',
    exp_role_5: 'Freelance FullStack Developer',
    exp_period_5: 'Jan 2019 — Jan 2024',
    exp_company_5: 'Workana & Independent · Remote',
    exp_desc_5: 'Multifaceted freelance developer specialized in React, Next.js, React Native, Ionic, Angular, NestJS, Google Apps Script, Laravel, SASS, PHP, WordPress, and Python. Led and collaborated on multiple projects with a focus on UI design using Figma and Adobe XD. Deployed and managed cloud applications using Azure and Kubernetes.',
    exp_role_6: 'Frontend Developer',
    exp_period_6: 'Oct 2021 — Sep 2022',
    exp_company_6: 'Gamification Project · Freelance',
    exp_desc_6: 'Developed the frontend with React for a workplace gamification application. Designed a landing page with WordPress to capture the essence of the product. Combined modern JavaScript with Node.js to deliver an engaging user experience focused on productivity and team engagement.',
    exp_role_7: 'Frontend Developer',
    exp_period_7: 'Jan 2017 — Jun 2018',
    exp_company_7: 'Nelumbo Consultores · Cúcuta, Colombia',
    exp_desc_7: 'Built responsive websites and interactive user interfaces with React and Angular. Created efficient, accessible frontend solutions optimizing performance and user experience. Contributed to project success while collaborating in agile teams.',
    exp_role_8: 'WordPress Developer',
    exp_period_8: 'Jan 2018 — Jun 2019',
    exp_company_8: 'Freelance',
    exp_desc_8: 'Created and customized advanced WordPress themes and plugins for clients across multiple market sectors. Delivered versatile, efficient solutions with HTML, CSS, JavaScript, and PHP — building a strong foundation in web development and client communication.',

    // Projects
    proj_eyebrow: 'Selected Work',
    proj_title_1: 'Projects that ',
    proj_title_2: 'matter',
    proj_view: 'View Project →',

    // Skills
    skills_eyebrow: 'Capabilities',
    skills_title_1: 'Tools & ',
    skills_title_2: 'Technologies',
    skill_languages: 'Languages & Frameworks',
    skill_web: 'Web Development',
    skill_frontend: 'Frontend',
    skill_backend: 'Backend',
    skill_data: 'Data & Storage',
    skill_devops: 'DevOps & Integrations',
    skill_mobile: 'Mobile & Testing',

    // Contact
    contact_eyebrow: 'Get in Touch',
    contact_title_1: "Let's build something ",
    contact_title_2: 'great',
    contact_title_3: ' together',
    contact_desc: "Whether you need a new web platform, a mobile application, an AI-powered solution, or a scalable full-stack system — I'm ready to jump in and deliver.",
    contact_email_label: 'Email',
    form_name: 'Name',
    form_name_placeholder: 'Your name',
    form_email: 'Email',
    form_email_placeholder: 'your@email.com',
    form_message: 'Message',
    form_message_placeholder: 'Tell me about your project...',
    form_submit: 'Send Message',

    // Footer
    footer_tagline: 'Software Engineer · Full Stack · Mobile & Web',
    footer_built: 'Engineered with stubborn curiosity & clean code ☕',

    // Lang selector
    lang_en: 'EN',
    lang_es: 'ES',
  },

  es: {
    // Nav
    nav_about: 'Sobre mí',
    nav_experience: 'Experiencia',
    nav_projects: 'Proyectos',
    nav_skills: 'Habilidades',
    nav_contact: 'Contacto',
    nav_cta: 'Hablemos',

    // Hero
    hero_badge: 'Disponible para trabajar',
    hero_title_1: 'Maicol',
    hero_title_2: 'Fariño',
    page_title: 'Maicol Fariño — Ingeniero de Software | Full Stack | Portfolio',
    meta_description: 'Maicol Fariño — Ingeniero de Software con más de 9 años de experiencia en todo el stack. Desde frontend y móvil hasta arquitectura backend y DevOps. Ha construido soluciones escalables para sistemas de tráfico europeos, integraciones de IA y plataformas empresariales.',
    hero_subtitle: 'Ingeniero de Software · Full Stack · Móvil y Web',
    hero_tagline: 'Construyamos algo grandioso juntos',
    hero_desc: 'Soy un Ingeniero de Software versátil que entiende cada capa del stack — desde interfaces frontend y apps móviles hasta arquitectura backend y pipelines DevOps. Diseño sistemas limpios y testeables que resuelven problemas reales.',
    hero_cta_primary: 'Ver Proyectos',
    hero_cta_secondary: 'Contactar',
    hero_stat_years: 'Años de Experiencia',
    hero_stat_projects: 'Proyectos Entregados',
    hero_stat_eu: 'Países Alcanzados',
    hero_scroll: 'Desplaza para explorar',

    // About
    about_eyebrow: 'Sobre Mí',
    about_title_1: 'Ingeniería de ',
    about_title_2: 'soluciones',
    about_title_3: ' completas',
    about_p1_combined: 'Soy un Ingeniero de Software que ha trabajado en todo el ciclo de vida del software — desde <strong>interfaces frontend</strong> y <strong>aplicaciones móviles</strong> hasta <strong>arquitecturas backend</strong> e <strong>infraestructura cloud</strong>. Actualmente contribuyo en proyectos europeos de movilidad y tráfico, pero mi experiencia abarca integraciones de IA, plataformas e-commerce, sistemas en tiempo real y dashboards empresariales.',
    about_p2_combined: 'Creo que el gran software se construye en la intersección del <strong>código limpio</strong>, la <strong>experiencia de usuario</strong> y la <strong>arquitectura sólida</strong>. Ya sea diseñando flujos agenticos con LLMs, construyendo microservicios con NestJS, o creando UIs responsivas con React — cada línea que escribo se mantiene <strong>testeable, escalable y mantenible</strong>.',
    badge_gis: 'Full Stack',
    badge_ai: 'IA & LLMs',
    badge_traffic: 'Móvil y Web',
    badge_fullstack: 'Clean Architecture',
    about_languages_title: 'Idiomas',
    lang_es_label: 'Español',
    lang_native: 'Nativo',
    lang_en_label: 'Inglés',
    lang_b2: 'B2 Intermedio',

    // Experience
    exp_eyebrow: 'Experiencia',
    exp_title_1: 'Donde he dejado mi ',
    exp_title_2: 'huella',
    exp_role_1: 'Senior Software Engineer — Full Stack R&D',
    exp_period_1: '2025 — Presente',
    exp_company_1: 'Etra I+D · Valencia',
    exp_desc_1: 'Lidero I+D en todo el stack tecnológico para proyectos europeos de tráfico y movilidad de clase mundial. Diseño arquitecturas escalables que procesan datos en tiempo real — desde plataformas de análisis de escritorio y pipelines de web scraping hasta aplicaciones móviles y dashboards web responsivos usados por operadores de tráfico en toda Europa. Trabajo con Angular, SASS, Docker y arquitectura hexagonal en equipos Scrum ágiles.',
    exp_role_2: 'Senior Frontend Developer — Angular',
    exp_period_2: 'Oct 2024 — Mar 2025',
    exp_company_2: 'Domain Logic SL · Madrid',
    exp_desc_2: 'Parte de un equipo de 4 desarrolladores senior construyendo sistemas frontend críticos para proyectos de seguridad nacional. Mejoré prácticas de código mediante revisiones y testing, promoví flujos de trabajo ágiles Scrum, y entregué aplicaciones Angular de alto rendimiento con SASS siguiendo principios de DDD y arquitectura hexagonal.',
    exp_role_3: 'Senior Frontend Developer',
    exp_period_3: 'Abr 2022 — Abr 2023',
    exp_company_3: 'Overgroup SAS · Remoto',
    exp_desc_3: 'Lideré el desarrollo frontend para aplicaciones web empresariales usando React y Next.js. Gestioné un equipo de tres desarrolladores con Jira y metodología Scrum, optimizando flujos de trabajo y mejorando continuamente las prácticas de desarrollo para entregar interfaces pixel-perfect con SASS y Figma.',
    exp_role_4: 'UI/UX Designer & Senior FullStack Developer',
    exp_period_4: 'Abr 2021 — Ago 2022',
    exp_company_4: '4to Ángulo · Remoto',
    exp_desc_4: 'Responsable del desarrollo frontend y diseño UI/UX usando React, creando interfaces interactivas e integraciones Odoo para gestión empresarial. Implementé contenedores Docker para desarrollo y producción, usé Kubernetes para orquestar despliegues de microservicios, y establecí una política de revisión de código que mejoró significativamente los procesos internos de calidad.',
    exp_role_5: 'Freelance FullStack Developer',
    exp_period_5: 'Ene 2019 — Ene 2024',
    exp_company_5: 'Workana & Independiente · Remoto',
    exp_desc_5: 'Desarrollador freelance multifacético especializado en React, Next.js, React Native, Ionic, Angular, NestJS, Google Apps Script, Laravel, SASS, PHP, WordPress y Python. Lideré y colaboré en múltiples proyectos con enfoque en diseño UI usando Figma y Adobe XD. Desplegué y administré aplicaciones en la nube con Azure y Kubernetes.',
    exp_role_6: 'Frontend Developer',
    exp_period_6: 'Oct 2021 — Sep 2022',
    exp_company_6: 'Proyecto Gamificación · Freelance',
    exp_desc_6: 'Desarrollé el frontend con React para una aplicación de gamificación laboral. Diseñé una landing page con WordPress para capturar la esencia del producto. Combiné JavaScript moderno con Node.js para entregar una experiencia de usuario atractiva enfocada en productividad y engagement de equipos.',
    exp_role_7: 'Frontend Developer',
    exp_period_7: 'Ene 2017 — Jun 2018',
    exp_company_7: 'Nelumbo Consultores · Cúcuta, Colombia',
    exp_desc_7: 'Construí sitios web responsivos e interfaces de usuario interactivas con React y Angular. Creé soluciones frontend eficientes y accesibles optimizando rendimiento y experiencia de usuario. Contribuí al éxito de los proyectos colaborando en equipos ágiles.',
    exp_role_8: 'WordPress Developer',
    exp_period_8: 'Ene 2018 — Jun 2019',
    exp_company_8: 'Freelance',
    exp_desc_8: 'Creé y personalicé temas y plugins avanzados de WordPress para clientes de múltiples sectores del mercado. Entregué soluciones versátiles y eficientes con HTML, CSS, JavaScript y PHP — construyendo una base sólida en desarrollo web y comunicación con clientes.',

    // Projects
    proj_eyebrow: 'Trabajos Seleccionados',
    proj_title_1: 'Proyectos que ',
    proj_title_2: 'importan',
    proj_view: 'Ver Proyecto →',

    // Skills
    skills_eyebrow: 'Capacidades',
    skills_title_1: 'Herramientas y ',
    skills_title_2: 'Tecnologías',
    skill_languages: 'Lenguajes y Frameworks',
    skill_web: 'Desarrollo Web',
    skill_frontend: 'Frontend',
    skill_backend: 'Backend',
    skill_data: 'Datos y Almacenamiento',
    skill_devops: 'DevOps e Integraciones',
    skill_mobile: 'Móvil y Testing',

    // Contact
    contact_eyebrow: 'Contacto',
    contact_title_1: 'Construyamos algo ',
    contact_title_2: 'grandioso',
    contact_title_3: ' juntos',
    contact_desc: 'Ya sea que necesites una nueva plataforma web, una aplicación móvil, una solución impulsada por IA, o un sistema full stack escalable — estoy listo para entrar y entregar.',
    contact_email_label: 'Correo',
    form_name: 'Nombre',
    form_name_placeholder: 'Tu nombre',
    form_email: 'Correo',
    form_email_placeholder: 'tu@correo.com',
    form_message: 'Mensaje',
    form_message_placeholder: 'Cuéntame sobre tu proyecto...',
    form_submit: 'Enviar Mensaje',

    // Footer
    footer_tagline: 'Ingeniero de Software · Full Stack · Móvil y Web',
    footer_built: 'Ingeniería con terquedad, café y código limpio ☕',

    // Lang selector
    lang_en: 'EN',
    lang_es: 'ES',
  }
};

/* ============================================
   I18N ENGINE
   ============================================ */

let currentLang = 'en';

function detectLanguage() {
  const saved = localStorage.getItem('portfolio-lang');
  if (saved && translations[saved]) return saved;
  
  const navLang = navigator.language || navigator.userLanguage || 'en';
  const short = navLang.split('-')[0];
  return translations[short] ? short : 'en';
}

function t(key) {
  const val = translations[currentLang]?.[key];
  return val !== undefined ? val : translations['en'][key] || key;
}

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('portfolio-lang', lang);
  document.documentElement.lang = lang === 'es' ? 'es' : 'en';
  updatePageContent();
  updateLangSelector();
}

function updatePageContent() {
  // Update all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = t(key);
    if (text !== undefined) {
      el.textContent = text;
    }
  });

  // Update elements with data-i18n-html (for innerHTML)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    const html = t(key);
    if (html !== undefined) {
      el.innerHTML = html;
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const text = t(key);
    if (text !== undefined) {
      el.placeholder = text;
    }
  });

  // Update aria-labels
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    const text = t(key);
    if (text !== undefined) {
      el.setAttribute('aria-label', text);
    }
  });

  // Update meta description
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute('content', t('meta_description'));
  }

  const metaTitle = document.querySelector('meta[name="title"]');
  if (metaTitle) {
    metaTitle.setAttribute('content', t('page_title'));
  }

  // Update title
  document.title = t('page_title');
}

function updateLangSelector() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const lang = btn.getAttribute('data-lang');
    if (lang === currentLang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

function initI18n() {
  currentLang = detectLanguage();
  document.documentElement.lang = currentLang === 'es' ? 'es' : 'en';
  updatePageContent();
  updateLangSelector();

  // Bind lang selector clicks
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      if (lang && lang !== currentLang) {
        setLanguage(lang);
      }
    });
  });

  // Notify other scripts that i18n is ready
  document.dispatchEvent(new Event('i18n-ready'));
}

// Run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initI18n);
} else {
  initI18n();
}
