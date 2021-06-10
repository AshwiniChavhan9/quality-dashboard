import { render, screen } from '@testing-library/react';
import App from './App';

test('renders coming soon text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hey,coming soon /i);
  expect(linkElement).toBeInTheDocument();
});
