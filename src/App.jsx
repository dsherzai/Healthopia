import { useState, useEffect } from "react";
import { C, georgia } from "./theme.js";
import Home from "./pages/Home.jsx";
import Practice from "./pages/Practice.jsx";
import Library from "./pages/Library.jsx";
import Progress from "./pages/Progress.jsx";

const STORAGE_KEY = "healthopia.sessions.v1";

export default function App() {
  const [tab, setTab] = useState("home");
  const [sessions, setSessions] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch {
      return [];
    }
  });
  const [pillarPreselect, setPillarPreselect] = useState(null);
  const [practiceKey, setPracticeKey] = useState(0);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(sessions));
    } catch {
      /* storage unavailable — sessions stay in memory */
    }
  }, [sessions]);

  const startFromPillar = (pillarKey) => {
    setPillarPreselect(pillarKey);
    setPracticeKey((k) => k + 1);
    setTab("practice");
  };

  const TABS = [
    ["home", "Home"],
    ["practice", "Practice"],
    ["library", "Library"],
    ["progress", "Progress"],
  ];

  return (
    <div className="min-h-screen" style={{ background: C.cream }}>
      <header style={{ background: C.tealDark }}>
        <div className="max-w-3xl mx-auto px-6 pt-5 pb-0">
          <div className="flex items-end justify-between flex-wrap gap-2">
            <div>
              <div className="text-2xl font-bold text-white leading-none" style={georgia}>
                Health<span style={{ color: C.gold }}>opia</span>
              </div>
              <div className="text-[11px] mt-1" style={{ color: "rgba(255,255,255,0.55)" }}>
                NEURO Academy · Coaching Certification Program
              </div>
            </div>
          </div>
          <nav className="flex gap-1 mt-4">
            {TABS.map(([key, label]) => (
              <button
                key={key}
                onClick={() => setTab(key)}
                className="px-4 py-2.5 text-sm font-semibold rounded-t-lg transition-colors"
                style={
                  tab === key
                    ? { background: C.cream, color: C.tealDark }
                    : { color: "rgba(255,255,255,0.75)" }
                }
              >
                {label}
                {key === "progress" && sessions.length > 0 && (
                  <span
                    className="ml-1.5 text-[10px] px-1.5 py-0.5 rounded-full"
                    style={{ background: C.gold, color: C.tealDark }}
                  >
                    {sessions.length}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-8">
        {tab === "home" && (
          <Home
            onPillarStart={startFromPillar}
            goPractice={() => setTab("practice")}
            goLibrary={() => setTab("library")}
            sessionCount={sessions.length}
          />
        )}
        {tab === "practice" && (
          <Practice
            key={practiceKey}
            initialPillar={pillarPreselect}
            onSessionComplete={(s) => setSessions((prev) => [s, ...prev])}
          />
        )}
        {tab === "library" && <Library />}
        {tab === "progress" && <Progress sessions={sessions} goPractice={() => setTab("practice")} />}
      </main>

      <footer className="max-w-3xl mx-auto px-6 pb-8">
        <p className="text-[11px] text-center opacity-50" style={{ color: C.tealDark }}>
          Healthopia · Dean & Ayesha Sherzai · healthopia.coach
        </p>
      </footer>
    </div>
  );
}
