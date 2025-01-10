import Navbar from "../../components/Navbar";
import MosqueImage from "../../assets/Images/mosque.png";
import MenuIcon from "../../components/MenuIcon";
import BackIcon from "../../assets/Icon/back.svg";
import { useNavigate } from "react-router-dom";

const backPages = [
  {
    id: 1,
    title: "Kembali",
    icon: BackIcon,
    path: "/feature",
  },
];

function FeatureBoard() {
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <div>
      <Navbar />
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent z-10" />

        <h1
          className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl 
        md:text-6xl font-bold text-white z-20 poppins-bold"
        >
          Masjid Al Huda
        </h1>

        <div className="relative">
          <img
            src={MosqueImage}
            alt="Masjid"
            className="w-full h-[700px] object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10" />
        </div>

        <div className="relative z-10">
          <MenuIcon />
        </div>
      </div>
    </div>
  );
}

export default FeatureBoard;
