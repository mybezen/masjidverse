import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/admin/Dashboard";
import ProfileView from "./pages/ProfileView";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/admin/" element={<AdminDashboard/>} />
        <Route path='/profile' element={<ProfileView />}/>
        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;