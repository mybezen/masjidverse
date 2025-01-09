import { useState } from "react";
import Navbar from "../../components/Navbar";
import RentIcon from "../../assets/Icon/rent.svg";
import KursiIcon from "../../assets/Icon/kursi.svg";
import MejaICon from "../../assets/Icon/meja.svg";
import KarpetIcon from "../../assets/Icon/karpet.svg";
import SpeakerIcon from "../../assets/Icon/speaker.svg";
import MicIcon from "../../assets/Icon/mic.svg";
import BackIcon from "../../assets/Icon/back.svg";
import { useNavigate } from "react-router-dom";

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
