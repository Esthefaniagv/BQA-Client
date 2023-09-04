import { Fragment } from 'react';
import backgroundImage from '/img/backgroundLogin1.jpg';
import { LoginInput } from './LoginInput';
import { ButtonLogin } from './ButtonLogin';
export const LoginFondo = () => {

  return (
<Fragment>
   <div className='imageLogin'>
   <img className='imageBackgroundLogin' src={backgroundImage} alt="Imagen login"/>
   </div>

   <div className='moduleLogin'>
    <h2 className='title'>LogIn</h2>
    <p className='paragraphModule'>¡Bienvenido a tu administrador de pedidos!</p>
    <LoginInput/>
    <ButtonLogin/>
   </div>
  
    </Fragment>

  )
}
