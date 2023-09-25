export const postKitchen = (orderData) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(orderData),
    // body: orderData,
    headers: {
      'content-type': 'application/json',
      authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdyYWNlLmhvcHBlckBzeXN0ZXJzLnh5eiIsImlhdCI6MTY5NTY2ODMzNywiZXhwIjoxNjk1NjcxOTM3LCJzdWIiOiIyIn0.fMfYb3Bm6SPKMGgt6eyE92qe5lqgr1EL-zQ7j8A3bUY',
    },
  };
  return fetch('http://localhost:8080/orders', options);
};
