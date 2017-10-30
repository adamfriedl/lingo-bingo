// @flow

import React from 'react';
import { Flex, Text } from 'rebass';
import styled from 'styled-components';

const CustomFlex = styled(Flex)`
  float: left;
  width: 17.5%;
  border: 5px solid red;

  :after {
    content: '';
    display: inline;
    padding-bottom: 100%;
  }
`;

const Square = (props: {
  text: string,
  clicked: boolean,
  onClick: () => void
}) => (
  <div>
    <CustomFlex
      align="center"
      justify="center"
      bg={props.clicked ? 'green' : 'blue'}
      mr={1}
      mb={1}
      onClick={props.onClick}
    >
      <Text center color="yellow">
        {props.text}
      </Text>
    </CustomFlex>
  </div>
);

export default Square;
