// ApplyWave — Mock Data & Diagnosis Engine

// ─── Application Paths ───
export const APP_PATHS = {
  minerva: { id: 'minerva', label: 'Minerva University', emoji: '🎓' },
  other: { id: 'other', label: 'Other Colleges', emoji: '🏫' },
}

// ─── Checklist Items ───
// Each item has follow-up questions for when it's incomplete
export const CHECKLIST_ITEMS_MINERVA = [
  {
    id: 'profile',
    label: 'Minerva Application Profile',
    description: 'Personal details, citizenship, school background, contact info',
    icon: '👤',
    followUp: {
      question: "What's making the Minerva profile section hard?",
      options: [
        { id: 'not_started', label: "Haven't started yet" },
        { id: 'missing_info', label: 'Need to gather documents or family details' },
        { id: 'confused', label: "Not sure how Minerva wants me to answer some questions" },
        { id: 'almost', label: 'Mostly done, just need to finish and review' },
      ],
    },
  },
  {
    id: 'testing',
    label: 'Quantitative Readiness',
    description: 'Math assessment prep, score decisions, problem-solving confidence',
    icon: '📝',
    followUp: {
      question: "Where are you with Minerva's quantitative prep?",
      options: [
        { id: 'not_taken', label: "Haven't started preparing for the math/quant part" },
        { id: 'scheduled', label: 'I have a plan or date, but prep still feels shaky' },
        { id: 'taken_not_sent', label: 'I finished a test but still need to report or decide on scores' },
        { id: 'test_optional', label: 'Not sure whether to submit external test scores' },
        { id: 'retake', label: 'Thinking about more practice because my score/confidence is low' },
      ],
    },
  },
  {
    id: 'essays',
    label: 'Short Responses & Motivation',
    description: 'Application writing, self-reflection, and Minerva fit',
    icon: '✍️',
    followUp: {
      question: "What's your biggest challenge in the written responses?",
      options: [
        { id: 'not_started', label: "Haven't started drafting yet" },
        { id: 'brainstorming', label: 'Still figuring out what stories to use' },
        { id: 'drafting', label: 'I have drafts but they feel rough' },
        { id: 'revising', label: 'Editing, but trying to make them more specific' },
        { id: 'stuck_topic', label: "I don't know which experiences best show who I am" },
        { id: 'unsure_fit', label: "Not sure how to sound like a strong fit for Minerva" },
      ],
    },
  },
  {
    id: 'recommendations',
    label: 'Recommendations & School Support',
    description: 'Teacher/counselor recommendations and school-side materials',
    icon: '💌',
    followUp: {
      question: "What's the current issue with recommendations?",
      options: [
        { id: 'not_asked', label: "Haven't asked anyone yet" },
        { id: 'unsure_who', label: 'Not sure which recommender fits Minerva best' },
        { id: 'asked_waiting', label: 'Asked but still waiting for confirmation' },
        { id: 'confirmed_not_submitted', label: 'Confirmed, but materials are not submitted yet' },
        { id: 'need_followup', label: 'Need to follow up with my school or recommender' },
      ],
    },
  },
  {
    id: 'activities',
    label: 'Experiences & Extracurricular Impact',
    description: 'Activities, work, projects, leadership, family responsibilities',
    icon: '🏆',
    followUp: {
      question: "What's hardest about presenting your experiences?",
      options: [
        { id: 'not_started', label: "Haven't started listing them clearly" },
        { id: 'not_enough', label: "Worried my extracurricular profile isn't strong enough" },
        { id: 'how_to_describe', label: 'Not sure how to explain impact or leadership well' },
        { id: 'prioritize', label: "Don't know which experiences matter most for Minerva" },
      ],
    },
  },
  {
    id: 'transcripts',
    label: 'Transcripts & Academic Records',
    description: 'Official transcripts, grading context, translations, school reports',
    icon: '📄',
    followUp: {
      question: "What's slowing down your academic documents?",
      options: [
        { id: 'not_requested', label: "Haven't requested anything from school yet" },
        { id: 'school_slow', label: 'My school is taking a long time to process it' },
        { id: 'international_format', label: 'Unsure about translation, grading, or format expectations' },
        { id: 'dont_know_how', label: "Don't know how Minerva wants these documents sent" },
      ],
    },
  },
  {
    id: 'financial',
    label: 'Financial Aid Planning',
    description: 'Aid forms, affordability questions, family documentation',
    icon: '💰',
    followUp: {
      question: "What's difficult about the financial side?",
      options: [
        { id: 'not_started', label: "Haven't started the aid steps yet" },
        { id: 'confusing', label: "The forms and requirements are confusing" },
        { id: 'family_info', label: 'Still waiting on financial details from family' },
        { id: 'unsure_eligible', label: 'Not sure what I might qualify for' },
        { id: 'international_aid', label: 'International applicant and unsure what aid is realistic' },
      ],
    },
  },
  {
    id: 'interview',
    label: 'Online Interview & Assessment',
    description: 'Video setup, timed responses, confidence for virtual evaluation',
    icon: '🎤',
    followUp: {
      question: "What feels hardest about Minerva's online interview?",
      options: [
        { id: 'not_scheduled', label: 'Haven’t booked or opened it yet' },
        { id: 'scheduled_nervous', label: 'I know it is coming and I am nervous on camera' },
        { id: 'not_sure_needed', label: 'Not sure what format to expect or how it is evaluated' },
        { id: 'prep_needed', label: 'Need help with practice, setup, or answering clearly' },
      ],
    },
  },
  {
    id: 'submitted',
    label: 'Final Review & Submission',
    description: 'Final checks, confidence, and submitting the Minerva application',
    icon: '🚀',
    followUp: {
      question: "What's keeping you from submitting?",
      options: [
        { id: 'not_ready', label: 'Still fixing other parts of the application' },
        { id: 'reviewing', label: 'Need one more careful review' },
        { id: 'waiting_others', label: 'Waiting on school documents or recommendations' },
        { id: 'fee_issue', label: 'Still sorting out the fee or waiver' },
        { id: 'scared', label: 'Nervous about submitting before it feels perfect' },
      ],
    },
  },
]

