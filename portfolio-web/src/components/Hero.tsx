import React from "react";
import Navbar from "./Navbar";

function Hero() {
  return (
    <>
      <div className="bg-[url()] lg:bg-[url(/Home.png)] min-h-screen bg-cover">
        {/* <Navbar /> */}
        <div className="container flex justify-center lg:justify-end items-center h-[calc(100vh-60px)]">
          <div className="pr-10">
            <div className=" text-[72px] md:text-[115px] lg:text-[128px] font-bold leading-tight flex justify-center items-center">
              <div>
                <p>Hello,</p>
                <p>I am</p>
                <p>Yuanda</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
