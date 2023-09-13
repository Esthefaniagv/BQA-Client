import { Fragment } from 'react';
import error from '/img/4041.jpg';
import { Link } from 'react-router-dom';

export const ErrorRoute = () => {
  return (
    <Fragment>
      <div className='imageLogin'>
        <img className='imageError' src={error} alt='Imagen login' />
      </div>
      <div className='paragraph404'>
        <p>4</p>
        <p>4</p>
      </div>
      <div className='messageButtonError'>
        <p>Ups! No encontramos lo que estás buscando</p>
        <Link to='/'>
          <button className='btn btn-lg' type='button' id='buttonLogin'>
            Regresa al Home
          </button>
        </Link>
      </div>
    </Fragment>
  );
};
