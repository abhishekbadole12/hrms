import React from "react";
import DashboardPage from "@/page/overview/dashboard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "HRMS Dashboard",
};

export default function Dashboard() {
  return (
    <div>
      <DashboardPage />
    </div>
  );
}
