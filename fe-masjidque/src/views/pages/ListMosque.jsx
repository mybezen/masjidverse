import Navbar from "../../components/Navbar";
import MasjidIcon from "../../assets/Images/image.png"; // Replace with the correct image path
import BannerIcon from "../../assets/Images/Banner.png";
import EventIcon from "../../assets/Icon/event.svg";
import LocationIcon from "../../assets/Icon/location.svg";
import ClockIcon from "../../assets/Icon/clock.png";
import MosqueIcon from "../../assets/Icon/mosque.svg";

function ListMosque() {
  return (
    <div className="min-h-screen bg-[#EDEDF9]">
      {/* Navbar */}
      <Navbar />
      {/* Header Banner */}
      <div className="justify-center flex pt-10 space-x-96">
        <div className="flex gap-3">
          <img src={MosqueIcon}></img>
          <h1 className="text-center pt-2 plus-jakarta-sans-bold">
            Daftar Masjid
          </h1>
        </div>

        <div>
          <input
            type="text"
            className="w-96 h-10 border text-center rounded-[25px] bg-[#E3E3E9]"
            placeholder="Search..."
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-screen-xl px-2 mx-auto">
        {/* Kegiatan Yang Akan Datang */}

        {/* Daftar Masjid */}
        <section className="pb-12 mt-12">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="relative overflow-hidden shadow-lg rounded-2xl"
              >
                {/* Image */}
                <img
                  src={MasjidIcon}
                  alt="Masjid"
                  className="object-cover w-[410px] h-[300px]"
                />

                {/* Gradasi & Konten */}
                <div className="absolute bottom-0 w-full p-4 bg-white bg-opacity-65 backdrop-blur-md">
                  <h4 className="text-lg font-bold text-gray-800">
                    Masjid Al Huda
                  </h4>
                  <p className="text-sm text-gray-700">
                    Jl. Kecubung V, RT 5 RW 2, Jakarta Timur 13420
                  </p>
                  <button className="mt-1 font-medium text-green-600 hover:underline">
                    Lihat Selengkapnya &gt;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default ListMosque;
