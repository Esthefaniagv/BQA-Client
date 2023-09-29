import GetOrders from '../services/TokenOrders';
import { useEffect, useState } from 'react';
import { PatchDelivered } from '../services/TokenDelivered'
import OrderTime from './OrderDate';
import OrderPrevTime from './OrderPrevTime';
import DoneOrderTime from './DoneOrderTime';

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
    PatchDelivered(orderIndex).then((res) => {
      res.json().then((updatedOrder) => {
        setAllOrders((prevState) => ([
          ...prevState.map((currentOrder) => (
            currentOrder.id === orderIndex && shouldDelivered ? updatedOrder : currentOrder
          ))
        ]))
      })
    })

    
  

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
                <OrderPrevTime time={order.dataEntry}/>
                
                {order.dateProcessed && <OrderTime start={order.dataEntry} done={order.dateProcessed}/>}
              </div>

              <div className='orderResume'>
                <p>Resumen del pedido:</p>
                {order.products.map((r) => (
                  <ul>
                    <li className='unstyle' key={r.id} >
                      {r.name} x{r.qty}
                    </li>
                  </ul>
                ))}
                <button className='unstyle buttonStatus' onClick={() => handleDeliveredOrder(order.id, true)}>
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
