import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a context
const AuthContext = createContext();

// Provide a way to use the context
export function useAuth() {
  return useContext(AuthContext);
}

// Create a provider component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if token and roleId are available in local storage
    const token = localStorage.getItem('token');
    const roleId = localStorage.getItem('roleId');
    if (token && roleId) {
      // Set the user state with token and roleId
      setUser({ token, roleId: Number(roleId) });
    }
  }, []);

  const login = (token, roleId) => {
    console.log('Logging in with token:', token); // Debugging log
    console.log('Logging in with roleId:', roleId); // Debugging log
    localStorage.setItem('token', token);
    localStorage.setItem('roleId', roleId);
    setUser({ token, roleId: Number(roleId) });
  };
  

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('roleId');
    setUser(null);
  };

  const value = {
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}