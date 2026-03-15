interface PricingCardProps {
  tierName: string
  price: string
  period?: string
  description: string
  features: string[]
  highlighted?: boolean
  ctaLabel: string
  ctaHref: string
}

export default function PricingCard({
  tierName,
  price,
  period = '/mo',
  description,
  features,
  highlighted = false,
  ctaLabel,
  ctaHref,
}: PricingCardProps) {
  return (
    <div
      className={`relative rounded-2xl border p-8 flex flex-col gap-6 transition-shadow
        ${highlighted
          ? 'bg-[#1a2744] border-[#243460] shadow-2xl text-white scale-105'
          : 'bg-white border-slate-200 shadow-sm hover:shadow-md text-slate-800'
        }
      `}
    >
      {highlighted && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="bg-amber-400 text-amber-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
            Most Popular
          </span>
        </div>
      )}

      <div>
        <p className={`text-sm font-semibold uppercase tracking-widest mb-1 ${highlighted ? 'text-slate-300' : 'text-slate-500'}`}>
          {tierName}
        </p>
        <div className="flex items-baseline gap-1">
          <span className={`text-4xl font-extrabold ${highlighted ? 'text-white' : 'text-[#1a2744]'}`}>
            {price}
          </span>
          {price !== 'Free' && (
            <span className={`text-sm font-medium ${highlighted ? 'text-slate-400' : 'text-slate-500'}`}>
              {period}
            </span>
          )}
        </div>
        <p className={`text-sm mt-2 ${highlighted ? 'text-slate-300' : 'text-slate-500'}`}>
          {description}
        </p>
      </div>

      <ul className="flex flex-col gap-3 flex-1">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm">
            <svg
              className={`w-5 h-5 flex-shrink-0 mt-0.5 ${highlighted ? 'text-green-400' : 'text-green-500'}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className={highlighted ? 'text-slate-200' : 'text-slate-600'}>{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href={ctaHref}
        className={`block text-center text-sm font-semibold py-3 px-6 rounded-xl transition-colors
          ${highlighted
            ? 'bg-white text-[#1a2744] hover:bg-slate-100'
            : 'bg-[#1a2744] text-white hover:bg-[#243460]'
          }
        `}
      >
        {ctaLabel}
      </a>
    </div>
  )
}
