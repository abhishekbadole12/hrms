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
}

interface MenuItemProps {
  subItem: SubItem;
  pathname: string;
  activeMenu: string;
  isOpen: boolean;
  handleItemClick: (item: SubItem) => void;
}

export default function MenuItem({
  subItem,
  pathname,
  activeMenu,
  isOpen,
  handleItemClick,
}: MenuItemProps) {
  return (
    <div className="mb-1">
      <div
        onClick={() => handleItemClick(subItem)}
        className={`flex items-center gap-3 py-3 px-4 rounded-md cursor-pointer ${
          pathname === subItem.route || activeMenu === subItem.label
            ? "bg-slate-200 text-blue-800 font-medium"
            : "text-gray-800"
        }`}
      >
        <FontAwesomeIcon icon={subItem.iconComponent} className="text-sm" />
        <span className="text-sm">{subItem.label}</span>

        {/* Dropdown arrow */}
        {subItem.isExpandable && (
          <FontAwesomeIcon
            icon={faAngleRight}
            className={`ml-auto text-sm text-nav-label opacity-60 ${
              subItem.route === pathname ? "-rotate-90 opacity-100" : ""
            }`}
          />
        )}
      </div>

      {/* Dropdown menu */}
      {isOpen && activeMenu === subItem.label && (
        <ul className="ml-6">
          {subItem.subSections?.map((subSection) => (
            <MenuSubItem
              key={subSection.label}
              subSection={subSection}
              pathname={pathname}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
