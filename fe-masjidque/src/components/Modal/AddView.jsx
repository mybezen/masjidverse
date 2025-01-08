/* eslint-disable react/prop-types */
import { useState } from "react";
import Modal from "./Modal";

function AddView({ open, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    tanggal: "",
    namaKegiatan: "",
    foto: "",
    deskripsi: "",
    lokal: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    onSubmit(formData);
    setFormData({ tanggal: "", namaKegiatan: "", foto: "", deskripsi: "", lokal: "" });
  };

  return (
    <Modal open={open} onClose={onClose} title="Tambah Kegiatan" onSubmit={handleSubmit}>
      <form className="space-y-4">
        <input
          type="text"
          name="tanggal"
          placeholder="Tanggal"
          value={formData.tanggal}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="namaKegiatan"
          placeholder="Nama Kegiatan"
          value={formData.namaKegiatan}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="foto"
          placeholder="Foto"
          value={formData.foto}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="deskripsi"
          placeholder="Deskripsi"
          value={formData.deskripsi}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="lokal"
          placeholder="Lokal"
          value={formData.lokal}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </form>
    </Modal>
  );
}

export default AddView;