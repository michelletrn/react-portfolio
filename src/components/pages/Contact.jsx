import React from "react";

const handleLink = (link) => {
  window.open(link)
}

const Contact = () => {
  return (
    <section class="contact" id="contact">
      <h2 class="section-header">Contact</h2>
      <div class="contact-content">
        <p>
          Get in touch via email with the button below, or click on the social
          icons!
        </p>
        <a href="mailto:tranmichelle997@gmail.com" >
          <button>Email Me!</button>
        </a>

        <ul class="social-icons">
          <li>
            <a
              id="linkedin-icon"
              onClick={() =>
                handleLink("https://www.linkedin.com/in/m-chelletran/")
              }
            >
              <i class="bx bxl-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              id="github-icon"
              onClick={() => handleLink("https://github.com/michelletrn")}
            >
              <i class="bx bxl-github"></i>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
