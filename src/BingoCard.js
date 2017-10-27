// @flow

import React from 'react';
import { Container, Row, Card, BackgroundImage, Text, Flex } from 'rebass';
import Square from './Square';

const BingoCard = () => {
  return (
    <div>
      <Container my={2}>
        <Square text={'Beep'} />
        <Square text={'Beep'} />
        <Square text={'Beep'} />
        <Square text={'Beep'} />
        <Square text={'Beep'} />
        <Square text={'Beep'} />
        <Square text={'Beep'} />
        <Square text={'Beep'} />
        <Square text={'Beep'} />
        <Square text={'Beep'} />
        <Square text={'Beep'} />
        <Square text={'Beep'} />
        <Square text={'Beep'} />
        <Square text={'Beep'} />
        <Square text={'Beep'} />
      </Container>
    </div>
  );
};

export default BingoCard;
