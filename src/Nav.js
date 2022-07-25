import React from "react";
import "./Nav.css";
const Nav = () => {
  return (
    <div className="nav">
      <div className="logo">
        SCIENCE
        <p>
          <i class="fa-solid fa-glasses"></i>
        </p>
      </div>
      <div className="navitem">
        <li>
          <a href="/">HOME</a>
        </li>
        <li>
          <a href="/">ABOUT US</a>
        </li>
        <li>
          <a href="/">SERVICE</a>
        </li>
        <li>
          <a href="/">CONTACT</a>
        </li>
        <li id="login">
          <a href="/">LOG IN</a>
        </li>
      </div>
    </div>
  );
};

export default Nav;
