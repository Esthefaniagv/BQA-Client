
export const GetPostWaiter = (payLoad) => {
    
    const options = {
        method: 'POST',
        body: JSON.stringify(payLoad),
        headers: {
            'content-type': 'application/json',
        },
    };
    return fetch('http://localhost:8080/login', options)

}

export default GetPostWaiter;
