import React, { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="mr-2 mt-2 absolute top-0 right-0 md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none ">
          <svg
            className="w-6 h-6 "
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {isOpen ? (
        <ul className="md:hidden flex flex-col items-center space-y-6 mt-4">
          <li>
            <a href="#" onClick={toggleMenu}>
              Process
            </a>
          </li>
          <li>
            <a href="#" onClick={toggleMenu}>
              Benefits
            </a>
          </li>
          <li>
            <a href="#" onClick={toggleMenu}>
              Services
            </a>
          </li>
          <li>
            <a href="#" onClick={toggleMenu}>
              Portfolio
            </a>
          </li>
          <li>
            <a href="#" onClick={toggleMenu}>
              FAQ
            </a>
          </li>
          <li>
            <a href="/contact" onClick={toggleMenu}>
              <button className="w-96 bg-[#CEFC02] h-14 rounded-lg text-black font-bold">
                Get Started
              </button>
            </a>
          </li>
        </ul>
      ) : (
        <div className="xs:hidden sm:hidden md:flex justify-center items-center py-10">
          <div className="w-1/4">
            <img src="/vite.svg" alt="" />
          </div>
          <div className="flex justify-center items-center w-1/2">
            <div className="flex justify-center items-center px-8 text-sm">
              Process
            </div>
            <div className="flex justify-center items-center px-8 text-sm">
              Benefits
            </div>
            <div className="flex justify-center items-center px-8 text-sm">
              Services
            </div>
            <div className="flex justify-center items-center px-8 text-sm">
              Portfolio
            </div>
            <div className="flex justify-center items-center px-8 text-sm">
              FAQ
            </div>
            <div className="flex justify-center items-center px-8 text-sm">
              <button className="bg-[#CEFC02] w-36 h-14 rounded-lg text-black font-bold">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
