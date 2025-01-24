"use client";

import { navItems } from "@/config/nav";
import { Icons } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  const [activeMenu, setActiveMenu] = React.useState<string>("Employee");
  const pathname = usePathname();

  return (
    <div className="min-w-[20%] h-full bg-slate-100 rounded-lg px-4 shadow-lg">
      {/* Company Logo */}
      <div className="w-full border-b-2 border-slate-200 py-4">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          COMPANY
        </h1>
      </div>

      {/* Nav List */}
      <div className="py-6 px-2">
        <ul>
          {navItems.map((item) => (
            <li key={item.label} className="mb-5">
              {/* Label */}
              <p className="text-xs font-semibold opacity-60 uppercase text-nav-label mb-3 ml-1">
                {item.label}
              </p>

              {/* Sub Section */}
              {item.subSections.map((subItem) => (
                <div key={subItem.label} className="mb-1">
                  <div
                    onClick={() => {
                      // if (subItem.isExpandable) {
                        setIsOpen(!isOpen);
                        setActiveMenu(subItem.label);
                      // }
                    }}
                    className={`flex items-center gap-2 p-3 rounded-md ${
                      pathname === subItem.route || activeMenu === subItem.label
                        ? "text-primary bg-slate-200"
                        : "text-gray-800"
                    }`}
                  >
                    <subItem.iconComponent />
                    <span className="text-sm">{subItem.label}</span>

                    {/* Dropdown arrow */}
                    {subItem.isExpandable && (
                      <Icons.Arrow
                        className={`ml-auto ${
                          subItem.route === pathname ? "" : ""
                        }`}
                      />
                    )}
                  </div>

                  {/* Dropdown menu */}
                  {isOpen && activeMenu === subItem.label && (
                    <ul className="ml-5">
                      {subItem.subSections?.map((subSection) => (
                        <li key={subSection.label}>
                          <Link
                            href={subSection.route}
                            className={`flex items-center gap-2 py-2 px-3 mt-1 rounded-md ${
                              pathname === subSection.route
                                ? "bg-slate-200 text-primary"
                                : "text-gray-800"
                            }`}
                          >
                            <Icons.Dashboard/>
                            <span className="text-sm">{subSection.label}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
