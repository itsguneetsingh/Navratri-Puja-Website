"use client";

import React from "react";
import Image from "next/image";
import Navbar from "@/Components/Navbar";
import Ruler from "@/Components/Ruler";
import IntroImage from "@/Components/IntroImage";
import Table from "@/Components/Table";
import Card from "@/Components/Card";

const page = () => {
  const headings = ["CATEGORY", "FEES"];
  const data = [
    ["Adults", "₹ 2000/-"],
    ["Yuva Shakti", "₹ 1500/-"],
    ["Bal Shakti", "₹ 1000/-"],
    ["One Day Puja (All)", "₹ 700/-"],
  ];

  const elements = [
    <p className="font-extrabold text-3xl mb-3 mt-5">CONTACT INFORMATION</p>,
    <Table
      headings={["Name & Team", "Contact Number"]}
      data={[
        ["Shreyansh Jain - Registration Team", "+91 9039391390"],
        ["Manish Sahu - Registration Team", "+91 9754850043"],
        ["Narendra Nannaware - Accommodation Team", "+91 9423620253"],
        ["Kishor Kapoor - Accommodation Team", "+91 9422136691"],
        ["Milind Dalal - Cultural Team", "+91 9881483804"],
        [
          "Mr. Praveen Bharti - Transportation Team at Nagpur",
          "+91 7972657590",
        ],
        ["Mr. Sachin Patil - Transportation Team at Nagpur", "+91 9823195400"],
        [
          "Mr. Sorav Sawde - Transportation Team at Chhindwara",
          "	+91 9406565007",
        ],
      ]}
    />,
    <p className="font-extrabold text-2xl mb-3 mt-5">
      PUJA ORGANIZING CHANNELS
    </p>,
    <Table
      headings={[]}
      data={[
        ["Ms. Sonali Bhattacharjee", "+91 9893333081"],
        ["Mr. Ajit Ranaware", "+91 9422310494"],
        ["Mr. Amit Goyal", "+91 9981516427"],
        ["Mr. Vikas Jundre", "+91 9881831224"],
        ["Mr. Jayant Haldar", "+91 9752475940"],
      ]}
    />,
    <p className="font-extrabold text-2xl mb-3 mt-5">Hotel Accommodation</p>,
    <p className="text-center text-lg">
      A collective accommodation and food will be arranged at the Linga Aashram.
      If you need any special assistance or you want to stay at the nearby
      hotels please contact:
    </p>,
    <ul className="list-disc text-lg">
      <li>Shri Naresh Thatare, 9406734447</li>
      <li>Shri Virendra Vajpayee, 9425146024</li>
    </ul>,
  ];

  return (
    <>
      <Navbar />
      <div>
        <IntroImage
          imageUrl={"/lotusFeet.jpg"}
          overlayHeading={"JAI SHRI MATAJI 🙏🏻🪷"}
          overlayContent={
            "We welcome our brothers and sisters from all corners of the world to celebrate 101st Birth Anniversary of our most beloved mother 💖"
          }
        />
      </div>
      <div className="flex flex-col justify center items-center">
        <p className="flex text-gray-600 font-extrabold">
          H. H. SHRI MATAJI NIRMALA DEVI SAHAJA YOGA TRUST, INDIA
        </p>
        <p className="text-center flex text-black text-4xl font-extrabold w-1/2 p-3">
          INTERNATIONAL BIRTHDAY PUJA & SEMINAR - 2024
        </p>
        <p className="font-2xl">
          19th - 21st March, 2024 | Chhindwara, M.P, India
        </p>
      </div>
      <div className="flex flex-col items-center p-5">
        <Image src="/mataji.jpg" height={600} width={300} alt="Shri Mataji" />
      </div>
      <div className="flex flex-col items-center">
        <p className="text-center flex text-black text-2xl font-extrabold p-3">
          Message for World Collectivity
        </p>
        <p className="font-2xl w-1/2">
          “It is nice that you are celebrating my birthday with such enthusiasm,
          and so much happiness. So nice to see all this, and I want you all to
          be my decorations! In the whole world they should see that you are my
          children and that you are of such great values and such great
          understanding. You are my children. I have really worked for you, in
          the sense that every moment of my life, I have thought of you: I
          wanted to work it out in such a beautiful manner that you become
          really good people, ideal people, special people, with understanding.
          So, that is the day you should feel that your birthday is being
          celebrated. When you have completely cleared out, you have become
          nirmal, absolutely pure personality of love – that’s the day is your
          birthday, and mine too.”
        </p>
        <p className="font-bold p-3">- H. H. Shri Mataji Nirmala Devi</p>
      </div>
      <Ruler />
      <div className="flex flex-col items-center w-full">
        <div className="w-1/2">
          <p className="font-extrabold text-4xl">REGISTRATION INFORMATION</p>
          <div className="pb-10">
            <Table headings={headings} data={data} />
          </div>
          <button
            href="/registration"
            className="bg-green-700 text-white rounded-xl p-2 text-2xl w-full"
          >
            Click here for Registration!
          </button>
        </div>
      </div>
      <Card elements={elements} />
    </>
  );
};

export default page;
