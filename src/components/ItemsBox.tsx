import { Fragment, useEffect, useState } from 'react';
import GetProducts from '../services/TokenProducts';
import { ItemsBoxResume } from './ItemsBoxResume';

export const ItemsBox = () => {
  let IProduct: {
    id: number;
    name: string;
    price: number;
    image: string;
    type: string;
    dateEntry: string;
    qty: number;
  };
  const [products, setProducts] = useState<(typeof IProduct)[]>([]);

  //seleccionar el id, guardarlo y mostrarlo en itemsBoxResume
  const [selectedProduct, setSelectedProduct] = useState<typeof IProduct[]>([]);

  // Para que se agreguen varios productos
  const addSelectedProduct = (product: typeof IProduct) => {
    product.qty = 1
    setSelectedProduct([...selectedProduct, product]);
  };

  //Muestra producto seleccionado
  //console.log(1111, selectedProduct);

  useEffect(() => {
    GetAllProducts();
  }, []);

  const GetAllProducts = () => {
    GetProducts()
      .then((r) => {
        if (r.status === 200) {
          r.json().then((data) => {
            console.log(data);
            setProducts(data);
          });
        }
      })
      .catch((e) => {
        console.log('soy catch', e);
      });
  };

  console.log({ products });

  return (
    <Fragment>
      <div className='divSections'>
        <section>
          <div className='ProductContainer'>
            {products.map((product) => {
              return (
                <>
                  <div className='ProductImgInfo' key={product.id}>
                    <div className='ProductImg'>
                      <img src={product.image} alt='imagen de producto' />
                    </div>
                    <div className='productInfo'>
                      <p className='nameProduct'>{product.name}</p>
                      <p className='priceProduct'>${product.price}</p>
                      <button
                        className='addProduct'
                        type='button'
                        onClick={() => addSelectedProduct(product)}
                      >
                        Agregar
                      </button>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </section>
        {/* <ClientOrder selectedProduct={selectedProduct}/> */}
        <ItemsBoxResume selectedProduct={selectedProduct} />
      </div>
    </Fragment>
  );
};
