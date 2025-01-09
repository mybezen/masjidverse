import Navbar from "../../components/Navbar";
import DateIcon from "../../assets/Icon/date.svg";
import LocationIcon from "../../assets/Icon/location.svg";
import ClockIcon from "../../assets/Icon/clock.png";

function UpComingEvent() {
  return (
    <div className="min-h-screen bg-[#EDEDF9]">
      <Navbar />
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-between items-center pt-10">
          <div className="flex gap-3 items-center">
            <img src={DateIcon} alt="Mosque Icon" />
            <h1 className="text-center pt-2 plus-jakarta-sans-bold">
              Kegiatan Yang Akan Datang
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

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 pt-10 gap-y-10">
          {[1, 2, 3, 4, 5, 6].map((item) => (
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
                    <img src={DateIcon} className="w-[30px] fill-black"></img>
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
      </div>
    </div>
  );
}

export default UpComingEvent;
