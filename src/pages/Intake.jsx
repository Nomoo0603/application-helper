import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, ArrowLeft, Check, X, Plus, GraduationCap, School } from 'lucide-react'
import Navbar from '../components/Navbar'
import { CHECKLIST_ITEMS_MINERVA, CHECKLIST_ITEMS_OTHER, generateDiagnosis } from '../data/mockData'

const STEPS = [
  { id: 'path', title: 'Your Path' },
  { id: 'progress', title: 'Your Progress' },
  { id: 'friction', title: 'Where You\'re Stuck' },
]

function ProgressBar({ current }) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-3">
        {STEPS.map((step, i) => (
          <div key={step.id} className="flex items-center gap-3 flex-1">
            <div className={`flex items-center gap-2 ${i <= current ? 'opacity-100' : 'opacity-40'}`}>
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 ${
                i < current ? 'bg-brand-500 text-white' :
                i === current ? 'bg-brand-500 text-white ring-4 ring-brand-500/20' :
                'bg-slate-200 text-slate-400'
              }`}>
                {i < current ? <Check className="w-3.5 h-3.5" /> : i + 1}
              </div>
              <span className={`text-sm font-medium hidden sm:inline ${
                i <= current ? 'text-slate-700' : 'text-slate-400'
              }`}>
                {step.title}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div className={`flex-1 h-0.5 rounded-full transition-all duration-500 ${
                i < current ? 'bg-brand-500' : 'bg-slate-200'
              }`} />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Intake() {
  const navigate = useNavigate()
  const [step, setStep] = useState(0)
  const [data, setData] = useState({
    path: '',           // 'minerva' | 'other'
    colleges: [],       // for 'other' path
    collegeInput: '',   // temp input field
    completedItems: [], // ids of completed checklist items
    followUps: {},      // { itemId: followUpOptionId }
    currentFollowUp: 0, // index into incomplete items for step 3
  })

  const checklistItems = data.path === 'minerva' ? CHECKLIST_ITEMS_MINERVA : CHECKLIST_ITEMS_OTHER
  const incompleteItems = checklistItems.filter(item => !data.completedItems.includes(item.id))

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [step])

  const canProceed = () => {
    switch (step) {
      case 0: return data.path !== '' && (data.path === 'minerva' || data.colleges.length > 0)
      case 1: return true
      case 2: return data.currentFollowUp >= incompleteItems.length
      default: return false
    }
  }

  const handleNext = () => {
    if (step === 2 && data.currentFollowUp >= incompleteItems.length) {
      const diagnosis = generateDiagnosis(data)
      navigate('/results', { state: { diagnosis } })
      return
    }
    if (step < STEPS.length - 1) {
      setStep(s => s + 1)
    }
  }

  const handleBack = () => {
    if (step === 2 && data.currentFollowUp > 0) {
      setData(prev => ({ ...prev, currentFollowUp: prev.currentFollowUp - 1 }))
    } else if (step > 0) {
      setStep(s => s - 1)
    }
  }

  const toggleCompleted = (id) => {
    setData(prev => ({
      ...prev,
      completedItems: prev.completedItems.includes(id)
        ? prev.completedItems.filter(c => c !== id)
        : [...prev.completedItems, id],
    }))
  }

  const addCollege = () => {
    const name = data.collegeInput.trim()
    if (name && !data.colleges.includes(name)) {
      setData(prev => ({
        ...prev,
        colleges: [...prev.colleges, name],
        collegeInput: '',
      }))
    }
  }

  const removeCollege = (name) => {
    setData(prev => ({
      ...prev,
      colleges: prev.colleges.filter(c => c !== name),
    }))
  }

  const selectFollowUp = (itemId, optionId) => {
    setData(prev => ({
      ...prev,
      followUps: { ...prev.followUps, [itemId]: optionId },
      currentFollowUp: prev.currentFollowUp + 1,
    }))
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <div className="max-w-2xl mx-auto px-6 pt-28 pb-20">
        <ProgressBar current={step} total={STEPS.length} />

        {/* ─── Step 0: Choose Path ─── */}
        {step === 0 && (
          <div className="animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
              Where are you applying?
            </h2>
            <p className="text-slate-500 mb-8">
              This helps us tailor the checklist and guidance to your situation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <button
                onClick={() => setData(prev => ({ ...prev, path: 'minerva' }))}
                className={`relative text-left p-6 rounded-2xl border-2 transition-all duration-200 group hover:shadow-md ${
                  data.path === 'minerva'
                    ? 'border-brand-500 bg-brand-50 shadow-sm'
                    : 'border-slate-200 bg-white hover:border-brand-200'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-200 ${
                  data.path === 'minerva' ? 'bg-brand-500 text-white' : 'bg-slate-100 text-slate-400 group-hover:bg-brand-50 group-hover:text-brand-500'
                }`}>
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className={`font-bold mb-1 ${data.path === 'minerva' ? 'text-brand-700' : 'text-slate-800'}`}>
                  Minerva University
                </h3>
                <p className="text-sm text-slate-500">Get a Minerva-specific checklist and guidance.</p>
                {data.path === 'minerva' && (
                  <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-brand-500 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </div>
                )}
              </button>

              <button
                onClick={() => setData(prev => ({ ...prev, path: 'other' }))}
                className={`relative text-left p-6 rounded-2xl border-2 transition-all duration-200 group hover:shadow-md ${
                  data.path === 'other'
                    ? 'border-brand-500 bg-brand-50 shadow-sm'
                    : 'border-slate-200 bg-white hover:border-brand-200'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-200 ${
                  data.path === 'other' ? 'bg-brand-500 text-white' : 'bg-slate-100 text-slate-400 group-hover:bg-brand-50 group-hover:text-brand-500'
                }`}>
                  <School className="w-6 h-6" />
                </div>
                <h3 className={`font-bold mb-1 ${data.path === 'other' ? 'text-brand-700' : 'text-slate-800'}`}>
                  Other Colleges
                </h3>
                <p className="text-sm text-slate-500">Common App, Coalition, or any other schools.</p>
                {data.path === 'other' && (
                  <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-brand-500 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </div>
                )}
              </button>
            </div>

            {/* College input for "Other" */}
            {data.path === 'other' && (
              <div className="animate-fade-in">
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Which schools are you applying to?
                </label>
                <div className="flex gap-2 mb-3">
                  <input
                    type="text"
                    value={data.collegeInput}
                    onChange={(e) => setData(prev => ({ ...prev, collegeInput: e.target.value }))}
                    onKeyDown={(e) => e.key === 'Enter' && addCollege()}
                    placeholder="e.g., Stanford, MIT, UCLA..."
                    className="flex-1 px-4 py-3 rounded-xl border-2 border-slate-200 bg-white text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 transition-all duration-200"
                  />
                  <button
                    onClick={addCollege}
                    className="px-4 py-3 rounded-xl bg-brand-600 text-white hover:bg-brand-700 transition-colors"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
                {data.colleges.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {data.colleges.map((college) => (
                      <span
                        key={college}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-100 text-brand-700 text-sm font-medium"
                      >
                        {college}
                        <button onClick={() => removeCollege(college)} className="hover:text-brand-900 transition-colors">
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </span>
                    ))}
                  </div>
                )}
                {data.colleges.length === 0 && (
                  <p className="text-sm text-slate-400">Add at least one school to continue.</p>
                )}
              </div>
            )}
          </div>
        )}

        {/* ─── Step 1: Progress Checklist ─── */}
        {step === 1 && (
          <div className="animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
              What have you already completed?
            </h2>
            <p className="text-slate-500 mb-8">
              Check off everything that's done. Be honest — there's no judgment here. This helps us find where to focus.
            </p>

            <div className="space-y-2.5">
              {checklistItems.map((item) => {
                const isChecked = data.completedItems.includes(item.id)
                return (
                  <button
                    key={item.id}
                    onClick={() => toggleCompleted(item.id)}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-4 hover:shadow-sm ${
                      isChecked
                        ? 'border-emerald-300 bg-emerald-50'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all duration-200 flex-shrink-0 ${
                      isChecked ? 'bg-emerald-500 border-emerald-500' : 'border-slate-300'
                    }`}>
                      {isChecked && <Check className="w-4 h-4 text-white" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{item.icon}</span>
                        <span className={`font-medium ${isChecked ? 'text-emerald-700' : 'text-slate-700'}`}>
                          {item.label}
                        </span>
                      </div>
                      <p className={`text-sm mt-0.5 ${isChecked ? 'text-emerald-500' : 'text-slate-400'}`}>
                        {item.description}
                      </p>
                    </div>
                  </button>
                )
              })}
            </div>

            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm text-slate-400">
                <span className="font-semibold text-emerald-600">{data.completedItems.length}</span> of {checklistItems.length} completed
              </p>
              <div className="w-32 h-2 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full transition-all duration-500"
                  style={{ width: `${(data.completedItems.length / checklistItems.length) * 100}%` }}
                />
              </div>
            </div>
          </div>
        )}

        {/* ─── Step 2: Follow-up Questions ─── */}
        {step === 2 && (
          <div className="animate-fade-in">
            {data.currentFollowUp < incompleteItems.length ? (
              (() => {
                const currentItem = incompleteItems[data.currentFollowUp]
                return (
                  <div key={currentItem.id}>
                    <div className="flex items-center gap-2 mb-6">
                      <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                        {data.currentFollowUp + 1} of {incompleteItems.length} incomplete items
                      </span>
                    </div>

                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{currentItem.icon}</span>
                      <h2 className="text-2xl font-bold text-slate-900">{currentItem.label}</h2>
                    </div>
                    <p className="text-slate-600 mb-8 text-lg">
                      {currentItem.followUp.question}
                    </p>

                    <div className="space-y-2.5">
                      {currentItem.followUp.options.map((option) => (
                        <button
                          key={option.id}
                          onClick={() => selectFollowUp(currentItem.id, option.id)}
                          className="w-full text-left p-4 rounded-xl border-2 border-slate-200 bg-white hover:border-brand-300 hover:bg-brand-50 hover:shadow-sm transition-all duration-200 flex items-center gap-3 group"
                        >
                          <div className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-brand-500 transition-colors flex-shrink-0" />
                          <span className="font-medium text-slate-700 group-hover:text-brand-700 transition-colors">
                            {option.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )
              })()
            ) : (
              /* All follow-ups answered — ready to generate */
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center mx-auto mb-6">
                  <Check className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">All set!</h2>
                <p className="text-slate-500 max-w-md mx-auto mb-8">
                  We've got everything we need. Ready to see your personalized application breakdown?
                </p>
                <button
                  onClick={handleNext}
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-600 text-white font-semibold rounded-xl hover:bg-brand-700 hover:shadow-lg hover:shadow-brand-500/20 hover:-translate-y-0.5 transition-all duration-300 text-lg"
                >
                  See My Results
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            )}
          </div>
        )}

        {/* ─── Navigation ─── */}
        {!(step === 2 && data.currentFollowUp >= incompleteItems.length) && (
          <div className="flex items-center justify-between mt-10">
            <button
              onClick={handleBack}
              disabled={step === 0 && data.currentFollowUp === 0}
              className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm transition-all duration-200 ${
                step === 0
                  ? 'opacity-0 pointer-events-none'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>

            {step < 2 && (
              <button
                onClick={handleNext}
                disabled={!canProceed()}
                className={`inline-flex items-center gap-2 px-8 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  canProceed()
                    ? 'bg-brand-600 text-white hover:bg-brand-700 hover:shadow-lg hover:shadow-brand-500/20 hover:-translate-y-0.5'
                    : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                }`}
              >
                Continue
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
