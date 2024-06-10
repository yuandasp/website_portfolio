function MySkills() {
  const datas = [
    "Node JS",
    "React JS",
    "Express",
    "Next JS",
    "Tailwind CSS",
    "Redux",
    "REST API",
    "Google OAuth",
    "JsonWebToken",
    "Nodemailer",
    "GraphQL",
    "Nginx",
    "MongoDB",
    "MySQL",
    "Typescript",
    "Web Development",
    "Design Thinking"
  ];

  return (
    <div className="flex gap-4 flex-wrap color-text-blue ">
      {datas.map((data, index) => (
        <p key={index} className="px-2 bg-slate-800 rounded-lg">
          {data}
        </p>
      ))}
    </div>
  );
}

export default MySkills;