// Other colleges uses a similar but slightly adapted structure
export const CHECKLIST_ITEMS_OTHER = [
  {
    id: 'profile',
    label: 'Common App / Coalition Profile',
    description: 'Personal details, demographics, family info',
    icon: '👤',
    followUp: {
      question: "What's holding this up?",
      options: [
        { id: 'not_started', label: "Haven't started yet" },
        { id: 'missing_info', label: 'Need to gather some details' },
        { id: 'platform_confusion', label: 'Confused by the application platform' },
        { id: 'almost', label: 'Almost done' },
      ],
    },
  },
  {
    id: 'testing',
    label: 'Standardized Testing',
    description: 'SAT, ACT, AP scores, or test-optional',
    icon: '📝',
    followUp: {
      question: "Where are you with testing?",
      options: [
        { id: 'not_taken', label: "Haven't taken any tests yet" },
        { id: 'scheduled', label: 'Test is scheduled' },
        { id: 'taken_not_sent', label: 'Taken but scores not sent' },
        { id: 'test_optional', label: 'Going test-optional, wondering if I should' },
        { id: 'retake', label: 'Considering retaking' },
      ],
    },
  },
  {
    id: 'essays',
    label: 'Personal Essay + Supplements',
    description: 'Main personal statement and school-specific essays',
    icon: '✍️',
    followUp: {
      question: "How's your essay progress?",
      options: [
        { id: 'not_started', label: "Haven't started writing" },
        { id: 'brainstorming', label: 'Brainstorming topics' },
        { id: 'drafting', label: 'Working on a draft' },
        { id: 'revising', label: 'Revising and polishing' },
        { id: 'stuck_topic', label: "Can't decide on a topic" },
        { id: 'too_many_supplements', label: 'Overwhelmed by supplement count' },
      ],
    },
  },
  {
    id: 'recommendations',
    label: 'Letters of Recommendation',
    description: 'Teacher and counselor letters',
    icon: '💌',
    followUp: {
      question: "What's the status of your recs?",
      options: [
        { id: 'not_asked', label: "Haven't asked anyone yet" },
        { id: 'unsure_who', label: 'Not sure whom to ask' },
        { id: 'asked_waiting', label: 'Asked, waiting for confirmation' },
        { id: 'confirmed_not_submitted', label: 'Confirmed but not yet submitted' },
        { id: 'need_followup', label: 'Need to follow up' },
      ],
    },
  },
  {
    id: 'activities',
    label: 'Activities List',
    description: 'Extracurriculars, work, volunteering, hobbies',
    icon: '🏆',
    followUp: {
      question: "What's tricky about this?",
      options: [
        { id: 'not_started', label: "Haven't started listing" },
        { id: 'not_enough', label: "Worried I don't have enough" },
        { id: 'how_to_describe', label: 'Not sure how to describe them' },
        { id: 'prioritize', label: 'Not sure what to prioritize' },
      ],
    },
  },
  {
    id: 'transcripts',
    label: 'Transcripts & School Records',
    description: 'Official transcripts sent to each school',
    icon: '📄',
    followUp: {
      question: "What's blocking this?",
      options: [
        { id: 'not_requested', label: "Haven't requested them" },
        { id: 'school_slow', label: 'School is taking a while' },
        { id: 'international_format', label: 'Format/translation questions' },
        { id: 'multiple_schools', label: 'Need to send to many schools' },
      ],
    },
  },
  {
    id: 'financial',
    label: 'Financial Aid Applications',
    description: 'FAFSA, CSS Profile, school-specific aid forms',
    icon: '💰',
    followUp: {
      question: "What's making this hard?",
      options: [
        { id: 'not_started', label: "Haven't started any forms" },
        { id: 'confusing', label: 'The process is confusing' },
        { id: 'family_info', label: 'Need info from family' },
        { id: 'unsure_eligible', label: 'Not sure what I qualify for' },
        { id: 'international_aid', label: 'Limited options as an international student' },
      ],
    },
  },
  {
    id: 'submitted',
    label: 'Applications Submitted',
    description: 'Final review and submission to each school',
    icon: '🚀',
    followUp: {
      question: "What's preventing submission?",
      options: [
        { id: 'not_ready', label: 'Other parts still incomplete' },
        { id: 'reviewing', label: 'Want to review everything first' },
        { id: 'waiting_others', label: 'Waiting on recs or transcripts' },
        { id: 'fee_issue', label: 'Fee waiver question' },
        { id: 'scared', label: "Nervous about pressing submit" },
      ],
    },
  },
]

