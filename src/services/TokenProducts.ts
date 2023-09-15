export const GetProducts = () => {
    const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdyYWNlLmhvcHBlckBzeXN0ZXJzLnh5eiIsImlhdCI6MTY5NDc4NTc1MSwiZXhwIjoxNjk0Nzg5MzUxLCJzdWIiOiIyIn0.80JHY1KynqbeWR9CQWPmB-6DxjcHMN1kaDhH1dXHWzE'
        },
    };
    return fetch('http://localhost:8080/products', options);
}

export default GetProducts;