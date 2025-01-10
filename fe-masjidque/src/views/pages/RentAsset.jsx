import { useState } from "react";
import Navbar from "../../components/Navbar";
import RentIcon from "../../assets/Icon/rent.svg";
import KursiIcon from "../../assets/Icon/kursi.svg";
import MejaICon from "../../assets/Icon/meja.svg";
import KarpetIcon from "../../assets/Icon/karpet.svg";
import SpeakerIcon from "../../assets/Icon/speaker.svg";
import MicIcon from "../../assets/Icon/mic.svg";
import BackIcon from "../../assets/Icon/back.svg";
import { useNavigate } from "react-router-dom";

function RentAsset() {
  const ListItem = [
    {
      id: 1,
      title: "Kursi",
      value: "Tersedia 100",
      icon: KursiIcon,
    },
    {
      id: 2,
      title: "Meja",
      value: "Tersedia 100",
      icon: MejaICon,
    },
    {
      id: 3,
      title: "Karpet",
      value: "Tersedia 100",
      icon: KarpetIcon,
    },
    {
      id: 4,
      title: "Speaker",
      value: "Tersedia 100",
      icon: SpeakerIcon,
    },
    {
      id: 5,
      title: "Mic",
      value: "Tersedia 100",
      icon: MicIcon,
    },
  ];

  const backPages = [
    {
      id: 1,
      title: "Kembali",
      icon: BackIcon,
      path: "/feature",
    },
  ];

  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleNavigate = useNavigate();

  const navigate = (path) => {
    handleNavigate(path);
  };

  return (
    <div>
      <Navbar />

      <div className="flex flex-col items-center justify-center pt-10">
        {backPages.map((back) => (
          <button
            key={back.id}
            className="w-[80%] mb-10"
            onClick={() => handleNavigate("/assetmasjid")}
          >
            <div className="flex items-center">
              <img src={back.icon} className="w-10" />
              <p className="text-lg">{back.title}</p>
            </div>
          </button>
        ))}
        <div className="w-[80%]">
          <div className="flex items-center gap-4 mb-6">
            <img src={RentIcon} className="w-[35px] h-[35px]" alt="Rent Icon" />
            <p className="text-[22px] font-semibold">Peminjaman Aset</p>
          </div>

          <div className="grid grid-cols-5 gap-6 mb-10">
            {ListItem.map((data) => (
              <button
                key={data.id}
                onClick={() => handleItemClick(data)}
                className={`flex flex-col items-center justify-center p-2 bg-gray-100 rounded-md shadow-md hover:shadow-lg transition-shadow w-[234.92px] h-[177px] ${
                  selectedItem?.id === data.id ? "ring-2 ring-blue-500" : ""
                }`}
              >
                <img
                  src={data.icon}
                  alt={data.title}
                  className="w-[50px] h-[50px]"
                />
                <p className="text-[20px] font-medium text-center">
                  {data.title}
                </p>
                <span className="text-gray-500 text-[15px] -translate-y-1">
                  {data.value}
                </span>
              </button>
            ))}
          </div>
        </div>

        {selectedItem && (
          <div className="w-[80%] bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">
              Formulir Peminjaman Aset ({selectedItem.title})
            </h2>
            <form>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[15px] font-medium mb-2 "
                  >
                    Nama Lengkap:
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full border border-gray-300 rounded-md p-2 pt-2"
                    placeholder="Masukkan nama lengkap"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-[15px] font-medium mb-2"
                  >
                    Nomor Telepon:
                  </label>
                  <input
                    type="text"
                    id="phone"
                    className="w-full border border-gray-300 rounded-md p-2"
                    placeholder="Masukkan nomor telepon"
                  />
                </div>
                <div>
                  <label
                    htmlFor="item"
                    className="block text-[15px] font-medium mb-2"
                  >
                    Barang Yang Dipinjam:
                  </label>
                  <input
                    type="text"
                    id="item"
                    value={selectedItem.title}
                    readOnly
                    className="w-full border border-gray-300 rounded-md p-2 bg-gray-100"
                  />
                </div>
                <div>
                  <label
                    htmlFor="quantity"
                    className="block text-[15px] font-medium mb-2 "
                  >
                    Jumlah:
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    className="w-full border border-gray-300 rounded-md p-2"
                    placeholder="Masukkan jumlah barang"
                  />
                </div>
              </div>

              <div className="mb-4">
                <p className="block text-sm font-medium mb-2">
                  Waktu Peminjaman:
                </p>
                <div className="grid grid-cols-3 items-center gap-4">
                  <div>
                    <label htmlFor="start-date" className="block text-sm">
                      Mulai:
                    </label>
                    <input
                      type="date"
                      id="start-date"
                      className="w-full border border-gray-300 rounded-md p-2"
                    />
                  </div>
                  <div className="text-center">—</div>
                  <div>
                    <label htmlFor="end-date" className="block text-sm">
                      Sampai:
                    </label>
                    <input
                      type="date"
                      id="end-date"
                      className="w-full border border-gray-300 rounded-md p-2"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-2 bg-green-600 text-white font-medium rounded-md hover:bg-green-700"
                >
                  Kirim
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default RentAsset;
