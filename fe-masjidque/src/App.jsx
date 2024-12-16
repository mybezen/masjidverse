import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/admin/Dashboard";
import ProfileView from "./pages/ProfileView";
import Incoming from "./pages/Incoming";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/admin/" element={<AdminDashboard/>} />
        <Route path='/profile' element={<ProfileView />}/>
        <Route path="/incoming" element={<Incoming/>}></Route>
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;