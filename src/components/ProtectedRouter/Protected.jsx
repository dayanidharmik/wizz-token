import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  let userData = JSON.parse(localStorage.getItem("token"));
  if (userData) {
    return true;
  } else {
    return false;
  }
};
const Protected = () => {
  const auth = useAuth();
  return auth ? <Navigate to="/" /> : <Outlet />;
};

export default Protected;
