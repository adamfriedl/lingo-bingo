import React from 'react';
import { shallow } from 'enzyme';
import NavBar from '../NavBar';

it('renders', () => {
  const component = shallow(<NavBar />);
  expect(component).toMatchSnapshot();
});
