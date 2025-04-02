import React from "react";
import HeaderIconButton from "./header-icon-button";
import ProfilePicture from "./profile-picture";
import { faCommentDots, faGear } from "@fortawesome/free-solid-svg-icons";

export default function PublicHeader() {
  return (
    <header className="w-full flex items-center justify-between mb-5">
      <div className="flex items-center gap-2 ml-auto">
        <HeaderIconButton icon={faCommentDots} />
        <HeaderIconButton icon={faGear} />

        <ProfilePicture />
      </div>
    </header>
  );
}
