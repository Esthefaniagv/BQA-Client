export const GetProducts = () => {
  const token = localStorage.getItem('token');
  const options = {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      authorization: 'Bearer ' + token,
    },
  };
  return fetch('http://localhost:8080/products', options);
};

export default GetProducts;
