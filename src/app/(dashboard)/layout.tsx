import React from "react";
import PrivateHeader from "@/components/header/private-header";
import { Sidebar } from "@/components/sidebar/sidebar";
import clsx from "clsx";

export default function Authlayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={clsx("h-full flex p-4 pr-0", {
        "bg-[#f9f9f9]": true,
      })}
    >
      <Sidebar />

      <section className="w-full h-full py-2 px-10 flex flex-col min-h-0">
        <PrivateHeader />

        {children}
      </section>
    </div>
  );
}