// ─── Friction Diagnosis Logic ───
const FRICTION_INSIGHTS = {
  essays: {
    not_started: { severity: 'high', friction: 'Essay Blank Page', insight: "Starting is the hardest part. You don't need a perfect topic — you need 25 minutes of free-writing.", nextStep: "Set a 25-minute timer. Write anything about a moment that changed how you think. Don't edit." },
    brainstorming: { severity: 'medium', friction: 'Topic Exploration', insight: "You're in the discovery phase. The best essays come from specificity, not grandness.", nextStep: "Pick three small, specific moments from your life. Write one paragraph about each. The right topic will feel natural." },
    drafting: { severity: 'low', friction: 'Draft in Progress', insight: "You're making real progress. The first draft doesn't have to be good — it just has to exist.", nextStep: "Finish your draft without editing. Get it to a full-length version, then step away overnight before revising." },
    revising: { severity: 'low', friction: 'Polishing Phase', insight: "You're in great shape. Now focus on voice and authenticity rather than trying to impress.", nextStep: "Read your essay out loud. Any sentence that doesn't sound like you — rewrite it." },
    stuck_topic: { severity: 'high', friction: 'Topic Paralysis', insight: "You're overthinking the topic. The best essays are about small moments, not big achievements.", nextStep: "Ask a friend: 'What's a story I always tell?' That's probably your essay topic." },
    unsure_fit: { severity: 'medium', friction: 'Audience Uncertainty', insight: "You're trying to guess what admissions wants. They want to hear your genuine voice.", nextStep: "Write the essay you'd want to read about yourself. Authenticity beats strategy every time." },
    too_many_supplements: { severity: 'high', friction: 'Supplement Overload', insight: "Multiple supplements can feel crushing. Group similar prompts and adapt one strong answer across schools.", nextStep: "List all supplement prompts. Highlight any that overlap. Draft the unique ones first, adapt shared themes." },
  },
  recommendations: {
    not_asked: { severity: 'high', friction: 'Rec Request Needed', insight: "This is time-sensitive. Recommenders need lead time, and the best ones fill up fast.", nextStep: "Today: choose two teachers who know you well and have seen you grow. Ask them in person with a specific, kind request." },
    unsure_who: { severity: 'medium', friction: 'Recommender Selection', insight: "Pick teachers who know your character, not just your grade. A B+ teacher who saw you persevere beats an A teacher who barely knows you.", nextStep: "Think about which teacher has seen you struggle and grow. That's your best recommender." },
    asked_waiting: { severity: 'medium', friction: 'Awaiting Confirmation', insight: "You've done the right thing by asking. A gentle follow-up is perfectly appropriate.", nextStep: "Send a short, warm check-in. Include the deadline and offer to provide any helpful details about you." },
    confirmed_not_submitted: { severity: 'low', friction: 'Rec Pending Submission', insight: "Your recommender has agreed — now it's about gentle momentum. Teachers are busy.", nextStep: "Send a friendly reminder 2 weeks before the deadline. Include a thank-you and the submission link." },
    need_followup: { severity: 'medium', friction: 'Follow-Up Needed', insight: "Following up feels awkward, but it's normal and expected. Teachers manage many requests.", nextStep: "A quick in-person check-in works best: 'Just wanted to make sure you have everything you need for my letter.'" },
  },
  testing: {
    not_taken: { severity: 'high', friction: 'Quant Prep Not Started', insight: "For Minerva applicants, weak preparation for the quantitative portion can quietly become a confidence blocker. Starting with a structure matters more than starting with advanced material.", nextStep: "Set up three 30-minute prep blocks this week: one arithmetic/algebra review, one timed problem set, and one reflection on mistakes." },
    scheduled: { severity: 'medium', friction: 'Quant Prep Feels Shaky', insight: "Having a date or plan helps, but students still struggle when practice is inconsistent or too broad.", nextStep: "Take one timed quant practice session and write down the 3 question types that slow you down most." },
    taken_not_sent: { severity: 'medium', friction: 'Score Reporting Decision', insight: "Applicants can get stuck deciding whether external scores help their Minerva application. The delay is often more about uncertainty than the score itself.", nextStep: "Decide today whether your external score adds useful evidence. If yes, submit it. If not, stop spending energy there and strengthen your core application." },
    test_optional: { severity: 'low', friction: 'External Score Uncertainty', insight: "If Minerva allows flexibility, your choice should be strategic rather than fear-based. Strong experiences and responses still matter a lot.", nextStep: "Compare your score to your overall profile. Only submit if it clearly strengthens the application narrative." },
    retake: { severity: 'medium', friction: 'Quant Confidence Dip', insight: "Wanting more prep usually means confidence is low, not that you're incapable. A focused practice plan is more useful than vague retake anxiety.", nextStep: "Choose 2 weak math topics and drill only those for the next 5 days instead of trying to review everything." },
  },
  profile: {
    not_started: { severity: 'medium', friction: 'Application Profile Not Started', insight: "The Minerva profile section is mostly factual, which makes it a good momentum-builder. Avoid saving it for later when it can unlock the rest of the application.", nextStep: "Block 30 focused minutes and complete the straightforward fields first: identity, contact, school, and citizenship details." },
    missing_info: { severity: 'medium', friction: 'Missing Supporting Details', insight: "Most delays here come from waiting on family or document details, not from difficulty. A short list usually clears the block quickly.", nextStep: "Write down every missing detail and message the person who can provide each one today." },
    confused: { severity: 'medium', friction: 'Minerva Form Confusion', insight: "When students are unsure what a question means, they often stop entirely. A partial first pass is better than waiting for perfect clarity.", nextStep: "Answer the sections you understand now, then flag only the unclear questions to revisit with support." },
    almost: { severity: 'low', friction: 'Profile Nearly Done', insight: "You're close. This is usually a short review-and-submit task rather than a big blocker.", nextStep: "Spend 15 minutes today finishing the remaining profile fields and checking for inconsistencies." },
    platform_confusion: { severity: 'medium', friction: 'Platform Confusion', insight: "Common App and Coalition can feel overwhelming at first. Take it section by section.", nextStep: "Start with just the 'Personal Information' tab. Complete one section at a time." },
  },
  activities: {
    not_started: { severity: 'medium', friction: 'Experience List Not Started', insight: "Minerva applicants often underestimate what counts here. Independent projects, family responsibilities, work, and community initiatives all help reveal how you learn and lead.", nextStep: "Make a raw list of every commitment, project, role, and responsibility you've held in the last 4 years before editing anything down." },
    not_enough: { severity: 'medium', friction: 'Extracurricular Confidence Gap', insight: "The issue is usually framing, not scarcity. Minerva admissions can learn a lot from depth, initiative, and unusual forms of impact.", nextStep: "Choose 4 experiences that best show initiative, curiosity, or responsibility and build those out with concrete outcomes." },
    how_to_describe: { severity: 'high', friction: 'Impact Description Problem', insight: "Students often list titles but not evidence. What helps admissions is understanding what changed because of your involvement and how seriously you engaged.", nextStep: "Rewrite each activity in this format: action you took, scale or frequency, and the result or learning that came from it." },
    prioritize: { severity: 'medium', friction: 'Experience Prioritization', insight: "Your strongest entries are not always the most prestigious ones. For Minerva, the most revealing experiences are often the ones that show initiative and reflection.", nextStep: "Rank your experiences by impact, ownership, and personal growth, then put the most revealing ones first." },
  },
  transcripts: {
    not_requested: { severity: 'high', friction: 'Transcripts Not Requested', insight: "This is an administrative step that can take days or weeks depending on your school.", nextStep: "Visit or email your school's registrar/counselor today to request official transcripts." },
    school_slow: { severity: 'medium', friction: 'School Processing', insight: "This is out of your hands, but you can speed it up with a polite follow-up.", nextStep: "Check in with your counselor and confirm the request is being processed. Ask for an estimated timeline." },
    international_format: { severity: 'high', friction: 'International Document Needs', insight: "International transcripts often need translation or credential evaluation — and that takes time.", nextStep: "Check if your target schools require WES/ECE evaluation. If so, start that process immediately — it takes 4–6 weeks." },
    dont_know_how: { severity: 'medium', friction: 'Process Unclear', insight: "Every school handles this differently. Your counselor is your best resource.", nextStep: "Ask your school counselor: 'How do I get my official transcripts sent to colleges?' They do this all the time." },
    multiple_schools: { severity: 'low', friction: 'Multiple Sends', insight: "Sending to many schools can feel tedious but it's usually straightforward once you know the process.", nextStep: "Make a list of every school you need to send transcripts to. Request them all in one batch." },
  },
  financial: {
    not_started: { severity: 'high', friction: 'Aid Forms Not Started', insight: "Financial aid has its own deadlines — and missing them can cost you thousands.", nextStep: "Open the FAFSA today (fafsa.gov). Complete the first section. You can save and return." },
    confusing: { severity: 'medium', friction: 'Aid Process Confusion', insight: "Financial aid is genuinely confusing. You're not alone — and there are great free resources.", nextStep: "Watch a 10-minute FAFSA walkthrough video. Take it one section at a time with your family's tax info nearby." },
    family_info: { severity: 'medium', friction: 'Family Info Needed', insight: "You'll need income and tax information from your parent or guardian. Give them a heads-up.", nextStep: "Ask your parent/guardian for their most recent tax return and W-2. You need it for FAFSA and CSS Profile." },
    unsure_eligible: { severity: 'medium', friction: 'Eligibility Unclear', insight: "Apply anyway. Many families are surprised by what they qualify for. You won't know until you submit.", nextStep: "Fill out the FAFSA regardless. Also research merit-based scholarships — they're not need-based." },
    international_aid: { severity: 'high', friction: 'International Aid Gap', insight: "International students face real constraints on financial aid. But many schools offer institutional grants.", nextStep: "Research which of your target schools offer aid to international students. Focus applications on need-blind or need-aware-generous schools." },
  },
  interview: {
    not_scheduled: { severity: 'medium', friction: 'Online Interview Not Started', insight: "With a virtual interview or assessment, students often delay because the format feels unfamiliar. The best first step is opening the platform and removing the unknowns.", nextStep: "Log in, confirm the deadline, test your camera and microphone, and note the exact interview format before doing anything else." },
    scheduled_nervous: { severity: 'medium', friction: 'Camera Nerves', insight: "Being nervous on video is common, especially when answers are timed. What helps most is practicing concise spoken responses rather than memorizing perfect ones.", nextStep: "Record yourself answering 3 common prompts in 60 to 90 seconds each, then watch for clarity, pace, and eye contact." },
    not_sure_needed: { severity: 'medium', friction: 'Interview Format Unclear', insight: "Students lose confidence when they do not know whether they are preparing for a live interview, recorded response, or assessment task.", nextStep: "Read the instructions closely and write down the exact format, timing, and evaluation details in one place before you practice." },
    prep_needed: { severity: 'high', friction: 'Virtual Interview Prep Needed', insight: "For Minerva specifically, the online interview can reveal communication style, reflection, and readiness for a nontraditional learning environment. Strong prep combines content and setup.", nextStep: "Practice your 'why Minerva,' one example of initiative, and one moment of learning from failure, then run a full mock interview with your actual device setup." },
  },
  submitted: {
    not_ready: { severity: 'medium', friction: 'Not Ready to Submit', insight: "Focus on completing the remaining pieces. Submission is the finish line, not a starting point.", nextStep: "Identify the one thing preventing submission. Make that your priority today." },
    reviewing: { severity: 'low', friction: 'Final Review', insight: "A final review is smart. But don't let perfectionism turn into procrastination.", nextStep: "Set a review date. Read everything once for errors, once for tone. Then submit." },
    waiting_others: { severity: 'medium', friction: 'Waiting on Others', insight: "You've done your part. Now it's about coordinating with others.", nextStep: "Send a quick reminder to anyone you're waiting on. Include the deadline and ask if they need anything." },
    fee_issue: { severity: 'medium', friction: 'Fee Concern', insight: "Most schools offer fee waivers. Don't let cost prevent you from applying.", nextStep: "Ask your counselor about fee waivers, or check the application for a waiver option. Many schools grant them automatically." },
    scared: { severity: 'low', friction: 'Submit Anxiety', insight: "This nervousness is totally normal. Hitting submit means you're brave enough to put yourself out there.", nextStep: "Do one final proofread, then press submit. Done is better than perfect. You can be proud of finishing." },
  },
}

