import { Fragment, useEffect, useState } from "react";
import GetProducts from "../services/TokenProducts";

export const ItemsBox = () => {

  let IProduct: {
    id: number;
    name: string;
    price: number;
    image: string;
    type: string;
    dateEntry: string;
  };
  const [products, setProducts] = useState<typeof IProduct[]>([]);

  useEffect(() => {
    GetAllProducts();
  }, [])

  const GetAllProducts = () => {
    GetProducts()
      .then((r) => {
        if (r.status === 200) {
          r.json().then((data) => {
            console.log(data)
            setProducts(data)
          });
        }
      })
      .catch((e) => {
        console.log('soy catch', e);
      });
  }

  console.log({ products })

  return (
    <Fragment>
      <section>
        <div className="ProductContainer">
          {products.map((product) => {
            return (
              <>
              <div className="ProductImg">
                <img src={product.image} alt='imagen de producto' />
              </div>
              <div className="ProductInfo">
                <p>{product.name}</p>
                <p>{product.price}</p>
                <button>Agregar</button>
              </div>
              </>
            )
          })};
        </div>
      </section>

    </Fragment>
  )

};