'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import ProgressBar from '@/components/ProgressBar'

type YesNoSometimes = 'yes' | 'no' | 'sometimes' | ''
type YesNo = 'yes' | 'no' | ''

interface FormData {
  // Step 1
  contractorName: string
  role: string
  state: string
  startDate: string
  // Step 2 — behavioral control
  setsHours: YesNoSometimes
  directsMethod: YesNoSometimes
  requiresTraining: YesNoSometimes
  assignsAdditionalWork: YesNoSometimes
  // Step 3 — financial control
  worksExclusively: YesNoSometimes
  providesTools: YesNoSometimes
  fixedSalary: YesNoSometimes
  reimbursesExpenses: YesNoSometimes
  // Step 4 — relationship type
  writtenContract: YesNoSometimes
  definedEndDate: YesNoSometimes
  providesBenefits: YesNoSometimes
  coreToOperations: YesNoSometimes
  // Step 5 — multi-client
  advertisesServices: YesNo
  workedWithOthers: YesNo
}

const INITIAL_FORM: FormData = {
  contractorName: '',
  role: '',
  state: '',
  startDate: '',
  setsHours: '',
  directsMethod: '',
  requiresTraining: '',
  assignsAdditionalWork: '',
  worksExclusively: '',
  providesTools: '',
  fixedSalary: '',
  reimbursesExpenses: '',
  writtenContract: '',
  definedEndDate: '',
  providesBenefits: '',
  coreToOperations: '',
  advertisesServices: '',
  workedWithOthers: '',
}

const US_STATES = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
  'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
  'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan',
  'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
  'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
  'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
  'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia',
  'Wisconsin', 'Wyoming', 'District of Columbia',
]

function RadioGroup({
  name,
  value,
  onChange,
  options,
}: {
  name: string
  value: string
  onChange: (val: string) => void
  options: { label: string; value: string }[]
}) {
  return (
    <div className="flex gap-3 flex-wrap">
      {options.map((opt) => (
        <label
          key={opt.value}
          className={`flex items-center gap-2 cursor-pointer px-4 py-2.5 rounded-lg border-2 text-sm font-medium transition-all
            ${value === opt.value
              ? 'border-[#1a2744] bg-[#1a2744] text-white'
              : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
            }`}
        >
          <input
            type="radio"
            name={name}
            value={opt.value}
            checked={value === opt.value}
            onChange={() => onChange(opt.value)}
            className="sr-only"
          />
          {opt.label}
        </label>
      ))}
    </div>
  )
}

const YNS_OPTIONS = [
  { label: 'Yes', value: 'yes' },
  { label: 'No', value: 'no' },
  { label: 'Sometimes', value: 'sometimes' },
]

const YN_OPTIONS = [
  { label: 'Yes', value: 'yes' },
  { label: 'No', value: 'no' },
]

function QuestionBlock({
  question,
  name,
  value,
  onChange,
  options = YNS_OPTIONS,
}: {
  question: string
  name: string
  value: string
  onChange: (val: string) => void
  options?: { label: string; value: string }[]
}) {
  return (
    <div className="py-5 border-b border-slate-100 last:border-0">
      <p className="text-slate-700 font-medium mb-3 leading-snug">{question}</p>
      <RadioGroup name={name} value={value} onChange={onChange} options={options} />
    </div>
  )
}

