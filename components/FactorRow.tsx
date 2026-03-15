interface FactorRowProps {
  factor: string
  answer: string
  riskLevel: 'Low' | 'Medium' | 'High'
}

const riskStyles = {
  Low: {
    bg: 'bg-green-50',
    text: 'text-green-700',
    border: 'border-green-200',
    dot: 'bg-green-500',
  },
  Medium: {
    bg: 'bg-amber-50',
    text: 'text-amber-700',
    border: 'border-amber-200',
    dot: 'bg-amber-500',
  },
  High: {
    bg: 'bg-red-50',
    text: 'text-red-700',
    border: 'border-red-200',
    dot: 'bg-red-500',
  },
}

export default function FactorRow({ factor, answer, riskLevel }: FactorRowProps) {
  const style = riskStyles[riskLevel]
  return (
    <tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
      <td className="py-3 px-4 text-sm font-medium text-slate-800">{factor}</td>
      <td className="py-3 px-4 text-sm text-slate-600">{answer}</td>
      <td className="py-3 px-4">
        <span
          className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border ${style.bg} ${style.text} ${style.border}`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
          {riskLevel}
        </span>
      </td>
    </tr>
  )
}
