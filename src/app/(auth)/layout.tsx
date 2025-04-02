import React from "react";
import PublicHeader from "@/components/header/public-header";
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
      <section className="w-full h-full py-2 px-12 flex flex-col min-h-0">
        <PublicHeader />
        <div className="px-10">{children}</div>
      </section>
    </div>
  );
}
