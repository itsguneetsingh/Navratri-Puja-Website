import React from "react";

const IntroImage = ({ imageUrl, overlayHeading, overlayContent }) => {
  const imageAddress = {
    backgroundImage: `url(${imageUrl})`,
  };

  return (
    <div className="flex items-center flex-col pb-16">
      <div className="w-full h-2/5 bg-[url('/lotusFeet.jpg')] bg-cover bg-center">
        <div className="w-full h-full flex flex-col justify-center items-center backdrop-brightness-50 p-20">
          <span className="text-white text-4xl text-center font-bold pb-5">
            {overlayHeading}
          </span>
          <span className="text-white text-4xl text-center">
            {overlayContent}
          </span>
        </div>
      </div>
    </div>
  );
};

export default IntroImage;
