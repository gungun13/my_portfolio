import React from "react";
import tailwind from "../assets/images/tailwind.png";
import csslogo from "../assets/images/css3.png"
import reactlogo from "../assets/images/React.png"
import jslogo from "../assets/images/javascript.png"
import htmllogo from "../assets/images/html5.png"

const Skills = () => {
  const skills = [
    {
      logo: htmllogo,
      name: "HTML5",
      count: 85,
    },
    {
      logo: csslogo,
      name: "CSS3",
      count: 70,
    },
    {
      logo: jslogo,
      name: "Javascript",
      count: 85,
    },
    {
      logo: tailwind,
      name: "Tailwind CSS",
      count: 75,
    },
    {
      logo: reactlogo,
      name: "React",
      count: 80,
    },
  ];
  return (
    <section id="skills" className="py-10 bg-gray-800 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl"
            >
              <div
                style={{
                  background: `conic-gradient(rgb(8,145,170) ${skill.count}%,#ddd ${skill.count}%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                  <img src={skill.logo} alt="" />
                </div>
              </div>
              <p className="text-xl mt-3">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
