import Sidebar from "../../../components/Sidebar";
import { Typography, Input } from "@mui/joy";
import SearchIcon from "@mui/icons-material/Search";
import UserIcon from "../../../assets/Icon/user.svg";
import Swal from "sweetalert2"; // Import SweetAlert

function PasswordManagement() {
  const handleDeleteAccount = () => {
    Swal.fire({
      title: "Apakah kamu yakin?",
      text: "Akun ini akan dihapus secara permanen!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Ya, Hapus!",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Terhapus!", "Akun telah berhasil dihapus.", "success");
        // Tambahkan logika penghapusan akun di sini
      }
    });
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 p-6">
        <div className="sticky top-0 z-10 p-6">
          <div className="flex items-center justify-between">
            <Typography level="h1" fontSize="2rem" className="font-bold text-gray-800">
              Dashboard
            </Typography>
            <div className="flex items-center space-x-4">
              <Input placeholder="Search..." startDecorator={<SearchIcon />} className="bg-gray-200 rounded-lg" />
              <div className="text-right flex">
                <div className="flex flex-col items-end mr-4">
                  <Typography level="body1" className="text-gray-800 poppins-bold">
                    Hello, Admin
                  </Typography>
                  <Typography level="body2" className="text-gray-500 poppins-bold">
                    Role: Admin
                  </Typography>
                </div>
                <button className="hover:bg-gray-200 w-10 flex items-center justify-center">
                  <img src={UserIcon} className="invert" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 p-6">
          <div className="flex items-center gap-4">
            <img src={UserIcon} className="invert w-14 h-14 opacity-50" />
            <div className="flex flex-col">
              <Typography fontSize={25} fontWeight="bold">
                Admin <span className="text-black/50">/</span> Password
              </Typography>

              <Typography fontSize={15} sx={{ marginTop: "-0.5rem" }}>
                Mengatur Password Anda
              </Typography>
            </div>
          </div>
        </div>

        <div className="p-6">
          {/* Password & Input sejajar */}
          <div className="flex items-center gap-80">
            <Typography fontSize={25} fontWeight="">
              Password
            </Typography>

            <div className="flex flex-col">
              <Typography fontSize="1.5rem" marginLeft="1rem">
                Password Lama
              </Typography>
              <Input sx={{ width: "30em", height: "2rem", marginTop: "0.5rem" }} placeholder="Masukkan password" />
            </div>
          </div>

          <hr className="w-52 h-0.5 bg-black mt-5 mb-5" />

          {/* Hapus Akun & Input tetap sejajar */}
          <div className="flex items-center gap-[18rem]">
            <button onClick={handleDeleteAccount}>
              <Typography fontSize={25} fontWeight="" sx={{ color: "red" }}>
                Hapus Akun
              </Typography>
            </button>

            <div className="flex flex-col">
              <Typography fontSize={25} marginLeft="1rem">
                Password Baru
              </Typography>
              <Input sx={{ width: "30em", height: "2rem", marginTop: "0.5rem" }} placeholder="Masukkan password" />
              
              <div className="flex mt-10 justify-between">
              <Typography marginTop={1} marginLeft={1}>Minimal 6 Karakter</Typography>
              <button className="flex w-[120px] h-[50px] bg-[#154431] rounded-full items-center justify-center
              text-white">Ubah</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordManagement;
