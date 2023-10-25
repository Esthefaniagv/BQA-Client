export const DeleteProduct = (id: number) => {
    const token = localStorage.getItem('token');
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            authorization: 'Bearer ' + token,
        },
    }
    return fetch('https://bqapimock.onrender.com/products/' + id, options);
}

export default DeleteProduct;