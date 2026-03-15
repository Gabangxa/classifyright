'use client'

import { useState } from 'react'
import RiskBadge from '@/components/RiskBadge'
import FactorRow from '@/components/FactorRow'

const SCORE = 14
const SCORE_MAX = 25

const FACTORS: { factor: string; answer: string; riskLevel: 'Low' | 'Medium' | 'High' }[] = [
  {
    factor: 'Behavioral Control',
    answer: 'Partial direction given',
    riskLevel: 'Medium',
  },
  {
    factor: 'Financial Control',
    answer: 'Tools not provided, multi-client',
    riskLevel: 'Low',
  },
  {
    factor: 'Relationship Type',
    answer: 'No written contract',
    riskLevel: 'High',
  },
  {
    factor: 'Integration into Business',
    answer: 'Core to operations',
    riskLevel: 'High',
  },
  {
    factor: 'Multi-Client Activity',
    answer: 'Works with others',
    riskLevel: 'Low',
  },
]

const TOP_RISK_FACTORS = [
  {
    rank: 1,
    title: 'No written independent contractor agreement',
    severity: 'High risk',
    severityColor: 'text-red-600 bg-red-50 border-red-200',
    desc: 'The absence of a formal IC agreement is one of the first things an auditor checks. Without it, the default assumption may favor employee status.',
  },
  {
    rank: 2,
    title: 'Work is core to your business operations',
    severity: 'Moderate risk',
    severityColor: 'text-amber-700 bg-amber-50 border-amber-200',
    desc: 'When a contractor performs work that is integral to the company\'s primary business, the IRS applies greater scrutiny to the classification.',
  },
  {
    rank: 3,
    title: 'You direct the method of work completion',
    severity: 'Moderate risk',
    severityColor: 'text-amber-700 bg-amber-50 border-amber-200',
    desc: 'True independent contractors control how they achieve results. Directing methods — not just outcomes — is a classic indicator of an employment relationship.',
  },
]

const REMEDIATIONS = [
  {
    number: '01',
    action:
      'Add a written independent contractor agreement specifying the contractor may work with other clients, is responsible for their own tools and methods, and is not entitled to employee benefits.',
    priority: 'Urgent',
    priorityColor: 'bg-red-100 text-red-700',
  },
  {
    number: '02',
    action:
      'Switch from hourly or salary-style billing to project-based or milestone-based compensation to demonstrate financial independence and remove the fixed-wage signal.',
    priority: 'High',
    priorityColor: 'bg-amber-100 text-amber-700',
  },
  {
    number: '03',
    action:
      'Remove any contractual clauses or informal expectations restricting work hours, geographic location, or exclusivity. Document that the contractor is free to take other clients.',
    priority: 'High',
    priorityColor: 'bg-amber-100 text-amber-700',
  },
]

