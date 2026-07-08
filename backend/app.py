from flask import Flask, jsonify, request
from flask_cors import CORS

from mock_ai import create_mock_care_plan

app = Flask(__name__)
CORS(app)


@app.get("/api/health")
def health():
    return jsonify({"status": "CareCompass backend is running"})


@app.post("/api/generate-care-plan")
def generate_care_plan():
    data = request.get_json(silent=True) or {}
    notes = data.get("notes", "").strip()

    if not notes:
        return jsonify({"error": "Appointment instructions are required."}), 400

    care_plan = create_mock_care_plan(notes)

    return jsonify(
        {
            "success": True,
            "carePlan": care_plan,
        }
    )


if __name__ == "__main__":
    import os

    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)