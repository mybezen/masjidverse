import React, { useState } from "react";
import AddPhoto from "../../../assets/Images/blank-photo.png";
import MasjidIcon from "../../../assets/Icon/mosque.svg";
import EventIcon from "../../../assets/Icon/event.svg";
import NameCard from "../../../assets/Icon/card-name.svg";
import DescriptCard from "../../../assets/Icon/description.svg";
import DateIcon from "../../../assets/Icon/date.svg";
import TimeIcon from "../../../assets/Icon/time.svg";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function AddActivity() {
  const [namaMasjid, setNamaMasjid] = useState("");
  const [namaKegiatan, setNamaKegiatan] = useState("");
  const [lokasi, setLokasi] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [waktuMulai, setWaktuMulai] = useState("");
  const [waktuSelesai, setWaktuSelesai] = useState("");
  const [foto, setFoto] = useState(AddPhoto); 

  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setFoto(reader.result); 
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (!namaMasjid || !namaKegiatan || !lokasi || !deskripsi || !tanggal || !waktuMulai || !waktuSelesai) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Harap lengkapi semua bidang sebelum menyimpan!",
      });
      return;
    }

    const newActivity = {
      namaMasjid,
      namaKegiatan,
      lokasi,
      deskripsi,
      tanggal,
      waktuMulai,
      waktuSelesai,
      foto,
    };

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Kegiatan Berhasil Ditambahkan",
      showConfirmButton: false,
      timer: 1500,
    });

    navigate("/admin/activity", { state: { newActivity } });
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-[900px] max-w-xl p-6 bg-white rounded-lg shadow-md">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center justify-center w-20 h-20 border-2 border-gray-300 border-dashed rounded-lg">
            <img src={foto} alt="Add Photo" className="object-cover w-20 h-20" />
          </div>
          <input
            type="file"
            className="hidden"
            id="upload-photo"
            accept="image/*"
            onChange={handleImageChange}
          />
          <label
            htmlFor="upload-photo"
            className="px-4 py-2 text-white bg-blue-500 rounded-lg cursor-pointer hover:bg-blue-600"
          >
            Tambah Foto
          </label>
        </div>

        {/* Form Inputs */}
        <div className="mt-6 space-y-4">
          {/* Input Fields */}
          {[
            { label: "Nama Masjid", icon: MasjidIcon, value: namaMasjid, onChange: setNamaMasjid, placeholder: "Masukkan Nama Masjid" },
            { label: "Nama Kegiatan", icon: EventIcon, value: namaKegiatan, onChange: setNamaKegiatan, placeholder: "Masukkan Nama Kegiatan" },
            { label: "Lokasi", icon: NameCard, value: lokasi, onChange: setLokasi, placeholder: "Masukkan alamat pelaksanaan" },
            { label: "Deskripsi", icon: DescriptCard, value: deskripsi, onChange: setDeskripsi, placeholder: "Deskripsi Kegiatan" },
          ].map((field, idx) => (
            <div key={idx}>
              <label className="flex items-center gap-2">
                <img src={field.icon} className="w-[35px] h-[40px]" />
                {field.label}
              </label>
              <div className="ml-10">
                <input
                  type="text"
                  placeholder={field.placeholder}
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                  className="w-full p-2 border-0 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
          ))}

          {/* Input Tanggal */}
          <div>
            <label className="flex items-center gap-2">
              <img src={DateIcon} className="w-[35px] h-[40px]" />
              Tanggal
            </label>
            <div className="ml-10">
              <input
                type="date"
                value={tanggal}
                onChange={(e) => setTanggal(e.target.value)}
                className="w-full p-2 border-0 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Input Waktu */}
          <div>
            <label className="flex items-center gap-2">
              <img src={TimeIcon} className="w-[35px] h-[40px]" />
              Waktu
            </label>
            <div className="flex gap-4 ml-10">
              <input
                type="time"
                value={waktuMulai}
                onChange={(e) => setWaktuMulai(e.target.value)}
                className="w-full p-2 border-0 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
              />
              <span className="self-center">sampai</span>
              <input
                type="time"
                value={waktuSelesai}
                onChange={(e) => setWaktuSelesai(e.target.value)}
                className="w-full p-2 border-0 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Tombol */}
        <div className="flex items-center justify-center gap-2">
          <button
            className="mt-6 w-full px-4 py-2 bg-gradient-to-r from-[#070707] via-[#154431] to-[#29845F] text-white rounded-lg hover:bg-green-600"
            onClick={() => handleNavigate("/admin/activity")}
          >
            Cancel
          </button>
          <button
            className="mt-6 w-full px-4 py-2 bg-gradient-to-r from-[#070707] via-[#154431] to-[#29845F] text-white rounded-lg hover:bg-green-600"
            onClick={handleSubmit}
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddActivity;
