import React from "react";
import UrlShortner from "../../assets/Images/url-shortner-2.svg";
import kidsNursery from "../../assets/Images/kids-nursery.png";
import NewsEye from "../../assets/Images/News-Eye.png";
import SWA from "../../assets/Images/swa__3.png";
import Quote from "../../assets/Images/quote_2.png";
import Quiz from "../../assets/Images/quiz_2.png";
import TodoList from "../../assets/Images/todolist.png";
import Ecom from "../../assets/Images/ecom.png";
import Stopwatch from "../../assets/Images/stopwatch_1.png";
import "./Project.css";
import {Jump} from "react-swift-reveal";
import {Fade} from "react-swift-reveal";
const Project = () => {
  return (
    <>
      <div className="projects" id="project">
        <div className="projects-container">
          <Jump>
            <div className="projects-heading">
              <h1>Projects</h1>
            </div>
            <p>👉Check out my projects and their source code.👈</p>
          </Jump>
          <div className="projects-card-container">
            <Fade left>
              <div className="project-card">
                <span className="project-badge">Full Stack</span>
                <div className="project-image">
                  <img src={UrlShortner} alt="Url-shortner" />
                </div>
                <div className="project-technologies">
                  <span className="project-technology-badge">React</span>
                  <span className="project-technology-badge">Node</span>
                  <span className="project-technology-badge">Express</span>
                  <span className="project-technology-badge">MongoDB</span>
                </div>
                <div className="project-title">
                  <h4>URL Shortner Website</h4>
                </div>
                <div className="project-view-btn mobile-margin">
                  <a
                    href="https://github.com/sarangpawar96km/URL-Shortener"
                    target="blank"
                  >
                    View
                  </a>
                </div>
              </div>

              <div className="project-card">
                <span className="project-badge">.NET Full Stack</span>
                <div className="project-image kids-nursery">
                  <img src={kidsNursery} alt="kids-nursery" />
                </div>
                <div className="project-technologies">
                  <span className="project-technology-badge">C#</span>
                  <span className="project-technology-badge">Ms Access</span>
                  <span className="project-technology-badge">
                    Crystal Report
                  </span>
                </div>
                <div className="project-title">
                  <h4 className="kids">Kids Nursery Management</h4>
                </div>
                <div className="project-view-btn">
                  <a
                    href="https://github.com/sarangpawar96km/Kids-Nursery-Management-System"
                    target="blank"
                  >
                    View
                  </a>
                </div>
              </div>

              <div className="project-card">
                <span className="project-badge">Front End</span>
                <div className="project-image">
                  <img src={NewsEye} alt="Url-shortner" />
                </div>
                <div className="project-technologies">
                  <span className="project-technology-badge">JavaScript</span>
                  <span className="project-technology-badge">React</span>
                  <span className="project-technology-badge">Bootstrap</span>
                  <span className="project-technology-badge">API</span>
                </div>
                <div className="project-title">
                  <h4>News Eye Website</h4>
                </div>
                <div className="project-view-btn">
                  <a
                    href="https://github.com/sarangpawar96km/News-Eye"
                    target="blank"
                  >
                    View
                  </a>
                </div>
              </div>
            </Fade>

            <Fade right>
              <div className="project-card">
                <span className="project-badge">Android Full Stack</span>
                <div className="project-image">
                  <img src={SWA} alt="Url-shortner" className="swa-img" />
                </div>
                <div className="project-technologies">
                  <span className="project-technology-badge">XML</span>
                  <span className="project-technology-badge">Java</span>
                  <span className="project-technology-badge">SQL</span>
                </div>
                <div className="project-title">
                  <h4 className="swa">Student Welfare Association</h4>
                </div>
                <div className="project-view-btn">
                  <a
                    href="https://github.com/sarangpawar96km/Student_Welfare_Association"
                    target="blank"
                  >
                    View
                  </a>
                </div>
              </div>

              <div className="project-card">
                <span className="project-badge">Front End</span>
                <div className="project-image">
                  <img src={Quote} alt="Url-shortner" />
                </div>
                <div className="project-technologies">
                  <span className="project-technology-badge">HTML</span>
                  <span className="project-technology-badge">CSS</span>
                  <span className="project-technology-badge">JavaScript</span>
                </div>
                <div className="project-title">
                  <h4>Quotes Generator</h4>
                </div>
                <div className="project-view-btn">
                  <a
                    href="https://github.com/sarangpawar96km/Quotegenerator"
                    target="blank"
                  >
                    View
                  </a>
                </div>
              </div>

              <div className="project-card">
                <span className="project-badge">Front End</span>
                <div className="project-image">
                  <img src={Quiz} alt="Quiz" />
                </div>
                <div className="project-technologies">
                  <span className="project-technology-badge">HTML</span>
                  <span className="project-technology-badge">CSS</span>
                  <span className="project-technology-badge">JavaScript</span>
                </div>
                <div className="project-title">
                  <h4>Quiz App</h4>
                </div>
                <div className="project-view-btn">
                  <a
                    href="https://github.com/sarangpawar96km/Quiz_App"
                    target="blank"
                  >
                    View
                  </a>
                </div>
              </div>
            </Fade>

            <Fade left>
              <div className="project-card">
                <span className="project-badge">Front End</span>
                <div className="project-image">
                  <img src={TodoList} alt="todolist" />
                </div>
                <div className="project-technologies">
                  <span className="project-technology-badge">HTML</span>
                  <span className="project-technology-badge">CSS</span>
                  <span className="project-technology-badge">JavaScript</span>
                </div>
                <div className="project-title">
                  <h4>TO-DO-List</h4>
                </div>
                <div className="project-view-btn">
                  <a
                    href="https://github.com/sarangpawar96km/To-do-list"
                    target="blank"
                  >
                    View
                  </a>
                </div>
              </div>

              <div className="project-card">
                <span className="project-badge">Front End</span>
                <div className="project-image">
                  <img src={Ecom} alt="ecom" />
                </div>
                <div className="project-technologies">
                  <span className="project-technology-badge">HTML</span>
                  <span className="project-technology-badge">CSS</span>
                  <span className="project-technology-badge">JavaScript</span>
                </div>
                <div className="project-title">
                  <h4>E-Commerece Website</h4>
                </div>
                <div className="project-view-btn">
                  <a
                    href="https://github.com/sarangpawar96km/ecommerce_website"
                    target="blank"
                  >
                    View
                  </a>
                </div>
              </div>

              <div className="project-card">
                <span className="project-badge">Front End</span>
                <div className="project-image">
                  <img src={Stopwatch} alt="ecom" />
                </div>
                <div className="project-technologies">
                  <span className="project-technology-badge">HTML</span>
                  <span className="project-technology-badge">CSS</span>
                  <span className="project-technology-badge">JavaScript</span>
                </div>
                <div className="project-title">
                  <h4>Stopwatch</h4>
                </div>
                <div className="project-view-btn">
                  <a
                    href="https://github.com/sarangpawar96km/stopwatch"
                    target="blank"
                  >
                    View
                  </a>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
