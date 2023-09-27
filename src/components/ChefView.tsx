import GetOrders from '../services/TokenOrders';
import { useEffect, useState } from 'react';
import {PatchDelivered} from '../services/TokenDelivered' 

export const ChefView = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    GetOrders()
      .then((res) => res.json())
      .then((data) => {
        setAllOrders(data);
      })
      .catch((e) => {
        console.log('soy catch', e);
      });
  }, []);

  const handleDeliveredOrder = (orderIndex, shouldDelivered) => {
    console.log(allOrders)
    PatchDelivered(orderIndex).then((res)=>{
      res.json().then((updatedOrder)=>{
        setAllOrders((prevState) => ([
          ...prevState.map((currentOrder)=>(
            currentOrder.id === orderIndex && shouldDelivered ? updatedOrder : currentOrder
          ))
        ]))
      })
    })
     

 console.log(allOrders)

  };

  return (
    <>
      <div className='home'>
        <div className='chefContainer'>
          <h2 className='titleChefHome'>Bienvenid@!</h2>
        </div>
        <hr />
        <div id='cardsOrder'>
          {allOrders.map((order: any) => (
            <div className='card' key={order.id}>
              <div className='clientNameAndTime'>
                <p>Cliente: {order.client}</p>
                <p>{order.dataEntry}</p>
              </div>

              <div className='orderResume'>
                <p>Resumen del pedido:</p>
                {/* {JSON.stringify(order)} */}
                {order.products.map((r) => (
                  <ul>
                    <li className='unstyle'>
                      {r.name} x{r.qty}
                    </li>
                  </ul>
                ))}

                <button className='unstyle buttonStatus' onClick={() =>handleDeliveredOrder(order.id, true)}>
                  {order.status}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
