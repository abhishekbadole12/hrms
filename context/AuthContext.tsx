"use client";

import React, { useEffect } from "react";

interface User {
  email: string;
  password: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
  loading: boolean;
  isLoggedIn: boolean;
}

const AuthContext = React.createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<User | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);


  const login = (email: string, password: string) => {
    setLoading(true);
    setTimeout(() => {
      setUser({ email, password });
      setLoading(false);
      setIsLoggedIn(true);
    }, 1000);
  };

  useEffect(() => {
    async function fetchUser() {
      setTimeout(() => {
        setUser({ email: "test@gmail.com", password: "test@123" });
        setLoading(false);
        setIsLoggedIn(true);
      }, 500);
    }
    fetchUser();
  }, []);

  // logout function
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login: () => {}, logout, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
