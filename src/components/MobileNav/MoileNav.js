import { React, useState } from "react";
import "./MobileNav.css";
import { GiHamburgerMenu } from "react-icons/gi";
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
import { AiOutlineMenuFold } from "react-icons/ai";
const MoileNav = () => {
  const [Open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!Open);
  };
  const handleMenuClick =()=>{
    setOpen(false)
  }
  return (
    <>
      <div className="mobile-nav">
        <div className="mobile-nav-header">
          {Open ? (
            <AiOutlineMenuFold
              size={30}
              className="hamburger-icon"
              onClick={handleOpen}
            />
          ) : (
            <GiHamburgerMenu
              size={30}
              className="hamburger-icon"
              onClick={handleOpen}
            />
          )}
          <span>Portfolio</span>
        </div>
        {Open && (
          <div className="mobile-nav-menu">
            <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link nav-link-1">
                  <Link
                    to="home"
                    smooth={true}
                    spy={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
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
                    onClick={handleMenuClick}
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
                    onClick={handleMenuClick}
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
                    onClick={handleMenuClick}
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
                    onClick={handleMenuClick}
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
                    onClick={handleMenuClick}
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
                    onClick={handleMenuClick}
                  >
                    <FcBusinessContact />
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MoileNav;
