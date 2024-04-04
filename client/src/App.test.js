import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn the home screen link', () => {
  render(<App />);
  const headlineElement = screen.getByText(/Habit Kicker/i);
  expect(headlineElement).toBeInTheDocument();
});
