from dataclasses import dataclass, asdict

@dataclass
class ControlAssessment:
    domain: str
    control_no: str
    control_name: str
    interview_questions: str
    response: str
    observations: str = ""
    rating: int = 1
    recommendation: str = ""
