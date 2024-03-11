import React from "react";
import logo from "/investment-calculator-logo.png";

const Header = () => {
  return (
    <header id="header">
      <img src={logo} alt="logo" />
      <h1>React Investment Calculator</h1>
    </header>
  );
};

export default Header;
