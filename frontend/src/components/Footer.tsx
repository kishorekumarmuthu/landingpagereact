import {
  BsPhone,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsEnvelope,
} from "react-icons/bs";

export function Footer() {
  return (
    <>
      <div className="ml-[210px] w-3/4 mt-[280px] flex gap-3 flex-col">
        <div className="flex gap-5">
          <div className="w-1/5 flex flex-col gap-3">
            <img src="/vite.svg" width={35} />
            <p className="text-white text-base">
              Click It - is a leading digital marketing agency dedicated to
              driving success for businesses online. With expertise in SEO, PPC,
              social media, content creation, and more, we offer tailored
              solutions to maximize ROI. In the USA, UK, and Canada working with
              toptier clients, from start-ups to enterprises.
            </p>
          </div>
          <div className="w-1/5 flex flex-col gap-3 items-start">
            <p className="text-[#CEFC02] text-2xl">Our Services</p>
            <p className="text-white text-lg">SEO Marketing</p>
            <p className="text-white text-lg">Research Topic Trends</p>
            <p className="text-white text-lg">Email Marketing</p>
            <p className="text-white text-lg">Google PPC</p>
          </div>
          <div className="w-1/5 flex flex-col gap-3 items-start">
            <p className="text-[#CEFC02] text-2xl">Our Location</p>
            <p className="text-white text-lg">USA</p>
            <p className="text-white text-lg">UK</p>
            <p className="text-white text-lg">Canada</p>
            <p className="text-white text-lg">Virtual</p>
          </div>
          <div className="w-1/5 flex flex-col gap-4 items-start">
            <p className="text-[#CEFC02] text-2xl">Contact Us</p>
            <p className="text-white text-lg"></p>
            <div className="flex gap-2 justify-center items-center">
              <BsEnvelope />
              <p className="text-white text-lg">info@kronix.com</p>
            </div>
            <div className="flex gap-2 justify-center items-center">
              <BsPhone />
              <p className="text-white text-lg">9999999999</p>
            </div>
            <div className="flex gap-4 justify-center items-center">
              <BsFacebook className="text-[#CEFC02]" />
              <BsInstagram />
              <BsLinkedin />
            </div>
          </div>
        </div>
        <hr className="min-w-full h-px my-8 bg-gray-500 border-0" />
        <div className="flex gap-6 justify-between mb-10">
          <div className="flex gap-6 items-start">
            <p className="text-white text-base">Process</p>
            <p className="text-white text-base">Benefits</p>
            <p className="text-white text-base">Services</p>
            <p className="text-white text-base">Portfolio</p>
            <p className="text-white text-base">FAQ</p>
          </div>
          <div>
            <p className="text-white text-base justify-self-end">
              © 2024 RajaramanR3- All Right Reserved
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
