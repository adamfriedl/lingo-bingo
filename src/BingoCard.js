// @flow

import React, { Component } from 'react';
import { Container } from 'rebass';
import Square from './Square';
import Preload from './Preload';

class BingoCard extends Component<Props> {
  // state = {
  //   squares: ['hello', 'goodbye', 'shalom']
  // };
  renderSquare = (phrase: string, i: number) => (
    <Square text={phrase} onClick={() => alert(phrase)} key={i} />
  );

  // Durstenfeld shuffle
  shuffleArray = array => {
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
        <Container my={2}>
          {data.map((string, i) => this.renderSquare(string, i))}
        </Container>
      </div>
    );
  }
}

export default BingoCard;
