import { C, georgia, eyebrow } from "../theme.js";
import { PILLARS } from "../data/content.js";

export default function Home({ onPillarStart, goPractice, goLibrary, sessionCount }) {
  return (
    <div>
      <div className="text-center pt-4 pb-10">
        <div style={eyebrow}>The practice studio for NEURO coaches</div>
        <h1 className="text-4xl font-bold mt-2" style={{ ...georgia, color: C.tealDark }}>
          Where coaching becomes instinct
        </h1>
        <p className="text-sm mt-3 max-w-md mx-auto leading-relaxed" style={{ color: C.tealDark, opacity: 0.7 }}>
          Limitless simulated clients, a living resource library, and feedback from a mentor who never
          sleeps. Learn by doing, not by watching.
        </p>
      </div>

      <div className="mb-2 text-center" style={eyebrow}>
        Start from a pillar
      </div>
      <div className="grid grid-cols-5 gap-2 mb-10">
        {PILLARS.map((p) => (
          <button
            key={p.key}
            onClick={() => onPillarStart(p.key)}
            title={`${p.key} — ${p.desc}`}
            className="rounded-xl py-5 bg-white border transition-all hover:shadow-lg"
            style={{ borderColor: "#e3e3de" }}
          >
            <div className="text-3xl font-bold" style={{ ...georgia, color: C.gold }}>
              {p.letter}
            </div>
            <div className="text-[10px] mt-1 px-1 leading-tight" style={{ color: C.tealDark, opacity: 0.65 }}>
              {p.key}
            </div>
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        <button onClick={goPractice} className="text-left rounded-xl px-6 py-5 text-white" style={{ background: C.teal }}>
          <div className="font-bold" style={georgia}>
            Practice studio →
          </div>
          <div className="text-sm mt-1 opacity-85">
            Generate a client and run a live session, or analyze a written case.
          </div>
        </button>
        <button
          onClick={goLibrary}
          className="text-left rounded-xl px-6 py-5 bg-white border"
          style={{ borderColor: "#e3e3de" }}
        >
          <div className="font-bold" style={{ ...georgia, color: C.tealDark }}>
            Resource library →
          </div>
          <div className="text-sm mt-1" style={{ color: C.tealDark, opacity: 0.7 }}>
            Reference cards, session guides, and a muse that writes what's missing.
          </div>
        </button>
      </div>

      {sessionCount > 0 && (
        <p className="text-center text-xs mt-8 opacity-60" style={{ color: C.tealDark }}>
          {sessionCount} session{sessionCount > 1 ? "s" : ""} completed today — momentum looks good.
        </p>
      )}
    </div>
  );
}
