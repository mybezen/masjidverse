import { Typography, Card, CardContent } from "@mui/joy";
import MasjidIcon from "../assets/Images/image.png"; // Replace with actual path to your image
import ActionIcon from "../assets/Icon/run.svg";
import IncomeIcon from "../assets/Icon/income.svg";
import OutcomeIcon from "../assets/Icon/outcome.svg";

function Dashboard() {
  return (
    <div className="flex h-screen bg-white">
      {/* Main Content */}
      <main className="flex-1">
        {/* Header */}
        <div className="p-8">
          {/* Grid Layout */}
          <div className="grid grid-cols-8 gap-6 mt-2">
            {/* Activities Section */}
            <div className="col-span-4">
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  <img
                    src={ActionIcon}
                    alt="Action Icon"
                    className="w-8 h-8 mr-2"
                  />
                </div>{" "}
                {/* Action Icon */}
                <Typography level="h2" fontSize="lg" className="text-gray-700">
                  Kegiatan
                </Typography>
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

            {/* Income Section */}
            <div className="col-span-4">
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  <img
                    className="w-8 h-8 mr-2"
                    src={IncomeIcon}
                    alt="IncomeIcon"
                  />
                </div>
                <Typography level="h2" fontSize="lg" className="text-gray-700">
                  Pemasukan
                </Typography>
              </div>
              {/* Income Card */}
              <Card variant="outlined" className="p-4 mb-4">
                <CardContent>
                  <Typography fontWeight="bold">Rp 1,500,000</Typography>
                  <Typography>Donasi dari Jamaah</Typography>
                  <Typography>15 September 2024</Typography>
                </CardContent>
              </Card>

              {/* Expense Section */}
              <div className="flex items-center mt-4 mb-4">
                <div className="flex items-center ">
                  <img
                    className="w-8 h-8 mr-2"
                    src={OutcomeIcon}
                    alt="OutcomeIcon"
                  />
                </div>
                <Typography level="h2" fontSize="lg" className="text-gray-700">
                  Pengeluaran
                </Typography>
              </div>
              {/* Expense Card */}
              <Card variant="outlined" className="p-4">
                <CardContent>
                  <Typography fontWeight="bold">Rp 750,000</Typography>
                  <Typography>Pembelian Alat Kebersihan</Typography>
                  <Typography>15 September 2024</Typography>
                </CardContent>
              </Card>
            </div>

            {/* Mosque Cards Section */}
            <div className="h-12 bg-blue-400 rounded-xl "></div>
            <div className="grid grid-cols-3 col-span-12 gap-4 mt-6">
              {[...Array(3)].map((_, index) => (
                <Card key={index} variant="outlined" className="p-4">
                  <CardContent>
                    <img
                      src={MasjidIcon} // Use actual path or dynamic image source
                      alt="Mosque"
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

export default Dashboard;
