// Healthopia — secure AI proxy.
// The Anthropic API key lives ONLY here, as a Vercel environment variable.
// The browser never sees it.

const MAX_MESSAGES = 60;
const MAX_CHARS = 24000;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) {
    return res.status(503).json({
      error:
        "The AI engine isn't configured yet. Add ANTHROPIC_API_KEY in the Vercel project settings.",
    });
  }

  const { messages, system } = req.body || {};
  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: "messages is required" });
  }
  if (messages.length > MAX_MESSAGES) {
    return res.status(400).json({ error: "Conversation too long" });
  }
  const totalChars = messages.reduce(
    (n, m) => n + (typeof m.content === "string" ? m.content.length : 0),
    0
  );
  if (totalChars > MAX_CHARS) {
    return res.status(400).json({ error: "Payload too large" });
  }

  try {
    const upstream = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": key,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: process.env.CLAUDE_MODEL || "claude-sonnet-4-6",
        max_tokens: 1000,
        system,
        messages,
      }),
    });

    const data = await upstream.json();
    if (!upstream.ok) {
      return res
        .status(upstream.status)
        .json({ error: data?.error?.message || "Upstream error" });
    }

    const text = (data.content || [])
      .filter((b) => b.type === "text")
      .map((b) => b.text)
      .join("\n");

    return res.status(200).json({ text });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Request failed" });
  }
}
