import React from "react";
import type { Metadata } from "next";
import LoginPage from "@/page/auth/login";

export const metadata: Metadata = {
  title: "Login user",
  description: "HRMS - Login user",
};

export default function Login() {
  return (
    <div className="w-full h-full">
      <LoginPage />
    </div>
  );
}
