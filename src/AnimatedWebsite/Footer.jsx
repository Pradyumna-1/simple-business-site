import React from "react";
const year = new Date().getFullYear();
const Footer = () => {
  return (
    <>
      <footer className="bg-light text-center ">
        <p>@copyright {year}. all rights are reserved.</p>
      </footer>
    </>
  );
};
export default Footer;
