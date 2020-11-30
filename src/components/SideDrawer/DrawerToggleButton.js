import React from "react";
import "./DrawerToggleButton.sass";

const drawerToggleButton = (props) => {
  let lines = "toggle__button-line";
  let burger = "toggle__button";

  if (props.open) {
    lines = "toggle__button-line open";
    burger = "toggle__button open";
  }

  return (
    <div className={burger} onClick={props.click}>
      <div className={lines} />
      <div className={lines} />
      <div className={lines} />
    </div>
  );
};

export default drawerToggleButton;