// ─── Generate full diagnosis from intake data ───
export function generateDiagnosis(intakeData) {
  const { path, colleges, completedItems, followUps } = intakeData
  const checklistItems = path === 'minerva' ? CHECKLIST_ITEMS_MINERVA : CHECKLIST_ITEMS_OTHER

  // Build checklist status
  const checklist = checklistItems.map(item => {
    const isComplete = completedItems.includes(item.id)
    const followUpAnswer = followUps[item.id]
    let frictionData = null

    if (!isComplete && followUpAnswer) {
      frictionData = FRICTION_INSIGHTS[item.id]?.[followUpAnswer] || null
    }

    return {
      ...item,
      status: isComplete ? 'complete' : (followUpAnswer ? 'in_progress' : 'missing'),
      followUpAnswer,
      friction: frictionData,
    }
  })

  // Calculate metrics
  const completedCount = checklist.filter(i => i.status === 'complete').length
  const totalCount = checklist.length
  const readinessPercent = Math.round((completedCount / totalCount) * 100)

  // Identify blockers (high + medium severity items)
  const blockers = checklist
    .filter(i => i.friction && ['high', 'medium'].includes(i.friction.severity))
    .sort((a, b) => {
      const order = { high: 0, medium: 1, low: 2 }
      return order[a.friction.severity] - order[b.friction.severity]
    })

  // Determine overall risk
  const highCount = checklist.filter(i => i.friction?.severity === 'high').length
  const mediumCount = checklist.filter(i => i.friction?.severity === 'medium').length
  const incompleteCount = totalCount - completedCount

  let riskLevel, riskLabel
  if (highCount >= 2 || (highCount >= 1 && incompleteCount >= 5)) {
    riskLevel = 'high'
    riskLabel = 'Needs Attention'
  } else if (highCount >= 1 || mediumCount >= 2 || incompleteCount >= 4) {
    riskLevel = 'medium'
    riskLabel = 'Making Progress'
  } else {
    riskLevel = 'low'
    riskLabel = 'Looking Strong'
  }

  // Main blocker
  const mainBlocker = blockers[0] || null

  // Top priorities (up to 3)
  const priorities = blockers.slice(0, 3).map(b => ({
    area: b.label,
    friction: b.friction.friction,
    nextStep: b.friction.nextStep,
    severity: b.friction.severity,
  }))

  // Encouragement message
  const encouragement = completedCount === 0
    ? "Every finished application started with the first step. Let's find yours."
    : completedCount <= 3
    ? `You've made a start — ${completedCount} item${completedCount > 1 ? 's' : ''} done. Let's build on that momentum.`
    : completedCount <= 6
    ? `Solid progress — you're more than halfway there. Keep going.`
    : `You're in great shape. Just a few more things to wrap up.`

  return {
    path,
    colleges,
    checklist,
    readinessPercent,
    completedCount,
    totalCount,
    riskLevel,
    riskLabel,
    mainBlocker,
    priorities,
    encouragement,
    blockers,
  }
}

