export const PatchWorker = (workerId: number, workerNewData) => {
    const token = localStorage.getItem('token');
    const options = {
        method: 'PATCH',
        body: JSON.stringify(workerNewData),

        headers: {
            'content-type': 'application/json',
            authorization: 'Bearer ' + token,
        },
    };
    return fetch('http://localhost:8080/users/' + workerId, options);
}