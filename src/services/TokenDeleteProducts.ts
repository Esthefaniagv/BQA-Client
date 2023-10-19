export const DeleteProduct = (id: number) => {
    const token = localStorage.getItem('token');
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            authorization: 'Bearer ' + token,
        },
    }
    return fetch('http://localhost:8080/products/' + id, options);
}

export default DeleteProduct;