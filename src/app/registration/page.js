"use client";

import React from "react";
import { useState } from "react";
import Navbar from "@/Components/Navbar";
import Card from "@/Components/Card";
import UserInfoTable from "@/Components/UserInfoTable";

const page = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    city: "",
    age: "",
    email: "",
    mobileNumber: "",
    pan: "",
    aadhar: "",
    registrationType: "",
    paymentType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <Navbar />
      <Card
        elements={[
          <div className="flex flex-col items-left pt-5 pb-5 w-full">
            <div>
              <p>Registration Duration:</p>
              <select name="registrationType">
                <option
                  checked={formData.registrationType === "2 days"}
                  onChange={handleChange}
                >
                  2 Days Seminar and Puja Registration
                </option>
                <option
                  checked={formData.registrationType === "2 days"}
                  onChange={handleChange}
                >
                  Only Puja Registration
                </option>
              </select>
            </div>
            Payment Method:
            <div>
              <select name="registrationType">
                <option
                  checked={formData.paymentType === "2 days"}
                  onChange={handleChange}
                >
                  UPI
                </option>
                <option
                  checked={formData.paymentType === "2 days"}
                  onChange={handleChange}
                >
                  Debit Card
                </option>
                <option
                  checked={formData.paymentType === "2 days"}
                  onChange={handleChange}
                >
                  Bank Transfer
                </option>
              </select>
            </div>
            <p className="font-bold text-4xl">Payer's Details</p>
            <table>
              <tbody>
                <tr>
                  <td>
                    Full Name
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    City
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    Age
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    Mobile Number
                    <input
                      type="tel"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    Pan
                    <input
                      type="text"
                      name="pan"
                      value={formData.pan}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    Aadhar
                    <input
                      type="text"
                      name="aadhar"
                      value={formData.aadhar}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <button className="p-2 bg-green-500 text-white rounded-lg">
              Next
            </button>
          </div>,
          <UserInfoTable />,
        ]}
      />
    </>
  );
};

export default page;
