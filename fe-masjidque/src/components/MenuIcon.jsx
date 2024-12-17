import MosqueIcon from "../assets/Icon/mosque.svg";
import EventIcon from "../assets/Icon/event.svg";
import FinanceIcon from "../assets/Icon/finance.svg";
import AssetIcon from "../assets/Icon/Asset.svg";
import OrganitationIcon from "../assets/Icon/organitation.svg";

function MenuIcon() {
  const menuItems = [
    { id: 1, name: "Profil", icon: MosqueIcon },
    { id: 2, name: "Kegiatan", icon: EventIcon },
    { id: 3, name: "Keuangan", icon: FinanceIcon },
    { id: 4, name: "Aset", icon: AssetIcon },
    { id: 5, name: "Organisasi", icon: OrganitationIcon },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-4 bg-white">
      {menuItems.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center justify-center bg-gradient-to-b 
          from-[#154431] to-[#000000] p-4 rounded-lg text-white"
        >
          <img src={item.icon} alt={item.name} className="h-10 w-10 mb-2" />
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
}

export default MenuIcon;