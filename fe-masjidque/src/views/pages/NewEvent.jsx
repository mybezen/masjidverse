import Navbar from "../../components/Navbar";
import EventImage from "../../assets/Images/newevent.png";
import DateIcon from "../../assets/Icon/date.svg";
import EventIcon from "../../assets/Icon/event.svg";
import LocationIcon from "../../assets/Icon/location.svg";
import MosqueIcon from "../../assets/Icon/mosque.svg";
import TimeIcon from "../../assets/Icon/time.svg";
import CardName from "../../assets/Icon/card-name.svg";
import DescriptionIcon from "../../assets/Icon/description.svg";
import BackIcon from "../../assets/Icon/back.svg";
import { useNavigate } from "react-router-dom";

// Data Informasi Kegiatan
const eventDetails = [
  { id: 1, title: "Nama Masjid", value: "Masjid Al Huda", icon: MosqueIcon },
  {
    id: 2,
    title: "Nama Kegiatan",
    value: "Pengajian Mingguan",
    icon: EventIcon,
  },
  { id: 3, title: "Penceramah", value: "Ustadz Bahlul", icon: CardName },
  {
    id: 4,
    title: "Deskripsi",
    value:
      "Telah dilaksanakan kegiatan pengajian rutin yang diikuti oleh jamaah dari berbagai kalangan. Kegiatan ini difokuskan pada membaca Al-Quran dan memaknai ayat-ayatnya. Jamaah dengan antusias mengikuti pengajian, mendengarkan penjelasan tentang makna ayat-ayat Al-Quran yang dibacakan, serta bagaimana ayat-ayat tersebut dapat diaplikasikan dalam kehidupan sehari-hari untuk meningkatkan keimanan dan ketaqwaan.",
    icon: DescriptionIcon,
  },
  { id: 5, title: "Tanggal", value: "1 Januari 2024", icon: DateIcon },
  {
    id: 6,
    title: "Waktu",
    value: "13.00",
    icon: TimeIcon,
  },
  {
    id: 7,
    title: "Lokasi",
    value: "Jl. Kecubung V Rt. 5 Rw. 2 Jakarta Timur 13420",
    icon: LocationIcon,
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

function NewEvent() {
  const handleNavigate = useNavigate();

  const navigate = (path) => {
    handleNavigate(path);
  };

  return (
    <div>
      <Navbar />

      {/* Kontainer Gambar dan Tombol Kembali */}
      <div className="relative">
        {/* Gambar Event */}
        <img
          src={EventImage}
          alt="Masjid"
          className="w-full h-[500px] object-cover"
        />

        {/* Gradien Atas dan Bawah */}
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent z-10" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10" />

        {/* Tombol Kembali */}
        {backPages.map((back) => (
          <button
            key={back.id}
            className="absolute top-4 left-4 z-20 flex items-center space-x-2 bg-white bg-opacity-75 rounded-lg p-2 hover:bg-opacity-100 transition-all"
            onClick={() => navigate(back.path)}
          >
            <img src={back.icon} alt="Back Icon" className="w-6 h-6" />
            <p className="text-lg">{back.title}</p>
          </button>
        ))}
      </div>

      {/* Konten Detail Kegiatan */}
      <div className="bg-white rounded-lg shadow-md p-6 w-[90%] md:w-[60%] lg:w-[50%] mx-auto -mt-20 relative z-20">
        <div className="space-y-4">
          {eventDetails.map((item) => (
            <div key={item.id} className="flex items-center space-x-4">
              <img src={item.icon} alt={item.title} className="w-8 h-8" />
              <div>
                <p className="text-gray-600 text-sm">{item.title}</p>
                <h3 className="text-lg font-semibold">{item.value}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewEvent;
