import React from "react";

const Info = props => {
  return (
    <div className="game-info">
      <ol className="list-step">{props.moves}</ol>
      <button className="btn-info" onClick={props.clicked}>
        Switch Sort
      </button>
    </div>
  );
};

export default Info;
