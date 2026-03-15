import PricingCard from '@/components/PricingCard'

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-[#1a2744] text-white pt-20 pb-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: 'radial-gradient(circle at 25px 25px, white 2%, transparent 0%), radial-gradient(circle at 75px 75px, white 2%, transparent 0%)',
              backgroundSize: '100px 100px',
            }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-full px-4 py-2 text-sm font-medium text-slate-200 mb-8">
            <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            IRS &amp; DOL Compliance Tool
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6">
            Is your contractor actually<br />
            <span className="text-amber-400">an employee?</span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Find out in 5 minutes. Avoid IRS audits and DOL penalties with a plain-English
            misclassification risk scan. Built for founders, not lawyers.
          </p>

          <a
            href="/scan"
            className="inline-flex items-center gap-2 bg-white text-[#1a2744] font-bold text-lg px-8 py-4 rounded-xl hover:bg-slate-100 transition-colors shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
            Scan Your Contractor — Free
          </a>
          <p className="text-slate-400 text-sm mt-4">No signup required. Results in under 5 minutes.</p>
        </div>
      </section>

      {/* Social proof strip */}
      <section className="bg-amber-50 border-y border-amber-200 py-5 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6 text-amber-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span className="text-amber-800 font-medium text-sm">
              IRS audits contractor status <strong>up to 6 years back</strong>
            </span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-amber-300" />
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6 text-amber-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-amber-800 font-medium text-sm">
              One reclassification can cost <strong>$50k+</strong> in back taxes and penalties
            </span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-amber-300" />
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6 text-amber-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-amber-800 font-medium text-sm">
              DOL enforcement actions up <strong>40%</strong> since 2022
            </span>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a2744] mb-4">
              How ClassifyRight works
            </h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              We apply the IRS 20-factor test and DOL economic reality test — translated into plain language.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                ),
                title: 'Answer 16 questions',
                desc: 'A guided 5-step questionnaire covering behavioral control, financial control, and relationship type — the three pillars the IRS uses.',
              },
              {
                step: '02',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                title: 'Get a risk score',
                desc: 'Receive a Low / Moderate / High risk classification with a per-factor breakdown explaining exactly which signals are triggering concern.',
              },
              {
                step: '03',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: 'Remediate with confidence',
                desc: "Get plain-English action items: contract language changes, billing structure adjustments, and when to bring in an employment attorney.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center px-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#1a2744] bg-opacity-10 text-[#1a2744] mb-5">
                  {item.icon}
                </div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                  Step {item.step}
                </div>
                <h3 className="text-lg font-bold text-[#1a2744] mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk factors preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a2744] mb-4">
              What we evaluate
            </h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              Based on the IRS Common Law Rules and the DOL&apos;s ABC test framework.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                color: 'border-t-4 border-[#1a2744]',
                icon: (
                  <svg className="w-6 h-6 text-[#1a2744]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                ),
                title: 'Behavioral Control',
                desc: 'Do you direct how, when, and where the work gets done?',
              },
              {
                color: 'border-t-4 border-amber-500',
                icon: (
                  <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Financial Control',
                desc: 'Who supplies tools? Is pay fixed or project-based?',
              },
              {
                color: 'border-t-4 border-green-500',
                icon: (
                  <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
                title: 'Relationship Type',
                desc: 'Is there a written contract? Are benefits provided?',
              },
              {
                color: 'border-t-4 border-red-500',
                icon: (
                  <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: 'Multi-Client Activity',
                desc: 'Does the contractor work with other businesses?',
              },
            ].map((item) => (
              <div key={item.title} className={`bg-white rounded-xl shadow-sm p-6 ${item.color}`}>
                <div className="mb-4">{item.icon}</div>
                <h3 className="font-bold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a2744] mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-slate-500 text-lg">
              Start free. Upgrade when you need more scans, exports, or team features.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-start">
            <PricingCard
              tierName="Starter"
              price="Free"
              description="Perfect for a single hire you want to double-check."
              features={[
                '1 contractor scan per month',
                'Risk score with factor breakdown',
                'Top 3 remediation actions',
                'Plain-English plain',
              ]}
              ctaLabel="Start Free Scan"
              ctaHref="/scan"
            />
            <PricingCard
              tierName="Pro"
              price="$19"
              description="For founders managing a small contractor roster."
              features={[
                '10 contractor scans per month',
                'Quarterly automatic rescans',
                'PDF audit report export',
                'Email risk change alerts',
                'Priority support',
              ]}
              highlighted={true}
              ctaLabel="Start Pro Trial"
              ctaHref="/scan"
            />
            <PricingCard
              tierName="Team"
              price="$49"
              description="For ops teams managing contractors at scale."
              features={[
                '25 contractor scans per month',
                '5 team member seats',
                'Slack risk alerts',
                'CSV bulk import',
                'Quarterly rescans + history',
                'Dedicated onboarding call',
              ]}
              ctaLabel="Talk to Sales"
              ctaHref="#"
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-[#1a2744] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <svg
            className="w-14 h-14 mx-auto mb-6 text-white opacity-80"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Don&apos;t wait for an audit letter
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            The IRS can assess back payroll taxes, interest, and penalties retroactively. A 5-minute
            scan now is worth far more than a $50k+ surprise later.
          </p>
          <a
            href="/scan"
            className="inline-flex items-center gap-2 bg-white text-[#1a2744] font-bold text-lg px-8 py-4 rounded-xl hover:bg-slate-100 transition-colors"
          >
            Run Your Free Scan Now
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  )
}
