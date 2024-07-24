import React from "react";
import "./Education.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoSchool } from "react-icons/io5";
import { BiSolidSchool } from "react-icons/bi";
import { FaSchool } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";
// import Zoom from "react-reveal/Zoom";
const Education = () => {
  const [theme] = useTheme();
  return (
    <>
      <div className="education" id="education">
        <div className="education-container">
          {/* <Zoom> */}
            <div className="education-heading">
              <h1>Education Details</h1>
            </div>
          {/* </Zoom> */}
          <div className="education-details-container">
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
                date="2021 - 2024"
                iconStyle={{ background: "#f159a2", color: "#fff" }}
                icon={<IoSchool />}
              >
                <h4 className="vertical-timeline-element-title">
                  Bachelor of Computer Application
                </h4>
                <h5 className="vertical-timeline-element-subtitle">
                  Modern College, Pune
                </h5>
                <p>CGPA: 9.05</p>
              </VerticalTimelineElement>

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
                date="2019 - 2021"
                iconStyle={{ background: "#f159a2", color: "#fff" }}
                icon={<BiSolidSchool />}
              >
                <h4 className="vertical-timeline-element-title">
                  Higher Education
                </h4>
                <h5 className="vertical-timeline-element-subtitle">
                  DTAC College, Pune
                </h5>
                <p>Percentage: 81.83</p>
              </VerticalTimelineElement>

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
                date="2018-2019"
                iconStyle={{ background: "#f159a2", color: "#fff" }}
                icon={<FaSchool />}
              >
                <h4 className="vertical-timeline-element-title">
                  Secondary Education
                </h4>
                <h5 className="vertical-timeline-element-subtitle">
                  SSVB school, Ahmednagar
                </h5>
                <p>Percentage: 83.60</p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
