import React from "react";
import Image from "next/image";
//
import MobileIcon from "@/assets/images/mobile.jpg";
import WhatsAppIcon from "@/assets/images/whatsapp.png";

const SocialIconStyle =
  "w-[72px] h-[72px] overflow-hidden p-3 rounded-full border-[1px] border-gray-200 flex justify-center items-center cursor-pointer transition-transform duration-300 ease-out hover:scale-110 hover:bg-gray-50";

export default function SocialIconContainer() {
  return (
    <div className="flex justify-center items-center gap-4 mb-6 text-black">
      <div className={SocialIconStyle}>
        <Image src={MobileIcon} width={44} height={44} alt="mobile-icon" />
      </div>

      <div className={SocialIconStyle}>
        <Image src={WhatsAppIcon} width={36} height={36} alt="mobile-icon" />
      </div>

      <div className={SocialIconStyle}>
        <Image src={MobileIcon} width={44} height={44} alt="mobile-icon" />
      </div>
    </div>
  );
}
