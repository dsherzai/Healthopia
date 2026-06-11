import { useState, useRef, useEffect } from "react";
import { C, georgia, eyebrow } from "../theme.js";
import { PILLARS, FRAMEWORKS, DIFFICULTIES } from "../data/content.js";
import { Pill, ErrorNote } from "../components/ui.jsx";
import { callClaude, parseJSON } from "../lib/claude.js";

export default function Practice({ initialPillar, onSessionComplete }) {
  const [screen, setScreen] = useState("setup");
  const [pillar, setPillar] = useState(initialPillar || null);
  const [framework, setFramework] = useState(FRAMEWORKS[0]);
  const [difficulty, setDifficulty] = useState(DIFFICULTIES[1]);
  const [mode, setMode] = useState("live");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const [client, setClient] = useState(null);
  const [chat, setChat] = useState([]);
  const [input, setInput] = useState("");
  const [caseStudy, setCaseStudy] = useState(null);
  const [analysis, setAnalysis] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [debrief, setDebrief] = useState(null);

  const chatEndRef = useRef(null);
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat, busy]);

  const scenarioBrief = () =>
    `NEURO pillar focus: ${pillar}. Behavioral framework the coach is practicing: ${framework}. Difficulty: ${difficulty}.`;

  const generateScenario = async () => {
    if (!pillar) {
      setError("Choose a NEURO pillar first.");
      return;
    }
    setError("");
    setBusy(true);
    try {
      if (mode === "live") {
        const text = await callClaude(
          [
            {
              role: "user",
              content: `Create a realistic coaching client for a NEURO brain-health coach in training. ${scenarioBrief()}

Core design principle: the PRESENTING problem must differ from the REAL underlying problem. Include 1-2 plausible red herrings. Higher difficulty = more guarded client, subtler real problem.

Respond ONLY with JSON, no markdown fences, in this exact shape:
{"name":"","age":0,"occupation":"","presenting":"one sentence, in the client's voice","real":"the hidden underlying issue (coach must discover this)","redHerrings":["",""],"stageOfChange":"","resistanceStyle":"","opening":"the client's natural first message to the coach, 2-3 sentences"}`,
            },
          ],
          "You design rich, realistic coaching simulation clients. JSON only."
        );
        const profile = parseJSON(text);
        setClient(profile);
        setChat([{ role: "client", text: profile.opening }]);
        setScreen("live");
      } else {
        const text = await callClaude(
          [
            {
              role: "user",
              content: `Write a coaching case study for a NEURO brain-health coach in training. ${scenarioBrief()}

The presenting problem must differ from the real underlying problem, with 1-2 red herrings woven in. Do NOT reveal the real problem.

Respond ONLY with JSON, no markdown fences:
{"title":"","study":"a 250-350 word narrative case study","questions":["3 reflection questions"],"real":"the hidden real problem","redHerrings":["",""]}`,
            },
          ],
          "You write nuanced coaching case studies. JSON only."
        );
        const cs = parseJSON(text);
        setCaseStudy(cs);
        setAnalysis("");
        setFeedback(null);
        setScreen("case");
      }
    } catch (e) {
      setError(e.message || "Couldn't generate the scenario. Please try again.");
    }
    setBusy(false);
  };

  const sendMessage = async () => {
    const msg = input.trim();
    if (!msg || busy) return;
    const newChat = [...chat, { role: "coach", text: msg }];
    setChat(newChat);
    setInput("");
    setBusy(true);
    try {
      const history = newChat.map((m) => ({
        role: m.role === "coach" ? "user" : "assistant",
        content: m.text,
      }));
      const reply = await callClaude(
        history,
        `You are roleplaying ${client.name}, a ${client.age}-year-old ${client.occupation} in a coaching session.
Presenting problem: ${client.presenting}
REAL underlying problem (never state directly until the coach earns it): ${client.real}
Red herrings you bring up naturally: ${client.redHerrings.join("; ")}
Stage of change: ${client.stageOfChange}. Resistance style: ${client.resistanceStyle}. Difficulty: ${difficulty}.

Behave like a real client: open, curious questions and reflective listening make you gradually open up toward the real problem; advice-giving, leading questions, or premature solutions make you polite but guarded or trigger surface agreement without commitment. Stay fully in character. Reply in 2-4 natural sentences.`
      );
      setChat((c) => [...c, { role: "client", text: reply }]);
    } catch (e) {
      setError(e.message || "The client didn't respond. Try sending again.");
    }
    setBusy(false);
  };

  const endSession = async () => {
    setBusy(true);
    setError("");
    try {
      const transcript = chat
        .map((m) => `${m.role === "coach" ? "COACH" : "CLIENT"}: ${m.text}`)
        .join("\n");
      const text = await callClaude(
        [
          {
            role: "user",
            content: `Evaluate this coaching session transcript. The coach was practicing ${framework} with a focus on the ${pillar} pillar.

Hidden real problem: ${client.real}
Red herrings: ${client.redHerrings.join("; ")}

TRANSCRIPT:
${transcript}

Respond ONLY with JSON, no markdown fences:
{"discovered":true/false (did the coach surface or approach the real problem),"strengths":["2 specific strengths with quoted examples"],"growth":["2 specific growth areas with concrete alternative phrasings"],"pauseNotes":"2-3 sentences on their questioning quality","score":0-100}`,
          },
        ],
        "You are a master coach trainer giving warm, direct, specific feedback. JSON only."
      );
      const d = parseJSON(text);
      setDebrief(d);
      setScreen("debrief");
      onSessionComplete?.({
        when: new Date(),
        clientName: client.name,
        pillar,
        framework,
        difficulty,
        score: d.score,
        discovered: d.discovered,
      });
    } catch (e) {
      setError(e.message || "Couldn't generate the debrief. Try again.");
    }
    setBusy(false);
  };

  const submitAnalysis = async () => {
    if (!analysis.trim() || busy) return;
    setBusy(true);
    setError("");
    try {
      const text = await callClaude(
        [
          {
            role: "user",
            content: `A coach in training analyzed this case study.

CASE: ${caseStudy.study}
Hidden real problem: ${caseStudy.real}
Red herrings: ${caseStudy.redHerrings.join("; ")}

COACH'S ANALYSIS:
${analysis}

Give warm, direct feedback: did they distinguish presenting from real problem? Did red herrings catch them? What would a master coach notice? End by revealing the real problem. Plain prose, under 250 words.`,
          },
        ],
        "You are a master coach trainer. Warm + direct."
      );
      setFeedback(text);
    } catch (e) {
      setError(e.message || "Couldn't generate feedback. Try again.");
    }
    setBusy(false);
  };

  const reset = () => {
    setScreen("setup");
    setClient(null);
    setChat([]);
    setCaseStudy(null);
    setAnalysis("");
    setFeedback(null);
    setDebrief(null);
    setError("");
  };

  return (
    <div>
      <ErrorNote text={error} />

      {screen === "setup" && (
        <div className="space-y-7">
          <div>
            <div style={eyebrow}>Step one</div>
            <h2 className="text-lg font-bold mt-1" style={{ ...georgia, color: C.tealDark }}>
              Choose a NEURO pillar
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
              {PILLARS.map((p) => (
                <Pill key={p.key} active={pillar === p.key} onClick={() => setPillar(p.key)} sub={p.desc}>
                  {p.key}
                </Pill>
              ))}
            </div>
          </div>

          <div>
            <div style={eyebrow}>Step two</div>
            <h2 className="text-lg font-bold mt-1" style={{ ...georgia, color: C.tealDark }}>
              Framework to practice
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
              {FRAMEWORKS.map((f) => (
                <Pill key={f} active={framework === f} onClick={() => setFramework(f)}>
                  {f}
                </Pill>
              ))}
            </div>
          </div>

          <div>
            <div style={eyebrow}>Step three</div>
            <h2 className="text-lg font-bold mt-1" style={{ ...georgia, color: C.tealDark }}>
              Difficulty & mode
            </h2>
            <div className="flex flex-wrap gap-2 mt-3">
              {DIFFICULTIES.map((d) => (
                <Pill key={d} active={difficulty === d} onClick={() => setDifficulty(d)}>
                  {d}
                </Pill>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
              <Pill active={mode === "live"} onClick={() => setMode("live")} sub="Converse with a simulated client in real time">
                Live client session
              </Pill>
              <Pill active={mode === "case"} onClick={() => setMode("case")} sub="Analyze a written case, then get feedback">
                Written case study
              </Pill>
            </div>
          </div>

          <button
            onClick={generateScenario}
            disabled={busy}
            className="w-full py-4 rounded-xl font-bold text-white text-base"
            style={{ background: busy ? "#7aa6a8" : C.teal }}
          >
            {busy ? "Creating your client…" : "Generate scenario"}
          </button>
        </div>
      )}

      {screen === "live" && client && (
        <div>
          <div className="rounded-xl px-5 py-4 mb-4 border" style={{ background: C.tealLight, borderColor: "#cfe0e1" }}>
            <div className="font-bold" style={{ ...georgia, color: C.tealDark }}>
              {client.name}, {client.age} — {client.occupation}
            </div>
            <div className="text-sm mt-1" style={{ color: C.tealDark }}>
              Presenting: “{client.presenting}”
            </div>
            <div className="text-xs mt-1 opacity-60" style={{ color: C.tealDark }}>
              {pillar} · {framework} · {difficulty} — the real problem is hidden. Discover it.
            </div>
          </div>

          <div className="space-y-3 mb-4 max-h-96 overflow-y-auto pr-1">
            {chat.map((m, i) => (
              <div key={i} className={`flex ${m.role === "coach" ? "justify-end" : "justify-start"}`}>
                <div
                  className="max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed"
                  style={
                    m.role === "coach"
                      ? { background: C.teal, color: "white", borderBottomRightRadius: 6 }
                      : { background: "white", color: C.ink, border: "1px solid #e3e3de", borderBottomLeftRadius: 6 }
                  }
                >
                  {m.text}
                </div>
              </div>
            ))}
            {busy && (
              <div className="text-xs italic opacity-50" style={{ color: C.tealDark }}>
                {client.name} is responding…
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <div className="flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask your client a question…"
              className="flex-1 px-4 py-3 rounded-xl border text-sm outline-none"
              style={{ borderColor: "#cfe0e1", background: "white" }}
            />
            <button
              onClick={sendMessage}
              disabled={busy}
              className="px-5 rounded-xl font-semibold text-white text-sm"
              style={{ background: C.teal }}
            >
              Send
            </button>
          </div>

          <div className="flex gap-2 mt-4">
            <button
              onClick={endSession}
              disabled={busy || chat.length < 4}
              className="flex-1 py-3 rounded-xl font-semibold text-sm border bg-white"
              style={{ color: chat.length < 4 ? "#9bb5b6" : C.tealDark, borderColor: "#cfe0e1" }}
            >
              {chat.length < 4 ? "Exchange a few messages first" : "End session & get debrief"}
            </button>
            <button
              onClick={reset}
              className="px-4 py-3 rounded-xl text-sm border bg-white"
              style={{ color: C.tealDark, borderColor: "#cfe0e1" }}
            >
              Abandon
            </button>
          </div>
        </div>
      )}

      {screen === "case" && caseStudy && (
        <div className="space-y-5">
          <h2 className="text-xl font-bold" style={{ ...georgia, color: C.tealDark }}>
            {caseStudy.title}
          </h2>
          <div
            className="rounded-xl px-5 py-4 text-sm leading-relaxed whitespace-pre-wrap bg-white"
            style={{ border: "1px solid #e3e3de", color: C.ink }}
          >
            {caseStudy.study}
          </div>
          <div>
            <div className="text-sm font-semibold mb-2" style={{ color: C.tealDark }}>
              Reflect on:
            </div>
            <ul className="space-y-1.5">
              {caseStudy.questions.map((q, i) => (
                <li key={i} className="text-sm flex gap-2" style={{ color: C.tealDark }}>
                  <span style={{ color: C.gold }}>◆</span> {q}
                </li>
              ))}
            </ul>
          </div>
          {!feedback ? (
            <>
              <textarea
                value={analysis}
                onChange={(e) => setAnalysis(e.target.value)}
                rows={6}
                placeholder="What do you think is really going on here? Where might the red herrings be? How would you open the first session?"
                className="w-full px-4 py-3 rounded-xl border text-sm outline-none"
                style={{ borderColor: "#cfe0e1", background: "white" }}
              />
              <button
                onClick={submitAnalysis}
                disabled={busy || !analysis.trim()}
                className="w-full py-3.5 rounded-xl font-bold text-white"
                style={{ background: busy ? "#7aa6a8" : C.teal }}
              >
                {busy ? "Your mentor is reading…" : "Submit analysis for feedback"}
              </button>
            </>
          ) : (
            <>
              <div
                className="rounded-xl px-5 py-4 text-sm leading-relaxed whitespace-pre-wrap border-l-4"
                style={{ background: C.tealLight, borderColor: C.gold, color: C.tealDark }}
              >
                <div className="font-bold mb-2" style={georgia}>
                  Mentor feedback
                </div>
                {feedback}
              </div>
              <button onClick={reset} className="w-full py-3.5 rounded-xl font-bold text-white" style={{ background: C.teal }}>
                Try another scenario
              </button>
            </>
          )}
        </div>
      )}

      {screen === "debrief" && debrief && client && (
        <div className="space-y-5">
          <div className="text-center">
            <div className="text-5xl font-bold" style={{ ...georgia, color: C.teal }}>
              {debrief.score}
            </div>
            <div style={{ ...eyebrow, marginTop: 4 }}>Session score</div>
            <div className="mt-2 text-sm font-semibold" style={{ color: C.tealDark }}>
              {debrief.discovered ? "You surfaced the real problem." : "The real problem stayed hidden this time."}
            </div>
          </div>

          <div className="rounded-xl px-5 py-4" style={{ background: C.tealLight, border: "1px solid #cfe0e1" }}>
            <div style={eyebrow}>What was really going on</div>
            <div className="text-sm mt-1" style={{ color: C.tealDark }}>
              {client.real}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            <div className="rounded-xl px-4 py-4 bg-white" style={{ border: "1px solid #e3e3de" }}>
              <div className="text-sm font-bold mb-2" style={{ ...georgia, color: C.teal }}>
                Strengths
              </div>
              {debrief.strengths.map((s, i) => (
                <p key={i} className="text-sm mb-2 leading-relaxed" style={{ color: C.ink }}>
                  {s}
                </p>
              ))}
            </div>
            <div className="rounded-xl px-4 py-4 bg-white" style={{ border: "1px solid #e3e3de" }}>
              <div className="text-sm font-bold mb-2" style={{ ...georgia, color: C.gold }}>
                Growth areas
              </div>
              {debrief.growth.map((g, i) => (
                <p key={i} className="text-sm mb-2 leading-relaxed" style={{ color: C.ink }}>
                  {g}
                </p>
              ))}
            </div>
          </div>

          <div
            className="rounded-xl px-5 py-4 text-sm leading-relaxed border-l-4 bg-white"
            style={{ borderColor: C.teal, color: C.ink }}
          >
            <span className="font-semibold" style={{ color: C.tealDark }}>
              On your questioning:{" "}
            </span>
            {debrief.pauseNotes}
          </div>

          <button onClick={reset} className="w-full py-4 rounded-xl font-bold text-white" style={{ background: C.teal }}>
            Practice with a new client
          </button>
        </div>
      )}
    </div>
  );
}
