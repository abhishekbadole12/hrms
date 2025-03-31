import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type HeaderIconButtonProps = {
  icon: IconProp;
  onClick?: () => void;
};

export default function HeaderIconButton({
  icon,
  onClick,
}: HeaderIconButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-10 h-10 flex items-center justify-center rounded-full p-3 hover:bg-slate-100 transition duration-25 ease-in-out"
    >
      <FontAwesomeIcon icon={icon} className="text-lg text-zinc-400" />
    </button>
  );
}
