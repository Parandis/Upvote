import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Add List button', () => {
  render(<App />);
  const buttonElement = screen.getByText(/Add List/i);
  expect(buttonElement).toBeInTheDocument();
});