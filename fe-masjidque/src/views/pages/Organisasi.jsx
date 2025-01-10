import Navbar from "../../components/Navbar";
import OrganisasiIcon from "../../assets/Icon/organisasi.svg"
import BackIcon from "../../assets/Icon/back.svg"
import { useNavigate } from "react-router-dom";

const strukturOrganisasi = [
    {
        id: 1,
        num: "No",
        text: "Nama",
        role: "Jabatan",
    }
]

const dataOrganisasi = [
    {
        id:1, 
        num: 1,
        name: "Agus Susilo",
        role: "Sekretaris",
    },
    {
        id:2, 
        num: 2,
        name: "Maya Sari",
        role: "Bendahara",
    },
    {
        id:3, 
        num: 3,
        name: "Sari Wangi",
        role: "Bendahara",
    },

]


const backPages = [
    {
        id: 1,
        title: "Kembali",
        icon: BackIcon,
        path: "/feature"
    }
]
function Organisasi() {
    const navigate = useNavigate()
const handleNavigate = (path) => {
    navigate(path)
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
                    <img src={OrganisasiIcon} alt="" />
                    <p className="plus-jakarta-sans-bold">Struktur Organisasi</p>
                </div>

                <div className="pt-1">
                    
                <div className="w-[1280px] h-[60px] bg-[#000000]/20 rounded-[9px] flex items-center justify-center ">
                    <div className="poppins-semibold text-xl">
                        {strukturOrganisasi.map((data) => (
                            <div key={data.id} className="grid grid-cols-3 gap-[360px] w-full">
                                <p>{data.num}</p>
                                <p>{data.text}</p>
                                <p>{data.role   }</p>
                            </div>
                        ))}
                        </div>
                    </div>

                        <div className="flex flex-col items-center justify-center">
                                {dataOrganisasi.map((anggota) => (
                                    <div key={anggota.id} className="grid grid-cols-3 gap-5 w-[1280px] mt-5 font-semibold text-[18px]">
                                        <p className="text-center">{anggota.num}</p>
                                        <p className="text-center">{anggota.name}</p>
                                        <p className="text-center">{anggota.role}</p>
                                    </div>
                                ))}
                        </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Organisasi;