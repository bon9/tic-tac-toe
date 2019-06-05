export function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { win: squares[a], winSquare: [a, b, c] };
    }
  }
  return false;
}

export function calculatePositionMove(element) {
  const array = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === element) {
        return [i + 1, j + 1];
      }
    }
  }
}

export const sortMoves = moves => {
  // keysMoves =['4','3', '2','1','0']
  const keysMoves = Object.keys(moves).sort((a, b) => b - a);
  const result = [];
  for (let i = 0; i < keysMoves.length; i++) {
    result.push(moves[keysMoves[i]]);
  }
  return result;
};
