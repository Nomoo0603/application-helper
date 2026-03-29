import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, CheckCircle2, Target, Zap, Lock } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Landing() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar variant="transparent" />

      {/* ─── Hero ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-brand-950 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-brand-800)_0%,_transparent_50%)] opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--color-accent-600)_0%,_transparent_50%)] opacity-20" />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-sm text-brand-200 mb-8">
              <Sparkles className="w-4 h-4" />
              <span>Smart Admissions Support</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6">
              Know exactly
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-accent-400">
                what to do next
              </span>
              on your application.
            </h1>

            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed">
              Most applicants don't drop off because they're unqualified — they drop off because they feel stuck. ApplyWave shows you where you are, what's blocking you, and the one thing to do right now.
            </p>

            <Link
              to="/intake"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl hover:bg-brand-50 transition-all duration-300 hover:shadow-lg hover:shadow-brand-500/20 hover:-translate-y-0.5 text-lg"
            >
              Check My Application
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>

            <p className="mt-6 text-sm text-slate-500">
              Free · Takes 3 minutes · No sign-up required
            </p>
          </div>

          {/* Floating preview card */}
          <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 w-[340px]">
            <div className="bg-white/[0.08] backdrop-blur-xl rounded-2xl border border-white/10 p-6 shadow-2xl space-y-4">
              <div className="flex items-center gap-3 mb-1">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center">
                  <Target className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Your Main Blocker</p>
                  <p className="text-slate-400 text-xs">Essay — Topic Paralysis</p>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-3">
                <div className="flex justify-between text-xs mb-2">
                  <span className="text-slate-400">Application Readiness</span>
                  <span className="text-brand-300 font-medium">62%</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[62%] bg-gradient-to-r from-brand-400 to-brand-500 rounded-full" />
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-3">
                <p className="text-xs text-slate-400 mb-1">Your Next Step</p>
                <p className="text-sm text-white leading-relaxed">Ask a friend: "What story do I always tell?" That's probably your essay topic.</p>
              </div>

              <div className="flex gap-2">
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-medium">4 done</span>
                <span className="px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-medium">3 in progress</span>
                <span className="px-2.5 py-1 rounded-full bg-slate-500/20 text-slate-400 text-xs font-medium">2 remaining</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ─── What You Get ─── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-brand-600 font-semibold text-sm uppercase tracking-wider mb-3">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Three minutes to know exactly where you stand.
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              No sign-up. No fluff. Just a clear picture of your application progress and what to focus on next.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                icon: CheckCircle2,
                title: "Tell us what you've done",
                description: "Check off what you've completed. We'll show you exactly where you stand — no guessing.",
              },
              {
                step: '02',
                icon: Target,
                title: 'We find your friction points',
                description: "For anything incomplete, we ask quick follow-ups to pinpoint exactly what's blocking you.",
              },
              {
                step: '03',
                icon: Zap,
                title: 'Get your action plan',
                description: "A clear checklist of what's done, what's stuck, and the single best thing to do today.",
              },
            ].map((item) => (
              <div key={item.step} className="relative group">
                <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-brand-200 hover:shadow-lg transition-all duration-300 h-full">
                  <span className="text-5xl font-black text-slate-100 group-hover:text-brand-100 transition-colors duration-300">
                    {item.step}
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center mt-4 mb-4 group-hover:bg-brand-100 transition-colors duration-300">
                    <item.icon className="w-5 h-5 text-brand-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Who It's For ─── */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Built for the moments when applying feels overwhelming.
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              Whether you're applying to one school or ten, ApplyWave helps you cut through the noise and focus.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { emoji: '🎯', title: 'First-gen applicants', description: 'When nobody in your family has done this before, you need a clear roadmap.' },
              { emoji: '🌍', title: 'International students', description: "Extra requirements, unclear processes — we help you see what's missing." },
              { emoji: '📚', title: 'Overwhelmed juniors & seniors', description: 'Too many tabs open, too many deadlines. We narrow the focus.' },
              { emoji: '💡', title: 'Anyone feeling stuck', description: "If you're not sure what to do next, that's exactly what we're here for." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                <span className="text-3xl mb-4 block">{item.emoji}</span>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24 px-6 bg-gradient-to-br from-brand-600 via-brand-700 to-brand-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-brand-500)_0%,_transparent_70%)] opacity-30" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stop wondering. Start knowing.
          </h2>
          <p className="text-brand-100 text-lg mb-10 max-w-xl mx-auto">
            In three minutes, you'll see exactly what you've done, what's stuck, and what to do right now.
          </p>
          <Link
            to="/intake"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-700 font-semibold rounded-xl hover:bg-brand-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 text-lg"
          >
            Check My Application
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* ─── Privacy Note ─── */}
      <section className="py-6 px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto flex items-start gap-3">
          <Lock className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
          <p className="text-xs text-slate-400 leading-relaxed">
            <span className="font-medium text-slate-500">Your privacy matters.</span> ApplyWave does not store personal data. Anonymous, aggregated usage patterns may be used to help institutions understand common applicant challenges and improve the admissions experience.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
