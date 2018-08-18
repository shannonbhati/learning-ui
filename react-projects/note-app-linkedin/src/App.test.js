import React from 'react';
import ReactDOM from 'react-dom';
import note from './note';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<note />, div);
  ReactDOM.unmountComponentAtNode(div);
});
