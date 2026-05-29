/* ============================================
   THEME / DARK MODE
   ============================================ */

function initTheme() {
  const saved = localStorage.getItem('portfolio-theme');
  const theme = saved || 'light';
  setTheme(theme, false);

  document.getElementById('theme-toggle')?.addEventListener('click', () => toggleTheme());
  document.getElementById('mobile-theme-toggle')?.addEventListener('click', () => toggleTheme());
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  setTheme(next, true);
}

function setTheme(theme, save) {
  document.documentElement.setAttribute('data-theme', theme);
  document.querySelectorAll('.theme-toggle').forEach(btn => {
    btn.setAttribute('data-theme', theme);
  });
  if (save) {
    localStorage.setItem('portfolio-theme', theme);
  }
}

/* ============================================
   NAVIGATION
   ============================================ */
const nav = document.getElementById('nav');
const navToggle = document.getElementById('nav-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');

// Sticky nav background on scroll
function handleNavScroll() {
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', handleNavScroll, { passive: true });

// Mobile menu toggle
function toggleMobileMenu() {
  const isOpen = mobileMenu.classList.contains('active');
  
  if (isOpen) {
    mobileMenu.classList.remove('active');
    navToggle.classList.remove('active');
    document.body.style.overflow = '';
  } else {
    mobileMenu.classList.add('active');
    navToggle.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

navToggle.addEventListener('click', toggleMobileMenu);

// Close mobile menu on link click
mobileMenuLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    navToggle.classList.remove('active');
    document.body.style.overflow = '';
  });
});

// Close mobile menu on escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
    toggleMobileMenu();
  }
});

/* ============================================
   SMOOTH SCROLL (with offset for fixed nav)
   ============================================ */
const navLinks = document.querySelectorAll('.nav-link, .btn[href^="#"]');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const navHeight = nav.offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight - 20;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }
  });
});

/* ============================================
   SCROLL REVEAL (IntersectionObserver)
   ============================================ */
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -40px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));

/* ============================================
   ACTIVE NAV LINK (highlight current section)
   ============================================ */
const sections = document.querySelectorAll('section[id]');

function highlightActiveNav() {
  const scrollPos = window.scrollY + nav.offsetHeight + 100;
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    
    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', highlightActiveNav, { passive: true });

/* ============================================
   CONTACT FORM
   ============================================ */
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  // Create mailto link
  const subject = encodeURIComponent(`Contact from ${name} via Portfolio`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
  const mailtoLink = `mailto:maicol.fdev@gmail.com?subject=${subject}&body=${body}`;
  
  window.location.href = mailtoLink;
  
  // Reset form
  contactForm.reset();
});

/* ============================================
   TYPING EFFECT (Hero subtitle)
   Runs after i18n has translated the text
   ============================================ */
function initTypingEffect() {
  const subtitle = document.querySelector('.hero-subtitle');
  if (!subtitle) return;
  
  const text = subtitle.textContent;
  subtitle.textContent = '';
  subtitle.style.opacity = '1';
  
  let i = 0;
  const speed = 35;
  
  function type() {
    if (i < text.length) {
      subtitle.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  // Start after a brief delay
  setTimeout(type, 400);
}

/* ============================================
   INITIALIZATION
   ============================================ */
initTheme();

document.addEventListener('i18n-ready', () => {
  // Re-observe reveal elements after i18n has updated content
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => {
    revealObserver.observe(el);
  });

  // Only run typing effect on larger screens
  if (window.innerWidth >= 768) {
    initTypingEffect();
  }

  // Start hero video animation loop
  initHeroVideo();
});

/* ============================================
   HERO VIDEO ANIMATION
   Forward → Pause → Reverse → Loop
   ============================================ */
function initHeroVideo() {
  const video = document.querySelector('.hero-image');
  if (!video || video.tagName !== 'VIDEO') return;

  // Respect reduced motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    video.pause();
    video.currentTime = 0;
    return;
  }

  const PAUSE_AT_END = 2500;   // ms to hold on last frame
  const PAUSE_AT_START = 800;  // ms to hold on first frame

  function playForward() {
    video.playbackRate = 1;
    video.play().catch(() => {});

    video.onended = () => {
      video.pause();
      setTimeout(() => {
        playReverse();
      }, PAUSE_AT_END);
    };
  }

  function playReverse() {
    video.pause();
    video.onended = null;

    let lastTime = performance.now();

    function step(now) {
      const delta = (now - lastTime) / 1000;
      lastTime = now;

      video.currentTime = Math.max(0, video.currentTime - delta);

      if (video.currentTime <= 0) {
        video.currentTime = 0;
        setTimeout(() => {
          playForward();
        }, PAUSE_AT_START);
        return;
      }

      requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }

  if (video.readyState >= 1) {
    playForward();
  } else {
    video.addEventListener('loadedmetadata', playForward, { once: true });
  }
}

/* ============================================
   CONSOLE SIGNATURE
   ============================================ */
console.log(
  '%c Maicol Fariño ',
  'background: #0a0a0a; color: #2563eb; font-size: 16px; font-weight: bold; padding: 8px 16px; border-radius: 4px;'
);
console.log(
  '%c Software Engineer · GIS · AI ',
  'color: #6b7280; font-size: 12px;'
);
