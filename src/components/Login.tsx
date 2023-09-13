import { Fragment } from 'react';
import backgroundImage from '/img/backgroundLogin1.jpg';
import { LoginForm } from './LoginForm';

export const Login = () => {

  return (
    <Fragment>
      <div className='imageLogin'>
        <img className='imageBackgroundLogin' src={backgroundImage} alt="Imagen login" />
      </div>

      <div className='moduleLogin'>
        <h2 className='title'>LogIn</h2>
        <p className='paragraphModule'>¡Bienvenido a tu administrador de pedidos!</p>
        <LoginForm />
      </div>

    </Fragment>

  )
}
export default Login