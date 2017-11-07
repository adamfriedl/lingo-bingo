import React from 'react';
import { shallow } from 'enzyme';
import Landing from '../Landing';

it('renders without crashing', () => {
  const component = shallow(<Landing />);
  expect(component).toMatchSnapshot();
});
