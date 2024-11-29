// src/components/PrivateRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Import the authentication context

const PrivateRoute = ({ element }) => {
  const { authenticated } = useAuth();

  // If the user is not authenticated, redirect to the login page
  return authenticated ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
