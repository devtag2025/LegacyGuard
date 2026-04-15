// src/features/about/AboutPage.jsx
// Route: /about
// Content sourced from itrust121.com/about + project brand context.

import Header from "../../components/shared/header/Header";
import Footer from "../../components/shared/footer/Footer";
const SERVICES = [
  {
    tag: 'iTrust',
    title: 'Over 20 trust products designed around your life.',
    body: 'No matter how complex your situation — property ownership, blended families, business assets, or inheritance planning — iTrust121 has a structured solution that fits. Browse the full range and find what works for you.',
    href: 'https://www.itrust121.com/itrusts',
    label: 'Explore iTrusts',
  },
  {
    tag: 'iWill',
    title: 'A will that actually does what you intend.',
    body: 'Making a will can feel complicated. With iWill, we guide you through a clear, straightforward process — so the people and things you care about are protected exactly as you intend.',
    href: '/assessment',
    label: 'Start Your Assessment',
  },
  {
    tag: 'For Advisers',
    title: 'iTrust Partner — built for professionals.',
    body: 'If you are an accountant, financial adviser, or other intermediary, the iTrust Partner programme gives you the tools and support to bring estate planning to your clients.',
    href: 'https://www.itrust121.com/partners',
    label: 'Learn about Partnerships',
  },
];

const VALUES = [
  {
    num: '01',
    title: 'Simplified.',
    body: 'Estate planning has been unnecessarily complicated for too long. We strip away the jargon and bring it into plain English — so you understand exactly what you are putting in place and why.',
  },
  {
    num: '02',
    title: 'Explained.',
    body: 'We do not hand you a document and wish you well. Every step of the process is explained clearly, so you leave every conversation more informed than when you started.',
  },
  {
    num: '03',
    title: 'Arranged.',
    body: 'We take care of the structure, the paperwork, and the process — so you do not have to navigate it alone. From assessment to completion, we handle it.',
  },
];

const FACTS = [
  { value: '20+', label: 'Trust products available' },
  { value: '2025', label: 'Established' },
  { value: 'UK', label: 'England & Wales legal frameworks' },
  { value: 'No', label: 'Obligation to proceed' },
];

