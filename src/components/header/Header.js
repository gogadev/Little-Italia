import React from "react";

import logo from "../../assets/logo.jpg";

import "./header.style.css";

const Header = () => {
  return (
    <header>
      <h1 className="title">Little Italia</h1>
      <img className="logo" src={logo} alt="Hat" />
      <div className="sub-title">
        {" "}
        <h3 className="subtitle">Customize Your Pizza</h3>
      </div>
    </header>
  );
};

export default Header;
