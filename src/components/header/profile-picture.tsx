import Image from "next/image";
import React from "react";

export default function ProfilePicture({ src }: { src?: string }) {
  if (src) {
    return (
      <div className="border-[1px] border-slate-200 p-[2px] rounded-full overflow-hidden">
        <Image
          src={"/profile.jpeg"}
          alt="Profile picture"
          className="w-10 h-10 rounded-full"
          width={40}
          height={40}
        />
      </div>
    );
  }

  return (
    <div className="border-[1px] border-slate-200 p-[2px] rounded-full overflow-hidden">
      <div className="w-10 h-10 bg-zinc-200 rounded-full" />
    </div>
  );
}
