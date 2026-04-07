import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { PageLayout } from '@/components/layout/PageLayout';
import { SEOHead } from '@/components/shared/seohead/SeoHead';
import { useAnalytics } from '@/hooks/useAnalytics';
import { ROUTES } from '@/libs/constants';

const WILL_INCLUSIONS = [
  'Appoint an executor to carry out your wishes',
  'Name guardians for any children under 18',
  'Specify who inherits your estate and in what proportions',
  'Leave specific gifts of money or possessions',
  'Include a letter of wishes alongside your will',
];

export function SimpleWillPage() {
  const navigate = useNavigate();
  const { trackWillStarted } = useAnalytics();

  useEffect(() => {
    trackWillStarted();
  }, [trackWillStarted]);

  return (
    <PageLayout>
      <SEOHead
        title="Write Your Will — iTrust121"
        description="Your situation looks straightforward. Start your will online with iTrust121."
      />

      <div className="container-brand max-w-[680px] mx-auto px-5 py-16">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <span className="divider" aria-hidden="true" />
          <span className="label-eyebrow text-cadet/60">Your will</span>
        </div>

        <h1
          className="font-monument text-frosted mb-4"
          style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', lineHeight: 1.2 }}
        >
          A standard will is the right fit
          <br />
          <span className="text-cadet">for your situation.</span>
        </h1>

        <p className="font-sans text-cadet/65 text-[15px] leading-relaxed mb-12 max-w-[500px]">
          Based on your answers, you can proceed directly. Your will is legally valid
          across England and Wales once signed and witnessed correctly.
        </p>

        {/* What's included */}
        <div className="border border-cadet/12 rounded-sm p-6 bg-cadet/3 mb-10">
          <p className="font-sans text-xs tracking-widest uppercase text-cadet/45 mb-5">
            What your will can include
          </p>
          <ul className="flex flex-col gap-3">
            {WILL_INCLUSIONS.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  className="mt-[7px] w-[5px] h-[5px] min-w-[5px] rounded-full bg-cadet/50"
                  aria-hidden="true"
                />
                <span className="font-sans text-[14px] text-frosted/75 leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTAs */}
        <div className="flex flex-col gap-3 max-w-[420px]">
          <button
            type="button"
            onClick={() => navigate(ROUTES.WILL_START)}
            className="w-full py-4 font-sans text-[15px] font-medium bg-cadet text-night rounded-sm hover:bg-cadet/88 transition-colors"
          >
            Start writing my will
          </button>
          <button
            type="button"
            onClick={() => navigate(ROUTES.BOOK)}
            className="w-full py-4 font-sans text-[15px] text-cadet/65 border border-cadet/18 rounded-sm hover:border-cadet/40 hover:text-cadet transition-colors"
          >
            Speak to an adviser first
          </button>
        </div>

        <p className="font-sans text-xs text-cadet/35 mt-5">
          You can always speak to an adviser at any point if your situation changes.
        </p>
      </div>
    </PageLayout>
  );
}
