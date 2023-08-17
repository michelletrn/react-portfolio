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
            Hi, <span>I'm Michelle</span>
          </h1>
          <h2>Full Stack Developer | Registered Nurse</h2>
          <p>
            From Care to Code: Follow my journey into the world of Tech! I'm
            thrilled to share my transition from nursing to technology with you.
            This portfolio is a testament to my progression, showcasing the
            projects I've undertaken, the skills I've acquired, and the unique
            perspective I bring as a nurse-turned-techie.
          </p>

          <br />
          <button className="cont-btn">
            <a onClick={() => setCurrentPage("about")}>learn more</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
