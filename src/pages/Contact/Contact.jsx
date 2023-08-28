import React from "react";

const handleLink = (link) => {
  window.open(link)
}

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="section-header">Contact</h2>
      <div className="contact-content">
        <h3>
          Get in touch via email with the button below, or click on the social
          icons!
        </h3>
        <p>Email: tranmichelle997@gmail.com</p>
        <br/>
        <a href="mailto:tranmichelle997@gmail.com" >
          <button className="email-btn">Email Me!</button>
        </a>

        <ul className="social-icons">
          <li>
            <a
              id="linkedin-icon"
              onClick={() =>
                handleLink("https://www.linkedin.com/in/m-chelletran/")
              }
            >
              <i className="bx bxl-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              id="github-icon"
              onClick={() => handleLink("https://github.com/michelletrn")}
            >
              <i className="bx bxl-github"></i>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
