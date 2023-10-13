import GetOrders from '../services/TokenOrders';
import { useEffect, useState } from 'react';
import { PatchReady } from '../services/TokenReady';
import OrderTime from './OrderTime';
import OrderPrevTime from './OrderPrevTime';
import { CurrentOrder } from '../models/orders';
import { useNavigate } from 'react-router-dom';
import DoneOrderTime from './DoneOrderTime';

export const ChefView = () => {
  const navigate = useNavigate();
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

  const handleReadyOrder = (orderIndex: number, shouldBeReady: boolean) => {
    PatchReady(orderIndex).then((res) => {
      res.json().then((updatedOrder) => {
        setAllOrders((prevState) => [
          ...prevState.map((currentOrder: CurrentOrder) =>
            currentOrder.id === orderIndex && shouldBeReady
              ? updatedOrder
              : currentOrder
          ),
        ]);
      });
    });
  };

  const handleLogOut = () => {
    navigate('/');
  };

  const getColor = (orderId) => {
    if (orderId === 'pending') {
      return { color: 'white', background: '#EE4424' };
    }
    if (orderId === 'ready') {
      return { color: 'white', background: '#EEA734' };
    }
  };

  return (
    <>
      <div className='home'>
        <div className='divIcons'>
          <img
            className='burguerLogo'
            src='./public/img/hamburguerlogo.png'
            alt='burguer logo'
          />
          <h2 className='titleHeader'>Órdenes de Cocina</h2>
          <img
            className='logOut'
            src='./public/img/exit.png'
            alt='cerrar sesion'
            onClick={handleLogOut}
          />
        </div>
        <hr />

        <div id='cardsOrder'>
          {allOrders.map((order: any) => (
            <div className='card'>
              <div className='divCard'>
                <p className='pClient'>Cliente: {order.client}</p>
              </div>

              <table className='table table-bordered'>
                <thead>
                  <tr>
                    <th scope='col' className='titleTableChef'>
                      Detalle
                    </th>
                    <th scope='col' className='titleTableChef'>
                      Inicio
                    </th>
                    <th scope='col' className='titleTableChef'>
                      Finalizado
                    </th>
                    <th scope='col' className='titleTableChef'>
                      Tiempo
                    </th>
                    <th scope='col' className='titleTableChef'>
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className='date'>
                  <tr>
                    <th>
                    <button
                      className='btn btn-default btn-xs'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target={`#order${order.id}`}
                      aria-expanded='false'
                      aria-controls={`order${order.id}`}
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='20'
                        height='20'
                        fill='currentColor'
                        className='bi bi-eye eyeColor'
                        viewBox='0 0 16 16'
                      >
                        <path d='M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z' />
                        <path d='M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z' />
                      </svg>
                    </button>
                    </th>
                    <th>
                     <p className='pTh'> <OrderPrevTime time={order.dataEntry} /></p>
                    </th>
                    <th >
                     <p className='pTh'> <DoneOrderTime done={order.dateProcessed} /> </p>
                    </th>
                    <th >
                      <p className='pTh'>{order.dateProcessed && (
                        <OrderTime
                          start={order.dataEntry}
                          done={order.dateProcessed}
                        /> 
                      )}</p>
                    </th>
                    <th>
                      <button
                        style={getColor(order.status)}
                        className='unstyle buttonStatus'
                        onClick={() => handleReadyOrder(order.id, true)}
                      >
                        {order.status}
                      </button>
                    </th>
                  </tr>

                  <tr className='collapse' id={`order${order.id}`}>
                    <td colSpan={6}>
                      <h5 className='titlecard'>Resumen del pedido</h5>
                      {order.products.map((r) => (
                        <ul className='ulListProducts unstyle'>
                          <li className='card-text' key={r.id}>
                            <input
                              className='checkProducts'
                              type='checkbox'
                              aria-label='Checkbox for following text input'
                            />
                            {r.name}________x{r.qty}
                          </li>
                        </ul>
                      ))}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
