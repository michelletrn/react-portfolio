import React from "react";

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
      <ul class="navbar-list">
        {links.map((link) => (
          <li
            onClick={() => setCurrentPage(link)}
            className={
              currentPage === link ? "nav-link active navbar-list" : "nav-link"
            }
          >
            {link}
          </li>
        ))}
        <li>
          <a target='_blank' href="#" class="resume">
            resume
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
