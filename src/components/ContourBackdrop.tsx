import React, { useEffect, useRef } from 'react';
import { noise } from '@chriscourses/perlin-noise';

/**
 * The animated contour lines from gavinrozzi.com, pinned behind the whole page.
 * A port of grwebsite's ContourCanvas.astro (fixed mode): Perlin noise sampled
 * on a grid and drawn as marching-squares isolines. Keep the constants in step
 * with that file so the two sites draw the same texture.
 */
const THRESHOLD_INCREMENT = 6;
const THICK_LINE_MULTIPLE = 3;
const RES = 10;
const Z_STEP = 0.00005;
const LINE_COLOR = '#71717a30';
const MAX_DPR = 3;

const ContourBackdrop: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    // Phones keep the gradient wash only: repainting a full-screen canvas there costs too much.
    if (!canvas || !ctx || window.matchMedia('(max-width: 768px)').matches) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let cols = 0;
    let rows = 0;
    let zOffset = 0;
    let values: number[][] = [];
    let boost: number[][] = [];
    let frame = 0;
    let mouse: { x: number; y: number } | null = null;
    let lastCell = '';

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = Math.ceil(width * dpr);
      canvas.height = Math.ceil(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.floor(width / RES) + 1;
      rows = Math.floor(height / RES) + 2;
      boost = Array.from({ length: rows }, () => new Array<number>(cols + 1).fill(0));
      values = Array.from({ length: rows }, () => new Array<number>(cols + 1).fill(0));
    };

    // Moving the pointer nudges the noise under it, so the lines ripple.
    const applyMouse = () => {
      if (!mouse) return;
      const cx = Math.floor(mouse.x / RES);
      const cy = Math.floor(mouse.y / RES);
      const cell = `${cx},${cy}`;
      if (cell === lastCell) return;
      lastCell = cell;
      const radius = 5;
      for (let i = -radius; i <= radius; i++) {
        for (let j = -radius; j <= radius; j++) {
          const d = i * i + j * j;
          if (d <= radius * radius && boost[cy + i]?.[cx + j] !== undefined) {
            boost[cy + i][cx + j] += 0.0025 * (1 - d / (radius * radius));
          }
        }
      }
    };

    const lerp = (a: number, b: number, threshold: number) => (a === b ? 0 : (threshold - a) / (b - a));

    const drawThreshold = (threshold: number) => {
      ctx.beginPath();
      ctx.strokeStyle = LINE_COLOR;
      ctx.lineWidth = threshold % (THRESHOLD_INCREMENT * THICK_LINE_MULTIPLE) === 0 ? 2 : 1;

      const seg = (x1: number, y1: number, x2: number, y2: number) => {
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
      };

      for (let y = 0; y < rows - 1; y++) {
        for (let x = 0; x < cols; x++) {
          const nw = values[y][x];
          const ne = values[y][x + 1];
          const se = values[y + 1][x + 1];
          const sw = values[y + 1][x];
          const type =
            ((nw > threshold ? 1 : 0) << 3) |
            ((ne > threshold ? 1 : 0) << 2) |
            ((se > threshold ? 1 : 0) << 1) |
            (sw > threshold ? 1 : 0);
          if (type === 0 || type === 15) continue;

          const px = x * RES;
          const py = y * RES;
          const top = px + RES * lerp(nw, ne, threshold);
          const bottom = px + RES * lerp(sw, se, threshold);
          const left = py + RES * lerp(nw, sw, threshold);
          const right = py + RES * lerp(ne, se, threshold);

          switch (type) {
            case 1:
            case 14:
              seg(px, left, bottom, py + RES);
              break;
            case 2:
            case 13:
              seg(px + RES, right, bottom, py + RES);
              break;
            case 3:
            case 12:
              seg(px, left, px + RES, right);
              break;
            case 4:
            case 11:
              seg(top, py, px + RES, right);
              break;
            case 5:
              seg(px, left, top, py);
              seg(bottom, py + RES, px + RES, right);
              break;
            case 6:
            case 9:
              seg(bottom, py + RES, top, py);
              break;
            case 7:
            case 8:
              seg(px, left, top, py);
              break;
            case 10:
              seg(top, py, px + RES, right);
              seg(bottom, py + RES, px, left);
              break;
          }
        }
      }
      ctx.stroke();
    };

    const paint = () => {
      applyMouse();
      zOffset += Z_STEP;

      let min = Infinity;
      let max = -Infinity;
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x <= cols; x++) {
          const v = noise(x * 0.02, y * 0.02, zOffset + boost[y][x]) * 100;
          values[y][x] = v;
          if (v < min) min = v;
          if (v > max) max = v;
          if (boost[y][x] > 0) boost[y][x] *= 0.99;
        }
      }

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      const from = Math.floor(min / THRESHOLD_INCREMENT) * THRESHOLD_INCREMENT;
      const to = Math.ceil(max / THRESHOLD_INCREMENT) * THRESHOLD_INCREMENT;
      for (let t = from; t < to; t += THRESHOLD_INCREMENT) drawThreshold(t);
    };

    const loop = () => {
      paint();
      frame = requestAnimationFrame(loop);
    };

    const start = () => {
      cancelAnimationFrame(frame);
      // Reduced motion still gets one painted frame, so the page is textured rather than blank.
      if (reducedMotion) paint();
      else frame = requestAnimationFrame(loop);
    };

    let resizeTimer = 0;
    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        resize();
        start();
      }, 150);
    };
    const onMouseMove = (e: MouseEvent) => {
      mouse = { x: e.clientX, y: e.clientY };
    };
    const onVisibility = () => {
      if (document.hidden) cancelAnimationFrame(frame);
      else start();
    };

    resize();
    start();
    window.addEventListener('resize', onResize);
    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(resizeTimer);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return (
    <div aria-hidden="true">
      <div className="site-backdrop" />
      <canvas ref={canvasRef} className="contour-canvas" />
    </div>
  );
};

export default ContourBackdrop;
