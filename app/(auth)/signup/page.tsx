import React from "react";
import type { Metadata } from "next";
import SignUpPage from "@/page/auth/signin";


export const metadata: Metadata = {
  title: "SignUp user",
  description: "HRMS - Register user",
};

export default function SignIn() {
  return (
    <div className="w-full h-full">
      <SignUpPage />
    </div>
  );
}
