// src/components/ui/ParticleAnimation.jsx
// Particle animation using p5.js + GSAP — loaded dynamically, no install needed.
// Converted from TypeScript to plain JS to match project convention.
// Colors use the iTrust121 brand palette: cadet, frosted, night.

import { useEffect, useRef } from "react";

// Brand palette mapped to particle theme
const PARTICLE_THEME = [
  "#9DB4C0",               // cadet — primary
  "rgba(157,180,192,0.5)", // cadet muted
  "#FDFEFE",               // frosted — highlight
  "rgba(253,254,254,0.3)", // frosted subtle
  "#9DB4C0",               // cadet again — weighted
];

export function ParticleAnimation() {
  const containerRef = useRef(null);
  const sketchRef    = useRef(null);

  useEffect(() => {
    let cancelled = false;

    const loadScripts = async () => {
      if (typeof window === "undefined") return;

      // Load p5.js if not already present
      if (!window.p5) {
        await new Promise((resolve, reject) => {
          const s = document.createElement("script");
          s.src = "https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.7.0/p5.min.js";
          s.onload = resolve;
          s.onerror = reject;
          document.head.appendChild(s);
        });
      }

      // Load GSAP if not already present
      if (!window.gsap) {
        await new Promise((resolve, reject) => {
          const s = document.createElement("script");
          s.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
          s.onload = resolve;
          s.onerror = reject;
          document.head.appendChild(s);
        });
      }

      if (!cancelled) initSketch();
    };

    const initSketch = () => {
      if (!containerRef.current || !window.p5 || !window.gsap) return;

      const sketch = (p) => {
        const particles     = [];
        const amount        = p.windowWidth < 600 ? 800 : 1600;
        const durationShrink = 8;
        const durationGrow   = 8;
        const total          = durationShrink + durationGrow;

        const proxy = { progress: 1, val: 0 };
        let progressTween, interpolator;

        class Particle {
          constructor(i) {
            this.i      = i;
            this.cos    = p.cos(i * p.TWO_PI);
            this.sin    = p.sin(i * p.TWO_PI);
            this.r      = p.floor(p.random(1.5, 5));
            this.offset = p.pow(p.random(1, 2), 2.5) * p.random(-0.015, 0.015);
            this.color  = p.random(PARTICLE_THEME);
          }

          draw() {
            interpolator.progress((proxy.progress + this.i) % 1);
            const r = p.width * (0.35 + proxy.val * this.offset);
            const x = this.cos * r + p.width / 2;
            const y = this.sin * r + p.height / 2;
            p.fill(this.color);
            p.circle(x, y, this.r);
          }
        }

        p.setup = () => {
          // Square canvas — fits inside the container
          const size   = p.min(p.windowWidth, p.windowHeight);
          const canvas = p.createCanvas(size, size);
          canvas.parent(containerRef.current);
          p.noStroke();

          // SCREEN blend gives a luminous glow effect (not supported in Firefox)
          if (!navigator.userAgent.includes("Firefox")) {
            p.blendMode(p.SCREEN);
          }

          progressTween = window.gsap.to(proxy, {
            progress: 0,
            ease:     "none",
            duration: total,
            repeat:   -1,
          });

          interpolator = window.gsap
            .timeline({ paused: true })
            .to(proxy, { val: 1, duration: durationShrink, ease: "elastic.in(1.5, 0.15)" })
            .to(proxy, { val: 0, duration: durationGrow,   ease: "back.in(3)" });

          for (let i = 0; i < amount; i++) {
            particles.push(new Particle(i / amount));
          }
        };

        p.windowResized = () => {
          const size = p.min(p.windowWidth, p.windowHeight);
          p.resizeCanvas(size, size);
        };

        p.mouseMoved = () => {
          onMove(p.mouseX, p.mouseY);
        };

        p.touchMoved = () => {
          if (!p.touches.length) return;
          onMove(p.touches[0].x, p.touches[0].y);
        };

        const onMove = (x, y) => {
          let angle = p.atan2(y - p.height / 2, x - p.width / 2);
          angle = angle < 0 ? angle + p.TWO_PI : angle;
          angle = p.abs(angle / p.TWO_PI) * total;
          progressTween.time(angle);
        };

        p.draw = () => {
          p.clear();
          particles.forEach((pt) => pt.draw());
        };
      };

      sketchRef.current = new window.p5(sketch);
    };

    loadScripts();

    return () => {
      cancelled = true;
      if (sketchRef.current) {
        sketchRef.current.remove();
        sketchRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset:    0,
        display:  "flex",
        alignItems:     "center",
        justifyContent: "center",
        pointerEvents:  "none",
        overflow: "hidden",
      }}
    />
  );
}