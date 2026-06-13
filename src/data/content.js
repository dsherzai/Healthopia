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
    body: `OPEN QUESTIONS - Invite the client's story rather than confirming yours. "What makes this matter to you right now?" outperforms any yes/no question.

AFFIRMATIONS - Notice strengths in their actual behavior, not generic praise. "You kept tracking even during a hard week" lands; "great job" doesn't.

REFLECTIONS - Say back what you heard, slightly deeper than they said it. A good reflection is a guess offered humbly: "It sounds like the evenings are where this falls apart for you."

SUMMARIES - Gather the threads, especially the change talk. End segments with: "Let me make sure I have this right..." and let them correct you.

LISTEN FOR CHANGE TALK - Desire ("I want to"), Ability ("I could"), Reasons ("because"), Need ("I have to"). When you hear it, get curious about it. Roll with resistance instead of arguing against it; the client should be the one voicing the case for change.

The cardinal error: the righting reflex - your urge to fix. Every time you argue for change, the client argues for staying the same.`,
  },
  {
    id: "ttm",
    title: "Stages of Change: Matching Your Move to Their Stage",
    pillar: "Core method",
    type: "Quick reference",
    body: `PRECONTEMPLATION - They don't see a problem. Your move: raise gentle awareness, never push. Ask permission before sharing information. "Would it be alright if I shared something about sleep and memory?"

CONTEMPLATION - They're ambivalent, and ambivalence is normal, not resistance. Your move: explore both sides honestly. The decisional balance ("what do you like about your evenings as they are?") builds trust faster than cheerleading.

PREPARATION - They intend to act soon. Your move: co-design a small, specific, scheduled first step. Vague plans die; "a ten-minute walk after lunch on Tuesday" lives.

ACTION - They're doing it. Your move: affirm specifics, anticipate obstacles, normalize lapses before they happen.

MAINTENANCE - Six months in. Your move: shift identity language ("you've become someone who...") and plan for high-risk situations.

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

In session, ask one question per box and write the answers in the grid. The intervention should target the weakest box - most failed plans over-invest in reflective motivation (more reasons, more resolve) while the real barrier sits in opportunity.`,
  },
  {
    id: "sleep-intake",
    title: "Restorative Sleep: First-Session Intake Guide",
    pillar: "Restorative Sleep",
    type: "Session guide",
    body: `Open wide, then narrow. Begin with: "Walk me through last night, from the moment you decided to go to bed."

THE EVENING RUNWAY - What happens in the final 90 minutes? Screens, food, alcohol, work, conflict? Don't ask the checklist; ask for the story and listen for the items.

THE BED ITSELF - What happens in bed besides sleep? Worry is the most common co-tenant. "When you can't sleep, what does your mind do?"

THE NIGHT - Wakings: how many, what time, what happens next? The 3am phone check is a finding, not a footnote.

THE MORNING - How do they feel at wake, and when does the day's first caffeine arrive? Afternoon caffeine often hides here.

THE WEEK - Weekday vs. weekend timing. A two-hour social-jetlag gap explains many "mystery" sleep complaints.

Red flags to refer out, not coach: loud snoring with gasping, dangerous daytime sleepiness, restless legs, suspected insomnia disorder beyond coaching scope. Coaching complements clinical care; it never substitutes for it.

Close by asking: "If your sleep improved, what would you do with the energy?" - that answer is your motivational anchor for every future session.`,
  },
  {
    id: "openers",
    title: "Session Opener Bank: Thirty First Questions That Work",
    pillar: "Core method",
    type: "Question bank",
    body: `For the first session:
- "What made now the time to do this?"
- "If our work together succeeds wildly, what's different a year from now?"
- "What have you already tried - and what did you learn from it?"
- "What should I know about you that an intake form wouldn't capture?"

For ongoing sessions:
- "What's pulled at your attention since we last spoke?"
- "Where would the next forty-five minutes be most useful?"
- "What's one small win since last time - even a tiny one?"

When energy is low:
- "What feels heaviest right now?"
- "If we set the plan aside for a moment - how are you, really?"

When a plan has slipped:
- "What did this week teach us about the plan?" (The plan failed, not the person.)
- "What was happening right before the moment things went sideways?"

When you're stuck:
- "What question do you wish I would ask you?"
- "What are we not talking about?"

Use these as doors, not scripts. The best opener is the one that tells the client: this hour belongs to them.`,
  },

  // ---------------- NUTRITION ----------------
  {
    id: "nutrition-first-session",
    title: "Nutrition: The First-Session Conversation",
    pillar: "Nutrition",
    type: "Session guide",
    body: `Do not start with food. Start with the day around the food.

THE SHAPE OF THE DAY - "Walk me through yesterday's eating, from waking to sleep." You are mapping rhythm, not judging choices. Note skipped meals, the 4pm crash, the after-dinner grazing.

THE RELATIONSHIP, NOT THE DIET - "How do you feel about the way you eat right now?" Shame is the most common hidden ingredient. A client who feels judged will edit the truth out of every food log you ever see.

THE NON-NEGOTIABLES - What do they genuinely enjoy and will never give up? Coaching that ignores pleasure fails by month two. Build around the coffee-and-pastry ritual, don't abolish it.

THE CONTEXT - Who cooks? Who shops? What's the budget, the commute, the kitchen? A single parent and a retiree need different first steps even with identical goals.

THE WHY - "If your eating felt easier and steadier, what would that free up for you?" Energy, focus, modeling for their kids - the real motivator is rarely the number on a scale.

Coaching move: leave the first session with one tiny, additive experiment ("add a protein source to breakfast") rather than a list of subtractions. Addition builds momentum; restriction breeds rebellion.`,
  },
  {
    id: "nutrition-plate",
    title: "The Brain-Healthy Plate: A Client Handout",
    pillar: "Nutrition",
    type: "Client handout",
    body: `A simple visual your client can use at any meal, without weighing, counting, or tracking.

HALF THE PLATE: COLOR. Vegetables and fruit, the more varied the better. Different colors signal different protective compounds. Leafy greens earn a daily slot - they're among the most consistently brain-associated foods in the research.

A QUARTER: PROTEIN. Beans, lentils, fish, eggs, poultry, tofu. Protein steadies energy and blunts the post-meal crash that drives afternoon grazing.

A QUARTER: WHOLE CARBOHYDRATE. Intact grains, starchy vegetables, legumes - foods that still look like what they came from. These feed steady energy rather than spiking and dropping it.

THE EXTRAS THAT EARN THEIR PLACE: A drizzle of olive oil. A small handful of nuts. Herbs and spices. Water as the default drink.

THE SPIRIT OF IT: This is a pattern, not a rulebook. One plate doesn't make or break anything; the average of your plates over months is what shapes your brain's environment. Aim for "better and repeatable," never "perfect and exhausting."

Coaching note: hand this over only after the client wants it. A handout given before readiness is wallpaper; given at the preparation stage, it's a tool.

SELECTED REFERENCES
Morris MC, Wang Y, Barnes LL, Bennett DA, Dawson-Hughes B, Booth SL. Nutrients and bioactives in green leafy vegetables and cognitive decline: prospective study. Neurology. 2018;90(3):e214-e222. (PMID: 29263222)
Morris MC, Tangney CC, Wang Y, Sacks FM, Bennett DA, Aggarwal NT. MIND diet associated with reduced incidence of Alzheimer's disease. Alzheimers Dement. 2015;11(9):1007-1014. (PMID: 25681666)`,
  },
  {
    id: "nutrition-emotional-eating",
    title: "Emotional Eating: A Coaching Map, Not a Crackdown",
    pillar: "Nutrition",
    type: "Worksheet",
    body: `When eating is doing a job other than nourishment, willpower advice makes it worse. Map the job first.

THE PAUSE BEFORE THE BITE - Help the client name the moment: "What's happening right before you reach for it?" Boredom, loneliness, fatigue, transition, reward, and anxiety each have a different fix.

THE NEED UNDERNEATH - Food is meeting a real need; it's just an imperfect tool for it. The 9pm snack may be the only moment of the day that belongs to them. Honor the need before swapping the tool.

THE GENTLE EXPERIMENT - Co-design one alternative that meets the same need: a ten-minute walk for the transition, a call for the loneliness, an earlier and more satisfying dinner for the genuine hunger hiding as a craving.

THE LANGUAGE THAT HEALS - Replace "good" and "bad" foods with "more often" and "less often." Replace "I was so bad last night" with "what was that moment about?" Curiosity dissolves shame; shame fuels the cycle.

In session: never problem-solve emotional eating before the client feels fully un-judged. The first intervention is always understanding, not strategy.`,
  },

  // ---------------- EXERCISE ----------------
  {
    id: "exercise-first-step",
    title: "Exercise: Designing the Smallest Possible First Step",
    pillar: "Exercise",
    type: "Session guide",
    body: `The most common exercise mistake clients make is starting too big. Your job is to make the first step almost embarrassingly small.

START FROM THEIR LIFE, NOT A PROGRAM - "When in your day is there already a gap that movement could fit into?" Build onto an existing routine (after morning coffee, during a lunch break) rather than carving out a new slot that competes with everything else.

THE TWO-MINUTE RULE - The first version of any movement habit should be so small it feels silly to skip. "Put on your walking shoes" is a complete first goal. Identity forms from showing up, not from intensity.

ANCHOR IT TO SOMETHING THAT ALREADY HAPPENS - "After I pour my morning coffee, I'll walk to the end of the street." Existing habits are the most reliable cue we have.

REMOVE FRICTION IN ADVANCE - Shoes by the door. Bag packed the night before. The decision made once, not every morning.

REDEFINE SUCCESS - For the first month, success is consistency at any size, never duration or intensity. A client who walks two minutes daily will out-progress one who attempts an hour twice and quits.

Coaching question to close: "What would make tomorrow's version 90% likely to happen?" Then shrink it until they say yes with relief.

SELECTED REFERENCES
Guure CB, Ibrahim NA, Adam MB, Said SM. Impact of physical activity on cognitive decline, dementia, and its subtypes: meta-analysis of prospective studies. Biomed Res Int. 2017;2017:9016924. (PMID: 28271072)
Pearce M, Garcia L, Abbas A, et al. Association between physical activity and risk of depression: a systematic review and meta-analysis. JAMA Psychiatry. 2022;79(6):550-559. (PMID: 35416941)`,
  },
  {
    id: "exercise-motivation",
    title: "Movement Motivation: Finding the Why That Lasts",
    pillar: "Exercise",
    type: "Quick reference",
    body: `Weight and appearance are weak long-term motivators - they're slow, comparative, and easy to despair over. The motivators that endure are immediate and felt.

THE SAME-DAY PAYOFF - Most clients feel better mood, sharper focus, or steadier energy within hours of moving. Help them notice it: "How did you feel an hour after your walk yesterday?" That felt evidence beats any statistic.

THE IDENTITY SHIFT - "What kind of person do you want to be at seventy?" Movement framed as becoming - rather than fixing - sustains itself when scale numbers stall.

THE FUNCTION THEY CARE ABOUT - Carrying grandchildren, hiking with a partner, keeping up at work. Tie movement to a concrete life they want to keep living.

THE ENJOYMENT TEST - "What movement have you ever actually liked?" The best exercise is the one they'll repeat. Dancing, gardening, walking with a friend - all count. The gym is one option, not the standard.

Coaching move: when a client is grinding through exercise they hate "because they should," that habit is on borrowed time. Redirect to something they'd do even on a decent day.

SELECTED REFERENCES
Pearce M, Garcia L, Abbas A, et al. Association between physical activity and risk of depression: a systematic review and meta-analysis. JAMA Psychiatry. 2022;79(6):550-559. (PMID: 35416941)`,
  },

  // ---------------- UNWIND ----------------
  {
    id: "unwind-stress-physiology",
    title: "Unwind: Explaining Stress So Clients Stop Fighting It",
    pillar: "Unwind",
    type: "Client handout",
    body: `Stress isn't the enemy. A stress response that never switches off is. Here's the version to share with clients.

THE TWO MODES - Your nervous system has an accelerator (the stress response: alert, focused, ready) and a brake (the recovery response: rest, digest, repair). Health isn't living in the brake; it's being able to move smoothly between the two.

THE REAL PROBLEM IS THE STUCK ACCELERATOR - Modern stress rarely ends with a clear finish line. The body stays mildly revved for hours - through email, traffic, and the news - and never fully downshifts. Over months, that's what wears on the brain and body, not the stress itself.

THE BRAKE IS TRAINABLE - The recovery response can be deliberately switched on. Slow exhales (longer out-breath than in-breath), unhurried time in nature, warm connection with another person, and genuine play all signal safety to the nervous system.

THE COACHING REFRAME - The goal is not a stress-free life - that's neither possible nor desirable. The goal is better recovery: more frequent, more complete returns to the brake.

One question to leave them with: "Where in your week does your body actually get to downshift - and could we protect or grow that?"

SELECTED REFERENCES
Laborde S, Allen MS, Borges U, et al. Effects of voluntary slow breathing on heart rate and heart rate variability: a systematic review and a meta-analysis. Neurosci Biobehav Rev. 2022;138:104711. (PMID: 35623448)`,
  },
  {
    id: "unwind-micro-recovery",
    title: "Micro-Recovery: Five Resets That Fit a Real Day",
    pillar: "Unwind",
    type: "Quick reference",
    body: `Clients often think recovery requires an hour they don't have. These fit into the cracks of an ordinary day and signal safety to the nervous system.

THE LONG EXHALE - Breathe in for a count of four, out for a count of six or eight, for one minute. The extended exhale is the most direct voluntary route to the body's brake.

THE THRESHOLD PAUSE - At any doorway or transition (car to house, meeting to meeting), three slow breaths before moving on. Transitions are where stress accumulates unnoticed.

THE SENSORY ANCHOR - Sixty seconds of full attention on one sense: the warmth of a mug, the sound of rain, the feel of feet on the floor. Presence interrupts the spin.

THE MOVEMENT FLUSH - A brisk two-minute walk, ideally outside. Movement metabolizes stress chemistry the body otherwise holds onto.

THE CONNECTION BEAT - One genuine, unhurried exchange with another human. Co-regulation is among the fastest ways the nervous system finds safety.

Coaching move: have the client choose ONE and attach it to a cue that already happens daily. Five practiced resets beat twenty admired ones.

SELECTED REFERENCES
Laborde S, Allen MS, Borges U, et al. Effects of voluntary slow breathing on heart rate and heart rate variability: a systematic review and a meta-analysis. Neurosci Biobehav Rev. 2022;138:104711. (PMID: 35623448)`,
  },

  // ---------------- RESTORATIVE SLEEP ----------------
  {
    id: "sleep-wind-down",
    title: "The Wind-Down Runway: Building an Evening That Ends in Sleep",
    pillar: "Restorative Sleep",
    type: "Client handout",
    body: `Sleep doesn't begin when the head hits the pillow. It begins in the 60-90 minutes before.

DIM THE WORLD - As evening lands, lower the lights. Bright light late tells the brain it's still daytime and delays the natural rise of sleep signals. Lamps over overheads; screens dimmed or set aside.

LAND THE DAY - Unfinished business is the enemy of sleep. A five-minute "brain dump" - tomorrow's tasks and today's loose worries written down - lets the mind set them down too.

COOL AND DARK AND QuieT - The bedroom does its best work cool, dark, and quiet. Treat the bedroom as a room for sleep, not a second office or a screening room.

A REPEATABLE SEQUENCE - The exact steps matter less than their sameness. Tea, teeth, a few pages of a paper book, lights low - a sequence the brain learns to read as "sleep is coming."

PROTECT THE LAST HOUR - The single highest-leverage change for most people is reclaiming the final hour from work and screens. Not perfectly. Just most nights.

Coaching note: do not prescribe all five. Ask which one feels most doable this week, and build the runway one plank at a time.

SELECTED REFERENCES
Obayashi K, Saeki K, Iwamoto J, et al. Effect of exposure to evening light on sleep initiation in the elderly: a longitudinal analysis for repeated measurements in home settings. Chronobiol Int. 2014;31(4):461-467. (PMID: 24147658)`,
  },
  {
    id: "sleep-myths",
    title: "Five Sleep Myths Worth Correcting Gently",
    pillar: "Restorative Sleep",
    type: "Quick reference",
    body: `Clients arrive with beliefs that quietly sabotage their sleep. Correct these with curiosity, not lecture.

"I'll catch up on the weekend." Weekend recovery sleep helps a little but doesn't erase the week's debt, and the shifted timing creates its own jet-lag. Steadier beats heroic.

"A nightcap helps me sleep." Alcohol speeds the onset of sleep but fragments the second half of the night, costing the deep and dreaming stages that do the restorative work.

"I'm fine on five hours." A small minority truly are; most who believe it have simply normalized impaired function. The tell: needing caffeine and an alarm to operate.

"Lying in bed trying is better than getting up." Beyond about twenty minutes awake, the bed becomes associated with frustration. Getting up for something calm, then returning when sleepy, protects the bed-sleep link.

"Screens are fine, I'm tired anyway." It's not only the light; it's the engagement. The mind that's still scrolling, working, or doom-reading is not a mind that's powering down.

Coaching move: ask permission before correcting - "Would it be useful if I shared what the research suggests here?" An invited correction lands; an imposed one bounces.

SELECTED REFERENCES
Ebrahim IO, Shapiro CM, Williams AJ, Fenwick PB. Alcohol and sleep I: effects on normal sleep. Alcohol Clin Exp Res. 2013;37(4):539-549. (PMID: 23347102)`,
  },

  // ---------------- OPTIMIZE ----------------
  {
    id: "optimize-cognitive-engagement",
    title: "Optimize: Coaching Genuine Cognitive Engagement",
    pillar: "Optimize",
    type: "Session guide",
    body: `"Brain games" are not the goal. The brain is built by novel, effortful, meaningful engagement - and by the people we do it with.

NOVELTY OVER REPETITION - Doing the same crossword for the thousandth time is comfort, not challenge. The brain grows at the edge of difficulty. "What's something you've always wanted to learn but talked yourself out of?"

EFFORT IS THE ACTIVE INGREDIENT - The struggle is the workout. A language, an instrument, a craft, a complex skill - the productive frustration of being a beginner is exactly what builds reserve.

MEANING SUSTAINS IT - Engagement tied to purpose lasts; engagement done as a chore quits. Tie the activity to something the client cares about - teaching a grandchild, contributing to a cause, mastering something they'll use.

THE SOCIAL MULTIPLIER - The richest cognitive engagement is usually with other people. A book club beats a solo app; a volunteer role beats a worksheet. Connection and challenge together are more than the sum of their parts.

Coaching question: "When did you last feel pleasantly stretched - a little out of your depth, fully absorbed?" Build from that memory; it's a map to what will work.

SELECTED REFERENCES
Park DC, Lodi-Smith J, Drew L, et al. The impact of sustained engagement on cognitive function in older adults: the Synapse Project. Psychol Sci. 2014;25(1):103-112. (PMID: 24214244)`,
  },
  {
    id: "optimize-loneliness",
    title: "Social Connection: Coaching Around Isolation Without Prescribing It",
    pillar: "Optimize",
    type: "Worksheet",
    body: `Loneliness is among the most under-addressed factors in brain health, and the clumsiest to coach. "Go make friends" helps no one. Work the structure instead.

NAME IT WITHOUT PATHOLOGIZING - "How connected do you feel to the people in your life right now?" Loneliness is information about a gap between desired and actual connection, not a character flaw.

MAP THE EXISTING WEB - Most isolated clients have more latent connection than they feel. List the dormant ties: the friend not called, the neighbor not greeted, the relative not visited. Reactivation is easier than creation.

LOWER THE BAR FOR CONTACT - The goal isn't deep friendship by Friday. It's one small, low-stakes touchpoint: a text, a wave, a question to a barista. Connection is built from repeated small exposures, not grand gestures.

ATTACH TO SHARED ACTIVITY - Connection grows most naturally as a byproduct of doing something together. A class, a walking group, a volunteer shift gives connection a side door to enter through, which is far easier than the front door of "let's be friends."

Coaching move: never assign socializing as homework to a depleted client. Start by protecting and deepening one tie that already exists, then let the web grow from there.

SELECTED REFERENCES
Wang S, Molassiotis A, Guo C, Leung ISH, Leung AYM. Association between social integration and risk of dementia: a systematic review and meta-analysis of longitudinal studies. J Am Geriatr Soc. 2023;71(2):632-645. (PMID: 36307921)`,
  },

  // ---------------- CORE METHOD (additional) ----------------
  {
    id: "first-session-arc",
    title: "Anatomy of a Great First Session",
    pillar: "Core method",
    type: "Session guide",
    body: `A first session sets the tone for everything. Its job is not to solve - it's to build safety, trust, and a shared sense of direction.

THE FIRST FIVE MINUTES: SAFETY - Set the frame. What coaching is and isn't, confidentiality, that this hour belongs to them. A client who feels safe will tell you the truth; one who doesn't will perform.

THE MIDDLE: THEIR STORY, NOT YOUR INTAKE - Resist the urge to fill a form. "What brings you here, in your own words?" then follow the energy. The intake details will emerge inside the story far richer than they would inside a checklist.

LISTEN FOR THE REAL PROBLEM - The presenting problem ("I want to sleep better") is the opening offer. Stay curious about what sits underneath it. Don't seize the first goal; let it earn its place.

CO-CREATE A DIRECTION, NOT A PLAN - End with a shared sense of where you're heading and one tiny first experiment - chosen by them, sized to almost guarantee success.

CLOSE WITH THEIR WORDS - "What's your takeaway from our time today?" Their summary tells you what landed, and leaves the insight in their voice, where it sticks.

The error to avoid: treating session one as the place to demonstrate expertise. Your restraint is the expertise.`,
  },
  {
    id: "handling-resistance",
    title: "When a Client Pushes Back: Rolling With Resistance",
    pillar: "Core method",
    type: "Quick reference",
    body: `Resistance is not defiance - it's a signal that something in the approach has gotten ahead of the client. Treat it as data, not an obstacle.

DON'T ARGUE THE OTHER SIDE - The moment you advocate for change, an ambivalent client will voice the case against it - and talk themselves further from it. Step alongside, not opposite.

REFLECT IT, DON'T FIGHT IT - "You're not convinced this is the right time." Naming the resistance accurately, without judgment, almost always softens it. People relax when they feel understood rather than managed.

CHECK THE STAGE - Pushback usually means you've offered an Action-stage tool to a Contemplation-stage client. Back up. Explore the ambivalence honestly before returning to planning.

EMPHASIZE AUTONOMY - "This is completely your call." Resistance often spikes when people feel cornered. Returning the choice to them dissolves the wall.

GET CURIOUS, OUT LOUD - "Help me understand what feels off about this." The question communicates respect and frequently surfaces the real barrier you'd otherwise have missed.

The reframe: a resistant client is giving you better information than a compliant one. Compliance can hide; resistance tells you exactly where the work is.`,
  },
  {
    id: "scope-of-practice",
    title: "Staying in Your Lane: A Coach's Scope-of-Practice Guide",
    pillar: "Core method",
    type: "Quick reference",
    body: `Great coaching includes knowing the edges of coaching. This protects clients, protects you, and strengthens trust.

COACHING IS NOT THERAPY - Coaching works with the present and the future, with people who are fundamentally well and seeking change. When the past dominates, when functioning is impaired, when mood or anxiety runs the show, that's a referral to a licensed mental-health professional.

COACHING IS NOT MEDICAL CARE - You do not diagnose, you do not treat disease, you do not adjust medication. Lifestyle coaching complements clinical care; it never replaces it.

KNOW YOUR RED FLAGS - Signs of an eating disorder, suicidal thoughts, untreated clinical depression or anxiety, suspected sleep disorders, chest pain or alarming physical symptoms - each is a stop-and-refer, not a coach-through.

REFER WITHOUT ALARM - "This is a little outside what coaching is built for, and you deserve someone equipped for it. Can I help you find the right person?" A clean referral is an act of care, not a failure.

BUILD YOUR REFERRAL NETWORK BEFORE YOU NEED IT - Have names ready: therapists, physicians, registered dietitians, sleep specialists. The time to find them is not mid-crisis.

The principle: the best coaches refer out more confidently, not less. Knowing your limits is a credential, not a weakness.`,
  },
  {
    id: "goal-setting",
    title: "Goals That Actually Get Done: Beyond SMART",
    pillar: "Core method",
    type: "Worksheet",
    body: `SMART goals are necessary but not sufficient. A goal gets done when it's small, anchored, owned, and forgiving.

SMALL ENOUGH TO BE BORING - If the client isn't slightly underwhelmed by the first step, it's too big. "Floss one tooth" sounds absurd and works precisely because it's unskippable. Shrink until it's certain.

ANCHORED TO AN EXISTING CUE - A goal floating free of a trigger evaporates. "After I [existing habit], I will [tiny new action]." The existing routine becomes the reminder you never have to remember.

OWNED, NOT ASSIGNED - A goal the client articulates in their own words beats one you hand them, every time. Ask "what feels like the right first step to you?" and resist improving their answer.

FORGIVING BY DESIGN - Build the recovery plan before the lapse: "When you miss a day - and you will - what's the plan to begin again?" Missing once is normal; missing twice is where habits die. The skill is the restart, not the streak.

DEFINE SUCCESS AS SHOWING UP - For new habits, consistency at any size outranks performance. Praise the act of doing it, not how well or how much.

Coaching close: "On a scale of one to ten, how confident are you that you'll do this?" If it's below an eight, the goal is still too big. Shrink it together until they're sure.`,
  },
];
