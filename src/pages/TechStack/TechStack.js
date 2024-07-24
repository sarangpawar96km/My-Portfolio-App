import React from "react";
import "./TechStack.css";
import { TechStackList } from "../../assets/utils/TechStackList";
// import RubberBand from "react-reveal/RubberBand";
// import Fade from "react-reveal/Fade";
const TechStack = () => {
  return (
    <>
      <div className="Tech-stack" id="techstack">
        <div className="Tech-stack-container">
          {/* <RubberBand> */}
            <div className="Tech-stack-heading">
              <h1>Technologies Stack</h1>
            </div>

            <p>
              👉Including Programming Languages, Frameworks, Databases,
              Front-End and BackEnd Tools, and APIs.👈
            </p>
          {/* </RubberBand> */}
          <div className="Tech-details">
            {TechStackList.map((Tech) => (
              // <Fade left>
              <div className="tech-card" key={Tech._id}>
                <Tech.icon className="Tech-Icon" />
                <h5>{Tech.name}</h5>
              </div>
              // </Fade>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TechStack;
