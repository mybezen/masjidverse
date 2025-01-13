/* eslint-disable react/prop-types */
import Deleteicon from "../../assets/Icon/delete.svg"; // Import logo delete
import PencilIcon from "../../assets/Icon/Pencil.svg"; // Import logo edit
import ViewIcon from "../../assets/Icon/eyes.svg"; // Import logo view
import FinanceIcon from "../../assets/Icon/finance.svg"; // Import logo keuangan
import InventoryIcon from "../../assets/Icon/inventory.svg"; // Import logo inventaris
// Import icon lainnya sesuai kebutuhan

function Modal({
  open,
  onClose,
  title,
  children,
  showDeleteIcon,
  showEditIcon,
  showViewIcon,
  iconType, // Prop baru untuk menentukan icon tambahan
}) {
  if (!open) return null;

  // Mapping iconType ke path icon yang sesuai
  const iconMapping = {
    finance: FinanceIcon,
    inventory: InventoryIcon,
    // Tambahkan mapping untuk icon lainnya
  };

  // Ambil icon yang sesuai berdasarkan iconType
  const additionalIconSrc = iconType ? iconMapping[iconType] : null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-50">
      {/* Tampilkan Delete Icon jika showDeleteIcon true */}
      {showDeleteIcon && (
        <div>
          <div className="w-[64px] h-[64px] bg-white rounded-full flex items-center justify-center -mb-3">
            <img src={Deleteicon} alt="Delete Icon" className="w-24 h-10" />
          </div>
        </div>
      )}

      {/* Tampilkan Edit Icon jika showEditIcon true */}
      {showEditIcon && (
        <div>
          <div className="w-[64px] h-[64px] bg-white rounded-full flex items-center justify-center -mb-3">
            <img src={PencilIcon} alt="Edit Icon" className="w-24 h-10" />
          </div>
        </div>
      )}

      {/* Tampilkan View Icon jika showViewIcon true */}
      {showViewIcon && (
        <div>
          <div className="w-[64px] h-[64px] bg-white rounded-full flex items-center justify-center -mb-3">
            <img
              src={ViewIcon}
              alt="View Icon"
              className="w-10 h-10 opacity-75"
            />
          </div>
        </div>
      )}

      {/* Tampilkan Additional Icon jika iconType ada */}
      {additionalIconSrc && (
        <div>
          <div className="w-[64px] h-[64px] bg-white rounded-full flex items-center justify-center -mb-3">
            <img
              src={additionalIconSrc}
              alt="Additional Icon"
              className="w-12 h-12"
            />
          </div>
        </div>
      )}

      {/* Modal Content */}
      <div className="w-full max-w-md p-5 bg-white rounded-lg shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
        </div>

        {/* Content */}
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Modal;
