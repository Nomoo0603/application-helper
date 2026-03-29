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
    label: 'Profile & Basic Info',
    description: 'Personal details, contact info, citizenship',
    icon: '👤',
    followUp: {
      question: "What's holding this up?",
      options: [
        { id: 'not_started', label: "Haven't started yet" },
        { id: 'missing_info', label: 'Need to gather some info (passport, addresses, etc.)' },
        { id: 'confused', label: "Not sure what's being asked" },
        { id: 'almost', label: 'Almost done, just need to finish' },
      ],
    },
  },
  {
    id: 'testing',
    label: 'Standardized Testing',
    description: 'SAT, ACT, or test-optional decision',
    icon: '📝',
    followUp: {
      question: "Where are you with testing?",
      options: [
        { id: 'not_taken', label: "Haven't taken any tests yet" },
        { id: 'scheduled', label: 'Test is scheduled' },
        { id: 'taken_not_sent', label: 'Taken but scores not sent' },
        { id: 'test_optional', label: 'Going test-optional, not sure if I should' },
        { id: 'retake', label: 'Considering retaking for a higher score' },
      ],
    },
  },
  {
    id: 'essays',
    label: 'Essays & Personal Statement',
    description: 'Personal essay, supplemental prompts',
    icon: '✍️',
    followUp: {
      question: "How's your essay coming along?",
      options: [
        { id: 'not_started', label: "Haven't started writing" },
        { id: 'brainstorming', label: 'Brainstorming topics' },
        { id: 'drafting', label: 'Working on a draft' },
        { id: 'revising', label: 'Revising and editing' },
        { id: 'stuck_topic', label: "Can't decide on a topic" },
        { id: 'unsure_fit', label: "Not sure what the school wants to hear" },
      ],
    },
  },
  {
    id: 'recommendations',
    label: 'Letters of Recommendation',
    description: 'Teacher/counselor recommendation letters',
    icon: '💌',
    followUp: {
      question: "What's the status of your recommendations?",
      options: [
        { id: 'not_asked', label: "Haven't asked anyone yet" },
        { id: 'unsure_who', label: 'Not sure whom to ask' },
        { id: 'asked_waiting', label: 'Asked but waiting for confirmation' },
        { id: 'confirmed_not_submitted', label: 'Recommender agreed, not yet submitted' },
        { id: 'need_followup', label: 'Need to follow up — it feels awkward' },
      ],
    },
  },
  {
    id: 'activities',
    label: 'Activities & Experience List',
    description: 'Extracurriculars, leadership, work, volunteering',
    icon: '🏆',
    followUp: {
      question: "What's tricky about this part?",
      options: [
        { id: 'not_started', label: "Haven't started listing them" },
        { id: 'not_enough', label: "Worried I don't have enough activities" },
        { id: 'how_to_describe', label: 'Not sure how to describe them well' },
        { id: 'prioritize', label: "Don't know which to prioritize" },
      ],
    },
  },
  {
    id: 'transcripts',
    label: 'Transcripts & School Documents',
    description: 'Official transcripts, school reports',
    icon: '📄',
    followUp: {
      question: "What's blocking this?",
      options: [
        { id: 'not_requested', label: "Haven't requested them yet" },
        { id: 'school_slow', label: 'Waiting on my school to process' },
        { id: 'international_format', label: 'Unsure about format or translation requirements' },
        { id: 'dont_know_how', label: "Don't know how to request them" },
      ],
    },
  },
  {
    id: 'financial',
    label: 'Financial Aid & Scholarships',
    description: 'FAFSA, CSS Profile, institutional aid forms',
    icon: '💰',
    followUp: {
      question: "What's making this feel hard?",
      options: [
        { id: 'not_started', label: "Haven't started any forms" },
        { id: 'confusing', label: "The forms are confusing" },
        { id: 'family_info', label: 'Need financial info from my family' },
        { id: 'unsure_eligible', label: 'Not sure what I qualify for' },
        { id: 'international_aid', label: 'International student — fewer aid options' },
      ],
    },
  },
  {
    id: 'interview',
    label: 'Interview Preparation',
    description: 'Admissions interview, if required or optional',
    icon: '🎤',
    followUp: {
      question: "Where are you with the interview?",
      options: [
        { id: 'not_scheduled', label: 'Not scheduled yet' },
        { id: 'scheduled_nervous', label: 'Scheduled but nervous' },
        { id: 'not_sure_needed', label: 'Not sure if I need one' },
        { id: 'prep_needed', label: 'Need help preparing' },
      ],
    },
  },
  {
    id: 'submitted',
    label: 'Application Submitted',
    description: 'Final review and submission',
    icon: '🚀',
    followUp: {
      question: "What's preventing submission?",
      options: [
        { id: 'not_ready', label: 'Still working on other parts' },
        { id: 'reviewing', label: 'Need to review everything once more' },
        { id: 'waiting_others', label: 'Waiting on others (recs, transcripts)' },
        { id: 'fee_issue', label: 'Application fee concern' },
        { id: 'scared', label: 'Nervous about hitting submit' },
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
    not_taken: { severity: 'medium', friction: 'Testing Not Started', insight: "If your target schools are test-optional and your application is strong otherwise, consider whether testing adds value for you.", nextStep: "Check each school's testing policy. If going test-optional, redirect that time to essays and activities." },
    scheduled: { severity: 'low', friction: 'Test Scheduled', insight: "You're on track. Focus on targeted prep rather than marathon study sessions.", nextStep: "Take one timed practice test this week. Focus prep on your two weakest areas." },
    taken_not_sent: { severity: 'medium', friction: 'Scores Not Sent', insight: "Don't let this administrative step slip — it takes time for scores to arrive.", nextStep: "Log into your testing account today and send scores to all your target schools." },
    test_optional: { severity: 'low', friction: 'Test-Optional Decision', insight: "Going test-optional is a legitimate choice. Admissions teams review your whole application.", nextStep: "If your scores are below a school's middle 50%, going test-optional is often the stronger strategy." },
    retake: { severity: 'low', friction: 'Retake Consideration', insight: "Retaking can help, but only if you'll study differently. Otherwise, invest that energy elsewhere.", nextStep: "If you can gain 50+ points with focused prep, retake. Otherwise, strengthen other parts of your application." },
  },
  profile: {
    not_started: { severity: 'medium', friction: 'Profile Not Started', insight: "This is one of the easiest parts — mostly factual info. Start here to build momentum.", nextStep: "Block 30 minutes. Have your ID, addresses, and family info handy. You can finish this in one sitting." },
    missing_info: { severity: 'low', friction: 'Gathering Details', insight: "You just need to collect a few pieces of information. Ask family for help if needed.", nextStep: "Make a list of what you're missing. Text or call whoever has that info today." },
    confused: { severity: 'medium', friction: 'Form Confusion', insight: "Application platforms can be unintuitive. You're not the only one confused by this.", nextStep: "Look up a walkthrough video for your specific application platform. They exist and they help." },
    almost: { severity: 'low', friction: 'Almost Complete', insight: "You're nearly there! Finish this to check a satisfying box off your list.", nextStep: "Set 15 minutes aside today to complete the remaining fields." },
    platform_confusion: { severity: 'medium', friction: 'Platform Confusion', insight: "Common App and Coalition can feel overwhelming at first. Take it section by section.", nextStep: "Start with just the 'Personal Information' tab. Complete one section at a time." },
  },
  activities: {
    not_started: { severity: 'medium', friction: 'Activities Not Listed', insight: "Most students have more to list than they think. Jobs, hobbies, family responsibilities — it all counts.", nextStep: "Brainstorm for 10 minutes: list every way you spend time outside class. Then pick your strongest 8–10." },
    not_enough: { severity: 'medium', friction: 'Activity Concern', insight: "Quality matters more than quantity. Depth in a few areas shows more than a long list of shallow involvements.", nextStep: "Focus on 3–5 activities where you've shown growth, impact, or commitment. Describe those well." },
    how_to_describe: { severity: 'low', friction: 'Description Challenge', insight: "Use action verbs and specific outcomes. 'Led weekly meetings for 15 members' beats 'Was in a club.'", nextStep: "For each activity: What did you DO? What CHANGED because of you? Use numbers when possible." },
    prioritize: { severity: 'low', friction: 'Priority Uncertainty', insight: "List your most meaningful activities first. Admissions reads top-down.", nextStep: "Rank by: time commitment × personal meaning. Your top activity should reflect what matters most to you." },
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
    not_scheduled: { severity: 'low', friction: 'Interview Not Scheduled', insight: "Not all schools require interviews. Check each school's policy before stressing about this.", nextStep: "Look up whether your target schools offer or require interviews. If optional, doing one usually helps." },
    scheduled_nervous: { severity: 'low', friction: 'Interview Nerves', insight: "Interviews are conversations, not interrogations. They want to get to know you, not quiz you.", nextStep: 'Practice with a friend: "Tell me about yourself" and "Why this school?" Know your answers, but don\'t memorize scripts.' },
    not_sure_needed: { severity: 'low', friction: 'Interview Uncertainty', insight: "Check each school individually — policies vary a lot.", nextStep: "Search '[school name] admissions interview policy' for each of your target schools." },
    prep_needed: { severity: 'low', friction: 'Prep Needed', insight: "Good prep means knowing your story, not rehearsing answers. Be ready to talk about what excites you.", nextStep: "Prepare 3 things: why this school, what you're passionate about, and one question to ask them." },
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
  avgReadiness: 58,
  highRiskPercent: 28,
  mediumRiskPercent: 37,
  lowRiskPercent: 35,
  topBlockerArea: 'Essays & Personal Statement',

  riskDistribution: [
    { level: 'Looking Strong', percent: 35, count: 436, color: '#10b981' },
    { level: 'Making Progress', percent: 37, count: 461, color: '#f59e0b' },
    { level: 'Needs Attention', percent: 28, count: 350, color: '#f43f5e' },
  ],

  blockerBreakdown: [
    { category: 'Essay Blank Page / Topic Paralysis', count: 312, percent: 25, trend: 'up' },
    { category: 'Recommendation Delays', count: 237, percent: 19, trend: 'stable' },
    { category: 'Document / Transcript Confusion', count: 199, percent: 16, trend: 'down' },
    { category: 'Financial Aid Uncertainty', count: 174, percent: 14, trend: 'up' },
    { category: 'Deadline Overload', count: 149, percent: 12, trend: 'stable' },
    { category: 'General Overwhelm', count: 112, percent: 9, trend: 'up' },
    { category: 'Low Confidence / Submit Anxiety', count: 64, percent: 5, trend: 'stable' },
  ],

  stageFriction: [
    { stage: 'Profile & Basic Info', friction: 8 },
    { stage: 'Standardized Testing', friction: 18 },
    { stage: 'Essays / Personal Statement', friction: 72 },
    { stage: 'Recommendations', friction: 45 },
    { stage: 'Activities List', friction: 22 },
    { stage: 'Transcripts & Documents', friction: 34 },
    { stage: 'Financial Aid', friction: 58 },
    { stage: 'Interview Prep', friction: 12 },
    { stage: 'Final Submission', friction: 28 },
  ],

  internationalVsDomestic: {
    international: { count: 341, avgReadiness: 44, topBlocker: 'Document Confusion', highRiskPercent: 42 },
    domestic: { count: 906, avgReadiness: 63, topBlocker: 'Essay Uncertainty', highRiskPercent: 22 },
  },

  weeklyTrend: [
    { week: 'W1', applicants: 89, highRisk: 18 },
    { week: 'W2', applicants: 134, highRisk: 31 },
    { week: 'W3', applicants: 198, highRisk: 52 },
    { week: 'W4', applicants: 267, highRisk: 78 },
    { week: 'W5', applicants: 312, highRisk: 95 },
    { week: 'W6', applicants: 247, highRisk: 76 },
  ],

  insights: [
    {
      title: 'Essay friction spikes 2 weeks before deadlines',
      description: 'Applicants who have not started essays within 14 days of their deadline are 3.2x more likely to abandon their application.',
      severity: 'high',
      recommendation: 'Offer targeted essay workshops or peer review sessions 3 weeks before major deadlines.',
    },
    {
      title: 'International applicants stall 5 days longer on documents',
      description: 'Credential evaluation and translation requirements create significant delays for international applicants.',
      severity: 'high',
      recommendation: 'Create a dedicated international applicant checklist with timeline estimates for each step.',
    },
    {
      title: 'Financial aid confusion correlates strongly with overwhelm',
      description: '67% of applicants reporting overwhelm also flagged financial aid as a secondary concern.',
      severity: 'medium',
      recommendation: 'Simplify financial aid messaging and offer step-by-step guides earlier in the process.',
    },
    {
      title: 'Proactive rec follow-ups cut delays by 40%',
      description: 'Applicants who used structured follow-up reminders completed the recommendation stage 40% faster.',
      severity: 'low',
      recommendation: 'Build follow-up templates and timeline reminders into the applicant portal.',
    },
  ],
}
