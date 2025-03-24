"use client";

import React, { useEffect, useState } from "react";
import "./loading.css";

export default function Loading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full p-4 rounded-md">
      <div className="relative w-full h-2 bg-gray-200 overflow-hidden rounded-md mb-2">
        <div className="loader-bar"></div>
      </div>

      <p className="text-sm font-medium text-gray-700 text-center">Loading...</p>
    </div>
  );
}
