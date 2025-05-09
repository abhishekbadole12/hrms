"use client";

import React from "react";
//
import ChatSidebarHeader from "./chat-sidebar-header";
import Input from "@/components/custom/input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import ProfilePicture from "@/components/header/profile-picture";
import clsx from "clsx";
//

export default function ChatSidebar() {
  const isActive = true;

  return (
    <div className="w-4/12 h-full p-4 border-r-[.85px] border-zinc-200">
      {/* Header */}
      <ChatSidebarHeader isActive />

      {/* Search */}
      <Input
        name=""
        placeholder="search name"
        Icon={<FontAwesomeIcon icon={faSearch} />}
        onChange={() => {}}
      />

      {/* chats */}
      <div className="flex-1 h-[calc(100%-16%)] mt-4 overflow-y-auto">
        {/* chat */}
        {[...Array(20)].map((_, i) => (
          <div
            className={clsx(
              "flex items-center gap-4 p-2 mb-1 rounded-lg cursor-pointer hover:bg-zinc-50 ",
              {
                "bg-zinc-100": i === 3,
              }
            )}
            key={i}
          >
            <ProfilePicture />
            <div>
              <p className="text-sm font-semibold text-zinc-600">
                Abhishek Badole, {i}
              </p>
              <p className="text-sm text-zinc-400">Hi, there </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
