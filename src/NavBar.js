// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Absolute, Toolbar, NavLink } from 'rebass';

const CustomLink = styled(Link)`
  text-decoration: none;
  color: #84e47b;
`;

const NavBar = () => {
  return (
    <div>
      <Absolute z={2} top left right>
        <Toolbar w={'100%'} bg="transparent" color="#84e47b">
          <NavLink>
            <CustomLink to="/" children="Home" />
          </NavLink>
          <NavLink>
            <CustomLink to="/about" children="About" />
          </NavLink>
          <NavLink
            ml="auto"
            mr={[2, 3]}
            children="by Adam Friedl"
            style={{ fontFamily: 'Damion' }}
          />
        </Toolbar>
      </Absolute>
    </div>
  );
};
export default NavBar;
