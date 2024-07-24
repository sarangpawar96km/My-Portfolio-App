import React from "react";
import "./Footer.css";
// import Tada from "react-reveal/Tada";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-heading">
            {/* <Tada> */}
              <h4>
                Made with ❤ Sarang Pawar &copy; {new Date().getFullYear()}
              </h4>
            {/* </Tada> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
