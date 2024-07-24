import React from "react";
import "./Menu.css";
import { Link } from "react-scroll";
import {
  FcAbout,
  FcBiotech,
  FcBusinessContact,
  FcHome,
  FcPortraitMode,
  FcReading,
  FcVideoProjector,
} from "react-icons/fc";
import profile from "../../assets/Images/photo_1.png";
// import Zoom from "react-reveal/Zoom";
// import Fade from "react-reveal/Fade";
const Menu = ({ toogle }) => {
  return (
    <>
      {toogle ? (
        <>
          {/* <Zoom> */}
            <div className="navbar-profile-pic">
              <img src={profile} alt="profile-pic" />
            </div>
          {/* </Zoom> */}
          <div className="nav-items">
            {/* <Fade left> */}
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="home"
                    smooth={true}
                    spy={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcHome />
                    Home
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="about"
                    smooth={true}
                    spy={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcAbout />
                    About
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="education"
                    smooth={true}
                    spy={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcReading />
                    Education
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="techstack"
                    smooth={true}
                    spy={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcBiotech />
                    Tech Stack
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="project"
                    smooth={true}
                    spy={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcVideoProjector />
                    Projects
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="workexp"
                    smooth={true}
                    spy={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcPortraitMode />
                    Work Experience
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="contact"
                    smooth={true}
                    spy={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcBusinessContact />
                    Contact
                  </Link>
                </div>
              </div>
            {/* </Fade> */}
          </div>
        </>
      ) : (
        // <Fade left>
          <div className="nav-item nav-linkcenter">
            <div className="nav-link">
              <Link
                to="home"
                smooth={true}
                spy={true}
                offset={-100}
                duration={100}
              >
                <FcHome title="Home" className="nav-linkheightwidth" />
              </Link>
            </div>
            <div className="nav-link">
              <Link
                to="about"
                smooth={true}
                spy={true}
                offset={-100}
                duration={100}
              >
                <FcAbout title="About" className="nav-linkheightwidth" />
              </Link>
            </div>
            <div className="nav-link">
              <Link
                to="education"
                smooth={true}
                spy={true}
                offset={-100}
                duration={100}
              >
                <FcReading title="Education" className="nav-linkheightwidth" />
              </Link>
            </div>
            <div className="nav-link">
              <Link
                to="techstack"
                smooth={true}
                spy={true}
                offset={-100}
                duration={100}
              >
                <FcBiotech title="Tech Stack" className="nav-linkheightwidth" />
              </Link>
            </div>
            <div className="nav-link">
              <Link
                to="project"
                smooth={true}
                spy={true}
                offset={-100}
                duration={100}
              >
                <FcVideoProjector
                  title="Projects"
                  className="nav-linkheightwidth"
                />
              </Link>
            </div>
            <div className="nav-link">
              <Link
                to="workexp"
                smooth={true}
                spy={true}
                offset={-100}
                duration={100}
              >
                <FcPortraitMode
                  title="Work Experience"
                  className="nav-linkheightwidth"
                />
              </Link>
            </div>
            <div className="nav-link">
              <Link
                to="contact"
                smooth={true}
                spy={true}
                offset={-100}
                duration={100}
              >
                <FcBusinessContact
                  title="Contact"
                  className="nav-linkheightwidth"
                />
              </Link>
            </div>
          </div>
        // </Fade>
      )}
    </>
  );
};

export default Menu;
