import React from "react";
import "./ArrowUp.sass";

const ArrowUp = (props) => {
  let arrowClass = "arrowUp";

  if (props.open) {
    arrowClass = "arrowUp opened";
  }

  return (
    <div className={arrowClass} onClick={props.scroll}>
      <i class="fas fa-angle-up"></i>
    </div>
  );
};

export default ArrowUp;
