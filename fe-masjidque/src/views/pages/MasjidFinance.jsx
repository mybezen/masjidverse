import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import Navbar from "../../components/Navbar";
import BankBriLogo from "../../assets/Icon/bank-bri.svg";
import BankBcaLogo from "../../assets/Images/bank-bca.png";
import BankMandiriLogo from "../../assets/Images/bank-mandiri.png";
import QrisLogo from "../../assets/Images/logoqris.png";
import BackIcon from "../../assets/Icon/back.svg"
import { useNavigate } from "react-router-dom";


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

function MasjidFinance() {
  const data = {
    labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    datasets: [
      {
        label: "Pemasukan",
        data: [500, 400, 300, 600, 200, 800, 400, 800, 600, 200],
        fill: true,
        backgroundColor: "rgba(255, 255, 0, 0.5)",
        borderColor: "rgba(255, 255, 0, 0.8)",
        tension: 0.4,
      },
      {
        label: "Pengeluaran",
        data: [200, 300, 200, 300, 400, 600, 300, 500, 400, 100],
        fill: true,
        backgroundColor: "rgba(128, 128, 128, 0.5)",
        borderColor: "rgba(128, 128, 128, 0.8)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 1000,
        ticks: {
          stepSize: 250,
        },
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
      labels: {
        usePointStyle: true,
        pointStyle: "circle",
      },
    },
  };

  const bankData = [
    {
      name: "BRI",
      logo: BankBriLogo,
    },
    {
      name: "BCA",
      logo: BankBcaLogo,
    },
    {
      name: "MANDIRI",
      logo: BankMandiriLogo,
    },
    {
      name: "QRIS",
      logo: QrisLogo,
    },
  ];

  const backPages = [
      {
          id:1,
          title: "Kembali",
          icon: BackIcon,
          path: "/feature",
      
      }
    ]

    const navigate = useNavigate()
const handleNavigate = (path) => {
    navigate(path)
}
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="p-6 max-w-6xl mx-auto">
      {backPages.map((back) => (
            <button key={back.id} className="w-[80%] mb-10" onClick={() => handleNavigate("/feature")}>
                <div className="flex items-center">
                    <img src={back.icon} 
                    className="w-10"/>
                    <p className="text-lg">{back.title}</p>
                </div>
            </button>
        ))}
        <h1 className="text-2xl font-bold mb-2 text-center">
          Informasi Keuangan
        </h1>
        
        <div className="w-28 h-0.5 bg-black justify-center mx-auto"></div>
        <div className="w-44 h-0.5 bg-black justify-center mx-auto mt-2 mb-2"></div>

        {/* Chart */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          {/* Chart Section */}
          <div className="col-span-2 bg-white p-4 rounded-lg shadow-md">
            <div style={{ height: "300px" }}>
              <Line data={data} options={options} />
            </div>
          </div>

          {/* Total Pemasukan dan pengeluaran */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4 poppins-medium">
              LAPORAN UMUM
            </h2>
            <div className="grid grid-cols-1 gap-2">
              <div className="border rounded p-2">
                <div className="text-sm text-gray-600">Saldo Awal</div>
                <div className="font-semibold">Rp500.000</div>
              </div>
              <div className="border rounded p-2">
                <div className="text-sm text-gray-600">Total Pemasukan +</div>
                <div className="font-semibold text-green-600">Rp500.000</div>
              </div>
              <div className="border rounded p-2">
                <div className="text-sm text-gray-600">Total Pengeluaran -</div>
                <div className="font-semibold text-red-600">Rp200.000</div>
              </div>
              <div className="border rounded p-2 bg-gray-50">
                <div className="text-sm text-gray-600">Saldo Akhir</div>
                <div className="font-semibold">Rp300.000</div>
              </div>
            </div>
          </div>
        </div>

        {/* Ini bagian bank */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-lg font-semibold mb-4">
            Donasi Sekarang dengan Layanan Bank Berikut
          </h2>
          <div className="grid grid-cols-4 gap-4">
            {bankData.map((bank) => (
              <div
                key={bank.name}
                className="bg-white border rounded-lg p-4 hover:shadow-md transition-shadow duration-300 cursor-pointer"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={bank.logo}
                    alt={`Logo ${bank.name}`}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* kartu donasi */}
        <div className="bg-green-800 text-white p-6 rounded-lg shadow-md mb-6">
          <div className="flex flex-col text-center">
            <span>Ahmad Justin Michael</span>
            <span className="text-xl font-semibold">34080381110220</span>
          </div>
        </div>

        {/* form transfer */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Kirim Bukti Transfer</h2>
          <form className="space-y-4">
            <div>
              <label className="block mb-2">Atas Nama</label>
              <input type="text" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block mb-2">Nominal</label>
              <input type="text" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block mb-2">Bukti Transfer</label>
              <input
                type="file"
                accept="image/*"
                className="w-full p-2 border rounded bg-white file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-green-800 file:text-white hover:file:bg-green-700"
              />
            </div>
            <button className="bg-green-800 text-white px-4 py-2 rounded float-right">
              Kirim
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MasjidFinance;
