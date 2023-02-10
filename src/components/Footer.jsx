import React from "react";

function Footer() {
    return (
      <footer>
        <ul className="social-icons-footer">
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