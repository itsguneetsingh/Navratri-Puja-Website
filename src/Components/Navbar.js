import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-[rgba(255,230,230,255)] sticky z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center justify-between">
              <div className="flex-shrink-0">
                <button className="bg-white text-semibold mx-3 p-2 rounded-lg">ENG</button>
                <button className="bg-white text-semibold mx-3 p-2 rounded-lg">HIN</button>
              </div>
            </div>
            <div className="hidden md:block">
              <div classname = "ml-4 flex justify-between space-x-4">
                <a className="text-black m-5 hover:bg-white hover:rounded-lg p-2 transition-all duration-200">HOME</a>
                <a className="text-black m-5 hover:bg-white hover:rounded-lg p-2 transition-all duration-200">SCHEDULE</a>
                <a className="text-black m-5 hover:bg-white hover:rounded-lg p-2 transition-all duration-200">YAMUNANAGAR</a>
                <a className="text-black m-5 hover:bg-white hover:rounded-lg p-2 transition-all duration-200">REGISTRATION</a>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button className="inline-flex items-center justify-end p-2 rounded-md text-black md:text-black hover:text-black" onClick={toggleMenu}>
                {isOpen ? (
                  <svg
                  className = "h-6 w-6"
                    xmln = "http://www.w3.org/2000/svg"
                    fill = "none"
                    viewBox = "0 0 24 24"
                    stroke = "currentColor"
                  >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                  className = "h-6 w-6"
                    xmln = "http://www.w3.org/2000/svg"
                    fill = "none"
                    viewBox = "0 0 24 24"
                    stroke = "currentColor"
                  >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
              
            </div>
          </div>
        </div>
        <div>
          {isOpen ? (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a className="text-black block px-3 py-2 rounded-md text-base font-medium">HOME</a>
                <a className="text-black block px-3 py-2 rounded-md text-base font-medium">SCHEDULE</a>
                <a className="text-black block px-3 py-2 rounded-md text-base font-medium">YAMUNANAGAR</a>
                <a className="text-black block px-3 py-2 rounded-md text-base font-medium">REGISTRATION</a>
              </div>
            </div>
          ) : null}
        </div>
      </nav>
    </>
  );
};

export default Navbar;