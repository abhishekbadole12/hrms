import Image from "next/image";
import React from "react";

interface IProfilePictureProps {
  size?: number;
  src?: any;
}

export default function ProfilePicture({
  size = 40,
  src,
}: IProfilePictureProps) {
  const imageSize = `${size}px`;

  if (src) {
    return (
      <div className="border-[1px] border-slate-200 p-[2px] rounded-full overflow-hidden">
        <Image
          src={"/profile.jpeg"}
          alt="Profile picture"
          className="w-10 h-10 rounded-full"
          width={size}
          height={size}
        />
      </div>
    );
  }

  return (
    <div className="w-fit border-[1px] border-slate-200 p-[2px] rounded-full overflow-hidden">
      <div
        className="w-10 h-10 bg-zinc-200 rounded-full"
        style={{ width: imageSize, height: imageSize }}
      />
    </div>
  );
}
