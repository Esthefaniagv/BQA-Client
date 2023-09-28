
export const PatchDelivered = (orderIndex) => {
    const token = localStorage.getItem('token');
    const options = {
        method: 'PATCH',
        body: JSON.stringify({status: 'delivered',
        dateProcessed: new Date().getTime()}),

        headers: {
          'content-type': 'application/json',
          authorization: 'Bearer ' + token,
        },
      };
      return fetch('http://localhost:8080/orders/' + orderIndex, options);
}
