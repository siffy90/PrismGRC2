import React from "react";

export default function ControlTable({ data, onEdit }) {
  return (
    <table className="min-w-full divide-y divide-gray-200 border border-gray-300 rounded-lg">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 uppercase">Control</th>
          <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 uppercase">Observations</th>
          <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 uppercase">Rating</th>
          <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 uppercase">Recommendation</th>
          <th className="px-4 py-2"></th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {data.map((ctl, idx) => (
          <tr key={idx}>
            <td className="px-4 py-2">{ctl.control_name}</td>
            <td className="px-4 py-2">{ctl.observations}</td>
            <td className="px-4 py-2">{ctl.rating}</td>
            <td className="px-4 py-2">{ctl.recommendation}</td>
            <td className="px-4 py-2">
              <button
                className="text-blue-500 hover:underline text-sm"
                onClick={() => onEdit(ctl)}
              >
                Edit
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
