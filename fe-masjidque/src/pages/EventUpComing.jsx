import Navbar from "../components/Navbar";
import MosqueImage from "../assets/Images/mosque.png";
import MenuIcon from "../components/MenuIcon";
import DateIcon from "../assets/Icon/date.svg";
import EventIcon from "../assets/Icon/event.svg";
import LocationIcon from "../assets/Icon/location.svg";
import MosqueIcon from "../assets/Icon/mosque.svg";
import TimeIcon from "../assets/Icon/time.svg";
import CardName from "../assets/Icon/card-name.svg";

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
  { id: 4, title: "Tanggal", value: "1 Januari 2024", icon: DateIcon },
  { id: 5, title: "Waktu", value: "13.00", icon: TimeIcon },
  {
    id: 6,
    title: "Lokasi",
    value: "Jl. Kecubung V Rt. 5 Rw. 2 Jakarta Timur 13420",
    icon: LocationIcon,
  },
];

function EventUpcoming() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Gambar Masjid */}
      <div className="relative">
        <img
          src={MosqueImage}
          alt="Masjid"
          className="w-full h-[700px] object-cover"
        />
        {/* Gradien di bagian bawah gambar */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10" />
      </div>

      {/* Kartu Informasi */}
      <div className="bg-white rounded-lg shadow-md p-6 w-[90%] md:w-[60%] lg:w-[50%] mx-auto -mt-20 relative z-20">
        <div className="space-y-4">
          {/* Mapping Data */}
          {eventDetails.map((item) => (
            <div key={item.id} className="flex items-center space-x-4">
              {/* Gunakan img untuk menampilkan ikon */}
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

export default EventUpcoming;
