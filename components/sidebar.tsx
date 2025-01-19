import Image from "next/image";

import React from "react";

export const Sidebar = () => {


  return (
    <div className="w-[24%] h-full border border-zinc-200 rounded">
      <div className="w-full">
        {/* <Image
          src="/company-logo.jpg"
          fill
          sizes="(max-width: 100px) 100vw"
          alt="Picture of the author"
        /> */}
        <h1>CNAME</h1>
      </div>
      
      <div className="py-4 px-3">
        <ul>
          <li>
            <p>dashboard</p>
          </li>
         
        </ul>
      </div>
    </div>
  );
};
