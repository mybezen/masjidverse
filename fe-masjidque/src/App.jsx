import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./views/pages/Dashboard";
import AdminDashboard from "./views/pages/admin/Dashboard";
import ProfileView from "./views/pages/ProfileView";
import Incoming from "./views/pages/Incoming";
import RegisterPage from "./views/Authentication/SignUp";
import LoginPage from "./views/Authentication/SignIn";
import FeatureBoard from "./views/pages/FeatureBoard";
import MosqueProfile from "./views/pages/MosqueProfile";
import EventUpcoming from "./views/pages/EventUpcoming";
import NewEvent from "./views/pages/NewEvent";
import MasjidFinance from "./views/pages/MasjidFinance";
import ListMosque from "./views/pages/ListMosque";
import Asset from "./views/pages/Asset";
import ActivityManagement from "./views/pages/admin/ActivityManagement";
import Organisasi from "./views/pages/Organisasi";
import RentAsset from "./views/pages/RentAsset";
import PengeluaranManagement from "./views/pages/admin/PengeluaranManagement";
import ProfileManagement from "./views/pages/admin/ProfileManagement";
import ItemsManagement from "./views/pages/admin/ItemsManagement";
import UserManagement from "./views/pages/admin/UserManagement";
import RequestManagement from "./views/pages/admin/RequestManagement";
import PemasukanManagement from "./views/pages/admin/PemasukanManagement";
import UpComingEvent from "./views/pages/UpComingEvent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/admin/" element={<AdminDashboard />} />
        <Route path="/profile" element={<ProfileView />} />
        <Route path="/incoming" element={<Incoming />}></Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/feature" element={<FeatureBoard />} />
        <Route path="/mosqueprofile" element={<MosqueProfile />} />
        <Route path="/eventupcoming" element={<EventUpcoming />} />
        <Route path="/newevent" element={<NewEvent />} />
        <Route path="/keuanganmasjid" element={<MasjidFinance />} />
        <Route path="/listmasjid" element={<ListMosque />} />
        <Route path="/organisasi" element={<Organisasi />} />
        <Route path="/assetmasjid" element={<Asset />} />
        <Route path="/peminjaman" element={<RentAsset />} />
        <Route path="/kegiatanakandatang" element={<UpComingEvent />} />

        <Route path="/admin/activity" element={<ActivityManagement />} />
        <Route path="/admin/pengeluaran" element={<PengeluaranManagement />} />
        <Route path="/admin/pemasukan" element={<PemasukanManagement />} />
        <Route path="/admin/profiles" element={<ProfileManagement />} />
        <Route path="/admin/items" element={<ItemsManagement />} />
        <Route path="/admin/users" element={<UserManagement />} />
        <Route path="/admin/request" element={<RequestManagement />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
