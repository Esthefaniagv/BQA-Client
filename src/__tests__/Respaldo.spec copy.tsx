import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import submitForm from '../components/LoginForm';
import { jest } from '@jest/globals';

import LoginForm from '../components/LoginForm';
// import ErrorLogin from '../components/ErrorLogin';
import { ErrorRoute } from '../components/ErrorRoute';
const mockLoginResponse = { status: 200 };
// const mockLoginResponse = LoginForm;

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockLoginResponse),
  })
);

describe('App', () => {
  it('renders App component', () => {
    render(<LoginForm />, { wrapper: BrowserRouter });
  });

  it('landing on a bad page', () => {
    const badRoute = '/some/bad/route';

    // use <MemoryRouter> when you want to manually control the history
    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <ErrorRoute />
      </MemoryRouter>
    );

    //     // verify navigation to "no match" route
    //     expect(screen.getByText(/no match/i)).toBeInTheDocument();
  });
});

beforeEach(() => {
  fetch.mockClear();
});

describe('Funciona peticion', () => {
  it('should be returned', () => {
    expect(submitForm).toEqual(mockLoginResponse);
  });

  //   it("finds exchange", async () => {
  //     const rate = await convert("USD", "CAD");

  //     expect(rate).toEqual(1.42);
  //     expect(fetch).toHaveBeenCalledTimes(1);
  //   });
});
