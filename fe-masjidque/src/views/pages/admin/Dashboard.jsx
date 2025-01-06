import Sidebar from "../../../components/Sidebar";
import { Typography, Card, CardContent, Input } from "@mui/joy";
import BarChart from "../../../components/Chart";
import MasjidIcon from "../../../assets/Images/image.png";
import ActionIcon from "../../../assets/Icon/run.svg";
import IncomeIcon from "../../../assets/Icon/income.svg";
import OutcomeIcon from "../../../assets/Icon/outcome.svg";
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
        <div className="grid grid-cols-12 gap-4">
          {/* Activities Section */}
          <div className="col-span-4">
            <div className="flex items-center mb-2">
              <img
                src={ActionIcon}
                alt="Action Icon"
                className="w-6 h-6 mr-2"
              />
              <Typography
                level="h2"
                fontSize="md"
                className="font-semibold text-gray-700"
              >
                Kegiatan
              </Typography>
            </div>

            <div className="grid gap-4">
              {[...Array(2)].map((_, index) => (
                <Card
                  key={index}
                  variant="outlined"
                  className="p-4 rounded-lg shadow-sm"
                >
                  <CardContent>
                    <Typography fontWeight="bold" className="text-gray-800">
                      Maulid Nabi Muhammad
                    </Typography>
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
          </div>

          {/* Income and Expense Section */}
          <div className="col-span-8">
            <div className="grid grid-cols-2 gap-4">
              {/* Income Section */}
              <div>
                <div className="flex items-center mb-2">
                  <img
                    src={IncomeIcon}
                    alt="Income Icon"
                    className="w-6 h-6 mr-2"
                  />
                  <Typography
                    level="h2"
                    fontSize="md"
                    className="font-semibold text-gray-700"
                  >
                    Pemasukan
                  </Typography>
                </div>
                <Card
                  variant="outlined"
                  className="p-4 mb-2 rounded-lg shadow-sm bg-gray-50"
                >
                  <CardContent>
                    <Typography fontWeight="bold" className="text-gray-800">
                      Total Pemasukan: Rp 500.000
                    </Typography>
                  </CardContent>
                </Card>
                <BarChart
                  title="Data Pemasukan"
                  dataLabel="Pemasukan"
                  className="h-48"
                  dataValues={[500, 1000, 750, 1200, 900, 1300]}
                  backgroundColor="#0F1337"
                  borderColor="#FFFF0000"
                />
              </div>

              {/* Expense Section */}
              <div>
                <div className="flex items-center mb-2">
                  <img
                    src={OutcomeIcon}
                    alt="Outcome Icon"
                    className="w-6 h-6 mr-2"
                  />
                  <Typography
                    level="h2"
                    fontSize="md"
                    className="font-semibold text-gray-700"
                  >
                    Pengeluaran
                  </Typography>
                </div>
                <Card
                  variant="outlined"
                  className="p-4 mb-2 rounded-lg shadow-sm bg-gray-50"
                >
                  <CardContent>
                    <Typography fontWeight="bold" className="text-gray-800">
                      Total Pengeluaran: Rp 250.000
                    </Typography>
                  </CardContent>
                </Card>
                <BarChart
                  title="Data Pengeluaran"
                  dataLabel="Pengeluaran"
                  className="h-48"
                  dataValues={[300, 500, 400, 800, 600, 700]}
                  backgroundColor="#A0AD91"
                  borderColor="#FFFF000"
                />
              </div>
            </div>
          </div>

          {/* Mosques Section */}
          <div className="col-span-12 mt-6">
            <div className="flex items-center mb-4">
              <Typography
                level="h2"
                fontSize="lg"
                className="font-semibold text-gray-700"
              >
                Masjid
              </Typography>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[...Array(4)].map((_, index) => (
                <Card
                  key={index}
                  variant="outlined"
                  className="p-4 rounded-lg shadow-sm bg-gray-50"
                >
                  <CardContent>
                    <img
                      src={MasjidIcon}
                      alt="Mosque"
                      className="object-cover w-full mb-2 rounded-md h-36"
                    />
                    <Typography fontWeight="bold" className="text-gray-800">
                      Masjid Amirkhan
                    </Typography>
                    <Typography className="text-gray-500">
                      Jl. Keacungiv B. RT 5 Rw. 2 Jakarta Timur
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
