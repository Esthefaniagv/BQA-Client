import '@testing-library/jest-dom';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import LoginForm from '../components/LoginForm';
import userEvent from '@testing-library/user-event';

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

    await waitForElementToBeRemoved(() => screen.getAllByTestId('formLogin'))
    screen.debug();
  });
});
