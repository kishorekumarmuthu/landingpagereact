import { BsArrowRightCircleFill } from "react-icons/bs";

export function StandOut() {
  return (
    <div className="w-full xs:h-[550px] h-[380px] flex justify-center items-center bg-[#CEFC02]">
      <div className="w-3/4 bg-gray-900 xs:mt-[80px] md:mt-[280px] rounded-3xl">
        <div className="mt-5 flex gap-3 flex-col justify-center items-center pb-16">
          <p className="xs:w-[90%] md:w-[55%] xs:text-[25px] md:text-[40px] font-extrabold text-center text-white tracking-normal">
            <q>Stand out online and make an impact</q>
          </p>
          <p className="mt-8 xs:w-[90%] text-center text-lg font-normal text-gray-300 tracking-wide">
            David Smith CEO of a Tech Startup
          </p>
          <p className="mt-8 xs:w-[90%] text-center text-xl font-normal text-gray-300 tracking-wide">
            Jump on a membership and start requesting designs right away!
          </p>
          <button className="custom-transition mt-8 bg-[#CEFC02] flex gap-2 justify-center items-center w-36 h-14 rounded-lg text-black font-bold">
            See Pricing
            <BsArrowRightCircleFill />
          </button>
        </div>
      </div>
    </div>
  );
}
