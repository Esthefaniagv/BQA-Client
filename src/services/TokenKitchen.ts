export const postKitchen = (orderData) => {
  const token = localStorage.getItem('token');
  const options = {
    method: 'POST',
    body: JSON.stringify(orderData),
    // body: orderData,
    headers: {
      'content-type': 'application/json',
      authorization: 'Bearer ' + token,
    },
  };
  return fetch('http://localhost:8080/orders', options);
};
