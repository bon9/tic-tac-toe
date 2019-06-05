import React from "react";

const Square = props => {
  let attachedClass = "square";
  if (props.isWinSquare) {
    attachedClass = "square win-class";
  }
  return (
    <button className={attachedClass} onClick={props.onClick}>
      {props.value}
    </button>
  );
};

export default Square;
