import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  //** This is the  when create default app test cases  */
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();

  //** This is the when create custom app test cases  */
  const imageElement = screen.getAllByRole("img");
  expect (imageElement.length).toBeGreaterThan(0);
});
