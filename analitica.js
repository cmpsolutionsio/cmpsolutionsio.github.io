/* Analítica de cmpsolutions.info con Google Analytics 4.
   Va en el <head> de cada página: <script src="/analitica.js" defer></script>
   Plan de medición (qué evento, cuándo y con qué parámetros): _docs/plan-de-medicion.md

   Lo que mide este archivo vale para cualquier página:
   - vista de página
   - secciones vistas
   - scroll
   - tiempo activo
   - clics a CTA, WhatsApp y links internos
   - preguntas frecuentes
   - origen de la visita (UTM)
   Los eventos propios de la home (demo, precios, checklist, formulario) están en el <script> de index.html y usan window.cmpTrack. */
(function(){
  'use strict';
  /* CONFIGURAR: ID de medición de GA4 (Administrar > Flujos de datos > Web). Vacío = no se mide nada. */
  var GA_ID = '';

  /* Las pruebas en la compu van con debug_mode: se ven en GA4 > Administrar > DebugView y no ensucian los informes.
     En la consola del navegador se lista cada evento. En archivo local (file://) no se manda nada. */
  var local = /^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname) || /\.(localhost|test)$/.test(location.hostname);
  var activo = !!GA_ID && /^https?:$/.test(location.protocol);

  window.dataLayer = window.dataLayer || [];
  function gtag(){ window.dataLayer.push(arguments); }

  var store = {
    get: function(k){ try { return localStorage.getItem(k); } catch(e){ return null; } },
    set: function(k, v){ try { localStorage.setItem(k, v); } catch(e){} }
  };
  /* Id al azar del visitante (el mismo que viaja con cada lead a la planilla). Sirve para cruzar un lead con su recorrido en GA4. */
  var vid = store.get('v_id');
  if (!vid) { vid = Date.now().toString(36) + Math.random().toString(36).slice(2, 8); store.set('v_id', vid); }

  function track(ev, params){
    params = params || {};
    if (local) { try { console.info('[analítica]', ev, JSON.stringify(params)); } catch(e){} }
    if (activo) gtag('event', ev, params);
  }
  window.cmpTrack = track;

  if (activo) {
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA_ID);
    document.head.appendChild(s);
    gtag('js', new Date());
    gtag('set', 'user_properties', { visitante: vid });
    var cfg = {};
    if (local) cfg.debug_mode = true; /* debug_mode: false también activa el modo debug; por eso solo se agrega en local */
    gtag('config', GA_ID, cfg);
  }

  /* Origen de la visita. GA4 lo toma solo (UTM y sitio de origen); esto es para que cada lead llegue a la planilla con su origen.
     visita = cómo llegó en esta sesión (se fija en la primera página que ve); primera = cómo llegó la primera vez (queda guardada en el navegador). */
  var utm = {}, interno = false, ref = '';
  try { var q = new URLSearchParams(location.search); ['source', 'medium', 'campaign', 'content', 'term'].forEach(function(k){ utm[k] = (q.get('utm_' + k) || '').slice(0, 100); }); } catch(e){}
  try { if (document.referrer) { var r = new URL(document.referrer); if (r.host === location.host) interno = true; else ref = r.hostname; } } catch(e){}
  var visita = (utm.source ? [utm.source, utm.medium, utm.campaign, utm.content, utm.term] : [ref || 'directo', ref ? 'referido' : ''])
    .filter(function(x){ return x; }).join(' / ');
  var sesion = { get: function(k){ try { return sessionStorage.getItem(k); } catch(e){ return null; } }, set: function(k, v){ try { sessionStorage.setItem(k, v); } catch(e){} } };
  if (interno && !utm.source && sesion.get('origen_sesion')) visita = sesion.get('origen_sesion');
  else sesion.set('origen_sesion', visita);
  var primera = store.get('origen_1');
  if (!primera) { primera = new Date().toISOString().slice(0, 10) + ' · ' + visita; store.set('origen_1', primera); }
  window.cmpOrigen = function(){ return { visita: visita, primera: primera }; };

  /* Nombre de la sección donde pasó algo: id de la sección, su "eyebrow" (El problema → el_problema) o su primer h2. */
  var NOMBRES = { inicio: 'inicio', usl: 'una_sola_lista', crm: 'crm', precios: 'precios', form: 'formulario' };
  function slug(t){
    return String(t || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '').slice(0, 40);
  }
  function seccion(el){
    var s = el && el.closest ? el.closest('dialog, header.bar, footer, .mob, section, article') : null;
    if (!s) return '';
    if (s.tagName === 'DIALOG') return s.id === 'pop' ? 'checklist' : (slug(s.id) || 'dialogo');
    if (s.tagName === 'HEADER') return 'barra';
    if (s.tagName === 'FOOTER') return 'pie';
    if (s.classList.contains('mob')) return 'barra_movil';
    if (s.id) return NOMBRES[s.id] || slug(s.id);
    var eb = s.querySelector('.eyebrow') || (s.tagName === 'SECTION' ? s.querySelector('h2') : null);
    return eb ? slug(eb.textContent) : (s.tagName === 'ARTICLE' ? 'articulo' : 'seccion');
  }
  window.cmpSeccion = seccion;
  function periodo(){
    var b = document.querySelector('#bill [aria-pressed="true"]');
    return b ? b.getAttribute('data-p') : '';
  }

  /* Secciones vistas: una vez por sección, cuando se ve la mitad (o media pantalla, si es más alta que la pantalla). */
  if ('IntersectionObserver' in window) {
    var vistas = {};
    var io = new IntersectionObserver(function(es){
      es.forEach(function(e){
        if (!e.isIntersecting) return;
        if (e.intersectionRect.height < Math.min(e.boundingClientRect.height, window.innerHeight) * 0.5) return;
        io.unobserve(e.target);
        var n = seccion(e.target);
        if (n && !vistas[n]) { vistas[n] = 1; track('seccion_vista', { seccion: n }); }
      });
    }, { threshold: [0, .1, .2, .3, .4, .5, .6, .7, .8, .9, 1] });
    Array.prototype.forEach.call(document.querySelectorAll('main section, main article, body > article'), function(el){ io.observe(el); });
  }

  /* Profundidad de scroll. */
  var marcas = [25, 50, 75, 90, 100], hechas = {};
  function scroll(){
    var h = document.documentElement.scrollHeight - window.innerHeight; if (h <= 0) return;
    var pct = (window.scrollY || 0) / h * 100;
    marcas.forEach(function(m){ if (pct >= m - 1 && !hechas[m]) { hechas[m] = 1; track('scroll_profundidad', { porcentaje: m }); } });
  }
  window.addEventListener('scroll', scroll, { passive: true });

  /* Tiempo activo: cuenta solo con la pestaña visible y con algún movimiento en el último minuto. */
  var seg = 0, hitos = [15, 30, 60, 120, 300], hi = 0, ultimo = Date.now();
  ['scroll', 'pointermove', 'pointerdown', 'keydown', 'touchstart'].forEach(function(t){
    window.addEventListener(t, function(){ ultimo = Date.now(); }, { passive: true });
  });
  var reloj = setInterval(function(){
    if (document.visibilityState !== 'visible' || Date.now() - ultimo > 60000) return;
    seg++;
    if (seg >= hitos[hi]) {
      track('tiempo_activo', { segundos: hitos[hi] });
      if (++hi >= hitos.length) clearInterval(reloj);
    }
  }, 1000);

  /* Clics: CTA al formulario, WhatsApp y links internos. Los links externos los toma solo GA4 (clics salientes).
     Un link con data-evento="nombre" manda ese evento en vez del automático (ej. compartir_nota en el blog). */
  document.addEventListener('click', function(e){
    var a = e.target && e.target.closest ? e.target.closest('a[href]') : null; if (!a) return;
    var href = a.getAttribute('href') || '';
    var p = { seccion: seccion(a) };
    var propio = (a.getAttribute('data-evento') || '').toLowerCase();
    if (/^[a-z][a-z0-9_]{0,39}$/.test(propio) && !/^(ga_|google_|firebase_)/.test(propio)) { track(propio, p); return; }
    if (/\.pdf($|\?)/i.test(href)) return; /* descargas: las toma GA4 (file_download) y el checklist tiene su evento */
    var plan = a.closest('[data-plan]');
    if (plan) { p.plan = plan.getAttribute('data-plan'); p.periodo = periodo(); }
    if (/^https?:\/\/(wa\.me|api\.whatsapp\.com|web\.whatsapp\.com)\//i.test(href)) {
      /* Con número es un contacto a CMP; sin número (wa.me/?text=...) es alguien compartiendo algo con un tercero. */
      track(/wa\.me\/\d|[?&]phone=\d/i.test(href) ? 'clic_whatsapp' : 'compartir_whatsapp', p); return;
    }
    if (/#form$/.test(href)) { track('clic_cta', p); return; }
    if (href.charAt(0) === '#') { p.destino = href.slice(1) || 'inicio'; track('clic_nav', p); return; }
    try {
      var u = new URL(href, location.href);
      if (u.origin === location.origin) { p.destino = (u.pathname + u.hash).slice(0, 100); track('clic_nav', p); }
    } catch(err){}
  });

  /* Preguntas frecuentes: cualquier <details> que se abre, una vez por pregunta. */
  var abiertas = {};
  document.addEventListener('toggle', function(e){
    var d = e.target; if (!d || d.tagName !== 'DETAILS' || !d.open) return;
    var s = d.querySelector('summary');
    var pregunta = (s ? s.textContent : '').replace(/\+\s*$/, '').trim().slice(0, 100);
    if (abiertas[pregunta]) return; abiertas[pregunta] = 1;
    track('faq_abierta', { pregunta: pregunta, seccion: seccion(d) });
  }, true);
})();
