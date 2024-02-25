import React from "react";
import Ruler from "@/Components/ruler";

const intro = () => {
  return (
    <div>
      {/* <IntroImage imageUrl={"/lotusFeet.jpg"} overlayHeading={"JAI SHRI MATAJI 🙏🏻🪷"} overlayContent={"We welcome our brothers and sisters from all corners of the world to celebrate 101st Birth Anniversary of our most beloved mother 💖"}/> */}
      <div className="flex p-20 h-full w-full">
        <p className="flex items-center text-center text-4xl pe-20 ps-20">
          “You cannot know the meaning of your life until you are connected to
          the power that created you”
        </p>
        <img src="/mataji.jpg" className="w-1/4 rounded-xl" />
      </div>
      <div className="flex flex-col items-center m-10">
        <Ruler />
      </div>
    </div>
  );
};

export default intro;
