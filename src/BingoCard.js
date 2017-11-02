// @flow

import React, { Component } from 'react';
import { Container, Box, Heading } from 'rebass';
import NavBar from './NavBar';
import Square from './Square';
import Preload from './Preload';

class BingoCard extends Component<Props, State> {
  state = {
    data: [],
    squares: Array(25).fill({ clicked: false })
  };

  handleClick = (i: number) => {
    const squares = this.state.squares.slice();
    if (this.checkForWin(squares)) {
      return;
    }
    squares[i] = { clicked: !this.state.squares[i].clicked };
    this.setState({ squares: squares });
  };

  renderSquare = (phrase: string, i: number) => (
    <Square
      text={phrase}
      onClick={() => this.handleClick(i)}
      clicked={this.state.squares[i].clicked}
      key={i}
    />
  );

  // Durstenfeld shuffle
  shuffleArray = (array: Array<string>) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  checkForWin = (squares: Array) => {
    const lines = [
      [0, 1, 2, 3, 4],
      [5, 6, 7, 8, 9],
      [10, 11, 12, 13, 14],
      [15, 16, 17, 18, 19],
      [20, 21, 22, 23, 24],
      [0, 5, 10, 15, 20],
      [1, 6, 11, 16, 21],
      [2, 7, 12, 17, 22],
      [3, 8, 13, 18, 23],
      [4, 9, 14, 19, 24],
      [0, 6, 12, 18, 24],
      [4, 8, 12, 16, 20]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c, d, e] = lines[i];
      if (
        squares[a].clicked === true &&
        squares[b].clicked === true &&
        squares[c].clicked === true &&
        squares[d].clicked === true &&
        squares[e].clicked === true
      ) {
        return 'There is a winner!!!';
      }
    }
    return null;
  };

  componentDidMount() {
    this.setState({
      data: this.shuffleArray(Preload).slice(0, 25)
    });

    // handleSubmit = () => {};
  }
  render() {
    const win = this.checkForWin(this.state.squares);
    let status;
    if (win) {
      status = win;
    }

    return (
      <div>
        <NavBar color="black" />
        <Container my={4}>
          <Heading center py={2} f={[5, 6, 7]}>
            Lingo Bingo
          </Heading>
          <Box>
            {this.state.data.map((string, i) => this.renderSquare(string, i))}
          </Box>
        </Container>
      </div>
    );
  }
}

export default BingoCard;
