import React from "react";
import { avatar } from "../assets";

const About = ({ setCurrentPage }) => {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <div className="about-text">
          <h1>Nice to meet you,</h1>
          <h1>I am Michelle,</h1>

          <h2>
            <span>a full-stack developer.</span>
          </h2>

          <span id="more-about">
            <p>A little bit about me...</p>
          </span>

          <p>
            With a nursing degree and 2 years of experience in healthcare, I
            recently completed a coding bootcamp at Rutgers where I developed
            skills in computer science, algorithms, data structures,
            browser-based technologies, and server-side development. My
            coursework covered a variety of languages, including JavaScript,
            HTML/CSS, React.js, and MongoDB, as well as API design, user
            authentication, and Git/Heroku deployment. With my strong foundation
            and eagerness to learn and improve, I am confident in my ability to
            excel in the software development field.
          </p>

          <br />
          <button className="cont-btn">
            <a onClick={() => setCurrentPage("contact")}>Get in Touch</a>
          </button>
        </div>
        <div className="about-img">
          <img id="profile" src={avatar} alt="placeholder img" />
          <br />
        </div>
      </div>
    </section>
  );
};

export default About;
