// api/claude.js
// Serverless proxy for Greenlight. Keeps your Anthropic API key secret on the server.
// Players never see the key. The game calls /api/claude; this function adds the key
// and forwards the request to Anthropic.
//
// Set ANTHROPIC_API_KEY as an Environment Variable in your host (e.g. Vercel project settings).
// To lower cost per play, you can swap MODEL to "claude-haiku-4-5-20251001".

const MODEL = "claude-sonnet-4-20250514";
const MAX_TOKENS = 1000;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Use POST" });
    return;
  }
  try {
    const { messages, system } = req.body || {};
    if (!messages) {
      res.status(400).json({ error: "Missing messages" });
      return;
    }
    const upstream = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify({ model: MODEL, max_tokens: MAX_TOKENS, system, messages })
    });
    const data = await upstream.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: String(err) });
  }
}
