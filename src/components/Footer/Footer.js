import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        background: "Black",
        color: "white",
        textAlign: "center",
        padding: "5px 0px 20px 0px",
      }}
    >
      Made by{" "}
      <strong><a
        style={{
          color: "red",
          textDecoration : "none"
        }}
        href="https://github.com/nitendra-rana"
        rel="noreferrer"
        target="_blank"
        
      >
        Nitendra Rana
      </a></strong>
    </div>
  );
};

export default Footer;