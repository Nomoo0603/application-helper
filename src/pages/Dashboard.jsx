import { Users, AlertTriangle, TrendingUp, TrendingDown, Minus, Globe, Home, Lightbulb, Target, Activity } from 'lucide-react'
import Navbar from '../components/Navbar'
import { DASHBOARD_DATA } from '../data/mockData'
import { useState, useEffect } from 'react'

function AnimatedNumber({ value, suffix = '' }) {
  const [display, setDisplay] = useState(0)
  useEffect(() => {
    const duration = 1000
    const start = performance.now()
    const animate = (now) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(eased * value))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [value])
  return <>{display}{suffix}</>
}

function StatCard({ icon, label, value, suffix = '', sub, color = 'brand' }) {
  const IconComponent = icon
  const colorMap = {
    brand: 'bg-brand-500/10 text-brand-400',
    rose: 'bg-rose-500/10 text-rose-400',
    amber: 'bg-amber-500/10 text-amber-400',
    emerald: 'bg-emerald-500/10 text-emerald-400',
  }
  return (
    <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-6 hover:bg-slate-800/80 hover:border-slate-600/50 transition-all duration-300">
      <div className={`w-10 h-10 rounded-xl ${colorMap[color]} flex items-center justify-center mb-4`}>
        <IconComponent className="w-5 h-5" />
      </div>
      <p className="text-sm text-slate-400 font-medium mb-1">{label}</p>
      <p className="text-3xl font-bold text-white">
        {typeof value === 'number' ? <AnimatedNumber value={value} suffix={suffix} /> : value}
      </p>
      {sub && <p className="text-xs text-slate-500 mt-1">{sub}</p>}
    </div>
  )
}

