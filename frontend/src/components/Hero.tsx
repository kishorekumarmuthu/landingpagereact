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
      <div className="flex-1 justify-center items-center">
        <p className="font-normal text-center font-poppins text-gray-400 tracking-widest">
          Drive Engagement and Conversions with Advanced Digital Marketing
          Strategies.
        </p>
      </div>
      <div>
        <button className="mt-12 bg-[#CEFC02] w-36 h-14 rounded-lg text-black font-bold">
          Start Now
        </button>
      </div>
      <div className="mt-16 xs:w-[300px] lg:w-[550px] flex items-center">
        <hr className="xs:hidden lg:flex w-36 mx-4 border-[2px] border-[#CEFC02]" />
        <p className="w-full text-sm font-poppins font-bold flex items-center justify-center text-white">
          TRUSTED BY THOUSAND COMPANIES
        </p>
        <hr className="xs:hidden lg:flex w-36 mx-4 border-[2px] border-[#CEFC02]" />
      </div>

      <div className="p-4 xs:w-full lg:w-3/4 mb-28">
        <div className="mt-12 pt-4 pb-4 xs:flex-col flex items-center justify-start bg-slate-900 rounded-lg text-black font-bold">
          <div className="flex xs:flex-col lg:flex-row justify-center items-center">
            <div className="flex justify-center items-center">
              <div className="flex justify-center items-center lg:border-none xs:border-[1px] xs:border-slate-950">
                <svg
                  className="ml-1"
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
                <p className="ml-1 mr-4 text-gray-100 font-poppins tracking-widest text-2xl font-extralight">
                  Layers
                </p>
              </div>
              <div className="flex justify-center items-center lg:border-none xs:border-[1px] xs:border-slate-950">
                <svg
                  className="ml-1"
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
                <p className="ml-1 mr-4 text-gray-100 font-poppins tracking-widest text-2xl font-extralight">
                  Layers
                </p>
              </div>
            </div>
            {/* <div className="flex justify-center items-center">
              <div className="flex mr-4 justify-center items-center lg:border-none xs:border-[1px] xs:border-white">
                <svg
                  className=""
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
                <p className="ml-1 text-gray-100 font-poppins tracking-widest text-2xl font-extralight">
                  Layers
                </p>
              </div>
              <div className="flex mr-4 justify-center items-center lg:border-none xs:border-[1px] xs:border-white">
                <svg
                  className=""
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
                <p className="ml-1 text-gray-100 font-poppins tracking-widest text-2xl font-extralight">
                  Layers
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="flex mr-4 justify-center items-center lg:border-none xs:border-[1px] xs:border-white">
                <svg
                  className=""
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
                <p className="ml-1 text-gray-100 font-poppins tracking-widest text-2xl font-extralight">
                  Layers
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
