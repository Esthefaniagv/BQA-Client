export const PostWorker = (userData) => {
    const token = localStorage.getItem('token');
    const options = {
      method: 'POST',
      body: JSON.stringify(userData),
      // body: orderData,
      headers: {
        'content-type': 'application/json',
        authorization: 'Bearer ' + token,
      },
    };
    return fetch('https://bqapimock.onrender.com/users', options);
  };
  
