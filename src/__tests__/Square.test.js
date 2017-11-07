import React from 'react';
import { shallow } from 'enzyme';
import Square from '../Square';

it('renders', () => {
  const component = shallow(<Square />);
  expect(component).toMatchSnapshot();
});
