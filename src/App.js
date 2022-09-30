import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import SignUp from "./components/SignUp/SignUp";
import Dashboard from "./components/Dashboard/Dashboard";
import MyNode from "./components/MyNode/MyNode";
import Investments from "./components/Investments/Investments";
import FAQ from "./components/FAQ/FAQ";
import Referral from "./components/Referral/Referral";
import Logo from "./components/Logo/Logo";
import "./components/Login/SignUp.css";
import OTP from "./components/OTP/OTP";
import { Toaster } from "react-hot-toast";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword.jsx";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import { useEffect } from "react";
function App() {
  const navigate = useNavigate();
  const checkToken = () => {
    const getDetelis = JSON.parse(localStorage.getItem("token"));
    if (!getDetelis) {
      navigate("/login");
    }
  };

  useEffect(() => {
    checkToken();
  }, []);
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="flex  h-full">
        <Navbar />

        <div className="ml-[54px] w-full h-screen  h min-h-screen  bg ">
          <Logo />
          <Routes>
            {/* <Route element={<Protected />}>              
            </Route> */}
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgetpassword" element={<ForgetPassword />} />
            <Route path="/resetpassword" element={<ResetPassword />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/myNode" element={<MyNode />} />
            <Route path="/investments" element={<Investments />} />
            <Route path="/referral" element={<Referral />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/otp" element={<OTP />} />
            <Route path="/logo" element={<Logo />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
