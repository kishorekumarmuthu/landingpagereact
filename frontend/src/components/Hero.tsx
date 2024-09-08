import { useState, useEffect } from "react";

export function Hero() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Function to update the state when the window is resized
  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <div className="flex-1 justify-center items-center pb-[60px]">
        <p className="xs:text-[60px] lg:text-[125px] xs: lg:leading-[140px] font-bold text-center">
          <span className="text-[#CEFC02]">Boost </span>
          Your Brand With Innovative{" "}
          <span className="text-[#CEFC02]">Digital Marketing</span>
        </p>
      </div>
      <div className="xs:opacity-60 md:opacity-1 xs:w-[90%] md:w-[40%] flex-1 justify-center items-center">
        <p className="text-center xs:rounded-3xl md:rounded-none xs:border-[1px] xs:border-gray-700 md:border-none xs:px-4 xs:py-4 md:px-0 md:py-0 w-full xs:text-lg md:text-xl font-poppins font-normal flex items-center justify-center text-slate-400 tracking-widest">
          Drive Engagement and Conversions with Advanced Digital Marketing
          Strategies.
        </p>
      </div>
      <div>
        <a href="/contact">
          <button className="mt-12 bg-[#CEFC02] w-36 h-14 rounded-lg text-black font-bold">
            Start Now
          </button>
        </a>
      </div>
      <div className="mt-16 xs:w-[80%] lg:w-[550px] flex items-center">
        <hr className="xs:hidden lg:flex w-36 mx-4 border-[2px] border-[#CEFC02]" />
        <p className="text-center xs:rounded-3xl xs:border-opacity-20 md:rounded-none xs:border-[1px] xs:border-gray-700 md:border-none xs:px-4 xs:py-4 md:px-0 md:py-0 w-full text-xs font-poppins font-bold flex items-center justify-center text-slate-200">
          TRUSTED BY THOUSAND COMPANIES
        </p>
        <hr className="xs:hidden lg:flex w-36 mx-4 border-[2px] border-[#CEFC02]" />
      </div>
      <div className="xs:w-[90%] xs:border-[1px] xs:border-slate-300 md:border-none xs:border-opacity-10 md:mt-16 xs:p-0 md:p-4 md:rounded-lg xs:rounded-none md:bg-gray-700 lg:w-3/4 mb-28 grid md:grid-cols-6 xs:grid-cols-2 justify-items-stretch">
        <div className="flex items-center md:mx-4 xs:border-b-[1px] xs:border-r-[1px] xs:border-slate-300 md:border-none xs:border-opacity-10">
          <svg
            className="mx-2 xs:my-8 md:p-0 md:my-0"
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="gray"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.15"
              d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
              fill=""
            />
            <path
              d="M17.0001 9L10 16L7 13M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
              stroke="#C0C0C0"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p className="text-gray-100 font-poppins tracking-widest text-2xl font-extralight">
            Layers
          </p>
        </div>
        <div className="flex items-center md:mx-4 xs:border-b-[1px] xs:border-slate-300 md:border-none xs:border-opacity-10">
          <svg
            className="mx-2 xs:my-8 md:p-0 md:my-0"
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="gray"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.15"
              d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
              fill=""
            />
            <path
              d="M17.0001 9L10 16L7 13M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
              stroke="#C0C0C0"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p className="text-gray-100 font-poppins tracking-widest text-2xl font-extralight">
            Layers
          </p>
        </div>
        <div className="flex items-center md:mx-4 xs:border-b-[1px] xs:border-r-[1px] xs:border-slate-300 md:border-none xs:border-opacity-10">
          <svg
            className="mx-2 xs:my-8 md:p-0 md:my-0"
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="gray"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.15"
              d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
              fill=""
            />
            <path
              d="M17.0001 9L10 16L7 13M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
              stroke="#C0C0C0"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p className="text-gray-100 font-poppins tracking-widest text-2xl font-extralight">
            Layers
          </p>
        </div>
        <div className="flex items-center md:mx-4 xs:border-b-[1px] xs:border-slate-300 md:border-none xs:border-opacity-10">
          <svg
            className="mx-2 xs:my-8 md:p-0 md:my-0"
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="gray"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.15"
              d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
              fill=""
            />
            <path
              d="M17.0001 9L10 16L7 13M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
              stroke="#C0C0C0"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p className="text-gray-100 font-poppins tracking-widest text-2xl font-extralight">
            Layers
          </p>
        </div>
        <div className="flex items-center md:mx-4 xs:border-b-[1px] xs:border-r-[1px] xs:border-slate-300 md:border-none xs:border-opacity-10">
          <svg
            className="mx-2 xs:my-8 md:p-0 md:my-0"
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="gray"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.15"
              d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
              fill=""
            />
            <path
              d="M17.0001 9L10 16L7 13M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
              stroke="#C0C0C0"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p className="text-gray-100 font-poppins tracking-widest text-2xl font-extralight">
            Layers
          </p>
        </div>
        <div className="flex items-center md:mx-4 xs:border-b-[1px] xs:border-slate-300 md:border-none xs:border-opacity-10">
          <svg
            className="mx-2 xs:my-8 md:p-0 md:my-0"
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="gray"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.15"
              d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
              fill=""
            />
            <path
              d="M17.0001 9L10 16L7 13M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
              stroke="#C0C0C0"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p className="text-gray-100 font-poppins tracking-widest text-2xl font-extralight">
            Layers
          </p>
        </div>
      </div>
    </div>
  );
}
