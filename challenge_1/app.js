var allCells = {
  cell0: false,
  cell1: false,
  cell2: false,
  cell3: false,
  cell4: false,
  cell5: false,
  cell6: false,
  cell7: false,
  cell8: false
}

var wins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5 ,8],
  [0, 4, 8],
  [2 ,4, 6]
]

var moves = ['', '', '' , '', '', '', '', '', ''];
var usex = true;
var count = 0;

// console.log(table)
// table.onclick = () => {
//   console.log('hfidsfo')
// }


handleClick = (cellId) => {
  if (allCells[cellId] === false) {
    document.getElementById('alert').innerHTML = 'Good Luck!';
    allCells[cellId] = true;
    if (usex) {
      moves[cellId.slice(-1)] = 'X';
      document.getElementById(cellId).innerHTML = 'X';
      count++;
      usex = !usex;
    } else {
      moves[cellId.slice(-1)] = 'O';
      document.getElementById(cellId).innerHTML = 'O';
      count++;
      usex = !usex;
    }
    if (count >= 5) {
      var winner = handleWin();
      if (winner === null && count === 9) {
        document.getElementById('alert').innerHTML = 'Tie';
      }
      if (winner != null) {
        for (var key in allCells) {
          allCells[key] = true;
        }
        usex = true;
        document.getElementById('alert').innerHTML = winner;
      }
    }
  }
  // else {
  //   document.getElementById('alert').innerHTML = 'Choose another spot';
  // }
}

handleWin = () => {
  for (var i = 0; i < wins.length; i++) {
    // console.log(wins[i][0])
    if (moves[wins[i][0]] === 'X' && moves[wins[i][1]] === 'X' && moves[wins[i][2]] === 'X') {
      return 'Player 1 is the winner';
    }
    if (moves[wins[i][0]] === 'O' && moves[wins[i][1]] === 'O' && moves[wins[i][2]] === 'O') {
      return 'Player 2 is the winner';
    }
  }
  return null;
  // console.log(moves)
}

resetTable = (event) => {
  event.preventDefault();
  for (var key in allCells) {
    allCells[key] = false;
    document.getElementById(key).innerHTML = '';
  }
  count = 0;
  document.getElementById('alert').innerHTML = 'New Game';
}