import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div className="style2">
        <h1>404 Error Page </h1>
        <p>Sorry this page is not available</p>
        <NavLink to='/'> Go Back</NavLink>
      </div>
    </>
  );
};
export default Error;
