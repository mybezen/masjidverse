import Navbar from "../../components/Navbar";
import MosqueImage from "../../assets/Images/mosque.png";
import ReportIcon from "../../assets/Icon/report.svg";

function MosqueProfile() {
  const locationDetails = [
    { label: "Provinsi", value: "DKI Jakarta" },
    { label: "Kota", value: "Jakarta Timur" },
    { label: "Kecamatan", value: "Jatinegara" },
    { label: "Alamat", value: "Jl. Kecubung V RT. 5 Rw. 2 No.40" },
    { label: "", value: "Kec. Jatinegara, Jakarta Timur" },
    { label: "Kode Pos", value: "13420" },
  ];

  const serviceInfo = [
    { label: "No Telepon", value: "019209130" },
    { label: "Email", value: "masjidalhuda@gmail.com" },
    { label: "Instagram", value: "masjid_alhuda" },
    { label: "Facebook", value: "Masjid.Alhuda" },
    { label: "Nama Yayasan", value: "Yayasan Alhuda" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent z-10" />

        <h1
          className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl 
            md:text-6xl font-bold text-white z-20"
        >
          Masjid Al Huda
        </h1>

        <div className="relative">
          <img
            src={MosqueImage}
            alt="Masjid"
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10" />
        </div>

        <img
          src={ReportIcon}
          className="absolute top-4 right-4  rounded-full w-20 h-20 flex items-center justify-center"
        ></img>
      </div>

      <div className="px-6">
        <div className="pl-10 mt-5 mb-8">
          <h3 className="font-bold mb-2 text-4xl">Deskripsi</h3>
          <p className="text-xl">Masjid umum</p>
        </div>

        <div className="pl-10">
          <h3 className="font-bold text-4xl mb-4">Lokasi</h3>

          <div className="flex justify-between items-start gap-0">
            <div className="space-y-1">
              {locationDetails.map((item, index) => (
                <div key={index} className="flex text-xl">
                  <span className="w-28">{item.label}</span>
                  {item.label && <span className="px-1">:</span>}
                  <span className={item.label ? "" : "pl-28"}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            <img
              src={MosqueImage}
              alt="Mosque Thumbnail"
              className="w-4/12 h-20 object-cover rounded-lg mr-52"
            />
          </div>
        </div>

        <div className="pl-10">
          <hr className="border-t-2 border-gray-300 my-4 w-[50%]" />
          <h3 className="font-bold text-4xl mb-4">Informasi Layanan</h3>
        </div>
        <div className="space-y-1 grid grid-cols-2 pl-10">
          {serviceInfo.map((item, index) => (
            <div key={index} className="flex text-xl">
              <span className="w-28">{item.label}</span>
              {item.label && <span className="px-1">:</span>}
              <span className={item.label ? "" : "pl-28"}>{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MosqueProfile;
