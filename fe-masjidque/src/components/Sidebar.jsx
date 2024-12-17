import { useState } from "react";
import dropdownIcon from "../assets/Icon/dropdown.svg";
import DashboardIcon from "../assets/Icon/dashboard.svg";
import PlusIcon from "../assets/Icon/plus.svg";
import MinusIcon from "../assets/Icon/minus.svg";
import InventoryIcon from "../assets/Icon/inventory.svg";
import ActivityIcon from "../assets/Icon/run.svg";
import MosqueIcon from "../assets/Icon/mosque.svg";
import Logo from "/mesjid.png";

const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({}); // State untuk dropdown terbuka

  const toggleDropdown = (index) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle dropdown berdasarkan index
    }));
  };

  const menuItems = [
    { icon: DashboardIcon, label: "Dasbor" },
    { icon: PlusIcon, label: "Pemasukan", subItems: ["Data Pemasukan"] },
    { icon: MinusIcon, label: "Pengeluaran", subItems: ["Data Pengeluaran"] },
    { icon: InventoryIcon, label: "Inventaris" },
    { icon: ActivityIcon, label: "Kegiatan" },
    { icon: MosqueIcon, label: "Profil Masjid" },
  ];

  return (
    <div
      className={`bg-[#154431] p-6 h-screen text-white flex flex-col shadow-lg ${isHovered ? "w-48" : "w-20"
        } rounded-r-[2rem] transition-[width] duration-500 ease-in-out`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Logo */}
      <div className="flex flex-col items-center mb-6">
        <img
          src={Logo}
          alt="Logo"
          className={`transition-all duration-500 ${isHovered ? "w-20 h-20" : "w-12 h-12"
            }`}
        />
        {isHovered && (
          <span className="mt-2 text-lg font-semibold poppins-semibold">
            MasjidVerse
          </span>
        )}
      </div>

      {/* Menu Items */}
      {menuItems.map((item, index) => (
        <div key={index} className="my-4">
          <div
            className="flex items-center space-x-3 cursor-pointer hover:scale-105 poppins-bold"
            onClick={() => item.subItems && toggleDropdown(index)}
          >
            {/* Icon */}
            <img
              src={item.icon}
              alt={`${item.label} Icon`}
              className={`w-6 h-6 ${item.label === "Kegiatan" ? "filter invert brightness-0" : ""
                }`}
              style={{
                filter: item.label === "Kegiatan" ? "invert(1) brightness(100%)" : "",
              }}
            />

            {/* Menu Label */}
            {isHovered && (
              <span className="flex items-center text-lg poppins-semibold">
                {item.label}
                {item.subItems && (
                  <img
                    src={dropdownIcon}
                    alt="Dropdown Icon"
                    className={`w-4 h-4 ml-2 transition-transform duration-500 ease-in-out ${openDropdowns[index] ? "rotate-180" : "rotate-0"
                      }`}

                  />
                )}
              </span>
            )}
          </div>

          {/* Sub Items */}
          {item.subItems && openDropdowns[index] && isHovered && (
            <div
              className={`ml-8 mt-2 space-y-1 text-white transition-all duration-500 ease-in-out overflow-hidden ${openDropdowns[index] ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
              {item.subItems.map((subItem, idx) => (
                <p
                  key={idx}
                  className="p-2 transition hover:bg-[#9EDF9C] rounded-lg cursor-pointer poppins-semibold"
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
