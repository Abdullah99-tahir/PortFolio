import { useEffect, useRef } from 'react';

export default function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let W, H, dots = [], raf;
    let mx = 0, my = 0;

    const resize = () => {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };

    function Dot() {
      this.x  = Math.random() * W;
      this.y  = Math.random() * H;
      this.r  = Math.random() * 1.4 + 0.3;
      this.vx = (Math.random() - 0.5) * 0.35;
      this.vy = (Math.random() - 0.5) * 0.35;
      this.a  = Math.random();
    }

    const init = () => { dots = []; for (let i = 0; i < 120; i++) dots.push(new Dot()); };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      dots.forEach(d => {
        d.x += d.vx; d.y += d.vy;
        if (d.x < 0) d.x = W; if (d.x > W) d.x = 0;
        if (d.y < 0) d.y = H; if (d.y > H) d.y = 0;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,229,255,${d.a * 0.35})`;
        ctx.fill();
      });

      // dot-to-dot connections
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x, dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = `rgba(0,229,255,${(1 - dist / 120) * 0.08})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // mouse connections
      if (mx && my) {
        dots.forEach(d => {
          const dx = d.x - mx, dy = d.y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 160) {
            ctx.beginPath();
            ctx.moveTo(d.x, d.y);
            ctx.lineTo(mx, my);
            ctx.strokeStyle = `rgba(0,229,255,${(1 - dist / 160) * 0.18})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      }
      raf = requestAnimationFrame(draw);
    };

    const onMove = (e) => { mx = e.clientX; my = e.clientY; };
    const onResize = () => { resize(); init(); };

    resize(); init(); draw();
    window.addEventListener('resize', onResize);
    document.addEventListener('mousemove', onMove);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('mousemove', onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="canvas-bg"
      style={{
        position: 'fixed', top: 0, left: 0,
        width: '100%', height: '100%',
        zIndex: 0, pointerEvents: 'none',
      }}
    />
  );
}
