import { IProduct } from '../models/orders';
import GetProducts from '../services/TokenProducts';
import { ItemsBox } from './ItemsBox';
import { Fragment, useEffect, useState } from 'react';

export const MenuItems = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [menu, setMenu] = useState<IProduct[]>([]);

  useEffect(() => {
    GetAllProducts();
    
  }, []);

  useEffect(() => {
    handleMenu('Desayuno');
    
  }, [products]);

  const GetAllProducts = () => {
    GetProducts()
      .then((r) => {
        if (r.status === 200) {
          r.json().then((data) => {
            setProducts(data);
            
          });
        }
      })
      .catch((e) => {
        console.log('soy catch', e);
      });
  };

  // let itemMenu = 'Desayuno';
    
    const handleMenu = (item: string) => {
      
      const filteredMenu = item ? products.filter((product) => product.type === item) : products;
      setMenu(filteredMenu);
    }

  // const handleMenu = (item) => {
  //   setProducts((prevState) => ([
  //     ...prevState.filter((currentProduct) => (
  //      item ? currentProduct.type === "Desayuno" : currentProduct.type === "Almuerzo"
  //     )) 
  //   ]))

  //   // if (item === true) {
  //   //   products.filter((menuBreakfast)=>{
  //   //     menuBreakfast.type === "Desayuno" ? setProducts(menuBreakfast) : null;
  //   //   })
  //   // } else {
  //   //   products.filter((menuLunch)=>{
  //   //     menuLunch.type === "Almuerzo" ? setProducts(menuLunch) : null;
  //   //   })
  //   // }
  // };

  return (
    <Fragment>
      <div className='menuItems'>
        <div className='divItemsNav'>
          <ul className='nav nav-underline navItems'>
            <li className='nav-item '>
              
              
              {/* /* {products.filter((itemProduct)=>{
                itemProduct.type === 'Desayuno' && <ItemsBox itemProduct={itemProduct}/>;
              })} */}

              <a
                type='button'
                onClick={() => handleMenu('Desayuno')}
                className='nav-link menuNav'
                aria-current='page'
                href='#'
              >
                Desayuno
              </a>
            </li>
            <li className='nav-item '>
              <a
                className='nav-link menuNav'
                href='#'
                type='button'
                onClick={() => handleMenu('Almuerzo')}
              >
                Almuerzo y Cena
              </a>
            </li>
          </ul>
          <p className='titleOrder unstyle'>Cuenta:</p>
        </div>
        {/* { products && <ItemsBox products = {products} />} */}
        <ItemsBox products= {menu}/>
      </div>
    </Fragment>
  );
};


