import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/admin/Dashboard";
import ProfileView from "./pages/ProfileView";
import Incoming from "./pages/Incoming";
import RegisterPage from "./views/Authentication/SignUp";
import LoginPage from "./views/Authentication/SignIn";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/admin/" element={<AdminDashboard/>} />
        <Route path='/profile' element={<ProfileView />}/>
        <Route path="/incoming" element={<Incoming/>}></Route>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        
        
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;