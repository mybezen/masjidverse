import { Typography, Card, CardContent } from "@mui/joy";
import MasjidIcon from "../../assets/Images/image.png"; 
import BackIcon from "../../assets/Icon/back.svg"
import { useState } from "react";


function ProfileView() {
  const handleNavigate = useState();
  
  const navigate = (path) => {
    handleNavigate(path);
  }
  return (
    <div className="flex h-screen bg-white">
      {/* Main Content */}
      <main className="flex-1">
        {/* Header */}
        <header className="bg-[rgb(60,85,45)] rounded-b-3xl p-5 text-white flex items-center justify-start">
          <Typography color="white" level="h1" fontSize="xl">
            MasjidVerse
          </Typography>
        </header>

        <div className="p-8">
          {/* Profile Section with Image, Description, and Map */}
          <div className="flex flex-wrap gap-8 md:flex-nowrap">
            {/* Mosque Image */}
            <div className="flex justify-center w-full mb-4 md:w-1/3">
              <img
                src={MasjidIcon}
                alt="Masjid Icon"
                className="object-cover rounded-lg w-72 h-72"
              />
            </div>

            {/* Description Section */}
            <div className="w-full md:w-1/3">
              <Typography className="mb-2 text-lg font-semibold text-gray-700">
                Masjid Amirkhan
              </Typography>
              <Typography className="mb-2 text-gray-700">
                Jl. Keacungiv B. RT 5 Rw. 2 Jakarta Timur
              </Typography>
              <Typography className="mb-1 text-gray-700">
                <span className="font-semibold">Kecamatan:</span> Jatinegara
              </Typography>
              <Typography className="mb-1 text-gray-700">
                <span className="font-semibold">Kode Pos:</span> 13420
              </Typography>
              <Typography className="mb-1 text-gray-700">
                <span className="font-semibold">Kota:</span> Jakarta Timur
              </Typography>
              <Typography className="mb-1 text-gray-700">
                <span className="font-semibold">Provinsi:</span> DKI Jakarta
              </Typography>
              <Typography className="mb-1 text-gray-700">
                <span className="font-semibold">No. Telepon:</span> 081212121212
              </Typography>
            </div>

            {/* Map Section */}
            <div className="w-full md:w-1/3">
              <div className="w-full overflow-hidden bg-gray-200 rounded-lg h-72">
                {/* Placeholder for the map; replace with actual map component */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15865.216228727168!2d106.86165018715822!3d-6.223580100000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3650715514f%3A0x17b84f4bd55d1f87!2sMasjid%20Al-Falah%2C%20Bassura%20City!5e0!3m2!1sid!2sid!4v1731478663051!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: "0" }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Masjid Location"
                />
              </div>
            </div>
          </div>

          {/* Upcoming Activities Section */}
          <div className="mt-8 mb-8">
            <div className="flex items-center mb-4">
              <Typography level="h2" fontSize="lg" className="text-gray-700">
                Kegiatan Yang Akan Datang
              </Typography>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {[...Array(4)].map((_, index) => (
                <Card key={index} variant="outlined" className="p-4 shadow-lg">
                  <CardContent>
                    <Typography fontWeight="bold">
                      Maulid Nabi Muhammad
                    </Typography>
                    <Typography>Masjid Al Falah</Typography>
                    <Typography>15 September 2024</Typography>
                    <Typography>10:00 - Selesai</Typography>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Recent Activities Section */}
          <div>
            <div className="flex items-center mb-4">
              <Typography level="h2" fontSize="lg" className="text-gray-700">
                Kegiatan Terbaru
              </Typography>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {[...Array(6)].map((_, index) => (
                <Card key={index} variant="outlined" className="p-4 shadow-lg">
                  <CardContent>
                    <img
                      src={MasjidIcon} // Use the uploaded image as the activity image placeholder
                      alt="Activity"
                      className="object-cover w-full mb-2 h-52 rounded-t-md"
                    />
                    <Typography fontWeight="bold">Masjid Amirkhan</Typography>
                    <Typography>
                      Jl. Keacungiv B. RT 5 Rw. 2 Jakarta Timur
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProfileView;
