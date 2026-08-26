// Point this at your backend route that calls Gemini and returns JSON shaped like:
// { severity: "HIGH" | "MEDIUM" | "LOW", cause: string, steps: string[], action: string }
const API_URL = import.meta.env.VITE_API_URL || "https://ai-application-troubleshooting-assistant.onrender.com";

export async function analyzeError(errorText) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ error: errorText }),
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(`Server responded ${res.status}`);
  }

  const result = data.result || data.analysis || data.response || data;

  return {
    severity: result.severity,
    cause: result.cause || result.possible_cause,
    steps: result.steps || result.troubleshooting_steps || [],
    action: result.action || result.recommended_action,
  };
}

export { API_URL };
