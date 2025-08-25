import os
import openai

openai.api_key = os.getenv("OPENAI_API_KEY")

def analyze_control(interview_q, response):
    prompt = (
        f"Interview Questions:\n{interview_q}\n\n"
        f"Response:\n{response}\n\n"
        "1) Summarize key observations/gaps.\n"
        "2) Assign maturity rating (1–5) based on CMMI model.\n"
        "3) Provide one best-practice recommendation.\n"
        "Return JSON with keys: observations, rating, recommendation."
    )
    res = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[{"role":"user","content":prompt}],
        temperature=0.2
    )
    return res.choices[0].message.content
