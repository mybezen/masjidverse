import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate= useNavigate;

  const handleNavigate = (path) => { 
    navigate(path)
  }


  return (
    <header className="bg-[#154431] rounded-b-3xl p-5 text-white flex items-center justify-between h-[80px]">
      <a href="/" className="ml-5 text-2xl text-white poppins-bold" >
        MasjidVerse
      </a>
      <div className="flex items-center">
        <a href="/" className="mr-10 text-xl text-white poppins-semibold">
          Home
        </a>
        <a href="/newevent" className="mr-10 text-xl text-white poppins-semibold">
          Kegiatan
        </a>
        <a href="/listmasjid" className="mr-10 text-xl text-white poppins-semibold">
          Masjid
        </a>
      </div>
    </header>
  );
}

export default Navbar;