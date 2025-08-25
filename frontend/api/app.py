import os
import pandas as pd
from flask import Flask, request, jsonify, send_file
from openai_client import analyze_control
from models import ControlAssessment
from docx import Document

app = Flask(__name__)

DATA_FILE = "Security-Health-Check-Controls-Assessment.xlsx"

def load_controls():
    df = pd.read_excel(DATA_FILE, sheet_name="Controls Sheet")
    controls = []
    for _, row in df.iterrows():
        controls.append(ControlAssessment(
            domain=row["Domain"],
            control_no=row["Control No."],
            control_name=row["Control"],
            interview_questions=row["Interview Questions"],
            response=row["Response"]
        ))
    return controls

@app.route("/api/assess", methods=["POST"])
def assess_controls():
    controls = load_controls()
    results = []
    for ctl in controls:
        analysis = analyze_control(ctl.interview_questions, ctl.response)
        # Expect JSON string
        data = eval(analysis)  # caution: eval can be unsafe; secure in actual deployment
        ctl.observations = data["observations"]
        ctl.rating = int(data["rating"])
        ctl.recommendation = data["recommendation"]
        results.append(asdict(ctl))
    return jsonify(results)

@app.route("/api/export-report", methods=["POST"])
def export_report():
    assessments = request.json
    doc = Document("templates/report_template.docx")
    table = doc.add_table(rows=1, cols=6)
    hdr = table.rows[0].cells
    hdr[0].text = "Domain"
    hdr[1].text = "Control No."
    hdr[2].text = "Control"
    hdr[3].text = "Observations"
    hdr[4].text = "Rating"
    hdr[5].text = "Recommendation"
    for a in assessments:
        row = table.add_row().cells
        row[0].text = a["domain"]
        row[1].text = a["control_no"]
        row[2].text = a["control_name"]
        row[3].text = a["observations"]
        row[4].text = str(a["rating"])
        row[5].text = a["recommendation"]
    out_path = "report.docx"
    doc.save(out_path)
    return send_file(out_path, as_attachment=True)

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
