import '@testing-library/jest-dom'
import { render } from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom'

import Login from '../components/Login';

describe('App', () => {
  it('renders App component', () => {
 render(<Login/>, {wrapper: BrowserRouter});
  });
});