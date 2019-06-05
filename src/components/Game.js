import React, { useState } from "react";
import Board from "./Board";
import Info from "./Info";

import {
  calculateWinner,
  calculatePositionMove,
  sortMoves
} from "./../utility";

const Game = props => {
  const [history, setHistory] = useState([
    { squares: Array(9).fill(null), position: Array(2).fill(null) }
  ]);
  const [xIsNext, setXIsNext] = useState(true);
  const [curNumber, setCurNumber] = useState(0);
  const [isActive, setIsActive] = useState(null);
  const [isSort, setIsSort] = useState(false);

  const handleClick = i => {
    // create a new sliced history
    const newHistory = history.slice(0, curNumber + 1);
    // current object = last element in newHistory
    const current = newHistory[newHistory.length - 1];
    // copy current object squares in newSquares
    const newSquares = current.squares.slice();
    // если есть победитель или клик по той же клетке
    if (calculateWinner(newSquares) || newSquares[i]) {
      return;
    }
    // new position
    const posLastMove = calculatePositionMove(i);
    // set X or O in element to newSquares array
    newSquares[i] = xIsNext ? "X" : "O";
    setXIsNext(!xIsNext);
    //set in state new history with newSquares and new posin the end
    setHistory(
      newHistory.concat([
        {
          squares: newSquares,
          position: posLastMove
        }
      ])
    );
    setCurNumber(newHistory.length);
    setIsActive(false);
  };

  const jumpTo = move => {
    setCurNumber(move);
    setXIsNext(move % 2 === 0);
    setIsActive(move);
  };

  // jumpTo set №step in curNumber
  // const current updated and transmitted in Board
  // after next handleClick create a new sliced history,
  // which set in state and updated curNumber = newHistory.length
  const moves = history.map((step, move) => {
    const pos = step.position;
    const desc = move
      ? `Перейти к ходу # ${move}, позиция: ${pos[0]} ${pos[1]}`
      : `К началу игры`;
    let attachedClass = "btn-info";
    if (isActive === move) {
      attachedClass = "btn-info active";
    }
    return (
      <li key={move}>
        <button className={attachedClass} onClick={() => jumpTo(move)}>
          {desc}
        </button>
      </li>
    );
  });

  const sortedMoves = sortMoves(moves);

  const handleSwitch = () => {
    setIsSort(!isSort);
  };

  const winner = calculateWinner(history[curNumber].squares);

  if (curNumber === 9 && winner === false) {
    alert("Ничья");
  }

  let status = winner
    ? "Winner: " + winner.win
    : "Next player: " + (xIsNext ? "X" : "O");
  let winnerSquares = winner ? winner.winSquare : false;

  return (
    <div className="game">
      <div className="status">{status}</div>
      <div className="wrap-game">
        <Board
          //передаем текущее состояние квадратов
          squares={history[curNumber].squares}
          onClick={i => handleClick(i)}
          winnerSquares={winnerSquares}
        />
        <Info clicked={handleSwitch} moves={isSort ? sortedMoves : moves} />
      </div>
    </div>
  );
};

export default Game;
