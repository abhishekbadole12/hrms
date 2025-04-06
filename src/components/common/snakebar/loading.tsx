"use client";

import React, { useEffect, useState } from "react";
import clsx from "clsx";
import "./loading.css";

interface LoadingProps {
  size: "sm" | "lg";
}

export default function Loading({ size }: LoadingProps) {
  const [loading, setLoading] = useState(true);

  const containerSize = size === "sm" ? "w-1/3" : "";

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={clsx(
        "flex flex-col items-center justify-center",
        containerSize
      )}
    >
      <div
        className={clsx(
          "relative w-full h-2 bg-gray-200 overflow-hidden rounded-md mb-2"
        )}
      >
        <div className="loader-bar"></div>
      </div>

      <p className="text-sm font-medium text-gray-700 text-center">
        Loading...
      </p>
    </div>
  );
}
