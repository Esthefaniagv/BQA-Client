
export const PatchReady = (orderIndex: number) => {
    const token = localStorage.getItem('token');
    const options = {
        method: 'PATCH',
        body: JSON.stringify({status: 'ready',
        dateProcessed: new Date().getTime()}),

        headers: {
          'content-type': 'application/json',
          authorization: 'Bearer ' + token,
        },
      };
      return fetch('https://bqapimock.onrender.com/orders/' + orderIndex, options);
}
