import { IProduct } from '../models/orders';
import GetProducts from '../services/TokenProducts';
import { ItemsBox } from './ItemsBox';
import { Fragment, useEffect, useState } from 'react';

export const MenuItems = () => {

  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    GetAllProducts();
  }, []);

  const GetAllProducts = () => {
    GetProducts()
      .then((r) => {
        if (r.status === 200) {
          r.json().then((data) => {
            // console.log(data);
            setProducts(data);
          });
        }
      })
      .catch((e) => {
        console.log('soy catch', e);
      });
  };

  return (
    <Fragment>
      <div className='menuItems'>
        <div className='divItemsNav'>
          <ul className='nav nav-underline navItems'>
            <li className='nav-item '>
              <a
                className='nav-link menuNav'
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
          <p className='titleOrder unstyle'>Cuenta:</p>
        </div>
        <ItemsBox products = {products} />
      </div>

    </Fragment>
  );
};



{/* <li className='nav-item '>
  <a className='nav-link menuNav' href='#'>
    Almuerzo y Cena
  </a>
</li> */}