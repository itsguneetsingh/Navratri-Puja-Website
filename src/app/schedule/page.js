"use client";
import React from "react";

import IntroImage from "@/Components/IntroImage";
import Card from "@/Components/Card";
import Navbar from "@/Components/Navbar";
import Ruler from "@/Components/Ruler";

const page = () => {
  return (
    <>
      <Navbar />
      <IntroImage
        imageUrl={"/lotusFeet.jpg"}
        overlayHeading={"PUJA SCHEDULE"}
        overlayContent={"Please find the schedule for 101st Birthday Puja."}
      />

      <div className="flex flex-col items-center">
        <div className="text-xl text-left space-y-3">
          <p className="font-extrabold text-3xl">19th March (Day 1)</p>
          <p>05:30 AM - 06:30 AM Morning Meditation</p>
          <p>06:30 AM Onwards Meditation with Instrumental</p>
          <p>08:00 AM Onwards Registration Begins</p>
          <p>04:30 PM Onwards Havan</p>
          <p>06:30 PM Onwards Inauguration & Cultural Events</p>
        </div>

        <Ruler />
        <div className="text-xl text-left space-y-3">
          <p className="font-extrabold text-3xl">20th March (Day 2)</p>
          <p>05:30 AM - 06:30 AM Morning Meditation</p>
          <p>06:30 AM Onwards Meditation with Instrumental</p>
          <p>10:00 AM - 11:00 AM Meditation and Music therapy</p>
          <p>11:00 AM - 02:00 PM Seminar on Vertical Growth 💫</p>
          <p>02:00 PM - 03:00 PM Rare videos of Shri Mataji 🪷</p>
          <p>05:00 PM - 07:00 PM Seminar</p>
          <p>07:00 PM Onwards Cultural Programs</p>
          <p>11:00 PM - 12:30 PM Fusion by all Musicians</p>
        </div>
      </div>

      <div className="w-full flex flex-col items-center">
        <div className="w-2/3">
          <Card elements={["12:00 AM Cake Cutting Ceremony 🥳🎂"]} />
        </div>
      </div>

      <Ruler />
      <div className="flex flex-col items-center">
        <div className="text-xl text-left space-y-3">
          <p className="font-extrabold text-3xl">21st March (Day 3)</p>
          <p>05:30 AM - 06:30 AM Morning Meditation</p>
          <p>06:30 AM - 07:00 AM Meditation with Instrumental</p>
          <p>10:00 AM - 11:00 AM Musical Session 🎵</p>
          <p>11:00 AM - 11:30 AM Documentaries & Experiences</p>
          <p>11:30 AM - 12:15 PM Musical Session 🎵</p>
          <p>12:15 PM - 02:00 PM Cultural Programs ✨</p>
          <p>05:00 PM Onwards Birthday Puja 💖</p>
          <p>08:00 PM Onwards Musical Session 🎵</p>
        </div>
      </div>
    </>
  );
};

export default page;
