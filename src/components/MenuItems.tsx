import { ItemsBox } from './ItemsBox';
import { Fragment } from 'react';

export const MenuItems = () => {



  return (
    <Fragment>
      <div className='menuItems'>
        <div className='divItemsNav'>
          <ul className='nav nav-underline navItems'>
            <li className='nav-item '>
              <a
                className='nav-link active menuNav'
                aria-current='page'
                href='#'
              >
                Desayuno
              </a>
            </li>
          </ul>
          <p className='titleOrder unstyle'>Cuenta:</p>
        </div>
        <ItemsBox />
      </div>

    </Fragment>
  );
};



{/* <li className='nav-item '>
  <a className='nav-link menuNav' href='#'>
    Almuerzo y Cena
  </a>
</li> */}