import React from 'react';
import { Heading } from 'rebass';

const Headline = (props: { text: string }) => (
  <Heading
    style={{ fontFamily: 'Damion' }}
    f={[5, 6, 7]}
    p={1}
    my={[2, 3]}
    center
    color="#001F3F"
    children={props.text}
  />
);

export default Headline;
