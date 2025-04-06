"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
//
import { getNavItems } from "@/config/nav";
//
import MenuLabel from "./menu-label";
import MenuItem from "./menu-item";

interface SidebarProps {
  user_id: string;
}

export const Sidebar = ({ user_id }: SidebarProps) => {
  const [isOpened, setIsOpened] = React.useState<boolean>(false);
  const [activeMenu, setActiveMenu] = React.useState<string>("");
  const pathname = usePathname();
  const navigate = useRouter();

  const navItems = getNavItems(user_id);

  // handle item click
  const handleItemClick = (subItem: any) => {
    if (subItem.isExpandable) {
      setActiveMenu(subItem.label);
      setIsOpened(!isOpened);
      return;
    }
    navigate.push(subItem.route);
    setIsOpened(!isOpened);
  };

  return (
    <div className="min-w-[20%] min-h-full bg-slate-100 border border-slate-100 rounded-lg px-4 shadow-xl">
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
              {item.section.map((subItem) => {
                return (
                  <MenuItem
                    key={subItem.label}
                    subItem={subItem}
                    pathname={pathname}
                    isOpened={isOpened}
                    activeMenu={activeMenu}
                    handleItemClick={handleItemClick}
                  />
                );
              })}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
