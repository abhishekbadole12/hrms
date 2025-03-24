"use client";

import {
  faBell,
  faCommentDots,
  faGear,
  faSearch,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ProfilePicture from "./profile-picture";
import HeaderIconButton from "./header-icon-button";
import InputContainer from "./input-container";
import { useAuth } from "@/context/AuthContext";
import Popover from "../modal/popover";
import PopoverItem from "../modal/popover-item";

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  const { user, loading, isLoggedIn } = useAuth();

  const handleIconClick = () => {
    console.log("Icon clicked");
  };


  return (
    <header className="w-full flex items-center justify-between mb-5">
      {/* Search */}
      {isOpen && <InputContainer />}

      {/* Right */}
      <div className="flex items-center gap-2 ml-auto">
        {isLoggedIn ? (
          <>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-1 bg-slate-50 py-2.5 px-3 rounded-lg ml-4
               hover:bg-slate-100 transition delay-50 duration-25 ease-in-out"
            >
              <FontAwesomeIcon
                icon={faSearch}
                className="text-base text-slate-400"
              />
              <span className="text-sm text-primary font-medium">Search</span>
            </button>
            <HeaderIconButton icon={faBell} onClick={handleIconClick} />
            <HeaderIconButton icon={faUserGroup} onClick={handleIconClick} />
            <HeaderIconButton icon={faCommentDots} onClick={handleIconClick} />

            <Popover
              Icon={<FontAwesomeIcon icon={faGear} className="text-gray-400" />}
              position="bottom"
              containerStyles="mr-2"
            >
              <PopoverItem>Profile</PopoverItem>
              <PopoverItem>Settings</PopoverItem>
              <PopoverItem>Logout</PopoverItem>
            </Popover>

            <ProfilePicture src="/profile.jpeg" />
          </>
        ) : ( // Not logged in
          <>
            <HeaderIconButton icon={faCommentDots} onClick={handleIconClick} />
            <HeaderIconButton icon={faGear} onClick={handleIconClick} />

            <ProfilePicture />
          </>
        )}
      </div>
    </header>
  );
}
