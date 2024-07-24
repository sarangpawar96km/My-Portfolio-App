import React from "react";
import aboutImg from "../../assets/Images/photo_1.png";
import "./About.css";
import {Fade} from "react-swift-reveal";
const About = () => {
  return (
    <>
      <div className="about-section" id="about">
        <div className="about-row">
          <Fade bottom>
            <div className="about-img">
              <img src={aboutImg} alt="photo" />
            </div>
          </Fade>

          <div className="about-content">
            <Fade right>
              <div className="about-heading">
                <h1>About me</h1>
              </div>
            </Fade>
            <Fade top>
              <p>
                As a recent graduate from Modern College, Pune with a Bachelor's
                degree in Computer Application, I am passionate about leveraging
                my skills in technology to contribute to innovative projects. My
                academic background and hands-on experience have equipped me
                with a solid foundation in various aspects of computer science
                and web development. <br />I undertook internships that provided
                me with practical industry exposure. In one such role, I
                contributed to developing and maintaining an internal tool for a
                startup, which involved working closely with senior developers
                and understanding the software development lifecycle. This
                experience reinforced my understanding of real-world application
                development and agile methodologies. I am excited to bring my
                enthusiasm for technology, along with my academic and practical
                experiences, to contribute meaningfully to forward-thinking
                projects in the tech industry.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
