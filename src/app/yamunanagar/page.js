"use client";

import React from "react";
import IntroImage from "@/Components/IntroImage";
import Navbar from "@/Components/Navbar";
import Card from "@/Components/Card";

const page = () => {
  return (
    <>
      <Navbar />
      <IntroImage
        imageUrl={"/lotusFeet.jpg"}
        overlayHeading={"Reaching Chhindwara"}
        overlayContent={""}
      />
      <div className="flex flex-col items-center w-full">
        <div className="w-2/3 text-center text-xl space-y-4">
          <p className="font-extrabold text-3xl">
            Travel Information to Chhindwara
          </p>
          <p>
            Chhindwara can be approached by road from Nagpur (distance 127
            kms.), Jabalpur (distance 197 kms.), or Bhopal (distance 278 kms.).
            Taxis and buses are readily available from these cities to
            Chhindwara.
          </p>
          <p>
            So after reaching any of these major cities, you can take a bus to
            Chhindwara. From Chhindwara bus station, you can grab a taxi to the
            Puja Venue: Linga Aashram, Chhindwara.
          </p>
        </div>
      </div>

      <Card
        elements={[
          <div>
            <p className="font-extrabold text-3xl mb-3 mt-3">1. BY AIR</p>
            <p>
              Take a flight to any of the nearest International Airports among
              Nagpur, Bhopal, or Jabalpur. From Nagpur, Bhopal, or Jabalpur,
              catch a bus for Chhindwara. Take a cab or auto-rickshaw to the
              Linga Aashram.
            </p>
            <p className="font-extrabold text-3xl mt-7 mb-3">2. BY RAILWAY</p>
            <p>
              Take a train to any of the nearest major railway cities among
              Nagpur, Bhopal, or Jabalpur. From Nagpur, Bhopal, or Jabalpur,
              catch a bus for Chhindwara. Take a cab or auto-rickshaw to the
              Linga Aashram.
            </p>
            <p className="font-extrabold text-3xl mt-7 mb-3">3. BY BUS</p>
            <p>
              Take a bus to any of the nearest major railway cities among
              Nagpur, Bhopal, or Jabalpur. From Nagpur, Bhopal, or Jabalpur,
              catch a bus for Chhindwara. Take a cab or auto-rickshaw to the
              Linga Aashram.
            </p>
          </div>,
        ]}
      />
    </>
  );
};

export default page;
