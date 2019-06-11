import React from "react";
import "./style.css";

function WinsAndLosses(props) {
  return <h3 className="wins-and-losses">{props.children}</h3>;
}

export default WinsAndLosses;
