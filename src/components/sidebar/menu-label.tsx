import React from "react";

export default function MenuLabel({ text }: { text: string }) {
  return (
    <p className="text-xs font-semibold opacity-60 uppercase text-nav-label mb-3 ml-1">
      {text}
    </p>
  );
}
