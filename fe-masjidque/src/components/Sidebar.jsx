import { useState } from "react";
import {
  FaHome,
  FaWallet,
  FaClipboard,
  FaFileAlt,
  FaUserCircle,
} from "react-icons/fa";
import dropdownIcon from "../assets/Icon/dropdown.svg";

const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
      className={`bg-[#3C552D] p-6 h-screen text-white flex flex-col shadow-lg 
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
          <div
            className="flex items-center space-x-3 transition-transform transform cursor-pointer hover:scale-105 poppins-bold"
            onClick={() => {
              if (item.subItems) {
                setIsDropdownOpen((prev) =>
                  item.label === "Data Keuangan" ? !prev : prev
                );
              }
            }}
          >
            <span className="text-2xl">{item.icon}</span>
            {isHovered && (
              <span className="flex items-center space-x-1 text-lg poppins-semibold">
                {item.label}
                {/* Display dropdown icon with rotation */}
                {item.subItems && (
                  <img
                    src={dropdownIcon}
                    alt="Dropdown Icon"
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isDropdownOpen && item.label === "Data Keuangan"
                        ? "rotate-180"
                        : "rotate-0"
                    }`}
                  />
                )}
              </span>
            )}
          </div>
          {/* Animated dropdown for subItems */}
          {isHovered && item.subItems && (
            <div
              className={`overflow-hidden transition-[max-height] duration-300 ease-in-out 
                ${
                  isDropdownOpen && item.label === "Data Keuangan"
                    ? "max-h-40"
                    : "max-h-0"
                }
                ml-8 mt-2 space-y-1 text-white`}
            >
              {item.subItems.map((subItem, idx) => (
                <p
                  key={idx}
                  className="active:bg-[#9EDF9C] transition-[width] duration-500 ease-in-out p-4 rounded-lg bg-opacity-20 cursor-pointer text-opacity-100 poppins-semibold hover:scale-95"
                >
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
