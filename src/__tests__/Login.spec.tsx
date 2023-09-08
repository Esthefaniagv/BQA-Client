
import { render } from '@testing-library/react';


import Login from '../components/Login';

describe('App', () => {
  it('renders App component', () => {
 render(<Login />);
  });
});