export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const KEY = process.env.ANTHROPIC_API_KEY;

  // Debug: tell us exactly what's happening
  if (!KEY) {
    return res.status(500).json({ 
      type: "error",
      error: { 
        type: "authentication_error", 
        message: "KEY IS MISSING on Vercel. Please redeploy after adding env variable." 
      }
    });
  }

  if (!KEY.startsWith("sk-ant-")) {
    return res.status(500).json({ 
      type: "error",
      error: { 
        type: "authentication_error", 
        message: "KEY FORMAT WRONG. Should start with sk-ant-" 
      }
    });
  }

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "anthropic-version": "2023-06-01",
        "x-api-key": KEY,
      },
      body: JSON.stringify(req.body),
    });
    const data = await response.json();
    return res.status(response.status).json(data);
  } catch (err) {
    return res.status(500).json({ 
      type: "error",
      error: { type: "fetch_error", message: err.message }
    });
  }
}
