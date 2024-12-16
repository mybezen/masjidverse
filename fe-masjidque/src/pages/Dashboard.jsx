import Navbar from "../components/Navbar";
import MasjidIcon from "../assets/Images/image.png"; // Replace with the correct image path
import BannerIcon from "../assets/Banner.png";
import EventIcon from "../assets/Icon/event.svg";
import LocationIcon from "../assets/Icon/location.svg";
import ClockIcon from "../assets/Icon/clock.png";

function Dashboard() {
  return (
    <div className="min-h-screen bg-[#EDEDF9]">
      {/* Navbar */}
      <Navbar />
      {/* Header Banner */}
      <div className="flex justify-center pt-8 pb-4">
        <div className="relative w-full max-w-screen-xl">
          <img
            src={BannerIcon}
            alt="Banner"
            className="rounded-2xl object-contain w-full h-[300px]"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="mb-4 text-3xl poppins-semibold">
                Anda ingin mendaftarkan Masjid Anda?
                <br></br>
                <h2>Klik Tombol dibawah ini !</h2>
              </h2>
              <button className="px-6 py-2 font-medium text-black bg-white rounded-lg w-[150px] h-[50px] hover:bg-gray-200">
                Daftar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-screen-xl px-2 mx-auto">
        {/* Kegiatan Yang Akan Datang */}
        <section className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex flex-row items-center justify-center">
              <img src={EventIcon}></img>
              <h3 className="ml-[12px] text-xl font-bold text-gray-700">
                Kegiatan Yang Akan Datang
              </h3>
            </div>
            <button className="text-black poppins-medium hover:underline">
              View All
            </button>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="relative flex items-center px-[45px] py-[25px] bg-white border shadow-md rounded-3xl"
              >
                {/* Garis Hijau Kiri */}
                <div className="absolute top-0 left-0 w-[25px] h-full bg-[#154431] rounded-l-3xl"></div>

                {/* Konten */}
                <div className="pl-4">
                  <div className="flex items-center mb-1 ">
                    <span className="inline-block mr-2 text-gray-700">
                      <img
                        src={EventIcon}
                        className="w-[30px] fill-black"
                      ></img>
                    </span>
                    <h3 className="text-lg text-gray-700 poppins-bold">
                      Maulid Nabi Muhammad
                    </h3>
                  </div>
                  <p className="text-sm text-gray-500 poppins-bold">
                    12 Rabiul Awal 1445H | 16 September 2024
                  </p>
                  <p className="flex items-center text-sm text-gray-500 poppins-bold">
                    <img src={LocationIcon} className="mr-1 w-15"></img>
                    Masjid Al Fatihah
                  </p>
                  <p className="flex items-center text-sm text-gray-500 poppins-bold">
                    <img src={ClockIcon} className="mr-1 w-15"></img>
                    19.00 - Selesai
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Daftar Masjid */}
        <section className="pb-12 mt-12">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-700">Daftar Masjid</h3>
            <button className="font-medium text-green-600 hover:underline">
              View All
            </button>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
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

export default Dashboard;
