import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const isAuthenticated = !!user;

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('authUser'));
    if (storedUser) setUser(storedUser);
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('authUser', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('authUser');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
