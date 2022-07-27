import React from "react";
import "./Nav.css";
const Nav = () => {
  return (
    <div className="nav">
      <div className="logo">
        <img
          src="https://cdn.shortpixel.ai/spai/ret_img/https://www.apptio.com/wp-content/uploads/apptio-logo-svg.svg"
          alt=""
        />
      </div>
      <div className="navItem">
        <li>
          <a href="/" className="link">Solutions</a>
        </li>
        <li>
          <a href="/" className="link">Products</a>
        </li>
        <li>
          <a href="/" className="link">Resources</a>
        </li>
        <li>
          <a href="/" className="link">Company</a>
        </li>
        <li>
          <a href="/" className="link started">Get Started</a>
        </li>
        <li>
          <a href="/" className="link">
            <i class="fa-solid fa-magnifying-glass"></i>Search
          </a>
        </li>
      </div>
    </div>
  );
};

export default Nav;
