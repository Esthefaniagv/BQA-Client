export const PatchProduct = (productId: number, productNewData) => {
    const token = localStorage.getItem('token');
    const options = {
        method: 'PATCH',
        body: JSON.stringify(productNewData),

        headers: {
            'content-type': 'application/json',
            authorization: 'Bearer ' + token,
        },
    };
    return fetch('https://bqapimock.onrender.com/products/' + productId, options);
}
