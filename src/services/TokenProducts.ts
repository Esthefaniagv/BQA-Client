export const GetProducts = () => {
    const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdyYWNlLmhvcHBlckBzeXN0ZXJzLnh5eiIsImlhdCI6MTY5NDg4OTcxNiwiZXhwIjoxNjk0ODkzMzE2LCJzdWIiOiIyIn0.q6k0Fa-nepi4LHsbLCTbr65-t299aX_EARi7LsEW5pw'
        },
    };
    return fetch('http://localhost:8080/products', options);
}

export default GetProducts;