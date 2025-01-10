import Navbar from "../../components/Navbar";
import MasjidIcon from "../../assets/Images/image.png"; // Replace with the correct image path
import BannerIcon from "../../assets/Images/Banner.png";
import EventIcon from "../../assets/Icon/event.svg";
import LocationIcon from "../../assets/Icon/location.svg";
import ClockIcon from "../../assets/Icon/clock.png";
import MosqueIcon from "../../assets/Icon/mosque.svg";
import { useNavigate } from "react-router-dom";

function ListMosque() {
  const navigate = useNavigate()
  const handleNavigate = (path) => {
    navigate(path)
  }
  return (
    <div className="min-h-screen bg-[#EDEDF9]">
      <Navbar />
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-between items-center pt-10">
          <div className="flex gap-3 items-center">
            <img src={MosqueIcon} alt="Mosque Icon" />
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

        <div className="mt-12">
          <section className="pb-12">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="relative overflow-hidden shadow-lg rounded-2xl"
                >
                  <img
                    src={MasjidIcon}
                    alt="Masjid"
                    className="object-cover w-[410px] h-[300px]"
                  />

                  <div className="absolute bottom-0 w-full p-4 bg-white bg-opacity-65 backdrop-blur-md">
                    <h4 className="text-lg font-bold text-gray-800">
                      Masjid Al Huda
                    </h4>
                    <p className="text-sm text-gray-700">
                      Jl. Kecubung V, RT 5 RW 2, Jakarta Timur 13420
                    </p>
                    <button className="mt-1 font-medium text-green-600 hover:underline"
                    onClick={() => handleNavigate("/feature")}>
                      Lihat Selengkapnya &gt;
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ListMosque;
