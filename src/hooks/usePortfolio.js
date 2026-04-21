import { useEffect, useRef, useState } from 'react';

// ── CUSTOM CURSOR ──
export function useCursor() {
  useEffect(() => {
    const cursor = document.getElementById('cursor');
    const ring   = document.getElementById('cursor-ring');
    if (!cursor || !ring) return;

    let mx = 0, my = 0, rx = 0, ry = 0;
    let raf;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.left = mx + 'px';
      cursor.style.top  = my + 'px';
    };

    const animate = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx + 'px';
      ring.style.top  = ry + 'px';
      raf = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', onMove);
    animate();

    const interactables = document.querySelectorAll('a, button, .project-card, .skill-category, .c-link, .course-card');
    const onEnter = () => {
      cursor.style.width  = '20px';
      cursor.style.height = '20px';
      ring.style.width    = '52px';
      ring.style.height   = '52px';
      ring.style.opacity  = '1';
    };
    const onLeave = () => {
      cursor.style.width  = '12px';
      cursor.style.height = '12px';
      ring.style.width    = '36px';
      ring.style.height   = '36px';
      ring.style.opacity  = '.5';
    };
    interactables.forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);
}

// ── TYPEWRITER ──
export function useTypewriter(texts = []) {
  const [display, setDisplay] = useState('');
  const state = useRef({ ti: 0, ci: 0, deleting: false });

  useEffect(() => {
    if (!texts.length) return;
    let timeout;

    const tick = () => {
      const { ti, ci, deleting } = state.current;
      const word = texts[ti];

      if (!deleting) {
        setDisplay(word.slice(0, ci + 1));
        state.current.ci++;
        if (state.current.ci === word.length) {
          state.current.deleting = true;
          timeout = setTimeout(tick, 1800);
          return;
        }
      } else {
        setDisplay(word.slice(0, ci - 1));
        state.current.ci--;
        if (state.current.ci === 0) {
          state.current.deleting = false;
          state.current.ti = (ti + 1) % texts.length;
          timeout = setTimeout(tick, 400);
          return;
        }
      }
      timeout = setTimeout(tick, deleting ? 55 : 95);
    };

    timeout = setTimeout(tick, 600);
    return () => clearTimeout(timeout);
  }, [texts]);

  return display;
}

// ── SCROLL REVEAL ──
export function useScrollReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.12 }
    );
    const els = document.querySelectorAll('.reveal, .tl-item');
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

// ── SKILL BAR TRIGGER ──
export function useSkillBars() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.querySelectorAll('.skill-fill').forEach(bar => {
              setTimeout(() => { bar.style.width = bar.dataset.w + '%'; }, 100);
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    document.querySelectorAll('.skill-category').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

// ── ACTIVE NAV LINK ──
export function useActiveNav() {
  useEffect(() => {
    const handler = () => {
      const y = window.scrollY + 80;
      document.querySelectorAll('section[id]').forEach(s => {
        const a = document.querySelector(`.nav-links a[href="#${s.id}"]`);
        if (!a) return;
        if (y >= s.offsetTop && y < s.offsetTop + s.offsetHeight) {
          a.style.color = 'var(--cyan)';
        } else {
          a.style.color = '';
        }
      });
    };
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);
}
