import { useState } from "react";
import {
  FaHome,
  FaWallet,
  FaClipboard,
  FaFileAlt,
  FaUserCircle,
} from "react-icons/fa";

const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const menuItems = [
    { icon: <FaHome />, label: "Dashboard" },
    {
      icon: <FaWallet />,
      label: "Data Keuangan",
      subItems: ["Pemasukan", "Pengeluaran"],
    },
    { icon: <FaClipboard />, label: "Pengaturan" },
    { icon: <FaFileAlt />, label: "Laporan" },
    { icon: <FaUserCircle />, label: "Profile" },
  ];

  return (
    <div
      className={`bg-[#3C552D] p-6 text-white flex flex-col shadow-lg 
        ${isHovered ? "w-48" : "w-20"} 
        rounded-r-[2rem] transition-[width] duration-500 ease-in-out`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 className="mb-4 text-xl font-bold">
        {isHovered ? "MasjidVerse" : "MV"}
      </h2>
      {menuItems.map((item, index) => (
        <div key={index} className="my-4">
          <div className="flex items-center space-x-3 transition-transform transform cursor-pointer hover:scale-105">
            <span className="text-2xl">{item.icon}</span>
            {isHovered && (
              <span className="text-lg font-semibold">{item.label}</span>
            )}
          </div>
          {/* Render subItems if present */}
          {isHovered && item.subItems && (
            <div className="mt-2 ml-8 space-y-1 text-gray-200">
              {item.subItems.map((subItem, idx) => (
                <p key={idx} className="text-sm cursor-pointer hover:underline">
                  {subItem}
                </p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
