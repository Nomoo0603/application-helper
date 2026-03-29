import { Link, useLocation } from 'react-router-dom'
import { Waves } from 'lucide-react'

export default function Navbar({ variant = 'default' }) {
  const location = useLocation()
  const isTransparent = variant === 'transparent'
  const isDashboard = location.pathname === '/dashboard'

  return (
    <nav
      aria-label="Primary"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isTransparent
        ? 'bg-transparent'
        : isDashboard
        ? 'bg-slate-900 border-b border-slate-800'
        : 'bg-white/80 backdrop-blur-xl border-b border-slate-200/60'
    }`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
            isTransparent || isDashboard
              ? 'bg-white/20 backdrop-blur-sm'
              : 'bg-gradient-to-br from-brand-500 to-brand-700'
          }`}>
            <Waves className="w-4 h-4 text-white" />
          </div>
          <span className={`text-lg font-bold tracking-tight transition-colors ${
            isTransparent || isDashboard ? 'text-white' : 'text-slate-900'
          }`}>
            ApplyWave
          </span>
          {isDashboard && (
            <span className="ml-2 px-2 py-0.5 rounded-md bg-white/10 text-white/60 text-xs font-medium">
              Institutions
            </span>
          )}
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          {!isDashboard && (
            <Link
              to="/dashboard"
              className={`text-sm font-medium px-3 py-2 rounded-lg transition-colors duration-200 ${
                isTransparent
                  ? 'text-white/80 hover:text-white hover:bg-white/10'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Institutions
            </Link>
          )}
          {isDashboard ? (
            <Link
              to="/intake"
              className="text-sm font-medium px-4 py-2 rounded-lg bg-white/10 text-white/80 hover:bg-white/20 hover:text-white transition-all duration-200"
            >
              Switch to Applicant View
            </Link>
          ) : (
            <Link
              to="/intake"
              className={`text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200 ${
                isTransparent
                  ? 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30'
                  : 'bg-brand-600 text-white hover:bg-brand-700'
              }`}
            >
              Check My Application
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}
