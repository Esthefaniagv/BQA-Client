import { Fragment, useState } from 'react';

export const LoginInput = () => {
  const [message, setMessage] = useState('');

  const handleChange = event => {
    setMessage(event.target.value);

    console.log('value is:', event.target.value);
  };

  const logMovies = async () => {
    const options = {
      method: "POST"
    };
    const response = await fetch("http://localhost:8080/login", options);
    const movies = await response.json();
    console.log(movies);
  }

  return (
    <Fragment>
      <form className='form-group inputForm'>
        <div className='col-xs-1'>
          <input className='form-control p-3 m-0' id="formInputUser" placeholder='Email' type='text' value={message} onChange={handleChange} />
        </div>

        <div className='col-xs-1'>
          <input className='form-control p-3 m-0' id="formInputPassword" placeholder='Contraseña' type='password' />
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
