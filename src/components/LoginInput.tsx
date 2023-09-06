import { Fragment } from 'react';
import { LoginError } from './LoginError';

export const LoginInput = () => {
  const submitForm = (e) => {
    e.preventDefault()

    const formData = new FormData(e.target);
    const payLoad = Object.fromEntries(formData)

    console.log(payLoad);

    try {
      const options = {
        method: "POST",
        body: JSON.stringify(payLoad),
        headers: {
          "content-type": "application/json"
        }
      };
      fetch("http://localhost:8080/login", options).then((r) => {
        if(r.status === 200){
          console.log('pasate a inicio')
        }
      }).catch((e) => {
        console.log(e)
      });
    } catch (error) {
      console.log('estas en el catch')
    }

  };


  return (
    <Fragment>
      <form className='form-group inputForm' onSubmit={submitForm}>
        <div className='col-xs-1'>
          <input className='form-control p-3 m-0' id="formInputUser" placeholder='Email' type='text' name='email' />
        </div>

        <div className='col-xs-1'>
          <input className='form-control p-3 m-0' id="formInputPassword" placeholder='Contraseña' type='password' name='password' />
        </div>

        <div className="input-group ml-5" id="inputGroup">

          <input type="checkbox" aria-label="Checkbox for following text input" />

          <p className='rememberCheck'>Remember me</p>
        </div>

        <div>
          <button className="btn btn-lg" type="submit" value="Submit" id='buttonLogin'>Iniciar Sesión</button>
        </div>
      </form>
    </Fragment>
  );
};

export default LoginInput