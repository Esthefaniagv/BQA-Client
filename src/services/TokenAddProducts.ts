export const PostProduct = (productData) => {
    const token = localStorage.getItem('token');
    const options = {
        method: 'POST',
        body: JSON.stringify(productData),
        // body: orderData,
        headers: {
            'content-type': 'application/json',
            authorization: 'Bearer ' + token,
        },
    };
    return fetch('https://bqapimock.onrender.com/products', options);
};
