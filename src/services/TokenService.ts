
export const GetPostWaiter = (payLoad) => {
    
    const options = {
        method: 'POST',
        body: JSON.stringify(payLoad),
        headers: {
            'content-type': 'application/json',
        },
    };
    return fetch('https://bqapimock.onrender.com/login', options)

}


