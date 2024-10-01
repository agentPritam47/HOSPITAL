import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useEffect } from "react";

const Info = () => {
  const card1 = useRef();
  const card2 = useRef();
  const fe1 = useRef();
  const fe2 = useRef();
  const fe3 = useRef();
  const lb = useRef();
  const lb1 = useRef();
  const lb2 = useRef();
  const lb3 = useRef();
  const lb4 = useRef();


  const loaderPath = useRef(); // Ref for the path inside the SVG

  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1 });
    const tl2 = gsap.timeline({ repeat: -1 });
    const tl3 = gsap.timeline({ repeat: -1 });


    const btl = gsap.timeline({repeat: -1})
    const path = loaderPath.current;
    const pathLength = path.getTotalLength();

    tl.to(card1.current, {
      duration: 1,
      delay: 1,
      bottom: 0,
      ease: "Power2.easeInOut",
    });
    tl.to(card2.current, {
      top: 5,
      opacity: 1,
      duration: 1,
      ease: "Power2.easeInOut",
    });
    tl.to(card2.current, {
      top: 10,
      opacity: 0,
      duration: 1,
      ease: "Power2.easeInOut",
      delay: 5,
    });
    tl.to(card1.current, {
      bottom: -50,
      opacity: 0,
      duration: 1,
      ease: "Power2.easeInOut",
    });

    tl2.to(fe1.current, {
      x: 60,
      opacity: 1,
      duration: 1,
      ease: "Power2.easeInOut",
    });
    tl2.to(fe2.current, {
      x: 80,
      opacity: 1,
      duration: 1,
      ease: "Power2.easeInOut",
    });
    tl2.to(fe3.current, {
      x: 100,
      opacity: 1,
      duration: 1,
      ease: "Power2.easeInOut",
    });
    tl2.to(fe1.current, {
      opacity: 0,
      duration: 1,
      delay: 4,
      ease: "Power2.easeInOut",
    });
    tl2.to(fe2.current, {
      opacity: 0,
      duration: 1,
      ease: "Power2.easeInOut",
    });
    tl2.to(fe3.current, {
      opacity: 0,
      duration: 1,
      ease: "Power2.easeInOut",
    });


    tl3.to(lb.current,{
      top: "30%",
      duration: 1.5
    },'anim')
    tl3.to(lb1.current,{
      opacity: 1,
      duration: 1.5
    },'anim')
    tl3.to(lb.current,{
      top: "20%",
      duration: 1.5
    },'anim1')
    tl3.to(lb2.current,{
      opacity: 1,
      duration: 1.5
    },'anim1')
    tl3.to(lb.current,{
      top: "10%",
      duration: 1.5
    },'anim2')
    tl3.to(lb3.current,{
      opacity: 1,
      duration: 1.5
    },'anim2')
    tl3.to(lb.current,{
      top: "0%",
      duration: 1.5
    },'anim3')
    tl3.to(lb4.current,{
      opacity: 1,
      duration: 1.5
    },'anim3')
    tl3.to(lb.current,{
      opacity: 0,
      duration: .5,
    },'b')


    gsap.set(path, {
      strokeDasharray: pathLength,
      strokeDashoffset: 430,
    });
    
    btl.to(path, {
      strokeDashoffset: 0,
      duration: 6,
    });
    btl.to(path, {
      opacity: 0
    },'b');
  });



  return (
    <div className=" w-full sm:py-10 font-[bolld] font-semibold px-5 pt-20">
      <h1 className=" text-black text-xl sm:text-5xl text-center sm:block hidden">
        Whatever healthy means to you,
        <br /> Oska is there on your journey.
      </h1>
      <h1 className=" pb-10 text-3xl text-black block sm:hidden text-center">Whatever healthy means to you, Oska is there on your journey.</h1>

      <div className=" sm:px-[10vw] py-[5vw] ">
        <div className=" flex flex-col sm:flex-row justify-between items-center">
          <div className="  sm:h-[30vw] h-[30vh] w-[30vh] sm:w-[30vw] overflow-hidden  ml-10 sm:ml-0 flex items-end relative">
            <div className=" sm:h-[15vw] h-[15vh] w-[25vh] sm:w-[20vw] rounded-2xl bg-red-100 relative flex justify-center">
              <div
                ref={card1}
                className=" sm:h-[25vw] h-[29vh] w-[20vh] sm:w-[17vw] rounded-xl bg-blue-300 absolute bottom-[-200%]"
              ></div>
            </div>

            <div
              ref={card2}
              className=" opacity-0 sm:h-[12vw] h-[12vh] w-[10vh] sm:w-[10vw] bg-red-500 rounded-2xl absolute top-[10%] right-[10%] sm:right-[30%]"
            ></div>
          </div>

          <div className=" w-full sm:w-[40%] mt-10 sm:mt-0">
            <h1 className=" text-3xl">Personal health coaching</h1>
            <p className=" font-[regular] mt-5">
              Our healthcare team provides you with tailored care. Experienced
              medical care professionals and nutritionists, always available for
              you via chat and regular video call
            </p>
          </div>
        </div>

        <div className=" flex flex-col-reverse sm:flex-row justify-between items-center pt-14">
          <div className=" w-full sm:w-[40%] mt-10 sm:mt-0">
            <h1 className=" text-3xl">Easy tips for your everyday</h1>
            <p className=" mt-5 font-[regular]">
              From better blood pressure control, to guidance around medication
              intake, nutrition tips and much more. We help you improve without
              cutting out your favourite foods
            </p>
          </div>

          <div className=" flex-shrink-0 sm:h-[25vw] h-[30vh] w-[25vh] rounded-2xl sm:w-[20vw] bg-red-100 relative">
            <div
              ref={fe1}
              className=" opacity-0 sm:h-[6vw] h-[6vh] w-[90%] rounded-2xl bg-zinc-50 shadow-xl absolute top-[10%] left-[40%] -translate-x-1/2"
            ></div>
            <div
              ref={fe2}
              className=" opacity-0 sm:h-[6vw] h-[6vh] w-[90%] rounded-2xl bg-zinc-50 shadow-xl absolute top-[40%] left-[40%] -translate-x-1/2"
            ></div>
            <div
              ref={fe3}
              className=" opacity-0 sm:h-[6vw] h-[6vh] w-[90%] rounded-2xl bg-zinc-50 shadow-xl absolute top-[70%] left-[40%] -translate-x-1/2"
            ></div>
          </div>
        </div>

        <div className=" flex flex-col sm:flex-row justify-between items-center pt-14">
          <div className=" relative sm:h-[25vw] h-[30vh] w-[25vh] sm:w-[20vw] rounded-2xl flex justify-center items-center bg-green-100 ">
            <svg height="100%" width="100%" viewBox="0 0 200 200">
              <path
                ref={loaderPath}
                d="M 100,50 a 70,70 0 1,0 0,140 a 70,70 0 1,0 0,-140"
                stroke="#75ae8f"
                strokeWidth="10"
                fill="none"
                strokeLinecap="round"
              />
            </svg>

            <div className=" -translate-x-1/2 -translate-y-1/2 sm:h-[10vw] h-[10vh] w-[10vh] sm:w-[10vw] rounded-full bg-white absolute top-[58%] left-1/2"></div>

            <div ref={lb} className=" w-[15vh] sm:w-[10vw] top-[50%] absolute left-[110%] flex flex-col justify-center gap-5 -translate-x-1/2 h-full bottom-0">
              <div ref={lb1} className="shadow-xl opacity-0  w-full h-[5vh] sm:h-[3vw] bg-white rounded-2xl"></div>
              <div ref={lb2} className="shadow-xl opacity-0 w-full h-[5vh] sm:h-[3vw] bg-white rounded-2xl"></div>
              <div ref={lb3} className="shadow-xl opacity-0  w-full h-[5vh] sm:h-[3vw] bg-white rounded-2xl"></div>
              <div ref={lb4} className="shadow-xl opacity-0  w-full h-[5vh] sm:h-[3vw] bg-white rounded-2xl"></div>
            </div>
          </div>

          <div>
            <h1 className=" text-3xl mt-10 sm:mt-0">A plan - just for you</h1>
            <p className=" pt-5 font-[regular]">Our tailored plans match your needs to support you supporting your health.</p>
            <button className=" bg-black text-white font-medium px-4 py-3 rounded-full mt-5">Find out more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;