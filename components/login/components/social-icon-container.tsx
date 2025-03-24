import SocialIcon from "@/components/common/social-button";
import { faB } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SocialIconStyle =
  "w-5 h-5 p-8 rounded-full border-[1px] border-gray-200 flex justify-center items-center text-2xl hover:bg-gray-50 hover:text-3xl transition-all";

export default function SocialIconContainer() {
  return (
    <div className="flex justify-center items-center gap-4 mb-6 text-black">
      <SocialIcon href="#" className={SocialIconStyle}>
        <FontAwesomeIcon icon={faB} className="" />
      </SocialIcon>

      <SocialIcon href="#" className={SocialIconStyle}>
        <FontAwesomeIcon icon={faB} className="" />
      </SocialIcon>

      <SocialIcon href="#" className={SocialIconStyle}>
        <FontAwesomeIcon icon={faB} className="" />
      </SocialIcon>
    </div>
  );
}
