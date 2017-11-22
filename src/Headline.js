// @flow

import React from 'react';
import { Heading } from 'rebass';

const Headline = (props: { text: string }) => (
  <Heading
    style={{
      fontFamily: 'Damion',
      textShadow: '-4px 4px 1px #79e4a6'
    }}
    f={[5, 6, 7]}
    my={[3, 4]}
    center
    color="blue9"
    children={props.text}
  />
);

export default Headline;
