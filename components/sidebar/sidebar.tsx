"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { navItems } from "@/config/nav";
import MenuLabel from "./menu-label";
import MenuItem from "./menu-item";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeMenu, setActiveMenu] = React.useState<string>("");
  const pathname = usePathname();

  // handle item click
  const handleItemClick = (subItem: any) => {
    if (subItem.isExpandable) {
      setIsOpen(!isOpen);
      setActiveMenu(subItem.label);
    }
  };

  // handle navigation
  const handleNavigation = (route: string) => {
    // 
  };

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
              <MenuLabel text={item.label} />

              {/* Sub Section */}
              {item.subSections.map((subItem) => (
                <MenuItem
                  key={subItem.label}
                  subItem={subItem}
                  pathname={pathname}
                  activeMenu={activeMenu}
                  isOpen={isOpen}
                  handleItemClick={handleItemClick}
                />
              ))}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
