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
          {/* Activities Section */}
          <div className="col-span-8">
            <Card className="p-4 rounded-lg shadow-md bg-white">
              <div className="flex items-center mb-4">
                <img
                  src={ActionIcon}
                  alt="Action Icon"
                  className="w-6 h-6 mr-2 invert"
                />
                <Typography className="font-semibold text-gray-700 text-lg">
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
                      <div className="flex  text-center items-center gap-4">
                        <img src={DateIcon} alt="" className="w-8" />
                        <Typography fontWeight="bold" className="text-gray-800">
                          Maulid Nabi Muhammad
                        </Typography>
                      </div>
                      <Typography className="text-gray-500">
                        Masjid Al Falah
                      </Typography>
                      <Typography className="text-gray-500">
                        15 September 2024
                      </Typography>
                      <Typography className="text-gray-500">
                        10:00 - Selesai
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </Card>
          </div>

          {/* Income and Expense Section */}
          <div className="col-span-4 space-y-6">
            {/* Income Section */}
            <Card className="p-4 rounded-lg shadow-md bg-white">
              <div className="flex items-center mb-2">
                <img
                  src={IncomeIcon}
                  alt="Income Icon"
                  className="w-6 h-6 mr-2"
                />
                <Typography className="font-semibold text-gray-700 text-lg">
                  Pemasukan
                </Typography>
              </div>
              <Typography fontWeight="bold" className="text-gray-800 text-2xl">
                Rp. 500.000
              </Typography>
              <Typography className="text-gray-500 text-sm">
                Total hingga saat ini
              </Typography>
            </Card>

            {/* Expense Section */}
            <Card className="p-4 rounded-lg shadow-md bg-white">
              <div className="flex items-center mb-2">
                <img
                  src={OutcomeIcon}
                  alt="Outcome Icon"
                  className="w-6 h-6 mr-2"
                />
                <Typography className="font-semibold text-gray-700 text-lg">
                  Pengeluaran
                </Typography>
              </div>
              <Typography fontWeight="bold" className="text-gray-800 text-2xl">
                Rp. 250.000
              </Typography>
              <Typography className="text-gray-500 text-sm">
                Total hingga saat ini
              </Typography>
            </Card>
          </div>

          {/* Charts Section */}
          <div className="relative col-span-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card className="p-4 rounded-lg shadow-md bg-white w-120">
              <Typography className="font-semibold text-gray-700 text-lg mb-2">
                Data Pemasukan
              </Typography>
              <div className="h-128">
                <BarChart
                  title=""
                  dataLabel="Pemasukan"
                  className="h-64"
                  dataValues={[500, 1000, 750, 1200, 900, 1300]}
                  backgroundColor="#0F1337"
                  borderColor="#FFFF0000"
                />
              </div>
            </Card>

            <Card className="p-4 rounded-lg shadow-md bg-white w-120">
              <Typography className="font-semibold text-gray-700 text-lg mb-4">
                Data Pengeluaran
              </Typography>
              <div className="h-128">
                <BarChart
                  title=""
                  dataLabel="Pengeluaran"
                  className="h-64"
                  dataValues={[300, 500, 400, 800, 600, 700]}
                  backgroundColor="#A0AD91"
                  borderColor="#FFFF000"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
