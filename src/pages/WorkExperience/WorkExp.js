import React from "react";
import "./WorkExp.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdDeveloperMode } from "react-icons/md";
import { useTheme } from "../../context/ThemeContext";
// import Swing from "react-reveal/Swing";
const WorkExp = () => {
  const [theme] = useTheme();
  return (
    <>
      <div className="workexperience" id="workexp">
        <div className="workexperience-container">
          {/* <Swing> */}
            <div className="workexperience-heading">
              <h1>Work Experience</h1>
            </div>
          {/* </Swing> */}
          <div className="workexperience-details-container">
            <VerticalTimeline lineColor="#3b8ff3">
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={
                  theme === "dark"
                    ? { background: "rgb(79, 78, 78)", color: "#fafafa" }
                    : { background: "#fafafa", color: "rgb(79, 78, 78)" }
                }
                contentArrowStyle={{
                  borderRight: "7px solid  #3b8ff3",
                }}
                date="May 2023 - June 2023"
                iconStyle={{ background: "#f159a2", color: "#fff" }}
                icon={<MdDeveloperMode />}
              >
                <h4 className="vertical-timeline-element-title">
                  Web Developer
                </h4>
                <h5 className="vertical-timeline-element-subtitle">
                  InternPe, Pune
                </h5>
                <p>Internship</p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
