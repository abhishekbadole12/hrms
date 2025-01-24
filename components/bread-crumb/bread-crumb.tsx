import React from "react";

interface BreadCrumbProps {
  title: string;
}

export default function BreadCrumb({ title }: BreadCrumbProps) {
  return (
    <div className="w-full">
      <p className="text-2xl font-semibold text-primary mb-2">{title}</p>

      <ul className="flex items-center space-x-2">
        <li className="text-sm text-gray-500">Home</li>
        <li className="text-sm text-gray-500">.</li>
        <li className="text-sm text-gray-500">{title}</li>
      </ul>
    </div>
  );
}
