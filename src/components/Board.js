import React from "react";
import Square from "./Square";

const Board = props => {
  const board = [];

  const renderSquare = (i, iWin) => {
    return (
      <Square
        value={props.squares[i]}
        key={i}
        onClick={() => props.onClick(i)}
        isWinSquare={iWin}
      />
    );
  };

  for (let i = 0; i < 9; i++) {
    let winSquare = false;
    if (props.winnerSquares) {
      // winnerSquares = [2,4,6]
      // i=4, winIndex = 1 (position 4 in  winnerSquares)
      const winIndex = props.winnerSquares.indexOf(i);
      // props.winnerSquares[1] = 4 ? true : false
      winSquare = props.winnerSquares[winIndex] === i ? true : false;
    }
    board.push(renderSquare(i, winSquare));
  }

  return (
    <div className="game-board">
      <div className="board">{board}</div>
    </div>
  );
};

export default Board;
