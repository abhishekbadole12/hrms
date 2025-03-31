import React from "react";
import Effect from "@/public/background-effect.png";

let styles = {
  width: "80%",
  height: "100%",
  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.05)), url("./background-effect.png")`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "top",
  backgroundSize: "cover",
  backgroundColor: "#fff",
  margin: "0 auto",
  overflow: "hidden",

  borderBottomLeftRadius: "90px",
  borderBottomRightRadius: "90px",
};

export default function BackgroundGradient() {
  return (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[76%] mx-auto h-28 bg-gradient-to-b from-blue-100 via-transparent to-blue-100 rounded-t-2xl overflow-hidden rounded-b-[300px] before:absolute before:inset-0 before:bg-[url('/grid-gradient.svg')] before:bg-[length:40px_40px] before:opacity-30 after:absolute after:top-0 after:left-1/2 after:-translate-x-1/2 after:w-60 after:h-32 after:bg-[radial-gradient(circle,rgba(156,163,175,0.4)_0%,rgba(255,255,255,0)_70%)]">
      <div className="relative " style={styles}></div>
    </div>
  );
}
