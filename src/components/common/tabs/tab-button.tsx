import { TabOption } from "@/utils/constant";
import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import React from "react";

interface ITabButton {
  tab: TabOption;
  isActive: boolean;
  onClick: () => void;
}

export function TabButton({ tab, isActive, onClick }: ITabButton) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "flex items-center text-sm text-zinc-500 font-medium px-1.5 py-3 border-b-2 border-transparent focus:outline-none",
        { "text-zinc-600 border-zinc-600 ": isActive }
      )}
    >
      <FontAwesomeIcon icon={faBuildingColumns} className="text-[18px] mr-3" />
      {tab.label}
    </button>
  );
}
