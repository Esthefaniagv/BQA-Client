import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

export const AdminView = () => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    navigate('/admin');
  };

  return (
    <Fragment>
      <div className='home'>
        <div className='divIcons'>
          <img
            className='burguerLogo'
            src='./public/img/hamburguerlogo.png'
            alt='burguer logo'
          />
          <h2>Bienvenid@</h2>
          <img
            className='logOut'
            src='./public/img/exit.png'
            alt='cerrar sesion'
            onClick={handleLogOut}
          />
        </div>
        <hr />
      </div>


    <div>Administrar Trabajadores</div>
    <div>Administrar Productos</div>

    </Fragment>
  );
};
