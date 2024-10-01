import React from "react";

const Testimonial = () => {
  return (
    <div className=" w-full sm:px-[15vw] py-16 px-[5vw]">
      <div className="flex sm:flex-row flex-col justify-between items-center w-full">
        <div className=" sm:w-1/2 w-full px-5 pb-10 sm:pb-0">
          <p className=" text-lg sm:text-2xl font-semibold">
            For healthcare professionals
          </p>
          <h1 className=" text-4xl font-[bolld] font-semibold mt-4">
            Enabling better care
          </h1>
          <p className=" text-lg sm:text-2xl mt-4 ">
            Find out how Oska can support you in the treatment of multimorbid,
            chronically ill patients.
          </p>
          <button className=" px-6 font-semibold py-3 bg-black rounded-full text-md sm:text-lg mt-6 w-fit text-white">
            For Professionals
            <i className=" font-normal ri-arrow-right-line"></i>
          </button>
        </div>
        <div className=" sm:w-1/2 w-full h-[50vh] sm:h-[60vh] rounded-2xl overflow-hidden bg-red-200"></div>
      </div>

      <div className=" px-10 py-10 w-full sm:w-[80%] h-fit sm:h-[20vw] bg-zinc-100 mt-[5vw] relative mx-auto rounded-xl">
        <h1 className=" sm:text-3xl text-2xl font-semibold font-[bolld] text-center">
          Professional and personal health advice.
        </h1>
        <h1 className=" sm:text-3xl text-2xl font-semibold font-[bolld] text-center mt-5">
          Just one click away
        </h1>
        <button className=" relative left-1/2 -translate-x-1/2 mt-10 px-5 py-3 font-semibold bg-black rounded-full text-white text-md sm:text-lg ">
          Learn more <i className="ri-arrow-right-line"></i>
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
