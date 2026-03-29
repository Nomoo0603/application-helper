import { Link } from 'react-router-dom'
import { Waves } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center">
                <Waves className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-white font-semibold">ApplyWave</span>
            </div>
            <p className="text-sm text-slate-500 text-center md:text-left">
              Turning applicant confusion into clear next steps.
            </p>
            <p className="text-xs text-slate-600 text-center md:text-right">
              AI-Assisted Prototype · Built for university innovation
            </p>
          </div>
          <nav
            aria-label="Footer"
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm border-t border-slate-800 pt-8"
          >
            <Link to="/" className="text-slate-500 hover:text-slate-300 transition-colors">
              Home
            </Link>
            <Link to="/intake" className="text-slate-500 hover:text-slate-300 transition-colors">
              Check application
            </Link>
            <Link to="/dashboard" className="text-slate-500 hover:text-slate-300 transition-colors">
              Institutions dashboard
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
