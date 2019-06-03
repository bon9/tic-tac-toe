import React, { useState } from "react";
import Board from "./Board";

import calculateWinner from "./../utility";

const Game = props => {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [xIsNext, setXIsNext] = useState(true);
  const [curNumber, setCurNumber] = useState(0);

  const handleClick = i => {
    // create a new sliced history
    const newHistory = history.slice(0, curNumber + 1);
    // current object = last element in newHistory
    const current = newHistory[newHistory.length - 1];
    // copy current object squares in newSquares
    const newSquares = current.squares.slice();
    // check
    if (calculateWinner(newSquares) || newSquares[i]) {
      return;
    }
    // set X or O in element to newSquares array
    newSquares[i] = xIsNext ? "X" : "O";
    setXIsNext(!xIsNext);
    //set in state new history with newSquares in the end
    setHistory(
      newHistory.concat([
        {
          squares: newSquares
        }
      ])
    );
    setCurNumber(newHistory.length);
  };

  const jumpTo = step => {
    setCurNumber(step);
    setXIsNext(step % 2 === 0);
  };

  // jumpTo set №step in curNumber
  // const current updated and transmitted in Board
  // after next handleClick create a new sliced history,
  // which set in state and updated curNumber = newHistory.length

  const current = history[curNumber];
  const winner = calculateWinner(current.squares);

  const moves = history.map((step, move) => {
    const desc = move ? "Перейти к ходу #" + move : "К началу игры";
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={current.squares}
          onClick={i => handleClick(i)}
          status={status}
        />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
};

export default Game;
