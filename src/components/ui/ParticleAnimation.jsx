import { useEffect, useRef } from "react";

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

      if (!window.p5) {
        await new Promise((resolve, reject) => {
          const s = document.createElement("script");
          s.src = "https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.7.0/p5.min.js";
          s.onload = resolve;
          s.onerror = reject;
          document.head.appendChild(s);
        });
      }
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
        // ===== MOBILE DETECTION ONLY =====
        const isMobile = p.windowWidth < 768 || /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
        
        // Original desktop values preserved exactly
        const amount = isMobile ? (p.windowWidth < 480 ? 400 : 800) : (p.windowWidth < 600 ? 800 : 1600);
        
        const durationShrink = 8;
        const durationGrow   = 8;
        const total          = durationShrink + durationGrow;

        const proxy = { progress: 1, val: 0 };
        let progressTween, interpolator;
        
        // Mobile-only optimizations
        let lastInteractionTime = 0;
        const TOUCH_THROTTLE_MS = 16; // Only used on mobile
        let frameCount = 0;
        let lastFpsCheck = Date.now();
        let qualityLevel = 1.0; // Only adjusts on mobile

        class Particle {
          constructor(i) {
            this.i      = i;
            this.cos    = p.cos(i * p.TWO_PI);
            this.sin    = p.sin(i * p.TWO_PI);
            // ORIGINAL DESKTOP SIZES PRESERVED
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

        const particles     = [];

        p.setup = () => {
          // ORIGINAL CANVAS SIZE LOGIC FOR DESKTOP
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

          // ORIGINAL EASING FOR DESKTOP
          interpolator = window.gsap
            .timeline({ paused: true })
            .to(proxy, { val: 1, duration: durationShrink, ease: "elastic.in(1.5, 0.15)" })
            .to(proxy, { val: 0, duration: durationGrow,   ease: "back.in(3)" });

          for (let i = 0; i < amount; i++) {
            particles.push(new Particle(i / amount));
          }
        };

        p.windowResized = () => {
          // ORIGINAL RESIZE LOGIC
          const size = p.min(p.windowWidth, p.windowHeight);
          p.resizeCanvas(size, size);
        };

        // ORIGINAL MOUSE HANDLER (unchanged)
        p.mouseMoved = () => {
          onMove(p.mouseX, p.mouseY);
        };

        // ENHANCED TOUCH HANDLER (mobile only improvements)
        p.touchMoved = () => {
          if (!p.touches.length) return;
          
          // Mobile optimization: prevent scroll when touching canvas
          if (isMobile) {
            const touch = p.touches[0];
            if (touch.x >= 0 && touch.x <= p.width && touch.y >= 0 && touch.y <= p.height) {
              onMove(touch.x, touch.y);
              return false; // Prevent scrolling on mobile only
            }
          }
          
          // Original behavior for non-mobile
          onMove(p.touches[0].x, p.touches[0].y);
        };

        const onMove = (x, y) => {
          // MOBILE-ONLY: Throttle interactions
          if (isMobile) {
            const now = Date.now();
            if (now - lastInteractionTime < TOUCH_THROTTLE_MS) return;
            lastInteractionTime = now;
          }
          
          // ORIGINAL ANGLE CALCULATION
          let angle = p.atan2(y - p.height / 2, x - p.width / 2);
          angle = angle < 0 ? angle + p.TWO_PI : angle;
          angle = p.abs(angle / p.TWO_PI) * total;
          
          // MOBILE-ONLY: Smooth interpolation
          if (isMobile && progressTween && window.gsap) {
            window.gsap.to(progressTween, {
              time: angle,
              duration: 0.15,
              ease: "power2.out"
            });
          } else {
            // ORIGINAL INSTANT RESPONSE FOR DESKTOP
            progressTween.time(angle);
          }
        };

        // MOBILE-ONLY: Performance monitor
        const checkPerformance = () => {
          if (!isMobile) return; // Skip on desktop
          
          frameCount++;
          const now = Date.now();
          
          if (now - lastFpsCheck >= 1000) {
            const currentFps = Math.round((frameCount * 1000) / (now - lastFpsCheck));
            frameCount = 0;
            lastFpsCheck = now;
            
            // Auto-adjust quality on mobile if FPS drops below threshold
            if (currentFps < 30) {
              qualityLevel = Math.max(0.5, qualityLevel - 0.1);
            } else if (currentFps > 50 && qualityLevel < 1.0) {
              qualityLevel = Math.min(1.0, qualityLevel + 0.05);
            }
          }
        };

        p.draw = () => {
          // MOBILE-ONLY: Check performance
          checkPerformance();
          
          p.clear();
          
          // MOBILE-ONLY: Draw subset of particles based on quality
          if (isMobile) {
            const visibleParticles = Math.floor(particles.length * qualityLevel);
            for (let i = 0; i < visibleParticles; i++) {
              particles[i].draw();
            }
          } else {
            // ORIGINAL DRAW LOOP FOR DESKTOP
            particles.forEach((pt) => pt.draw());
          }
        };
        
        // Cleanup method for proper resource disposal
        p.cleanup = () => {
          if (progressTween) progressTween.kill();
          if (interpolator) interpolator.kill();
          particles.length = 0;
        };
      };

      sketchRef.current = new window.p5(sketch);
    };

    loadScripts();

    return () => {
      cancelled = true;
      if (sketchRef.current) {
        // Clean up GSAP animations before removing p5
        if (typeof sketchRef.current.cleanup === 'function') {
          sketchRef.current.cleanup();
        }
        sketchRef.current.remove();
        sketchRef.current = null;
      }
      // Kill any lingering GSAP tweens
      if (typeof window !== 'undefined' && window.gsap) {
        window.gsap.globalTimeline.clear();
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
        pointerEvents:  "auto", // Enable for interaction
        overflow: "hidden",
        touchAction: "none", // Prevent browser gestures on mobile
      }}
    />
  );
}