export function AboutPage() {
  return (
    <div className="bg-night min-h-screen">
      <Header />

      {/* ── Hero ── */}
      <section className="relative bg-night overflow-hidden pt-[calc(70px+5rem)] pb-20">
        <div
          className="absolute pointer-events-none -top-[10%] left-1/2 -translate-x-1/2 w-[70%] h-[60%] z-0"
          style={{
            background:
              'radial-gradient(ellipse at center,rgba(157,180,192,0.06) 0%,transparent 70%)',
          }}
          aria-hidden="true"
        />
        <div className="container-brand relative z-10 max-w-[860px]">
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-8 h-px bg-cadet opacity-40" aria-hidden="true" />
            <span className="label-eyebrow text-cadet/58">About iTrust121</span>
          </div>
          <h1 className="font-monument text-frosted leading-[1.08] tracking-[-0.02em] mb-6 text-[clamp(2rem,4.5vw,3.8rem)]">
            Simplified, explained
            <br />
            <span className="text-cadet">and arranged.</span>
          </h1>
          <p className="font-sans text-frosted/55 text-[1rem] leading-[1.8] max-w-[600px] mb-6">
            For too long, estate planning has felt out of reach — wrapped in jargon, high
            fees, and vague promises. iTrust121 was built to change that.
          </p>
          <p className="font-monument font-light text-frosted/38 text-[0.9rem] leading-[1.7] max-w-[520px] border-l-2 border-cadet/18 pl-5">
            For trusts you understand and protection you deserve.
          </p>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section className="bg-charcoal border-y border-cadet/8">
        <div className="container-brand py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {FACTS.map((f) => (
              <div key={f.label} className="flex flex-col gap-1.5">
                <span className="font-monument text-cadet text-[1.6rem] leading-none">
                  {f.value}
                </span>
                <span className="font-sans text-cadet/48 text-xs leading-snug">
                  {f.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who we are ── */}
      <section className="section bg-night">
        <div className="container-brand">
          <div className="flex flex-col lg:flex-row lg:gap-20">
            {/* Left */}
            <div className="lg:flex-1 mb-12 lg:mb-0">
              <div className="flex items-center gap-3 mb-7">
                <span className="divider" aria-hidden="true" />
                <span className="label-eyebrow text-cadet/58">Who we are</span>
              </div>
              <h2
                className="font-monument text-frosted mb-6"
                style={{ fontSize: 'clamp(1.55rem,2.8vw,2.4rem)', lineHeight: 1.15 }}
              >
                Estate planning for
                <br />
                <span className="text-cadet">every family, every stage.</span>
              </h2>
              <p className="font-sans text-cadet/65 text-[0.93rem] leading-[1.8] mb-5 max-w-[520px]">
                At iTrust121, we believe estate planning should not be complicated. We
                have built a smarter, simpler way to help everyone get the trust they
                deserve and the protection they need.
              </p>
              <p className="font-sans text-cadet/55 text-[0.9rem] leading-[1.8] mb-5 max-w-[520px]">
                Our aim is to transform how people look at trusts and estate planning —
                creating a system that is innovative, adaptable, and accessible. We
                believe that by making estate planning more flexible and clear, we can
                empower our clients to focus on what truly matters: their family, their
                future, and their peace of mind.
              </p>
              <p className="font-sans text-cadet/55 text-[0.9rem] leading-[1.8] max-w-[520px]">
                For too long, discretionary trusts have felt out of reach. We are changing
                that — through plain-English advice, modern tools, and a fully guided
                process that puts you in control.
              </p>
            </div>

            {/* Right — values */}
            <div className="lg:w-[380px] flex flex-col">
              {VALUES.map((v, i) => (
                <div
                  key={v.num}
                  className="flex items-start gap-5 py-7 border-b border-cadet/8"
                  style={{ paddingTop: i === 0 ? 0 : undefined }}
                >
                  <span className="font-monument text-[0.6rem] tracking-widest text-cadet/30 mt-1 flex-shrink-0">
                    {v.num}
                  </span>
                  <div>
                    <h3
                      className="font-monument text-frosted text-[0.95rem] mb-2"
                      style={{ fontWeight: 400 }}
                    >
                      {v.title}
                    </h3>
                    <p className="font-sans text-cadet/58 text-sm leading-[1.7]">
                      {v.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="section bg-charcoal">
        <div className="container-brand">
          <div className="flex items-center gap-3 mb-7">
            <span className="divider" aria-hidden="true" />
            <span className="label-eyebrow text-cadet/58">Our services</span>
          </div>
          <h2
            className="font-monument text-frosted mb-14"
            style={{ fontSize: 'clamp(1.55rem,2.8vw,2.4rem)', lineHeight: 1.15 }}
          >
            What we offer.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div
                key={s.tag}
                className="flex flex-col justify-between rounded-sm border border-cadet/10 p-7 bg-night/40"
              >
                <div>
                  <span className="label-eyebrow text-cadet/48 mb-4 block">{s.tag}</span>
                  <h3
                    className="font-monument text-frosted mb-3 leading-snug"
                    style={{ fontSize: '1rem', fontWeight: 400 }}
                  >
                    {s.title}
                  </h3>
                  <p className="font-sans text-cadet/58 text-sm leading-[1.75] mb-8">
                    {s.body}
                  </p>
                </div>
                <a
                  href={s.href}
                  className="font-sans text-sm text-cadet border-b border-cadet/25 pb-0.5 hover:border-cadet transition-colors self-start"
                >
                  {s.label}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonial ── */}
      <section className="section bg-night">
        <div className="container-brand max-w-[680px]">
          <figure>
            <blockquote className="mb-8">
              <p
                className="font-monument text-frosted/72 leading-[1.65]"
                style={{ fontSize: 'clamp(1rem,2vw,1.3rem)', fontWeight: 300 }}
              >
                &ldquo;With another child on the way I knew I needed a trust but I didn't
                know how to do it. My iTrust adviser took me through the whole process and
                in no time at all I understood how my iTrust worked and how it was going
                to protect my family.&rdquo;
              </p>
            </blockquote>
            <figcaption className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 border border-cadet/18"
                style={{ background: 'rgba(157,180,192,0.08)' }}
                aria-hidden="true"
              >
                <span className="font-monument text-cadet text-[0.58rem] tracking-wider">
                  S
                </span>
              </div>
              <div>
                <p className="font-sans text-sm text-frosted/80 font-medium">Steve, 38</p>
                <p className="font-sans text-xs text-cadet/42 mt-0.5">iTrust121 client</p>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ── Company details ── */}
      <section className="bg-charcoal border-t border-cadet/8">
        <div className="container-brand py-14">
          <div className="flex flex-col lg:flex-row lg:gap-20">
            <div className="lg:flex-1 mb-10 lg:mb-0">
              <div className="flex items-center gap-3 mb-7">
                <span className="divider" aria-hidden="true" />
                <span className="label-eyebrow text-cadet/58">Company information</span>
              </div>
              <h2
                className="font-monument text-frosted mb-5"
                style={{ fontSize: 'clamp(1.2rem,2vw,1.7rem)', lineHeight: 1.2 }}
              >
                iTrust121 Limited
              </h2>
              <p className="font-sans text-cadet/55 text-sm leading-[1.8] mb-1">
                Registered in England & Wales
              </p>
              <p className="font-sans text-cadet/55 text-sm leading-[1.8] mb-6">
                Company No: 17061988
              </p>
              <div className="flex flex-col gap-2.5">
                <a
                  href="tel:02045832632"
                  className="font-sans text-sm text-cadet/65 hover:text-cadet transition-colors flex items-center gap-2.5"
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11.5 19.79 19.79 0 01.01 2.88 2 2 0 012 .7h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.72a16 16 0 006.29 6.29l1.28-1.29a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  020 4583 2632
                </a>
                <a
                  href="mailto:info@itrust121.com"
                  className="font-sans text-sm text-cadet/65 hover:text-cadet transition-colors flex items-center gap-2.5"
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  info@itrust121.com
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-10 lg:gap-16">
              <div>
                <p className="label-eyebrow text-cadet/40 mb-4">Registered Office</p>
                <p className="font-sans text-cadet/58 text-sm leading-[1.9]">
                  Tower Court
                  <br />
                  Oakdale Road
                  <br />
                  York, YO30 4XL
                </p>
              </div>
              <div>
                <p className="label-eyebrow text-cadet/40 mb-4">Correspondence</p>
                <p className="font-sans text-cadet/58 text-sm leading-[1.9]">
                  85 Great Portland Street
                  <br />
                  First Floor
                  <br />
                  London, W1W 7LT
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section bg-night">
        <div className="container-brand max-w-[600px]">
          <div className="flex items-center gap-3 mb-7">
            <span className="divider" aria-hidden="true" />
            <span className="label-eyebrow text-cadet/58">Get started</span>
          </div>
          <h2
            className="font-monument text-frosted mb-5"
            style={{ fontSize: 'clamp(1.55rem,2.8vw,2.4rem)', lineHeight: 1.15 }}
          >
            Ready to understand
            <br />
            <span className="text-cadet">what your situation requires?</span>
          </h2>
          <p className="font-sans text-cadet/58 text-[0.93rem] leading-relaxed mb-10 max-w-[460px]">
            Our 3-minute assessment gives you clarity on your estate planning needs before
            recommending anything. No obligation to proceed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/assessment"
              className="btn btn-ghost whitespace-nowrap"
              data-track="about-cta-primary"
            >
              Start Your 3-Minute Assessment
            </a>
            <a
              href="/book"
              className="font-sans text-sm text-cadet/55 hover:text-cadet transition-colors self-center"
              data-track="about-cta-adviser"
            >
              Speak to an Adviser
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default AboutPage;
