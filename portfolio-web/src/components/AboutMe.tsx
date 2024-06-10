import Link from "next/link";

function AboutMe() {
  return (
    <div className="mx-auto text-slate-400">
      <p>
        I am a Fullstack Engineer. I have skills how to build web application
        from scratch. I use Node js (express), React Js, Tailwind, MySQL, and
        other libraries.
      </p>
      <br />
      <p>
        I&#39;ve graduated from Web & Development Bootcamp from Purwadhika
        (August 2023) and also UI/UX Research & Design Bootcamp organized by
        Binar Academy (August 2022). I learned a lot from Bootcamp and ready to
        get a job as Software Engineer, Front-End, Back-End, Fullstack Engineer,
        and also UI/UX Designer and/or Researcher.
      </p>
      <br />
      <p>
        I&#39;m a quick learner, love challenges that could improve knowledge
        and skills, and I&#39;m ready to collaborate in a team.
      </p>
      <br />
      <br />
      <Link
        href="https://drive.google.com/file/d/1H_wrE9hyF-GcX2BJVygEjeGTSoKjM7RH/view?usp=sharing"
        target="blank"
      >
        <div className="flex gap-4 cursor-pointer">
          <p className="border-b-4 inline-block text-xl mb-4 color-primary">
            View my resume
          </p>
          <div className="w-4">
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              id="svg-arrow"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              ></path>
            </svg>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default AboutMe;
