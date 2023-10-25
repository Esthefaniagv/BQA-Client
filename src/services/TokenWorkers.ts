export const GetWorkers = () => {
    const token = localStorage.getItem('token');
    const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'authorization': 'Bearer '+token
        },
    };
    return fetch('https://bqapimock.onrender.com/users', options);
}
export default GetWorkers;