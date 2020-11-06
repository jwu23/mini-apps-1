import React from 'react';
import Row from './row.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [],
      player1: true,
      color: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  createBoard() {
    // want height 6 and width 7
    var newBoard = [];
    for (var i = 0; i < 6; i++) {
      var row = [];
      for (var j = 0; j < 7; j++) {
        row.push(null);
      }
      newBoard.push(row);
    }
    console.log(newBoard);
    this.setState({
      board: newBoard
    })
  }

  componentDidMount() {
    this.createBoard();
  }

  handleClick(column) {
    var addToBoard = this.state.board;
    for (var i = 5; i >= 0; i--) {
      if (addToBoard[i][column] === null) {
        if (this.state.player1) {
          addToBoard[i][column] = '1';
          this.setState({
            player1: false,
            color: 'red'
          })
          console.log(addToBoard)
        } else {
          addToBoard[i][column] = '2';
          this.setState({
            player1: true,
            color: 'yellow'
          })
          console.log(addToBoard)
        }
        return;
      }
    }
  }

  render() {
    return (
      <div>
        <table>
          {this.state.board.map((row, index) => (
            <Row key={index} row={row} player={this.state.player1} color={this.state.color} handleClick={this.handleClick}/>
          ))}
        </table>
      </div>
    )
  }
}


export default App;