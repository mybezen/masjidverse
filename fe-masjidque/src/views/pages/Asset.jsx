import Navbar from "../../components/Navbar";
import AssetIcon from "../../assets/Icon/asset.svg"
import AcceptIcon from "../../assets/Icon/accept.svg"
import BackIcon from "../../assets/Icon/back.svg"
import { useNavigate } from "react-router-dom";

const tabelAsset = [
    {
        id: 1,
        num: "No",
        text: "Nama Barang",
        quantity: "Jumlah",
        action: "Status",
    }
]

const listAsset = [
    {
        id: 1,
        num: 1,
        text: "Kursi",
        quantity: "2",
        action: AcceptIcon,
    },
    {
        id: 1,
        num: 2,
        text: "Meja",
        quantity: "1",
        action: AcceptIcon,
    },
]

const backPages = [
    {
        id:1,
        title: "Kembali",
        icon: BackIcon,
        path: "/feature",
    
    }
  ]

  function Asset() {
    const handleNavigate = useNavigate();
    
      const navigate = (path) => {
        handleNavigate(path)
      }
    return (
        <div>
            <Navbar/>
            
            <div className="pt-4 flex flex-col items-center justify-center">

            <div className="">
            {backPages.map((back) => (
            <button key={back.id} className="w-[80%] mb-10" onClick={() => handleNavigate("/feature")}>
                <div className="flex items-center">
                    <img src={back.icon} 
                    className="w-10"/>
                    <p className="text-lg">{back.title}</p>
                </div>
            </button>
        ))}
                
                <div className="flex items-center gap-3">
                    <img src={AssetIcon} alt="" />
                    <p className="plus-jakarta-sans-bold">Keterangan Aset</p>
                </div>

                <div className="pt-1">
                    
                <div className="w-[1280px] h-[60px] bg-[#000000]/20 rounded-[9px] flex items-center justify-center ">
                    <div className="poppins-semibold text-xl">
                        {tabelAsset.map((asset) => (
                            <div key={asset.id} className="flex justify-center gap-52">
                                <p>{asset.num}</p>
                                <p>{asset.text}</p>
                                <p>{asset.quantity}</p>
                                <p>{asset.action}</p>
                            </div>
                        ))}
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        {listAsset.map((item) => (
                            <div key={item.id} className="flex items-center justify-center text-xl gap-60 mt-5">
                                <p>{item.num}</p>
                                <p>{item.text}</p>
                                <p>{item.quantity}</p>
                                <p className="flex gap-2">Tersedia 
                                    <img src={item.action} alt="" 
                                    className="w-5"/>
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center justify-center hover:">
                    <button className="flex items-center justify-center pt-10" onClick={() => handleNavigate("/peminjaman")}>
                    <div className="w-[440px] h-[70px] bg-gradient-to-r from-[#070707] via-[#154431] to-[#29845F] 
                        rounded-[10px] flex items-center justify-center">
                            <p className="text-white text-[18px] poppins">Ajukan Peminjaman</p>
                    </div>
                    </button>
                            </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Asset;