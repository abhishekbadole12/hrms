import React from "react";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface BreadCrumbProps {
  title: string;
}

export default function BreadCrumb({ title }: BreadCrumbProps) {
  return (
    <div className="w-full mb-8">
      <p className="text-2xl font-semibold text-primary mb-[6px]">{title}</p>

      <ul className="flex items-center space-x-2 text-sm text-primary">
        <li className="">Overview</li>
        <li className="">
          <FontAwesomeIcon icon={faCircle} className="w-[5px] h-[5px] text-primary" />
        </li>
        <li className="">{title}</li>
      </ul>
    </div>
  );
}
