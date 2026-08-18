(function () {
  'use strict';

  /* Menu mobile */
  var hamburgerBtn = document.getElementById('hamburgerBtn');
  var mobileMenu = document.getElementById('mobileMenu');
  var mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
  var mobileMenuCloseBtn = document.getElementById('mobileMenuCloseBtn');

  function closeMenu() {
    mobileMenu.classList.remove('is-open');
    mobileMenuOverlay.classList.remove('is-open');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
  }

  function openMenu() {
    mobileMenu.classList.add('is-open');
    mobileMenuOverlay.classList.add('is-open');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
  }

  hamburgerBtn.addEventListener('click', function () {
    var isOpen = hamburgerBtn.getAttribute('aria-expanded') === 'true';
    if (isOpen) { closeMenu(); } else { openMenu(); }
  });

  mobileMenuOverlay.addEventListener('click', closeMenu);
  mobileMenuCloseBtn.addEventListener('click', closeMenu);

  mobileMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { closeMenu(); }
  });

  /* Animações de entrada — fade-in + translateY ao entrar no viewport */
  var revealEls = document.querySelectorAll('.reveal');

  revealEls.forEach(function (el) {
    var delay = el.getAttribute('data-delay');
    if (delay) { el.style.setProperty('--reveal-delay', delay + 'ms'); }
  });

  /* Alternância de modo claro/escuro */
  var themeToggle = document.getElementById('themeToggle');
  var rootEl = document.documentElement;

  themeToggle.addEventListener('click', function () {
    var isLight = rootEl.getAttribute('data-theme') === 'light';

    if (isLight) {
      rootEl.removeAttribute('data-theme');
      themeToggle.setAttribute('aria-pressed', 'false');
      themeToggle.setAttribute('aria-label', 'Ativar modo claro');
    } else {
      rootEl.setAttribute('data-theme', 'light');
      themeToggle.setAttribute('aria-pressed', 'true');
      themeToggle.setAttribute('aria-label', 'Ativar modo escuro');
    }
  });

  /* Carrossel de logos das empresas — trilha duplicada para loop contínuo */
  var logoTrack = document.getElementById('logoCarouselTrack');

  if (logoTrack) {
    var companyLogos = [
      { src: 'assets/logos/Logo1.png', alt: 'Sondartech Geotecnia' },
      { src: 'assets/logos/Logo2.png', alt: 'M.G.S. Empreendimentos' },
      { src: 'assets/logos/Logo3.jpeg', alt: 'Tactical Store RP' },
      { src: 'assets/logos/Logo4.png', alt: 'RGM Associados' },
      { src: 'assets/logos/Logo5.png', alt: 'Academia de Tiro de Rio Pomba' },
      { src: 'assets/logos/Logo6.png', alt: 'CasaPro' }
    ];

    function buildLogoSet(hiddenFromA11y) {
      var fragment = document.createDocumentFragment();

      companyLogos.forEach(function (logo) {
        var item = document.createElement('div');
        item.className = 'logo-carousel__item';

        var img = document.createElement('img');
        img.src = logo.src;
        img.alt = hiddenFromA11y ? '' : logo.alt;
        if (hiddenFromA11y) { img.setAttribute('aria-hidden', 'true'); }

        item.appendChild(img);
        fragment.appendChild(item);
      });

      return fragment;
    }

    logoTrack.appendChild(buildLogoSet(false));
    logoTrack.appendChild(buildLogoSet(true));
  }

  /* Nav ativa dinamicamente conforme o clique do usuário */
  var navLinks = document.querySelectorAll('.nav__link');
  var mobileNavLinks = document.querySelectorAll('.mobile-menu__link');

  function activateLink(clicked, group, activeClass) {
    group.forEach(function (link) {
      link.classList.remove(activeClass);
      link.removeAttribute('aria-current');
    });
    clicked.classList.add(activeClass);
    clicked.setAttribute('aria-current', 'page');
  }

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      activateLink(link, navLinks, 'nav__link--active');
    });
  });

  mobileNavLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      activateLink(link, mobileNavLinks, 'mobile-menu__link--active');
    });
  });

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* Contagem animada dos números de indicadores */
  var statNumbers = document.querySelectorAll('.stat__number');
  var prefersReducedMotion = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function animateCount(el) {
    var match = el.textContent.trim().match(/^(\D*)(\d+)(\D*)$/);
    if (!match) { return; }

    var prefix = match[1];
    var target = parseInt(match[2], 10);
    var suffix = match[3];

    if (prefersReducedMotion) {
      el.textContent = prefix + target + suffix;
      return;
    }

    var duration = 1600;
    var startTime = null;

    function step(timestamp) {
      if (startTime === null) { startTime = timestamp; }
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = prefix + Math.round(target * eased) + suffix;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = prefix + target + suffix;
      }
    }

    requestAnimationFrame(step);
  }

  if ('IntersectionObserver' in window && statNumbers.length) {
    var statObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var parentStat = entry.target.closest('.stat');
          var delay = parentStat ? parseInt(parentStat.getAttribute('data-delay'), 10) || 0 : 0;

          setTimeout(function () { animateCount(entry.target); }, delay);
          statObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });

    statNumbers.forEach(function (el) { statObserver.observe(el); });
  }

  /* Cursor mágico — círculo dourado que revela o texto ao passar por
     nomes, títulos e palavras-chave.
     A camada dourada ocupa a MESMA caixa do texto base (inset:0) e é
     recortada com clip-path — sem transforms aninhados a cancelar, então
     não há como o texto "saltar" de lugar. */
  function enhanceCursorText(el) {
    if (el.children.length > 0) { return; }

    var text = el.textContent;
    if (!text || !text.trim()) { return; }

    var width = el.offsetWidth;
    var height = el.offsetHeight;
    if (!width || !height) { return; }

    el.textContent = '';
    el.classList.add('cursor-reveal');

    var base = document.createElement('span');
    base.className = 'cursor-reveal__base';
    base.textContent = text;

    var clip = document.createElement('span');
    clip.className = 'cursor-reveal__clip';
    clip.setAttribute('aria-hidden', 'true');
    clip.textContent = text;

    el.appendChild(base);
    el.appendChild(clip);

    if (prefersReducedMotion) { return; }

    var diagonal = Math.sqrt((width * width) + (height * height));
    var targetRadius = Math.max(45, Math.ceil(diagonal * 0.62));

    var mouse = { x: width / 2, y: height / 2 };
    var current = { x: mouse.x, y: mouse.y, r: 0 };
    var goalRadius = 0;
    var rafId = null;

    function lerp(a, b, t) { return a + (b - a) * t; }

    function tick() {
      current.x = lerp(current.x, mouse.x, 0.26);
      current.y = lerp(current.y, mouse.y, 0.26);
      current.r = lerp(current.r, goalRadius, 0.22);

      clip.style.clipPath = 'circle(' + current.r + 'px at ' + current.x + 'px ' + current.y + 'px)';

      var settled = Math.abs(current.x - mouse.x) < 0.4 &&
        Math.abs(current.y - mouse.y) < 0.4 &&
        Math.abs(current.r - goalRadius) < 0.4;

      rafId = settled ? null : requestAnimationFrame(tick);
    }

    el.addEventListener('mouseenter', function (e) {
      var rect = el.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      current.x = mouse.x;
      current.y = mouse.y;
      goalRadius = targetRadius;
      if (!rafId) { rafId = requestAnimationFrame(tick); }
    });

    el.addEventListener('mousemove', function (e) {
      var rect = el.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      if (!rafId) { rafId = requestAnimationFrame(tick); }
    });

    el.addEventListener('mouseleave', function () {
      goalRadius = 0;
      if (!rafId) { rafId = requestAnimationFrame(tick); }
    });
  }

  document.querySelectorAll('.js-cursor-text').forEach(enhanceCursorText);
})();
