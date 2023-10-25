export const PatchDelivered = (orderIndex) => {
    const token = localStorage.getItem('token');
    const options = {
        method: 'PATCH',
        body: JSON.stringify({ status: 'delivered' }),

        headers: {
            'content-type': 'application/json',
            authorization: 'Bearer ' + token,
        },
    };
    return fetch('https://bqapimock.onrender.com/orders/' + orderIndex, options);
}
