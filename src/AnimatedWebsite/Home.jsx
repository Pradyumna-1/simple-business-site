import React from "react";
import web from "./images/img2.svg";
// import { NavLink } from "react-router-dom";
import Common from "./Common";
const Home = () => {
  return (
    <>
      <Common
        name="Grow your business with"
        imgsrc={web}
        visit="/contact"
        btname="Get Started"
      />
    </>
  );
};
export default Home;
