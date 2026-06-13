import { useState, useEffect, useRef } from "react";
import { C as THEME, georgia } from "../theme.js";

const C = {
  teal: "#006A6F",
  tealDark: "#00484C",
  tealDeep: "#022F31",
  tealLight: "#E8F2F3",
  gold: "#C9A961",
  goldSoft: "#E4D2A6",
  cream: "#FAF7F0",
  ink: "#10211F",
  slate: "#4A5C5A",
  white: "#FFFFFF",
  ...(THEME || {}),
};
const FONT_DISPLAY = (georgia && georgia.fontFamily) || 'Georgia, serif';
const FONT_BODY =
  'Calibri, "Segoe UI", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif';

const LINKS = {
  circleHome: "https://neuroacademy.circle.so",
  coachCheckout:
    "https://neuroacademy.circle.so/checkout/neuro-coach-certification-program-nw-promo",
  masterCheckout:
    "https://neuroacademy.circle.so/checkout/neuro-master-coach-certification-certification-program-nw-promo",
  inquire: "mailto:hello@healthopia.coach?subject=NEURO%20Coaching%20Inquiry",
};

const PILLARS = [
  { letter: "N", name: "Nutrition", body: "The dietary patterns that protect neurons, regulate inflammation, and feed cognition across the lifespan." },
  { letter: "E", name: "Exercise", body: "How movement drives neurogenesis, vascular health, and the release of brain-derived growth factors." },
  { letter: "U", name: "Unwind", body: "Evidence-based stress regulation — the difference between cortisol that sharpens and cortisol that erodes." },
  { letter: "R", name: "Restorative Sleep", body: "The glymphatic clearance and memory consolidation that only happen in well-architected sleep." },
  { letter: "O", name: "Optimize", body: "Cognitive and social engagement that builds the reserve which keeps the brain resilient for decades." },
];

const TIERS = [
  {
    id: "coach", eyebrow: "Coach Tier", name: "NEURO Coach Certification",
    blurb: "Your entry into evidence-based brain health coaching. 40 hours of course content built on the NEURO framework, with comprehensive starter resources and monthly faculty Q&As.",
    bullets: ["40 hours of course content + 10-hour NEURO Plan bonus", "Monthly live Q&As with the faculty", "Coaching worksheets & client resources", "11.5 hours of CE/CME credit", "2-year certification and digital badge"],
    priceWas: "$1,395", priceNow: "$900", priceNote: "Limited-time price for NEURO World members.",
    cta: "Enroll Now", href: LINKS.coachCheckout, featured: false,
  },
  {
    id: "master", eyebrow: "Master Coach Tier", name: "NEURO Master Coach",
    blurb: "Everything in the Coach tier, plus a three-month NEURO World internship — real coaching practice, mentorship, and a place in our public coach directory.",
    bullets: ["Everything in the Coach Certification", "3-month NEURO World internship", "Quarterly coaching seminars", "Featured in the NEURO Coach Directory", "Niche refinement & practice mentorship"],
    priceWas: "$2,995", priceNow: "$2,595", priceNote: "Limited-time price for NEURO World members.",
    cta: "Enroll Now", href: LINKS.masterCheckout, featured: true,
  },
  {
    id: "business", eyebrow: "Business Tier", name: "NEURO Business Coach Certification",
    blurb: "The full Master Coach experience plus the systems to build a practice: a branded community space, a client-management toolkit, and a complete marketing package.",
    bullets: ["Everything in the Master Coach tier", "Branded community space", "Client toolkit — CRM, contracts, legal", "Marketing toolkit — templates, calendars, scripts", "Launch & scaling guidance"],
    priceWas: null, priceNow: "Inquire", priceNote: "Book a call to design your rollout.",
    cta: "Book a Call", href: LINKS.inquire, featured: false,
  },
  {
    id: "clinician", eyebrow: "Clinician Tier", name: "NEURO Clinician Practice System",
    blurb: "A complete brain-health practice in a box for clinicians: the full program, a done-for-you patient-facing website, and the clinical resource library to run lifestyle medicine at scale.",
    bullets: ["Everything in the Business tier", "Done-for-you clinician website", "Clinical resource & protocol library", "Patient education & intake materials", "Priority faculty consultation"],
    priceWas: null, priceNow: "Inquire", priceNote: "A consultative onboarding for practices.",
    cta: "Book a Call", href: LINKS.inquire, featured: false,
  },
];

