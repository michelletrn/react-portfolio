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
              skills in building web applications from front end to back end.
              <br />
              <br />
              I've always been fascinated by technology, but never thought of it
              as a career path. I decided to try coding as a hobby on my days
              off and found that I enjoy the problem solving aspect of it and
              how it allows me the space to express myself.
              <br />
              <br />
              Hobbies: Games ( mostly Valorant ), Gymming, Singing, Hanging out
              with my family
            </p>

          </div>
          <div className="about-img">
            <img id="profile" src={abt} alt="placeholder img" />
          </div>
        </section>
        <div id="table">
          <h2>skills</h2>
          <table>
            <tr>
              <th>Front-end</th>
              <td>HTML/CSS</td>
              <td>React</td>
              <td>Handlebars</td>
              <td>Bootstrap</td>
              <td>Materialize</td>
              <td>Tailwind</td>
            </tr>
          </table>
          <br />
          <table>
            <tr>
              <th>Back-end</th>
              <td>Javascript (Node.js)</td>
              <td>Express.js</td>
              <td>MySQL</td>
              <td>MongoDB</td>
              <td>Authentication</td>
            </tr>
          </table>
          <br />
          <table>
            <tr>
              <th>Tools</th>
              <td>Node Package Manager (NPM)</td>
              <td>Git/Github</td>
              <td>Heroku</td>
              <td>Figma</td>
              <td>Wordpress</td>
            </tr>
          </table>
        </div>
      </div>

    </>
  );
};

export default About;
