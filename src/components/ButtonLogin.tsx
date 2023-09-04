import { Fragment } from 'react';

export const ButtonLogin = () => {
  return (
    <Fragment>
<div className="input-group mb-3 ml-5" id="inputGroup">
  
      <input type="checkbox" aria-label="Checkbox for following text input"/>

  <p className='rememberCheck'>Remember me</p>
</div>

<div>
<button className="btn btn-lg" type="submit" value="Submit" id='buttonLogin'>Iniciar Sesión</button>
</div>

    </Fragment>
  )
}

export default ButtonLogin;
