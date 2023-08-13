import React from "react";
import { home } from "../assets";

const Home = ({ setCurrentPage }) => {
  return (
    <section className="home">
      <div className="home-content">
        <div className="home-img">
          <img id="profile" src={home} alt="placeholder img"/>
          <br />
        </div>
        <div className="home-text">
          <h1>
            Hello, I'm <span>Michelle</span>
          </h1>
          <h2>Full Stack Developer | Registered Nurse</h2>
          <p>
            From Care to Code: Follow my journey into the world of Tech! I'm
            thrilled to share my transition from nursing to technology with you.
            This portfolio is a testament to my progression, showcasing the
            projects I've undertaken, the skills I've acquired, and the unique
            perspective I bring as a nurse-turned-techie.
            {/* With a nursing degree and 2 years of experience in healthcare, I
            recently completed a coding bootcamp at Rutgers where I developed
            skills in computer science, algorithms, data structures,
            browser-based technologies, and server-side development. My
            coursework covered a variety of languages, including JavaScript,
            HTML/CSS, React.js, and MongoDB, as well as API design, user
            authentication, and Git/Heroku deployment. With my strong foundation
            and eagerness to learn and improve, I am confident in my ability to
            excel in the software development field. */}
          </p>

          <br />
          <button className="cont-btn">
            <a onClick={() => setCurrentPage("contact")}>learn more</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
