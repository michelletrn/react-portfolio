import React from "react";
import { resume } from "../assets";

function Footer() {
  return (
    <footer>
      <ul className="social-icons-footer">
        <h2>Contact</h2>
        <li>
          <a target="_blank" href={resume}>
            CV
          </a>
        </li>
        <li>
          <a
            id="email-icon"
            href="mailto:tranmichelle997@gmail.com"
            target="_blank"
          >
            <i class="bx bx-envelope"></i>
          </a>
        </li>
        <li>
          <a
            id="linkedin-icon"
            href="https://www.linkedin.com/in/m-chelletran/"
            target="_blank"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
        </li>
        <li>
          <a
            id="github-icon"
            href="https://github.com/michelletrn"
            target="_blank"
          >
            <i className="bx bxl-github"></i>
          </a>
        </li>
      </ul>
      <p>created by Michelle Tran</p>
    </footer>
  );
}

export default Footer;