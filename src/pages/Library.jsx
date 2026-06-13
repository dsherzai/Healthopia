import { useState, useMemo } from "react";
import { C, georgia, eyebrow } from "../theme.js";
import { RESOURCES } from "../data/content.js";
import { ErrorNote } from "../components/ui.jsx";
import { callClaude, parseJSON } from "../lib/claude.js";

export default function Library() {
  const [open, setOpen] = useState(null);
  const [copied, setCopied] = useState(false);
  const [showGen, setShowGen] = useState(false);
  const [genPrompt, setGenPrompt] = useState("");
  const [genBusy, setGenBusy] = useState(false);
  const [error, setError] = useState("");
  const [custom, setCustom] = useState([]);

  // Search + filter state
  const [query, setQuery] = useState("");
  const [pillarFilter, setPillarFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");

  const copyText = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      setError("Copy isn't available here ‚Äî select the text manually.");
    }
  };

  const generateResource = async () => {
    if (!genPrompt.trim() || genBusy) return;
    setGenBusy(true);
    setError("");
    try {
      const text = await callClaude(
        [
          {
            role: "user",
            content: `Write a practical coaching resource for a certified NEURO brain-health coach. The coach requested: "${genPrompt}"

House style: warm + direct, evidence-informed, immediately usable in session, grounded where relevant in the five NEURO pillars (Nutrition, Exercise, Unwind, Restorative Sleep, Optimize) and behavior-change frameworks (MI, Stages of Change, COM-B, P.A.U.S.E. questioning). No invented citations.

Respond ONLY with JSON, no markdown fences:
{"title":"","type":"e.g. Handout, Worksheet, Session guide, Quick reference","body":"the full resource, 250-400 words, plain text with line breaks"}`,
          },
        ],
        "You write premium coaching resources in the NEURO Academy voice. JSON only."
      );
      const r = parseJSON(text);
      const resource = { id: `gen-${Date.now()}`, pillar: "Generated for you", ...r };
      setCustom((c) => [resource, ...c]);
      setGenPrompt("");
      setShowGen(false);
      setOpen(resource);
    } catch (e) {
      setError(e.message || "Couldn't generate that resource. Try rephrasing your request.");
    }
    setGenBusy(false);
  };

  if (open) {
    return (
      <div>
        <button onClick={() => setOpen(null)} className="text-sm mb-4" style={{ color: C.teal }}>
          ‚Üê Back to library
        </button>
        <div style={eyebrow}>
          {open.pillar} ¬∑ {open.type}
        </div>
        <h2 className="text-2xl font-bold mt-1 mb-4" style={{ ...georgia, color: C.tealDark }}>
          {open.title}
        </h2>
        <div
          className="rounded-xl px-6 py-5 text-sm leading-relaxed whitespace-pre-wrap bg-white"
          style={{ border: "1px solid #e3e3de", color: C.ink }}
        >
          {open.body}
        </div>
        <div className="flex gap-2 mt-4">
          <button
            onClick={() => copyText(`${open.title}\n\n${open.body}`)}
            className="px-5 py-2.5 rounded-xl font-semibold text-sm text-white"
            style={{ background: C.teal }}
          >
            {copied ? "Copied ‚úì" : "Copy text"}
          </button>
          <button
            onClick={() => window.print()}
            className="px-5 py-2.5 rounded-xl font-semibold text-sm border bg-white"
            style={{ color: C.tealDark, borderColor: "#cfe0e1" }}
          >
            Print
          </button>
        </div>
      </div>
    );
  }

  const all = [...custom, ...RESOURCES];

  // Build filter option lists from the data (so they stay in sync automatically)
  const pillars = useMemo(() => {
    const set = [];
    all.forEach((r) => {
      if (r.pillar && !set.includes(r.pillar)) set.push(r.pillar);
    });
    return ["All", ...set];
  }, [all]);

  const types = useMemo(() => {
    const set = [];
    all.forEach((r) => {
      if (r.type && !set.includes(r.type)) set.push(r.type);
    });
    return ["All", ...set];
  }, [all]);

  // Apply search + filters
  const q = query.trim().toLowerCase();
  const filtered = all.filter((r) => {
    if (pillarFilter !== "All" && r.pillar !== pillarFilter) return false;
    if (typeFilter !== "All" && r.type !== typeFilter) return false;
    if (q) {
      const hay = `${r.title} ${r.body} ${r.pillar} ${r.type}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });

  const chipBase = {
    padding: "5px 12px",
    borderRadius: "999px",
    fontSize: "12px",
    fontWeight: 600,
    cursor: "pointer",
    border: "1px solid #cfe0e1",
    whiteSpace: "nowrap",
  };

  const activeChip = { ...chipBase, background: C.teal, color: "white", borderColor: C.teal };
  const idleChip = { ...chipBase, background: "white", color: C.tealDark };

  return (
    <div>
      <ErrorNote text={error} />
      <div
        className="rounded-xl px-5 py-4 mb-6 border flex flex-wrap items-center justify-between gap-3"
        style={{ background: C.tealLight, borderColor: "#cfe0e1" }}
      >
        <div>
          <div className="font-bold text-sm" style={{ ...georgia, color: C.tealDark }}>
            Need something that isn't here?
          </div>
          <div className="text-xs mt-0.5" style={{ color: C.tealDark, opacity: 0.7 }}>
            Describe it, and Healthopia will write it in the NEURO voice.
          </div>
        </div>
        <button
          onClick={() => setShowGen((s) => !s)}
          className="px-4 py-2 rounded-xl text-sm font-semibold text-white"
          style={{ background: C.teal }}
        >
          {showGen ? "Close" : "Create a resource"}
        </button>
      </div>

      {showGen && (
        <div className="mb-6">
          <textarea
            value={genPrompt}
            onChange={(e) => setGenPrompt(e.target.value)}
            rows={3}
            placeholder='e.g. "A one-page handout on caffeine timing for clients working on sleep"'
            className="w-full px-4 py-3 rounded-xl border text-sm outline-none"
            style={{ borderColor: "#cfe0e1", background: "white" }}
          />
          <button
            onClick={generateResource}
            disabled={genBusy || !genPrompt.trim()}
            className="mt-2 w-full py-3 rounded-xl font-bold text-white"
            style={{ background: genBusy ? "#7aa6a8" : C.teal }}
          >
            {genBusy ? "Writing‚Ä¶" : "Generate resource"}
          </button>
        </div>
      )}

      {/* Search */}
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search resources‚Ä¶"
        className="w-full px-4 py-3 rounded-xl border text-sm outline-none mb-3"
        style={{ borderColor: "#cfe0e1", background: "white", color: C.ink }}
      />

      {/* Pillar filter chips */}
      <div className="flex flex-wrap gap-2 mb-2">
        {pillars.map((p) => (
          <button
            key={p}
            onClick={() => setPillarFilter(p)}
            style={pillarFilter === p ? activeChip : idleChip}
          >
            {p}
          </button>
        ))}
      </div>

      {/* Type filter chips */}
      <div className="flex flex-wrap gap-2 mb-4">
        {types.map((t) => (
          <button
            key={t}
            onClick={() => setTypeFilter(t)}
            style={typeFilter === t ? activeChip : idleChip}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Result count + clear */}
      <div className="flex items-center justify-between mb-3">
        <div className="text-xs" style={{ color: C.tealDark, opacity: 0.7 }}>
          {filtered.length} {filtered.length === 1 ? "resource" : "resources"}
        </div>
        {(query || pillarFilter !== "All" || typeFilter !== "All") && (
          <button
            onClick={() => {
              setQuery("");
              setPillarFilter("All");
              setTypeFilter("All");
            }}
            className="text-xs font-semibold"
            style={{ color: C.teal }}
          >
            Clear filters
          </button>
        )}
      </div>

      {filtered.length === 0 ? (
        <div
          className="rounded-xl px-5 py-8 text-center text-sm border"
          style={{ background: "white", borderColor: "#e3e3de", color: C.tealDark }}
        >
          No resources match that search. Try a different term, clear the filters, or use
          "Create a resource" above to generate one.
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 gap-3">
          {filtered.map((r) => (
            <button
              key={r.id}
              onClick={() => setOpen(r)}
              className="text-left rounded-xl px-5 py-4 bg-white border transition-shadow hover:shadow-md"
              style={{ borderColor: r.pillar === "Generated for you" ? C.gold : "#e3e3de" }}
            >
              <div style={eyebrow}>
                {r.pillar} ¬∑ {r.type}
              </div>
              <div className="font-bold text-sm mt-1.5" style={{ ...georgia, color: C.tealDark }}>
                {r.title}
              </div>
              <div className="text-xs mt-1.5 opacity-60" style={{ color: C.tealDark }}>
                {r.body.slice(0, 90)}‚Ä¶
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

