import { Fragment } from 'react';
import backgroundImage from '/img/backgroundLogin.jpeg';
import { LoginInput } from './LoginInput';
export const LoginFondo = () => {

  return (
<Fragment>
   <div className='imageLogin'>
   <img className='imageBackgroundLogin' src={backgroundImage} alt="Imagen login"/>
   </div>

   <div className='moduleLogin'>
    <h2 className='title'>LogIn</h2>
    <p className='paragraphModule'>¡Bienvenido a tu administrador de pedidos!</p>
   </div>
   <LoginInput/>

    </Fragment>

  )
}
