import Navbar from "../../components/Navbar";
import RentIcon from "../../assets/Icon/rent.svg";

function RentAsset() {
  return (
    <div>
      <Navbar />

      <div>
        <div className="flex items-center justify-start gap-4">
          <img src={RentIcon} className="w-[40px] h-[40px]" />
          <p className="text-lg">Peminjaman Aset</p>
        </div>
      </div>
    </div>
  );
}

export default RentAsset;
