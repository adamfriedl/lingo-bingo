import React from 'react';
import { Banner, Heading, Text } from 'rebass';

const Landing = () => (
  <Banner
    backgroundImage="https://images.unsplash.com/photo-1506701554939-d0aa4c26d79c?w=1352&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
    color="yellow"
  >
    <Heading f={[4, 5, 6, 7]}>Lingo Bingo</Heading>
    <Text f={[1, 2, 3, 4]}>Are you ready to play?!</Text>
  </Banner>
);

export default Landing;
