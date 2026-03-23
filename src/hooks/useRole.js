import { useState, useEffect } from "react";

export const useRole = () => {
  const [role, setRole] = useState(null);

  useEffect(() => {
    const storedRole = localStorage.getItem("bharatwork_role");
    if (storedRole && ["employer", "labour"].includes(storedRole)) {
      setRole(storedRole);
    }
  }, []);

  const persistRole = (newRole) => {
    if (["employer", "labour"].includes(newRole)) {
      setRole(newRole);
      localStorage.setItem("bharatwork_role", newRole);
    }
  };

  const clearRole = () => {
    setRole(null);
    localStorage.removeItem("bharatwork_role");
  };

  return { role, persistRole, clearRole };
};
