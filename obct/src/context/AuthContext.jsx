import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(() => {
    const savedAuthStatus = localStorage.getItem("authenticated");
    return savedAuthStatus === "true"; // Convert string to boolean
  });

  useEffect(() => {
    localStorage.setItem("authenticated", authenticated);
  }, [authenticated]);

  return (
    <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
