import React from "react";
import "./style.css";

function CardDeck(props) {
  return <div className="card-deck">{props.children}</div>;
}

export default CardDeck;
