import React from "react";
import "./style.css";

function HighestScore(props) {
  return <h3 className="highest-score">{props.children}</h3>;
}

export default HighestScore;
