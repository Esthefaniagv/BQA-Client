export const GetProducts = () => {
    const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdyYWNlLmhvcHBlckBzeXN0ZXJzLnh5eiIsImlhdCI6MTY5NDkxODExNCwiZXhwIjoxNjk0OTIxNzE0LCJzdWIiOiIyIn0.JWbAskzKIWmVy7WcTb_4YsUfBtO0VOLvLyHnNSFIMcg'
        },
    };
    return fetch('http://localhost:8080/products', options);
}

export default GetProducts;