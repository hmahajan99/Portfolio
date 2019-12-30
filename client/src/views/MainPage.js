import React from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

import AboutMe from "./index-sections/AboutMe.js";
import Skills from "./index-sections/Skills.js";
import Projects from "./index-sections/Projects.js";
import Contact from "./index-sections/Contact.js";

function MainPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <IndexNavbar />
      <IndexHeader />
      <div className="main">
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
        <DemoFooter />
      </div>
    </>
  );
}

export default MainPage;