const COMPARE_ROWS = [
  ["NEURO Coach Program (40 hours)", [true, true, true, true]],
  ["Bonus: NEURO Plan Course (10 hours)", [true, true, true, true]],
  ["Monthly Coaching Q&As", [true, true, true, true]],
  ["Coaching Resources & Worksheets", [true, true, true, true]],
  ["2-Year Certification & Badge", [true, true, true, true]],
  ["CE/CME Credits (11.5 hours)", [true, true, true, true]],
  ["3-Month NEURO World Internship", [false, true, true, true]],
  ["Quarterly Coaching Seminars", [false, true, true, true]],
  ["Featured in NEURO Coach Directory", [false, true, true, true]],
  ["Branded Community Space", [false, false, true, true]],
  ["Client Toolkit (CRM, Contracts, Legal)", [false, false, true, true]],
  ["Marketing Toolkit (Templates, Calendars)", [false, false, true, true]],
  ["Done-for-You Clinician Website", [false, false, false, true]],
  ["Clinical Resource & Protocol Library", [false, false, false, true]],
];
const COMPARE_COLS = ["Coach", "Master", "Business", "Clinician"];

const TESTIMONIALS = [
  { quote: "I came in with fifteen years of clinical practice and still walked away with a completely new lens. My patients don't just hear advice now — they change. The behavior-change science is what every medical school left out.", name: "Dr. Marian Velez", role: "Internal Medicine Physician · Certified NEURO Coach" },
  { quote: "Within four months of the Business tier I had a full roster and a waitlist. The marketing toolkit alone paid for the program twice over. I finally feel like I'm running a practice, not a hobby.", name: "Priya Raman", role: "NEURO Business Coach · Austin, TX" },
  { quote: "The internship changed everything. Coaching real members under faculty mentorship is where the science became instinct. I stopped reciting frameworks and started reading people.", name: "Thomas Okafor", role: "Health & Wellness Coach · NEURO Master Coach" },
  { quote: "As a neuropsychologist I'm hard to impress on rigor. Every claim is cited, every module is grounded. I refer colleagues here without a second thought.", name: "Dr. Lena Hartman", role: "Clinical Neuropsychologist" },
];

const PROGRAMS = [
  { tag: "Retreats", title: "NEURO Immersion Retreats", body: "Multi-day, faculty-led retreats where coaches and clients live the five pillars — cooking, movement, restorative practice — and leave with a felt sense of the science." },
  { tag: "Workshops", title: "Corporate Brain-Health Workshops", body: "Keynote and half-day programs we've delivered for Fortune 500 audiences, now available for your clients and organizations through certified coaches." },
  { tag: "Community", title: "The NEURO World Community", body: "A living network of thousands pursuing brain health together — the proving ground where Master Coaches practice and where your future clients already gather." },
];

const STATS = [
  ["40+", "hours of course content"],
  ["11.5", "CE/CME credit hours"],
  ["6–12", "weeks to certify, at your pace"],
  ["1M+", "reached through our books & talks"],
];

function useReveal() {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") { setShown(true); return; }
    const reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) { setShown(true); return; }
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) { setShown(true); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { setShown(true); io.unobserve(e.target); } });
    }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, shown];
}
function Reveal({ children, delay = 0, style }) {
  const [ref, shown] = useReveal();
  return (
    <div ref={ref} style={{
      opacity: shown ? 1 : 0,
      transform: shown ? "translateY(0)" : "translateY(24px)",
      transition: `opacity .7s ease ${delay}ms, transform .7s ease ${delay}ms`,
      ...style,
    }}>{children}</div>
  );
}
function Check({ on }) {
  return on
    ? <span aria-label="included" style={{ color: C.teal, fontWeight: 700 }}>●</span>
    : <span aria-label="not included" style={{ color: "#C9D6D5" }}>–</span>;
}

