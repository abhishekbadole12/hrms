"use client";

import { loginUser } from "@/services/auth";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

interface User {
  user_id: number;
  email: string;
  user_role: string;
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

  const router = useRouter();

  // Function to log in the user
  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      const response = await loginUser({ email, password });

      if (response.user) {
        setUser(response?.user);
        setIsLoggedIn(true);
        router.push("/dashboard");
      } else {
        console.error("Login failed:", response.error);
      }
    } catch (error) {
      console.error("Error logging in:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // console.log(cookieStore);
  }, []);

  // logout function
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, isLoggedIn }}>
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
