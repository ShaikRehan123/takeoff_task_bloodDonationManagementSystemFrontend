import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Register from "./pages/Signup";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login";
import Dashboard_Profile from "./pages/UserProfile";
import UserHospitals from "./pages/UserHospitals";
import BloodBank from "./pages/UserBloodBanks";
import UserDonors from "./pages/UserDonors";
import AdminHospitals from "./pages/AdminHospitals";
import AdminBloodBanks from "./pages/AdminBloodBanks";
function App() {
  return (
    <>
      <Toaster position="top-left" reverseOrder={false} />
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user_profile" element={<Dashboard_Profile />} />
          <Route path="/user_hospitals" element={<UserHospitals />} />
          <Route path="/user_bloodbanks" element={<BloodBank />} />
          <Route path="/user_donors" element={<UserDonors />} />
          <Route path="/admin_hospitals" element={<AdminHospitals />} />
          <Route path="/admin_bloodbanks" element={<AdminBloodBanks />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
