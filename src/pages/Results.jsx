import { useLocation, Link, useNavigate } from 'react-router-dom'
import { CheckCircle2, Clock, Circle, Target, Zap, RotateCcw, Lock, ChevronDown, ChevronUp, Sparkles } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'

const RISK_CONFIG = {
  low: {
    gradient: 'from-emerald-500 to-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    text: 'text-emerald-700',
    lightBg: 'bg-emerald-100',
    badge: 'bg-emerald-100 text-emerald-700',
    ring: 'ring-emerald-500/20',
    label: '🟢',
  },
  medium: {
    gradient: 'from-amber-500 to-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    text: 'text-amber-700',
    lightBg: 'bg-amber-100',
    badge: 'bg-amber-100 text-amber-700',
    ring: 'ring-amber-500/20',
    label: '🟡',
  },
  high: {
    gradient: 'from-rose-500 to-rose-600',
    bg: 'bg-rose-50',
    border: 'border-rose-200',
    text: 'text-rose-700',
    lightBg: 'bg-rose-100',
    badge: 'bg-rose-100 text-rose-700',
    ring: 'ring-rose-500/20',
    label: '🔴',
  },
}

function AnimatedProgress({ percent, colorClass }) {
  const [width, setWidth] = useState(0)
  useEffect(() => {
    const timer = setTimeout(() => setWidth(percent), 400)
    return () => clearTimeout(timer)
  }, [percent])

  return (
    <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
      <div
        className={`h-full rounded-full bg-gradient-to-r ${colorClass} transition-all duration-1000 ease-out`}
        style={{ width: `${width}%` }}
      />
    </div>
  )
}

