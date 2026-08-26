import os
import json

from google import genai
from dotenv import load_dotenv

load_dotenv()

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)


def troubleshoot_error(error: str):

    prompt = f"""
You are an Application Support Engineer.

Analyze this application error:

{error}

Return ONLY valid JSON.

Use exactly this structure:

{{
    "is_valid": true,
    "severity": "HIGH",
    "possible_cause": "Explain the possible cause",
    "troubleshooting_steps": [
        "Step 1",
        "Step 2",
        "Step 3"
    ],
    "recommended_action": "Explain what should be done"
}}
"""

    response = client.models.generate_content(
        model="gemini-3.6-flash",
        contents=prompt
    )

    result = response.text

    return json.loads(result)