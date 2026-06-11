import { C } from "../theme.js";

export function Pill({ active, onClick, children, sub }) {
  return (
    <button
      onClick={onClick}
      className="text-left rounded-xl px-4 py-3 border transition-all"
      style={{
        background: active ? C.teal : "white",
        color: active ? "white" : C.tealDark,
        borderColor: active ? C.teal : "#d8e4e5",
        boxShadow: active ? "0 4px 14px rgba(0,106,111,0.25)" : "none",
      }}
    >
      <div className="font-semibold text-sm">{children}</div>
      {sub && (
        <div className="text-xs mt-0.5" style={{ opacity: active ? 0.85 : 0.6 }}>
          {sub}
        </div>
      )}
    </button>
  );
}

export function ErrorNote({ text }) {
  if (!text) return null;
  return (
    <div
      className="mb-4 px-4 py-3 rounded-lg text-sm"
      style={{ background: "#FDECEA", color: "#8a2a1f" }}
    >
      {text}
    </div>
  );
}
