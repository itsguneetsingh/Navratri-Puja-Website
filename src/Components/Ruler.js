import React from "react";

const Ruler = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex bg-[rgba(2,46,87,255)] h-[3px] w-1/2" />
      <p className="mx-5">Break Here</p>
      <div className="flex bg-[rgba(2,46,87,255)] h-[3px] w-1/2" />
    </div>
  );
};

export default Ruler;
