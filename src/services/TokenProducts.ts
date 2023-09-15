export const GetProducts = () => {
    const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdyYWNlLmhvcHBlckBzeXN0ZXJzLnh5eiIsImlhdCI6MTY5NDc5MzY2MSwiZXhwIjoxNjk0Nzk3MjYxLCJzdWIiOiIyIn0.Qm8st7ttE4Dv_G6xr6XLnSZ7Vx4djUZFvSuFuoxbVCE'
        },
    };
    return fetch('http://localhost:8080/products', options);
}

export default GetProducts;