function ChecklistSection({ title, items, statusIcon }) {
  const [expanded, setExpanded] = useState(true)

  if (items.length === 0) return null

  return (
    <div className="mb-6">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between mb-3 group cursor-pointer"
      >
        <div className="flex items-center gap-2">
          {statusIcon}
          <h3 className="font-bold text-slate-900">{title}</h3>
          <span className="text-sm text-slate-400 font-medium">({items.length})</span>
        </div>
        {expanded ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
      </button>
      {expanded && (
        <div className="space-y-2.5 animate-fade-in">
          {items.map((item) => (
            <ChecklistCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  )
}

function ChecklistCard({ item }) {
  const [showDetails, setShowDetails] = useState(false)

  const statusConfig = {
    complete: {
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-500" />,
      border: 'border-emerald-100',
      bg: 'bg-emerald-50/50',
    },
    in_progress: {
      icon: <Clock className="w-5 h-5 text-amber-500" />,
      border: 'border-amber-100',
      bg: 'bg-white',
    },
    missing: {
      icon: <Circle className="w-5 h-5 text-slate-300" />,
      border: 'border-slate-100',
      bg: 'bg-white',
    },
  }

  const config = statusConfig[item.status]
  const hasFriction = item.friction && item.status !== 'complete'

  return (
    <div className={`rounded-xl border-2 ${config.border} ${config.bg} transition-all duration-200 hover:shadow-sm`}>
      <button
        onClick={() => hasFriction && setShowDetails(!showDetails)}
        className={`w-full text-left p-4 flex items-center gap-3 ${hasFriction ? 'cursor-pointer' : 'cursor-default'}`}
      >
        {config.icon}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-lg">{item.icon}</span>
            <span className={`font-medium ${item.status === 'complete' ? 'text-emerald-700' : 'text-slate-800'}`}>
              {item.label}
            </span>
          </div>
          {item.status === 'complete' && (
            <p className="text-sm text-emerald-500 mt-0.5">Done ✓</p>
          )}
          {hasFriction && (
            <p className="text-sm text-slate-500 mt-0.5">
              {item.friction.friction}
              {item.friction.severity === 'high' && (
                <span className="ml-2 inline-flex items-center px-1.5 py-0.5 rounded bg-rose-100 text-rose-600 text-xs font-medium">
                  needs attention
                </span>
              )}
            </p>
          )}
        </div>
        {hasFriction && (
          <div className="flex-shrink-0">
            {showDetails
              ? <ChevronUp className="w-4 h-4 text-slate-400" />
              : <ChevronDown className="w-4 h-4 text-slate-400" />
            }
          </div>
        )}
      </button>

      {/* Expanded friction details */}
      {hasFriction && showDetails && (
        <div className="px-4 pb-4 animate-fade-in">
          <div className="ml-8 space-y-3">
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-100">
              <p className="text-sm text-slate-600 leading-relaxed">{item.friction.insight}</p>
            </div>
            <div className="bg-brand-50 rounded-lg p-4 border border-brand-100">
              <div className="flex items-center gap-1.5 mb-1.5">
                <Zap className="w-3.5 h-3.5 text-brand-600" />
                <p className="text-xs font-semibold text-brand-600 uppercase tracking-wider">Next Step</p>
              </div>
              <p className="text-sm text-brand-800 leading-relaxed font-medium">{item.friction.nextStep}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default function Results() {
  const location = useLocation()
  const navigate = useNavigate()
  const diagnosis = location.state?.diagnosis

  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    if (!diagnosis) {
      navigate('/intake')
      return
    }
    const timer = setTimeout(() => setIsLoading(false), 1800)
    return () => clearTimeout(timer)
  }, [diagnosis, navigate])

  if (!diagnosis) return null

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center mx-auto mb-6 animate-pulse">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-xl font-bold text-slate-900 mb-2">Analyzing your application...</h2>
          <p className="text-slate-500">Finding your friction points and building your plan</p>
          <div className="mt-6 flex gap-1.5 justify-center">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2.5 h-2.5 rounded-full bg-brand-500 animate-bounce"
                style={{ animationDelay: `${i * 150}ms` }}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }

  const risk = RISK_CONFIG[diagnosis.riskLevel]
  const completedItems = diagnosis.checklist.filter(i => i.status === 'complete')
  const inProgressItems = diagnosis.checklist.filter(i => i.status === 'in_progress')
  const missingItems = diagnosis.checklist.filter(i => i.status === 'missing')

  const pathLabel = diagnosis.path === 'minerva'
    ? 'Minerva University'
    : diagnosis.colleges?.length > 0
      ? diagnosis.colleges.join(', ')
      : 'College Applications'

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <div className="max-w-3xl mx-auto px-6 pt-28 pb-16">

        {/* ─── Header ─── */}
        <div className="text-center mb-10">
          <p className="text-sm text-slate-400 font-medium mb-2">Results for {pathLabel}</p>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Your Application Breakdown
          </h1>
          <p className="text-slate-500 max-w-lg mx-auto">{diagnosis.encouragement}</p>
        </div>

        {/* ─── Summary Cards ─── */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {/* Readiness */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 text-center hover:shadow-md transition-all duration-300">
            <p className="text-xs text-slate-400 uppercase tracking-wider font-medium mb-2">Readiness</p>
            <p className="text-3xl font-bold text-slate-900 mb-2">{diagnosis.readinessPercent}%</p>
            <AnimatedProgress percent={diagnosis.readinessPercent} colorClass="from-brand-400 to-brand-600" />
          </div>

          {/* Status */}
          <div className={`rounded-2xl border p-5 text-center hover:shadow-md transition-all duration-300 ${risk.bg} ${risk.border}`}>
            <p className="text-xs text-slate-400 uppercase tracking-wider font-medium mb-2">Status</p>
            <p className={`text-xl font-bold ${risk.text}`}>{diagnosis.riskLabel}</p>
            <p className="text-sm text-slate-500 mt-1">
              {diagnosis.completedCount} of {diagnosis.totalCount} done
            </p>
          </div>

          {/* Top Priority */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 text-center hover:shadow-md transition-all duration-300">
            <p className="text-xs text-slate-400 uppercase tracking-wider font-medium mb-2">Top Priority</p>
            {diagnosis.mainBlocker ? (
              <>
                <p className="text-lg font-bold text-slate-900 leading-tight">{diagnosis.mainBlocker.icon}</p>
                <p className="text-sm text-slate-600 font-medium mt-1">{diagnosis.mainBlocker.friction?.friction || diagnosis.mainBlocker.label}</p>
              </>
            ) : (
              <p className="text-sm text-emerald-600 font-medium">All on track!</p>
            )}
          </div>
        </div>

        {/* ─── Main Next Step ─── */}
        {diagnosis.mainBlocker?.friction && (
          <div className="bg-gradient-to-br from-brand-600 to-brand-800 rounded-2xl p-6 md:p-8 mb-8 text-white relative overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <Target className="w-4 h-4 text-brand-200" />
                <p className="text-xs font-semibold text-brand-200 uppercase tracking-wider">Do This First</p>
              </div>
              <p className="text-lg md:text-xl font-semibold leading-relaxed mb-4">
                {diagnosis.mainBlocker.friction.nextStep}
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 text-sm text-brand-100">
                <span>{diagnosis.mainBlocker.icon}</span>
                <span>{diagnosis.mainBlocker.friction.friction}</span>
              </div>
            </div>
          </div>
        )}

        {/* ─── Priorities ─── */}
        {diagnosis.priorities.length > 1 && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-8 hover:shadow-md transition-shadow duration-300">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Zap className="w-4 h-4 text-brand-600" />
              Your Top Priorities
            </h3>
            <div className="space-y-3">
              {diagnosis.priorities.map((p, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100">
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                    p.severity === 'high' ? 'bg-rose-100 text-rose-600' : 'bg-amber-100 text-amber-600'
                  }`}>
                    {i + 1}
                  </div>
                  <div>
                    <p className="font-medium text-slate-800 text-sm">{p.area}: {p.friction}</p>
                    <p className="text-sm text-slate-500 mt-0.5">{p.nextStep}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ─── Full Checklist ─── */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            📋 Your Application Checklist
          </h2>

          {/* Completed */}
          <ChecklistSection
            title="Completed"
            items={completedItems}
            statusIcon={<CheckCircle2 className="w-5 h-5 text-emerald-500" />}
          />

          {/* In Progress / Has Friction */}
          <ChecklistSection
            title="In Progress — Needs Action"
            items={inProgressItems}
            statusIcon={<Clock className="w-5 h-5 text-amber-500" />}
          />

          {/* Missing */}
          <ChecklistSection
            title="Not Started"
            items={missingItems}
            statusIcon={<Circle className="w-5 h-5 text-slate-400" />}
          />
        </div>

        {/* ─── Bottom Actions ─── */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 border-t border-slate-200">
          <Link
            to="/intake"
            className="inline-flex items-center gap-2 px-6 py-3 text-slate-600 font-medium rounded-xl hover:bg-slate-100 transition-all duration-200"
          >
            <RotateCcw className="w-4 h-4" />
            Start Over
          </Link>
        </div>

        {/* ─── Privacy Note ─── */}
        <div className="mt-12 flex items-start gap-3 px-4 py-3 rounded-xl bg-slate-100">
          <Lock className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
          <p className="text-xs text-slate-400 leading-relaxed">
            <span className="font-medium text-slate-500">Privacy note:</span> Your responses are not stored. Anonymous, aggregated patterns may be used to help institutions understand common applicant challenges.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  )
}
