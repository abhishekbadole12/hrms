"use client";

import BreadCrumb from "@/components/bread-crumb/bread-crumb";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/dashboard");
  }, []);

  return (
    <div className="w-full h-full px-10 py-5 ">
      <BreadCrumb title="Dashboard" />
    </div>
  );
}
