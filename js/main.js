/**
 * José Queiroz — Advocacia & Consultoria Jurídica
 * main.js — Interações e integrações
 */

(function () {
  'use strict';

  /* ──────────────────────────────────────────
     INICIALIZAÇÃO — injeta conteúdo do data.js
  ────────────────────────────────────────── */
  Render.init(SITE);

  /* ──────────────────────────────────────────
     CALENDLY — URL vem de SITE.owner.calendly
  ────────────────────────────────────────── */
  (function () {
    var url    = 'https://calendly.com/' + SITE.owner.calendly;
    var params = '?hide_gdpr_banner=1&background_color=161614&text_color=f0ede7&primary_color=c49a4a';

    var widget = document.getElementById('cal-widget');
    if (widget) {
      widget.setAttribute('data-url', url + params);
      widget.style.height = '700px';
    }

    var fbLink = document.getElementById('cal-fb-link');
    if (fbLink) fbLink.href = url;
  })();

  /* ──────────────────────────────────────────
     SIDEBAR MOBILE
  ────────────────────────────────────────── */
  var sidebar = document.getElementById('sidebar');
  var overlay = document.getElementById('overlay');
  var ham     = document.getElementById('ham');
  var isOpen  = false;

  function openSidebar() {
    isOpen = true;
    sidebar.classList.add('open');
    overlay.classList.add('show');
    ham.setAttribute('aria-expanded', 'true');
    var spans = ham.querySelectorAll('span');
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity   = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  }

  function closeSidebar() {
    isOpen = false;
    sidebar.classList.remove('open');
    overlay.classList.remove('show');
    ham.setAttribute('aria-expanded', 'false');
    ham.querySelectorAll('span').forEach(function (s) {
      s.style.transform = '';
      s.style.opacity   = '1';
    });
  }

  ham.addEventListener('click', function () {
    isOpen ? closeSidebar() : openSidebar();
  });
  overlay.addEventListener('click', closeSidebar);

  /* ──────────────────────────────────────────
     SMOOTH SCROLL
  ────────────────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      if (isOpen) {
        closeSidebar();
        setTimeout(function () {
          target.scrollIntoView({ behavior: 'smooth' });
        }, 320);
      } else {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* ──────────────────────────────────────────
     SCROLL SPY — destaca link ativo no sidebar
  ────────────────────────────────────────── */
  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.sb-link');

  var spy = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        navLinks.forEach(function (link) {
          link.classList.toggle('active', link.dataset.s === entry.target.id);
        });
      }
    });
  }, { threshold: 0.25 });

  sections.forEach(function (sec) { spy.observe(sec); });

  /* ──────────────────────────────────────────
     FADE-IN AO ROLAR (seções fora do hero)
  ────────────────────────────────────────── */
  var animEls = document.querySelectorAll('section:not(#inicio) .anim');
  var animObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        animObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  animEls.forEach(function (el) { animObs.observe(el); });

  /* ──────────────────────────────────────────
     BLOG — toggle de artigos (event delegation)
  ────────────────────────────────────────── */
  function toggleArt(id) {
    var body   = document.getElementById(id);
    var btn    = document.getElementById('btn-' + id);
    var label  = document.getElementById('lbl-' + id);
    var open   = body.classList.toggle('open');
    var expand = String(open);

    btn.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', expand);
    label.textContent = open ? 'Fechar artigo' : 'Ler artigo completo';

    var header = document.querySelector('.art-header[data-art-toggle="' + id + '"]');
    if (header) header.setAttribute('aria-expanded', expand);
  }

  document.addEventListener('click', function (e) {
    var trigger = e.target.closest('[data-art-toggle]');
    if (trigger) toggleArt(trigger.dataset.artToggle);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    var trigger = e.target.closest('[data-art-toggle]');
    if (!trigger || trigger.tagName === 'BUTTON') return;
    e.preventDefault();
    trigger.click();
  });

  /* ──────────────────────────────────────────
     CALENDLY — fallback se não carregar
  ────────────────────────────────────────── */
  setTimeout(function () {
    var iframe   = document.querySelector('.cal-widget iframe');
    var fallback = document.getElementById('cal-fallback');
    if (!iframe && fallback) fallback.classList.add('show');
  }, 6000);

  /* ──────────────────────────────────────────
     FORMULÁRIO → WHATSAPP
     Template:
     "Olá Dr. José Queiroz, me chamo {{nome}},
      sou de {{cidade}}. Tenho interesse em
      fazer uma consulta sobre {{área}}.
      A situação: {{mensagem}}"
  ────────────────────────────────────────── */
  var sendBtn = document.getElementById('sbtn');
  if (sendBtn) {
    sendBtn.addEventListener('click', function () {
      var nome   = clean(document.getElementById('f-nome').value);
      var cidade = clean(document.getElementById('f-cidade').value);
      var area   = clean(document.getElementById('f-area').value);
      var msg    = clean(document.getElementById('f-msg').value);

      // Validação
      if (!nome) {
        showFeedback('Por favor, preencha seu nome.', 'err');
        return;
      }
      if (!msg) {
        showFeedback('Descreva brevemente sua situação no campo mensagem.', 'err');
        return;
      }

      var areaTexto   = area   || 'assuntos jurídicos';
      var cidadeTexto = cidade ? ', sou de ' + cidade : '';

      // Monta mensagem estruturada
      var texto =
        'Olá Dr. José Queiroz, me chamo ' + nome + cidadeTexto + '. '
        + 'Tenho interesse em fazer uma consulta/tirar dúvidas sobre a área de *' + areaTexto + '*.'
        + '\n\n*A situação:*\n'
        + msg;

      // Abre WhatsApp com mensagem pré-preenchida
      window.open(
        'https://wa.me/' + SITE.owner.phone + '?text=' + encodeURIComponent(texto),
        '_blank',
        'noopener,noreferrer'
      );
    });
  }

  /* ── Helpers ── */
  function showFeedback(text, cls) {
    var old = document.getElementById('fb');
    if (old) old.remove();

    var el = document.createElement('div');
    el.id        = 'fb';
    el.className = cls;
    el.textContent = text;

    var grid = document.getElementById('cform');
    if (grid) grid.querySelector('.fgrid').appendChild(el);

    setTimeout(function () { if (el.parentNode) el.remove(); }, 5000);
  }

  function clean(str) {
    return String(str || '')
      .replace(/<[^>]*>/g, '')
      .replace(/[<>"']/g, '')
      .trim()
      .slice(0, 500);
  }

  /* ──────────────────────────────────────────
     PROTEÇÃO DE IMAGENS
  ────────────────────────────────────────── */
  document.querySelectorAll('img').forEach(function (img) {
    img.setAttribute('draggable', 'false');
    img.addEventListener('contextmenu', function (e) { e.preventDefault(); });
  });

})();
