"use client";

import BreadCrumb from "@/components/bread-crumb/bread-crumb";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/dashboard");
  }, []);

  return null;
}
