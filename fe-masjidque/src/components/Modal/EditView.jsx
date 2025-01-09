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
    <Modal open={open} onClose={onClose} title="Edit Data" onSubmit={handleSubmit}>
      <form className="space-y-4">
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
      </form>
    </Modal>
  );
}

export default EditView;
