import React from "react";

const links = ["about", "portfolio", "contact"];

function Navbar({ currentPage, setCurrentPage }) {
  return (
    <header id="navbar-container">
      <a
        href="#"
        id="name"
        onClick={() => setCurrentPage("About")}
        className={currentPage === "About" ? "nav-link active" : "nav-link"}
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
          <button
            class="resume"
            onclick={"location.href='assets/MT_resume_2-2023.pdf'"}
          >
            Resume
          </button>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
