import Navbar from "../../components/Navbar";
import AssetIcon from "../../assets/Icon/asset.svg"
import AcceptIcon from "../../assets/Icon/accept.svg"

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
function Asset() {
    return (
        <div>
            <Navbar/>
            
            <div className="pt-4 flex flex-col items-center justify-center">

            <div className="">
                
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
                            <div key={item.id} className="flex items-center justify-center text-xl gap-60 ">
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
                </div>
            </div>
        </div>
    </div>
    )
}

export default Asset;