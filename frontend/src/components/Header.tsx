import React, { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex ml-2 mt-10 md:hidden">
        <div className="flex justify-center w-1/4">
          <a href="http://localhost:5173">
            <img src="/vite.svg" alt="" />
          </a>
        </div>
        <div className="mr-6 absolute top-10 right-0">
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
      </div>

      {isOpen ? (
        <ul className="md:hidden flex flex-col items-center space-y-6 mt-4">
          <li>
            <a href="#" onClick={toggleMenu}>
              Home
            </a>
          </li>
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
              <button className="w-80 bg-[#CEFC02] h-14 rounded-lg text-black font-bold">
                Get Started
              </button>
            </a>
          </li>
        </ul>
      ) : (
        <div className="xs:hidden sm:hidden md:flex justify-center items-center py-10">
          <div className="w-1/4">
            <a href="http://localhost:5173">
              <img src="/vite.svg" alt="" />
            </a>
          </div>
          <div className="flex justify-center items-center w-1/2">
            <div className="flex justify-center items-center px-8 text-sm">
              <a href="http://localhost:5173">Home</a>
            </div>
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
              <a href="/contact">
                <button className="bg-[#CEFC02] w-36 h-14 rounded-lg text-black font-bold">
                  Get Started
                </button>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
