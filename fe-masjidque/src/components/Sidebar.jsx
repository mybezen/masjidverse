import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Import useLocation
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
  const [openDropdowns, setOpenDropdowns] = useState({});
  const navigate = useNavigate();
  const location = useLocation(); // Get current path

  const toggleDropdown = (identifier) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [identifier]: !prev[identifier],
    }));
  };

  const menuItems = [
    { icon: DashboardIcon, label: "Dashboard", path: "/admin" },
    {
      section: "Data Keuangan",
      items: [
        {
          icon: MinusIcon,
          label: "Pemasukan",
          path: null,
          subItems: [{ label: "Data Pemasukan", path: "/admin/pemasukan" }],
        },
        {
          icon: PlusIcon,
          label: "Pengeluaran",
          path: null,
          subItems: [{ label: "Data Pengeluaran", path: "/admin/pengeluaran" }],
        },
      ],
    },
    {
      section: "Aset & Informasi",
      items: [
        {
          icon: InventoryIcon,
          label: "Inventaris",
          path: null,
          subItems: [
            { label: "Data Barang", path: "/admin/items" },
            { label: "Pengajuan Peminjaman", path: "/admin/request" },
          ],
        },
        {
          icon: ActivityIcon,
          label: "Kegiatan",
          path: null,
          subItems: [{ label: "Manajemen Kegiatan", path: "/admin/activity" }],
        },
        {
          icon: MosqueIcon,
          label: "Profil Masjid",
          path: null,
          subItems: [
            { label: "Manajemen Profil", path: "/admin/profiles" },
            { label: "Struktur Organisasi", path: "/admin/profiles#struktur" },
          ],
        },
      ],
    },
  ];

  return (
    <div
      className={`bg-[#154431] p-6 h-screen text-white flex flex-col shadow-lg ${
        isHovered ? "w-48" : "w-20"
      } rounded-r-[2rem] transition-[width] duration-500 ease-in-out`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Logo */}
      <div className="flex flex-col items-center mb-6">
        <img
          src={Logo}
          alt="Logo"
          className={`transition-all duration-500 ${
            isHovered ? "w-20 h-20" : "w-12 h-12"
          }`}
        />
        {isHovered && (
          <span className="mt-2 text-lg font-semibold poppins-semibold">
            MasjidVerse
          </span>
        )}
      </div>

      {/* Menu */}
      <div>
        {menuItems.map((menu, menuIndex) => (
          <div key={menuIndex} className="mb-4">
            {/* Section Title */}
            {menu.section && isHovered && (
              <div className="text-sm font-semibold uppercase text-gray-300 mb-2">
                {menu.section}
              </div>
            )}

            {/* Items */}
            {menu.items
              ? menu.items.map((item, index) => {
                  const identifier = `${menuIndex}-${index}`; // Unique identifier
                  const isActiveItem = item.subItems?.some(
                    (subItem) => subItem.path === location.pathname
                  );

                  return (
                    <div key={index} className="my-2">
                      <div
                        className={`flex items-center space-x-3 cursor-pointer hover:scale-105 poppins-bold ${
                          isActiveItem ? "bg-[#B2DF8A] text-black rounded-lg text-center" : ""
                        }`}
                        onClick={() =>
                          item.path ? navigate(item.path) : toggleDropdown(identifier)
                        }
                      >
                        {/* Icon */}
                        <img
                          src={item.icon}
                          alt={`${item.label} Icon`}
                          className="w-6 h-6"
                        />

                        {/* Label */}
                        {isHovered && (
                          <span className="flex items-center text-lg poppins-semibold">
                            {item.label}
                            {item.subItems && (
                              <img
                                src={dropdownIcon}
                                alt="Dropdown Icon"
                                className={`w-4 h-4 ml-2 transition-transform duration-500 ease-in-out ${
                                  openDropdowns[identifier]
                                    ? "rotate-180"
                                    : "rotate-0"
                                }`}
                              />
                            )}
                          </span>
                        )}
                      </div>

                      {/* Sub Items */}
                      {item.subItems && (
                        <div
                          className={`ml-8 mt-2 space-y-1 text-white transition-all duration-500 ease-in-out overflow-hidden ${
                            openDropdowns[identifier]
                              ? "max-h-[200px] opacity-100 fade-in"
                              : "max-h-0 opacity-0 fade-out"
                          }`}
                        >
                          {item.subItems.map((subItem, idx) => (
                            <p
                              key={idx}
                              className={`p-2 transition hover:bg-[#9EDF9C] rounded-lg cursor-pointer poppins-semibold ${
                                subItem.path === location.pathname
                                  ? "bg-[#9EDF9C] text-black"
                                  : ""
                              }`}
                              onClick={() => navigate(subItem.path)}
                            >
                              {subItem.label}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })
              : menu.icon && (
                  <div
                    className={`flex items-center space-x-3 cursor-pointer hover:scale-105 poppins-bold ${
                      location.pathname === menu.path
                        ? "bg-[#9EDF9C] text-black rounded-lg"
                        : ""
                    }`}
                    onClick={() => navigate(menu.path)}
                  >
                    <img src={menu.icon} alt={`${menu.label} Icon`} />
                    {isHovered && (
                      <span className="text-lg poppins-semibold">
                        {menu.label}
                      </span>
                    )}
                  </div>
                )}
            {menuIndex < menuItems.length - 1 && (
              <hr className="my-4 border-white" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
