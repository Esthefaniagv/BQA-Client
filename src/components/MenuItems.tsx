import { Fragment } from 'react';
import { ItemsBox } from './ItemsBox';
import { ClientName } from './ClientName';

export const MenuItems = () => {
  return (
    <Fragment>
      <ClientName/>
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
            <li className='nav-item '>
              <a className='nav-link menuNav' href='#'>
                Almuerzo y Cena
              </a>
            </li>
          </ul>
          <p className='titleOrder'>Cuenta</p>
        </div>
        <ItemsBox />
      </div>
    </Fragment>
  );
};
