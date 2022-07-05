import React, { useState, useEffect } from "react";
import "./Nav.css";
import logo from "../../assets/images/logo.png";
const avatar = "https://cdn.pixabay.com/photo/2014/04/02/10/14/avatar-303199_640.png";

const Nav = () => {
  const [show, setShowHandler] = useState();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        setShowHandler(true);
      } else setShowHandler(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show ? "nav-dark" : ""}`}>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="avatar">
        <img src={avatar} alt="" />
      </div>
    </div>
  );
};

export default Nav;