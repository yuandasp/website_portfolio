import AboutMe from "@/components/AboutMe";
import Hero from "@/components/Hero";
import MySkills from "@/components/MySkills";
import Projects from "@/components/Projects";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        id="aboutme"
      >
        <p className="text-xl mb-4">About Me</p>
        <AboutMe />
      </div>
      <div
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        id="myskills"
      >
        <p className="text-xl mb-4">My Skills</p>
        <MySkills />
      </div>
      <div
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        id="myprojects"
      >
        <p className="text-xl mb-4">My Projects</p>
        <Projects />
      </div>
    </>
  );
}
