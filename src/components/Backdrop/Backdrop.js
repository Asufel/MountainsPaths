import React from "react";
import "./Backdrop.css";

const backdrop = (props) => (
  <div className="backdrop" onClick={props.close}>
    {/* <button className="backdrop__close">
      X
    </button> */}
  </div>
);

export default backdrop;
