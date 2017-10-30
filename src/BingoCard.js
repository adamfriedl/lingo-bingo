// @flow

import React, { Component } from 'react';
import { Container } from 'rebass';
import Square from './Square';
import Preload from './Preload';

// NEED TO SET 'CLICKED' STATUS IN STATE AND PASS TO SQUARES
// THE CURRENT METHOD BELOW DOES NOT WORK
class BingoCard extends Component<Props, State> {
  state = {
    squares: Array(25).fill({ clicked: false })
  };

  handleClick = (i: number) => {
    const squares = this.state.squares.slice();
    squares[i].clicked = !this.state.squares[i].clicked;
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

  render() {
    const data = this.shuffleArray(Preload).slice(0, 25);

    return (
      <div>
        {console.log(this.state)}
        <Container my={2}>
          {data.map((string, i) => this.renderSquare(string, i))}
        </Container>
      </div>
    );
  }
}

export default BingoCard;