export default function Landing({ goPractice, goLibrary, goProgress, onPillarStart } = {}) {
  const [activePillar, setActivePillar] = useState(0);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [sent, setSent] = useState(false);

  const goEnroll = () => {
    const el = document.getElementById("hp-enroll");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const goSample = () => {
    const el = document.getElementById("hp-sample");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  function submitSample(e) {
    e.preventDefault();
    if (!email) return;
    setSent(true);
  }

  return (
    <div style={{ fontFamily: FONT_BODY, color: C.ink }}>
      <style>{css}</style>

      <section className="hpl-hero">
        <div className="hpl-hero-bg" aria-hidden="true" />
        <div className="hpl-hero-grid">
          <div>
            <p className="hpl-eyebrow hpl-eyebrow--gold">CE / CME-Accredited · Built by Neurologists</p>
            <h1 className="hpl-h1" style={georgia}>Where coaching becomes <em>clinical</em>.</h1>
            <p className="hpl-hero-sub">
              The NEURO Coaching Certification turns the neuroscience of behavior change into a
              practice you can lead. Help your clients build brain-healthy lives that last —
              grounded in evidence, not advice.
            </p>
            <div className="hpl-hero-actions">
              <button onClick={goEnroll} className="hpl-btn-gold">Choose your program</button>
              <button onClick={goSample} className="hpl-btn-ghost">Try a free lesson</button>
            </div>
            <p className="hpl-hero-trust">
              Created by Drs. Ayesha &amp; Dean Sherzai — bestselling authors and directors of one
              of the few dedicated Alzheimer's prevention programs in the world.
            </p>
          </div>
          <div className="hpl-hero-card">
            <div className="hpl-card-rule" />
            <p className="hpl-card-label">The NEURO Framework</p>
            <div className="hpl-card-letters">
              {PILLARS.map((p, i) => (
                <span key={p.letter} className="hpl-card-letter" style={{ ...georgia, animationDelay: `${i * 120 + 200}ms` }}>{p.letter}</span>
              ))}
            </div>
            <p className="hpl-card-foot">Five evidence-based pillars. One coherent method for lasting change.</p>
          </div>
        </div>
      </section>

      <section className="hpl-stats">
        {STATS.map(([n, l], i) => (
          <Reveal key={l} delay={i * 80}>
            <div className="hpl-stat">
              <div className="hpl-stat-n" style={georgia}>{n}</div>
              <div className="hpl-stat-l">{l}</div>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="hpl-section">
        <Reveal>
          <p className="hpl-eyebrow">The Method</p>
          <h2 className="hpl-h2" style={georgia}>Five pillars the brain actually responds to.</h2>
          <p className="hpl-lead">Every NEURO Coach learns to translate decades of neuroscience into change a client can sustain. Select a pillar to see what you'll teach.</p>
        </Reveal>
        <div className="hpl-pillars">
          <div className="hpl-pillar-tabs" role="tablist" aria-label="NEURO pillars">
            {PILLARS.map((p, i) => (
              <button key={p.letter} role="tab" aria-selected={activePillar === i}
                onClick={() => setActivePillar(i)}
                className={"hpl-pillar-tab" + (activePillar === i ? " is-active" : "")}>
                <span className="hpl-pillar-letter" style={georgia}>{p.letter}</span>
                <span className="hpl-pillar-name">{p.name}</span>
              </button>
            ))}
          </div>
          <div className="hpl-pillar-panel" role="tabpanel">
            <div className="hpl-pillar-big" style={georgia}>{PILLARS[activePillar].letter}</div>
            <div>
              <h3 className="hpl-pillar-h3" style={georgia}>{PILLARS[activePillar].name}</h3>
              <p className="hpl-pillar-body">{PILLARS[activePillar].body}</p>
              {typeof onPillarStart === "function" && (
                <button className="hpl-pillar-cta" onClick={() => onPillarStart(activePillar)}>
                  Practice this pillar in the studio →
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="hpl-choices">
        <div className="hpl-wrap">
          <Reveal>
            <p className="hpl-eyebrow hpl-eyebrow--gold">Start Here</p>
            <h2 className="hpl-h2 hpl-h2--light" style={georgia}>Three ways in.</h2>
          </Reveal>
          <div className="hpl-choice-row">
            {[
              { n: "01", t: "Sample the experience", d: "Take a free lesson and see how a NEURO Coach leads a transformative conversation — no commitment.", cta: "Get the free lesson", act: goSample },
              { n: "02", t: "Become certified", d: "Choose from four tiers — from your first certification to a complete clinician practice system.", cta: "Compare programs", act: goEnroll },
              { n: "03", t: "Sign in", d: "Already a member? Enter the NEURO Academy community and pick up where you left off.", cta: "Member sign-in", act: () => { window.location.href = LINKS.circleHome; } },
            ].map((c, i) => (
              <Reveal key={c.n} delay={i * 100}>
                <div className="hpl-choice">
                  <span className="hpl-choice-n" style={georgia}>{c.n}</span>
                  <h3 className="hpl-choice-t" style={georgia}>{c.t}</h3>
                  <p className="hpl-choice-d">{c.d}</p>
                  <button onClick={c.act} className="hpl-choice-cta">{c.cta} →</button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="hp-enroll" className="hpl-section">
        <Reveal>
          <p className="hpl-eyebrow">Programs</p>
          <h2 className="hpl-h2" style={georgia}>Choose the level that meets your ambition.</h2>
          <p className="hpl-lead">Each tier contains everything before it. Start where you are; grow into a practice, a business, or a complete clinical service.</p>
        </Reveal>
        <div className="hpl-tier-grid">
          {TIERS.map((t, i) => (
            <Reveal key={t.id} delay={i * 70} style={{ height: "100%" }}>
              <article className={"hpl-tier" + (t.featured ? " is-featured" : "")}>
                {t.featured && <div className="hpl-tier-flag">Most Popular</div>}
                <p className="hpl-tier-eyebrow">{t.eyebrow}</p>
                <h3 className="hpl-tier-name" style={georgia}>{t.name}</h3>
                <p className="hpl-tier-blurb">{t.blurb}</p>
                <ul className="hpl-tier-list">
                  {t.bullets.map((b) => (<li key={b}><span className="hpl-tier-dot">●</span>{b}</li>))}
                </ul>
                <div className="hpl-tier-price">
                  {t.priceWas && <span className="hpl-price-was">{t.priceWas}</span>}
                  <span className="hpl-price-now" style={georgia}>{t.priceNow}</span>
                </div>
                <p className="hpl-tier-note">{t.priceNote}</p>
                <a href={t.href} className={t.featured ? "hpl-btn-gold full" : "hpl-btn-teal full"}>{t.cta}</a>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="hpl-compare-wrap">
            <h3 className="hpl-compare-title" style={georgia}>What's included at each level</h3>
            <div className="hpl-compare-scroll">
              <table className="hpl-compare">
                <thead>
                  <tr><th className="hpl-compare-feat">Feature</th>{COMPARE_COLS.map((c) => (<th key={c}>{c}</th>))}</tr>
                </thead>
                <tbody>
                  {COMPARE_ROWS.map(([label, cells]) => (
                    <tr key={label}>
                      <td className="hpl-compare-feat">{label}</td>
                      {cells.map((on, idx) => (<td key={idx}><Check on={on} /></td>))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="hpl-work">
        <div className="hpl-wrap">
          <Reveal>
            <p className="hpl-eyebrow">Our Work</p>
            <h2 className="hpl-h2" style={georgia}>A method already lived by thousands.</h2>
            <p className="hpl-lead">NEURO isn't theory on a slide. It runs in retreats, in boardrooms, and in a thriving community — the same ecosystem your clients can join.</p>
          </Reveal>
          <div className="hpl-work-grid">
            {PROGRAMS.map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <div className="hpl-work-card">
                  <span className="hpl-work-tag">{p.tag}</span>
                  <h3 className="hpl-work-title" style={georgia}>{p.title}</h3>
                  <p className="hpl-work-body">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          {typeof goLibrary === "function" && (
            <Reveal>
              <div style={{ textAlign: "center", marginTop: 32 }}>
                <button onClick={goLibrary} className="hpl-btn-teal">Explore the resource library</button>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      <section className="hpl-testi">
        <div className="hpl-wrap">
          <Reveal>
            <p className="hpl-eyebrow hpl-eyebrow--gold">Voices</p>
            <h2 className="hpl-h2 hpl-h2--light" style={georgia}>What certification changes.</h2>
          </Reveal>
          <div className="hpl-testi-grid">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <figure className="hpl-quote">
                  <div className="hpl-quote-mark" style={georgia}>“</div>
                  <blockquote className="hpl-quote-text">{t.quote}</blockquote>
                  <figcaption className="hpl-quote-cap">
                    <span className="hpl-quote-name">{t.name}</span>
                    <span className="hpl-quote-role">{t.role}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="hpl-section hpl-faculty">
        <Reveal>
          <p className="hpl-eyebrow">Faculty</p>
          <h2 className="hpl-h2" style={georgia}>Designed by experts. Shaped by community.</h2>
          <div className="hpl-faculty-body">
            <p>As neurologists, researchers, and public-health advocates, Drs. Ayesha and Dean Sherzai have spent their careers mapping the relationship between lifestyle and the brain. They've published bestselling books, built Alzheimer's-prevention programs, led community health research, and brought neuroscience to millions through talks, podcasts, and writing.</p>
            <p>They co-founded the NEURO World community — thousands of people supporting one another on their brain-health journeys. Every question, every story from that community has helped shape the most rigorous brain-health coaching program available today.</p>
            <p className="hpl-faculty-sign" style={georgia}>— Dean &amp; Ayesha Sherzai, NEURO Coaching Certification Program</p>
          </div>
        </Reveal>
      </section>

      <section id="hp-sample" className="hpl-sample">
        <div className="hpl-sample-inner">
          <Reveal>
            <p className="hpl-eyebrow hpl-eyebrow--gold">Free Lesson</p>
            <h2 className="hpl-h2 hpl-h2--light" style={georgia}>Asking the right questions.</h2>
            <p className="hpl-sample-sub">The right question can change everything. In this free lesson you'll learn seven science-backed coaching questions that help clients uncover the real motivations behind their habits — one of 30+ lessons inside the full certification.</p>
          </Reveal>
          <Reveal delay={120}>
            {!sent ? (
              <div className="hpl-form">
                <div className="hpl-form-row">
                  <input type="text" placeholder="First name" value={name} onChange={(e) => setName(e.target.value)} className="hpl-input" aria-label="First name" />
                  <input type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} className="hpl-input" aria-label="Email address" required />
                </div>
                <button onClick={submitSample} className="hpl-btn-gold full">Send me the free lesson</button>
                <p className="hpl-form-fine">No spam. One email with your lesson and an occasional note from the faculty.</p>
              </div>
            ) : (
              <div className="hpl-form hpl-form--done">
                <h3 className="hpl-done-h" style={georgia}>Check your inbox.</h3>
                <p className="hpl-done-p">Your free lesson is on its way to <strong>{email}</strong>. While you wait, explore the full program.</p>
                <button onClick={goEnroll} className="hpl-btn-ghost">See the programs</button>
              </div>
            )}
          </Reveal>
        </div>
      </section>

      <section className="hpl-elig">
        <Reveal>
          <h3 className="hpl-elig-h" style={georgia}>Eligible for CE / CME credit?</h3>
          <p className="hpl-elig-p">You qualify with a Bachelor of Science, a STEM-related degree, or a relevant certification such as NBC-HWC. Hold something else you think aligns? Reach out — we include every qualified individual who can contribute to and benefit from a rigorous, evidence-based program.</p>
        </Reveal>
      </section>

      <section className="hpl-final">
        <Reveal>
          <h2 className="hpl-final-h" style={georgia}>Your clients are waiting for someone who actually knows the science.</h2>
          <p className="hpl-final-p">Become that coach. Start with a free lesson, or choose your certification today.</p>
          <div className="hpl-final-actions">
            <button onClick={goEnroll} className="hpl-btn-gold">Choose your program</button>
            <button onClick={goSample} className="hpl-btn-ghost">Try a free lesson</button>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

const css = `
  .hpl-eyebrow { font-size:13px; letter-spacing:3px; text-transform:uppercase; color:${C.teal}; font-weight:700; margin:0 0 14px; }
  .hpl-eyebrow--gold { color:${C.gold}; }
  .hpl-h1 { font-weight:400; color:#fff; font-size: clamp(38px,6vw,64px); line-height:1.05; margin:0 0 22px; letter-spacing:-.5px; }
  .hpl-h1 em { color:${C.gold}; font-style:italic; }
  .hpl-h2 { font-weight:400; color:${C.tealDark}; font-size: clamp(28px,4vw,42px); line-height:1.1; margin:0 0 18px; letter-spacing:-.3px; }
  .hpl-h2--light { color:#fff; }
  .hpl-lead { font-size: clamp(16px,1.6vw,19px); line-height:1.6; color:${C.slate}; max-width:620px; margin:0 0 12px; }
  .hpl-wrap { max-width:1180px; margin:0 auto; }
  .hpl-section { padding: clamp(60px,9vw,110px) clamp(16px,5vw,80px); max-width:1180px; margin:0 auto; }

  .hpl-btn-gold,.hpl-btn-teal,.hpl-btn-ghost { font-family:${FONT_BODY}; cursor:pointer; font-size:16px; font-weight:700; padding:15px 28px; border-radius:3px; border:none; transition: transform .2s, background .2s, color .2s; text-decoration:none; display:inline-block; text-align:center; }
  .hpl-btn-gold { background:${C.gold}; color:${C.tealDeep}; }
  .hpl-btn-gold:hover { background:${C.goldSoft}; transform: translateY(-2px); }
  .hpl-btn-teal { background:${C.teal}; color:#fff; }
  .hpl-btn-teal:hover { background:${C.tealDark}; transform: translateY(-2px); }
  .hpl-btn-ghost { background:transparent; color:#fff; border:1px solid rgba(255,255,255,.5); }
  .hpl-btn-ghost:hover { border-color:${C.gold}; color:${C.gold}; }
  .full { width:100%; }

  .hpl-hero { position:relative; overflow:hidden; padding: clamp(60px,8vw,90px) clamp(16px,5vw,80px) clamp(60px,8vw,100px); border-radius:0 0 10px 10px; }
  .hpl-hero-bg { position:absolute; inset:0; z-index:0; background: radial-gradient(1100px 500px at 78% -10%, rgba(201,169,97,.18), transparent 60%), radial-gradient(900px 600px at 0% 110%, rgba(0,106,111,.55), transparent 55%), linear-gradient(160deg, ${C.tealDeep} 0%, ${C.tealDark} 55%, ${C.teal} 130%); }
  .hpl-hero-grid { position:relative; z-index:1; max-width:1180px; margin:0 auto; display:grid; grid-template-columns:1.25fr .85fr; gap: clamp(28px,5vw,64px); align-items:center; }
  .hpl-hero-sub { color: rgba(255,255,255,.82); font-size: clamp(16px,1.7vw,20px); line-height:1.6; max-width:560px; margin:0 0 30px; }
  .hpl-hero-actions { display:flex; gap:14px; flex-wrap:wrap; margin-bottom:26px; }
  .hpl-hero-trust { color: rgba(255,255,255,.6); font-size:14px; line-height:1.55; max-width:520px; border-left:2px solid ${C.gold}; padding-left:14px; }
  @media (max-width:860px){ .hpl-hero-grid{ grid-template-columns:1fr; } }

  .hpl-hero-card { background: rgba(255,255,255,.06); border:1px solid rgba(201,169,97,.35); border-radius:6px; padding: clamp(24px,3vw,38px); }
  .hpl-card-rule { width:46px; height:3px; background:${C.gold}; margin-bottom:18px; }
  .hpl-card-label { color: rgba(255,255,255,.7); font-size:13px; letter-spacing:2px; text-transform:uppercase; margin:0 0 22px; }
  .hpl-card-letters { display:flex; justify-content:space-between; gap:6px; margin-bottom:22px; }
  .hpl-card-letter { font-size: clamp(30px,4.5vw,50px); color:${C.gold}; line-height:1; opacity:0; animation: hplPop .6s ease forwards; }
  @keyframes hplPop { from{ opacity:0; transform: translateY(10px) scale(.85);} to{ opacity:1; transform:none;} }
  @media (prefers-reduced-motion: reduce){ .hpl-card-letter{ opacity:1; animation:none; } }
  .hpl-card-foot { color: rgba(255,255,255,.7); font-size:14px; line-height:1.5; margin:0; }

  .hpl-stats { background:${C.white}; display:grid; grid-template-columns: repeat(4,1fr); gap:1px; max-width:1180px; margin: -40px auto 0; position:relative; z-index:2; border-radius:6px; overflow:hidden; box-shadow: 0 20px 50px rgba(2,47,49,.18); }
  .hpl-stat { background:${C.white}; padding:30px 22px; text-align:center; }
  .hpl-stat-n { font-size: clamp(30px,3.5vw,42px); color:${C.teal}; line-height:1; }
  .hpl-stat-l { font-size:13.5px; color:${C.slate}; margin-top:8px; }
  @media (max-width:680px){ .hpl-stats{ grid-template-columns: repeat(2,1fr);} }

  .hpl-pillars { margin-top:44px; display:grid; grid-template-columns:280px 1fr; gap:28px; }
  .hpl-pillar-tabs { display:flex; flex-direction:column; gap:8px; }
  .hpl-pillar-tab { display:flex; align-items:center; gap:14px; text-align:left; cursor:pointer; background:${C.white}; border:1px solid #E3E9E8; border-left:3px solid transparent; padding:14px 16px; border-radius:3px; transition: all .2s; font-family:${FONT_BODY}; }
  .hpl-pillar-tab:hover { border-color:${C.goldSoft}; }
  .hpl-pillar-tab.is-active { border-left-color:${C.gold}; background:${C.tealLight}; }
  .hpl-pillar-letter { font-size:24px; color:${C.teal}; width:24px; }
  .hpl-pillar-name { font-size:16px; color:${C.ink}; font-weight:600; }
  .hpl-pillar-panel { background: linear-gradient(155deg, ${C.tealDark}, ${C.teal}); border-radius:6px; padding: clamp(28px,4vw,44px); color:#fff; display:flex; gap: clamp(20px,3vw,40px); align-items:center; }
  .hpl-pillar-big { font-size: clamp(80px,12vw,140px); color:${C.gold}; line-height:.8; }
  .hpl-pillar-h3 { font-weight:400; font-size: clamp(24px,3vw,32px); margin:0 0 12px; }
  .hpl-pillar-body { font-size: clamp(15px,1.5vw,18px); line-height:1.6; color: rgba(255,255,255,.85); margin:0 0 16px; }
  .hpl-pillar-cta { background:none; border:none; color:${C.gold}; font-weight:700; cursor:pointer; font-size:15px; padding:0; font-family:${FONT_BODY}; }
  .hpl-pillar-cta:hover { color:${C.goldSoft}; }
  @media (max-width:760px){ .hpl-pillars{ grid-template-columns:1fr; } .hpl-pillar-tabs{ flex-direction:row; flex-wrap:wrap; } .hpl-pillar-panel{ flex-direction:column; text-align:center; } }

  .hpl-choices { background:${C.tealDeep}; padding: clamp(60px,8vw,100px) clamp(16px,5vw,80px); }
  .hpl-choice-row { margin-top:36px; display:grid; grid-template-columns: repeat(3,1fr); gap:20px; }
  .hpl-choice { background: rgba(255,255,255,.04); border:1px solid rgba(201,169,97,.2); border-radius:6px; padding:32px 28px; height:100%; transition: border-color .25s, transform .25s; }
  .hpl-choice:hover { border-color:${C.gold}; transform: translateY(-3px); }
  .hpl-choice-n { font-size:34px; color:${C.gold}; }
  .hpl-choice-t { font-weight:400; color:#fff; font-size:23px; margin:10px 0 12px; }
  .hpl-choice-d { color: rgba(255,255,255,.72); font-size:15.5px; line-height:1.6; margin:0 0 20px; }
  .hpl-choice-cta { background:none; border:none; color:${C.gold}; cursor:pointer; font-size:15px; font-weight:700; font-family:${FONT_BODY}; padding:0; }
  .hpl-choice-cta:hover { color:${C.goldSoft}; }
  @media (max-width:820px){ .hpl-choice-row{ grid-template-columns:1fr; } }

  .hpl-tier-grid { margin-top:40px; display:grid; grid-template-columns: repeat(4,1fr); gap:18px; align-items:stretch; }
  .hpl-tier { background:${C.white}; border:1px solid #E3E9E8; border-radius:8px; padding:30px 24px; display:flex; flex-direction:column; height:100%; position:relative; transition: transform .25s, box-shadow .25s, border-color .25s; }
  .hpl-tier:hover { transform: translateY(-4px); box-shadow:0 18px 40px rgba(2,47,49,.12); }
  .hpl-tier.is-featured { border-color:${C.gold}; box-shadow:0 18px 44px rgba(201,169,97,.22); }
  .hpl-tier-flag { position:absolute; top:-12px; left:50%; transform:translateX(-50%); background:${C.gold}; color:${C.tealDeep}; font-size:12px; font-weight:700; letter-spacing:1px; text-transform:uppercase; padding:5px 14px; border-radius:20px; white-space:nowrap; }
  .hpl-tier-eyebrow { font-size:12px; letter-spacing:2px; text-transform:uppercase; color:${C.gold}; font-weight:700; margin:4px 0 8px; }
  .hpl-tier-name { font-weight:400; font-size:22px; color:${C.tealDark}; margin:0 0 12px; line-height:1.15; }
  .hpl-tier-blurb { font-size:14.5px; line-height:1.55; color:${C.slate}; margin:0 0 18px; }
  .hpl-tier-list { list-style:none; padding:0; margin:0 0 22px; flex-grow:1; }
  .hpl-tier-list li { font-size:14px; color:${C.ink}; line-height:1.45; margin-bottom:10px; display:flex; gap:9px; align-items:flex-start; }
  .hpl-tier-dot { color:${C.gold}; font-size:9px; line-height:1.7; flex-shrink:0; }
  .hpl-tier-price { display:flex; align-items:baseline; gap:10px; margin-bottom:4px; }
  .hpl-price-was { color:#9FB0AE; text-decoration:line-through; font-size:18px; }
  .hpl-price-now { font-size:30px; color:${C.teal}; }
  .hpl-tier-note { font-size:12.5px; color:${C.slate}; margin:0 0 18px; min-height:32px; }
  @media (max-width:980px){ .hpl-tier-grid{ grid-template-columns: repeat(2,1fr);} }
  @media (max-width:560px){ .hpl-tier-grid{ grid-template-columns:1fr;} }

  .hpl-compare-wrap { margin-top:60px; }
  .hpl-compare-title { font-weight:400; font-size:26px; color:${C.tealDark}; text-align:center; margin:0 0 22px; }
  .hpl-compare-scroll { overflow-x:auto; border:1px solid #E3E9E8; border-radius:8px; }
  .hpl-compare { width:100%; border-collapse:collapse; min-width:620px; background:#fff; }
  .hpl-compare th,.hpl-compare td { padding:13px 16px; text-align:center; font-size:14px; border-bottom:1px solid #EEF2F1; }
  .hpl-compare thead th { background:${C.tealDark}; color:#fff; font-weight:600; }
  .hpl-compare thead th.hpl-compare-feat { text-align:left; }
  .hpl-compare td.hpl-compare-feat { text-align:left; color:${C.ink}; }
  .hpl-compare tbody tr:nth-child(even) { background:${C.cream}; }

  .hpl-work { background:${C.tealLight}; padding: clamp(60px,9vw,100px) clamp(16px,5vw,80px); }
  .hpl-work-grid { margin-top:38px; display:grid; grid-template-columns: repeat(3,1fr); gap:22px; }
  .hpl-work-card { background:#fff; border-radius:8px; padding:34px 30px; border-top:3px solid ${C.gold}; height:100%; transition: transform .25s, box-shadow .25s; }
  .hpl-work-card:hover { transform: translateY(-4px); box-shadow:0 18px 40px rgba(2,47,49,.12); }
  .hpl-work-tag { font-size:12px; letter-spacing:2px; text-transform:uppercase; color:${C.gold}; font-weight:700; }
  .hpl-work-title { font-weight:400; font-size:23px; color:${C.tealDark}; margin:12px 0 12px; }
  .hpl-work-body { font-size:15px; line-height:1.6; color:${C.slate}; margin:0; }
  @media (max-width:820px){ .hpl-work-grid{ grid-template-columns:1fr; } }

  .hpl-testi { background:${C.tealDeep}; padding: clamp(60px,9vw,100px) clamp(16px,5vw,80px); }
  .hpl-testi-grid { margin-top:38px; display:grid; grid-template-columns: repeat(2,1fr); gap:22px; }
  .hpl-quote { background: rgba(255,255,255,.04); border:1px solid rgba(201,169,97,.2); border-radius:8px; padding:34px 32px; margin:0; }
  .hpl-quote-mark { font-size:60px; color:${C.gold}; line-height:.4; height:30px; }
  .hpl-quote-text { font-size:17px; line-height:1.62; color: rgba(255,255,255,.92); margin:0 0 20px; font-style:italic; }
  .hpl-quote-cap { display:flex; flex-direction:column; }
  .hpl-quote-name { color:${C.gold}; font-weight:700; font-size:15px; }
  .hpl-quote-role { color: rgba(255,255,255,.6); font-size:13.5px; margin-top:3px; }
  @media (max-width:760px){ .hpl-testi-grid{ grid-template-columns:1fr; } }

  .hpl-faculty-body { max-width:760px; }
  .hpl-faculty-body p { font-size:17px; line-height:1.7; color:${C.slate}; margin:0 0 18px; }
  .hpl-faculty-sign { font-style:italic; color:${C.teal}; font-size:18px; }

  .hpl-sample { background: linear-gradient(150deg, ${C.tealDark}, ${C.teal}); padding: clamp(60px,9vw,100px) clamp(16px,5vw,80px); border-radius:10px; margin: 0 clamp(8px,2vw,24px); }
  .hpl-sample-inner { max-width:760px; margin:0 auto; text-align:center; }
  .hpl-sample-sub { color: rgba(255,255,255,.85); font-size:18px; line-height:1.65; max-width:620px; margin:0 auto 32px; }
  .hpl-form { max-width:520px; margin:0 auto; }
  .hpl-form-row { display:flex; gap:12px; margin-bottom:12px; }
  .hpl-input { flex:1; padding:15px 16px; border-radius:3px; border:1px solid rgba(255,255,255,.3); background: rgba(255,255,255,.95); font-size:15px; font-family:${FONT_BODY}; color:${C.ink}; }
  .hpl-input:focus { outline:2px solid ${C.gold}; outline-offset:1px; }
  .hpl-form-fine { color: rgba(255,255,255,.6); font-size:13px; margin:14px 0 0; }
  .hpl-form--done { background: rgba(255,255,255,.06); border:1px solid ${C.gold}; border-radius:8px; padding:34px; }
  .hpl-done-h { font-weight:400; color:${C.gold}; font-size:26px; margin:0 0 12px; }
  .hpl-done-p { color: rgba(255,255,255,.85); font-size:16px; line-height:1.6; margin:0 0 20px; }
  @media (max-width:520px){ .hpl-form-row{ flex-direction:column; } }

  .hpl-elig { background:${C.white}; padding: clamp(48px,6vw,80px) clamp(16px,5vw,80px); }
  .hpl-elig > div { max-width:820px; margin:0 auto; text-align:center; }
  .hpl-elig-h { font-weight:400; font-size:26px; color:${C.tealDark}; margin:0 0 14px; }
  .hpl-elig-p { font-size:16px; line-height:1.65; color:${C.slate}; margin:0; }

  .hpl-final { background:${C.cream}; padding: clamp(64px,9vw,110px) clamp(16px,5vw,80px); text-align:center; }
  .hpl-final > div { max-width:820px; margin:0 auto; }
  .hpl-final-h { font-weight:400; font-size: clamp(28px,4vw,40px); color:${C.tealDark}; line-height:1.15; margin:0 0 16px; }
  .hpl-final-p { font-size:18px; color:${C.slate}; margin:0 0 30px; }
  .hpl-final-actions { display:flex; gap:14px; justify-content:center; flex-wrap:wrap; }
  .hpl-final .hpl-btn-ghost { color:${C.teal}; border-color:${C.teal}; }
  .hpl-final .hpl-btn-ghost:hover { color:${C.tealDark}; border-color:${C.tealDark}; }
`;
