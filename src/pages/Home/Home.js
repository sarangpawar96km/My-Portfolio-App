import React from "react";
import { useTheme } from "../../context/ThemeContext";
import Typewriter from "typewriter-effect";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import Resume from "../../assets/Docs/Sarang_Navnath_Pawar_CV.pdf"
import "./Home.css";
// import Fade from "react-reveal/Fade";
const Home = () => {
  const [theme,setTheme]=useTheme()
  const handleTheme = ()=>{
    setTheme((prevState)=>(prevState==='light'?'dark':'light'))
  }
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme==='light'?(<BsMoonStarsFill style={{cursor:"Pointer"}}/>):(<BsSunFill style={{cursor:"Pointer"}}/>)}
        </div>
        <div className="container home-content">
          {/* <Fade top> */}
          <h1>Hi, I'm Sarang Pawar</h1>
          <h2>
            <Typewriter
              options={{
                strings: ["Full Stack Developer.", "Android Developer.", "Java Developer.", "Software Developer.", ".Net Developer."],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          {/* </Fade> */}
          {/* <Fade bottom> */}
          <div className="home-buttons">
          <a href="https://api.whatsapp.com/send?phone=+918788971316" rel="noreferrer" target="_blank" className="btn btn-hire">Hire me</a>
          <a className="btn btn-cv" href={Resume} download="Sarang's Resume">My Resume</a>
          </div>
          {/* </Fade> */}
        </div>
      </div>
    </>
  );
};

export default Home;
