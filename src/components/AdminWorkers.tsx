
import { useNavigate } from 'react-router-dom';

export const AdminWorkers = () => {

    const navigate = useNavigate();

    const handleLogOut = () => {
      navigate('/admin');
    };
  return (
    <>
    <div className='home'>
    <div className='divIcons'>
      <img
        className='burguerLogo'
        src='./public/img/hamburguerlogo.png'
        alt='burguer logo'
      />
      <h2 className='titleHeader'>Sección Trabajadores</h2>
      <img
        className='logOut'
        src='./public/img/exit.png'
        alt='cerrar sesion'
        onClick={handleLogOut}
      />
    </div>
    <hr />
    </div>
    </>
  )
}
