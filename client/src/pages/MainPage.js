import React from "react";

import MyNavbar from "../components/Navbars/MyNavbar";
import Header from "../components/Headers/Header.js";
import AboutMe from "../components/AboutMe/AboutMe.js";
import Skills from "../components/Skills/Skills.js";
import Projects from "../components/Projects/Projects.js";
import Contact from "../components/Contact/Contact.js";
import Footer from "../components/Footers/Footer.js";

function MainPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <div>
      <MyNavbar />
      <Header />
      <div className="main">
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default MainPage;
