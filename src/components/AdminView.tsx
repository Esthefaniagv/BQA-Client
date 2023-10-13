import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

export const AdminView = () => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    navigate('/admin');
  };

  const handleClickWorkers = () => {
    navigate('/workers');
  };
  const handleClickProducts = () => {
    navigate('/products');
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
          <h2 className='titleHeader'>Bienvenid@</h2>
          <img
            className='logOut'
            src='./public/img/exit.png'
            alt='cerrar sesion'
            onClick={handleLogOut}
          />
        </div>
        <hr />
     

    <div className='gridAdmin'>
    <button className='divCardsOptions unstyle' onClick={handleClickWorkers} > 
      <h2 className='titleOptions'>Trabajadores</h2>
      <img className='imgIcon' src='public\img\user.png' alt='userIcon'/>
    </button>

    <button className='divCardsOptions unstyle' onClick={handleClickProducts}>
      <h2 className='titleOptions'>Productos</h2>
      <img className='imgIcon' src='public\img\menu.png' alt='productIcon'/>
    </button>
    </div>

    </div>
    </Fragment>
  );
};
