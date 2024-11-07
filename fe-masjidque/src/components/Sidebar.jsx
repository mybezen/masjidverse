import { useState } from 'react';
import { FaHome, FaEnvelope, FaCalendar, FaUser } from 'react-icons/fa';

const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const menuItems = [
    { icon: <FaHome />, label: "Home" },
    { icon: <FaEnvelope />, label: "Messages" },
    { icon: <FaCalendar />, label: "Calendar" },
    { icon: <FaUser />, label: "Profile" }
  ];

  return (
    <div
      className={`bg-gradient-to-b from-purple-700 to-purple-900 p-6 text-white flex flex-col shadow-lg 
        ${isHovered ? 'w-48' : 'w-20'} 
        rounded-r-[2rem] transition-[width] duration-500 ease-in-out`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {menuItems.map((item, index) => (
        <div key={index} className="flex items-center my-4 space-x-3 transition-transform transform cursor-pointer hover:scale-105">
          <span className="text-2xl">{item.icon}</span>
          {isHovered && <span className="text-lg font-semibold">{item.label}</span>}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
