import React from "react";
import "./style.css";

function ScoreCard(props) {
  return <h2 className="score-card">{props.children}</h2>;
}

export default ScoreCard;



