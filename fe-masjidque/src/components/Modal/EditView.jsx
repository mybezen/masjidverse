/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Modal from "./Modal";

function EditView({ open, onClose, onSubmit, fields, activity }) {
  const [formData, setFormData] = useState(
    fields.reduce((acc, field) => {
      acc[field] = ""; // Inisialisasi semua field sebagai string kosong
      return acc;
    }, {})
  );

  useEffect(() => {
    if (activity) {
      setFormData(activity); // Isi data awal dengan activity yang diterima
    }
  }, [activity]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = fields.every((field) => formData[field]); // Validasi semua field
    if (isValid) {
      onSubmit(formData);
    } else {
      alert("Pastikan semua input terisi dengan benar!");
    }
  };

  return (
    <Modal open={open} onClose={onClose} title="Edit Data">
      <form className="space-y-4" onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <input
            key={index}
            type="text"
            name={field}
            placeholder={field}
            value={formData[field]}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        ))}
        {/* Footer */}
        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            type="button"
            className="px-4 py-2 text-sm text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default EditView;
