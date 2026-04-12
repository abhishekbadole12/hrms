import {
  faAngleRight,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import MenuSubItem from "./menu-sub-item";
interface SubSection {
  label: string;
  route: string;
}
interface SubItem {
  label: string;
  route: string;
  iconComponent: IconDefinition;
  isExpandable?: boolean;
  subSections?: SubSection[];
  //
  badge?: string;
  highlight?: boolean;
  highlightColor?: string;
  //
  disabled?: boolean
}
interface MenuItemProps {
  subItem: SubItem;
  pathname: string;
  isOpened: boolean;
  activeMenu: string;
  handleItemClick: (item: SubItem) => void;
}

export default function MenuItem({
  subItem,
  pathname,
  isOpened,
  activeMenu,
  handleItemClick,
}: MenuItemProps) {
  return (
    <div className="mb-1">
      <div
        onClick={() => handleItemClick(subItem)}
        className={`flex items-center gap-3 py-3 px-4 rounded-md 
  ${subItem.disabled ? "opacity-70 cursor-not-allowed" : "cursor-pointer"}
  ${pathname.includes(subItem.route)
            ? "bg-slate-200 text-blue-800 font-medium"
            : "text-gray-800"
          }`}
      >
        <FontAwesomeIcon icon={subItem.iconComponent} className="text-sm" />
        {/* <span className="text-sm">{subItem.label}</span> */}

        <div className="flex items-center gap-2">
          <span className="text-sm">{subItem.label}</span>

          {subItem.badge && (
            <span
              className={`text-[10px] px-2 py-[2px] rounded-full ${subItem.highlightColor || "bg-gray-200 text-gray-700"
                }`}
            >
              {subItem.badge}
            </span>
          )}
        </div>

        {/* Dropdown arrow */}
        {subItem.isExpandable && (
          <FontAwesomeIcon
            icon={faAngleRight}
            className={`ml-auto text-xs text-nav-label opacity-60 ${isOpened && activeMenu === subItem.label ? "rotate-90 opacity-100 text-blue-800" : ""
              }`}
          />
        )}
      </div>

      {/* Menu Items */}
      {isOpened && activeMenu === subItem.label && (
        <ul className="ml-6">
          {subItem.subSections?.map((subSection) => {
            const completePath = subItem.route + subSection.route;
            return (
              <MenuSubItem
                key={subSection.label}
                subSection={subSection}
                pathname={completePath}
              />
            );
          })}
        </ul>
      )}
      {/* Dropdown menu */}
    </div>
  );
}
