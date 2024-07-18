import React from "react";
import weather from "../assets/images/weather.jpg"
import gallery from "../assets/images/gallery.jpg";
import pizza from "../assets/images/Pizza.jpg";
import calculator from "../assets/images/Calculator.jpg";
import shopping from "../assets/images/shopping.png";

const Project = () => {
  const projects = [
    
    {
      img: gallery,
      name: "Gallery Filter",
      github_link: "https://github.com/gungun13/Gallery-Filter",
      live_link: "https://gallery-filter-six.vercel.app/",
    },
    {
      img: weather,
      name: "Weather App",
      github_link: "https://github.com/gungun13/TAI-IP-WeatherApp",
      live_link: "https://weather-app-kappa-puce.vercel.app/",
    },
    {
      img: calculator,
      name: "Calculator",
      github_link:"https://github.com/gungun13/Calculator-app",
      live_link: "https://calculator-app-d8bo.vercel.app/",
    },
    {
      img: shopping,
      name: "E-commerce",
      github_link: "https://github.com/gungun13/shopping_app",
      live_link: "",
    },
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex flex-wrap justify-center gap-6 px-5 mx-auto items-center relative">
        {projects.map((project_info, i) => (
          <div key={i} className="w-96 max-w-sm bg-slate-700 rounded-xl p-4">
            <img src={project_info.img} alt="" className="rounded-lg" />
            <h3 className="text-xl my-4">{project_info.name}</h3>
            <div className="flex gap-3">
              <a
                href={project_info.github_link}
                target="_blank"
                className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
              >
                Github
              </a>
              <a
                href={project_info.live_link}
                target="_blank"
                className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
