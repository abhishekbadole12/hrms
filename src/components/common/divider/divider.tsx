import clsx from "clsx";
import React from "react";

interface DividerProps {
  className?: string;
  color?: string;
  thickness?: string;
  margin?: string;
  orientation?: "horizontal" | "vertical";
}

export default function Divider({
  className,
  color = "bg-zinc-200",
  thickness,
  margin,
  orientation = "horizontal",
}: DividerProps) {
  
  if (orientation === "vertical") {
    return (
      <div className={clsx("flex justify-center items-center", className)}>
        <div className={clsx(thickness ?? "w-px", "h-8", color)} />
      </div>
    );
  }

  return (
    <div
      className={clsx(
        "w-full",
        thickness ?? "h-px",
        margin ?? "my-4",
        color,
        className
      )}
    />
  );
}
