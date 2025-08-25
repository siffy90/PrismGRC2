import axios from "axios";
const BASE = import.meta.env.VITE_BACKEND_URL;

export const fetchAssessments = () =>
  axios.post(`${BASE}/api/assess`).then(res => res.data);

export const exportReport = data =>
  axios.post(`${BASE}/api/export-report`, data, {
    responseType: "blob"
  }).then(res => {
    const url = URL.createObjectURL(res.data);
    const a = document.createElement("a");
    a.href = url;
    a.download = "GRC_Report.docx";
    a.click();
  });
