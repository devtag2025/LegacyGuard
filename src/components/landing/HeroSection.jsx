import React from 'react';
// import { ParticleAnimation } from '@/components/ui/ParticleAnimation';
import heroImage from '../../../public/images/landing1.png';

const SENSE_CHECK_ITEMS = [
  'You own a property',
  'You have children or a blended family',
  "You haven't reviewed your will in several years",
  "You're unsure how tax or family changes may affect your estate",
];

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative bg-night overflow-hidden min-h-dvh"
      aria-label="Page introduction"
    >
      {/* <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-0 opacity-50"
        style={{
          maskImage:
            'radial-gradient(ellipse 70% 90% at 68% 40%, black 20%, transparent 78%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 70% 90% at 68% 40%, black 20%, transparent 78%)',
        }}
      ></div> */}
      {/* <ParticleAnimation /> */}

      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-0 hidden lg:block"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          opacity: 0.9,
          maskImage: 'linear-gradient(to left, rgba(0,0,0,0.6) 0%, transparent 60%)',
          WebkitMaskImage:
            'linear-gradient(to left, rgba(0,0,0,0.6) 0%, transparent 60%)',
        }}
      />

      {/* Grid texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-[1] opacity-[0.02]"
        style={{
          backgroundImage:
            'linear-gradient(var(--color-cadet) 1px,transparent 1px),linear-gradient(90deg,var(--color-cadet) 1px,transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />

      {/* Radial glow */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none z-[1] -top-[10%] left-1/2 -translate-x-1/2 w-[70%] h-[60%]"
        style={{
          background:
            'radial-gradient(ellipse at center,rgba(157,180,192,0.05) 0%,transparent 70%)',
        }}
      />

      {/* Bottom vignette */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{
          background: 'linear-gradient(to top, rgba(19,19,19,0.65) 0%, transparent 50%)',
        }}
      />

      {/* Content */}
      <div className="container-brand relative z-10 flex flex-col justify-center min-h-dvh pt-[calc(70px+3rem)] pb-14">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <span className="block w-6 h-px bg-cadet opacity-40" aria-hidden="true" />
          <span className="label-eyebrow text-cadet opacity-60">UK Estate Planning</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-14">
          {/* LEFT */}
          <div className="flex flex-col lg:flex-1">
            {/* Headline */}
            <h1 className="font-monument text-frosted leading-[1.1] tracking-[-0.02em] mb-4 text-[clamp(1.6rem,2.8vw,2.55rem)]">
              Start your will — and make sure
              <br className="hidden lg:block" /> it actually does{' '}
              <span className="text-cadet">what you intend.</span>
            </h1>

            {/* Directive 2 — add directly under headline */}
            <p className="font-sans text-cadet/65 text-[0.92rem] leading-relaxed mb-6 max-w-[480px]">
              Most people only realise there are gaps when it's too late — this helps you
              check now.
            </p>

            {/* Subtext */}
            <p className="font-sans text-frosted/55 text-[0.93rem] leading-[1.75] mb-5 max-w-[460px] hidden lg:block">
              Most people assume a standard will is enough. For many homeowners and
              families, it isn't. Our assessment helps you understand what your situation
              actually requires.
            </p>

            {/* Emotional anchor */}
            <p className="font-monument font-light text-frosted/50 text-[0.86rem] leading-[1.65] mb-8 max-w-[440px] border-l-2 border-cadet/18 pl-4 hidden lg:block">
              The decisions you make today will shape what your family receives — and how.
            </p>

            {/* Sense check — mobile */}
            <div className="lg:hidden mb-8">
              <SenseCheckCard />
            </div>

            {/* CTAs — directive 6: primary + secondary only, no variations */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-8">
              <a
                href="/assessment"
                className="btn btn-ghost text-[0.85rem] whitespace-nowrap"
                data-track="hero-cta-primary"
              >
                Start Your 3-Minute Assessment
              </a>
              <a
                href="/book"
                className="font-sans text-cadet/65 text-[0.82rem] tracking-wide hover:text-cadet transition-colors"
                data-track="hero-cta-book"
              >
                Speak to an Adviser
              </a>
            </div>

            {/* Trust signals — directive 1: remove FCA, update wording */}
            <ul
              className="flex flex-wrap gap-x-6 gap-y-2"
              role="list"
              aria-label="Trust indicators"
            >
              {[
                'UK-based estate planning services',
                'Delivered by qualified professionals',
                'No obligation consultation',
              ].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 12 14"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M6 0L7.5 4.5H12L8.5 7L10 12L6 9.5L2 12L3.5 7L0 4.5H4.5L6 0Z"
                      stroke="#9DB4C0"
                      strokeWidth="1"
                      fill="none"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="font-sans text-[0.7rem] tracking-wide text-cadet/65">
                    {t}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT — sense check card desktop */}
          <div className="hidden lg:flex lg:flex-shrink-0 lg:w-[400px]">
            <SenseCheckCard />
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-px z-10"
        style={{
          background:
            'linear-gradient(to right,transparent,rgba(157,180,192,0.25),transparent)',
        }}
      />
    </section>
  );
}

function SenseCheckCard() {
  return (
    <div
      className="rounded-sm w-full border border-cadet/[0.16] bg-night/60"
      style={{ backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}
    >
      {/* Header */}
      <div className="px-6 py-4 flex items-center gap-3 border-b border-cadet/[0.08]">
        <span className="relative flex h-2 w-2 flex-shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cadet opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-cadet" />
        </span>
        <p className="font-sans text-cadet/60 text-[0.68rem] tracking-[0.13em] uppercase font-medium">
          Before you begin, a quick sense check…
        </p>
      </div>

      {/* Directive 3 — add line above checklist */}
      <div className="px-6 pt-4 pb-1">
        <p className="font-sans text-cadet/50 text-[0.8rem] leading-relaxed italic">
          In most cases, a standard will works. But if any of the following apply…
        </p>
      </div>

      {/* Items */}
      <ul className="px-6 py-4 flex flex-col gap-4">
        {SENSE_CHECK_ITEMS.map((item, i) => (
          <li key={item} className="flex items-start gap-3.5">
            <span
              className="font-monument text-[0.6rem] tracking-widest flex-shrink-0 mt-0.5 text-cadet/35"
              aria-hidden="true"
            >
              0{i + 1}
            </span>
            <span className="font-sans text-frosted/80 text-[0.88rem] leading-[1.55]">
              {item}
            </span>
          </li>
        ))}
      </ul>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-cadet/[0.08]">
        <p className="font-sans text-cadet/55 text-[0.82rem] leading-[1.65] italic">
          If any of these apply, it's worth understanding your situation properly before
          proceeding.
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
