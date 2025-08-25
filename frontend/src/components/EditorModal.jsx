import React, { useState } from "react";

export default function EditorModal({ ctl, onSave, onClose }) {
  const [obs, setObs] = useState(ctl.observations);
  const [rating, setRating] = useState(ctl.rating);
  const [rec, setRec] = useState(ctl.recommendation);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 w-full max-w-md rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">{ctl.control_name}</h2>
        <label className="block mb-1 font-semibold">Observations</label>
        <textarea
          className="w-full border border-gray-300 rounded px-2 py-1 mb-4"
          value={obs} onChange={e => setObs(e.target.value)}
        />
        <label className="block mb-1 font-semibold">Rating</label>
        <select
          className="w-full border border-gray-300 rounded px-2 py-1 mb-4"
          value={rating} onChange={e => setRating(+e.target.value)}
        >
          {[1, 2, 3, 4, 5].map(n => (
            <option key={n} value={n}>{n}</option>
          ))}
        </select>
        <label className="block mb-1 font-semibold">Recommendation</label>
        <textarea
          className="w-full border border-gray-300 rounded px-2 py-1 mb-4"
          value={rec} onChange={e => setRec(e.target.value)}
        />
        <div className="flex justify-end space-x-2">
          <button
            className="px-4 py-2 border border-gray-300 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded"
            onClick={() => onSave({ ...ctl, observations: obs, rating, recommendation: rec })}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
