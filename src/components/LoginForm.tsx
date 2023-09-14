import { Fragment, useState } from 'react';
import { LoginError } from './ErrorLogin';
import { useNavigate } from 'react-router-dom';
import GetPostWaiter from '../services/TokenService';

export const LoginForm = () => {
  const [isError, setIsError] = useState(null);
  const navigate = useNavigate();

  const SubmitForm = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const payLoad = Object.fromEntries(formData);

    GetPostWaiter(payLoad).then((r) => {
      if (r.status === 200) {
        r.json().then((r) => {
          console.log(r.user.role);
          if (r.user.role === 'waiter') {
            navigate('/waiter');
          }
        });
      } else {
        r.json().then((data) => {
          console.log(data);
          setIsError(data);
        });
      }
    })
      .catch((e) => {
        console.log('soy catch', e);
      });
  
  };

  return (
    <Fragment>
      <form className='form-group inputForm' onSubmit={SubmitForm} data-testid='formLogin'>
        <div className='col-xs-1'>
          <input
            data-testid='formInputUser'
            className='form-control p-3 m-0'
            id='formInputUser'
            placeholder='Email'
            type='text'
            name='email'
          />
        </div>

        <div className='col-xs-1'>
          <input
            data-testid='formInputPassword'
            className='form-control p-3 m-0'
            id='formInputPassword'
            placeholder='Contraseña'
            type='password'
            name='password'
          />
        </div>

        <div className='input-group ml-5' id='inputGroup'>
          <input
            type='checkbox'
            aria-label='Checkbox for following text input'
          />
          <p className='rememberCheck'>Remember me</p>
        </div>

        <div>
          <button
            data-testid='buttonLogin'
            className='btn btn-lg'
            type='submit'
            value='Submit'
            id='buttonLogin'
          >
            Iniciar Sesión
          </button>
        </div>
      </form>
      {isError && <LoginError message={isError} />}
    </Fragment>
  );
};
export default LoginForm;
