import React from 'react';
import ReactDOM from 'react-dom';
import ImgsSlider from './ImgsSlider';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ImgsSlider />, div);
  ReactDOM.unmountComponentAtNode(div);
});