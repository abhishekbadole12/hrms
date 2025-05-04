import React from "react";
import clsx from "clsx";
//
import PrivateHeader from "@/components/header/private-header";
import SidebarWrapper from "@/components/wrapper/sidebar-wrapper";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={clsx("h-screen flex p-4 pr-0", {
        "bg-[#f9f9f9]": true,
      })}
    >
      <SidebarWrapper />

      <section className="w-full h-full py-2 px-12 flex flex-col min-h-0">
        <PrivateHeader />

        <div className="px-10 h-full overflow-auto">{children}</div>
      </section>
    </div>
  );
}
