// import necessary react testing library helpers here
// import the Counter component here
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';


beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const counter = screen.getByTestId('count');
  expect(counter).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const count2 = screen.getByTestId('count');
  const incrementButton = screen.getByRole("button", {name: /\+/i});
  

  expect(count2).toHaveTextContent('0');

  fireEvent.click(incrementButton);

  expect(count2).toHaveTextContent('1');

});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  
  const decrementButton = screen.getByRole("button", {name: /-/i});

  const counter3 = screen.getByTestId('count');

  expect(counter3).toHaveTextContent('0');

  fireEvent.click(decrementButton);

  expect(counter3).toHaveTextContent('-1');
});
