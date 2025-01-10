import React, { useState } from "react";
import AddPhoto from "../../../assets/Images/blank-photo.png";
import MasjidIcon from "../../../assets/Icon/mosque.svg";
import EventIcon from "../../../assets/Icon/event.svg";
import NameCard from "../../../assets/Icon/card-name.svg";
import DescriptCard from "../../../assets/Icon/description.svg";
import DateIcon from "../../../assets/Icon/date.svg";
import TimeIcon from "../../../assets/Icon/time.svg";
import Swal from "sweetalert2";

function AddActivity() {
  // State untuk setiap input
  const [namaMasjid, setNamaMasjid] = useState("");
  const [namaKegiatan, setNamaKegiatan] = useState("");
  const [penceramah, setPenceramah] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [waktuMulai, setWaktuMulai] = useState("");
  const [waktuSelesai, setWaktuSelesai] = useState("");

  const handleSubmit = () => {
    // Tampilkan alert
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Sudah Terupdate",
      showConfirmButton: false,
      timer: 1500,
    });

    setNamaMasjid("");
    setNamaKegiatan("");
    setPenceramah("");
    setDeskripsi("");
    setTanggal("");
    setWaktuMulai("");
    setWaktuSelesai("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-[900px] max-w-xl p-6 bg-white rounded-lg shadow-md">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-20 h-20 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
            <img src={AddPhoto} alt="Add Photo" className="w-10 h-10" />
          </div>
          <input type="file" className="hidden" id="upload-photo" />
          <label
            htmlFor="upload-photo"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600"
          >
            Tambah Foto
          </label>
        </div>

        <div className="mt-6 space-y-4">
          {/* Input Nama Masjid */}
          <div className="">
            <label htmlFor="nama-masjid" className="flex items-center gap-2">
              <img src={MasjidIcon} className="w-[35px] h-[40px]" />
              Nama Masjid
            </label>
            <div className="ml-10">
              <input
                type="text"
                id="nama-masjid"
                placeholder="Masukkan Nama Masjid"
                value={namaMasjid}
                onChange={(e) => setNamaMasjid(e.target.value)}
                className="w-full p-2 border-0 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Input Nama Kegiatan */}
          <div className="">
            <label htmlFor="nama-kegiatan" className="flex items-center gap-2">
              <img src={EventIcon} className="w-[30px] h-[30px]" />
              Nama Kegiatan
            </label>
            <div className="ml-10">
              <input
                type="text"
                id="nama-kegiatan"
                placeholder="Masukkan Nama Kegiatan"
                value={namaKegiatan}
                onChange={(e) => setNamaKegiatan(e.target.value)}
                className="w-full p-2 border-0 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Input Penceramah */}
          <div className="">
            <label htmlFor="penceramah" className="flex items-center gap-2">
              <img src={NameCard} className="w-[35px] h-[40px]" />
              Penceramah
            </label>
            <div className="ml-10">
              <input
                type="text"
                id="penceramah"
                placeholder="Masukkan Nama Penceramah"
                value={penceramah}
                onChange={(e) => setPenceramah(e.target.value)}
                className="w-full p-2 border-0 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Input Deskripsi */}
          <div className="">
            <label htmlFor="deskripsi" className="flex items-center gap-2">
              <img src={DescriptCard} className="w-[35px] h-[40px]" />
              Deskripsi
            </label>
            <div className="ml-10">
              <input
                type="text"
                id="deskripsi"
                placeholder="Deskripsi Kegiatan"
                value={deskripsi}
                onChange={(e) => setDeskripsi(e.target.value)}
                className="w-full p-2 border-0 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Input Tanggal */}
          <div className="">
            <label htmlFor="tanggal" className="flex items-center gap-2">
              <img src={DateIcon} className="w-[35px] h-[40px]" />
              Tanggal
            </label>
            <div className="ml-10">
              <input
                type="date"
                id="tanggal"
                value={tanggal}
                onChange={(e) => setTanggal(e.target.value)}
                className="w-full p-2 border-0 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Input Waktu */}
          <div className="">
            <label htmlFor="waktu-mulai" className="flex items-center gap-2">
              <img src={TimeIcon} className="w-[35px] h-[40px]" />
              Waktu
            </label>
            <div className="ml-10 flex gap-4">
              <input
                type="time"
                id="waktu-mulai"
                value={waktuMulai}
                onChange={(e) => setWaktuMulai(e.target.value)}
                className="w-full p-2 border-0 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
              />
              <span className="self-center">sampai</span>
              <input
                type="time"
                id="waktu-selesai"
                value={waktuSelesai}
                onChange={(e) => setWaktuSelesai(e.target.value)}
                className="w-full p-2 border-0 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Tombol Simpan */}
        <button
          className="mt-6 w-full px-4 py-2 bg-gradient-to-r from-[#070707] via-[#154431] to-[#29845F] text-white rounded-lg hover:bg-green-600"
          onClick={handleSubmit}
        >
          Simpan
        </button>
      </div>
    </div>
  );
}

export default AddActivity;
