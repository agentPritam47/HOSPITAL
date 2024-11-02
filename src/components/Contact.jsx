import React from "react";
import Footer from "./Footer";

const Contact = () => {
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
      <div className="overflow-x-hidden relative overflow-hidden h-fit  sm:pb-5 pb-[20vh] w-full pt-7 px-[5vw] lg:px-[10vw] font-[bolld]">
        <div className=" w-full h-[60vh] lg:h-[60vh] mt-[3vw] rounded-2xl flex lg:flex-row flex-col lg:overflow-hidden relative bg-red-300">
          <div className="lg:pl-[5vw] lg:pr-[6vw] pl-[3vw] pr-[3vw] py-[7.5vw] lg:h-full h-[100%] lg:w-[55%] lg:rounded-none rounded-2xl w-full bg-blue-400 flex justify-center items-center">
            <div className="h-full w-full ">
              <h3 className=" text-white text-3xl font-bold pb-5">
                Contact Cuore
              </h3>
              <p className=" text-white mt-5">
                Inquire: <br /> info@oska-health.com
              </p>
              <p className=" text-white mt-5">
                Press: <br /> press@oska-health.com
              </p>
              <p className=" text-white mt-5">
                Call us: <br /> +49 69 348 666 999
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
      </div>

      <div className="sm:w-[70vw] sm:mt-[15vh] mt-[10vh] mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="w-full sm:w-[40%] sm:pr-5 pb-10 sm:pb-0">
            <h1 className=" font-semibold text-3xl">Contact Us</h1>
            <p className=" mt-5">
              We founded Oska Health because we know first-hand the challenges
              of caring for chronically ill people and their families.
            </p>
            
          </div>
          <div className=" sm:w-[50%] w-full sm:h-[60vh] h-[40vh] rounded-2xl bg-blue-100 overflow-hidden">
            
          </div>
        </div>
      <Footer />
    </div>
  );
};

export default Contact;
