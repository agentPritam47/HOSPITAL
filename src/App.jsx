import React, { useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import Home from "./components/Home";
import { Link, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="overflow-x-hidden relative overflow-hidden h-fit w-full pt-7 px-[5vw] lg:px-[10vw] font-[bolld]">
        <nav className="relative h-fit  w-full flex justify-between items-center">
          <div className=" relative z-[999] sm:h-[4vw] sm:w-[10vw] h-[8vh] w-[12vh] flex items-center justify-center ">
            <img
              className=" h-full w-full object-contain scale-125"
              src="/Logoo-removebg-preview.png"
              alt=""
            />
          </div>

          <div className=" lg:flex items-center gap-10 text-[1.05vw] font-bold lg:visible hidden">
            <Link className=" inline-block" to="/about">
              About us
            </Link>
            <Link className=" inline-block" to="/contact">Contact us</Link>
          </div>

          <div className=" sm:hidden block">
            <i
              onClick={() => setOpen(true)}
              className="ri-menu-line text-xl"
            ></i>
          </div>
        </nav>

        <div
          className={`h-fit rounded-2xl w-full fixed top-0 right-0 bg-zinc-100 shadow-2xl z-[999] flex flex-col gap-10 sm:hidden items-start px-5 py-10 text-xl transform ${
            open ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-500`}
        >
          <div className=" w-full flex justify-end text-xl">
            <i onClick={() => setOpen(false)} className="ri-close-line"></i>
          </div>
          <Link to="/about" className="inline-block">About us</Link>
          <Link to="/contact" className="inline-block">Contact us</Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
