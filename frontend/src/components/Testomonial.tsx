import { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export function Testimonial() {
  const [currentSlide, setCurrentSlide] = useState(0);

  let slides = [
    {
      id: 1,
      companyName: "Company 1",
      reviewOverview:
        "Kornix is the best digital agency i have ever seen! Highly Recommended!",
      reviewFullText:
        "I recently hired Ideapeel for a custom web development project and couldn't be happier with the results. The team was able to bring my unique ideas to life and create a website that truly stands out.",
      name: "name 1",
      position: "position 1",
    },
    {
      id: 2,
      companyName: "Company 2",
      reviewOverview:
        "You are the best digital agency i have ever seen! Highly Recommended!",
      reviewFullText:
        "I recently hired Ideapeel for a custom web development project and couldn't be happier with the results. The team was able to bring my unique ideas to life and create a website that truly stands out.",
      name: "name 2",
      position: "position 2",
    },
    {
      id: 3,
      companyName: "Company 3",
      reviewOverview: "review 3",
      reviewFullText: "reviewFullText 3",
      name: "name 3",
      position: "position 3",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  console.log(currentSlide);

  return (
    <>
      <div className="xs:hidden md:flex gap-5 flex-col justify-center items-center bg-white pb-10">
        <p className="text-black text-xl tracking-wide mt-20">Testimonial</p>
        <p className="text-black text-4xl tracking-wide font-bold">
          Customer is Our Top Priority
        </p>
        <p className="text-black text-xl tracking-wide">
          We survey all of our clients, the results of which go directly to our
          CEO.
        </p>
        <div className="w-3/4 flex gap-10 justify-center items-center relative">
          <BsArrowLeft
            onClick={prevSlide}
            className="text-black text-3xl hover:animate-pulse"
          />
          {slides.map((item, index) => {
            return (
              <>
                <div
                  key={item.id}
                  className={`${
                    index == currentSlide ? "flex" : "hidden"
                  }  w-3/4 h-[400px] rounded-xl bg-gray-200 border-2 border-gray-400 ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="w-3/5 gap-3 flex flex-col items-start">
                    <div className="ml-10 mt-10 flex gap-1 justify-center items-center">
                      <svg
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
                      <p className="flex justify-center items-center text-black text-xl tracking-wide">
                        {item.companyName}
                      </p>
                    </div>
                    <div className="ml-10 mt-5 flex flex-col gap-3 justify-center items-start">
                      <p className="text-xl text-black font-bold tracking-wide">
                        {item.reviewOverview}
                      </p>
                      <p className="text-base text-black">
                        {item.reviewFullText}
                      </p>
                    </div>
                    <div className="ml-10 flex flex-col gap-3 justify-center items-start mb-10">
                      <p className="text-lg text-black font-bold tracking-wide">
                        {item.name}
                      </p>
                      <p className="text-base text-black">{item.position}</p>
                    </div>
                  </div>
                  <div className="ml-10 w-2/5 flex items-center bg-gray-200">
                    <img
                      className="w-[220px] h-[220px] rounded-full"
                      src="/why-choose-us-1.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </>
            );
          })}
          <BsArrowRight
            onClick={nextSlide}
            className="text-black text-3xl hover:animate-pulse"
          />
        </div>
      </div>
    </>
  );
}
