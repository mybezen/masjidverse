import { Typography, Card, CardContent } from "@mui/joy";
import ActionIcon from "../assets/Icon/run.svg";
import Navbar from "../../components/Navbar";

function Incoming() {
  return (
    <div className="flex h-screen bg-white">
      {/* Main Content */}
      <main className="flex-1">
        <Navbar />
        <div className="p-8">
          {/* Activities Section */}
          <div className="col-span-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <img
                  src={ActionIcon}
                  alt="Action Icon"
                  className="w-8 h-8 mr-2"
                />
                <Typography level="h2" fontSize="lg" className="text-gray-700">
                  Kegiatan
                </Typography>
              </div>
              {/* Show More Link */}
              <a
                href="#"
                className="text-sm font-medium text-blue-500 hover:underline"
              >
                Show More
              </a>
            </div>
            {/* Activity Cards in 2x2 Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[...Array(4)].map((_, index) => (
                <Card key={index} variant="outlined" className="p-4">
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
        </div>
      </main>
    </div>
  );
}

export default Incoming;
