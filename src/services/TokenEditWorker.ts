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
    return fetch('https://bqapimock.onrender.com/users/' + workerId, options);
}