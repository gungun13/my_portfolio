import React from "react";
import hero from "../assets/images/hero3.png";
const Home= () => {
  const social_media = [
    {
      img: "logo-github",
      link: "https://github.com/gungun13",
    },
    {
      img: "logo-linkedin",
      link: "https://www.linkedin.com/in/gungun-garg-41215521b/",
    }
  ]
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={hero} alt="" style={{ width: "60%", height: "auto" }}className="md:w-11/12 h-full object-cover " />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br /> 
            </span>
            I'm <span>Gungun</span>
          </h1>
          <p className="md:text-md md:leading-normal leading-5 mt-4 ">
            Enthusiastic and skilled frontend developer with a solid foundation in HTML, CSS, Java Script, and React js, dedicated to crafting intuitive interfaces and seamless user interactions. Eager to apply my skills and knowledge to real-world projects and continue learning and growing in the field.
          </p>

          <a href="./src/assets/Resume_Gungun_BCOE.pdf" download>
            <button className="btn-primary mt-8">Download CV</button>
          </a>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media.map((socialMediaItem, index) => (
              <a
                key={index}
                href={socialMediaItem.link}
                target="_blank"
                className="text-gray-600 hover:text-white cursor-pointer"
              >
                <ion-icon name={socialMediaItem.img}></ion-icon>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