export default function ResultsPage() {
  const [showTooltip, setShowTooltip] = useState(false)

  const scorePercent = Math.round((SCORE / SCORE_MAX) * 100)

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1a2744] mb-2">
            Your Scan Results
          </h1>
          <p className="text-slate-500 text-sm">
            Based on IRS Common Law Rules and DOL economic reality test factors
          </p>
        </div>

        {/* Risk summary card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                Overall Risk Classification
              </p>
              <div className="flex items-center gap-3">
                <RiskBadge level="moderate" size="lg" />
                <span className="text-2xl font-extrabold text-[#1a2744]">
                  Score {SCORE}/{SCORE_MAX}
                </span>
              </div>
            </div>
            <div className="sm:text-right">
              <p className="text-xs text-slate-500 mb-1">Contractor: <strong className="text-slate-700">Alex Rivera</strong></p>
              <p className="text-xs text-slate-500">Role: <strong className="text-slate-700">Senior Developer</strong></p>
              <p className="text-xs text-slate-500">State: <strong className="text-slate-700">California</strong></p>
            </div>
          </div>

          {/* Score bar */}
          <div className="mb-6">
            <div className="flex justify-between text-xs text-slate-500 mb-1.5">
              <span>Low Risk</span>
              <span>Moderate Risk</span>
              <span>High Risk</span>
            </div>
            <div className="relative h-4 bg-slate-100 rounded-full overflow-hidden">
              <div className="absolute inset-0 flex">
                <div className="h-full bg-green-200 flex-1" />
                <div className="h-full bg-amber-200 flex-1" />
                <div className="h-full bg-red-200 flex-1" />
              </div>
              <div
                className="absolute top-0 left-0 h-full bg-amber-500 rounded-full transition-all"
                style={{ width: `${scorePercent}%` }}
              />
              <div
                className="absolute top-0 h-full w-0.5 bg-white"
                style={{ left: '33%' }}
              />
              <div
                className="absolute top-0 h-full w-0.5 bg-white"
                style={{ left: '66%' }}
              />
            </div>
            <p className="text-xs text-slate-500 mt-1.5 text-center">
              Score {SCORE}/25 — threshold for High Risk is 18+
            </p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
            <strong>Moderate risk detected.</strong> This contractor relationship has characteristics that could attract IRS scrutiny. Review the factors below and implement the remediation actions before your next filing.
          </div>
        </div>

        {/* Factor breakdown table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm mb-6 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100">
            <h2 className="font-bold text-[#1a2744] text-lg">IRS Factor Breakdown</h2>
            <p className="text-slate-500 text-sm mt-0.5">Per-factor risk contribution based on your answers</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50 text-left">
                  <th className="py-3 px-4 text-xs font-bold text-slate-500 uppercase tracking-wide">IRS Factor</th>
                  <th className="py-3 px-4 text-xs font-bold text-slate-500 uppercase tracking-wide">Your Answer</th>
                  <th className="py-3 px-4 text-xs font-bold text-slate-500 uppercase tracking-wide">Risk</th>
                </tr>
              </thead>
              <tbody>
                {FACTORS.map((row) => (
                  <FactorRow
                    key={row.factor}
                    factor={row.factor}
                    answer={row.answer}
                    riskLevel={row.riskLevel}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top 3 risk factors */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 mb-6">
          <h2 className="font-bold text-[#1a2744] text-lg mb-5">Top 3 Risk Factors</h2>
          <div className="flex flex-col gap-4">
            {TOP_RISK_FACTORS.map((item) => (
              <div key={item.rank} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1a2744] text-white flex items-center justify-center text-sm font-bold">
                  {item.rank}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <p className="font-semibold text-slate-800 text-sm">{item.title}</p>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${item.severityColor}`}>
                      {item.severity}
                    </span>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Remediation actions */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 mb-6">
          <div className="flex items-center gap-2 mb-5">
            <svg className="w-5 h-5 text-[#1a2744]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <h2 className="font-bold text-[#1a2744] text-lg">Remediation Actions</h2>
          </div>
          <div className="flex flex-col gap-4">
            {REMEDIATIONS.map((item) => (
              <div key={item.number} className="flex gap-4 items-start p-4 rounded-xl bg-slate-50 border border-slate-100">
                <span className="flex-shrink-0 text-2xl font-extrabold text-slate-200 leading-none">
                  {item.number}
                </span>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${item.priorityColor}`}>
                      {item.priority}
                    </span>
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed">{item.action}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="bg-[#1a2744] rounded-2xl p-6 sm:p-8 text-white mb-6">
          <h2 className="font-bold text-lg mb-2">Ready to act on these findings?</h2>
          <p className="text-slate-300 text-sm mb-6">
            Export a PDF audit report to share with your legal or finance team, or speak with a qualified employment attorney.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            {/* PDF export with upgrade tooltip */}
            <div className="relative">
              <button
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                onFocus={() => setShowTooltip(true)}
                onBlur={() => setShowTooltip(false)}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-[#1a2744] font-semibold text-sm px-6 py-3 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Export PDF Audit Report
              </button>
              {showTooltip && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-10 w-56 bg-slate-900 text-white text-xs rounded-lg px-3 py-2 text-center shadow-xl">
                  <div className="font-semibold mb-1">Pro feature</div>
                  <div className="text-slate-300">Upgrade to Pro — $19/mo to unlock PDF exports, rescans, and alerts.</div>
                  <a href="/#pricing" className="inline-block mt-2 text-amber-400 font-semibold hover:underline">
                    View pricing
                  </a>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-slate-900" />
                </div>
              )}
            </div>

            <a
              href="#"
              className="w-full sm:w-auto flex items-center justify-center gap-2 border border-white border-opacity-30 text-white font-semibold text-sm px-6 py-3 rounded-xl hover:bg-white hover:bg-opacity-10 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Speak with an employment attorney
            </a>
          </div>
        </div>

        {/* Run another scan */}
        <div className="text-center">
          <a
            href="/scan"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-[#1a2744] transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Run another contractor scan
          </a>
          <p className="text-xs text-slate-400 mt-2">
            ClassifyRight is not legal advice. Results are informational only.
          </p>
        </div>

      </div>
    </div>
  )
}
