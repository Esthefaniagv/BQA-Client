import GetOrders from '../services/TokenOrders';
import { useEffect, useState } from 'react';

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

  return (
    <>
      <div className='home'>
        <div className='chefContainer'>
          <h2 className='titleChefHome'>Bienvenid@!</h2>
        </div>
        {allOrders.map((order: any) => (
          <span>{order.client}</span>
        ))}
        <hr />
      </div>
    </>
  );
};
