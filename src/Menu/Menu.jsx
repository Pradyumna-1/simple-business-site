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
          About Us
        </NavLink>

        <NavLink
          exact
          className={({ isActive }) => {
            return isActive ? "active_class" : "";
          }}
          to="/services"
        >
          Services
        </NavLink>

        <NavLink
          exact
          className={({ isActive }) => {
            return isActive ? "active_class" : "";
          }}
          to="/user/Pradyumna/KumarNaik"
        >
          User
        </NavLink>
        <NavLink
          exact
          className={({ isActive }) => {
            return isActive ? "active_class" : "";
          }}
          to="/search"
        >
          Search
        </NavLink>

        <NavLink
          exact
          className={({ isActive }) => {
            return isActive ? "active_class" : "";
          }}
          to="/searchresult"
        >
          SearchResult
        </NavLink>

        <NavLink
          exact
          className={({ isActive }) => {
            return isActive ? "active_class" : "";
          }}
          to="/contact"
        >
          Contact Us
        </NavLink>
      </div>

      <br />
      {/* <a href="/">About</a>

      <a href="/contact">Contact</a> */}
    </>
  );
};
export default Menu;
