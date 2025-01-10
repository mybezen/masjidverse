/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Modal from "./Modal";
import Swal from "sweetalert2"; // Import SweetAlert2

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
    const { name, value, files } = e.target;

    if (name === "foto" && files && files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData({ ...formData, foto: reader.result });
      };
      reader.readAsDataURL(files[0]);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = fields.every((field) => formData[field]); // Validasi semua field

    if (isValid) {
      onSubmit(formData); // Kirim data ke parent component
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Sudah Terupdate",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Pastikan semua input terisi dengan benar!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <Modal open={open} onClose={onClose} title="Edit Data">
      <form className="space-y-4" onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <div key={index}>
            {field === "foto" ? (
              <>
                <label className="block mb-1 text-sm font-semibold">
                  {field}
                </label>
                <input
                  type="file"
                  name={field}
                  accept="image/*"
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </>
            ) : (
              <input
                type="text"
                name={field}
                placeholder={field}
                value={formData[field]}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            )}
          </div>
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
