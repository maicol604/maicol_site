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
    page_title: 'Maicol Fariño — Software Engineer | GIS & AI | Portfolio',
    meta_description: 'Maicol Fariño — Software Engineer specializing in geospatial systems, intelligent traffic platforms, and AI-driven applications. 7+ years building scalable solutions for European urban transportation and smart city projects.',
    hero_subtitle: 'Software Engineer · GIS & Traffic Systems · AI Agents',
    hero_desc: 'Building scalable solutions at the intersection of geospatial data, traffic intelligence, and autonomous AI. I design clean, testable systems that solve real-world problems.',
    hero_cta_primary: 'View Projects',
    hero_cta_secondary: 'Get in Touch',
    hero_stat_years: 'Years Experience',
    hero_stat_projects: 'Projects Delivered',
    hero_stat_eu: 'Traffic Projects',
    hero_scroll: 'Scroll to explore',

    // About
    about_eyebrow: 'About Me',
    about_title_1: 'Engineering at the edge of ',
    about_title_2: 'maps',
    about_title_3: ' & ',
    about_title_4: 'intelligence',
    about_p1_combined: "I'm a Software Engineer specializing in <strong>geospatial systems</strong>, <strong>intelligent traffic platforms</strong>, and <strong>AI-driven applications</strong>. I've built GIS solutions for <strong>urban transportation projects across Europe</strong> — developing smart city applications that improve people's daily lives and transform how communities interact with public transit. From real-time traffic dashboards to predictive routing systems, I turn spatial data into tools that make cities move better.",
    about_p2_combined: "Currently, I'm deep in the <strong>AI ecosystem</strong> — designing agentic workflows, integrating LLMs into production systems, and building autonomous agents that reason, plan, and execute. Every line of code I write is kept <strong>clean, testable, and scalable</strong>.",
    badge_gis: 'GIS',
    badge_ai: 'AI Agents',
    badge_traffic: 'Traffic Systems',
    badge_fullstack: 'Full Stack',

    // Experience
    exp_eyebrow: 'Experience',
    exp_title_1: "Where I've made an ",
    exp_title_2: 'impact',
    exp_role_1: 'Senior Frontend Developer',
    exp_period_1: '2022 — 2023',
    exp_company_1: 'Overgroup',
    exp_desc_1: 'Led frontend development for enterprise web applications using React and modern JavaScript. Implemented responsive UI components, optimized performance, and collaborated with design teams to deliver pixel-perfect interfaces.',
    exp_role_2: 'Software Engineer — GIS & Traffic',
    exp_period_2: '2022 — Present',
    exp_company_2: 'European Infrastructure Projects',
    exp_desc_2: 'Developed geospatial processing pipelines and real-time traffic visualization systems for European infrastructure projects. Built map-based dashboards integrating GIS data with live traffic feeds, spatial analytics, and predictive routing algorithms.',
    exp_role_3: 'Backend Developer',
    exp_period_3: '2021 — 2022',
    exp_company_3: 'Freelance & Remote',
    exp_desc_3: 'Delivered end-to-end web applications for clients across Europe and the Americas. Specialized in RESTful API design, database modeling, server architecture, and WordPress custom integrations.',
    exp_role_4: 'UI/UX Designer & Senior Frontend Developer',
    exp_period_4: '2021 — 2022',
    exp_company_4: '4to Ángulo & Motivarnos',
    exp_desc_4: 'Designed and developed responsive web platforms from concept to deployment. Created UI/UX wireframes and prototypes, then built performant frontend architectures with React and modern CSS.',
    exp_role_5: 'Junior Frontend Developer',
    exp_period_5: '2017 — 2020',
    exp_company_5: 'Nelumbo Consultores',
    exp_desc_5: 'Built responsive websites and landing pages for diverse clients. Gained solid foundations in HTML, CSS, JavaScript, and WordPress theme development while collaborating in agile teams.',
    exp_role_6: 'Junior WordPress Developer',
    exp_period_6: '2018 — 2019',
    exp_company_6: 'Development Agency',
    exp_desc_6: 'Developed custom WordPress themes and plugins. Implemented responsive designs, optimized site performance, and integrated third-party APIs for enhanced functionality.',

    // Projects
    proj_eyebrow: 'Selected Work',
    proj_title_1: 'Projects that ',
    proj_title_2: 'matter',
    proj_view: 'View Project →',

    // Skills
    skills_eyebrow: 'Capabilities',
    skills_title_1: 'Tools & ',
    skills_title_2: 'Technologies',
    skill_gis: 'GIS & Geospatial',
    skill_ai: 'AI & Agents',
    skill_frontend: 'Frontend',
    skill_backend: 'Backend',
    skill_data: 'Data',
    skill_devops: 'DevOps & Tools',
    skill_mobile: 'Mobile Development',

    // Contact
    contact_eyebrow: 'Get in Touch',
    contact_title_1: "Let's build something ",
    contact_title_2: 'great',
    contact_title_3: ' together',
    contact_desc: "Whether you need a geospatial dashboard, an AI-powered application, or a scalable full-stack solution — I'm ready to jump in and deliver.",
    contact_email_label: 'Email',
    form_name: 'Name',
    form_name_placeholder: 'Your name',
    form_email: 'Email',
    form_email_placeholder: 'your@email.com',
    form_message: 'Message',
    form_message_placeholder: 'Tell me about your project...',
    form_submit: 'Send Message',

    // Footer
    footer_tagline: 'Software Engineer · GIS · AI',
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
    page_title: 'Maicol Fariño — Ingeniero de Software | GIS & IA | Portfolio',
    meta_description: 'Maicol Fariño — Ingeniero de Software especializado en sistemas geoespaciales, plataformas inteligentes de tráfico y aplicaciones impulsadas por IA. Más de 7 años construyendo soluciones escalables para transporte urbano en Europa y ciudades inteligentes.',
    hero_subtitle: 'Ingeniero de Software · GIS y Tráfico · Agentes de IA',
    hero_desc: 'Construyendo soluciones escalables en la intersección de datos geoespaciales, inteligencia de tráfico e IA autónoma. Diseño sistemas limpios y testeables que resuelven problemas reales.',
    hero_cta_primary: 'Ver Proyectos',
    hero_cta_secondary: 'Contactar',
    hero_stat_years: 'Años de Experiencia',
    hero_stat_projects: 'Proyectos Entregados',
    hero_stat_eu: 'Proyectos de Tráfico',
    hero_scroll: 'Desplaza para explorar',

    // About
    about_eyebrow: 'Sobre Mí',
    about_title_1: 'Ingeniería en la frontera de los ',
    about_title_2: 'mapas',
    about_title_3: ' y la ',
    about_title_4: 'inteligencia',
    about_p1_combined: 'Soy un Ingeniero de Software especializado en <strong>sistemas geoespaciales</strong>, <strong>plataformas inteligentes de tráfico</strong> y <strong>aplicaciones impulsadas por IA</strong>. He desarrollado soluciones GIS para <strong>proyectos de transporte urbano en Europa</strong> — creando aplicaciones para ciudades inteligentes que mejoran la vida diaria de las personas y transforman cómo las comunidades interactúan con el transporte público. Desde dashboards de tráfico en tiempo real hasta sistemas de enrutamiento predictivo, convierto datos espaciales en herramientas que hacen que las ciudades fluyan mejor.',
    about_p2_combined: 'Actualmente, estoy inmerso en el <strong>ecosistema de IA</strong> — diseñando flujos de trabajo agenticos, integrando LLMs en sistemas de producción y construyendo agentes autónomos que razonan, planifican y ejecutan. Cada línea de código que escribo se mantiene <strong>limpia, testeable y escalable</strong>.',
    badge_gis: 'GIS',
    badge_ai: 'Agentes IA',
    badge_traffic: 'Sistemas de Tráfico',
    badge_fullstack: 'Full Stack',

    // Experience
    exp_eyebrow: 'Experiencia',
    exp_title_1: 'Donde he dejado mi ',
    exp_title_2: 'huella',
    exp_role_1: 'Senior Frontend Developer',
    exp_period_1: '2022 — 2023',
    exp_company_1: 'Overgroup',
    exp_desc_1: 'Lideré el desarrollo frontend para aplicaciones web empresariales usando React y JavaScript moderno. Implementé componentes UI responsivos, optimicé el rendimiento y colaboré con equipos de diseño para entregar interfaces pixel-perfect.',
    exp_role_2: 'Ingeniero de Software — GIS y Tráfico',
    exp_period_2: '2022 — Presente',
    exp_company_2: 'Proyectos de Infraestructura Europea',
    exp_desc_2: 'Desarrollé pipelines de procesamiento geoespacial y sistemas de visualización de tráfico en tiempo real para proyectos de infraestructura europeos. Construí dashboards basados en mapas integrando datos GIS con feeds de tráfico en vivo, análisis espacial y algoritmos de enrutamiento predictivo.',
    exp_role_3: 'Desarrollador Backend',
    exp_period_3: '2021 — 2022',
    exp_company_3: 'Freelance y Remoto',
    exp_desc_3: 'Entregué aplicaciones web end-to-end para clientes en Europa y América. Especializado en diseño de APIs RESTful, modelado de bases de datos, arquitectura de servidores e integraciones personalizadas de WordPress.',
    exp_role_4: 'UI/UX Designer & Senior Frontend Developer',
    exp_period_4: '2021 — 2022',
    exp_company_4: '4to Ángulo & Motivarnos',
    exp_desc_4: 'Diseñé y desarrollé plataformas web responsivas desde el concepto hasta el despliegue. Creé wireframes y prototipos UI/UX, luego construí arquitecturas frontend de alto rendimiento con React y CSS moderno.',
    exp_role_5: 'Junior Frontend Developer',
    exp_period_5: '2017 — 2020',
    exp_company_5: 'Nelumbo Consultores',
    exp_desc_5: 'Construí sitios web responsivos y landing pages para diversos clientes. Adquirí bases sólidas en HTML, CSS, JavaScript y desarrollo de temas WordPress mientras colaboraba en equipos ágiles.',
    exp_role_6: 'Junior WordPress Developer',
    exp_period_6: '2018 — 2019',
    exp_company_6: 'Agencia de Desarrollo',
    exp_desc_6: 'Desarrollé temas y plugins personalizados de WordPress. Implementé diseños responsivos, optimicé el rendimiento de sitios e integré APIs de terceros para funcionalidades mejoradas.',

    // Projects
    proj_eyebrow: 'Trabajos Seleccionados',
    proj_title_1: 'Proyectos que ',
    proj_title_2: 'importan',
    proj_view: 'Ver Proyecto →',

    // Skills
    skills_eyebrow: 'Capacidades',
    skills_title_1: 'Herramientas y ',
    skills_title_2: 'Tecnologías',
    skill_gis: 'GIS y Geoespacial',
    skill_ai: 'IA y Agentes',
    skill_frontend: 'Frontend',
    skill_backend: 'Backend',
    skill_data: 'Datos',
    skill_devops: 'DevOps y Herramientas',
    skill_mobile: 'Desarrollo Móvil',

    // Contact
    contact_eyebrow: 'Contacto',
    contact_title_1: 'Construyamos algo ',
    contact_title_2: 'grandioso',
    contact_title_3: ' juntos',
    contact_desc: 'Ya sea que necesites un dashboard geoespacial, una aplicación impulsada por IA o una solución full stack escalable — estoy listo para entrar y entregar.',
    contact_email_label: 'Correo',
    form_name: 'Nombre',
    form_name_placeholder: 'Tu nombre',
    form_email: 'Correo',
    form_email_placeholder: 'tu@correo.com',
    form_message: 'Mensaje',
    form_message_placeholder: 'Cuéntame sobre tu proyecto...',
    form_submit: 'Enviar Mensaje',

    // Footer
    footer_tagline: 'Ingeniero de Software · GIS · IA',
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
