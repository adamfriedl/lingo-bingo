// @flow

import React, { Component } from 'react';
import { Text, Flex, Box } from 'rebass';
import NavBar from './NavBar';
import Square from './Square';
import Preload from './Preload';
import Headline from './Headline';

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
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
        return "You're a winner, my friend!!!";
      }
    }
    return null;
  };

  componentDidMount() {
    this.setState({
      data: this.shuffleArray(Preload).slice(0, 25)
    });
  }
  render() {
    const { data, squares } = this.state;

    const win = this.checkForWin(squares);
    let status;
    if (win) {
      status = win;
    }

    return (
      <Box py={2} m={-2}>
        <NavBar color="#001F3F" />
        <Headline text={'Lingo Bingo'} />
        <Text
          f={[3, 4, 5]}
          my={[2, 3]}
          color="#001F3F"
          center
          children={status}
        />
        <Flex justify="center" align="center" style={{ fontFamily: 'Damion' }}>
          <Box pl={[4, 5, 6]} w={1}>
            {data.map((string, i) => this.renderSquare(string, i))}
          </Box>
        </Flex>
      </Box>
    );
  }
}

export default BingoCard;
