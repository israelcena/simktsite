import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main page', () => {
  render(<App />);
  const linkElement = screen.getByText(/SI Marketing/i);
  expect(linkElement).toBeInTheDocument();
});