export default function ScanPage() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState<FormData>(INITIAL_FORM)
  const router = useRouter()

  const TOTAL_STEPS = 5

  function set<K extends keyof FormData>(key: K, value: FormData[K]) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  function canProceed(): boolean {
    if (step === 1) {
      return form.contractorName.trim() !== '' && form.role.trim() !== '' && form.state !== ''
    }
    if (step === 2) {
      return (
        form.setsHours !== '' &&
        form.directsMethod !== '' &&
        form.requiresTraining !== '' &&
        form.assignsAdditionalWork !== ''
      )
    }
    if (step === 3) {
      return (
        form.worksExclusively !== '' &&
        form.providesTools !== '' &&
        form.fixedSalary !== '' &&
        form.reimbursesExpenses !== ''
      )
    }
    if (step === 4) {
      return (
        form.writtenContract !== '' &&
        form.definedEndDate !== '' &&
        form.providesBenefits !== '' &&
        form.coreToOperations !== ''
      )
    }
    if (step === 5) {
      return form.advertisesServices !== '' && form.workedWithOthers !== ''
    }
    return false
  }

  function handleNext() {
    if (step < TOTAL_STEPS) {
      setStep((s) => s + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      router.push('/results')
    }
  }

  function handleBack() {
    setStep((s) => s - 1)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const stepTitles = [
    'Contractor Basics',
    'Behavioral Control',
    'Financial Control',
    'Relationship Type',
    'Multi-Client Activity',
  ]

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1a2744] mb-2">
            Contractor Risk Scan
          </h1>
          <p className="text-slate-500 text-sm">
            Answer honestly — results are only as accurate as your inputs.
          </p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <ProgressBar currentStep={step} totalSteps={TOTAL_STEPS} />
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8">
          <div className="mb-6">
            <span className="text-xs font-bold text-[#1a2744] uppercase tracking-widest">
              Step {step} of {TOTAL_STEPS}
            </span>
            <h2 className="text-xl font-bold text-slate-800 mt-1">{stepTitles[step - 1]}</h2>
          </div>

          {/* Step 1 — Contractor basics */}
          {step === 1 && (
            <div className="flex flex-col gap-5">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Contractor name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={form.contractorName}
                  onChange={(e) => set('contractorName', e.target.value)}
                  placeholder="e.g. Jane Smith"
                  className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1a2744] focus:border-transparent transition"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Role / title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={form.role}
                  onChange={(e) => set('role', e.target.value)}
                  placeholder="e.g. Senior Developer, Marketing Consultant"
                  className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1a2744] focus:border-transparent transition"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  State of work <span className="text-red-500">*</span>
                </label>
                <select
                  value={form.state}
                  onChange={(e) => set('state', e.target.value)}
                  className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1a2744] focus:border-transparent transition bg-white"
                >
                  <option value="">Select a state</option>
                  {US_STATES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Relationship start date
                </label>
                <input
                  type="date"
                  value={form.startDate}
                  onChange={(e) => set('startDate', e.target.value)}
                  className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1a2744] focus:border-transparent transition"
                />
              </div>
            </div>
          )}

          {/* Step 2 — Behavioral control */}
          {step === 2 && (
            <div>
              <p className="text-sm text-slate-500 mb-4 bg-blue-50 border border-blue-100 rounded-lg p-3">
                <strong className="text-slate-700">Behavioral control</strong> refers to whether you have the right to direct or control how work is performed — not just the outcome.
              </p>
              <QuestionBlock
                question="Do you set the contractor's work hours?"
                name="setsHours"
                value={form.setsHours}
                onChange={(v) => set('setsHours', v as YesNoSometimes)}
              />
              <QuestionBlock
                question="Do you direct HOW they complete their work (not just the outcome)?"
                name="directsMethod"
                value={form.directsMethod}
                onChange={(v) => set('directsMethod', v as YesNoSometimes)}
              />
              <QuestionBlock
                question="Do you provide training or require specific methods?"
                name="requiresTraining"
                value={form.requiresTraining}
                onChange={(v) => set('requiresTraining', v as YesNoSometimes)}
              />
              <QuestionBlock
                question="Can you assign additional work outside the original scope without renegotiation?"
                name="assignsAdditionalWork"
                value={form.assignsAdditionalWork}
                onChange={(v) => set('assignsAdditionalWork', v as YesNoSometimes)}
              />
            </div>
          )}

          {/* Step 3 — Financial control */}
          {step === 3 && (
            <div>
              <p className="text-sm text-slate-500 mb-4 bg-blue-50 border border-blue-100 rounded-lg p-3">
                <strong className="text-slate-700">Financial control</strong> looks at whether the business controls the economic aspects of the worker&apos;s job.
              </p>
              <QuestionBlock
                question="Does the contractor work exclusively for you?"
                name="worksExclusively"
                value={form.worksExclusively}
                onChange={(v) => set('worksExclusively', v as YesNoSometimes)}
              />
              <QuestionBlock
                question="Do you provide their primary tools or equipment?"
                name="providesTools"
                value={form.providesTools}
                onChange={(v) => set('providesTools', v as YesNoSometimes)}
              />
              <QuestionBlock
                question="Is their pay a fixed salary (not per-project or hourly by choice)?"
                name="fixedSalary"
                value={form.fixedSalary}
                onChange={(v) => set('fixedSalary', v as YesNoSometimes)}
              />
              <QuestionBlock
                question="Do you reimburse all of their business expenses?"
                name="reimbursesExpenses"
                value={form.reimbursesExpenses}
                onChange={(v) => set('reimbursesExpenses', v as YesNoSometimes)}
              />
            </div>
          )}

          {/* Step 4 — Relationship type */}
          {step === 4 && (
            <div>
              <p className="text-sm text-slate-500 mb-4 bg-blue-50 border border-blue-100 rounded-lg p-3">
                <strong className="text-slate-700">Relationship type</strong> examines how the parties perceive their arrangement and whether it resembles an employment relationship.
              </p>
              <QuestionBlock
                question="Is there a written contract defining the relationship as independent?"
                name="writtenContract"
                value={form.writtenContract}
                onChange={(v) => set('writtenContract', v as YesNoSometimes)}
              />
              <QuestionBlock
                question="Does the relationship have a defined end date or project scope?"
                name="definedEndDate"
                value={form.definedEndDate}
                onChange={(v) => set('definedEndDate', v as YesNoSometimes)}
              />
              <QuestionBlock
                question="Do you provide employee benefits (health insurance, vacation, retirement, etc.)?"
                name="providesBenefits"
                value={form.providesBenefits}
                onChange={(v) => set('providesBenefits', v as YesNoSometimes)}
              />
              <QuestionBlock
                question="Is the work they do core to your business operations?"
                name="coreToOperations"
                value={form.coreToOperations}
                onChange={(v) => set('coreToOperations', v as YesNoSometimes)}
              />
            </div>
          )}

          {/* Step 5 — Multi-client check */}
          {step === 5 && (
            <div>
              <p className="text-sm text-slate-500 mb-4 bg-blue-50 border border-blue-100 rounded-lg p-3">
                <strong className="text-slate-700">Multi-client activity</strong> is one of the strongest indicators of true independent contractor status. A genuine contractor typically maintains an independent business.
              </p>
              <QuestionBlock
                question="Does the contractor actively advertise their services to other potential clients?"
                name="advertisesServices"
                value={form.advertisesServices}
                onChange={(v) => set('advertisesServices', v as YesNo)}
                options={YN_OPTIONS}
              />
              <QuestionBlock
                question="Have they worked with other businesses in the last 12 months?"
                name="workedWithOthers"
                value={form.workedWithOthers}
                onChange={(v) => set('workedWithOthers', v as YesNo)}
                options={YN_OPTIONS}
              />
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t border-slate-100">
            <button
              onClick={handleBack}
              disabled={step === 1}
              className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 disabled:opacity-30 disabled:cursor-not-allowed transition-colors px-4 py-2 rounded-lg hover:bg-slate-100"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </button>
            <button
              onClick={handleNext}
              disabled={!canProceed()}
              className="flex items-center gap-2 bg-[#1a2744] text-white text-sm font-semibold px-6 py-2.5 rounded-xl hover:bg-[#243460] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              {step === TOTAL_STEPS ? (
                <>
                  View Results
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </>
              ) : (
                <>
                  Next
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-slate-400 mt-6">
          ClassifyRight is an informational tool, not legal advice. Consult an employment attorney for binding guidance.
        </p>
      </div>
    </div>
  )
}
