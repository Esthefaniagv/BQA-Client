export const GetOrders = () => {
    const token = localStorage.getItem('token');
    const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'authorization': 'Bearer '+token
        },
    };
    return fetch('https://bqapimock.onrender.com/orders', options);
}
export default GetOrders;