import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [userRole, setUserRole] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedRole = localStorage.getItem("bharatwork_role");
    const storedUser = localStorage.getItem("bharatwork_user");

    if (storedRole && ["employer", "labour"].includes(storedRole)) {
      setUserRole(storedRole);
    }

    if (storedUser) {
      setIsAuthenticated(true);
    }

    setIsLoading(false);
  }, []);

  const setRole = (role) => {
    if (["employer", "labour"].includes(role)) {
      setUserRole(role);
      localStorage.setItem("bharatwork_role", role);
    }
  };

  const login = (userData) => {
    localStorage.setItem("bharatwork_user", JSON.stringify(userData));
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("bharatwork_user");
    setIsAuthenticated(false);
  };

  const clearRole = () => {
    setUserRole(null);
    localStorage.removeItem("bharatwork_role");
  };

  const value = {
    userRole,
    setRole,
    clearRole,
    isAuthenticated,
    login,
    logout,
    isLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
