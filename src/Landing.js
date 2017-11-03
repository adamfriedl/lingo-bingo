import React from 'react';
import { Banner, Heading, Text, Button } from 'rebass';
import NavBar from './NavBar';
import Footer from './Footer';

const photo =
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1050&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D';

const Landing = props => (
  <div>
    <NavBar color="white" />
    <Banner
      backgroundImage={photo}
      color="white"
      py={[4, 5, 6]}
      mt={-3}
      mx={-3}
    >
      <Heading style={{ fontFamily: 'Damion' }} f={[5, 6, 7]} color="#001F3F">
        Lingo Bingo
      </Heading>
      <Text f={[2, 3, 4]} center color="white">
        Are Bingo and conference calls your core competencies? <br />
        Sounds like an opportunity for synergy.
      </Text>
      <Button
        my={[2, 3]}
        children="Let's Play!"
        bg="#001F3F"
        is="a"
        href="/#/bingocard"
      />
    </Banner>
  </div>
);

export default Landing;
