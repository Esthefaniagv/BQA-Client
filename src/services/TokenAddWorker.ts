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
    return fetch('http://localhost:8080/users', options);
  };
  
