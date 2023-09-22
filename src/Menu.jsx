import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <div className="menu_style">
        <NavLink
          exact
          className={({ isActive }) => {
            return isActive ? "active_class" : "";
          }}
          to="/"
        >
          Home
        </NavLink>

        <NavLink
          exact
          className={({ isActive }) => {
            return isActive ? "active_class" : "";
          }}
          to="/about"
        >
          About
        </NavLink>

        <NavLink
          exact
          className={({ isActive }) => {
            return isActive ? "active_class" : "";
          }}
          to="/contact"
        >
          Contact
        </NavLink>
      </div>

      <br />
    </>
  );
};
export default Menu;
