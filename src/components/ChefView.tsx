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
          <h2>Pedidos</h2>
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
                <tbody className='dateChef'>
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
                          width='25'
                          height='25'
                          fill='currentColor'
                          className='bi bi-caret-down-fill'
                          viewBox='0 0 16 16'
                        >
                          <path d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z' />
                        </svg>
                      </button>
                    </th>
                    <th>
                      <OrderPrevTime time={order.dataEntry} />
                    </th>
                    <th>
                      <DoneOrderTime done={order.dateProcessed} />
                    </th>
                    <th>
                      {order.dateProcessed && (
                        <OrderTime
                          start={order.dataEntry}
                          done={order.dateProcessed}
                        />
                      )}
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

                            {r.name}
                            <span className='product-qty'>
                              {Array.from({ length: 35 - r.name.length }).map(
                                (_, index) => (
                                  <span key={index}>.</span>
                                )
                              )}{' '}
                              x{r.qty}
                            </span>

                            {/* {r.name}________x{r.qty} */}
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
