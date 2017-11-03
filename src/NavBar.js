// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import { Absolute, Toolbar, NavLink } from 'rebass';

const NavBar = (props: { color: string }) => {
  return (
    <div>
      <Absolute z={2} top left>
        <Toolbar w={'100%'} bg="transparent" color={props.color}>
          <Link to={`${process.env.PUBLIC_URL}/`}>
            <NavLink children="Home" />
          </Link>

          <Link to={`${process.env.PUBLIC_URL}/about`}>
            <NavLink color="#84e47b" children="About" />
          </Link>
        </Toolbar>
      </Absolute>
    </div>
  );
};
export default NavBar;
