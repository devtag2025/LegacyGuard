/**
 * Header — Shared Layout Component
 * File: src/components/shared/Header.jsx
 *
 * Client-provided implementation. Fixed, transparent-to-opaque on scroll.
 * Mobile drawer with overlay. Logo uses /logo.png from public folder.
 */

import { useState, useEffect, useCallback } from "react";

const NAV_ITEMS = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Who It's For",  href: "#who-its-for"  },
  { label: "About Us",      href: "/about"         },
];

function Logo() {
  return (
    <a href="/" aria-label="iTrust121 — Home" className="flex items-center gap-2.5">
      <span
        className="font-monument text-frosted text-sm tracking-widest uppercase leading-none
                   hover:text-cadet transition-colors duration-200"
      >
        <img src="/logo.png" alt="logo" height={100} width={60} />
      </span>
    </a>
  );
}

function MobileDrawer({ isOpen, onClose }) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <div
        onClick={onClose}
        aria-hidden="true"
        className="fixed inset-0 z-40 bg-night/80 backdrop-blur-sm transition-opacity duration-300"
        style={{ opacity: isOpen ? 1 : 0, pointerEvents: isOpen ? "auto" : "none" }}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className="fixed top-0 right-0 h-full w-[280px] z-50 bg-night flex flex-col transition-transform duration-300"
        style={{
          borderLeft: "1px solid var(--border-on-dark)",
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
        }}
      >
        <div
          className="flex items-center justify-between px-6 py-5"
          style={{ borderBottom: "1px solid var(--border-on-dark)" }}
        >
          <Logo />
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="text-frosted hover:text-cadet transition-colors p-1"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* Links */}
        <nav className="flex-1 px-6 py-8 flex flex-col gap-1" aria-label="Mobile navigation">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={onClose}
              className="text-frosted text-base py-3 hover:text-cadet transition-colors tracking-wide font-sans"
              style={{ borderBottom: "1px solid var(--border-on-dark)" }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="px-6 pb-10">
          <a href="/book" className="btn btn-ghost w-full" onClick={onClose}>
            Book a Call
          </a>
        </div>
      </div>
    </>
  );
}

export function Header({ transparent = false }) {
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 24);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const opaque = scrolled || !transparent;

  return (
    <>
      <header
        role="banner"
        className="fixed top-0 left-0 right-0 z-30 transition-all duration-300"
        style={{
          backgroundColor: opaque ? "var(--color-night)" : "transparent",
          borderBottom: opaque ? "1px solid var(--border-on-dark)" : "1px solid transparent",
        }}
      >
        <div className="container-brand">
          <div className="flex items-center justify-between h-16 md:h-[70px]">

            <Logo />

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Primary navigation">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-frosted/80 text-sm tracking-wide hover:text-frosted transition-colors font-sans"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:+441234567890"
                className="flex items-center gap-1.5 text-cadet text-xs tracking-wide hover:text-frosted transition-colors font-sans"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11.5 19.79 19.79 0 01.01 2.88 2 2 0 012 .7h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.72a16 16 0 006.29 6.29l1.28-1.29a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
                +12 (0) 1234 567 890
              </a>
              <a href="/book" className="btn btn-ghost text-xs py-2.5 px-5" data-track="header-cta">
                Book a Call
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden text-frosted hover:text-cadet transition-colors p-1"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            </button>
          </div>
        </div>
      </header>

      <MobileDrawer isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}

export default Header;