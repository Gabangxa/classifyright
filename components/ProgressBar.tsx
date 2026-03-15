interface ProgressBarProps {
  currentStep: number
  totalSteps: number
}

export default function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const percentage = Math.round((currentStep / totalSteps) * 100)

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-slate-600">
          Step {currentStep} of {totalSteps}
        </span>
        <span className="text-sm font-semibold text-[#1a2744]">{percentage}% complete</span>
      </div>
      <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#1a2744] rounded-full transition-all duration-300 ease-in-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="flex justify-between mt-2">
        {Array.from({ length: totalSteps }, (_, i) => {
          const step = i + 1
          const isDone = step < currentStep
          const isCurrent = step === currentStep
          return (
            <div key={step} className="flex flex-col items-center gap-1">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-colors
                  ${isDone ? 'bg-[#1a2744] border-[#1a2744] text-white' : ''}
                  ${isCurrent ? 'bg-white border-[#1a2744] text-[#1a2744]' : ''}
                  ${!isDone && !isCurrent ? 'bg-white border-slate-300 text-slate-400' : ''}
                `}
              >
                {isDone ? (
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  step
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
