import React from "react";

const Services = () => {
  const service = [
    {
      img: "",
      name: "Diabetes",
    },
    {
      img: "",
      name: "Hypertension",
    },
    {
      img: "",
      name: "Kidney disease",
    },
    {
      img: "",
      name: "Cardiovascular disease",
    },
  ];
  return (
    <div className=" px-[5vw] py-16">
      <h1 className=" text-center text-3xl sm:text-5xl font-semibold font-[bolld]">
        However your health has developed so far, <br className=" sm:block hidden" /> from now on we are at
        your side!
      </h1>
      <p className=" text-center mt-5 sm:text-2xl text-xl">
        Do you have kidney disease and possibly one of the following conditions?
      </p>

      <div className=" flex sm:flex-row flex-col justify-center items-center gap-5 mt-10 sm:p-5">
        {service.map((item, index) => {
          return (
            <div key={index} className=" sm:h-[18vw] h-[50vh] w-full sm:w-[15vw] p-7 rounded-2xl flex flex-col justify-center items-center gap-5 bg-blue-100 ">
              <div className=" sm:h-[8vw] h-[50%] w-full bg-blue-200"></div>
              <p className=" text-center text-2xl font-[bolld] font-semibold">
                {item.name}
              </p>
              <button className=" px-4 py-3 bg-blue-900 rounded-full text-white text-md sm:text-xl ">
                Learn more <i className="ri-arrow-right-line"></i>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
