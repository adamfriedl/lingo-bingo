// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Absolute, Toolbar, NavLink } from 'rebass';

const CustomLink = styled(Link)`
  text-decoration: none;
  color: #84e47b;
`;

const NavBar = (props: { color: string }) => {
  return (
    <div>
      <Absolute z={2} top left>
        <Toolbar w={'100%'} bg="transparent" color={props.color}>
          <NavLink>
            <CustomLink to="/" children="Home" />
          </NavLink>
          <NavLink>
            <CustomLink to="/about" children="About" />
          </NavLink>
        </Toolbar>
      </Absolute>
    </div>
  );
};
export default NavBar;
