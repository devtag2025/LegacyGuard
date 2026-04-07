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
        // ===== MOBILE OPTIMIZATION CONFIG =====
        const isMobile = p.windowWidth < 768 || /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
        const isSmallMobile = p.windowWidth < 480;
        
        // Adaptive particle count based on device
        const amount = isSmallMobile ? 400 : (isMobile ? 800 : 1600);
        
        // Adaptive particle size for mobile readability
        const minRadius = isMobile ? 2 : 1.5;
        const maxRadius = isMobile ? 4 : 5;
        
        // Optimize pixel ratio for mobile performance (cap at 2x)
        const pixelRatio = isMobile ? Math.min(window.devicePixelRatio || 1, 2) : (window.devicePixelRatio || 1);
        
        // Throttle touch events on mobile (ms between updates)
        const TOUCH_THROTTLE_MS = isMobile ? 16 : 8; // ~60fps on mobile, ~120fps desktop
        
        const particles     = [];
        const durationShrink = 8;
        const durationGrow   = 8;
        const total          = durationShrink + durationGrow;

        const proxy = { progress: 1, val: 0 };
        let progressTween, interpolator;
        let lastInteractionTime = 0;
        
        // Performance monitoring
        let frameCount = 0;
        let lastFpsCheck = Date.now();
        let currentFps = 60;
        let qualityLevel = 1.0; // 0.5 to 1.0 - reduces particle count if FPS drops

        class Particle {
          constructor(i) {
            this.i      = i;
            this.cos    = p.cos(i * p.TWO_PI);
            this.sin    = p.sin(i * p.TWO_PI);
            this.r      = p.floor(p.random(minRadius, maxRadius));
            this.offset = p.pow(p.random(1, 2), 2.5) * p.random(-0.015, 0.015);
            this.color  = p.random(PARTICLE_THEME);
          }

          draw(centerX, centerY, maxRadius) {
            interpolator.progress((proxy.progress + this.i) % 1);
            const r = maxRadius * (0.35 + proxy.val * this.offset);
            const x = this.cos * r + centerX;
            const y = this.sin * r + centerY;
            p.fill(this.color);
            p.circle(x, y, this.r);
          }
        }

        p.setup = () => {
          // Square canvas — fits inside the container with optimized size
          const size   = p.min(p.windowWidth, p.windowHeight);
          const canvas = p.createCanvas(size * pixelRatio, size * pixelRatio);
          canvas.parent(containerRef.current);
          
          // Scale CSS to logical pixels for crisp display
          canvas.style.width = `${size}px`;
          canvas.style.height = `${size}px`;
          
          p.noStroke();
          p.pixelDensity(1); // Handle DPI manually above

          // SCREEN blend gives a luminous glow effect
          // Use ADD blend as fallback for better mobile browser compatibility
          if (!navigator.userAgent.includes("Firefox")) {
            try {
              p.blendMode(p.SCREEN);
            } catch (e) {
              // Fallback if SCREEN not supported
              console.log('SCREEN blend not supported, using default');
            }
          }

          progressTween = window.gsap.to(proxy, {
            progress: 0,
            ease:     "none",
            duration: total,
            repeat:   -1,
          });

          // Slightly smoother easing on mobile for better perceived performance
          const easeType = isMobile ? "elastic.in(1.2, 0.2)" : "elastic.in(1.5, 0.15)";
          const easeTypeBack = isMobile ? "back.in(2.5)" : "back.in(3)";
          
          interpolator = window.gsap
            .timeline({ paused: true })
            .to(proxy, { val: 1, duration: durationShrink, ease: easeType })
            .to(proxy, { val: 0, duration: durationGrow,   ease: easeTypeBack });

          for (let i = 0; i < amount; i++) {
            particles.push(new Particle(i / amount));
          }
        };

        p.windowResized = () => {
          const size = p.min(p.windowWidth, p.windowHeight);
          p.resizeCanvas(size * pixelRatio, size * pixelRatio);
          // Update CSS scaling
          if (p.canvas) {
            p.canvas.style.width = `${size}px`;
            p.canvas.style.height = `${size}px`;
          }
        };

        // Optimized mouse handler
        p.mouseMoved = () => {
          onMove(p.mouseX, p.mouseY);
        };

        // Enhanced touch handler with throttling and smooth interaction
        p.touchMoved = () => {
          if (!p.touches.length) return false;
          
          // Prevent default to avoid scroll during interaction
          // Only if touching within canvas bounds
          const touch = p.touches[0];
          if (touch.x >= 0 && touch.x <= p.width && touch.y >= 0 && touch.y <= p.height) {
            onMove(touch.x, touch.y);
            return false; // Prevent scrolling when interacting with canvas
          }
        };

        const onMove = (x, y) => {
          // Throttle interactions on mobile for smoother performance
          const now = Date.now();
          if (now - lastInteractionTime < TOUCH_THROTTLE_MS) return;
          lastInteractionTime = now;
          
          // Convert coordinates based on pixel ratio
          const scaledX = x * pixelRatio;
          const scaledY = y * pixelRatio;
          
          let angle = p.atan2(scaledY - p.height / 2, scaledX - p.width / 2);
          angle = angle < 0 ? angle + p.TWO_PI : angle;
          angle = p.abs(angle / p.TWO_PI) * total;
          
          // Smooth interpolation for more fluid response
          if (progressTween && window.gsap) {
            window.gsap.to(progressTween, {
              time: angle,
              duration: isMobile ? 0.15 : 0.08, // Slightly slower smoothing on mobile
              ease: "power2.out"
            });
          }
        };

        // Performance monitor - adjusts quality if needed
        const checkPerformance = () => {
          frameCount++;
          const now = Date.now();
          
          if (now - lastFpsCheck >= 1000) {
            currentFps = Math.round((frameCount * 1000) / (now - lastFpsCheck));
            frameCount = 0;
            lastFpsCheck = now;
            
            // Auto-adjust quality on mobile if FPS drops below threshold
            if (isMobile && currentFps < 30) {
              qualityLevel = Math.max(0.5, qualityLevel - 0.1);
            } else if (currentFps > 50 && qualityLevel < 1.0) {
              qualityLevel = Math.min(1.0, qualityLevel + 0.05);
            }
          }
        };

        p.draw = () => {
          // Check performance every frame (lightweight)
          checkPerformance();
          
          p.clear();
          
          // Cache calculations outside loop
          const centerX = p.width / 2;
          const centerY = p.height / 2;
          const maxRadius = p.width * 0.5;
          
          // Draw only visible particles based on quality level
          const visibleParticles = Math.floor(particles.length * qualityLevel);
          
          for (let i = 0; i < visibleParticles; i++) {
            particles[i].draw(centerX, centerY, maxRadius);
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