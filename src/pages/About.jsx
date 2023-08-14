import React from "react";
import { abt } from "../assets";

const About = ({ setCurrentPage }) => {
  return (
    <>
      <div className="about-content">
        <section className="about">
          <div className="about-text">
            <h2>about</h2>
            <p>
              With a nursing degree and 2 years of experience in healthcare, I
              recently completed a coding bootcamp at Rutgers where I developed
              skills in computer science, algorithms, data structures,
              browser-based technologies, and server-side development.
              <br />
              <br />
              My coursework covered a variety of languages, including
              JavaScript, HTML/CSS, React.js, and MongoDB, as well as API
              design, user authentication, and Git/Heroku deployment. With my
              strong foundation and eagerness to learn and improve, I am
              confident in my ability to excel in the software development
              field.
            </p>
          </div>
          <div className="about-img">
            <img id="profile" src={abt} alt="placeholder img" />
            <br />
          </div>
        </section>
        <div className="skills">
          <h2>technologies</h2>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default About;
