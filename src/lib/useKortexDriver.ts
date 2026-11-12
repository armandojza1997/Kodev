import { useEffect } from 'react';
import { kxBot } from './kxBot';

export function useKortexDriver() {
  useEffect(() => {
    const root = document.documentElement;
    let reduce = false;
    try {
      reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    } catch {
      // ignore
    }

    (window as unknown as { __kxReveal?: boolean }).__kxReveal = true;

    // 1) Scroll reveals & driver
    const hero = document.querySelector('.hero') as HTMLElement | null;
    const flow = document.querySelector('.k-flowsec') as HTMLElement | null;

    function reveal() {
      if (reduce) return;
      const lim = window.innerHeight * 0.92;
      document.querySelectorAll('[data-rv]:not(.rv-in)').forEach((el) => {
        if (el.getBoundingClientRect().top < lim) {
          el.classList.add('rv-in');
          if (el.classList.contains('k-fan')) {
            setTimeout(() => {
              el.classList.add('k-ready');
            }, 1800);
          }
        }
      });
    }

    reveal();
    requestAnimationFrame(reveal);

    let fine = true;
    try {
      fine = matchMedia('(pointer: fine)').matches;
    } catch {
      // ignore
    }

    const onPointerMove = (e: PointerEvent) => {
      if (!hero) return;
      const r = hero.getBoundingClientRect();
      hero.style.setProperty('--mx', (((e.clientX - r.left) / r.width) - 0.5).toFixed(3));
      hero.style.setProperty('--my', (((e.clientY - r.top) / r.height) - 0.5).toFixed(3));
    };

    const onPointerLeave = () => {
      if (!hero) return;
      hero.style.setProperty('--mx', '0');
      hero.style.setProperty('--my', '0');
    };

    if (hero && fine) {
      hero.addEventListener('pointermove', onPointerMove as EventListener);
      hero.addEventListener('pointerleave', onPointerLeave);
    }

    let raf = 0;
    function onScroll() {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const y = window.scrollY || root.scrollTop || 0;
        const max = Math.max(1, root.scrollHeight - window.innerHeight);
        root.style.setProperty('--pg', Math.min(1, y / max).toFixed(4));
        reveal();
        if (flow) {
          const fr = flow.getBoundingClientRect();
          const fp = Math.min(1, Math.max(0, (window.innerHeight - fr.top) / (window.innerHeight * 0.95)));
          flow.style.setProperty('--tl', (1 - fp).toFixed(3));
        }
        if (hero) {
          const h = hero.offsetHeight || 900;
          hero.style.setProperty('--sp', Math.min(1, Math.max(0, y / h)).toFixed(3));
          root.classList.toggle('k-nav-show', y > h * 0.85);
        }
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll();

    // 2) Hero Demo Card Cycling
    const EASE = 'cubic-bezier(.2,.7,.2,1)';
    const DEMOS = [
      { t: 'Despliegue en Edge', i1: 'M16 18l6-6-6-6 M8 6l-6 6 6 6', i2: 'M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z', p: '95%', rows: ['Commit push a main', 'Build Next.js optimizado', 'Live en Edge Vercel (18ms)'] },
      { t: 'Design System & UI', i1: 'M4 5h16v11H9l-5 4z', i2: 'M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z', p: '84%', rows: ['Tokens Figma importados', 'Componentes React & TS', 'Storybook documentado'] },
      { t: 'E-commerce Headless', i1: 'M3 4h2l2.4 11h10.2L20 8H6.2 M8 19.5a1.2 1.2 0 1 0 2.4 0 M16 19.5a1.2 1.2 0 1 0 2.4 0', i2: 'M5 12l5 5 9-10', p: '92%', rows: ['Catálogo sincronizado', 'Checkout Stripe activo', 'Carga global < 0.8s'] },
      { t: 'Lighthouse 100/100', i1: 'M4 20h16 M7 16v-5 M12 16V6 M17 16v-8', i2: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z', p: '100%', rows: ['Bundle optimizado (-65%)', 'LCP: 0.6s · CLS: 0.00', 'Core Web Vitals verdes'] }
    ];

    const q = (k: string) => document.querySelector(`[data-demo="${k}"]`) as HTMLElement | null;
    const title = q('title'), strip = q('strip'), i1 = q('i1'), i2 = q('i2'), rows = q('rows'), bar = q('bar'), num = q('num'), dots = q('dots');
    const prevBtn = q('prev'), nextBtn = q('next');

    let demoCur = 0, demoTick = 0, demoTimer = 0;
    const rowTpl = rows && rows.firstElementChild ? rows.firstElementChild.cloneNode(true) as HTMLElement : null;

    function renderDemo() {
      if (!title || !strip || !i1 || !i2 || !rows || !bar || !num || !dots || !rowTpl) return;
      const d = DEMOS[demoCur];
      const ab = demoTick % 2 ? 'a' : 'b';
      title.textContent = d.t;
      title.style.animation = `k-log-${ab} .45s ${EASE} both`;
      strip.style.animation = `k-log-${ab} .45s ${EASE} both`;
      i1.setAttribute('d', d.i1);
      i2.setAttribute('d', d.i2);
      rows.innerHTML = '';
      d.rows.forEach((text, idx) => {
        const r = rowTpl.cloneNode(true) as HTMLElement;
        r.style.animation = `k-log-${ab} .5s ${EASE} ${350 + idx * 420}ms both`;
        (r.children[0] as HTMLElement).style.animation = `k-pop-${ab} .45s cubic-bezier(.2,.9,.3,1.4) ${650 + idx * 420}ms both`;
        (r.children[1] as HTMLElement).textContent = text;
        rows.appendChild(r);
      });
      bar.style.width = d.p;
      num.textContent = '0' + (demoCur + 1);
      Array.prototype.forEach.call(dots.children, (dot: HTMLElement, i: number) => {
        const fill = dot.firstElementChild as HTMLElement;
        fill.style.animation = '';
        fill.style.transform = i < demoCur ? 'scaleX(1)' : 'scaleX(0)';
        if (i === demoCur) fill.style.animation = `k-fill-${ab} 5.2s linear forwards`;
      });
    }

    function goDemo(n: number) {
      demoCur = (n + DEMOS.length) % DEMOS.length;
      demoTick++;
      renderDemo();
    }

    function restartDemo() {
      clearInterval(demoTimer);
      demoTimer = window.setInterval(() => {
        goDemo(demoCur + 1);
      }, 5200);
    }

    if (title) {
      renderDemo();
      restartDemo();
      if (prevBtn) prevBtn.addEventListener('click', () => { goDemo(demoCur - 1); restartDemo(); });
      if (nextBtn) nextBtn.addEventListener('click', () => { goDemo(demoCur + 1); restartDemo(); });
    }

    // 3) Trust Tabs (Clientes vs Partners)
    const ON_STYLE = 'background:#0C0E0D;color:#F5F7F8;border:1px solid #0C0E0D';
    const OFF_STYLE = 'background:transparent;color:#0C0E0D;border:1px solid #9EA4AA';
    const trustTabs = document.querySelectorAll('[data-trust]');
    let trustN = 0;
    trustTabs.forEach((b) => {
      b.addEventListener('click', () => {
        const id = b.getAttribute('data-trust');
        trustN++;
        trustTabs.forEach((t) => {
          const on = t === b;
          t.setAttribute('aria-pressed', on ? 'true' : 'false');
          t.setAttribute('style', `${(t.getAttribute('style') || '').replace(/background:[^;]+;color:[^;]+;border:[^;]+/, '')};${on ? ON_STYLE : OFF_STYLE}`);
        });
        document.querySelectorAll('[data-grid]').forEach((g) => {
          const show = g.getAttribute('data-grid') === id;
          if (show) {
            g.removeAttribute('hidden');
            g.querySelectorAll('.k-lcell').forEach((c) => {
              (c as HTMLElement).style.animationName = trustN % 2 ? 'k-pop-b' : 'k-pop-a';
            });
          } else {
            g.setAttribute('hidden', '');
          }
        });
      });
    });

    // 4) Fan Flip Cards
    document.querySelectorAll('.k-fan > article').forEach((card) => {
      const toggle = () => {
        const flipped = card.getAttribute('data-flip') === '1';
        card.setAttribute('data-flip', flipped ? '0' : '1');
        card.setAttribute('aria-pressed', flipped ? 'false' : 'true');
      };
      card.addEventListener('click', toggle);
      card.addEventListener('keydown', (e: Event) => {
        const ke = e as KeyboardEvent;
        if (ke.key === 'Enter' || ke.key === ' ') {
          ke.preventDefault();
          toggle();
        }
      });
    });

    // 5) 3D Robot Driver (lazy Three.js)
    let animId = 0;
    let botInstance: any = null;
    let botCanvas: HTMLCanvasElement | null = null;
    let cleanBotListeners: (() => void) | null = null;
    let resizeObs: ResizeObserver | null = null;

    const host = document.querySelector('.k-bot3d') as HTMLElement | null;
    if (host && !reduce && !host.querySelector('canvas')) {
      try {
        const tc = document.createElement('canvas');
        if (tc.getContext('webgl2') || tc.getContext('webgl')) {
          const importDynamic = new Function('url', 'return import(url)');
          importDynamic('https://cdn.jsdelivr.net/npm/three@0.169.0/build/three.module.min.js').then((THREE: any) => {
            if (!host || host.querySelector('canvas')) return;
            const wrap = host.parentNode as HTMLElement;
            const canvas = document.createElement('canvas');
            botCanvas = canvas;
            host.appendChild(canvas);
            let bot: any;
            try {
              bot = kxBot(THREE, canvas, {});
              botInstance = bot;
            } catch {
              canvas.remove();
              botCanvas = null;
              return;
            }

            function size() {
              if (!host || !bot) return;
              const r = host.getBoundingClientRect();
              bot.resize(Math.max(1, Math.round(r.width)), Math.max(1, Math.round(r.height)), Math.min(window.devicePixelRatio || 1, 1.75));
            }
            size();

            try {
              resizeObs = new ResizeObserver(size);
              resizeObs.observe(host);
            } catch {
              window.addEventListener('resize', size);
            }

            const input = { nx: -0.7, ny: 0, active: 0, flash: 0, snap: true };
            let lastMove = -100, inside = false, last = 0, first = true;

            const onBotMove = (e: PointerEvent) => {
              if (!host) return;
              const r = host.getBoundingClientRect();
              const hx = r.left + r.width * 0.47;
              const hy = r.top + r.height * 0.26;
              input.nx = Math.max(-1, Math.min(1, (e.clientX - hx) / (window.innerWidth * 0.42)));
              input.ny = Math.max(-1, Math.min(1, (e.clientY - hy) / (window.innerHeight * 0.6)));
              lastMove = performance.now() / 1000;
              inside = true;
            };

            const onBotDown = () => {
              input.flash = 1;
              lastMove = performance.now() / 1000;
            };

            const onDocMouseOut = (e: MouseEvent) => {
              if (!e.relatedTarget) inside = false;
            };

            window.addEventListener('pointermove', onBotMove as EventListener, { passive: true });
            window.addEventListener('pointerdown', onBotDown, { passive: true });
            document.addEventListener('mouseout', onDocMouseOut);

            cleanBotListeners = () => {
              window.removeEventListener('pointermove', onBotMove as EventListener);
              window.removeEventListener('pointerdown', onBotDown);
              document.removeEventListener('mouseout', onDocMouseOut);
            };

            function loop(ms: number) {
              animId = requestAnimationFrame(loop);
              const t = ms / 1000;
              const dt = Math.min(0.05, last ? t - last : 1 / 60);
              last = t;
              if (document.hidden) return;
              if (!host) return;
              const r = host.getBoundingClientRect();
              if (r.bottom < 0 || r.top > window.innerHeight) return;
              if (!inside) {
                const k = Math.min(1, dt * 0.9);
                input.nx += (-0.7 + 0.18 * Math.sin(t * 0.37) - input.nx) * k;
                input.ny += (0.05 * Math.sin(t * 0.29) - input.ny) * k;
              }
              input.active = inside && t - lastMove < 2.5 ? 1 : 0;
              bot.frame(t, dt, input);
              input.flash = 0;
              input.snap = false;
              if (first) {
                first = false;
                requestAnimationFrame(() => {
                  if (wrap) wrap.classList.add('k-bot-on');
                });
              }
            }
            animId = requestAnimationFrame(loop);
          }).catch(() => {
            // Keep poster fallback
          });
        }
      } catch {
        // Keep poster fallback
      }
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      clearInterval(demoTimer);
      if (animId) cancelAnimationFrame(animId);
      if (cleanBotListeners) cleanBotListeners();
      if (resizeObs) resizeObs.disconnect();
      if (botInstance) {
        try { botInstance.dispose(); } catch {}
      }
      if (botCanvas) {
        botCanvas.remove();
      }
      if (hero && fine) {
        hero.removeEventListener('pointermove', onPointerMove as EventListener);
        hero.removeEventListener('pointerleave', onPointerLeave);
      }
    };
  }, []);
}
