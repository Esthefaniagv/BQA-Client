import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import userEvent from '@testing-library/user-event';
import { GetPostWaiter } from '../services/TokenService';



global.Request = jest.fn();

jest.mock('../services/TokenService', () => {
  return { 
    GetPostWaiter: jest.fn().mockResolvedValue({
      status: 200,
      json: jest.fn().mockResolvedValue ({
        accessToken: 'HJSJK',
        user: {
          role: 'waiter'
        }
      })
    })
  };
})

// mockedGetPostWaiter = GetPostWaiter as jest.MockedFunction<typeof>

describe('LoginForm', () => {
  it('renders LoginForm component', async () => {
    const user = userEvent.setup();

    render(<LoginForm />, { wrapper: BrowserRouter });
    const inputEmailUser = screen.getByTestId('formInputUser');
    await user.type(inputEmailUser, 'waiter@systers.xyz');

    const inputPasswordUser = screen.getByTestId('formInputPassword');
    await user.type(inputPasswordUser, '123456');
    
    const button = screen.getByTestId('buttonLogin');
    await user.click(button);

    // await waitForElementToBeRemoved(() => screen.getAllByTestId('formLogin'))
    await waitFor(() => {
      expect(GetPostWaiter).toBeCalled()

      // expect(screen.getByTestId('waiter_home')).toBeInTheDocument();
      expect(window.location.pathname).toBe("/waiter");
    });
    screen.debug();
  });
});
