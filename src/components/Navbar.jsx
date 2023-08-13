import React from "react";
import { mtlogo } from "../assets";


const links = ["home" ,"about", "portfolio", "contact"];

function Navbar({ currentPage, setCurrentPage }) {
  
  return (
    <header id="navbar-container">
      <a
        id="name"
        onClick={() => setCurrentPage("about")}
        className={currentPage === "about" ? "nav-link active" : "nav-link"}
      >
        <img src={mtlogo} id="logo"/>
      </a>
      <ul className="navbar-list">
        {links.map((link, index) => (
          <li
            onClick={() => setCurrentPage(link)}
            key={index}
            className={
              currentPage === link ? "nav-link active" : "nav-link"
            }
          >
            {link}
          </li>
        ))}
        {/* <li>
          <a target='_blank' href={resume} className="resume">
            resume
          </a>
        </li> */}
      </ul>
    </header>
  );
}

export default Navbar;
