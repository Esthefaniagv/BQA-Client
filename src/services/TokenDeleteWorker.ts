export const DeleteWorker = (id : number) => {
    const token = localStorage.getItem('token');
    const options = {
        method: 'DELETE',

        headers: {
            'content-type': 'application/json',
            authorization: 'Bearer ' + token,
        },
    };
    return fetch('http://localhost:8080/users/' + id, options)
}
export default DeleteWorker;
