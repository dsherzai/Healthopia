import { C, georgia, eyebrow } from "../theme.js";

export default function Progress({ sessions, goPractice }) {
  if (sessions.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-4xl mb-3" style={{ ...georgia, color: C.gold }}>
          —
        </div>
        <h2 className="text-lg font-bold" style={{ ...georgia, color: C.tealDark }}>
          No sessions yet
        </h2>
        <p className="text-sm mt-1 mb-6 opacity-70" style={{ color: C.tealDark }}>
          Your completed practice sessions will appear here.
        </p>
        <button onClick={goPractice} className="px-6 py-3 rounded-xl font-bold text-white" style={{ background: C.teal }}>
          Start your first session
        </button>
      </div>
    );
  }

  const avg = Math.round(sessions.reduce((s, x) => s + x.score, 0) / sessions.length);
  const found = sessions.filter((s) => s.discovered).length;

  return (
    <div>
      <div className="grid grid-cols-3 gap-3 mb-6">
        {[
          [sessions.length, "Sessions"],
          [avg, "Avg score"],
          [`${found}/${sessions.length}`, "Real problems found"],
        ].map(([val, label]) => (
          <div key={label} className="rounded-xl bg-white px-4 py-4 text-center" style={{ border: "1px solid #e3e3de" }}>
            <div className="text-2xl font-bold" style={{ ...georgia, color: C.teal }}>
              {val}
            </div>
            <div style={{ ...eyebrow, marginTop: 2 }}>{label}</div>
          </div>
        ))}
      </div>

      <div className="space-y-2">
        {sessions.map((s, i) => (
          <div
            key={i}
            className="rounded-xl bg-white px-5 py-3.5 flex items-center justify-between gap-3"
            style={{ border: "1px solid #e3e3de" }}
          >
            <div>
              <div className="font-semibold text-sm" style={{ color: C.tealDark }}>
                {s.clientName}
                <span className="font-normal opacity-60">
                  {" "}
                  · {s.pillar} · {s.framework}
                </span>
              </div>
              <div className="text-xs opacity-50 mt-0.5" style={{ color: C.tealDark }}>
                {s.difficulty} · {new Date(s.when).toLocaleString([], { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })}
                {s.discovered ? " · found the real problem" : ""}
              </div>
            </div>
            <div className="text-xl font-bold shrink-0" style={{ ...georgia, color: s.score >= 70 ? C.teal : C.gold }}>
              {s.score}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
