import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  return (
    <>
      <div className="w-full h-16  px-24 flex justify-between items-center fixed bg-slate-950">
        <div className="text-xl font-medium">Yuanda</div>
        <div>
          <ul className="gap-10 lg:gap-16 hidden md:flex">
            <li className="menuLink">About Me</li>
            <li className="menuLink">Skills</li>
            <li className="menuLink">Projects</li>
            <li className="menuLink">Contact Me</li>
          </ul>
        </div>

        <AiOutlineMenu className="md:hidden" size={30} />
      </div>
    </>
  );
}

export default Navbar;
