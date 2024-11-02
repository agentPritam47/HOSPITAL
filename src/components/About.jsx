import React from "react";
import Footer from "./Footer";

const About = () => {
  const leaders = [
    {
      name: "Niklas Best",
      position: "CEO & Co-Founder",
      desc: "Niklas has 10 years of experience in kidney care and building and leading high-performance teams in the digital field. In his last position, he was Director Digital Products at Fresenius Medical Care. Niklas has founded three companies and holds an Executive MBA from the University of St. Gallen.",
    },
    {
      name: "Claudia Ehmke",
      position: "CPO",
      desc: "Claudia has more than 20 years of experience in the London startup and tech scene. She is an experienced product leader who combines strategy, human-centered design, and engineering. In her last position, Claudia was Product Principal at ustwo, one of the most renowned product studios in London.",
    },
    {
      name: "Dr. Malte Waldeck",
      position: "CFO/COO & Co-Founder",
      desc: "Malte has more than 8 years of experience in kidney care. In his previous positions, he was Chief Investment Officer of Dmed Healthcare Group and M&A Director at DaVita Kidney Care. Malte holds a PhD from RWTH Aachen University and began his career in investment banking at Bankhaus Metzler.",
    },
  ];
  return (
    <div>
      <div className="overflow-x-hidden relative overflow-hidden h-fit  sm:pb-5 w-full pt-7 px-[5vw] lg:px-[10vw] font-[bolld]">
        <div className=" w-full h-[60vh] lg:h-[60vh] mt-[3vw] rounded-2xl flex lg:flex-row flex-col lg:overflow-hidden relative bg-red-300">
          <div className="lg:pl-[5vw] lg:pr-[6vw] pl-[3vw] pr-[3vw] py-[7.5vw] lg:h-full h-[100%] lg:w-[55%] lg:rounded-none rounded-2xl w-full bg-blue-400 flex justify-center items-center">
            <div className="h-full w-full ">
              <h3 className=" text-white text-xl pb-5">About Us</h3>
              <h1 className=" rounded-2xl text-white text-3xl lg:text-4xl font-bold">
                Our Mission
              </h1>
              <p className=" text-white mt-5">
                Improve the care of chronically ill people, reduce complications
                and hospital stays, reduce care costs.
              </p>
            </div>
          </div>
          <div className=" lg:h-full h-[40vh] lg:w-[45%] w-[70vw] lg:rounded-none rounded-2xl lg:overflow-visible bg-green-300 lg:relative absolute lg:top-0 top-[40vh] right-0">
            <img
              className="sm:rounded-none rounded-2xl h-full w-full object-cover"
              src="/hero2.jpg"
              alt=""
            />
          </div>
        </div>

        <div className=" sm:h-[25vh] h-fit rounded-2xl mx-auto w-full sm:w-[70vw] bg-green-50 sm:mt-[15vh] mt-[25vh] sm:p-7 p-3">
          <h1 className=" text-bold text-2xl text-center font-medium">
            "Chronically ill people need care that is not limited to visits to
            the doctor. It is time to move from selective treatment to
            continuous care. That's what Oska is for."
          </h1>
          <p className=" text-center mt-5 font-medium">Niklas Best</p>
          <p className=" text-center mt-1">CEO & Co-Founder</p>
        </div>

        <div className="sm:w-[70vw] sm:mt-[15vh] mt-[10vh] mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="w-full sm:w-[40%] sm:pr-5 pb-10 sm:pb-0">
            <h1 className=" font-semibold text-3xl">Our Story</h1>
            <p className=" mt-5">
              We founded Oska Health because we know first-hand the challenges
              of caring for chronically ill people and their families.
            </p>
            <p className=" mt-5">
              We founded Oska Health because we know first-hand the challenges
              of caring for chronically ill people and their families.
            </p>
          </div>
          <div className=" sm:w-[50%] w-full sm:h-[60vh] h-[40vh] rounded-2xl bg-blue-100 overflow-hidden"></div>
        </div>

        <div className=" mt-[15vh] ">
          <h1 className=" text-3xl font-semibold text-center">Leadership</h1>
          <div className=" w-full flex justify-between sm:flex-row flex-col gap-10 sm:gap-0 mt-10">
            {leaders.map((item, index) => {
              return (
                <div className=" h-fit sm:h-[60vh] sm:w-[25vw] w-full rounded-2xl bg-zinc-100 flex flex-col items-center justify-between p-5">
                  <div className="sm:h-[7vw] sm:w-[7vw] h-20 w-20 rounded-full bg-blue-100"></div>
                  <div className="mt-5 text-center font-medium">
                    <p>{item.name}</p>
                    <p>{item.position}</p>
                  </div>
                  <p className=" mt-6">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className=" sm:h-[25vh] h-fit rounded-2xl mx-auto w-full sm:w-[70vw] bg-green-50 sm:mt-[15vh] mt-[10vh] sm:p-7 p-3">
          <h1 className=" text-bold text-2xl text-center font-medium">
            "What do I like most about working at Oska Health? Our claim to help
            people and to work in a team that is fully behind the work."
          </h1>
          <p className=" text-center mt-5 font-medium">Niklas Best</p>
          <p className=" text-center mt-1">CEO & Co-Founder</p>
        </div>

        <div className="sm:w-[70vw] sm:mt-[15vh] mt-[10vh] mx-auto flex flex-col sm:flex-row-reverse justify-between items-center">
          <div className="w-full sm:w-[40%] sm:pr-5 pb-10 sm:pb-0">
            <h1 className=" font-semibold text-2xl">Interested in becoming part of Oska?</h1>
            <button className=" mt-5 px-5 py-3 text-white rounded-full bg-violet-950">Vacancies</button>
          </div>
          <div className=" sm:w-[50%] w-full sm:h-[60vh] h-[40vh] rounded-2xl bg-blue-100 overflow-hidden"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
