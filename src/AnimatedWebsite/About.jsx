import React from "react";
import web from "./images/hero-img.png";

import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to our page"
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};
export default About;
