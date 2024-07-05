import { Navigate } from "react-router-dom";
import React from "react";

const ProtectedRoute = ({ user, children }) => {
  return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
