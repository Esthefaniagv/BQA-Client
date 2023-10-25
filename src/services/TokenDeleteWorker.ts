export const DeleteWorker = (id : number) => {
    const token = localStorage.getItem('token');
    const options = {
        method: 'DELETE',

        headers: {
            'content-type': 'application/json',
            authorization: 'Bearer ' + token,
        },
    };
    return fetch('https://bqapimock.onrender.com/users/' + id, options)
}
export default DeleteWorker;
