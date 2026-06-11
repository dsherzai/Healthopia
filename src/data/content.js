export const PILLARS = [
  { letter: "N", key: "Nutrition", desc: "Eating patterns & food relationships" },
  { letter: "E", key: "Exercise", desc: "Movement & physical activity" },
  { letter: "U", key: "Unwind", desc: "Stress management & recovery" },
  { letter: "R", key: "Restorative Sleep", desc: "Sleep quality & habits" },
  { letter: "O", key: "Optimize", desc: "Mental & social engagement" },
];

export const FRAMEWORKS = [
  "P.A.U.S.E. questioning",
  "Motivational Interviewing",
  "Stages of Change (TTM)",
  "COM-B barrier analysis",
];

export const DIFFICULTIES = ["Foundational", "Intermediate", "Advanced"];

export const RESOURCES = [
  {
    id: "pause",
    title: "The P.A.U.S.E. Reference Card",
    pillar: "Core method",
    type: "Quick reference",
    body: `Use this before and during any session where you feel the pull to fix, advise, or fill silence.

PAUSE before responding. The two seconds after a client stops talking are where coaching happens. Resist the reflex to fill them.

ASK, don't tell. Convert every piece of advice you're tempted to give into a question. "Have you tried a wind-down routine?" becomes "What does the last hour before bed look like for you right now?"

UNCOVER the real problem. The presenting problem is the client's opening offer, not the destination. Listen for energy shifts, repeated words, and what is conspicuously not being said.

SIT with not knowing. You do not need a hypothesis by minute ten. Premature certainty closes doors that curiosity keeps open.

EARN the insight. The client's own realization, in their own words, is worth ten of yours. When you feel the urge to name what's going on, ask one more question instead.

Field test: in your next session, count how many of your turns end in a question mark. Master coaches typically land above 70%.`,
  },
  {
    id: "mi",
    title: "Motivational Interviewing: The Four Moves",
    pillar: "Core method",
    type: "Quick reference",
    body: `OPEN QUESTIONS — Invite the client's story rather than confirming yours. "What makes this matter to you right now?" outperforms any yes/no question.

AFFIRMATIONS — Notice strengths in their actual behavior, not generic praise. "You kept tracking even during a hard week" lands; "great job" doesn't.

REFLECTIONS — Say back what you heard, slightly deeper than they said it. A good reflection is a guess offered humbly: "It sounds like the evenings are where this falls apart for you."

SUMMARIES — Gather the threads, especially the change talk. End segments with: "Let me make sure I have this right..." and let them correct you.

LISTEN FOR CHANGE TALK — Desire ("I want to"), Ability ("I could"), Reasons ("because"), Need ("I have to"). When you hear it, get curious about it. Roll with resistance instead of arguing against it; the client should be the one voicing the case for change.

The cardinal error: the righting reflex — your urge to fix. Every time you argue for change, the client argues for staying the same.`,
  },
  {
    id: "ttm",
    title: "Stages of Change: Matching Your Move to Their Stage",
    pillar: "Core method",
    type: "Quick reference",
    body: `PRECONTEMPLATION — They don't see a problem. Your move: raise gentle awareness, never push. Ask permission before sharing information. "Would it be alright if I shared something about sleep and memory?"

CONTEMPLATION — They're ambivalent, and ambivalence is normal, not resistance. Your move: explore both sides honestly. The decisional balance ("what do you like about your evenings as they are?") builds trust faster than cheerleading.

PREPARATION — They intend to act soon. Your move: co-design a small, specific, scheduled first step. Vague plans die; "a ten-minute walk after lunch on Tuesday" lives.

ACTION — They're doing it. Your move: affirm specifics, anticipate obstacles, normalize lapses before they happen.

MAINTENANCE — Six months in. Your move: shift identity language ("you've become someone who...") and plan for high-risk situations.

The classic coaching error is offering Action-stage tools to a Contemplation-stage client. When a plan keeps failing, the diagnosis is usually a stage mismatch, not a willpower deficit.`,
  },
  {
    id: "comb",
    title: "COM-B Barrier Map: Finding Why a Behavior Isn't Happening",
    pillar: "Core method",
    type: "Worksheet",
    body: `Every behavior requires three conditions. When a client "knows what to do but isn't doing it," walk these systematically.

CAPABILITY
- Physical: Can their body do it? (Knee pain and "just walk more" are incompatible.)
- Psychological: Do they have the knowledge and mental bandwidth? Stress depletes the executive function that new habits require.

OPPORTUNITY
- Physical: Does their environment make it possible? Check the kitchen, the schedule, the commute, the bedroom.
- Social: Do the people around them make it easier or harder? A spouse who snacks at 10pm is part of the system.

MOTIVATION
- Reflective: Do their plans and identity support it?
- Automatic: What do their habits and emotions actually drive at the decisive moment?

In session, ask one question per box and write the answers in the grid. The intervention should target the weakest box — most failed plans over-invest in reflective motivation (more reasons, more resolve) while the real barrier sits in opportunity.`,
  },
  {
    id: "sleep-intake",
    title: "Restorative Sleep: First-Session Intake Guide",
    pillar: "Restorative Sleep",
    type: "Session guide",
    body: `Open wide, then narrow. Begin with: "Walk me through last night, from the moment you decided to go to bed."

THE EVENING RUNWAY — What happens in the final 90 minutes? Screens, food, alcohol, work, conflict? Don't ask the checklist; ask for the story and listen for the items.

THE BED ITSELF — What happens in bed besides sleep? Worry is the most common co-tenant. "When you can't sleep, what does your mind do?"

THE NIGHT — Wakings: how many, what time, what happens next? The 3am phone check is a finding, not a footnote.

THE MORNING — How do they feel at wake, and when does the day's first caffeine arrive? Afternoon caffeine often hides here.

THE WEEK — Weekday vs. weekend timing. A two-hour social-jetlag gap explains many "mystery" sleep complaints.

Red flags to refer out, not coach: loud snoring with gasping, dangerous daytime sleepiness, restless legs, suspected insomnia disorder beyond coaching scope. Coaching complements clinical care; it never substitutes for it.

Close by asking: "If your sleep improved, what would you do with the energy?" — that answer is your motivational anchor for every future session.`,
  },
  {
    id: "openers",
    title: "Session Opener Bank: Thirty First Questions That Work",
    pillar: "Core method",
    type: "Question bank",
    body: `For the first session:
- "What made now the time to do this?"
- "If our work together succeeds wildly, what's different a year from now?"
- "What have you already tried — and what did you learn from it?"
- "What should I know about you that an intake form wouldn't capture?"

For ongoing sessions:
- "What's pulled at your attention since we last spoke?"
- "Where would the next forty-five minutes be most useful?"
- "What's one small win since last time — even a tiny one?"

When energy is low:
- "What feels heaviest right now?"
- "If we set the plan aside for a moment — how are you, really?"

When a plan has slipped:
- "What did this week teach us about the plan?" (The plan failed, not the person.)
- "What was happening right before the moment things went sideways?"

When you're stuck:
- "What question do you wish I would ask you?"
- "What are we not talking about?"

Use these as doors, not scripts. The best opener is the one that tells the client: this hour belongs to them.`,
  },
];
