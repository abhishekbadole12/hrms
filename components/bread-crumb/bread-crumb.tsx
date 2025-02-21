"use client";

import React from "react";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

interface BreadCrumbProps {
  title: string;
}

export default function BreadCrumb({ title }: BreadCrumbProps) {
  const pathname = usePathname();
  const paths = pathname.split("/").filter(Boolean);

  return (
    <div className="w-full mb-10">
      <p className="text-2xl font-semibold text-primary tracking-tight mb-4">
        {title}
      </p>

      <ul className="flex items-center space-x-5 text-sm text-primary">
        <li className="hover:underline">
          <Link href="/">Overview</Link>
        </li>

        <li className="">
          <FontAwesomeIcon
            icon={faCircle}
            className="w-[5px] h-[5px] text-secondary my-auto"
          />
        </li>

        {paths.map((path, index) => {
          const isLast = index === paths.length - 1;

          return (
            <React.Fragment key={path}>
              <li
                className={clsx("capitalize", {
                  "text-secondary no-underline": isLast,
                  "hover:underline": !isLast,
                })}
              >
                <Link href={path} aria-current={isLast ? "page" : undefined}>{path}</Link>
              </li>

              {/* If not last then no bullet point */}
              {!isLast && (
                <li>
                  <FontAwesomeIcon
                    icon={faCircle}
                    className="w-[5px] h-[5px] text-secondary my-auto"
                  />
                </li>
              )}
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
}
