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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
