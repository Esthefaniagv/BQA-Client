import { Fragment } from 'react';

export const LoginInput = () => {
  return (
    <Fragment>
      <div className='form-group'>
        <div className='col-xs-1 mb-3'>
          <input className='form-control p-3 m-0' id="formInputUser" placeholder='Email' type='text' />
        </div>

        <div className='col-xs-1'>
          <input className='form-control p-3 m-0' id="formInputPassword" placeholder='Contraseña' type='password' />
        </div>
      </div>
    </Fragment>
  );
};
