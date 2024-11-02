import React from "react";

const Doctors = () => {
  const doctor = [
    {
      name: "Dr. Anil Gupta",
      domain: "Chief of Cardiology",
      work: "Lehigh Valley Heart and Vascular Institute, Pennsylvania",
      img: "/doc2.jpg"
    },
    {
      name: "Dr. Hemant Kalra",
      domain: "Director Pulmonology",
      work: "Max Hospital, New Delhi",
      img: "/doc3.jpg"
    },
    {
      name: "Dr. Ashish Kumar, ",
      domain: "Senior Consultant, Gastroenterology",
      work: "Sir Gangaram Hospital,New Delhi",
      img: "/doc1.jpg"
    },
  ];
  return (
    <div className=" px-[5vw] py-16">
      <h1 className=" sm:text-4xl text-3xl font-[bolld] font-semibold text-center">
        Cuore was developed in collaboration <br className="sm:block hidden" />{" "}
        with leading medical experts
      </h1>

      <div className=" flex sm:flex-row flex-col justify-center gap-5 mt-10">
        {doctor.map((item, index) => {
          return (
            <div
              key={index}
              className=" p-7 sm:h-[25vw] w-full h-[50vh] sm:w-[22vw] rounded-2xl bg-zinc-100 flex flex-col gap-5 justify-center items-center"
            >
              <div className=" h-[40%] w-[70%]">
                <img className=" w-full h-full object-contain" src={item.img} alt="" />
              </div>
              <div>
                <h1 className=" text-center text-2xl font-semibold font-[bolld]">
                  {item.name}
                </h1>
                <p className="mt-3 text-center text-xl font-medium">
                  {item.domain}
                </p>
                <p className="mt-3 text-center text-sm font-medium">
                  {item.work}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Doctors;
