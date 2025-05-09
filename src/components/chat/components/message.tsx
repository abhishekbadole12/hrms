import clsx from "clsx";
import React from "react";

interface IMessageProps {
  text: string;
  isCurrentUser: boolean;
}

export default function Message({
  text,
  isCurrentUser = false,
}: IMessageProps) {
  return (
    <div
      className={clsx("relative w-fit max-w-xs mb-1", {
        "ml-auto": isCurrentUser,
      })}
    >
      {/* Chat bubble */}
      <div
        className={clsx(
          "py-[6px] px-[12px] rounded-xl mb-1 relative",
          {
            "bg-green-300 rounded-tr-none": isCurrentUser,
          },
          {
            "bg-red-300 rounded-tl-none": !isCurrentUser,
          }
        )}
      >
        <p className="text-sm font-medium">{text}</p>
        <p className="text-xs text-right">12:00 pm</p>

        {/* Tail */}
        <div
          className={clsx(
            "absolute top-0 w-0 h-0 border-t-[0px] border-b-[10px] border-transparent",
            {
              "right-[-10px] border-l-[15px] border-l-green-300": isCurrentUser,
              "left-[-10px] border-r-[15px] border-r-red-300": !isCurrentUser,
            }
          )}
        />
      </div>
    </div>
  );
}
