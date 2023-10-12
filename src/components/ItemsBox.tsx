import { Fragment, useState } from 'react';
import { ItemsBoxResume } from './ItemsBoxResume';
import { IProduct } from '../models/orders';

export const ItemsBox = ({products}) => {

  // const [products, setProducts] = useState<(typeof IProduct)[]>([]);

  //seleccionar el id, guardarlo y mostrarlo en itemsBoxResume
  const [selectedProduct, setSelectedProduct] = useState<IProduct[]>([]);

  //guardar valor de cuenta total 
  const [total, setTotal] = useState(0)

  // Para que se agreguen varios productos en la orden de pedido 
  const addSelectedProduct = (product: IProduct) => {
    if (selectedProduct.some(x => x.id === product.id)) {
      setSelectedProduct((prevState) => ([
        ...prevState.map((currentProduct) => ({
          ...currentProduct,
          qty: currentProduct.qty + 1
        }))
      ]))
      // setSelectedProduct([...selectedProduct])
    } else {
      setSelectedProduct([...selectedProduct, {
        ...product,
        qty: 1
      }]);
    }
  };

  const modifyQty = (selectedProductIndex, shouldAdd) => {
    setSelectedProduct((prevState) => ([
      ...prevState.map((currentProduct) => (
        currentProduct.id === selectedProductIndex ? {
          ...currentProduct,
          qty: shouldAdd ? currentProduct.qty + 1 : currentProduct.qty - 1
        } : currentProduct
      ))
    ]))
  }

  const deleteProduct = (selectedProductIndex) => {
    setSelectedProduct((prevState) => ([
      ...prevState.filter((currentProduct) => (
        currentProduct.id !== selectedProductIndex 
      ))
    ]))
  }

  const totalCheck = () => {
      let total = 0;
      selectedProduct.forEach(order => {
        total += order.price * order.qty;
      });
  
      setTotal(total)
      console.log('variable total', {total})
  }

  

  // useEffect(() => {
  //   GetAllProducts();
  // }, []);

  // const GetAllProducts = () => {
  //   GetProducts()
  //     .then((r) => {
  //       if (r.status === 200) {
  //         r.json().then((data) => {
  //           // console.log(data);
  //           setProducts(data);
  //         });
  //       }
  //     })
  //     .catch((e) => {
  //       console.log('soy catch', e);
  //     });
  // };

  // console.log({ products });

  return (
    <Fragment>
      <div className='divSections'>
        <section>
          <div className='ProductContainer'>
            {products.map((product) => {
              return (
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
              );
            })}
          </div>
        </section>
        {/* <ClientOrder selectedProduct={selectedProduct}/> */}
        <ItemsBoxResume selectedProduct={selectedProduct} modifyQty={modifyQty} deleteProduct={deleteProduct} total={total} totalCheck={totalCheck} />
      </div>
    </Fragment>
  );
};
