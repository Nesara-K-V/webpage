import { render, screen } from '@testing-library/react';
import App from './App';

test('App component renders without errors', () => {
  render(<App />);
});
test('App renders Header_bar and Main_p components', () => {
  const { getByText } = render(<App />);
  
  // Test that specific text content from Header_bar and Main_p components is present
  expect(getByText('CAROL SOLVAY')).toBeInTheDocument();
  expect(getByText('HIGHEST')).toBeInTheDocument();
  expect(getByText('POTENTIAL')).toBeInTheDocument();
  expect(getByText('HOME')).toBeInTheDocument();
  expect(getByText('ABOUT')).toBeInTheDocument();
  expect(getByText('CONTACT')).toBeInTheDocument();

});
test('App matches snapshot', () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
