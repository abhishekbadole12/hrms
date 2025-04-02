import React from "react";
import clsx from "clsx";
// import { useAuth } from "@/context/AuthContext";
import { Sidebar } from "./sidebar/sidebar";
import Header from "./header/header";
import { verifySession } from "@/lib/session";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-[100vw] h-[100vh]">
      <div
        className={clsx("h-full flex p-4 pr-0", {
          "bg-[#f9f9f9]": true,
        })}
      >
        {false && <Sidebar />}

        <section className="w-full h-full py-2 px-10 flex flex-col min-h-0">
          <Header />
          <div className="flex-grow px-20 overflow-auto">{children}</div>
        </section>
      </div>
    </main>
  );
}
