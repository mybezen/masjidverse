import MosqueIcon from '../../assets/Images/LoginMosq.svg'

function RegisterPage() {
    return (
        <div className="flex h-screen">
            {/* Bagian Kiri - Form */}
            <div className="w-1/2 flex flex-col justify-center px-24">
                <h1 className="text-2xl poppins-semibold mb-2">Mulai</h1>
                <p className="text-sm poppins-medium text-gray-500 mb-6">
                    Selamat datang di MasjidVerse - Ayo buat akunmu
                </p>

                <form className='poppins-semibold border-t-2 border-black border-opacity-40'>
                    <div className="my-4">
                        <label className="block mb-1 text-sm">Nama</label>
                        <input
                            type="text"
                            placeholder="Nama"
                            className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-1 text-sm">Email</label>
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block mb-1 text-sm">Password</label>
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full active:animate-ping bg-gradient-to-r from-[#070707] to-[#29845F] hover:from-[#070707] hover:to-[#29845F] text-white p-2 rounded-md hover:bg-gradient-to-l transition"
                    >
                        Daftar
                    </button>
                </form>

                <p className="text-center text-sm mt-4 poppins-medium text-opacity-70 text-[#000000]">
                    Sudah punya akun?{" "}
                    <a href="/login" className="text-green-600 text-opacity-100 hover:underline">
                        Masuk
                    </a>
                </p>
            </div>

            {/* Bagian Kanan - Ilustrasi */}
            <div className="w-1/2 p-4  text-white">
                <div className="bg-gradient-to-br from-[#081911] to-[#35AA7B] w-[720px] h-full flex flex-col rounded-3xl">
                <img src={MosqueIcon} className="absolute object-contain bottom-1"></img>
                <div className='flex items-center justify-center top-[4rem] relative'>
                    <h2 className="text-3xl italic mb-4 text-center items-center">
                        Pray before you <br />
                        <span className="font-semibold">are</span> prayed upon
                    </h2>
                </div>
                    <div className="w-full h-2/3 bg-no-repeat bg-center bg-contain" style={{ backgroundImage: "url('/masjid.png')" }}></div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
