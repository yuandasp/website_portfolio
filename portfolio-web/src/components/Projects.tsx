import CardProject from "./CardProject";

const datas = [
  {
    projectName: "Pharmacy Web App",
    description:
      "Pharmacy App is an e-commerce web application for selling products and medicines",
    image: "/pharmacy.png",
    link: "https://pharmacy-app.yuandaputri.com/",
    tags: [
      "NodeJS",
      "ReactJS",
      "Express",
      "Redux",
      "Formik",
      "JWT",
      "Nodemailer",
    ],
  },
  {
    projectName: "Kanban App",
    description:
      "A todolist app, as a user, you can create list of your activity that you trying to do. You also can set the deadline time. A notification by email is sent to you once you meet the deadline.",
    image: "/kanban.png",
    link: "https://kanban.yuandaputri.com/login",
    tags: [
      "NodeJS",
      "ReactJS",
      "Express",
      "Google OAuth",
      "node-cron",
      "Tailwind",
    ],
  },
  {
    projectName: "myThreads",
    description: "A social media application to share our thought in words.",
    image: "/mythreads.png",
    link: "https://mythreads.yuandaputri.com/",
    tags: [
      "NextJS",
      "Typescript",
      "MongoDB",
      "Clerk",
      "Uploadthing",
      "Tailwind",
    ],
  },
  {
    projectName: "Pokemon Explorer",
    description:
      "Your Gateway to the Pokemon Universe! Explore the vibrant and expansive world of Pokemon on our website.",
    image: "/pokemon.png",
    link: "https://pokemon.yuandaputri.com/",
    tags: ["NextJS", "GraphQL", "Apollo Client", "Firebase", "Firestore"],
  },
];

function Projects() {
  return (
    <div className="flex flex-col gap-11">
      {/* absolute -inset-4 z-0 hidden rounded transition */}
      {/* motion-reduce:transition-none lg:-inset-6 lg:block */}
      {datas.map((data) => (
        <CardProject
          key={data.link}
          projectName={data.projectName}
          description={data.description}
          image={data.image}
          link={data.link}
          tags={data.tags}
        />
      ))}
    </div>
  );
}

export default Projects;
