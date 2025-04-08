import React from "react";
import clsx from "clsx";
//
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//
import { ITabOption } from "@/utils/constant";

interface ITabButton {
  tab: ITabOption;
  isActive: boolean;
  onClick: () => void;
}

export function TabButton({ tab, isActive, onClick }: ITabButton) {
  const { name, Icon } = tab;

  return (
    <button
      onClick={onClick}
      className={clsx(
        "flex items-center text-sm text-zinc-500 font-medium px-1.5 py-3 border-b-2 border-transparent focus:outline-none",
        { "text-zinc-600 border-zinc-600 ": isActive }
      )}
    >
      <FontAwesomeIcon icon={Icon} className="text-[18px] mr-3" />
      {name}
    </button>
  );
}
