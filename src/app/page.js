"use client";

import React from "react";
import Navbar from "@/Components/Navbar";
import Home from "@/Pages/Homepage";
import Benefits from "@/Pages/Benefits";

const page = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Benefits />
      {/* <Card /> */}
    </div>
  );
};

export default page;
