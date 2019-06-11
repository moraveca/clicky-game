import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card" onClick={() => props.checkGuesses(props.id)}>
      <img className="card-img" src={props.image} alt={props.name} />
    </div>
  );
}

export default FriendCard;
