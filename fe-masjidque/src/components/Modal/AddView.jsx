/* eslint-disable react/prop-types */
import { useState } from "react";
import Modal from "./Modal";

function AddView({ open, onClose, onSubmit, fields }) {
  const [formData, setFormData] = useState(
    fields.reduce((acc, field) => {
      acc[field] = ""; // Inisialisasi semua field sebagai string kosong
      return acc;
    }, {})
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = fields.every((field) => formData[field]); // Validasi semua field
    if (isValid) {
      onSubmit(formData);
      setFormData(
        fields.reduce((acc, field) => {
          acc[field] = ""; // Reset form setelah submit
          return acc;
        }, {})
      );
    } else {
      alert("Pastikan semua input terisi dengan benar!");
    }
  };

  return (
    <Modal open={open} onClose={onClose} title="Tambah Data">
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
            type="button"
            onClick={onClose}
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

export default AddView;
