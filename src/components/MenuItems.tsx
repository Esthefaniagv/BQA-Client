import { ItemsBox } from './ItemsBox';
import { Fragment, useState } from 'react';

export const MenuItems = () => {

    const [clientName, setClientName] = useState('');

    const handleClientName = (e) =>{
        setClientName(e.target.value)
    }

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
            <li className='nav-item '>
              <a className='nav-link menuNav' href='#'>
                Almuerzo y Cena
              </a>
            </li>
          </ul>
          <p className='titleOrder'>Cuenta:</p>
          <div className="clientName">
       <div className="input-group mb-3">
         <input value={clientName} onChange={handleClientName} type="text" className="form-control" placeholder="Escribe nombre de cliente aquí" aria-label="Username" aria-describedby="basic-addon1" />
       </div>
       </div>
        </div>
        <ItemsBox />
      </div>
    
    </Fragment>
  );
};
