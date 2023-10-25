export const GetProducts = () => {
  const token = localStorage.getItem('token');
  const options = {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      authorization: 'Bearer ' + token,
    },
  };
  return fetch('https://bqapimock.onrender.com/products', options);
};

export default GetProducts;