// ─── Dashboard Mock Data ───
export const DASHBOARD_DATA = {
  totalApplicants: 1247,
  avgReadiness: 61,
  highRiskPercent: 24,
  mediumRiskPercent: 41,
  lowRiskPercent: 35,
  topBlockerArea: 'Online Interview & Assessment',

  riskDistribution: [
    { level: 'Looking Strong', percent: 35, count: 436, color: '#10b981' },
    { level: 'Making Progress', percent: 41, count: 511, color: '#f59e0b' },
    { level: 'Needs Attention', percent: 24, count: 300, color: '#f43f5e' },
  ],

  blockerBreakdown: [
    { category: 'Online interview prep and camera confidence', count: 286, percent: 23, trend: 'up' },
    { category: 'Experience list impact descriptions', count: 249, percent: 20, trend: 'up' },
    { category: 'Quantitative readiness / math prep', count: 212, percent: 17, trend: 'stable' },
    { category: 'Document translation or school reporting issues', count: 174, percent: 14, trend: 'down' },
    { category: 'Financial aid uncertainty', count: 149, percent: 12, trend: 'stable' },
    { category: 'Written responses lack specificity', count: 112, percent: 9, trend: 'up' },
    { category: 'Submit hesitation / perfectionism', count: 65, percent: 5, trend: 'stable' },
  ],

  stageFriction: [
    { stage: 'Application Profile', friction: 12 },
    { stage: 'Quantitative Readiness', friction: 54 },
    { stage: 'Short Responses & Motivation', friction: 46 },
    { stage: 'Recommendations', friction: 31 },
    { stage: 'Experiences & Impact', friction: 63 },
    { stage: 'Transcripts & Records', friction: 38 },
    { stage: 'Financial Aid Planning', friction: 41 },
    { stage: 'Online Interview', friction: 71 },
    { stage: 'Final Submission', friction: 24 },
  ],

  internationalVsDomestic: {
    international: { count: 341, avgReadiness: 51, topBlocker: 'Document Translation + Aid Clarity', highRiskPercent: 37 },
    domestic: { count: 906, avgReadiness: 65, topBlocker: 'Online Interview Preparation', highRiskPercent: 19 },
  },

  weeklyTrend: [
    { week: 'W1', applicants: 89, highRisk: 14 },
    { week: 'W2', applicants: 134, highRisk: 24 },
    { week: 'W3', applicants: 198, highRisk: 39 },
    { week: 'W4', applicants: 267, highRisk: 63 },
    { week: 'W5', applicants: 312, highRisk: 81 },
    { week: 'W6', applicants: 247, highRisk: 58 },
  ],

  insights: [
    {
      title: 'Online interview friction is the clearest Minerva-specific blocker',
      description: 'Applicants who delay opening the video interview platform until the final week are far more likely to submit incomplete or low-confidence responses.',
      severity: 'high',
      recommendation: 'Send interview setup guidance and a low-stakes practice module as soon as applicants enter the active funnel.',
    },
    {
      title: 'Experience entries often understate initiative and impact',
      description: 'Many applicants list positions and clubs without explaining ownership, outcomes, or independent learning, limiting what admissions can infer.',
      severity: 'high',
      recommendation: 'Prompt students with structured activity-writing fields focused on action, scope, and result.',
    },
    {
      title: 'Quant readiness anxiety predicts late-stage disengagement',
      description: 'Students who report low confidence about the math or quantitative portion are more likely to delay the interview and final submission.',
      severity: 'medium',
      recommendation: 'Offer a short quant readiness checklist with sample problems and targeted prep links earlier in the cycle.',
    },
    {
      title: 'International applicants need earlier document and aid messaging',
      description: 'Translation requirements and uncertainty around affordability compound each other for international candidates.',
      severity: 'low',
      recommendation: 'Create an international applicant view that combines transcript, translation, and aid expectations in one place.',
    },
  ],
}
