import ProfilePicture from "@/components/header/profile-picture";
import React from "react";

export default function ChatMainHeader() {
  return (
    <div className="flex items-center gap-4 py-3 px-4 border-b-[.85px] ">
      <ProfilePicture size={40} />

      <div>
        <p className="text-sm font-semibold text-zinc-600">Abhishek Badole,</p>
        <p className="text-sm text-zinc-400">Hi, there </p>
      </div>
    </div>
  );
}
