import { render, screen } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  render(<App />);

  // Minimal pastikan ada container saat initial render
  const root = document.body;
  expect(root).toBeInTheDocument();
});



