import jsdom from 'jsdom';
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;
global.document = doc;
global.window = win;

import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import BingoCard from '../BingoCard';
import Square from '../Square';
import Preload from '../Preload';

it('renders without crashing', () => {
  shallow(<BingoCard />);
});

it('renders the correct number of squares', () => {
  const component = shallow(<BingoCard />);
  const data = Preload.slice(0, 25);
  expect(data.length).toEqual(component.find(Square).length);
});

it('updates state after clicking square', () => {
  const component = shallow(<BingoCard />);
  component
    .find(Square)
    .first()
    .simulate('click');
  expect(component.instance().state.squares[0].clicked).toEqual(true);
});

it('recognizes a winning line', () => {
  const component = shallow(<BingoCard />);
  const array1 = Array(5).fill({ clicked: true });
  const array2 = Array(20).fill({ clicked: false });
  const arrayJoined = array1.concat(array2);
  component.setState({ squares: arrayJoined });
  const squaresState = component.instance().state.squares;
  expect(component.instance().checkForWin(squaresState)).toBe(
    "You're a winner, my friend!!!"
  );
});
