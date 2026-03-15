import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ClassifyRight — Contractor Misclassification Risk Scanner',
  description:
    'Avoid IRS audits and DOL penalties. Scan your contractor relationship for misclassification risk in under 5 minutes.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-slate-50 font-sans antialiased">
        <nav className="bg-[#1a2744] border-b border-[#243460]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <svg
                className="w-7 h-7 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <span className="text-white font-bold text-lg tracking-tight">
                ClassifyRight
              </span>
            </a>
            <div className="flex items-center gap-6">
              <a
                href="/#pricing"
                className="text-slate-300 hover:text-white text-sm font-medium transition-colors"
              >
                Pricing
              </a>
              <a
                href="/scan"
                className="bg-white text-[#1a2744] text-sm font-semibold px-4 py-2 rounded-lg hover:bg-slate-100 transition-colors"
              >
                Start Free Scan
              </a>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="bg-[#1a2744] text-slate-400 text-sm mt-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© 2026 ClassifyRight. Not legal advice. For informational purposes only.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
