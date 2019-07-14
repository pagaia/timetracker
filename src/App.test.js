import React from 'react';
import ReactDOM from 'react-dom';
import mountApp from './mountApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(mountApp, div);
  ReactDOM.unmountComponentAtNode(div);
});
