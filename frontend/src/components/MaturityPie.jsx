import React from "react";
import { Pie } from "react-chartjs-2";

export default function MaturityPie({ data }) {
  const counts = [1, 2, 3, 4, 5].map(r => data.filter(d => d.rating === r).length);
  const chartData = {
    labels: ["1", "2", "3", "4", "5"],
    datasets: [
      {
        data: counts,
        backgroundColor: ["#e53e3e","#dd6b20","#d69e2e","#38a169","#3182ce"]
      }
    ]
  };
  return <Pie data={chartData} />;
}
