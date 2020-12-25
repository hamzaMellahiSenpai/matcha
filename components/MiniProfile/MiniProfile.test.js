import React from 'react';
import ReactDOM from 'react-dom';
import MiniProfile from './MiniProfile';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MiniProfile />, div);
  ReactDOM.unmountComponentAtNode(div);
});