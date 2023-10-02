import GetOrders from '../services/TokenOrders';
import { useEffect, useState } from 'react';
import { PatchDelivered } from '../services/TokenDelivered'
import OrderTime from './OrderTime';
import OrderPrevTime from './OrderPrevTime';
import { CurrentOrder } from '../models/orders';
import { useNavigate } from 'react-router-dom';
import DoneOrderTime from './DoneOrderTime';

export const ChefView = () => {
  const navigate = useNavigate()
  const [allOrders, setAllOrders] = useState<CurrentOrder[]>([]);

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

  const handleDeliveredOrder = (orderIndex: number, shouldDelivered: boolean) => {
    PatchDelivered(orderIndex).then((res) => {
      res.json().then((updatedOrder) => {
        setAllOrders((prevState) => ([
          ...prevState.map((currentOrder: CurrentOrder) => (
            currentOrder.id === orderIndex && shouldDelivered ? updatedOrder : currentOrder
          ))
        ]))
      })
    })
  };

  const handleLogOut = () => {
    navigate('/')
  }


  return (
    <>
      <div className='home'>
        <div className="divIcons">
          <img className='burguerLogo' src="./public/img/hamburguerlogo.png" alt="burguer logo" />
          <img className='logOut' src="./public/img/exit.png" alt="cerrar sesion" onClick={handleLogOut} />
        </div>
        <hr />
        <div id='cardsOrder'>
          {allOrders.map((order: any) => (
            <div className="card">
              <div className="card-header">
                <p>Cliente: {order.client}</p>
                
              </div>
              <div className='allTimes'>
              <p>Inicio</p>
              <p>Finalizado</p>
              <p>Tiempo total</p>
              </div>
              <div className='allTimes'>
              <OrderPrevTime time={order.dataEntry} />
              <DoneOrderTime done={order.dateProcessed}/>
              {order.dateProcessed && <OrderTime start={order.dataEntry} done={order.dateProcessed} />}
              </div>
              <div className="card-body">
                <h5 className="card-title">Resumen del pedido</h5>
                {order.products.map((r) => (
                  <ul>
                    <li className="card-text" key={r.id}>{r.name}________x{r.qty}</li>
                  </ul>
                ))}
                <button className='unstyle buttonStatus' onClick={() => handleDeliveredOrder(order.id, true)}>
                  {order.status}
                </button>
              </div>
            </div>
          ))}
          {/* {allOrders.map((order: any) => (
            <div className='card' key={order.id}>
              <div className='clientNameAndTime'>
                <p>Cliente: {order.client}</p>
                <OrderPrevTime time={order.dataEntry} />

                {order.dateProcessed && <OrderTime start={order.dataEntry} done={order.dateProcessed} />}
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
          ))} */}
        </div>
      </div>
    </>
  );
};
