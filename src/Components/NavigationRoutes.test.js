import React from 'react';
import ReactDOM from 'react-dom';
// import { shallow } from 'enzyme';
import { NavigationRoutes } from './NavigationRoutes';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NavigationRoutes />, div);
  ReactDOM.unmountComponentAtNode(div);
});

