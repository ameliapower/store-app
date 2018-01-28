import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { About } from './About';

it('should contain "About ABC&mp;z" text', () => {
  const wrapper = shallow(<About />);
  const aboutUs = <h2>About ABC&mp;z</h2>;
  expect (wrapper.contains(aboutUs)).toEqual(true);
});
