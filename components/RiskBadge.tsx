interface RiskBadgeProps {
  level: 'low' | 'moderate' | 'high'
  size?: 'sm' | 'md' | 'lg'
}

const config = {
  low: {
    label: 'Low Risk',
    bg: 'bg-green-100',
    text: 'text-green-800',
    border: 'border-green-200',
    dot: 'bg-green-500',
  },
  moderate: {
    label: 'Moderate Risk',
    bg: 'bg-amber-100',
    text: 'text-amber-800',
    border: 'border-amber-200',
    dot: 'bg-amber-500',
  },
  high: {
    label: 'High Risk',
    bg: 'bg-red-100',
    text: 'text-red-800',
    border: 'border-red-200',
    dot: 'bg-red-500',
  },
}

const sizeClasses = {
  sm: 'text-xs px-2 py-0.5',
  md: 'text-sm px-3 py-1',
  lg: 'text-base px-4 py-1.5',
}

export default function RiskBadge({ level, size = 'md' }: RiskBadgeProps) {
  const c = config[level]
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full font-semibold border ${c.bg} ${c.text} ${c.border} ${sizeClasses[size]}`}
    >
      <span className={`w-2 h-2 rounded-full ${c.dot}`} />
      {c.label}
    </span>
  )
}
