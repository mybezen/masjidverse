import Navbar from "../../components/Navbar";
import OrganisasiIcon from "../../assets/Icon/organisasi.svg"

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
function Organisasi() {
    return (
        <div>
            <Navbar/>

            <div className="pt-4 flex flex-col items-center justify-center">

            <div className="">
                
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

                    \
                </div>
            </div>
        </div>
        </div>
    )
}

export default Organisasi;