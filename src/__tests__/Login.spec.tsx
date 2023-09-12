import '@testing-library/jest-dom'
import { render } from '@testing-library/react';
// import backgroundImage from '/img/backgroundLogin1.jpg';

import Login from '../components/Login';

describe('App', () => {
  it('renders App component', () => {
 render(<Login />);
  });
});