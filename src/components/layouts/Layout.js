import React, { useState } from "react";
import Home from "../../pages/Home/Home";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import "./Layout.css";
import Menu from "../Menus/Menu";
import { Fade } from "react-swift-reveal";
const Layout = () => {
  const [toogle, setToogle] = useState(true);

  const handletoogle = () => {
    setToogle(!toogle);
  };
  return (
    <>
      <div className="sidebar-section">
        <div className={toogle ? "sidebar-toggle sidebar" : "sidebar"}>
          <Fade right>
            <div className="sidebar-toggle-icons">
              <p onClick={handletoogle}>
                {toogle ? (
                  <MdKeyboardDoubleArrowLeft size={30} />
                ) : (
                  <MdKeyboardDoubleArrowRight size={30} />
                )}
              </p>
            </div>
          </Fade>
          <Menu toogle={toogle} />
        </div>

        <div className="container">
          <Home />
        </div>
      </div>
    </>
  );
};

export default Layout;