function BarChart({ data, maxValue }) {
  const [animated, setAnimated] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="space-y-3.5">
      {data.map((item, i) => (
        <div key={i} className="group">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-sm font-medium text-slate-300">{item.category || item.stage}</span>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-white">{item.percent || item.friction}%</span>
              {item.trend && (
                <span className={`flex items-center ${
                  item.trend === 'up' ? 'text-rose-400' : item.trend === 'down' ? 'text-emerald-400' : 'text-slate-500'
                }`}>
                  {item.trend === 'up' ? <TrendingUp className="w-3.5 h-3.5" /> :
                   item.trend === 'down' ? <TrendingDown className="w-3.5 h-3.5" /> :
                   <Minus className="w-3.5 h-3.5" />}
                </span>
              )}
            </div>
          </div>
          <div className="w-full h-2 bg-slate-700/50 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-brand-400 to-brand-500 transition-all duration-1000 ease-out group-hover:from-brand-300 group-hover:to-brand-400"
              style={{ width: animated ? `${((item.percent || item.friction) / maxValue) * 100}%` : '0%' }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

function RiskDonut({ data, totalApplicants }) {
  const total = data.reduce((sum, d) => sum + d.percent, 0)
  const segments = data.reduce(
    (acc, segment) => {
      acc.segments.push({
        ...segment,
        dashArray: (segment.percent / total) * 251.2,
        dashOffset: -(acc.offset / total) * 251.2,
      })
      acc.offset += segment.percent
      return acc
    },
    { offset: 0, segments: [] },
  ).segments

  return (
    <div className="flex items-center gap-8">
      <div className="relative w-36 h-36 flex-shrink-0">
        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
          {segments.map((segment, i) => {
            return (
              <circle
                key={i}
                cx="50" cy="50" r="40"
                fill="none"
                stroke={segment.color}
                strokeWidth="10"
                strokeDasharray={`${segment.dashArray} ${251.2 - segment.dashArray}`}
                strokeDashoffset={segment.dashOffset}
                className="transition-all duration-1000"
                strokeLinecap="round"
              />
            )
          })}
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-white">{totalApplicants.toLocaleString()}</span>
          <span className="text-xs text-slate-500">applicants</span>
        </div>
      </div>
      <div className="space-y-3">
        {data.map((segment, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: segment.color }} />
            <div>
              <p className="text-sm font-medium text-slate-300">{segment.level}</p>
              <p className="text-xs text-slate-500">{segment.count} · {segment.percent}%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function TrendChart({ data }) {
  const max = Math.max(...data.map(d => d.highRisk))
  const points = data.map((d, i) => {
    const x = 15 + (i / (data.length - 1)) * 170
    const y = 55 - (d.highRisk / max) * 45
    return `${x},${y}`
  }).join(' ')

  return (
    <div>
      <svg viewBox="0 0 200 70" className="w-full h-20">
        <defs>
          <linearGradient id="trendGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#f43f5e" />
          </linearGradient>
        </defs>
        <polyline points={points} fill="none" stroke="url(#trendGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        {data.map((d, i) => {
          const x = 15 + (i / (data.length - 1)) * 170
          const y = 55 - (d.highRisk / max) * 45
          return <circle key={i} cx={x} cy={y} r="3" fill="#60a5fa" />
        })}
      </svg>
      <div className="flex justify-between text-xs text-slate-500 px-2">
        {data.map((w, i) => <span key={i}>{w.week}</span>)}
      </div>
    </div>
  )
}

function InsightCard({ insight }) {
  const config = {
    high: { border: 'border-rose-500/30', badge: 'bg-rose-500/20 text-rose-300' },
    medium: { border: 'border-amber-500/30', badge: 'bg-amber-500/20 text-amber-300' },
    low: { border: 'border-emerald-500/30', badge: 'bg-emerald-500/20 text-emerald-300' },
  }
  const c = config[insight.severity]

  return (
    <div className={`bg-slate-800/50 rounded-xl border ${c.border} p-5 hover:bg-slate-800/80 transition-all duration-300`}>
      <div className="flex items-start justify-between mb-2">
        <h4 className="font-semibold text-white text-sm leading-snug pr-3">{insight.title}</h4>
        <span className={`flex-shrink-0 px-2 py-0.5 rounded-full text-xs font-medium ${c.badge}`}>
          {insight.severity}
        </span>
      </div>
      <p className="text-sm text-slate-400 leading-relaxed mb-3">{insight.description}</p>
      {insight.recommendation && (
        <div className="flex items-start gap-2 pt-3 border-t border-slate-700/50">
          <Lightbulb className="w-3.5 h-3.5 text-brand-400 mt-0.5 flex-shrink-0" />
          <p className="text-xs text-brand-300 leading-relaxed">{insight.recommendation}</p>
        </div>
      )}
    </div>
  )
}

export default function Dashboard() {
  const d = DASHBOARD_DATA
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 pt-28 pb-16">
        {/* Header */}
        <div className="mb-10">
          <p className="text-brand-400 font-semibold text-sm uppercase tracking-wider mb-1">Minerva Admissions Intelligence</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Minerva Applicant Friction Dashboard</h1>
          <p className="text-slate-400 max-w-lg">
            Anonymous aggregate insights across {d.totalApplicants.toLocaleString()} Minerva applicants.
            Surface where candidates struggle with the Minerva-specific process and where admissions can intervene earlier.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 bg-slate-800/50 rounded-xl p-1 mb-8 max-w-sm border border-slate-700/50">
          {['overview', 'blockers', 'insights'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 capitalize ${
                activeTab === tab
                  ? 'bg-brand-600 text-white shadow-md shadow-brand-600/20'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ─── Overview ─── */}
        {activeTab === 'overview' && (
          <div className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatCard icon={Users} label="Total Applicants" value={d.totalApplicants} color="brand" />
              <StatCard icon={AlertTriangle} label="Needs Attention" value={d.highRiskPercent} suffix="%" sub="of all applicants" color="rose" />
              <StatCard icon={Activity} label="Avg Readiness" value={d.avgReadiness} suffix="%" color="amber" />
              <StatCard icon={Target} label="Top Friction Area" value="" color="emerald" sub={d.topBlockerArea} />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-6">
                <h3 className="text-lg font-bold text-white mb-6">Risk Distribution</h3>
                <RiskDonut data={d.riskDistribution} totalApplicants={d.totalApplicants} />
              </div>

              <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-6">
                <h3 className="text-lg font-bold text-white mb-6">Friction Across the Minerva Journey</h3>
                <BarChart data={d.stageFriction} maxValue={80} />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-6">
                <h3 className="text-lg font-bold text-white mb-2">High-Risk Minerva Applicants Over Time</h3>
                <p className="text-sm text-slate-500 mb-4">Weekly trend of candidates who may need intervention before they drop off</p>
                <TrendChart data={d.weeklyTrend} />
              </div>

              <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-6">
                <h3 className="text-lg font-bold text-white mb-6">International vs. Domestic</h3>
                <div className="space-y-4">
                  <div className="bg-brand-500/10 rounded-xl p-4 border border-brand-500/20">
                    <div className="flex items-center gap-2 mb-3">
                      <Globe className="w-4 h-4 text-brand-400" />
                      <span className="text-sm font-semibold text-brand-300">International</span>
                    </div>
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-2xl font-bold text-white">{d.internationalVsDomestic.international.count}</p>
                        <p className="text-xs text-slate-500 mt-1">{d.internationalVsDomestic.international.highRiskPercent}% need attention</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-slate-500">Top blocker</p>
                        <p className="text-sm font-medium text-slate-300">{d.internationalVsDomestic.international.topBlocker}</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-700/30 rounded-xl p-4 border border-slate-700/50">
                    <div className="flex items-center gap-2 mb-3">
                      <Home className="w-4 h-4 text-slate-400" />
                      <span className="text-sm font-semibold text-slate-300">Domestic</span>
                    </div>
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-2xl font-bold text-white">{d.internationalVsDomestic.domestic.count}</p>
                        <p className="text-xs text-slate-500 mt-1">{d.internationalVsDomestic.domestic.highRiskPercent}% need attention</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-slate-500">Top blocker</p>
                        <p className="text-sm font-medium text-slate-300">{d.internationalVsDomestic.domestic.topBlocker}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ─── Blockers ─── */}
        {activeTab === 'blockers' && (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-6">
              <h3 className="text-lg font-bold text-white mb-2">Most Common Friction Categories</h3>
              <p className="text-sm text-slate-500 mb-6">Ranked by frequency across Minerva applicants</p>
              <BarChart data={d.blockerBreakdown} maxValue={30} />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-6">
                <h3 className="text-lg font-bold text-white mb-6">Friction by Stage</h3>
                <BarChart data={d.stageFriction} maxValue={80} />
              </div>

              <div className="bg-gradient-to-br from-brand-700/50 to-brand-900/50 rounded-2xl p-6 border border-brand-600/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <Lightbulb className="w-5 h-5 text-brand-300" />
                    <h3 className="text-lg font-semibold text-white">Key Finding</h3>
                  </div>
                  <p className="text-lg text-white leading-relaxed mb-4">
                    <span className="font-bold">Online interview friction</span> is the clearest Minerva-specific blocker,
                    affecting 23% of applicants.
                  </p>
                  <p className="text-brand-200 text-sm leading-relaxed">
                    Early setup guidance and a mock practice flow would likely improve both completion and response quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ─── Insights ─── */}
        {activeTab === 'insights' && (
          <div className="space-y-6 animate-fade-in">
            <div className="grid md:grid-cols-2 gap-4">
              {d.insights.map((insight, i) => (
                <InsightCard key={i} insight={insight} />
              ))}
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-4">Recommended Actions</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Add a Minerva interview practice experience with camera, timing, and prompt previews',
                  'Restructure extracurricular inputs around action, ownership, and outcome',
                  'Provide an early quantitative readiness guide with sample math practice',
                  'Combine international document and aid guidance into one applicant-facing flow',
                ].map((rec, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-slate-700/30 border border-slate-700/50">
                    <div className="w-6 h-6 rounded-full bg-brand-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-brand-300 text-xs font-bold">{i + 1}</span>
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed">{rec}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Dark footer for dashboard */}
      <footer className="bg-slate-950 border-t border-slate-800 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">ApplyWave for Minerva · Admissions Friction Intelligence</p>
          <p className="text-xs text-slate-700">All applicant data is anonymized and aggregated. AI-Assisted Prototype.</p>
        </div>
      </footer>
    </div>
  )
}
