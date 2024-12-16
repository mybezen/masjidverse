function Navbar() {
  return (
    <header className="bg-[#154431] rounded-b-3xl p-5 text-white flex items-center justify-between">
      <a href="#" className="ml-5 text-xl text-white poppins-bold">
        MasjidVerse
      </a>
      <div className="flex items-center">
        <a href="#" className="mr-10 text-lg text-white poppins-semibold">
          Home
        </a>
        <a href="#" className="mr-10 text-lg text-white poppins-semibold">
          Kegiatan
        </a>
        <a href="#" className="mr-10 text-lg text-white poppins-semibold">
          Masjid
        </a>
      </div>
    </header>
  );
}

export default Navbar;
