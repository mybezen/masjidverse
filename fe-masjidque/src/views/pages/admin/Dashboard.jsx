import Sidebar from "../../../components/Sidebar";
import { Typography, Card, CardContent, Input } from "@mui/joy";
import BarChart from "../../../components/Chart";
import ActionIcon from "../../../assets/Icon/run.svg";
import IncomeIcon from "../../../assets/Icon/income.svg";
import OutcomeIcon from "../../../assets/Icon/outcome.svg";
import ClockIcon from "../../../assets/Icon/clock.svg";
import DateIcon from "../../../assets/Icon/date.svg";
import LocationIcon from "../../../assets/Icon/location.svg";
import SearchIcon from "@mui/icons-material/Search";

function AdminDashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <Typography
            level="h1"
            fontSize="xl"
            className="font-bold text-gray-800"
          >
            Dashboard
          </Typography>
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <Input
              placeholder="Search..."
              startDecorator={<SearchIcon />}
              className="bg-gray-200 rounded-lg"
            />
            {/* User Info */}
            <div className="text-right">
              <Typography level="body1" className="text-gray-800 poppins-bold">
                Hello, Admin
              </Typography>
              <Typography level="body2" className="text-gray-500 poppins-bold">
                Role: Admin
              </Typography>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="grid grid-cols-12 gap-6">
          {/* Left Section */}
          <div className="col-span-8 space-y-6">
            {/* Activities Section */}
            <Card className="p-4 bg-white rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src={ActionIcon}
                  alt="Action Icon"
                  className="w-6 h-6 mr-2 invert"
                />
                <Typography className="text-lg font-semibold text-gray-700">
                  Kegiatan Yang Akan Datang
                </Typography>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[...Array(2)].map((_, index) => (
                  <Card
                    key={index}
                    variant="outlined"
                    className="p-4 rounded-lg shadow-sm bg-gray-50"
                  >
                    <CardContent>
                      <Typography fontWeight="bold" className="text-gray-800">
                        Maulid Nabi Muhammad
                      </Typography>
                      <Typography className="text-gray-500">
                        Masjid Al Falah
                      </Typography>
                      <Typography className="text-gray-500">
                        16 September 2024
                      </Typography>
                      <Typography className="text-gray-500">
                        18:00 - Selesai
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </Card>

            {/* Charts Section */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 bg-white rounded-lg shadow-md">
                <Typography className="mb-2 text-lg font-semibold text-gray-700">
                  Data Pemasukan
                </Typography>
                <div className="h-48">
                  <BarChart
                    title=""
                    dataLabel="Pemasukan"
                    className="h-full"
                    dataValues={[10, 20, 30, 40, 50]}
                    backgroundColor="#0F1337"
                    borderColor="#FFFF0000"
                  />
                </div>
              </Card>
              <Card className="p-4 bg-white rounded-lg shadow-md">
                <Typography className="mb-2 text-lg font-semibold text-gray-700">
                  Data Pengeluaran
                </Typography>
                <div className="h-48">
                  <BarChart
                    title=""
                    dataLabel="Pengeluaran"
                    className="h-full"
                    dataValues={[15, 25, 35, 45, 55]}
                    backgroundColor="#A0AD91"
                    borderColor="#FFFF000"
                  />
                </div>
              </Card>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col col-span-4 space-y-6">
            {/* Income Section */}
            <Card className="p-4 bg-white rounded-lg shadow-md">
              <div className="flex items-center mb-2">
                <img
                  src={IncomeIcon}
                  alt="Income Icon"
                  className="w-6 h-6 mr-2"
                />
                <Typography className="text-lg font-semibold text-gray-700">
                  Pemasukan
                </Typography>
              </div>
              <Typography fontWeight="bold" className="text-2xl text-gray-800">
                Rp. 500.000
              </Typography>
              <Typography className="text-sm text-gray-500">
                Total hingga saat ini
              </Typography>
            </Card>

            {/* Expense Section */}
            <Card className="p-4 bg-white rounded-lg shadow-md">
              <div className="flex items-center mb-2">
                <img
                  src={OutcomeIcon}
                  alt="Outcome Icon"
                  className="w-6 h-6 mr-2"
                />
                <Typography className="text-lg font-semibold text-gray-700">
                  Pengeluaran
                </Typography>
              </div>
              <Typography fontWeight="bold" className="text-2xl text-gray-800">
                Rp. 250.000
              </Typography>
              <Typography className="text-sm text-gray-500">
                Total hingga saat ini
              </Typography>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
