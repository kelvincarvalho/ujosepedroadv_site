/**
 * José Queiroz — Advocacia & Consultoria Jurídica
 * render.js — Injeta conteúdo do data.js no DOM
 *
 * Padrão: cada função recebe dados e retorna HTML string,
 * depois mount() coloca o HTML no container correto.
 * Nenhuma função aqui tem efeitos colaterais fora do DOM.
 */

'use strict';

const Render = (function () {

  /* ── Utilitários ──────────────────────────────────────────────── */

  /** Insere HTML dentro do elemento com o id fornecido. */
  function mount(id, html) {
    var el = document.getElementById(id);
    if (el) el.innerHTML = html;
  }

  /** Repete uma string n vezes. */
  function repeat(str, n) {
    var out = '';
    for (var i = 0; i < n; i++) out += str;
    return out;
  }

  /* ── Links dinâmicos (data-social) ───────────────────────────── */
  /**
   * Atualiza todos os elementos com atributos data-social no HTML.
   * Isso permite que links de WhatsApp, Instagram e LinkedIn
   * existam em múltiplos lugares (sidebar, contato, footer)
   * e todos sejam atualizados a partir de um único lugar: data.js
   *
   * Atributos suportados:
   *   data-social="whatsapp"   → href = wa.me/{phone}
   *   data-social="instagram"  → href = instagram.com/...
   *   data-social="linkedin"   → href = linkedin.com/...
   *   data-wa-msg="texto"      → adiciona ?text= na URL do WhatsApp
   *   data-phone-formatted     → textContent = phoneFormatted
   *   data-instagram-handle    → textContent = @handle
   *   data-linkedin-handle     → textContent = /in/handle
   *   data-owner-email         → href + textContent = e-mail
   */
  function updateLinks(owner) {
    document.querySelectorAll('[data-social="whatsapp"]').forEach(function (a) {
      var msg = a.dataset.waMsg || '';
      a.href = 'https://wa.me/' + owner.phone
        + (msg ? '?text=' + encodeURIComponent(msg) : '');
    });

    document.querySelectorAll('[data-social="instagram"]').forEach(function (a) {
      a.href = owner.instagram.url;
    });

    document.querySelectorAll('[data-social="linkedin"]').forEach(function (a) {
      a.href = owner.linkedin.url;
    });

    document.querySelectorAll('[data-phone-formatted]').forEach(function (el) {
      el.textContent = owner.phoneFormatted;
    });

    document.querySelectorAll('[data-instagram-handle]').forEach(function (el) {
      el.textContent = owner.instagram.handle;
    });

    document.querySelectorAll('[data-linkedin-handle]').forEach(function (el) {
      el.textContent = owner.linkedin.handle;
    });

    document.querySelectorAll('[data-owner-email]').forEach(function (el) {
      if (el.tagName === 'A') el.href = 'mailto:' + owner.email;
      el.textContent = owner.email;
    });
  }

  /* ── Marquee ──────────────────────────────────────────────────── */
  function marquee(items) {
    // Duplica os itens para o loop contínuo da animação CSS
    var all = items.concat(items);
    mount('marquee-track', all.map(function (text) {
      return '<span class="mq-item"><span class="mq-dot"></span>' + text + '</span>';
    }).join(''));
  }

  /* ── Serviços ─────────────────────────────────────────────────── */
  function services(list) {
    mount('svc-grid', '<div class="svcs anim d2">'
      + list.map(function (svc, i) {
        return '<div class="svc">'
          + '<span class="svc-n">' + String(i + 1).padStart(2, '0') + '</span>'
          + '<span class="svc-t">' + svc.title + '</span>'
          + '<p class="svc-d">' + svc.description + '</p>'
          + '</div>';
      }).join('')
      + '</div>');
  }

  /* ── Depoimentos ──────────────────────────────────────────────── */
  function testimonials(list) {
    mount('testimonials-grid', '<div class="deps anim d3">'
      + list.map(function (t) {
        return '<div class="dep">'
          + '<div class="dep-qm">"</div>'
          + '<div class="dep-stars">' + repeat('★', t.stars) + '</div>'
          + '<p class="dep-text">' + t.text + '</p>'
          + '<div class="dep-author">'
          +   '<div class="dep-av">' + t.initials + '</div>'
          +   '<div>'
          +     '<div class="dep-name">' + t.author + '</div>'
          +     '<div class="dep-role">' + t.role + '</div>'
          +   '</div>'
          + '</div>'
          + '</div>';
      }).join('')
      + '</div>');
  }

  /* ── Blog ─────────────────────────────────────────────────────── */
  function blog(posts) {
    mount('blog-list', '<div class="articles anim d2">'
      + posts.map(function (post, i) {
        var id = 'a' + (i + 1);
        return '<article class="art">'
          + '<div class="art-header" data-art-toggle="' + id + '"'
          +     ' role="button" tabindex="0" aria-expanded="false" aria-controls="' + id + '">'
          +   '<div>'
          +     '<div class="art-tag">' + post.tag + '</div>'
          +     '<div class="art-title">' + post.title + '</div>'
          +     '<div class="art-meta">Por <strong>' + post.author + '</strong> · OAB/PR 116.683</div>'
          +     '<p class="art-excerpt">' + post.excerpt + '</p>'
          +   '</div>'
          +   '<div class="art-sym" aria-hidden="true">§</div>'
          + '</div>'
          + '<div class="art-body" id="' + id + '">'
          +   '<div class="art-content">'
          +     post.paragraphs.map(function (p) { return '<p>' + p + '</p>'; }).join('')
          +     '<div class="art-conclusion">'
          +       '<div class="art-conclusion-label">Conclusão</div>'
          +       '<p>' + post.conclusion + '</p>'
          +     '</div>'
          +   '</div>'
          + '</div>'
          + '<div class="art-footer">'
          +   '<button class="art-btn" id="btn-' + id + '" data-art-toggle="' + id + '" aria-expanded="false">'
          +     '<span id="lbl-' + id + '">Ler artigo completo</span>'
          +     '<svg width="11" height="11" viewBox="0 0 24 24" fill="none"'
          +         ' stroke="currentColor" stroke-width="2.5" aria-hidden="true">'
          +       '<path d="M6 9l6 6 6-6"/>'
          +     '</svg>'
          +   '</button>'
          + '</div>'
          + '</article>';
      }).join('')
      + '</div>');
  }

  /* ── Seção Sobre ─────────────────────────────────────────────── */
  function highlights(list) {
    mount('sobre-highlights', '<div class="hls">'
      + list.map(function (text) {
        return '<div class="hl"><span class="hl-dot"></span>' + text + '</div>';
      }).join('')
      + '</div>');
  }

  function education(list) {
    mount('education-list', list.map(function (item) {
      return '<div class="fi">'
        + '<span class="fi-tipo">' + item.type + '</span>'
        + '<span class="fi-nome">' + item.name + '</span>'
        + '</div>';
    }).join(''));
  }

  function stats(list) {
    mount('sobre-stats', '<div class="sobre-stats">'
      + list.map(function (s) {
        var style = s.valueStyle ? ' style="' + s.valueStyle + '"' : '';
        return '<div>'
          + '<div class="ss-num"' + style + '>' + s.value + '</div>'
          + '<div class="ss-label">' + s.label + '</div>'
          + '</div>';
      }).join('')
      + '</div>');
  }

  /* ── Informações de contato ───────────────────────────────────── */
  function contactInfo(owner) {
    mount('contact-info-list',
      '<div class="ci-list">'
      + _ciItem('WhatsApp / Telefone',
          '<a href="https://wa.me/' + owner.phone + '" data-social="whatsapp"'
          + ' target="_blank" rel="noopener">' + owner.phoneFormatted + '</a>')
      + _ciItem('E-mail',
          '<a href="mailto:' + owner.email + '" data-owner-email>' + owner.email + '</a>')
      + _ciItem('Localização',
          '<strong>' + owner.location.city + '</strong><br>' + owner.location.detail)
      + _ciItem('Atendimento nacional', 'Escritório Digital · Google Meet · Zoom')
      + _ciItem('Horário', owner.hours)
      + '</div>');
  }

  function _ciItem(label, valueHtml) {
    return '<div>'
      + '<div class="ci-label">' + label + '</div>'
      + '<div class="ci-val">' + valueHtml + '</div>'
      + '</div>';
  }

  /* ── Áreas do formulário ─────────────────────────────────────── */
  function contactAreas(areas) {
    var sel = document.getElementById('f-area');
    if (!sel) return;
    sel.innerHTML = '<option value="">Selecione...</option>'
      + areas.map(function (a) { return '<option>' + a + '</option>'; }).join('');
  }

  /* ── Init — ponto de entrada único ──────────────────────────── */
  function init(data) {
    updateLinks(data.owner);
    marquee(data.marquee);
    services(data.services);
    testimonials(data.testimonials);
    blog(data.blog);
    highlights(data.owner.highlights);
    education(data.owner.education);
    stats(data.owner.stats);
    contactInfo(data.owner);
    contactAreas(data.contactAreas);
  }

  return { init: init };

})();
