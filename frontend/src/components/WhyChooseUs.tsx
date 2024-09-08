export function WhyChooseUs() {
  return (
    <>
      <div className="w-full bg-gray-800 flex items-start mt-10">
        <div className="flex justify-center items-center mb-20 mt-10 ml-16">
          <p className="text-white text-3xl font-semibold tracking-wide">
            Why Choose Us?
          </p>
          <hr className="bg-white w-32 border-t-4 ml-4" />
        </div>
      </div>
      <div className="flex flex-col gap-20 bg-gray-800">
        <div className="flex gap-20 items-start">
          <img
            className="rounded-bl-none rounded-3xl ml-16 w-[600px] h-[550px]"
            src="/why-choose-us-1.jpg"
            alt=""
          />
          <div className="flex flex-col justify-center items-start gap-8">
            <p className="w-3/4 text-4xl font-poppins font-bold tracking-wide">
              Solutions Tailored Specifically to Your Business Needs
            </p>
            <p className="w-3/4 text-base tracking-wide">
              We provide customized solutions for your business needs, ensuring
              relevance and success.
            </p>
            <button className="bg-[#CEFC02] w-36 h-14 rounded-lg text-black font-bold">
              Read more{" "}
            </button>
          </div>
        </div>
        <div className="flex items-start">
          <div className="ml-16 flex flex-col justify-center items-start gap-8">
            <p className="w-3/4 text-4xl font-poppins font-bold tracking-wide">
              Creative Excellence Elevates Every Project
            </p>
            <p className="w-3/4 text-base tracking-wide">
              Creative excellence drives our work. From concept to execution, we
              aim for exceptional results.
            </p>
            <button className="bg-[#CEFC02] w-36 h-14 rounded-lg text-black font-bold">
              Read more{" "}
            </button>
          </div>
          <img
            className="rounded-3xl rounded-br-none w-[600px] h-[550px]"
            src="/why-choose-us-1.jpg"
            alt=""
          />
        </div>
        <div className="flex gap-20 items-start mb-20">
          <img
            className="rounded-3xl rounded-br-none ml-16 w-[600px] h-[550px]"
            src="/why-choose-us-1.jpg"
            alt=""
          />
          <div className="flex flex-col justify-center items-start gap-8">
            <p className="w-3/4 text-4xl font-poppins font-bold tracking-wide">
              Client Satisfaction is Our Main Focus
            </p>
            <p className="w-3/4 text-base tracking-wide">
              Our main goal is your satisfaction, and we work tirelessly to
              ensure that you are pleased with the results we achieve together.
            </p>
            <button className="bg-[#CEFC02] w-36 h-14 rounded-lg text-black font-bold">
              Read more{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
