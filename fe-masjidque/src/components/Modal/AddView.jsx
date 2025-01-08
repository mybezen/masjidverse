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
    <Modal open={open} onClose={onClose} title="Tambah Data" onSubmit={handleSubmit}>
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

export default AddView;
