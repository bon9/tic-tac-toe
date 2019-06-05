import React from "react";

const Info = props => {
  return (
    <div className="game-info">
      <div>{props.status}</div>
      <ol className="list-step">{props.moves}</ol>
      <button onClick={props.clicked}>Switch Sort</button>
    </div>
  );
};

export default Info;
