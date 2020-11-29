import React from "react";
import { NavLink } from "react-router-dom";
import "./Logo.sass";
const Logo = (props) => {
  let Aclass = "logo";
  if (props.open) {
    Aclass = "logo black";
  }
  return (
    <NavLink className={Aclass} to="/">
      MP
    </NavLink>
  );
};

export default Logo;
