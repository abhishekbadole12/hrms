import React from "react";
import clsx from "clsx";
//
import ProfilePicture from "@/components/header/profile-picture";
//
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//

interface IChatSidebarHeaderProps {
  isActive: boolean;
}

export default function ChatSidebarHeader({
  isActive,
}: IChatSidebarHeaderProps) {
  return (
    <div className="flex items-end justify-start mb-5">
      <ProfilePicture size={44} />

      <button className="ml-3 mb-[2px]">
        <FontAwesomeIcon
          icon={faPowerOff}
          className={clsx("text-sm", {
            "text-red-400 hover:text-red-500": !isActive,
            "text-green-400 hover:text-green-500": isActive,
          })}
        />
      </button>
    </div>
  );
}
