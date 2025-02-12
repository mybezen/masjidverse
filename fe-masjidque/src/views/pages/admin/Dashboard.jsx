import Sidebar from "../../../components/Sidebar";
import { Typography, Card, CardContent, Input } from "@mui/joy";
import BarChart from "../../../components/Chart";
import ActionIcon from "../../../assets/Icon/run.svg";
import EventIcon from "../../../assets/Icon/date.svg";
import IncomeIcon from "../../../assets/Icon/income.svg";
import OutcomeIcon from "../../../assets/Icon/outcome.svg";
import ChartPengeluaran from "../../../components/ChartPengeluaran";
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
            <Card
              sx={{ borderRadius: "xl" }}
              className="p-4 bg-white rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <img
                  src={EventIcon}
                  alt="Action Icon"
                  className="w-10 h-10 mr-2 "
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
                    sx={{ borderRadius: "xl" }}
                    className="flex items-center w-full bg-white shadow-lg rounded-2xl"
                  >
                    {/* Side Background (Garis Hijau) */}
                    <div className="w-10 bg-green-900 rounded-l-2xl"></div>

                    {/* Card Content */}
                    <CardContent className="flex-1 p-4">
                      <div className="flex items-center gap-2">
                        <img
                          src={ActionIcon}
                          alt="Event Icon "
                          className="w-7 h-7 invert"
                        />
                        <Typography fontWeight="bold" className="text-gray-800">
                          Maulid Nabi Muhammad
                        </Typography>
                      </div>
                      <Typography className="text-sm text-gray-500">
                        12 Rabiul Awal 1445H &gt; 16 September 2024
                      </Typography>
                      <Typography className="mt-1 text-sm text-gray-500">
                        📍 Masjid Al Falah
                      </Typography>
                      <Typography className="text-sm text-gray-500">
                        ⏰ 18:00 - Selesai
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
                <div className="h-60">
                  <ChartPengeluaran
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
                <div className="h-60">
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
            <div className="flex items-center space-x-2">
            <img src={IncomeIcon} 
            className="w-10 h-10" />
            <Typography
            sx={{ fontSize: "1.5rem" }}> Pemasukan </Typography>
            </div>
            {/* Income Section */}
            <Card
              sx={{ 
                borderRadius: "xl",
                width:"50%",
               }}
              className="p-4 bg-white rounded-lg shadow-md"
            >
              <div className="flex  mb-2 flex-col">
                <Typography 
                sx={{ fontSize: "1.3rem" }}
                className="text-lg font-semibold text-gray-700">
                  Total Pemasukan
                </Typography>
                <hr className="w-32 h-1 bg-black/40 rounded-full"/>
              </div>
              <Typography 
              fontWeight="bold"
              fontSize={25}
              sx={{
                marginTop: "-1rem"
              }} 
              className="text-2xl text-gray-800">
                Rp. 500.000
              </Typography>
              <Typography className="text-sm text-gray-500">
                Total hingga saat ini
              </Typography>
            </Card>

            {/* Expense Section */}
            <div className="flex items-center space-x-2">
            <img src={IncomeIcon} 
            className="w-10 h-10" />
            <Typography
            sx={{ fontSize: "1.5rem" }}> Pengeluaran </Typography>
            </div>
            <Card
              sx={{ 
                borderRadius: "xl",
                width:"50%"
               }}
              className="p-4 bg-white rounded-lg shadow-md"
            >
              <div className="flex  mb-2 flex-col">
                <Typography 
                sx={{ fontSize: "1.3rem" }}
                className="text-lg font-semibold text-gray-700">
                  Total Pengeluaran
                </Typography>
                <hr className="w-32 h-1 bg-black/40 rounded-full"/>
              </div>
              <Typography 
              fontWeight="bold"
              fontSize={25}
              sx={{
                marginTop: "-1rem"
              }} 
              className="text-2xl text-gray-800">
                Rp. 500.000
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
