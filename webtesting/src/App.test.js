import React from 'react';
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";
import App from './App';




it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
