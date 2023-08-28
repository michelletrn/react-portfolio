import React from "react";
import { mtlogo } from "../../assets";
import "./Navbar.css"



const links = ["home" ,"about", "portfolio"];

function Navbar({ currentPage, setCurrentPage }) {
  
  return (
    <header id="navbar-container">
      <a
        id="name"
        onClick={() => setCurrentPage("home")}
        className={currentPage === "home" ? "nav-link active" : "nav-link"}
      >
        <img src={mtlogo} id="logo" />
      </a>
      <ul className="navbar-list">
        {links.map((link, index) => (
          <li
            onClick={() => setCurrentPage(link)}
            key={index}
            className={currentPage === link ? "nav-link active" : "nav-link"}
          >
            {link}
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Navbar;
