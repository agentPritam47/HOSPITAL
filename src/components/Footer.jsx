import React from "react";

const Footer = () => {
  return (
    <div className="  w-full sm:h-[fit] sm:pb-[10vw] bg-blue-800 sm:px-[10vw] py-[5vw] text-white">
      <h1 className=" text-5xl text-white text-center sm:text-left sm:pb-5 ">OSKA</h1>
      <div className=" flex sm:flex-row items-start flex-col mt-10 justify-between">
        <div className=" sm:w-[40%] text-center sm:text-left w-full">
          <p className=" text-2xl opacity-80 text-white">
            info@oska-health.com
          </p>
          <p className=" text-2xl opacity-80 text-white mt-3">
            info@oska-health.com
          </p>
          <p className=" text-2xl opacity-80 text-white mt-3">
            info@oska-health.com
          </p>
        </div>
        <div className=" sm:w-[20%] w-full flex flex-col items-center mt-10 sm:mt-0">
          <p className=" text-xl font-semibold">We are here for you</p>
          <p className=" text-xl opacity-80 text-white mt-3">Patients</p>
          <p className=" text-xl opacity-80 text-white mt-3">Patients</p>
          <p className=" text-xl opacity-80 text-white mt-3">Patients</p>
          
        </div>
        <div className=" sm:w-[20%] w-full flex flex-col items-center mt-10 sm:mt-0">
          <p className=" text-xl font-semibold">About Oska</p>
          <p className=" text-xl opacity-80 text-white mt-3">About Us</p>
          <p className=" text-xl opacity-80 text-white mt-3">Leadership</p>
          <p className=" text-xl opacity-80 text-white mt-3">vaccencies</p>
        </div>
        <div className=" sm:w-[20%] w-full flex flex-col items-center mt-10 sm:mt-0">
          <p className=" text-xl font-semibold">Legal</p>
          <p className=" text-xl opacity-80 text-white mt-3">Privacy</p>
          <p className=" text-xl opacity-80 text-white mt-3">Imprint</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
