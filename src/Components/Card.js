import React from "react";

const Card = ({ elements }) => {
  return (
    <div className="flex flex-col items-center justify-center my-7">
      <div className="bg-[rgba(255,230,230,255)] rounded-lg text-2xl w-2/3 shadow-md p-4 flex flex-col items-center ">
        {elements.map((element, index) => (
          <div key={index} className="mb-2">
            {element}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;

{
  /* <div className="flex flex-col items-center text-slate-800 font-bold my-4">
          CONTACT INFORMATION
          <table className="w-full text-sm text-center text-white dark:text-black mb-10 mt-5">
            <thead className="text-xs text-white uppercase bg-gray-900 dark:text-white font-bold">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Team
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone number
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className=" border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="font-semibold px-6 py-4 text-gray-900 whitespace-nowrap dark:text-black"
                >
                  Sahil Bhaiya
                </th>
                <td className="px-6 py-4">Team unknown</td>
                <td className="px-6 py-4">Phone Number unknown</td>
              </tr>
              <tr className="border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="font-semibold px-6 py-4 text-gray-900 whitespace-nowrap dark:text-black"
                >
                  Sahil Bhaiya
                </th>
                <td className="px-6 py-4">Team unknown</td>
                <td className="px-6 py-4">Phone Number unknown</td>
              </tr>
              <tr className="border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap dark:text-black"
                >
                  Sahil Bhaiya
                </th>
                <td className="px-6 py-4">Team unknown</td>
                <td className="px-6 py-4">Phone Number unknown</td>
              </tr>
            </tbody>
          </table>
          PUJA ORGANIZING CHANNELS
          <table className="w-full text-sm text-center text-white dark:text-black mb-10 mt-5">
            <thead className="text-xs text-white uppercase bg-gray-900 dark:text-white font-bold">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Team
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone number
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className=" border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="font-semibold px-6 py-4 text-gray-900 whitespace-nowrap dark:text-black"
                >
                  Sahil Bhaiya
                </th>
                <td className="px-6 py-4">Team unknown</td>
                <td className="px-6 py-4">Phone Number unknown</td>
              </tr>
              <tr className="border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="font-semibold px-6 py-4 text-gray-900 whitespace-nowrap dark:text-black"
                >
                  Sahil Bhaiya
                </th>
                <td className="px-6 py-4">Team unknown</td>
                <td className="px-6 py-4">Phone Number unknown</td>
              </tr>
              <tr className="border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap dark:text-black"
                >
                  Sahil Bhaiya
                </th>
                <td className="px-6 py-4">Team unknown</td>
                <td className="px-6 py-4">Phone Number unknown</td>
              </tr>
            </tbody>
          </table>
          <span>Hotel Accommodation</span>
          <span className="font-bold text-base px-20 text-center">
            A collective accommodation and food will be arranged at the Linga
            Aashram. If you need any special assistance or you want to stay at
            the nearby hotels please contact:
          </span>
          <span className="font-normal text-base px-20 text-center">
            - Shri Naresh Thatare, 9406734447
          </span>
          <span className="font-normal text-base px-20 text-center">
            - Shri Virendra Vajpayee, 9425146024
          </span>
        </div> */
}
