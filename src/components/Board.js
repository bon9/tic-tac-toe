import React from "react";
import Square from "./Square";

const Board = props => {
  const board = [];

  const renderSquare = i => {
    return (
      <Square
        value={props.squares[i]}
        key={i}
        onClick={() => props.onClick(i)}
      />
    );
  };

  for (let i = 0; i < 9; i++) {
    board.push(renderSquare(i));
  }

  return (
    <div className="game-board">
      <div className="status">{props.status}</div>
      <div className="board">{board}</div>
    </div>
  );
};

export default Board;
