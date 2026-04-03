"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Shield, Clock, CheckCircle, ChevronRight, ChevronDown,
  Lock, Users, FileText, ArrowRight, Menu, X, Star,
  Phone, Mail, MapPin
} from "lucide-react";

// ── Google Fonts ─────────────────────────────────────────────────────────────
const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,700&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --ink: #0d0d0f;
      --ink-soft: #3a3a40;
      --ink-muted: #7a7a8a;
      --cream: #faf9f7;
      --cream-dark: #f2f0ec;
      --gold: #b8860b;
      --gold-light: #d4a017;
      --gold-pale: #f5e9c8;
      --sapphire: #1a3a5c;
      --sapphire-mid: #2a5080;
      --sapphire-light: #e8f0f8;
      --white: #ffffff;
      --border: #e4e1da;
      --border-soft: #eeece7;
    }

    body { font-family: 'DM Sans', sans-serif; background: var(--cream); color: var(--ink); }

    .font-display { font-family: 'Playfair Display', serif; }

    /* Animations */
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(28px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes slideRight {
      from { transform: scaleX(0); }
      to { transform: scaleX(1); }
    }
    @keyframes shimmer {
      0% { background-position: -200% center; }
      100% { background-position: 200% center; }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-8px); }
    }
    @keyframes pulse-ring {
      0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(184, 134, 11, 0.4); }
      70% { transform: scale(1); box-shadow: 0 0 0 12px rgba(184, 134, 11, 0); }
      100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(184, 134, 11, 0); }
    }

    .animate-fade-up { animation: fadeUp 0.7s cubic-bezier(.22,.68,0,1.2) both; }
    .animate-fade-up-1 { animation: fadeUp 0.7s cubic-bezier(.22,.68,0,1.2) 0.1s both; }
    .animate-fade-up-2 { animation: fadeUp 0.7s cubic-bezier(.22,.68,0,1.2) 0.22s both; }
    .animate-fade-up-3 { animation: fadeUp 0.7s cubic-bezier(.22,.68,0,1.2) 0.34s both; }
    .animate-fade-up-4 { animation: fadeUp 0.7s cubic-bezier(.22,.68,0,1.2) 0.46s both; }
    .animate-fade-in { animation: fadeIn 0.9s ease both; }
    .float { animation: float 6s ease-in-out infinite; }
    .pulse-ring { animation: pulse-ring 2.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite; }

    /* Nav */
    .nav-link {
      position: relative;
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--ink-soft);
      text-decoration: none;
      transition: color 0.2s;
      letter-spacing: 0.01em;
    }
    .nav-link::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 1px;
      background: var(--gold);
      transition: width 0.3s ease;
    }
    .nav-link:hover { color: var(--ink); }
    .nav-link:hover::after { width: 100%; }

    /* Buttons */
    .btn-primary {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      background: var(--sapphire);
      color: var(--white);
      padding: 14px 32px;
      border-radius: 4px;
      font-family: 'DM Sans', sans-serif;
      font-size: 0.9375rem;
      font-weight: 600;
      letter-spacing: 0.02em;
      border: none;
      cursor: pointer;
      transition: all 0.25s ease;
      position: relative;
      overflow: hidden;
    }
    .btn-primary::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%);
      opacity: 0;
      transition: opacity 0.25s;
    }
    .btn-primary:hover { background: var(--sapphire-mid); transform: translateY(-1px); box-shadow: 0 8px 28px rgba(26,58,92,0.28); }
    .btn-primary:hover::before { opacity: 1; }
    .btn-primary:active { transform: translateY(0); }

    .btn-gold {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      background: var(--gold);
      color: var(--white);
      padding: 16px 40px;
      border-radius: 4px;
      font-family: 'DM Sans', sans-serif;
      font-size: 1rem;
      font-weight: 600;
      letter-spacing: 0.03em;
      border: none;
      cursor: pointer;
      transition: all 0.25s ease;
    }
    .btn-gold:hover { background: var(--gold-light); transform: translateY(-2px); box-shadow: 0 12px 36px rgba(184,134,11,0.3); }
    .btn-gold:active { transform: translateY(0); }

    .btn-outline {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      background: transparent;
      color: var(--sapphire);
      padding: 14px 32px;
      border-radius: 4px;
      font-family: 'DM Sans', sans-serif;
      font-size: 0.9375rem;
      font-weight: 500;
      letter-spacing: 0.02em;
      border: 1.5px solid var(--sapphire);
      cursor: pointer;
      transition: all 0.25s ease;
    }
    .btn-outline:hover { background: var(--sapphire); color: white; }

    .btn-ghost {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: transparent;
      color: var(--ink-muted);
      padding: 8px 0;
      font-family: 'DM Sans', sans-serif;
      font-size: 0.875rem;
      font-weight: 500;
      border: none;
      cursor: pointer;
      transition: color 0.2s;
    }
    .btn-ghost:hover { color: var(--sapphire); }

    /* Cards */
    .stat-card {
      background: white;
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 28px 32px;
      transition: all 0.3s ease;
    }
    .stat-card:hover { border-color: var(--gold); box-shadow: 0 8px 32px rgba(0,0,0,0.07); transform: translateY(-2px); }

    .step-card {
      background: white;
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 36px 32px;
      position: relative;
      transition: all 0.3s ease;
    }
    .step-card:hover { border-color: var(--gold-light); box-shadow: 0 12px 40px rgba(0,0,0,0.09); }

    .benefit-card {
      background: white;
      border: 1px solid var(--border);
      border-left: 3px solid var(--gold);
      border-radius: 0 8px 8px 0;
      padding: 28px 28px 28px 24px;
      transition: all 0.3s ease;
    }
    .benefit-card:hover { box-shadow: 0 8px 32px rgba(0,0,0,0.08); transform: translateX(4px); }

    .testimonial-card {
      background: white;
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 32px;
      transition: all 0.3s ease;
    }
    .testimonial-card:hover { border-color: var(--border-soft); box-shadow: 0 12px 40px rgba(0,0,0,0.07); }

    /* Section divider */
    .section-label {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--gold);
    }
    .section-label::before {
      content: '';
      display: block;
      width: 24px;
      height: 1px;
      background: var(--gold);
    }

    /* Decorative rule */
    .rule { border: none; border-top: 1px solid var(--border); }
    .rule-gold { border: none; border-top: 1px solid var(--gold-pale); }

    /* FAQ */
    .faq-item {
      border-bottom: 1px solid var(--border);
      transition: all 0.2s;
    }
    .faq-btn {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 22px 0;
      background: none;
      border: none;
      cursor: pointer;
      text-align: left;
      gap: 24px;
    }
    .faq-body {
      overflow: hidden;
      transition: max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s;
    }

    /* Tag pill */
    .tag-pill {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: var(--gold-pale);
      color: var(--gold);
      border: 1px solid rgba(184,134,11,0.2);
      padding: 6px 14px;
      border-radius: 100px;
      font-size: 0.8125rem;
      font-weight: 600;
      letter-spacing: 0.04em;
    }

    /* Number badge */
    .num-badge {
      width: 36px;
      height: 36px;
      background: var(--sapphire);
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.875rem;
      font-weight: 700;
      flex-shrink: 0;
      font-family: 'Playfair Display', serif;
    }

    /* Noise overlay on hero */
    .noise::after {
      content: '';
      position: absolute;
      inset: 0;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.035'/%3E%3C/svg%3E");
      pointer-events: none;
      opacity: 0.5;
    }

    /* Vertical text */
    .vert-text {
      writing-mode: vertical-rl;
      text-orientation: mixed;
      transform: rotate(180deg);
    }

    /* Trust bar logos */
    .press-logo { opacity: 0.35; transition: opacity 0.2s; font-family: 'Playfair Display', serif; font-size: 1.1rem; font-weight: 700; }
    .press-logo:hover { opacity: 0.65; }

    /* Connector line between steps */
    .step-connector {
      position: absolute;
      top: 54px;
      right: -13%;
      width: 26%;
      height: 1px;
      background: linear-gradient(to right, var(--border), transparent);
    }

    /* Mobile */
    @media (max-width: 768px) {
      .step-connector { display: none; }
      .hero-eyebrow { font-size: 1.75rem !important; }
    }

    .bg-texture {
      background-color: var(--cream);
      background-image:
        linear-gradient(var(--border-soft) 1px, transparent 1px),
        linear-gradient(90deg, var(--border-soft) 1px, transparent 1px);
      background-size: 48px 48px;
    }

    input:focus, textarea:focus, select:focus { outline: 2px solid var(--sapphire); outline-offset: 2px; }
  `}</style>
);

// ── Navbar ───────────────────────────────────────────────────────────────────
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { href: "#how-it-works", label: "How It Works" },
    { href: "#benefits", label: "Why Us" },
    { href: "#testimonials", label: "Reviews" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <nav style={{
      position: "fixed", top: 0, width: "100%", zIndex: 100,
      background: scrolled ? "rgba(250,249,247,0.97)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      transition: "all 0.3s ease"
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
          {/* Logo */}
          <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <div style={{
              width: 38, height: 38,
              background: "var(--sapphire)",
              borderRadius: 6,
              display: "flex", alignItems: "center", justifyContent: "center"
            }}>
              <FileText size={18} color="white" />
            </div>
            <span className="font-display" style={{ fontSize: "1.125rem", fontWeight: 700, color: "var(--ink)", letterSpacing: "-0.01em" }}>
              Will<span style={{ color: "var(--gold)" }}>For</span>Family
            </span>
          </a>

          {/* Desktop Nav */}
          <div style={{ display: "flex", alignItems: "center", gap: 40 }} className="desktop-nav">
            {links.map(l => (
              <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
            ))}
            <button className="btn-primary" style={{ padding: "10px 24px", fontSize: "0.875rem" }}>
              Start Free — No Card Needed
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            style={{ background: "none", border: "none", cursor: "pointer", display: "none", padding: 8 }}
            className="mobile-menu-btn"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} color="var(--ink)" /> : <Menu size={22} color="var(--ink)" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div style={{
          background: "var(--cream)", borderTop: "1px solid var(--border)",
          padding: "16px 24px 24px"
        }}>
          {links.map(l => (
            <a key={l.href} href={l.href}
              onClick={() => setOpen(false)}
              style={{ display: "block", padding: "14px 0", color: "var(--ink-soft)", textDecoration: "none", fontWeight: 500, fontSize: "0.9375rem", borderBottom: "1px solid var(--border-soft)" }}>
              {l.label}
            </a>
          ))}
          <button className="btn-primary" style={{ width: "100%", marginTop: 20 }}>
            Start Your Free Will
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
};

// ── Hero ─────────────────────────────────────────────────────────────────────
const Hero = () => (
  <section className="noise" style={{
    position: "relative",
    paddingTop: "140px",
    paddingBottom: "100px",
    background: "linear-gradient(160deg, var(--sapphire) 0%, #0d2540 55%, #0a1e30 100%)",
    overflow: "hidden"
  }}>
    {/* Decorative grid */}
    <div style={{
      position: "absolute", inset: 0, opacity: 0.04,
      backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
      backgroundSize: "60px 60px"
    }} />

    {/* Gold accent line top */}
    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, var(--gold), var(--gold-light), var(--gold))" }} />

    {/* Radial glow */}
    <div style={{
      position: "absolute", top: "-10%", right: "5%",
      width: 600, height: 600,
      background: "radial-gradient(circle, rgba(184,134,11,0.12) 0%, transparent 65%)",
      pointerEvents: "none"
    }} />

    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 760 }}>
        {/* Eyebrow label */}
        <div className="animate-fade-up" style={{ marginBottom: 28 }}>
          <span className="tag-pill" style={{ background: "rgba(184,134,11,0.15)", color: "var(--gold-light)", border: "1px solid rgba(184,134,11,0.3)" }}>
            ✦ Trusted by 50,000+ American Families
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display animate-fade-up-1" style={{
          fontSize: "clamp(2.4rem, 5.5vw, 4rem)",
          fontWeight: 700,
          color: "white",
          lineHeight: 1.12,
          letterSpacing: "-0.02em",
          marginBottom: 28
        }}>
          Protect Everything You've Built.
          <br />
          <span style={{ color: "var(--gold-light)", fontStyle: "italic" }}>In Ten Minutes Flat.</span>
        </h1>

        {/* Subline */}
        <p className="animate-fade-up-2" style={{
          fontSize: "1.125rem",
          color: "rgba(255,255,255,0.72)",
          lineHeight: 1.75,
          marginBottom: 44,
          maxWidth: 560,
          fontWeight: 300
        }}>
          A legally-valid will for your children, assets, and loved ones — without a lawyer, without the stress, and without the $1,500 bill.
        </p>

        {/* CTA Row */}
        <div className="animate-fade-up-3" style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap", marginBottom: 52 }}>
          <button className="btn-gold pulse-ring">
            Create My Will — It's Free
            <ArrowRight size={18} />
          </button>
          <button className="btn-ghost" style={{ color: "rgba(255,255,255,0.65)" }}>
            Watch 2-min overview →
          </button>
        </div>

        {/* Trust row */}
        <div className="animate-fade-up-4" style={{ display: "flex", flexWrap: "wrap", gap: "12px 32px" }}>
          {[
            "100% Private & Encrypted",
            "Valid in All 50 States",
            "Attorney-Reviewed",
            "Cancel Anytime"
          ].map(t => (
            <div key={t} style={{ display: "flex", alignItems: "center", gap: 7, color: "rgba(255,255,255,0.55)", fontSize: "0.8125rem", fontWeight: 400 }}>
              <CheckCircle size={14} style={{ color: "var(--gold-light)", flexShrink: 0 }} />
              {t}
            </div>
          ))}
        </div>
      </div>

      {/* Floating stat cards */}
      <div className="float" style={{
        position: "absolute", right: 0, top: "50%",
        transform: "translateY(-50%)",
        display: "flex", flexDirection: "column", gap: 16
      }} className="desktop-stats float">
        {[
          { num: "50K+", label: "Families Protected" },
          { num: "15 min", label: "Average Time to Complete" },
          { num: "4.9★", label: "Customer Rating" }
        ].map(s => (
          <div key={s.num} style={{
            background: "rgba(255,255,255,0.07)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 8,
            padding: "20px 28px",
            minWidth: 180
          }}>
            <div className="font-display" style={{ fontSize: "1.75rem", fontWeight: 700, color: "white", letterSpacing: "-0.02em" }}>{s.num}</div>
            <div style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.5)", marginTop: 2 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>

    <style>{`
      @media (max-width: 900px) { .desktop-stats { display: none !important; } }
    `}</style>
  </section>
);

// ── Press Bar ────────────────────────────────────────────────────────────────
const PressBar = () => (
  <div style={{ background: "white", borderBottom: "1px solid var(--border)", padding: "24px 32px" }}>
    <div style={{ maxWidth: 1200, margin: "0 auto" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "clamp(24px, 5vw, 72px)", flexWrap: "wrap" }}>
        <span style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-muted)", marginRight: 8 }}>AS SEEN IN</span>
        {["Forbes", "TechCrunch", "NPR", "Bloomberg", "AARP"].map(b => (
          <span key={b} className="press-logo">{b}</span>
        ))}
      </div>
    </div>
  </div>
);

// ── Stats Row ────────────────────────────────────────────────────────────────
const StatsRow = () => (
  <section style={{ background: "var(--cream)", padding: "72px 32px", borderBottom: "1px solid var(--border)" }}>
    <div style={{ maxWidth: 1200, margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24 }}>
        {[
          { num: "50,000+", label: "Wills Created", sub: "and counting" },
          { num: "$0", label: "Required Upfront", sub: "free to start" },
          { num: "10 min", label: "Average Completion", sub: "start to finish" },
          { num: "50", label: "States Covered", sub: "100% legally valid" },
        ].map(s => (
          <div key={s.num} className="stat-card" style={{ textAlign: "center" }}>
            <div className="font-display" style={{ fontSize: "2.25rem", fontWeight: 700, color: "var(--sapphire)", letterSpacing: "-0.03em" }}>{s.num}</div>
            <div style={{ fontWeight: 600, color: "var(--ink)", marginTop: 6, fontSize: "0.9375rem" }}>{s.label}</div>
            <div style={{ fontSize: "0.8125rem", color: "var(--ink-muted)", marginTop: 2 }}>{s.sub}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ── How It Works ─────────────────────────────────────────────────────────────
const HowItWorks = () => {
  const steps = [
    {
      icon: FileText,
      title: "Answer Our Guided Questions",
      desc: "A friendly questionnaire walks you through your family, assets, and wishes. No legal jargon — just plain English.",
      time: "~5 min"
    },
    {
      icon: Shield,
      title: "Review & Personalize",
      desc: "See your complete will before finalizing. Name guardians, set up trusts, adjust beneficiary splits with full control.",
      time: "~3 min"
    },
    {
      icon: Lock,
      title: "Sign & Download Instantly",
      desc: "Your document is ready immediately. E-sign digitally or download to print — it's legally valid either way.",
      time: "~2 min"
    }
  ];

  return (
    <section id="how-it-works" style={{ padding: "100px 32px", background: "white" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: 64 }}>
          <div className="section-label" style={{ marginBottom: 16 }}>The Process</div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20 }}>
            <h2 className="font-display" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)", fontWeight: 700, color: "var(--ink)", maxWidth: 480, lineHeight: 1.2, letterSpacing: "-0.02em" }}>
              Your will, done in three
              <span style={{ fontStyle: "italic", color: "var(--gold)" }}> simple steps.</span>
            </h2>
            <p style={{ color: "var(--ink-muted)", maxWidth: 340, lineHeight: 1.7, fontSize: "0.9375rem" }}>
              No legal expertise required. Our guided flow handles every complexity so you don't have to.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, marginBottom: 56 }}>
          {steps.map((step, i) => (
            <div key={i} className="step-card" style={{ position: "relative" }}>
              {/* Step number */}
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
                <div className="num-badge">{i + 1}</div>
                <span style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", color: "var(--gold)", textTransform: "uppercase" }}>{step.time}</span>
              </div>

              {/* Icon */}
              <div style={{
                width: 52, height: 52,
                background: "var(--sapphire-light)",
                borderRadius: 8,
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 20
              }}>
                <step.icon size={24} style={{ color: "var(--sapphire)" }} />
              </div>

              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.25rem", fontWeight: 600, color: "var(--ink)", marginBottom: 12, lineHeight: 1.3 }}>
                {step.title}
              </h3>
              <p style={{ color: "var(--ink-muted)", lineHeight: 1.75, fontSize: "0.9375rem" }}>{step.desc}</p>

              {/* Connector */}
              {i < 2 && <div className="step-connector" />}
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <button className="btn-primary">
            Begin Your Will — Free
            <ChevronRight size={16} />
          </button>
          <p style={{ marginTop: 12, fontSize: "0.8125rem", color: "var(--ink-muted)" }}>No account required to start</p>
        </div>
      </div>
    </section>
  );
};

// ── Benefits ─────────────────────────────────────────────────────────────────
const Benefits = () => {
  const benefits = [
    {
      icon: Users,
      title: "Protect Your Children",
      desc: "Name guardians, establish trusts, and define exactly how your children will be cared for — legally binding.",
      accent: "var(--sapphire)"
    },
    {
      icon: Clock,
      title: "Save $1,200+ in Attorney Fees",
      desc: "Traditional estate planning costs $1,500–$3,000. We charge nothing upfront. Professional-grade output at a fraction of the price.",
      accent: "var(--gold)"
    },
    {
      icon: Shield,
      title: "Peace of Mind, Permanently",
      desc: "Update your will anytime as life changes. New baby? New home? One login and you're done.",
      accent: "#2e8b57"
    },
    {
      icon: FileText,
      title: "100% Attorney-Reviewed",
      desc: "Every template is crafted and verified by licensed estate attorneys. Valid in all 50 U.S. states.",
      accent: "#7b3f9c"
    }
  ];

  return (
    <section id="benefits" style={{ padding: "100px 32px", background: "var(--cream)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "end", marginBottom: 64, flexWrap: "wrap" }}
          className="benefits-header">
          <div>
            <div className="section-label" style={{ marginBottom: 16 }}>Why WillForFamily</div>
            <h2 className="font-display" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)", fontWeight: 700, color: "var(--ink)", lineHeight: 1.2, letterSpacing: "-0.02em" }}>
              Estate planning built for
              <span style={{ fontStyle: "italic", color: "var(--gold)" }}> real families.</span>
            </h2>
          </div>
          <p style={{ color: "var(--ink-muted)", lineHeight: 1.8, fontSize: "0.9375rem", maxWidth: 400 }}>
            We removed the complexity, the intimidating forms, and the lawyer appointments. What's left is exactly what you need: a complete, legally valid will that protects the people you love.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
          {benefits.map((b, i) => (
            <div key={i} className="benefit-card" style={{ borderLeftColor: b.accent }}>
              <div style={{ width: 44, height: 44, background: `${b.accent}15`, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                <b.icon size={20} style={{ color: b.accent }} />
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.125rem", fontWeight: 600, color: "var(--ink)", marginBottom: 10 }}>{b.title}</h3>
              <p style={{ color: "var(--ink-muted)", lineHeight: 1.75, fontSize: "0.9rem" }}>{b.desc}</p>
            </div>
          ))}
        </div>

        <style>{`@media (max-width: 768px) { .benefits-header { grid-template-columns: 1fr !important; } }`}</style>
      </div>
    </section>
  );
};

// ── Testimonials ──────────────────────────────────────────────────────────────
const Testimonials = () => {
  const reviews = [
    {
      name: "Sarah M.", role: "Mother of two, Chicago",
      text: "I kept putting this off for three years. WillForFamily made it so painless — 15 minutes and I finally have peace of mind. My lawyer quoted me $2,400 for the same thing.",
      rating: 5, initial: "S"
    },
    {
      name: "James T.", role: "Single father, Austin",
      text: "As a single dad, naming a guardian was critical. The guardian selection flow was thoughtful and clear. I felt genuinely guided, not rushed through some form.",
      rating: 5, initial: "J"
    },
    {
      name: "Maria & Carlos R.", role: "New parents, Miami",
      text: "We did this the day our son came home from the hospital. The questionnaire felt like talking to someone who actually cared. Professional result, human experience.",
      rating: 5, initial: "M"
    }
  ];

  return (
    <section id="testimonials" style={{ padding: "100px 32px", background: "white" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="section-label" style={{ justifyContent: "center", marginBottom: 16 }}>Customer Stories</div>
          <h2 className="font-display" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)", fontWeight: 700, color: "var(--ink)", lineHeight: 1.2, letterSpacing: "-0.02em" }}>
            Loved by families across America.
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
          {reviews.map((r, i) => (
            <div key={i} className="testimonial-card">
              {/* Stars */}
              <div style={{ display: "flex", gap: 3, marginBottom: 20 }}>
                {[...Array(r.rating)].map((_, j) => (
                  <Star key={j} size={15} style={{ fill: "var(--gold)", color: "var(--gold)" }} />
                ))}
              </div>

              {/* Opening quote mark */}
              <div className="font-display" style={{ fontSize: "3rem", color: "var(--gold-pale)", lineHeight: 0.5, marginBottom: 16, fontWeight: 900 }}>"</div>

              <p style={{ color: "var(--ink-soft)", lineHeight: 1.8, marginBottom: 28, fontSize: "0.9375rem" }}>{r.text}</p>

              <hr className="rule" style={{ marginBottom: 20 }} />

              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{
                  width: 42, height: 42,
                  background: "linear-gradient(135deg, var(--sapphire), var(--sapphire-mid))",
                  borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "white", fontWeight: 700, fontSize: "1rem",
                  fontFamily: "'Playfair Display', serif"
                }}>{r.initial}</div>
                <div>
                  <div style={{ fontWeight: 600, color: "var(--ink)", fontSize: "0.9375rem" }}>{r.name}</div>
                  <div style={{ fontSize: "0.8125rem", color: "var(--ink-muted)" }}>{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ── FAQ ───────────────────────────────────────────────────────────────────────
const FAQ = () => {
  const [open, setOpen] = useState(null);
  const faqs = [
    { q: "Is my will legally valid in my state?", a: "Yes. Our wills are drafted and reviewed by licensed estate attorneys to comply with the legal requirements of all 50 U.S. states. Each template is updated regularly to reflect current law." },
    { q: "What if my family situation is complicated?", a: "Our system handles blended families, special needs provisions, business assets, multiple properties, and more. If your situation exceeds what we can automate, we'll connect you with a vetted attorney at a discounted rate." },
    { q: "How is my sensitive information protected?", a: "We use 256-bit bank-grade encryption, comply with HIPAA and state privacy laws, and never sell your data. Your documents are stored in encrypted vaults accessible only to you." },
    { q: "Can I update my will in the future?", a: "Absolutely. Log in at any time to update your will — new children, asset changes, guardian updates — your latest version instantly supersedes the previous one." },
    { q: "What does it cost?", a: "Starting is completely free. Our basic will is free to create and download. Premium plans with advanced features like living wills and healthcare directives start at $39 — versus $1,500+ at a law firm." },
  ];

  return (
    <section id="faq" style={{ padding: "100px 32px", background: "var(--cream)" }}>
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <div className="section-label" style={{ marginBottom: 16 }}>Common Questions</div>
        <h2 className="font-display" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)", fontWeight: 700, color: "var(--ink)", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 52 }}>
          Everything you need to know.
        </h2>

        <div>
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item">
              <button className="faq-btn" onClick={() => setOpen(open === i ? null : i)}>
                <span style={{ fontWeight: 600, color: "var(--ink)", fontSize: "1rem", lineHeight: 1.5 }}>{faq.q}</span>
                <ChevronDown
                  size={18}
                  style={{
                    color: "var(--ink-muted)",
                    flexShrink: 0,
                    transition: "transform 0.3s",
                    transform: open === i ? "rotate(180deg)" : "none"
                  }}
                />
              </button>
              <div className="faq-body" style={{ maxHeight: open === i ? 300 : 0, opacity: open === i ? 1 : 0 }}>
                <p style={{ paddingBottom: 24, color: "var(--ink-soft)", lineHeight: 1.8, fontSize: "0.9375rem" }}>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 44, textAlign: "center" }}>
          <p style={{ color: "var(--ink-muted)", marginBottom: 12, fontSize: "0.9375rem" }}>Still have a question?</p>
          <button className="btn-ghost" style={{ color: "var(--sapphire)", fontWeight: 600 }}>
            Chat with our estate planning team <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
};

// ── Final CTA ────────────────────────────────────────────────────────────────
const FinalCTA = () => (
  <section style={{
    padding: "100px 32px",
    background: "var(--sapphire)",
    position: "relative",
    overflow: "hidden"
  }}>
    {/* Decorative */}
    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, var(--gold), var(--gold-light), var(--gold))" }} />
    <div style={{ position: "absolute", bottom: "-20%", right: "-5%", width: 500, height: 500, background: "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)", borderRadius: "50%" }} />

    <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
      <div className="section-label" style={{ justifyContent: "center", marginBottom: 20, color: "var(--gold-light)" }}>
        <span style={{ background: "var(--gold-light)" }} />
        Take Action Today
      </div>
      <h2 className="font-display" style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", fontWeight: 700, color: "white", lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: 24 }}>
        Your family's future is
        <span style={{ color: "var(--gold-light)", fontStyle: "italic" }}> too important to postpone.</span>
      </h2>
      <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.0625rem", lineHeight: 1.8, marginBottom: 48, maxWidth: 520, margin: "0 auto 48px" }}>
        Join 50,000+ parents who took 10 minutes to secure everything they've built. Free to start. No pressure.
      </p>

      <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginBottom: 40 }}>
        <button className="btn-gold" style={{ fontSize: "1.0625rem", padding: "16px 44px" }}>
          Create My Free Will
          <ArrowRight size={18} />
        </button>
        <button style={{
          background: "rgba(255,255,255,0.08)",
          border: "1.5px solid rgba(255,255,255,0.25)",
          color: "white",
          padding: "16px 32px",
          borderRadius: 4,
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "1rem",
          fontWeight: 500,
          cursor: "pointer",
          transition: "all 0.25s"
        }}
          onMouseEnter={e => { e.target.style.background = "rgba(255,255,255,0.15)"; }}
          onMouseLeave={e => { e.target.style.background = "rgba(255,255,255,0.08)"; }}
        >
          Book a Free Consultation
        </button>
      </div>

      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "12px 32px" }}>
        {[
          { icon: Lock, t: "256-bit Encryption" },
          { icon: CheckCircle, t: "30-Day Guarantee" },
          { icon: Shield, t: "Attorney-Reviewed" }
        ].map(({ icon: Icon, t }) => (
          <div key={t} style={{ display: "flex", alignItems: "center", gap: 7, color: "rgba(255,255,255,0.45)", fontSize: "0.8125rem" }}>
            <Icon size={13} style={{ color: "var(--gold-light)" }} />
            {t}
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ── Footer ────────────────────────────────────────────────────────────────────
const Footer = () => (
  <footer style={{ background: "#0a0f17", color: "rgba(255,255,255,0.5)", padding: "64px 32px 32px" }}>
    <div style={{ maxWidth: 1200, margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40, marginBottom: 56, flexWrap: "wrap" }}
        className="footer-grid">
        {/* Brand */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
            <div style={{ width: 34, height: 34, background: "var(--sapphire)", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <FileText size={16} color="white" />
            </div>
            <span className="font-display" style={{ color: "white", fontSize: "1.0625rem", fontWeight: 700 }}>
              Will<span style={{ color: "var(--gold-light)" }}>For</span>Family
            </span>
          </div>
          <p style={{ fontSize: "0.875rem", lineHeight: 1.75, maxWidth: 260 }}>
            Making estate planning simple, affordable, and accessible for every American family.
          </p>
          <div style={{ display: "flex", gap: 16, marginTop: 24 }}>
            {[Phone, Mail, MapPin].map((Icon, i) => (
              <div key={i} style={{ width: 34, height: 34, border: "1px solid rgba(255,255,255,0.1)", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                <Icon size={14} />
              </div>
            ))}
          </div>
        </div>

        {[
          { title: "Product", links: ["How It Works", "Pricing", "For Attorneys", "API"] },
          { title: "Resources", links: ["Blog", "Planning Guide", "Guardian Tips", "State Laws"] },
          { title: "Legal", links: ["Privacy Policy", "Terms of Service", "Disclaimer", "Attorneys"] }
        ].map(col => (
          <div key={col.title}>
            <h4 style={{ color: "white", fontWeight: 600, fontSize: "0.875rem", marginBottom: 18, letterSpacing: "0.05em", textTransform: "uppercase" }}>{col.title}</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {col.links.map(l => (
                <li key={l}><a href="#" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none", fontSize: "0.875rem", transition: "color 0.2s" }}
                  onMouseEnter={e => e.target.style.color = "rgba(255,255,255,0.85)"}
                  onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.4)"}>{l}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 28, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 16, fontSize: "0.8125rem" }}>
        <span>© {new Date().getFullYear()} WillForFamily. All rights reserved.</span>
        <span style={{ maxWidth: 480, textAlign: "right" }}>Not a law firm. Documents are attorney-reviewed and comply with all 50 state laws.</span>
      </div>
    </div>

    <style>{`@media (max-width: 768px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }`}</style>
  </footer>
);

// ── Sticky Mobile CTA ────────────────────────────────────────────────────────
const StickyMobileCTA = () => (
  <>
    <div style={{
      position: "fixed", bottom: 0, left: 0, right: 0,
      background: "rgba(250,249,247,0.97)",
      backdropFilter: "blur(12px)",
      borderTop: "1px solid var(--border)",
      padding: "12px 20px",
      zIndex: 99,
      display: "none"
    }} className="mobile-cta">
      <button className="btn-gold" style={{ width: "100%", justifyContent: "center" }}>
        Start My Free Will <ArrowRight size={16} />
      </button>
    </div>
    <style>{`@media (max-width: 768px) { .mobile-cta { display: block !important; } }`}</style>
  </>
);

// ── Page ──────────────────────────────────────────────────────────────────────
export default function LandingPage() {
  return (
    <>
      <FontLoader />
      <div style={{ minHeight: "100vh" }}>
        <Navbar />
        <main style={{ paddingTop: 72 }}>
          <Hero />
          <PressBar />
          <StatsRow />
          <HowItWorks />
          <Benefits />
          <Testimonials />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
        <StickyMobileCTA />
      </div>
    </>
  );
}