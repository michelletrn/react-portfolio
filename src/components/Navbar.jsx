import React from "react";
import { resume } from "../assets";

const links = ["about", "portfolio", "contact"];

function Navbar({ currentPage, setCurrentPage }) {
  
  return (
    <header id="navbar-container">
      <a
        id="name"
        onClick={() => setCurrentPage("about")}
        className={currentPage === "about" ? "nav-link active" : "nav-link"}
      >
        mt
      </a>
      <ul className="navbar-list">
        {links.map((link, index) => (
          <li
            onClick={() => setCurrentPage(link)}
            key={index}
            className={
              currentPage === link ? "nav-link active navbar-list" : "nav-link"
            }
          >
            {link}
          </li>
        ))}
        <li>
          <a target='_blank' href={resume} className="resume">
            resume
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
