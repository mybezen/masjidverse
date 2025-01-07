import { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import { FaBell, FaSearch } from "react-icons/fa"; // Tambahkan package react-icons jika belum ada
import AddView from "../../../components/Modal/AddView";
import PlusIcon from "../../../assets/Icon/plus.svg";

function ActivityManagement() {
  const [open, setOpen] = useState(false);
  const [activities, setActivities] = useState([
    {
      id: 1,
      tanggal: "20/10/2024",
      namaKegiatan: "Pengajian",
      foto: "Img1",
      deskripsi: "Kegiatan 1",
      lokal: "Masjid Al Huda",
    },
  ]);

  return (
    <div className="flex h-screen bg-white plus-jakarta-sans-bold">
      {/* Sidebar */}
      <Sidebar />
      <div className="relative flex-1 p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          {/* Judul */}
          <h1 className="text-2xl font-bold">Kegiatan</h1>

          {/* Notifikasi, Search Bar, dan Role */}
          <div className="flex items-center space-x-4">
            {/* Ikon Notifikasi */}
            <button className="relative">
              <FaBell className="text-gray-500 hover:text-gray-700" size={20} />
              {/* Badge notifikasi */}
              <span className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 text-xs text-white bg-red-500 rounded-full">
                3
              </span>
            </button>

            {/* Kolom Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Cari kegiatan..."
                className="py-2 pl-10 pr-4 text-sm bg-gray-100 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <FaSearch className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
            </div>

            {/* Role */}
            <span className="px-3 py-1 text-sm bg-gray-200 rounded-full">
              Role: Admin
            </span>
          </div>
        </div>

        {/* Tabel */}
        <table className="min-w-full mt-4 bg-white rounded shadow">
          <thead>
            <tr className="text-left bg-gray-200">
              <th className="p-4 rounded-tl-lg">Id</th>
              <th className="p-4">Tanggal</th>
              <th className="p-4">Nama Kegiatan</th>
              <th className="p-4">Foto</th>
              <th className="p-4">Deskripsi</th>
              <th className="p-4">Lokal</th>
              <th className="p-4 rounded-tr-lg">Action</th>
            </tr>
          </thead>
          <tbody>
            {activities.length === 0 ? (
              <tr>
                <td
                  colSpan="7"
                  className="p-4 italic text-center text-gray-500"
                >
                  Tidak ada data kegiatan.
                </td>
              </tr>
            ) : (
              activities.map((activity) => (
                <tr key={activity.id} className="border-b">
                  <td className="p-4">{activity.id}</td>
                  <td className="p-4">{activity.tanggal}</td>
                  <td className="p-4">{activity.namaKegiatan}</td>
                  <td className="p-4">{activity.foto}</td>
                  <td className="p-4">{activity.deskripsi}</td>
                  <td className="p-4">{activity.lokal}</td>
                  <td className="flex p-4 space-x-2">
                    <button className="px-2 py-1 text-white bg-blue-500 rounded hover:bg-blue-600">
                      Edit
                    </button>
                    <button className="px-2 py-1 text-white bg-red-500 rounded hover:bg-red-600">
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {/* Tombol Tambah Kegiatan di kanan bawah */}
        <button
          className="fixed p-4 text-white bg-green-600 rounded-full shadow-lg bottom-6 right-6 hover:bg-green-700 focus:outline-none"
          onClick={() => setOpen(true)} // Tambahkan fungsi sesuai kebutuhan
        >
          <PlusIcon /> Add
        </button>
        <AddView open={open} onClose={() => setOpen(false)}></AddView>
      </div>
    </div>
  );
}

export default ActivityManagement;
