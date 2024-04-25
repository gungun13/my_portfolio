import React from "react";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home/>
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
