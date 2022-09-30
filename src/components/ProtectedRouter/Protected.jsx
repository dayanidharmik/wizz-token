import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selecUser } from "../Feature/User";

const useAuth = () => {
  const userData = useSelector(selecUser);
  if (userData) {
    return true;
  } else {
    return false;
  }
};
const Protected = () => {
  const auth = useAuth();
  return auth ? <Outlet /> : <Navigate to="/" />;
};

export default Protected;
